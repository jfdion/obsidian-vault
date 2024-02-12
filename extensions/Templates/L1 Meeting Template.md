<% 
let title = tp.file.title
if (title.startsWith("Untitled")) {
	title = await tp.system.prompt("Title")
	await tp.file.rename(title)
}

tR += "---"
%>
Created: <% tp.date.nom("YYYY-MM-DD HH h mm") %>
Modified <% tp.file.last_modified_date("YYYY-MM-DD HH h mm")