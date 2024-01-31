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

### Témoins
Premier témoins - Dernière maison sur Northwestern Dr
```SQL
SELECT * 
FROM person 
WHERE address_street_name = "Northwestern Dr" 
ORDER BY address_number DESC 
LIMIT 1
```
Deuxième témoin - Annabel habitant sur Franklin avenue
```SQL
SELECT * 
FROM person 
WHERE address_street_name = "Franklin Ave"
  AND name LIKE "Annabel%"
```

### Interrogatoires
Trouver les interrogatoires des deux témoins
```SQL
SELECT * 
FROM interview
WHERE person_id = '16371' OR person_id = '14887'
```
|   |   |
|---|---|
|14887|I heard a gunshot and then saw a man run out. He had a "Get Fit Now Gym" bag. The membership number on the bag started with "48Z". Only gold members have those bags. The man got into a car with a plate that included "H42W".|
|16371|I saw the murder happen, and I recognized the killer from my gym when I was working out last week on January the 9th.|
### Suspects
Gym 
```SQL
SELECT * 
FROM get_fit_now_member gfnm
INNER JOIN get_fit_now_check_in gfnci
  ON gfnm.id = gfnci.membership_id
WHERE id LIKE '48Z%'
  AND membership_status = "gold"
  AND check_in_date = "20180109"
```
## References
* https://mystery.knightlab.com/