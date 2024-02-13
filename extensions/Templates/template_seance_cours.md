<%*
const tx = tp.user.templaterExtender()
const seance = tp.user.seanceTemplate()
const cours = seance.nomCours(tp)

const session = await tx.promptStr(tp, "Session (H|A + YY)")
const date = await tx.promptStr(tp, "Date", now())

tR += tx.buildHierarchicalTag(["cours", cours, "planseance"])
%>
# Meta info

**Cours:** <%* tR += tx.buildHierarchicalTag(["cours", cours]) %>

**MOC:** [[420-W41-SF - Services Web - MOC]]

Session:: <%* tR += session %>

Date::  2024-02-07  
Semaine:: 2 
Heure:: 16:00 à 18:00  
ClasseNum:: 3

**Thème:**

**Remises:**  
Remises::

# Matériel du cours
* Présentation (Google Drive)
* Excercices (Google Drive)

# Notes

# Rétroaction
(alt+e - [[macro_rating]])