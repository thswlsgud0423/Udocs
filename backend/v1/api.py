from fastapi import APIRouter
from v1 import endpoints

router = APIRouter()

router.include_router(endpoints.uni.router, tags=["Uni"])
