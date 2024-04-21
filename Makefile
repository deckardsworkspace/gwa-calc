.PHONY: install client dev build precommit

install:
	npm install
	pre-commit install

SCHEMA_PATH ?= ../backend/openapi.json
client:
	@npx @openapitools/openapi-generator-cli \
		generate -i $(SCHEMA_PATH) \
		-g typescript-fetch \
		-o src/api && \
		find src/api -type f -name '*.ts' | xargs pre-commit run --files

dev:
	npm run dev

build:
	npm run build

precommit:
	pre-commit run --all-files
