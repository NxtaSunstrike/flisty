from pydantic import BaseModel


class Posts(BaseModel):
    body: str
    user_id: int