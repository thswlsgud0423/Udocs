from fastapi import APIRouter
from fastapi_backend.v1 import enpoints

router = APIRouter()

router.include_router(enpoints.users.router, tags=["Users"])
router.include_router(enpoints.items.router, tags=["Items"])
router.include_router(enpoints.item_datas.router, tags=["Item Data"])
# router.include_router(enpoints.webscrapper, tags=["Scrap_webs"])
