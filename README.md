# 🌐 OrganiHub

**OrganiHub** est une application web collaborative tout-en-un pour centraliser vos outils d’organisation personnelle et professionnelle.

## 🚀 Modules disponibles

- 🗒️ **Notes** — prise de notes intelligente avec raccourcis automatiques (`@date`, `#todo`, `@contact`)
- 📅 **Agenda** — calendrier complet avec rappels et partage
- ✅ **To-Do List** — gestion avancée des tâches (kanban, sous-tâches, priorités)
- 📰 **Revue de Presse** — agrégateur d’actualités personnalisées
- 🌐 **Veille RSS** — suivi automatique des flux RSS
- 📱 **Veille Réseaux Sociaux** — surveillance d’activités sur X, LinkedIn, etc.
- 👥 **Répertoire** — gestion centralisée des contacts
- 📢 **Gestionnaire RS** — publication simultanée sur plusieurs réseaux
- 🧮 **Base de Données** — création de tables et visualisations personnalisées

## 🧱 Architecture

- **Frontend :** React (Vite + Tailwind)
- **Backend :** FastAPI
- **Database :** PostgreSQL
- **Sync :** WebSocket
- **Sécurité :** Authentification JWT + chiffrement end-to-end

## 💡 Fonctionnalités clés

- Multi-plateforme (Desktop, Mobile, Web)
- Collaboration en temps réel
- Sauvegarde automatique et mode hors ligne
- Thèmes clair/sombre personnalisables
- Conformité RGPD

## 🧰 Installation

```bash
git clone https://github.com/votre-nom/organihub.git
cd organihub
docker-compose up
