
from fastapi import APIRouter
router = APIRouter()

@router.post("/login")
def login():
    # Stub à remplacer par une vraie implémentation JWT/OAuth2
    return {"access_token": "dev-token", "token_type": "bearer"}
