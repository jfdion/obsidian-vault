function getCurrentFolder(tp) {
    return tp.file.folder(true)
}

function getParentFolder(tp, level = 2) {
    const folders = tp.file.folder(true).split("/")
    return folders.splice(level * -1, 1)
}

function getSiblingFileByName(tp, name) {
    return tp.file.find_tfile(name)
}

function toString(v) {
    return `"${v}"`
}

async function promptToString(prompt) {
    const result = await prompt
    return toString(result)
}

function templateExtender() {
    return { toString, getParentFolder, promptToString, getSiblingFileByName, getCurrentFolder }
}

module.exports = templateExtender