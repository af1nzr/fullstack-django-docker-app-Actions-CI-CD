# 🐳 Fullstack Django Docker App with GitHub Actions CI/CD

A complete full-stack application powered by Django (Backend), React (Frontend), PostgreSQL (Database), all containerized with Docker and deployed using GitHub Actions CI/CD.

## 🚀 Features

- 🔧 Backend: Django REST Framework
- 🎨 Frontend: ReactJS
- 🐘 Database: PostgreSQL
- 🐳 Dockerized: Frontend, Backend, and Database
- 🔁 CI/CD: GitHub Actions with Docker Build & Push, Trivy Security Scan
- ⚙️ Environments: `.env` support and Docker Compose integration
- 🔐 Admin Panel via Django Admin
- ✅ Unit testing ready

---

![Architecture](https://raw.githubusercontent.com/af1nzr/fullstack-django-docker-app-Actions-CI-CD/main/docs/architecture.png.png)

## 📁 Project Structure
<pre>
fullstack-django-app/
│
├── backend/ # Django app
│ ├── api/ # Django API app
│ ├── backend/ # Django project
│ └── Dockerfile
│
├── frontend/ # React frontend
│ ├── public/
│ ├── src/
│ └── Dockerfile
│
├── database/ # PostgreSQL image setup (if customized)
│
├── docker-compose.yml # Multi-container orchestration
├── .github/workflows/ # GitHub Actions CI/CD
│ └── deploy.yml
└── README.md
</pre>


---

## ⚙️ Getting Started

### Prerequisites

- Docker & Docker Compose
- GitHub account
- Docker Hub account (for image push)

---

## 🛠️ Local Development

1. **Clone the Repo**

```bash
git clone https://github.com/af1nzr/fullstack-django-docker-app-Actions-CI-CD.git
cd fullstack-django-docker-app-Actions-CI-CD

Run Docker Containers
  docker-compose up -d --build

Create Superuser
  docker-compose exec backend python manage.py migrate
  docker-compose exec backend python manage.py createsuperuser

Access App
  Frontend: http://localhost:3000
  Backend (API): http://localhost:8000
  Admin: http://localhost:8000/admin

⚙GitHub Actions CI/CD
Workflow:
Every push to main triggers:
  Build frontend/backend images
  Push to Docker Hub
  Scan images using Trivy
  Deploy app using docker-compose up -d --build

Make sure to set your secrets in GitHub:
  DOCKER_USERNAME
  DOCKER_PASSWORD

Environment Variables
Set up your .env file in the root directory (for local dev):
  SECRET_KEY=your-django-secret-key
  DEBUG=True
  DB_NAME=postgres
  DB_USER=postgres
  DB_PASSWORD=postgres
  DB_HOST=database
  DB_PORT=5432


Docker Compose Services
  frontend-container → React app on port 3000
  backend-container → Django API on port 8000
  database-container → PostgreSQL on port 5432

Security
  Trivy used in CI to scan Docker images
  Production WSGI setup recommended before production
  HTTPS and .env secrets handling suggested

Future Improvements
  Unit & integration testing
  Nginx & Gunicorn for production
  Secrets manager integration (AWS/GCP/Azure)
  Auto deploy to cloud server (e.g. EC2, DigitalOcean)

License
MIT License


---

Let me know if you want to split it for frontend/backend or convert it to a project wiki format.

