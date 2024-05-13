export function numberSubStr(v: number, start: number = 0, end?: number): number {
    return Number(v.toString().substring(start, end))
}