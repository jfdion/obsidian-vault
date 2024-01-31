---
tags:
  - "#resources"
  - "#solution"
created: 2024-01-31 Wed
from: "[[/Resources/SQL games]]"
---
# SQL Murder Mystery
*Can you find out whodunnit?*
## Partie 1
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
SELECT p.name, i.* 
FROM interview i
INNER JOIN person p
  ON p.id = i.person_id
WHERE person_id = '16371' 
   OR person_id = '14887'
```
Où étaient les témoins le jour du meurtre
```SQL
SELECT p.name, f.* 
FROM facebook_event_checkin f INNER 
JOIN person p 
  ON p.id = f.person_id 
WHERE (person_id = '14887' 
	   OR person_id='16371')
  AND date='20180115'
```
Check-in d'Annabel au gym
```SQL
SELECT * 
FROM get_fit_now_member gfnm
INNER JOIN get_fit_now_check_in gfnci
  ON gfnm.id = gfnci.membership_id
WHERE person_id = '16371' 
```
### Suspects
Abonnés du Gym avec un membership "gold" et s'étant entrainé le 9 janvier 2018 entre 16 h et 17 h
```SQL
SELECT * 
FROM get_fit_now_member gfnm
INNER JOIN get_fit_now_check_in gfnci
  ON gfnm.id = gfnci.membership_id
WHERE id LIKE '48Z%'
  AND membership_status = "gold"
  AND check_in_date = "20180109"
  AND (check_in_time >= 1600 
       OR check_in_time <= 1700)
```
Propriétaires d'un véhicule ayant "H42W" dans le numéro d'immatriculation
```SQL
SELECT p.name, d.* 
FROM drivers_license d 
INNER JOIN person p
  ON p.license_id = d.id
WHERE plate_number 
LIKE "%H42W%"    
```
Qui était à l'événement en plus de nos témoins
```SQL
SELECT p.name, f.* 
FROM facebook_event_checkin f INNER 
JOIN person p 
ON p.id = f.person_id 
WHERE event_id = '4719' 
  AND date='20180115'
  AND person_id NOT in ('14887', '16371')
```
### Meurtrier
Le meurtrier est un membre du gym qui était présent sur les lieux du crime (autre que les témoins)
```SQL
SELECT p.name
FROM facebook_event_checkin f INNER 
INNER JOIN person p 
  ON p.id = f.person_id 
INNER JOIN get_fit_now_member gfnm
  ON gfnm.person_id = p.id
INNER JOIN get_fit_now_check_in gfnci
  ON gfnm.id = gfnci.membership_id
WHERE gfnm.id LIKE '48Z%'
  AND membership_status = "gold"
  AND check_in_date = "20180109"
  AND (check_in_time >= 1600 
       OR check_in_time <= 1700)
  AND event_id = '4719' 
  AND date='20180115'
  AND p.id NOT in ('14887', '16371')
```
### Solution
```SQL
INSERT INTO solution VALUES (1, 'Jeremy Bowers');
```
## Partie 2
### Interrogatoire
Interrogatoire avec Jeremy Bowers
```SQL
SELECT p.name, i.* 
FROM person p 
INNER JOIN interview i 
  ON p.id = i.person_id 
WHERE p.name ="Jeremy Bowers"
```
### Commanditaire du meurtre
```SQL
SELECT DISTINCT p.name
FROM person p 
INNER JOIN drivers_license dl
  ON p.license_id = dl.id
INNER JOIN facebook_event_checkin fb
  ON p.id = fb.person_id
WHERE dl.hair_color = "red"
  AND dl.gender = "female"
  AND dl.car_make = "Tesla"
  AND dl.car_model = "Model S"
  AND dl.height >= 65 AND dl.height <= 67
  AND fb.event_name = "SQL Symphony Concert"
```
### Solution
```SQL
INSERT INTO solution VALUES (1, 'Miranda Priestly');
```
## References
* https://mystery.knightlab.com/