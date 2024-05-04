.PHONY: install client dev build precommit

install:
	npm install
	pre-commit install

client:
	src/api/generate.sh

dev:
	npm run dev

build:
	npm run build

precommit:
	pre-commit run --all-files
