**Cours:** #cours/420-W41-SF/ServicesWeb
# Références externes
* Plan de cours (LÉA)
* Matériel de cours (Google Drive)

# Classes et travaux
```dataview
TABLE Semaine + "-" + ClasseNum as Séance, Date, Heure, Remises
FROM #cours/420-W41-SF/ServicesWeb/planseance
SORT ClasseNum asc
WHERE Session AND Session = "H24"
```