expor type Cours = { short: string, number: string, long: string }

const PO2: Cours = { short: "PO2", number: "420-W30-SF", long: "Programmation orientée objet II" }
const CS: Cours = { short: "CS", number: "420-W53-SF", long: "Cybersécurité" }
const IT: Cours = { short: "IT", number: "420-W54-SF", long: "Innovation et veille technologique" }
const BD1: Cours = { short: "BD1", number: "420-W22-SF", long: "Bases de données I" }
const SW: Cours = { short: "SW", number: "420-W41-SF", long: "Services Web" }
const ST: Cours = { short: "ST", number: "420-W70-W71-SF", long: "Stages" }



const semester: Record<string, Cours[]> = {
    "A24": [PO2, CS, IT],
    "H24": [BD1, SW, ST]
}

const configSession = {
    chip,
    highlight
}

export default configSession