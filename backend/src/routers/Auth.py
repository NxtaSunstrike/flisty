from fastapi import APIRouter, Header, Depends, Response, Cookie
from src.validations.UserValidations.AuthValidations import RegValidation, ConfirmValidation, Login
from src.services.User.auth.registration import Register, Confirm
from src.services.User.auth.JWTAuth import JWTAuth
from src.databases.Postgres.Requests.UserRequests import PostgresUserRequest
from typing import Any
from fastapi import HTTPException

AuthRouter = APIRouter()

@AuthRouter.post('/user/register')
async def login(RegistrationData: RegValidation):
    RegistrationUser = Register(
        email=RegistrationData.email, password=RegistrationData.password, 
        name = RegistrationData.name
    )
    return await RegistrationUser.Registration()


@AuthRouter.post('/user/confirm')
async def confirm(ConfirmationData: ConfirmValidation, response: Response, verify = Depends(JWTAuth)):
    ConfirmUserData = Confirm(email=ConfirmationData.email, code=ConfirmationData.code)
    if data:=  await ConfirmUserData.Confirmation():
        response.set_cookie(
            key='refresh', value=await verify.refreshToken(
                {'email':ConfirmUserData.email}
            ), httponly=True
        )
        return data
    return data


@AuthRouter.get('/user/refresh')
async def refreshToken(refresh = Cookie(), verify = Depends(JWTAuth)):
    print(refresh)
    return await verify.RefreshData(refresh, 'refresh')


@AuthRouter.put('/user/forgotpassword')
async def forgotPassword():
    ...

@AuthRouter.delete('/user/deleteaccount')
async def delete_account(
    user_id: int, Bearer: str = Header(), verify = Depends(JWTAuth), data = Depends(PostgresUserRequest)
)->Any:
    if await verify.verify(Bearer, 'access'):
        return await data.delete_account(user_id = user_id)


@AuthRouter.post('/user/login')
async def get_all_users(
    LoginData: Login, response: Response, verify = Depends(JWTAuth), data = Depends(PostgresUserRequest)
)->Any:
    if await data.check_user(LoginData.email) == LoginData.password:
        response.set_cookie(
            key='refresh', value=await verify.refreshToken(
                {'email':LoginData.email}
            ), httponly=True
        )
        return {
            'access': await verify.accessToken(
                {'email':LoginData.email}),
            'user': await data.get_user(email=LoginData.email)
            }
    
    raise HTTPException(status_code=401, detail='Unauthorized')