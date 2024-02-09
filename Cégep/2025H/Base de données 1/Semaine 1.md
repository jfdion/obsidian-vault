---
cours: Base de données 1
session: 2025H
semaine: "1"
created: 2024-02-09 Fri
last_updated: 2024-02-09 Fri
---
# Historique
```dataview
TABLE WITHOUT ID
    file.link as Title, semaine as Semaine, session as Session, cours as Cours
WHERE 
	cours = this.cours
	AND semaine = this.semaine
	AND file != this.file
SORT file.ctime DESC
```