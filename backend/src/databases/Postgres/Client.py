from typing import Any
import os
from dotenv import load_dotenv

from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.ext.asyncio import create_async_engine
from sqlalchemy.orm import sessionmaker

from src.databases.Postgres.Models.UserModels import Base


load_dotenv('.env')


class PostgresClient:

    def __init__(self)->None:
        self.DATABASE_URL = os.getenv('DATABASE_URL')
        self.engine = create_async_engine(self.DATABASE_URL, echo=True)
        self.async_session = sessionmaker(
            self.engine, class_=AsyncSession, expire_on_commit=False
        )
        
    async def init_models(self)->Any:
        async with self.engine.begin() as conn:
            await conn.run_sync(Base.metadata.drop_all)
            await conn.run_sync(Base.metadata.create_all)
