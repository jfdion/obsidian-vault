---
cours: <% tp.file.folder() %>
session: <% tp.user.templaterExtender().getParentFolder(tp) %>
semaine:  <% tp.user.templaterExtender().toString(tp.user.seanceTemplate().semaineCourante(tp)) %>
created: <% tp.file.creation_date("YYYY-MM-DD ddd") %>
last_updated: <% tp.file.last_modified_date("YYYY-MM-DD ddd") %>
---
# Notes


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