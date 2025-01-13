const defineTests = require('../defineTests')
const largestAltitude = require('./index')

defineTests(
    largestAltitude,
    [
        {
            description: 'example 1',
            inputs: [
                [-5,1,5,0,-7]
            ],
            expected: 1
        },
        {
            description: 'example 2',
            inputs: [
                [-4,-3,-2,-1,4,3,2]
            ],
            expected: 0
        }
    ]
)