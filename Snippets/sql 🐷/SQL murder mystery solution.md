---
tags:
  - "#code"
  - "#snippet"
  - sql
language: SQL
created: 2024-01-31 Wed
last_updated: 2024-01-31 Wed
---
# SQL Murder Mystery
*Can you find out whodunnit?*
## Solution
### Tables
Permet de récupérer les tables du schéma

```SQL
SELECT name 
  FROM sqlite_master
 where type = 'table'
```
[Schéma complet](https://mystery.knightlab.com/schema.png)
### Table
Permet de récupérer la structure d'une table
```SQL
SELECT sql 
  FROM sqlite_master
 where name = 'crime_scene_report' -- changer le nom de la table pour celle dont vous voulez récupréer le schéma
```


## References
* https://mystery.knightlab.com/