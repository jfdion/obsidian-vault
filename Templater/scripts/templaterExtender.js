function getParentFolder(tp) {
    const folders = tp.file.folder(true).split("/")
    console.log(folders)
    return folders.splice(-2, 1)
}

function toString(v) {
    return `${v}`
}

function templateExtender() {
    return { getParentFolder, toString }
}

module.exports = templateExtender