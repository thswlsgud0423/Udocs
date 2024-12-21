from fastapi import APIRouter
from backend.v1 import endpoints

router = APIRouter()

router.include_router(endpoints.users.router, tags=["Uni"])
