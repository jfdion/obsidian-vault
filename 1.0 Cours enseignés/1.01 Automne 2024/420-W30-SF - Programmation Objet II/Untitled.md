
**Cours:** #cours/420-W30-SF/ProgrammationObjet II
# Meta info
Type:: MOC
Chip:: <span class="chip cours-1">C1</span> |  <span class="chip cours-2">C2</span> |  <span class="chip cours-3">C3</span> |  <span class="chip cours-4">C4</span> |  <span class="chip cours-5">C5</span>
Session:: A24
# Références
* Plan de cours (LÉA)
* Devis du cours (Google Drive)
* Matériel de cours (Google Drive)
# Classes et travaux
```dataview
TABLE Semaine + "-" + ClasseNum as "Séance ↑", Thème, Status, Date, Heure, Remises, Rating
FROM #cours/420-W30-SF/ProgrammationObjet II/planseance
SORT ClasseNum asc
WHERE Session AND Session = "A24"
```

Template:: [[template_moc]]