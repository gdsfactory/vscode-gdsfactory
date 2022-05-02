patch:
	bumpversion patch
	git push 
	git push --tags

.PHONY: patch
