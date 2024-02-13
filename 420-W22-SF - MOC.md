# Classes et travaux
```dataview
TABLE ClasseNum, Date, Heure, Remises
FROM #cours/420-W22-SF/classes
SORT classeNum asc
WHERE session AND session = "H24"
```