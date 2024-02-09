function getParentFolder(tp) {
    const folders = tp.file.folder(true).split("/")
    return folders.splice(-2, 1)
}

async function promptToString(prompt) {
    const result = await prompt
    return `"${result}"`
}

function templateExtender() {
    return { getParentFolder, promptToString }
}

module.exports = templateExtender