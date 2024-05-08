const AUTOMNE= {long: "Automne", short: "A", pattern: (year: number | string) => `A${year}`};
const HIVER = {long: "Hiver", short: "H", pattern: (year: number | string) => `H${year}`};

type fnSessionFromMonth = (month: number) => string;

type SessionConfig = {
    constants: Record<string, any>,
    sessionFromMonth: fnSessionFromMonth
}

function sessionFromMonth(month: number): string {
    return (month <= 6) ? HIVER.long: AUTOMNE.long;
}


function session(): SessionConfig {
    return {
        constants: {
            AUTOMNE,
            HIVER
        },
        sessionFromMonth
    }
}

export default session;