export type Session = { long: string, short: string, year: number, code: string }
export type SessionConfig = { long: string, short: string }

const AUTOMNE_NAME = "Automne"
const HIVER_NAME = "Hiver"

const AUTOMNE: SessionConfig = { long: AUTOMNE_NAME, short: "A" }
const HIVER: SessionConfig = { long: HIVER_NAME, short: "H" }

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

const session = {
    fromMonth,
    fromNow
}

export default session