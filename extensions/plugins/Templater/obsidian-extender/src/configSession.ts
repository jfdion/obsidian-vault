import html from "./html"

export type Cours = { short: string, number: string, long: string }

const PO2: Cours = { short: "PO2", number: "420-W30-SF", long: "Programmation orientée objet II" }
const CS: Cours = { short: "CS", number: "420-W53-SF", long: "Cybersécurité" }
const IT: Cours = { short: "IT", number: "420-W54-SF", long: "Innovation et veille technologique" }
const BD1: Cours = { short: "BD1", number: "420-W22-SF", long: "Bases de données I" }
const SW: Cours = { short: "SW", number: "420-W41-SF", long: "Services Web" }
const ST: Cours = { short: "ST", number: "420-W70-W71-SF", long: "Stages" }


const semester: Record<string, Cours[]> = {
    "A24": [CS, IT, PO2].sort(sortCourse),
    "H24": [BD1, SW, ST].sort(sortCourse)
}

function sortCourse(a: Cours, b: Cours) {
    if (a.number < b.number) {
        return -1;
    }
    if (a.number > b.number) {
        return 1;
    }
    return 0
}

function courseToChip(cours: Cours) {
    return html.chip(`cours-${index}`, cours.short);
}

function courseIndex(session: string): (cours: Cours) => number {
    return (cours: Cours): number => {
        return semester[session].findIndex(c => c.long === cours.long
            || cours.short === cours.short
            || cours.number === cours.number
        )
    }

}


const configSession = {
    (session: string) => {
    return
}
}

export default configSession