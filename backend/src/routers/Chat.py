from fastapi import Depends, APIRouter, Header
from src.services.User.auth.JWTAuth import JWTAuth
from src.validations.ChatValidations.ChatsValidations import GPTValidation

import g4f

from typing import Any

from aiohttp import ClientSession   

ChatRouer = APIRouter()



@ChatRouer.post('/chat/gpt')
async def chat_with_gpt(chat: GPTValidation, Bearer: str = Header(),  verify = Depends(JWTAuth))->Any:
    if await verify.verify(Bearer, 'access'):
        ...


@ChatRouer.post('/chat/withuser')
async def chat_with_user(Bearer: str = Header(), verify = Depends(JWTAuth))->Any:
    if await verify.verify(Bearer, 'access'):
        ...


@ChatRouer.post('/chat/withgroup')
async def chat_with_group(Bearer: str = Header(), verify = Depends(JWTAuth))->Any:
    if await verify.verify(Bearer, 'access'):
        ...

@ChatRouer.post('/chat/withhelper')
async def chat_with_helper(Bearer: str = Header(), verify = Depends(JWTAuth))->Any:
    if await verify.verify(Bearer, 'access'):
        ...

@ChatRouer.put('/chat/editmessage')
async def edit_message(Bearer: str = Header(), verify = Depends(JWTAuth))->Any:
    if await verify.verify(Bearer, 'access'):
        ...

@ChatRouer.delete('/chat/deletemessage')
async def delete_message(Bearer: str = Header(), verify = Depends(JWTAuth))->Any:
    if await verify.verify(Bearer, 'access'):
        ...