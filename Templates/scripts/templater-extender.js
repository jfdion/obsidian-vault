function getParentFolder(tp) {
    const folders = tp.file.folder(true).split("/")
    return folders.splice(-2, 1)
}

module.exports = { getParentFolder }