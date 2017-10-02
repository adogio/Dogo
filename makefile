logo : deploy

deploy :
	./node_modules/.bin/rimraf lib
	./node_modules/.bin/babel src --copy-files --source-maps --exte

publish :
	npm publish