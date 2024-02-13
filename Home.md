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
WHERE date AND date >= date(today) AND date < date(today) + dur(10 days)
SORT Date asc
```