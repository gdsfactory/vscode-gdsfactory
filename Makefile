patch:
	bumpversion patch
	git push 
	git push --tags

release:
	git push
	git push origin --tags

.PHONY: patch
