<%*
const tx = tp.user.templaterExtender()
const seance = tp.user.seanceTemplate()
const cours = seance.nomCours(tp, 1)

const session = await tx.promptStr(tp, "Session (H|A + YY)")
%>
**Cours:** <%* tR += tx.buildHierarchicalTag(["cours", cours]) %>
# Meta info
Type:: MOC
Session:: <%* tR += session.toUpperCase() %>
# Références
* Plan de cours (LÉA)
* Devis du cours (Google Drive)
* Matériel de cours (Google Drive)
# Classes et travaux
```dataview
TABLE Semaine + "-" + ClasseNum as "Séance ↑", Thème, Status, Date, Heure, Remises, Rating
FROM <%* tR += tx.buildHierarchicalTag(["cours", cours, "planseance"]) %>
SORT ClasseNum asc
WHERE Session AND Session = "<%* tR += session.toUpperCase() %>"
```