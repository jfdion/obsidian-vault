# Classes et travaux
```dataview
TABLE ClasseNum, date(Date), Heure, Remises
FROM #cours/420-W22-SF/BD-I/planseance
SORT classeNum asc
WHERE session AND session = "H24"
```