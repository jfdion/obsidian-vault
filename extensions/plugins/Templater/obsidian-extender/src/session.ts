export type Session = { long: string, short: string }

const AUTOMNE = { long: "Automne", short: "A" }
const HIVER = { long: "Hiver", short: "H" }

function fromMonth(month: number): Session {
    return month <= 6 ? HIVER : AUTOMNE
}

const session = {
    fromMonth
}

export default session