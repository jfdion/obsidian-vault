---
cours: <% tp.user.templater-externder.getParentFolder() %>
session: <% tp.user.session(3) %> <% tp.date.now("YYYY") %>
semaine: <% tp.system.suggester((item) => `Semaine ${item}`,["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"]) %>
created: <% tp.file.creation_date("YYYY-MM-DD ddd") %>
last_updated: <% tp.file.last_modified_date("YYYY-MM-DD ddd") %>
---
# Historique
```dataview
TABLE WITHOUT ID
    file
WHERE 
	cours = this.cours
	AND semaine = this.semaine
```