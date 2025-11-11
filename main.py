
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routes import notes, agenda, tasks, contacts, auth

app = FastAPI(title="OrganiHub API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
def health():
    return {"status": "ok"}

app.include_router(auth.router, prefix="/auth", tags=["auth"])
app.include_router(notes.router, prefix="/notes", tags=["notes"])
app.include_router(agenda.router, prefix="/agenda", tags=["agenda"])
app.include_router(tasks.router, prefix="/tasks", tags=["tasks"])
app.include_router(contacts.router, prefix="/contacts", tags=["contacts"])
