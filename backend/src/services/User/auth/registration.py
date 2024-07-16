from random import sample
from fastapi import HTTPException, Response
from tasks import Send
from typing import Any

from src.databases.Redis.RedisClient import RedisClient
from src.databases.Postgres.Requests.UserRequests import PostgresUserRequest as PostgresClient
from src.services.User.auth.JWTAuth import JWTAuth 



class Register():

    def __init__(self, email: str, password: str, name: str) -> None:
        self.name = name
        self.email = email
        self.password = password
        self._RedisClient = RedisClient()
        self._PostgresClient = PostgresClient()
        self._code = int(''.join(sample('123456789', 6)))
        
    async def Registration(self)->dict[str | Any]:
        if not await self._PostgresClient.check_user(email=self.email):
            await self._RedisClient.CreateUserData(email = self.email, data = {
                'code' : self._code, 'password': self.password, 'name': self.name
                }
            )
            Send.delay(email=self.email, code=self._code)
            return {'message' : 'ok'}
        raise HTTPException(status_code=401, detail='User already exists')


class Confirm():

    def __init__(self, email: str, code: int) -> None:
        self.email = email
        self.code = code
        self._RedisClient = RedisClient()
        self._JWTAuth = JWTAuth()
        self._PostgresClient = PostgresClient()
        self._counter = 0

    async def Confirmation(self):
        if data:= await self._RedisClient.CheckCode(email=self.email, code=self.code):
            user_password = data['password']
            user_name = data['name']
            await self._PostgresClient.add_user(email=self.email, password=user_password,name=user_name)
            await self._RedisClient.DeleteCache(email=self.email)
            return {
                'access': await self._JWTAuth.accessToken(
                    {'email':self.email, 'name': user_name}
                    ),
                'refresh': await self._JWTAuth.refreshToken(email=self.email)
                }
    

