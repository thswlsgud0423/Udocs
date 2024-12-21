from fastapi import FastAPI, Depends
from models.database import create_db_and_tables, get_session
from contextlib import asynccontextmanager

@asynccontextmanager
async def lifespan(app: FastAPI):
    create_db_and_tables()
    yield


app = FastAPI(lifespan=lifespan)