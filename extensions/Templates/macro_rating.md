<%*
const tx = tp.user.templaterExtender()
const value = await tx.promptInt(tp, "Rating x / 10")

tR += "⭐".repeat(value)
tR += `Rating:: ${value} / 10\n`
%>
