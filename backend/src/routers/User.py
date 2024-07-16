from fastapi import Header, APIRouter, Depends

from typing import Any

from src.databases.Postgres.Requests.UserRequests import PostgresUserRequest
from src.services.User.auth.JWTAuth import JWTAuth
from src.validations.UserValidations.UserActionsValidation import Subscribe


UserRouter = APIRouter()


@UserRouter.get('/user/allusers')
async def get_all_users(
    Bearer: str = Header(), verify = Depends(JWTAuth), data = Depends(PostgresUserRequest)
)->Any:
    if await verify.verify(Bearer, 'access'):
        return await data.get_all_users()
    

@UserRouter.post('/user/subscribe')
async def subscribe_to_user(
    fields: Subscribe,  Bearer: str = Header(), verify = Depends(JWTAuth), data = Depends(PostgresUserRequest)
)->Any:
    if await verify.verify(Bearer, 'access'):
        return await data.subscribe(user_id = fields.user_id, subscriber_id = fields.subscriber_id)


@UserRouter.get('/users/getuser')
async def get_user(
    Bearer: str = Header(), verify = Depends(JWTAuth), data = Depends(PostgresUserRequest), user_id: int = int
)->Any:
    if await verify.verify(Bearer, 'access'):
        return await data.get_user(id = user_id)
    
@UserRouter.delete('/users/unscribe')
async def unsubscribe(
    fields: Subscribe, Bearer: str = Header(), verify = Depends(JWTAuth), data = Depends(PostgresUserRequest)
)->Any:
    if await verify.verify(Bearer, 'access'):
        return await data.unsubscribe(user_id = fields.user_id, subscriber_id = fields.subscriber_id)
    
@UserRouter.get('/users/getsubscribers')
async def get_subscribers(
    Bearer: str = Header(), verify = Depends(JWTAuth), data = Depends(PostgresUserRequest), user_id: int = int
)->Any:
    if await verify.verify(Bearer, 'access'):
        return await data.get_subscribers(user_id = user_id)


@UserRouter.put('/users/editprofile')
async def edit_profile(
    Bearer: str = Header(), verify = Depends(JWTAuth), data = Depends(PostgresUserRequest)
)->Any:
    if await verify.verify(Bearer, 'access'):
        ...