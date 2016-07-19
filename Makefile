all:: build

clean::
	@echo "Delete node modules"
	@rm -fr ./node_modules

# default target
build::
	@echo "Install node dependencies..."
	@npm install --loglevel=warn

	@ln -fs ../../hooks/pre-commit .git/hooks/pre-commit
	@chmod +x .git/hooks/pre-commit

test::
	LOGLEVEL=silent ./node_modules/.bin/mocha \
		-R spec \
		--timeout 100 --slow 100 \
		test/queue.js