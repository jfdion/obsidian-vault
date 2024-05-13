import { describe, expect, test } from "vitest";
import { numberSubStr } from "./number";

describe(`Number substring`, () => {

    test(`without start or end parameter`, () => {
        const result = numberSubStr(12345);

        expect(result).toBe(12345)
    })

});