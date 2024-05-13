
import { Course, NULL_COURSE, Style } from "./course"
import html from "./html"

export type Semester = Record<string, Course[]>

const PO2: Course = { short: "PO2", number: "420-W30-SF", long: "Programmation orientée objet II", slug: "prog-objet-ii", schedule: [{ day: "Lundi", startTime: 8, endTime: 11 }, { day: "Mercredi", startTime: 12, endTime: 15 }] }
const CS: Course = { short: "CS", number: "420-W53-SF", long: "Cybersécurité", slug: "cybersecurite", schedule: [] }
const IT: Course = { short: "IT", number: "420-W54-SF", long: "Innovation et veille technologique", slug: "innovation-et-veille-techno", schedule: [] }
const BD1: Course = { short: "BD1", number: "420-W22-SF", long: "Bases de données I", slug: "bd-i", schedule: [{ day: "Mercredi", startTime: 8, endTime: 11 }] }
const SW: Course = { short: "SW", number: "420-W41-SF", long: "Services Web", slug: "services-web", schedule: [{ day: "Lundi", startTime: 11, endTime: 13 }, { day: "Mercredi", startTime: 16, endTime: 18 }] }
const ST: Course = { short: "ST", number: "420-W70-W71-SF", long: "Stages", slug: "stages", schedule: [] }


const semester: Semester = {
    "A24": [CS, IT, PO2].sort(sortCourse),
    "H24": [BD1, SW, ST].sort(sortCourse)
}

function sortCourse(a: Course, b: Course) {
    if (a.number < b.number) {
        return -1;
    }
    if (a.number > b.number) {
        return 1;
    }
    return 0
}

function courses(session: string): Course[] {
    return semester[session] || [NULL_COURSE]
}

function courseToChip(session: string): (cours: string) => string {
    return (cours: string, style: Style = Style.LONG): string => {
        const index = courseIndex(session)(cours)
        const course = findCourse(session)(cours)
        return html.chip(`cours-${index + 1}`, course[style])
    }
}

function courseIndex(session: string): (cours: string) => number {
    return (cours: string): number => {
        return semester[session].findIndex(c => c.long === cours
            || c.short === cours
            || c.number === cours
        )
    }
}

function findCourse(session: string): (cours: string) => Course {
    return (cours: string): Course => {
        return semester[session].find(c => c.long === cours
            || c.short === cours
            || c.number === cours
        ) || NULL_COURSE
    }
}


function currySession(session: string) {
    return {
        courseToChip: courseToChip(session),
        findCourse: findCourse(session),
        courses: courses(session)
    }
}

const configSession = currySession

export default configSession