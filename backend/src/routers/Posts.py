from typing import Any
from fastapi import Depends, Header, APIRouter
from src.validations.PostsValidation.UserPostsValidation import Posts
from src.databases.Postgres.Requests.PostsRequests import PostgresPostRequests
from src.services.User.auth.JWTAuth import JWTAuth

PostsRoueter = APIRouter()

@PostsRoueter.get("/posts/getposts")
async def get_posts(
    user_id: int, Bearer: str = Header(), verify = Depends(JWTAuth), data = Depends(PostgresPostRequests)
)->Any:
     if await verify.verify(Bearer, 'access'):
         return await data.get_user_posts(user_id = user_id)

@PostsRoueter.post("/posts/createpost")
async def create_post(
    fields: Posts, Bearer: str = Header(), verify = Depends(JWTAuth), data = Depends(PostgresPostRequests)
)->Any:
    if await verify.verify(Bearer, 'access'):
        return await data.add_post(user_id = fields.user_id, body = fields.body)

@PostsRoueter.put('/posts/edit')
async def update_post(id: int, Authorization: str = Header()):
    ...

@PostsRoueter.get('/posts/getcurrentpost')
async def get_current_post(
    id: int, Bearer: str = Header(), verify = Depends(JWTAuth), data = Depends(PostgresPostRequests)
)->Any:
    if await verify.verify(Bearer, 'access'):
        return await data.get_post(post_id = id)

@PostsRoueter.delete('/posts/deletepost')
async def delete_post(
    post_id: int, Bearer: str = Header(), verify = Depends(JWTAuth), data = Depends(PostgresPostRequests)
)->Any:
    if await verify.verify(Bearer, 'access'):
        return await data.delete_post(post_id = post_id)