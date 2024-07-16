from typing import Any
from fastapi import HTTPException
from dotenv import load_dotenv

from sqlalchemy import select, update, delete

from src.databases.Postgres.Client import PostgresClient
from src.databases.Postgres.Models.UserModels import User, Posts, Folowers
from sqlalchemy.orm import joinedload, selectinload, Mapped, load_only



load_dotenv('.env')


class PostgresUserRequest(PostgresClient):

    async def add_user(self, email: str, password: str, name: str) -> dict[str | Any]:
        async with self.async_session() as session:
            try:
                user = User(email=email, password=password, name = name)
                session.add(user)
                await session.commit()
                return {'message': f'user {email} added successful'}
            except Exception as _ex:
                await session.rollback()
                raise HTTPException(status_code=409, detail='Some error in db work')
    
    async def get_user(self, id: str | None = None, email: str | None = None ) -> Any:
        async with self.async_session() as session:
            if id:
                result = await session.execute(select(User).where(User.id == id))
            elif email:
                result = await session.execute(select(User).filter_by(email = email))

            if (result_user:= result.unique().scalars().first()) is not None:
                return {
                        'email': result_user.email,
                        'name': result_user.name,
                        'post' : [{
                            'id': user.id,
                            'user_ud': user.id,
                            'data': user.data,
                            'likes': user.likes
                        } for user in result_user.posts],
                        'followers': [{
                            'id': user.id,
                            'name': user.name
                        } for user in result_user.folowers]
                        
                    }
            raise HTTPException(status_code=404, detail='User not found')
        
        
    async def check_user(self, email: str | None = None, id: int | None = None) -> Any:
        if email or id:
            async with self.async_session() as session:
                if email:
                    result = await session.execute(select(User).filter_by(email = email))
                elif id: 
                    result = await session.execute(select(User).filter_by(id = id))
                if (user:=result.scalars().first()) is not None:
                    return user.password
                return False
        raise HTTPException(status_code=404, detail='Expected 1 value')
    
    async def get_all_users(self) -> Any:
        async with self.async_session() as session:
            result = await session.execute(select(User))
            return [   
                {
                    'id': user.id, 'email': user.email, 
                    'name': user.name, 'description': user.description
                }
                    for user in result.unique().scalars().all()
            ]
        
    async def update_user(self, id: int, updated_args:dict) -> dict[str | Any]:
        async with self.async_session() as session:
            try:
                await session.execute(update(User).where(User.id == id).values(updated_args))
                return await session.commit()
            except:
                await session.rollback()
                raise HTTPException(status_code=409, detail='Some error in db work')

    async def subscribe(self, subscriber_id: int, user_id: int):
        
            async with self.async_session() as session:
                try:
                    follower = Folowers(user_id = user_id, follower_id = subscriber_id)
                    session.add(follower)
                    await session.commit()
                    return {'message': f'{subscriber_id} subscribed to {user_id}'}
                except Exception as _ex:
                    await session.rollback()
                    raise HTTPException(status_code=409, detail=f'Some error in db work {_ex}')
        
                
    async def unsubscribe(self, subscriber_id: int, user_id: int):
            async with self.async_session() as session:
                try:
                    await session.execute(delete(Folowers).where(Folowers.user_id == user_id, Folowers.follower_id == subscriber_id))
                    await session.commit()
                    return {'message': f'{subscriber_id} unsubscribed from {user_id}'}
                except Exception as _ex:
                    await session.rollback()
                    raise HTTPException(status_code=409, detail=f'Some error in db work {_ex}')
    
    async def get_subscribers(self, user_id: int) -> Any:
        async with self.async_session() as session:
            result = await session.execute(
                select(Folowers).where(Folowers.user_id == user_id)
            )
            if not result:
                raise HTTPException(status_code=404, detail='User not found')
            return  [
                        {
                            'user_id': followers.user_id, 
                            'subscriber_id': followers.follower_id
                        } for followers in result.unique().scalars().all() 
                
                    ]
    async def delete_account(self, user_id: int):
        async with self.async_session() as session:
            try:
                await session.execute(delete(User).where(User.id == user_id))
                await session.commit()
                return {'message': f'User {user_id} deleted successful'}
            except Exception as _ex:
                await session.rollback()
                raise HTTPException(status_code=409, detail=f'Some error in db work {_ex}')
            
    
            
