from pydantic import BaseModel

class GPTValidation(BaseModel):
    chat_id: int
    prompt: str