const DATE_FORMAT = `YYYY-MM-DD`
const HOUR_FORMAT = `HH [h] mm`
const DATE_HOUR_FORMAT = `${DATE_FORMAT} ${HOUR_FORMAT}`

async function promptInt(tp: any, label = "Number", placeholder = undefined) {
    const value = await tp.system.prompt(label, placeholder, true)

    return parseInt(value, 10)
}

async function promptStr(tp: any, label = "String", placeholder = undefined) {
    const value = await tp.system.prompt(label, placeholder, true)

    return value
}

async function promptOnFilenameUntitled(tp: any): Promise<string> {
    let title = tp.file.title
    if (title.startsWith("Untitled")) {
        title = await promptStr(tp, "title")
        await tp.file.rename(title)
    }
    return title
}

function getCurrentFolder(tp: any): string {
    return tp.file.folder(true)
}

function getParentFolder(tp: any, level = 2) {
    const folders = tp.file.folder(true).split("/")
    return folders.splice(level * -1, 1)
}

function getSiblingFileByName(tp: any, name: string): string {
    return tp.file.find_tfile(name)
}

function toString(v: any) {
    return `"${v}"`
}

function buildHierarchicalTag(values: string[]) {
    return `#${values.join('/')}`
}

async function promptToString(prompt: string): Promise<string> {
    const result = await prompt
    return toString(result)
}

const templaterExtender = {
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

export default templaterExtender