# CloudNative

A modern and scalable cloud storage platform built using a microservices architecture, providing secure authentication, file management, and a responsive web interface.

## Services

- **api-gateway**: Nginx-based gateway routing requests to internal services.
- **auth-service**: Authentication and JWT issuance/verification.
- **file-service**: File upload/download/metadata APIs.
- **client**: Web UI (Vite + React + TypeScript).
- **db**: Shared DB models/migrations (Go module placeholder).

## Local Development (quick start)

Use `docker-compose.yml` to run services locally.

## Kubernetes

Manifests are in `k8s/`.
