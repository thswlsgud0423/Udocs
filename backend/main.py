from fastapi import FastAPI
from fastapi_backend.v1 import api
from fastapi_backend.core.models.database import engine
from fastapi_backend.core import models

app = FastAPI()

app.include_router(api.router, prefix="/v1")

models.database.Base.metadata.create_all(bind=engine)
