from pydantic import BaseModel

class Subscribe(BaseModel):
    user_id: int
    subscriber_id: int