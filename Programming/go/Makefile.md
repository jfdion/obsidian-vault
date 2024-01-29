---
tags:
  - code
  - snippet
  - "#go-lang"
language: Makefile
created: 2024-01-29 Mon
last_updated: 2024-01-29 Mon
---
**Description**
Make file de base pour compiler et exécuter une application en `Go`

```makefile
run: build
    @./bin/api-backend

build:
    @go build -o bin/api-backend main.go
```