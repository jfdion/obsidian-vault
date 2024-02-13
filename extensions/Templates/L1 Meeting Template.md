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
## Détails 🏢
|  |  |
| :--- | :--- |
| **Date** |  <% tp.file.creation_date(tx.constants.DATE_FORMAT) %> |
| **Heure** |  <% tp.file.creation_date(tx.constants.HOUR_FORMAT) %> <% tp.file.cursor(1) %> |
| **Lieu** | <% tp.file.cursor(2) %> |

## Participants 🧍
 * Jean-François Dion <jfdion@csfoy.ca>
 * <% tp.file.cursor(3) %>

## Ordre du jour 📆
1. <% tp.file.cursor(4) %>

## Notes 🗒
<% tp.file.cursor(5) %>

## Points d'actions ✅
 - [ ] <% tp.file.cursor(6) %>
 