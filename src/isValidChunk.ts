export function isValidChunks(input: string): number | string {
    const stack: string[] = [];
    const openingChars = ['(', '[', '{', '<'];
    const closingChars = [')', ']', '}', '>'];

    let index = -1;

    for (const char of input) {
        index++;

        if (openingChars.includes(char)) {
            stack.push(char);
        } else if (closingChars.includes(char)) {
            if (stack.length === 0) {
                return index;
            }

            const lastOpenChar = stack.pop();
            // Check if the opening and closing characters match
            if (
                !lastOpenChar || openingChars.indexOf(lastOpenChar) !== closingChars.indexOf(char)
            ) {
                // Invalid closing character found at current index
                return index;
            }
        }
    }
    // Return valid Chunk if all chunks are valid, otherwise return index of first invalid character or unclosed chunk
    return stack.length > 0 ? input.lastIndexOf(stack[stack.length -1]) : "Valid Chunk";
}




// const invalidInput2 = "[[[[[[[]]]]]]({<>})]";
// console.log(isValidChunks(invalidInput2));

