.PHONY: help install dev build preview lint clean

PORT ?= 5173

help:
	@echo "Shiva Gokari Portfolio"
	@echo ""
	@echo "  make install   Install dependencies"
	@echo "  make dev       Run on http://localhost:$(PORT)"
	@echo "  make build     Production build"
	@echo "  make preview   Preview production build"
	@echo "  make lint      Run ESLint"
	@echo "  make clean     Remove node_modules and dist"

install:
	npm install

dev: install
	npm run dev -- --port $(PORT)

build: install
	npm run build

preview: build
	npm run preview -- --port $(PORT)

lint:
	npm run lint

clean:
	rm -rf node_modules dist
