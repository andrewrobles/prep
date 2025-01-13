const fs = require('fs')
const path = require('path')

const defineTests = (solution, relativeFilePath) => {
    const parseTestFile = (callingFilePath, relativeFilePath) => {
        const testFilePath = path.resolve(path.dirname(callingFilePath), relativeFilePath)
        const content = fs.readFileSync(testFilePath, 'utf-8')
        const lines = content.split('\n').filter(Boolean)

        const tests = []
        let description = ''
        let inputs = []
        let expected = null

        lines.forEach(line => {
            if (line.startsWith('Example')) {
                description = line.trim()
            } else if (line.startsWith('Input:')) {
                const inputString = line.replace('Input: ', '').trim()
                const inputsObj = {}
                inputString.split(', ').forEach(pair => {
                    const [key, value] = pair.split(' = ')
                    inputsObj[key] = JSON.parse(value)
                })
                inputs = Object.values(inputsObj)
            } else if (line.startsWith('Output:')) {
                expected = JSON.parse(line.replace('Output: ', '').trim())
                tests.push({ description, inputs, expected })
            }
        })

        return tests
    }

    // Use `module.parent.filename` to determine the calling file's directory
    const callingFilePath = module.parent.filename
    const tests = parseTestFile(callingFilePath, relativeFilePath)

    tests.forEach(({ description, inputs, expected }) => {
        test(description, () => {
            const result = solution(...inputs)
            expect(result).toEqual(expected)
        })
    })
}

module.exports = defineTests 