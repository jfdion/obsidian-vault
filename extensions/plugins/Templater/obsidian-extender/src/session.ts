export type Session = { long: string, short: string, year: number, code: string }
export type SessionConfig = { long: string, short: string }

const AUTOMNE_NAME = "Automne"
const HIVER_NAME = "Hiver"

const AUTOMNE: SessionConfig = { long: AUTOMNE_NAME, short: "A" }
const HIVER: SessionConfig = { long: HIVER_NAME, short: "H" }
export const NULL_SEMESTER = { long: "na", short: "na" }

function newEmptySession(): Session {
    return { ...NULL_SEMESTER, code: "na", year: Number(new Date().getFullYear().toString().substring(2)) }
}

function newSession(name: string, year: number): Session {
    const config = name === AUTOMNE_NAME ? AUTOMNE : HIVER

    return {
        ...config,
        code: `${config.short}${year}`,
        year
    }
}

function fromMonth(month: number, year: number): Session {
    return month <= 6 ? newSession(HIVER_NAME, year) : newSession(AUTOMNE_NAME, year)
}

function fromNow(): Session {
    const now = new Date()
    return fromMonth(
        now.getMonth(),
        Number(now.getFullYear().toString().substring(2))
    )
}

function fromCode(code: string): Session {
    return code.indexOf("A") === 0
        ? newSession(AUTOMNE_NAME, Number(code.substring(1)))
        : newSession(HIVER_NAME, Number(code.substring(1)))
}

const session = {
    fromMonth,
    fromNow,
    fromCode
}

export default session