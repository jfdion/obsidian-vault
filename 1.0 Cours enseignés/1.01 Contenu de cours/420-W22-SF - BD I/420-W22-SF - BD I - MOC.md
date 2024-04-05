**Cours:** #cours/420-W22-SF/BD-I 
# Meta info
Type:: MOC
Chip::  <span class="chip cours-1">BD</span>
Session:: H24
# Références
* Plan de cours (LÉA)
* Devis du cours (Google Drive)
* Matériel de cours (Google Drive)
# Classes et travaux
```dataview
TABLE Semaine + "-" + ClasseNum as "Séance ↑", Thème, Status, Date, Heure, Remises, Rating
FROM #cours/420-W22-SF/BD-I/planseance
SORT ClasseNum asc
WHERE Session AND Session = "H24"
```


```dataviewjs 

dv.pages("#cours/420-W22-SF/BD-I/planseance").forEach(i => {
	dv.el("h1", i.file.name)
	dv.el("div","![[" + i.file.link.path + "]]", { cls: "dataview dataview-margin-bottom"})
	})
```