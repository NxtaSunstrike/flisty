from pydantic import BaseModel, field_validator, model_validator
import re
from fastapi import HTTPException

class RegValidation(BaseModel):
    name: str
    email: str
    password: str 

    @field_validator('email')
    @classmethod
    def validate_email(cls, value):
        if '@' not in value:
            raise HTTPException(status_code=422, detail='Invalid email')
        return value
    
    @field_validator('password')
    @classmethod
    def validate_password(cls, value):
        valid_passord = re.compile(r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$')
        if not valid_passord.match(value):
            raise HTTPException(status_code=422, detail='Incorrect passowrd')
        return value

class ConfirmValidation(BaseModel):
    email: str
    code: int

    @field_validator('email')
    @classmethod
    def validate_email(cls, value):
        if '@' not in value:
            raise HTTPException(status_code=422, detail='Invalid email')
        return value


    @field_validator('code')
    @classmethod
    def validate_code(cls, value):
        if len(str(value)) != 6:
            raise HTTPException(status_code=422, detail='Invalid code')
        return value


class Login(BaseModel):
    email: str
    password: str

    @field_validator('email')
    @classmethod
    def validate_email(cls, value):
        if '@' not in value:
            raise HTTPException(status_code=422, detail='Invalid email')
        return value