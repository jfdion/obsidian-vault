---
cours: Base de données 1
session: 2024H
semaine: "1"
created: 2024-02-09 Fri
last_updated: 2024-02-09 Fri
---
# Historique
```dataview
TABLE
    file, semaine, session, cours
WHERE 
	cours = this.cours
	AND semaine = this.semaine
	AND file != this.file
SORT file.ctime DESC
```