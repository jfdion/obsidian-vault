function getParentFolder(tp, level = 2) {
    const folders = tp.file.folder(true).split("/")
    return folders.splice(level * -1, 1)
}

function getSiblingByName(tp, name) {
    console.log(tp.file.find_tfile(name))
    return tp.file.find_tfile(name)
}

async function promptToString(prompt) {
    const result = await prompt
    return `"${result}"`
}

function templateExtender() {
    return { getParentFolder, promptToString, getSiblingByName }
}

module.exports = templateExtender