<%*
const tx = tp.user.templaterExtender()
const value = await tx.promptInt(tp, "Rating x / 10")

tR += `Rating:: ${value} / 10\n`
tR += "⭐".repeat(value)
%>
