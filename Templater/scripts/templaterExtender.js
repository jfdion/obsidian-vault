function getParentFolder(tp, level = 2) {
    const folders = tp.file.folder(true).split("/")
    return folders.splice(level * -1, 1)
}

async function promptToString(prompt) {
    const result = await prompt
    return `"${result}"`
}

function templateExtender() {
    return { getParentFolder, promptToString }
}

module.exports = templateExtender