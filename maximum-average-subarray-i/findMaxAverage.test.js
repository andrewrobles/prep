const runTests = require('../runTests')
const findMaxAverage = require('./findMaxAverage')

runTests(
    findMaxAverage,
    [
        {
            description: 'example 1',
            inputs: [[1, 12, -5, -6, 50, 3], 4],
            expected: 12.75000
        },
        {
            description: 'example 2',
            inputs: [[5], 1],
            expected: 5
        }
    ]
)