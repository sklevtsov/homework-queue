NODE = $(shell which node)
NPM = $(shell which npm)

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