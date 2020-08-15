const assert = require("assert");
const { forEach, map } = require("./index");

// const test = (desc, fn) => {
//     console.log("----", desc);
//     try {
//         fn();
//     } catch (error) {
//         console.log(error.message);
//     }
// };

// changed "test" to "it" now that I'm using "mocha" testing library
it("The forEach function", () => {
    let sum = 0;
    forEach([1, 2, 3], (value) => {
        sum += value;
    });

    // assert.strictEqual(result, expected result, [optional] console.log)
    assert.strictEqual(sum, 6, "Expected forEach to sum the array");

    // assert = node's built in method similar to below
    // if (sum !== 7) {
    //     throw new Error("Expected summing array to equal 6");
    // }
});

it("The map function", () => {
    const result = map([1, 2, 3], (value) => {
        return value * 2;
    });

    // assert.strictEqual(result[0], 2);
    // assert.strictEqual(result[1], 4);
    // assert.strictEqual(result[2], 7);
    // OR
    assert.deepStrictEqual(result, [2, 4, 7]);
});

// RUN CODE - "mocha index.test.js"
