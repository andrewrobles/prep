const defineTests = require('../defineTests')
const longestOnes = require('./longest-ones')

defineTests(
    longestOnes,
    [
        {
            description: 'example 1',
            inputs: [
                [1,1,1,0,0,0,1,1,1,1,0],
                2
            ],
            expected: 6
        },
        {
            description: 'example 2',
            inputs: [
                [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1],
                3
            ],
            expected: 10
        },
        {
            description: 'edge case 1',
            inputs: [
                [0, 0, 0, 0],
                0
            ],
            expected: 0
        }
    ]
)