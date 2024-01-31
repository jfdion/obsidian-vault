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

### Rapport de scène de crime
Récupérer la liste des crimes correspondants à  des meurtres à SQL City
```SQL
SELECT * 
FROM crime_scene_report
WHERE type = "murder" 
  AND city = "SQL City" 
  AND date = "20180115"
```

## References
* https://mystery.knightlab.com/