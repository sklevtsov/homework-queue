NODE = $(shell which node)
NPM = $(shell which npm)
NODE_MODULES_PATH = ./node_modules/.bin

all:: build

clean::
	@echo "Delete node modules"
	@rm -fr ./node_modules

# default target
build::
	@echo "Install node dependencies..."
	$(NPM) install --loglevel=warn

	@ln -fs ../../hooks/pre-commit .git/hooks/pre-commit
	@chmod +x .git/hooks/pre-commit

test-api::
	LOGLEVEL=silent $(NODE_MODULES_PATH)/mocha \
		-R spec \
		--timeout 120000 --slow 30000 \
		test/linkedList.js