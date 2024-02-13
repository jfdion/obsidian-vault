**Cours:** #cours/420-W22-SF/BD-I 
# Meta info
Session:: H24
# Références
* Plan de cours (LÉA)
* Devis du cours (Google Drive)
* Matériel de cours (Google Drive)
# Classes et travaux
```dataview
TABLE Semaine + "-" + ClasseNum as "Séance 🢑", Status, Date, Heure, Remises
FROM #cours/420-W22-SF/BD-I/planseance
SORT ClasseNum asc
WHERE Session AND Session = "H24"
```