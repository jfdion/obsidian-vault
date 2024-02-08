---
tags:
  - "#code"
  - "#snippet"
  - "#sql"
language: SQL
created: 2024-02-08 Thu
last_updated: 2024-02-08 Thu
---
# Description
Création d'une table en SQL

```SQL
CREATE TABLE table_name (
	column datatype(length) column_constraint,
	column2 datatype(length) column_constraint,
	...
	table_constraints
) 
```

## Column constraints


* `NOT NULL` valeur non nulle
* `UNIQUE` valeur unique pour la table
* `PRIMARY KEY` clé primaire
* `CHECK` prédicat de validation
* `FOREIGN KEY` clé
UNIQUE -- valeur unique pour la table
PRIMARY KEY -- clé primaire
CHECK -- prédicat de validation
FOREIGNT KEY -- clé étrangère
```
## References
{reference}