# Cours
```dataview
TABLE Session
FROM #cours 
WHERE Session AND Session = "H24" AND Type AND Type = "MOC"
```
# Séances de la session
```dataview
TABLE Chip, Cours, Date as "Date  ↑", Status, Semaine, ClasseNum as "Séance", Remises, Rating
FROM #planseance
WHERE session = "H24"
SORT Date asc
```