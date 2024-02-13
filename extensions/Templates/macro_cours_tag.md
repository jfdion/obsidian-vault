<%*
const seance = tp.user.seanceTemplate()
const tx = tp.user.templaterExtender()
const depth = await tx.promptInt(tp, "Nombre de dossiers à remonter")
const cours = seance.nomCours(tp, depth)

tR += cours
%>