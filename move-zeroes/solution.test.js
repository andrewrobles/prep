const moveZeroes = require('./solution');
const runTests = require('../runTests')

const tests = [
    { description: 'example 1', input: [0, 1, 0, 3, 9], expected: [1, 3, 9, 0, 0] },
    { description: 'example 2', input: [0], expected: [0] },
    { description: '0 0', input: [0, 0], expected: [0, 0] },
    { description: '1 0', input: [1, 0], expected: [1, 0] },
    { description: '2 1', input: [2, 1], expected: [2, 1] },
];

runTests(moveZeroes, tests)