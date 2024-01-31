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
WHERE person_id = '16371' 
   OR person_id = '14887'
```

Checkin d'Annabel au gym
```SQL
SELECT * 
FROM get_fit_now_member gfnm
INNER JOIN get_fit_now_check_in gfnci
  ON gfnm.id = gfnci.membership_id
WHERE person_id = '16371' 
```
### Suspects
Abonnés du Gym avec un membership "gold" et s'étant entrainé le 9 janvier 2018
```SQL
SELECT * 
FROM get_fit_now_member gfnm
INNER JOIN get_fit_now_check_in gfnci
  ON gfnm.id = gfnci.membership_id
WHERE id LIKE '48Z%'
  AND membership_status = "gold"
  AND check_in_date = "20180109"
  AND (check_in_date > 1600 OR check_out_date < 1700)
```
Propriétaires d'un véhicule ayant "H42W" dans le numéro d'immatriculation
```SQL
SELECT * 
FROM drivers_license 
WHERE plate_number 
LIKE "%H42W%"    
```
## References
* https://mystery.knightlab.com/