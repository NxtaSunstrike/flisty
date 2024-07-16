from typing import Any
import json
from fastapi import HTTPException
from dotenv import load_dotenv

import redis.asyncio as redis

from src.settings.settings import RedisSettings


load_dotenv('.env')

class RedisClient(RedisSettings):
    
    def __init__(self):
        super().__init__()
        self._client = redis.Redis(host=self.host, port=self.port)


    async def CreateUserData(self, email: str, data: dict) -> None:
        await self._client.set(name = email, value=json.dumps(data))

    
    async def CheckCode(self, email: str, code: str) -> dict[str : str | Any]:
        if await self._client.get(name = email):
            data = json.loads(await self._client.get(name = email))
            if data['code'] == code:
                return data
            raise HTTPException(status_code=401, detail='Wrong code')
        raise HTTPException(status_code=401, detail='User not found')
    
    async def DeleteCache(self, email: str) -> None:
        await self._client.delete(email)
