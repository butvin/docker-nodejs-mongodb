build: up dev ps

dev:
	docker-compose -f 'docker/docker-compose.dev.yml' up -d --build

up:
	docker-compose -f 'docker/docker-compose.yml' up -d --build

ps:
	docker-compose -f 'docker/docker-compose.yml' ps