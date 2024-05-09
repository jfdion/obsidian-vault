export type Course = { short: string, number: string, long: string, slug: string, schedule: Schedule[] }
export type Schedule = { day: string, startTime: number, endTime: number }

export enum Style {
    LONG = 'long',
    SHORT = 'short',
    NUMBER = 'number'
}