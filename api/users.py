from typing import List
import uuid
from fastapi import APIRouter, HTTPException, status
from schemas import UserSchemaIn, UserSchema
from db import database, User
from passlib.hash import pbkdf2_sha256


router = APIRouter(
    tags=["Users"]
)

@router.get("/")
async def index():
    todo = {
        "todo":[
            {
                "id": 1,
                "name": "洗濯",
                "desc": "今日までにやる"
            },
            {
                "id": 2,
                "name": "ごはん食べる",
                "desc": "今日までにやる"
            }
        ]
        }
    return todo

@router.post('/users', status_code=status.HTTP_201_CREATED, response_model=UserSchema)
async def create(user: UserSchemaIn):
    query = User.insert().values(
        uuid = user.uuid,
        birthday = user.birthday,
        sex = user.sex,
    )
    last_record_id = await database.execute(query)
    return {**user.dict(), "id": last_record_id}


@router.get('/users', response_model=List[UserSchema])
async def index():
    query = User.select()
    return await database.fetch_all(query=query)

    
@router.get('/users/{uuid}/', response_model=UserSchema)
async def read(uuid: int):
    query = User.select().where(uuid == User.c.uuid)
    myuser = await database.fetch_one(query)

    if not myuser:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, details="読み取りに失敗しました")
    return {**myuser}


@router.put('/users/{uuid}/', response_model=UserSchema)
async def updata(uuid: int, user: UserSchemaIn):
    query = User.update().where(User.c.uuid == uuid).values(title=user.name)
    await database.execute(query)
    return {**user.dict(), "uuid": uuid}


@router.delete('/users/{id}/', status_code=status.HTTP_204_NO_CONTENT)
async def delete(id: int):
    query = User.delete().where(User.c.id == id)
    await database.execute(query)
    return {"result": "Users deleted"}