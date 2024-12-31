const isSubsequence = require('./solution')

test('example 1', () => {
    const s = "abc"
    const t = "ahbgdc"
    const expected = true
    const actual = isSubsequence(s, t)
    expect(actual).toEqual(expected)
})

test('example 2', () => {
    const s = "axc"
    const t = "ahbgdc"
    const expected = false
    const actual = isSubsequence(s, t)
    expect(actual).toEqual(expected)
})

test('edge case 1', () => {
    const s = "aaaaaa"
    const t = "bbaaaa"
    const expected = false
    const actual = isSubsequence(s, t)
    expect(actual).toEqual(expected)
})
