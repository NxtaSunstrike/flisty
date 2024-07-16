from pydantic_settings import BaseSettings

class RedisSettings(BaseSettings):
    host: str = 'localhost'
    port: int = 6379

class JWTSettings(BaseSettings):
    private_key: str = 'jwt-private.pem'
    public_key: str = 'jwt-public.pem'
    algorithm: str = 'RS256'
    access_token_expire_minutes: int = 15
    refresh_token_expire_days: int = 30

