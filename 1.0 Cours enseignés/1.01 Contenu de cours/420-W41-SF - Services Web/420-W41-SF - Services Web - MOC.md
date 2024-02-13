**Cours:** #cours/420-W41-SF/ServicesWeb
# Meta info
Session:: H24
# Références
* Plan de cours (LÉA)
* Devis du cours (Google Drive)
* Matériel de cours (Google Drive)
# Classes et travaux
```dataview
TABLE Semaine + "-" + ClasseNum as Séance, Date, Heure, Remises
FROM #cours/420-W41-SF/ServicesWeb/planseance
SORT ClasseNum asc
WHERE Session AND Session = "H24"
```