---
tags:
  - code
  - snippet
language: Go
created: 2024-01-29 Mon
last_updated: 2024-01-29 Mon
---
**Description**
Make file de base pour compiler et exécuter une application en `Go`

```Makefile
run: build
    @./bin/movies-backend

build:
    @go build -o bin/movies-backend main.go
```