<%*
const tx = tp.user.templaterExtender()

const cours = await tx.promptStr(tp, "Numéro cours")


%>
<span class="chip cours-<%* tR += cours %>  "><%* tR += label %>  </span>