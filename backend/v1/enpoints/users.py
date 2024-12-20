from typing import List
from fastapi import APIRouter
from fastapi import Depends, HTTPException
from sqlalchemy.orm import Session
from fastapi_backend.core import models, schemas, services

router = APIRouter()


@router.post("/users/", response_model=schemas.users.User)
def create_user(
        user: schemas.users.UserCreate,
        db: Session = Depends(models.database.get_db)):
    db_user = services.users.get_user_by_username(db, username=user.username)
    if db_user:
        raise HTTPException(status_code=400, detail="username already registered")
    return services.users.create_user(db=db, user=user)


@router.get("/users/", response_model=List[schemas.users.User])
def read_users(db: Session = Depends(models.database.get_db)):
    users = services.users.get_users(db)
    return users


@router.get("/users/{user_id}", response_model=schemas.users.User)
def read_user(user_id: int, db: Session = Depends(models.database.get_db)):
    db_user = services.users.get_user(db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=400, detail="User does not exist")
    return db_user
