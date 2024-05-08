<%*
const tx = tp.user.templaterExtender()

const cours = await tx.promptStr(tp, "Numéro cours")
const label = await tx.promptStr(tp, "Nom cours")
%>
<span class="chip cours-<%* tR += cours %>  "><%* tR += label %>  </span>