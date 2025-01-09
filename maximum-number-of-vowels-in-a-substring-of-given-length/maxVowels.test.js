const defineTests = require('../defineTests')
const maxVowels = require('./maxVowels')

defineTests(
    maxVowels,
    [
        {
            description: 'example 1',
            inputs: [
                'abciiidef',
                3
            ],
            expected: 3
        },
        {
            description: 'example 2',
            inputs: [
                'aeiou',
                2
            ],
            expected: 2
        },
        {
            description: 'example 3',
            inputs: [
               'leetcode',
               3
            ],
            expected: 2
        },
        {
            description: 'edge case 1',
            inputs: [
                'a',
                1
            ],
            expected: 1
        }
    ]
)