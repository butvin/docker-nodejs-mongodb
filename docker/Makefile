build: common-docker-compose \
	docker-compose-up-dev \
	docker-compose-ps

docker-compose-up-dev:
	docker-compose \
	    -f docker/dev-docker-compose.yml \
	    -f docker/cli-docker-compose.yml \
	    up -d --build


common-docker-compose:
	docker-compose -f docker-compose.common.yml up -d --build

docker-compose-ps:
	docker-compose -f ./docker-compose.yml -f .infrastructure/docker-compose/docker-compose.dev.yml ps

mongo-log:
	#docker-compose -f docker/cmd-docker-compose.yml logs -f mongodb.log


