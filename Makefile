
install:
	pre-commit install

build:
	pass

update-pre:
	pre-commit autoupdate --bleeding-edge
