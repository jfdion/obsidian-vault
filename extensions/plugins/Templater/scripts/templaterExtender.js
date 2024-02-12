const DATE_HOUR_FORMAT = "YYYY-MM-DD HH h mm"

async function promptOnFilenameUntitled(tp) {
    let title = tp.file.title
    if (title.startsWith("Untitled")) {
        title = await tp.system.prompt("Title")
        await tp.file.rename(title)
    }
}

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
    return {
        constants: {
            DATE_HOUR_FORMAT: DATE_HOUR_FORMAT
        },
        promptOnFilenameUntitled,
        toString,
        getParentFolder,
        promptToString,
        getSiblingFileByName,
        getCurrentFolder
    }
}

module.exports = templateExtender