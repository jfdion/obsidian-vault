**Cours:** #cours/420-W41-SF/ServicesWeb
# Meta info
Type:: MOC
Chip::  <span class="chip cours-2">SW</span>
Session:: H24
# Références
* Plan de cours (LÉA)
* Devis du cours (Google Drive)
* Matériel de cours (Google Drive)
# Classes et travaux
```dataview
TABLE Semaine + "-" + ClasseNum as "Séance ↑", Thème, Status, Date, Heure, Remises, Rating
FROM #cours/420-W41-SF/ServicesWeb/planseance
SORT ClasseNum asc
WHERE Session AND Session = "H24"
```