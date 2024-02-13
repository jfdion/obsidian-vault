# Questions

## À partir du domaine suivant, créez les URLs permettant de manipuler les ressources


Études - Étudiants, cours, professeurs

Médical - Patient, lits
```
=== PATIENTS (CRUD) ===
GET     /patients              200
GET     /patients/{patient_id} 200
POST    /patients              201
PUT     /patients/{patient_id} 200 | 204
DELETE  /patients/{patient_id} 200 | 204

=== LITS (CRUD) ===
GET     /lits          200
GET     /lits/{lit_id} 200
POST    /lits          201
PUT     /lits/{lit_id} 200 | 204
DELETE  /lits/{lit_id} 200 | 204

=== Assigner un patient à un lit ===
PUT | POST /lits/{lit_id}/assigner-patient 200 | 204 // statut du lit: occupé

=== Décharger un patient ===
PUT | POST /lits/{lit_id}/decharger-patient 200 | 204 // statut du lit: à préparer

=== Rendre un lit prêt à l'utilisation ===
PUT | POST /lits/{lit_id}/preparer 200 | 204 // statut du lit: disponible
```


