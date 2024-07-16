from typing import Any
from fastapi import HTTPException
from dotenv import load_dotenv

from sqlalchemy import select, update, delete

from src.databases.Postgres.Client import PostgresClient
from src.databases.Postgres.Models.UserModels import User, Folowers, Posts
from sqlalchemy.orm import joinedload, selectinload, Mapped, load_only


class PostgresPostRequests(PostgresClient):

    async def add_post(self, user_id: int, body: str) -> dict[str | Any]:
        async with self.async_session() as session:
            post = Posts(user_id=user_id, data = body, likes = 0)
            session.add(post)
            await session.commit()
            await session.refresh(post)
            return {'message': 'Post added'}

    async def get_post(self, post_id: int) -> dict[str | Any]:
        async with self.async_session() as session:
            post = await session.execute(select(Posts).where(Posts.id == post_id))
            data = post.scalars().first()
            if not data:
                raise HTTPException(status_code=404, detail='Post not found')
            return {
                'post_id': data.id, 'body': data.data, 'likes': data.likes, 'post_owner_id': data.user_id
            }
        
    async def get_user_posts(self, user_id: int) -> dict[str | Any]:
        async with self.async_session() as session:
            posts = await session.execute(select(Posts).where(Posts.user_id == user_id))
            data = posts.scalars().all()
            if not data:
                raise HTTPException(status_code=404, detail='Posts not found')
            return [
                {
                    'post_id': post.id, 'body': post.data, 'likes': post.likes, 'post_owner_id': post.user_id
                } for post in data
            ]

    # async def update_post(self, post_id: int, text: str | None = None, image: str | None = None) -> dict[str | Any]:
    #     async with self.async_session() as session:
    #         post = await session.get(Posts, post_id)

    async def delete_post(self, post_id: int) -> dict[str | Any]:
        async with self.async_session() as session:
            post = await session.get(Posts, post_id)
            if not post:
                raise HTTPException(status_code=404, detail='Post not found')
            await session.delete(post)
            await session.commit()
            return {'message': 'Post deleted'}