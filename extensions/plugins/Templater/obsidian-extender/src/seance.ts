import templaterExtender from "./templaterExtender"

function nomCours(tp: any, depth = 2) {
    const folderName = templaterExtender.getParentFolder(tp, depth)
    return folderName[0].split(" - ").join("/").replace(" ", "")
}

const seance = {
    nomCours
}

export default seance