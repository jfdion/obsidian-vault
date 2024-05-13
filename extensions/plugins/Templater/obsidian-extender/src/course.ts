export type Course = { short: string, number: string, long: string, slug: string, schedule: Schedule[] }
export type Schedule = { day: string, startTime: number, endTime: number }

export enum Style {
    LONG = 'long',
    SHORT = 'short',
    NUMBER = 'number'
}

export const NULL_COURSE: Course = { short: "NA", number: "NA", long: "NA", slug: "NA", schedule: [] }

export function newCourse() {
    return {
        ...NULL_COURSE,
        schedule: []
    }
}