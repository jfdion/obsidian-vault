
**Cours:** #cours/420-W70-W71-SF/Stages
# Meta info
Type:: MOC
Chip:: <span class="chip cours-3">ST</span>
Session:: H24
# Références
* Plan de cours (LÉA)
* Devis du cours (Google Drive)
* Matériel de cours (Google Drive)
# Classes et travaux
```dataview
TABLE Semaine + "-" + ClasseNum as "Séance ↑", Thème, Status, Date, Heure, Remises, Rating
FROM #cours/420-W70-W71-SF/Stages/planseance
SORT ClasseNum asc
WHERE Session AND Session = "H24"
```

Template:: [[template_moc]]