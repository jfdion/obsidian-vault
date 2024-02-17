---
tags:
  - "#resource"
  - "#sysadmin"
language: GPO
created: 2024-02-15 Thu
last_updated: 2024-02-15 Thu
---
# Description
Désactivation des publicités dans le menu démarrer de Windows

## Étape 1
```
WIN + R
> gpedit.msc

OU

Menu démarrer
> group policy
```

## Étape 2

Aller à `Computer configuration > Administrative templates > Windows Components > Cloud Content`

## Étape 3
Double click `Turn off cloud optimized content` + `Turn off Microsoft consumer experience`.

Et activer les policies
## Étape 4

Redémarrer l'ordinateur
## References
https://community.spiceworks.com/how_to/140095-disable-advertisements-in-windows-10-through-local-group-policy