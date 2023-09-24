import {describe, expect, test} from '@jest/globals';
import { isValidChunks } from "../src/isValidChunk";

describe("isValidChunks for valid chunks", () => {
    test("Valid chunks", () => {
        expect(isValidChunks("()")).toBe("Valid Chunk");
        expect(isValidChunks("{}{}")).toBe("Valid Chunk");
        expect(isValidChunks("{}<()[]>")).toBe("Valid Chunk");
        expect(isValidChunks("[[[[[[[]]]]]]({<>})]")).toBe("Valid Chunk");
    });
});



describe("isValidChunks for not valid chunks", () => {
    test("InValid chunks", () => {
        expect(isValidChunks("(>")).toBe(1);
        expect(isValidChunks("[<<>]")).toBe(4);
        expect(isValidChunks("{}<>]")).toBe(4);
        expect(isValidChunks("({}<>])")).toBe(5);
        expect(isValidChunks("(<{()}{}{}><<>{[]}>[<<>><{}>{}>[]<>][]{}[])")).toBe(30);
    });
});
