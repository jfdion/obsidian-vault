function getParentFolder(tp) {
    const folders = tp.file.folder(true).split("/")
    console.log(folders)
    return folders.splice(-2, 1)
}

function templateExtender() {
    return { getParentFolder }
}

module.exports = templateExtender