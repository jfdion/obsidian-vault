import { Semester } from "./configSession"
import { Course, Schedule, newCourse, newSchedule } from "./course"
import { pipe } from "./functional"
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

const seance: Seance = pipe(newSeance(), withSession)


function buildSeance(tp: Templater): Seance {
    const semester = await tp.system.prompt()
}

function ewSeance(date: Date, semesterCode: string): Seance {
    return {
        filename: "",
        cours: newCourse(),
        session: newEmptySession(),
        date: new Date(),
        weekNumber: 0,
        schedule: newSchedule(),
        state: SeanceState.TODO,
        MOC: ""
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

function newEmptySession(): Semester {
    throw new Error("Function not implemented.")
}
