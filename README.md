
# 🌐 OrganiHub Starter

**OrganiHub** est une application web multiplateforme et collaborative qui centralise 9 modules d’organisation :
Notes, Agenda, To‑Do List, Revue de Presse, Veille RSS, Veille Réseaux Sociaux, Répertoire, Gestionnaire RS, Base de Données.

Ce dépôt fournit un **starter** (frontend React + Vite + TailwindCSS, backend FastAPI, Docker) pour démarrer rapidement.

## 🚀 Démarrage rapide (Docker)

```bash
docker compose up --build
# Frontend: http://localhost:5173
# Backend:  http://localhost:8000/docs
```

## ▶️ Démarrage manuel (dev)

### Backend
```bash
cd backend
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## 📚 Modules (MVP inclus)
- 🗒️ Notes (raccourcis `@date`, `#todo`, `@contact` — parsing minimal)
- 📅 Agenda (endpoints REST)
- ✅ To‑Do List (CRUD + Kanban minimal)
- 👥 Répertoire (contacts)
(les autres modules sont pré‑maquettés)

## 🧱 Stack
- **Frontend** : React + Vite + TailwindCSS
- **Backend** : FastAPI + Pydantic
- **DB** : SQLite (dev) / PostgreSQL (prod via Docker)
- **Auth** : JWT (stub)
- **Sync** : WebSocket (placeholder)

## 🔐 Sécurité & RGPD (base)
- Sessions JWT en mémoire (dev), à remplacer par un provider sécurisé
- CORS configuré
- Exemple de .env

## 🤝 Contribution
Voir `docs/CONTRIBUTING.md`. Les issues/PR sont bienvenues.

## 📄 Licence
MIT. Voir `LICENSE`.
