---
cours: <% tp.file.folder() %>
session: <% tp.user.templaterExtender().getParentFolder(tp) %>
semaine:  <% tp.user.templaterExtender().toString(tp.user.seanceTemplate().indexSemaineCourante(tp)) %>
created: <% tp.file.creation_date("YYYY-MM-DD ddd") %>
last_updated: <% tp.file.last_modified_date("YYYY-MM-DD ddd") %>
---
[[<% tp.user.seanceTemplate().titreSemainePrecedente(tp) %>]] | [[<% tp.user.seanceTemplate().titreSemaineSuivante(tp) %>]]

# Notes
<%*
const SECTION_TITLE = "# Feedback"

const stpl = tp.user.seanceTemplate()
const etpl = tp.user.templaterExtender()
const indexSemaine = stpl.semaineFromTitle(tp)

tR += stpl.titreSemainePrecedente(tp)
tR += etpl.getCurrentFolder(tp)
tR += etpl.getSiblingFileByName(
	tp,
	stpl.semaineFromIndex(indexSemaine - 1)
)

// const file = tp.file.find_tfile("Semaine " + tp.user.seanceTemplate().semainePrecedente(tp))
// const content = await app.vault.read(file)

// const feedback = content.substring(content.indexOf(SECTION_TITLE) + SECTION_TITLE.length)

// tR += feedback.substring(0, Math.min(150, feedback.indexOf('#')))
%>
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