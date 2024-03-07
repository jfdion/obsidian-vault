<%*
const tx = tp.user.templaterExtender()
const seance = tp.user.seanceTemplate()
const cours = seance.nomCours(tp, 1)

const session = await tx.promptStr(tp, "Session (H|A + YY)")
%>
**Cours:** <%* tR += tx.buildHierarchicalTag(["cours", cours]) %>
# Meta info
Type:: MOC
Chip:: <span class="chip cours-1">C1</span> |  <span class="chip cours-2">C2</span> |  <span class="chip cours-3">C3</span> |  <span class="chip cours-4">C4</span> |  <span class="chip cours-5">C5</span>
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

Template:: [[template_moc]]