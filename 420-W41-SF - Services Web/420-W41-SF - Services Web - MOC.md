# Classes et travaux
```dataview
TABLE ClasseNum, Date, Heure, Remises
FROM #cours/420-W41-SF/ServicesWeb/planseance
SORT ClasseNum asc
WHERE Session AND Session = "H24"
```