**Cours:** <%* tR += tagCours %>
# Meta info
Session:: <%* tR += session.toUpperCase() %>
# Références
* Plan de cours (LÉA)
* Devis du cours (Google Drive)
* Matériel de cours (Google Drive)
# Classes et travaux
```dataview
TABLE Semaine + "-" + ClasseNum as Séance, Date, Heure, Remises, Rating
FROM <%planseance
SORT ClasseNum asc
WHERE Session AND Session = "<%* tR += session.toUpperCase() %>"
```