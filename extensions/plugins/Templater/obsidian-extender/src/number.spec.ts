import { describe, expect, test } from "vitest";
import { numberSubStr } from "./number";

describe(`Number substring`, () => {

    const n = 12345

    test(`without start or end parameter`, () => {
        const result = numberSubStr(n);

        expect(result).toBe(n)
    })

    test(`with start and no end parameter`, () => {
        const result = numberSubStr(n, 2)

        expect(result).toBe(345)
    })

    test(`with start and end parameter`, () => {
        const result = numberSubStr(n, 2, 4)

        expect(result).toBe(34)
    })

});