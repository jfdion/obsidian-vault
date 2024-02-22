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
CREATE TABLE IF NOT EXISTS table_name (
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
* `FOREIGN KEY` clé étrangère```

```SQL
`CREATE TABLE accounts (
	user_id SERIAL PRIMARY KEY, -- Clé pirmaire
	username VARCHAR (50) UNIQUE NOT NULL, -- Unique et non null
	password VARCHAR (50) NOT NULL, -- Non null
	email VARCHAR (255) UNIQUE NOT NULL, -- Unique et non null   
	created_at TIMESTAMP NOT NULL, -- Non null
	last_login TIMESTAMP -- Nullable
);
```

## References
https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-create-table/