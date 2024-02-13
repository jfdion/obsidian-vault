# Classes et travaux
```dataview
TABLE ClasseNum, Date, Heure, Remises
FROM #cours/420-W22-SF/BD-I/planseance
SORT ClasseNum asc
WHERE Session AND Session = "H24"
```