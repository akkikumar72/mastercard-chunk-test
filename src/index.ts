import * as fs from "fs";
import {isValidChunks} from "./isValidChunk";

const filePath = process.argv[2];
if (filePath) {
    const inputData = fs.readFileSync(filePath, 'utf-8').trim();
    const result = isValidChunks(inputData);
    console.log(`Result: ${result}`);
} else {
    console.error('Please provide an input file path');
}
