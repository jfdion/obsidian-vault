<%*
const tx = tp.user.templaterExtender()
const title = await tx.promptOnFilenameUntitled(tp)

tR += "---"
%>
Created: <% tp.date.now(tx.constants.DATE_HOUR_FORMAT) %>
Modified: <% tp.file.last_modified_date(tx.constants.DATE_HOUR_FORMAT) %>
Alias:
Tags:
  - "#meeting"
---
# <%* tR += title %>
## Détails
Date: <% tp.file.creation_date(tx.constants.DATE_FORMAT) %>
Heure:
Lieu:

## Participants
 * Jean-François Dion <jfdion@csfoy.ca>

## Ordre du jour
1. <élément>

## Notes

## Points d'actions
 [ ] xxx
 