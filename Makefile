
build: components index.js
	@component build -dv

install: node_modules components

components: component.json
	@component install -dv

node_modules: package.json
	@npm install --production

test:
	@node test

clean:
	rm -rf node_modules components build

.PHONY: test clean
