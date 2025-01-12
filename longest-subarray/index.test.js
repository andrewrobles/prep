const defineTests = require('../defineTests')
const longestSubarray = require('./index')

defineTests(
    longestSubarray,
    [
        {
            description: 'example 1',
            inputs: [
                [1, 1, 0, 1]
            ],
            expected: 3
        },
        {
            description: 'example 2',
            inputs: [
                [0, 1, 1, 1, 0, 1, 1, 0, 1]
            ],
            expected: 5
        },
        {
            description: 'example 3',
            inputs: [
                [1, 1, 1]
            ],
            expected: 2
        }
    ]
)