.PHONY: dev up down

dev: up

up:
	docker compose up --build

down:
	docker compose down
