<%*
const ext = tp.user.obExt()
const tpEx = ext.templaterExtender
const seEx = ext.session
const session = seEx.fromNow()
const codeSession = await tpEx.promptStr(tp, "Code de session", session.code)
const codeCours = await tpEx.promptStr(tp, "Code de cours")

const chipSession = ext.configSession(codeSession).courseToChip(codeCours)

%>

<%* tR += session.long %> 

<%* tR += chipSession %> 