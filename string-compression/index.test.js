const compress = require('./index')

test('example 1', () => {
    chars = ['a', 'a', 'b', 'b', 'c', 'c', 'c']
    expect(compress(chars)).toBe(6)
    expect(chars).toEqual(['a', '2', 'b', '2', 'c', '3'])
})

test('middle triple compression', () => {
    chars = ['a', 'a', 'a', 'b', 'b', 'c', 'c']
    expect(compress(chars)).toBe(6)
    expect(chars).toEqual(['a', '3', 'b', '2', 'c', '2'])
})

// test('example 4', () => {
//     chars = ['a','b','b','b','b','b','b','b','b','b','b','b','b']
//     expect(compress(chars)).toBe(4)
//     expect(chars).toEqual(['a', 'b', '1', '2'])
// })