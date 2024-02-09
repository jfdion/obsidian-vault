function getParentFolder(tp, level = 2) {
    const folders = tp.file.folder(true).split("/")
    return folders.splice(level * -1, 1)
}

function getSiblingByName(tp, name) {
    console.log(tp.file.find_tfile(name))
    return tp.file.find_tfile(name)
}

function toString(v) {
    return `${v}`
}

function findFile(tp, title) {
    return tp.file.find_tfile(title)
}

async function promptToString(prompt) {
    const result = await prompt
    return toString(result)
}

function templateExtender() {
    return { toString, getParentFolder, promptToString, getSiblingByName }
}

module.exports = templateExtender