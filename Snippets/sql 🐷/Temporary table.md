---
tags:
  - code
  - snippet
  - "#sql"
language: SQL
created: 2024-01-29 Mon
last_updated: 2024-01-29 Mon
---
## Description
Crée une table temporaire pour l'exécution d'une requête

```SQL
CREATE TEMPORARY TABLE IF NOT EXISTS tmp_table_name
   (INDEX {idx} (fields), ...)
    ENGINE=MyISAM
    SELECT * FROM
		table;
```

Supprime la table temporaire
```SQL
DROP TEMPORARY TABLE IF EXISTS tmp_table_name;
```
