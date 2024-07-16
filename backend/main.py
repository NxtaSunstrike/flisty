from fastapi import FastAPI
import uvicorn
from src.databases.Postgres.Client import PostgresClient
from fastapi.middleware.cors import CORSMiddleware

import asyncio
from src.routers.Auth import AuthRouter
from src.routers.User import UserRouter
from src.routers.Chat import ChatRouer
from src.routers.Posts import PostsRoueter
from src.routers.Teams import TeamsRouter

app = FastAPI()

app.include_router(AuthRouter, tags=['Auth'])
app.include_router(UserRouter, tags=['User'])
app.include_router(ChatRouer, tags=['Chat'])
app.include_router(PostsRoueter, tags=['Posts'])
app.include_router(TeamsRouter, tags=['Teams'])

app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://127.0.0.1:5173', 'http://localhost:5173'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


async def create_tables():
    db_client = PostgresClient()
    await db_client.init_models()

if __name__ == '__main__':
    asyncio.run(create_tables())
    uvicorn.run('main:app', host='127.0.0.1', port=8000, reload=True)

       


