import { Semester } from "./configSession"
import { Course, Schedule } from "./course"
import templaterExtender, { Templater } from "./templaterExtender"


enum SeanceState {
    READY = 'ready',
    TODO = 'todo',
    TO_REVIEW = 'to-review',
    DONE = 'done',
    NA = 'na'
}

type Seance = {
    filename: string,
    cours: Course,
    session: Semester,
    date: Date,
    weekNumber: number,
    schedule: Schedule,
    state: SeanceState
    MOC: string
}

function buildSeance(tp: Templater): Seance {
    const semester = await tp.system.prompt()
}

function NewSeance(date: Date, semesterCode: string): Seance {
    return {
        filename: 
    }
}

function nomCours(tp: any, depth = 2) {
    const folderName = templaterExtender.getParentFolder(tp, depth)
    return folderName[0].split(" - ").join("/").replace(" ", "")
}

const seance = {
    nomCours
}

export default seance