<%*
const ext = tp.user.obExt()
const tpEx = ext.templaterExtender
const codeSession = await tpEx.promptStr(tp, "Code de session", "H|A##")
const codeCours = await tpEx.promptStr(tp, "Code de cours")
const session = ext.session.fromMonth(3)
const chipSession = ext.configSession(codeSession).courseToChip(codeCours)

%>

<%* tR += session.long %> 

<%* tR += chipSession %> 