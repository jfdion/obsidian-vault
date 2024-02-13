<%*
const tx = tp.user.templaterExtender()
const depth = await tx.promptInt(tp, "Nombre de dossiers à remonter")

const seance = tp.user.seanceTemplate()
const cours = seance.nomCours(tp, depth)

tR += tx.buildHierarchicalTag(["cours", cours])
%>