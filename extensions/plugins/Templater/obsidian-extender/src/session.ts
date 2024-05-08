export type Session = { long: string, short: string, year: number, code: string }
export type SessionConfig = { long: string, short: string }

const AUTOMNE_NAME = "Automne"
const HIVER_NAME = "Hiver"

const AUTOMNE: SessionConfig = { long: AUTOMNE_NAME, short: "A" }
const HIVER: SessionConfig = { long: HIVER_NAME, short: "H" }

function newSession(name: string, year: number): Session {
    const config = name === AUTOMNE_NAME ? AUTOMNE : HIVER

    if (name === AUTOMNE_NAME) {
        return {
            ...AUTOMNE,
            code: `${AUTOMNE.short}${year}`,
            year
        }
    }
}

function fromMonth(month: number, year: number): Session {
    return month <= 6 ? HIVER : AUTOMNE
}

function fromNow(): Session

const session = {
    fromMonth
}

export default session