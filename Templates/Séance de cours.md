---
cours: <% tp.file.folder() %>
session: <% tp.user.templaterExtender().getParentFolder(tp) %>
semaine: <% tp.system.suggester((item) => `Semaine ${item}`,["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"]) %>
created: <% tp.file.creation_date("YYYY-MM-DD ddd") %>
last_updated: <% tp.file.last_modified_date("YYYY-MM-DD ddd") %>
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