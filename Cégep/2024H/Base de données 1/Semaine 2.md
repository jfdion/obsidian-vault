---
cours: Base de données 1
session: 2024H
semaine: [object Promise]
created: 2024-02-09 Fri
last_updated: 2024-02-09 Fri
---
# Historique
```dataview
TABLE WITHOUT ID
    link(session) as Session, semaine as Semaine, cours as Cours
WHERE 
	cours = this.cours
	AND semaine = this.semaine
	AND file != this.file
SORT file.ctime DESC
```