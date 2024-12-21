from fastapi import APIRouter

from fastapi import Depends, HTTPException
from sqlalchemy.orm import Session

from backend.core import models, service
from backend.core.models.uni import Uni

router = APIRouter()


@router.post("/uni/")
def create_item_for_user(uni: Uni):
    if not service.uni.read_uni:
        return service.uni.create_uni(uni)


@router.get("/items/")
def read_item():
    return service.uni.read_uni
