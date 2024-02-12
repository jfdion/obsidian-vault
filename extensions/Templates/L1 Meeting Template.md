<%*
const tx = tp.user.templaterExtender()
console.log(tx)
const title = await tx.promptOnFilenameUntitled(tp)

%>

# <%* tR += title %>