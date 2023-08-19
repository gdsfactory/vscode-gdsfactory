
install:
	pre-commit install

build:
	npm config set registry http://registry.npmjs.org
	npm -g install npm
	npm cache clean -f

update-pre:
	pre-commit autoupdate --bleeding-edge
