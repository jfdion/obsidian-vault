# Questions
Pour le cours #cours/420-W41-SF/ServicesWeb
## À partir du domaine suivant, créez les URLs permettant de manipuler les ressources
Ne pas prendre en compte les cas d'erreurs. Toutes les requêtes sont considérées valides.

### Médical - Patient, lits
#### Format de réponse
```
Récupérer tous     __________  _____________________________________________  _________
                   Verbe http  URL relatif                                    Code http
Récupérer un       __________  _____________________________________________  _________
                   Verbe http  URL relatif                                    Code http
Créer nouveau      __________  _____________________________________________  _________
                   Verbe http  URL relatif                                    Code http
Modifier existant  __________  _____________________________________________  _________
                   Verbe http  URL relatif                                    Code http
Supprimer un       __________  _____________________________________________  _________
                   Verbe http  URL relatif                                    Code http
```
#### PATIENTS (CRUD)
```
GET     /patients              200
GET     /patients/{patient_id} 200
POST    /patients              201
PUT     /patients/{patient_id} 200 | 204
DELETE  /patients/{patient_id} 200 | 204
```
#### LITS (CRUD)
```
GET     /lits          200
GET     /lits/{lit_id} 200
POST    /lits          201
PUT     /lits/{lit_id} 200 | 204
DELETE  /lits/{lit_id} 200 | 204
```
#### DOMAINE RICHE
##### Assigner un patient à un lit (occupe également un lit)
statut du lit: occupé
statut du patient: pris en charge
```
PUT | POST /patients/{patient_id}/assigner-lit 200 | 204
```
##### Décharger un patient (libère également le lit)
statut du lit: à préparer
statut du patient: déchargé
```
PUT | POST /patients/{patient_id}/decharger 200 | 204 
```
##### Rendre un lit prêt à l'utilisation
statut du lit: disponible
```
PUT | POST /lits/{lit_id}/preparer 200 | 204
```


