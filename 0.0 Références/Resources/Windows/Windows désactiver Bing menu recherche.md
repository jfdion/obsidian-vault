---
tags:
  - "#resources"
  - "#windows"
created: 2024-02-16 Fri
---

# Windows désactiver Bing menu recherche
## 1. Registre
Dans l'éditeur de registre `regedit` aller à la clé `Computer\HKEY_CURRENT_USER\SOFTWARE\Policies\Microsoft\Windows\Explorer`

Si la clé `Explorer` n'existe pas, créer la clé

## 2. Clé de registre
Créer un DWord (32 bits) et nommer `DisableSearchBoxSuggestions`

Faire un double clic et assigner la valeur  `1`

Redémarrer l'ordinateur