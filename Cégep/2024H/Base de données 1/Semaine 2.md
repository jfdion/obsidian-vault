---
cours: Base de données 1
session: 2024H
semaine:  2
created: 2024-02-09 Fri
last_updated: 2024-02-09 Fri
---
# Notes
Semaine 1Cégep/2024H/Base de données 1[object Object]
# Historique
```dataview
TABLE WITHOUT ID
    link(file.link, session) as Session, semaine as Semaine, cours as Cours
WHERE 
	cours = this.cours
	AND semaine = this.semaine
	AND file != this.file
SORT session DESC
```

# Feedback
Retour sur les séances de la semaine