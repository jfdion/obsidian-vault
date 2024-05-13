export type Templater = {
    system: {
        prompt(prompText?: string, defaultValue?: string, throwOnCancel?: boolean, multiline?: boolean): Promise<string>
        suggester<T>(textItems: string[] | ((item: T) => string), items: T[], throwOnCancel?: boolean, placeholder?: string, limit?: number): Promise<T>
    },
    file: {

        folder(relative?: boolean): string,
        find_tfile(filename: string): string,
        rename(newTitle: string): Promise<void>
        tags: string[],
        title: string,
    }
};

const DATE_FORMAT = `YYYY-MM-DD`
const HOUR_FORMAT = `HH [h] mm`
const DATE_HOUR_FORMAT = `${DATE_FORMAT} ${HOUR_FORMAT}`

async function promptInt(tp: Templater, label = "Number", placeholder = undefined): Promise<number> {
    const value = await tp.system.prompt(label, placeholder, true)

    return parseInt(value, 10)
}

async function promptStr(tp: Templater, label = "String", placeholder = undefined): Promise<string> {
    return await tp.system.prompt(label, placeholder, true)
}

async function suggester(tp: Templater, choices: Record<string, string>): Promise<string> {
    return await tp.system.suggester(Object.keys(choices), Object.values(choices))
}

async function promptOnFilenameUntitled(tp: Templater): Promise<string> {
    let title = tp.file.title
    if (title.startsWith("Untitled")) {
        title = await promptStr(tp, "title")
        await tp.file.rename(title)
    }
    return title
}

function getCurrentFolder(tp: Templater): string {
    return tp.file.folder(true)
}

function getParentFolder(tp: Templater, level = 2) {
    const folders = tp.file.folder(true).split("/")
    return folders.splice(level * -1, 1)
}

function getSiblingFileByName(tp: Templater, name: string): string {
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
    suggester,
    promptOnFilenameUntitled,
    buildHierarchicalTag,
    toString,
    getParentFolder,
    promptToString,
    getSiblingFileByName,
    getCurrentFolder
}

export default templaterExtender