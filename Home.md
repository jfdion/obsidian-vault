# Cours
```dataview
TABLE Session
FROM #cours 
WHERE Session AND Session = "H24" AND Type AND Type = "MOC"
```


```dataview
TABLE Cours, Date as "Date  ↑"
FROM #planseance
WHERE date AND date >= date(today) AND date < date(today) + dur(20 days)
SORT Date asc
```