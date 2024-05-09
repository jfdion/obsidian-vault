<%*
const ext = tp.user.obExt()
const xt = ext.templaterExtender
const seanceXt = ext.seance
const seXt = ext.session

const currentSession = seXt.fromNow()
const session = seXt.fromCode(await xt.promptStr(tp, "Code de session", currentSession.code))

const cfgSession = ext.configSession(session.code)

const date = await xt.promptStr(tp, "Date", tp.date.now())
const courseCode = xt.getParentFolder(tp, 2)[0].split(" ")[0]
const course = cfgSession.findCourse(courseCode)

if (course.schedule.length > 1) {
	xt.suggester(tp, course.schedule.reduce((acc, s) => {
	acc[s.day] = `${s.day} - ${s.startTime}:00 à ${s.endTime}:00`
	return acc}, {}))
}

tR += xt.buildHierarchicalTag(["cours", course.slug, "planseance"]) + " " + "#planseance"

/** TODOS
 * Déterminer le nom du fichier à partir du dossier parent
 * Déterminer la date à partir du nom du fichier (dernier segment)
 * Ajouter un prompt pour les heures et la semaine
*/
%>
# Meta info

**Cours**:: <%* tR += xt.buildHierarchicalTag(["cours", course.slug]) %> 

**MOC:** 

Chip:: <span class="chip cours-1">C1</span> |  <span class="chip cours-2">C2</span> |  <span class="chip cours-3">C3</span> |  <span class="chip cours-4">C4</span> |  <span class="chip cours-5">C5</span> 
Session:: <%* tR += session.toUpperCase() %>

Date::  <%* tR += date %>  
Semaine:: <% tp.file.cursor(1) %>
Heure:: <% tp.file.cursor(2) %>:00 à <% tp.file.cursor(3) %>:00  
ClasseNum:: <% tp.file.cursor(4) %>

Status:: <span class="chip not-ready">à faire</span> | <span class="chip ready">prêt</span> | <span class="chip to-review">à réviser</span> | <span class="chip done">fait</span> | <span class="chip na">NA</span>

**Thème**::

**Remises**:: <span class="chip na">na</span>

# Matériel du cours
* Notes de cours (Léa)
* Énnoncés (Léa)
# Contenu
| Quoi                           | Durée |
| ------------------------------ | ----- |
| Accueil et prise des présences | 5 m   |
| **PAUSE**                      | ...   |
| ...                            | ...   |
# Notes
À compléter

# Rétroaction
(alt+e - [[macro_rating]])

Template:: [[template_seance_cours]]