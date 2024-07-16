import jwt
from typing import Any
from datetime import datetime, timedelta
import uuid

from fastapi import HTTPException, Cookie

from src.settings.settings import JWTSettings
from src.databases.Postgres.Requests.UserRequests import PostgresUserRequest

class JWTAuth(JWTSettings):

    def __init__(self) -> None:
        super().__init__()
        self._id = str(uuid.uuid4())
        self._timenow = datetime.utcnow()
        self._timedelta = timedelta(minutes=self.access_token_expire_minutes)
        self._PostgresClient = PostgresUserRequest()

    async def accessToken(self, payload: dict):
        with open(''.join(self.private_key), 'r') as f:
            private_key = f.read()
        data = payload.copy()
        data.update(
            {
                'exp': self._timenow + self._timedelta, 'type': 'access', 'id' : self._id
            }
        )
        encode = jwt.encode(data, private_key, algorithm=self.algorithm)
        return encode

    async def refreshToken(self, email: str):
        with open(''.join(self.private_key), 'r') as f:
            private_key = f.read()
        data = {
                'exp': self._timenow + timedelta(days=self.refresh_token_expire_days), 'type': 'refresh', 'id' : self._id, 'email':email
            }
        encode = jwt.encode(data, private_key, algorithm=self.algorithm)
        return encode

    async def decode(self, token: str | bytes):
        with open(''.join(self.public_key), 'r') as f:
            public_key = f.read()
        return jwt.decode(jwt=token, key=public_key, algorithms=self.algorithm)

    async def verify(self, token: str | bytes,  type: str):
        try:
            access_decoded = await self.decode(token)
        except:
            raise HTTPException(status_code=401, detail='Invalid Token')
        if access_decoded['type'] != type:
            raise HTTPException(status_code=401, detail=f'Invalid Token {access_decoded['type']} expected {type} ')
        return True
    
    async def RefreshData(self, token: str, type: str):
        if await self.verify(token = token, type = type) is True:
            decoded = await self.decode(token)
            # userData = await self._PostgresClient.get_user(email = decoded['email'])
            return {
                'access_token': await self.accessToken({
                    'email': decoded['email']
                }),
                'refresh_token':token
            }
        raise HTTPException(status_code=401, detail='Invalid Token')