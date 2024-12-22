from fastapi import APIRouter, Depends
from sqlmodel import Session

from core import service
from core.models.database import get_session
from core.models.uni import UniCreate, Uni

router = APIRouter()


@router.post("/uni/")
def create_item_for_user(uni: UniCreate, session: Session = Depends(get_session)):
    uni = Uni(**uni.model_dump())
    return service.uni.create_uni(uni, session)

@router.get("/uni/{id}/")
def read_uni(uni_id: int, session: Session = Depends(get_session)):
    return service.uni.read_unis(uni_id, session)


@router.get("/unis/")
def read_unis(session: Session = Depends(get_session)):
    return service.uni.read_uni(session)
