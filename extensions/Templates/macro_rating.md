<%*
const tx = tp.user.templaterExtender()
const value = await tx.promptInt(tp, "Rating x / 10")

tR += `Rating:: ${value}\n`
tR += "⭐".repeat(value)
%>
