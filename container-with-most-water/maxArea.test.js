const runTests = require('../runTests')
const maxArea = require('./maxArea')

runTests(
    maxArea,
    [
        {
            description: 'example 1',
            inputs: [[1,8,6,2,5,4,8,3,7]],
            expected: 49
        },
        {
            description: 'example 2',
            inputs: [[1, 1]],
            expected: 1
        },
        {
            description: 'edge case 1',
            inputs: [[8, 7, 2, 1]],
            expected: 7
        },
        {
            description: 'edge case 2',
            inputs:  [[2,3,4,5,18,17,6]],
            expected: 17
        }
    ]
)