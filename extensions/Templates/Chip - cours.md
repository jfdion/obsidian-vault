<%*
const tx = tp.user.templaterExtender()
cosnt cs = tp.user.configSession("A24")

const label = await tx.promptStr(tp, "Nom cours")
%>
<span class="chip cours-<%* tR += cours %>  "><%* tR += label %>  </span>