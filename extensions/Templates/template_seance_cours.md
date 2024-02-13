<%*
const tx = tp.user.templaterExtender()
const seance = tp.user.seanceTemplate()
const cours = seance.nomCours(tp)

const session = await tx.promptStr(tp, "Session (H|A + YY)")
const date = await tx.promptStr(tp, "Date", tp.date.now())

tR += tx.buildHierarchicalTag(["cours", cours, "planseance"])
%>
# Meta info

**Cours:** <%* tR += tx.buildHierarchicalTag(["cours", cours]) %>

**MOC:** 

Session:: <%* tR += session.toUpperCase() %>

Date::  <%* tR += date %>  
Semaine:: <% tp.file.cursor(1) %>
Heure:: <% tp.file.cursor(2) %>:00 à <% tp.file.cursor(3) %>:00  
ClasseNum:: <% tp.file.cursor(4) %>

**Thème:**

**Remises:**  
Remises::

# Matériel du cours
* Présentation (Google Drive)
* Excercices (Google Drive)

# Notes

# Rétroaction
(alt+e - [[macro_rating]])
## Détails