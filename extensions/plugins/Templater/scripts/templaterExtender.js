const DATE_FORMAT = `YYYY-MM-DD`
const HOUR_FORMAT = `HH [h] mm`
const DATE_HOUR_FORMAT = `${DATE_FORMAT} ${HOUR_FORMAT}`

async function promptInt(tp, label = "Number", placeholder = undefined) {
    if (placeholder !== undefined) {
        placeholder = toString(placeholder)
    }

    const value = await tp.system.prompt(label, placeholder, true)

    return parseInt(value, 10)
}

async function promptStr(tp, label = "String", placeholder = undefined) {
    if (placeholder !== undefined) {
        placeholder = toString(placeholder)
    }

    const value = await tp.system.prompt(label, placeholder, true)

    return value
}

async function promptOnFilenameUntitled(tp) {
    let title = tp.file.title
    if (title.startsWith("Untitled")) {
        title = await promptStr(tp, "title")
        await tp.file.rename(title)
    }
    return title
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

function buildHierarchicalTag(values) {
    return `#${values.join('/')}`
}

async function promptToString(prompt) {
    const result = await prompt
    return toString(result)
}

function templaterExtender() {
    return {
        constants: {
            DATE_FORMAT: DATE_FORMAT,
            HOUR_FORMAT: HOUR_FORMAT,
            DATE_HOUR_FORMAT: DATE_HOUR_FORMAT
        },
        promptInt,
        promptStr,
        promptOnFilenameUntitled,
        buildHierarchicalTag,
        toString,
        getParentFolder,
        promptToString,
        getSiblingFileByName,
        getCurrentFolder
    }
}

module.exports = templaterExtender