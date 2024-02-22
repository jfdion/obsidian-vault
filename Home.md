# Cours
```dataview
TABLE Session
FROM #cours 
WHERE Session AND Session = "H24" AND Type AND Type = "MOC"
```
# Séances à venir (10 jours)
```dataview
TABLE Cours, Date as "Date  ↑", Status, Semaine, ClasseNum as "Séance"
FROM #planseance
WHERE session = "H24"
SORT Date asc
```