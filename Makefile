.PHONY: install dev build precommit

install:
	npm install
	pre-commit install

dev:
	npm run dev

build:
	npm run build

precommit:
	pre-commit run --all-files
