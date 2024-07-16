from fastapi import Header, Depends, APIRouter
from typing import Any

from src.services.User.auth.JWTAuth import JWTAuth


TeamsRouter = APIRouter()

@TeamsRouter.get('/teams/allteams')
async def get_all_teams(
    Bearer: str = Header(), verify = Depends(JWTAuth)
)->Any:
    if await verify.verify(Bearer, 'access'):
        ...
    


@TeamsRouter.get('/teams/team')
async def get_team(
    team_id: int, Bearer: str = Header(), verify = Depends(JWTAuth)
)->Any:
    if await verify.verify(Bearer, 'access'):
        ...


@TeamsRouter.post('/teams/createteam')
async def create_team(
    Bearer: str = Header(), verify = Depends(JWTAuth)
)->Any:
    if await verify.verify(Bearer, 'access'):
        ...


@TeamsRouter.put('/teams/updateteam')
async def update_team(
    Bearer: str = Header(), verify = Depends(JWTAuth)
)->Any:
    if await verify.verify(Bearer, 'access'):
        ...


@TeamsRouter.delete('/teams/deleteteam')
async def delete_team(
    Bearer: str = Header(), verify = Depends(JWTAuth)
)->Any:
    if await verify.verify(Bearer, 'access'):
        ...
