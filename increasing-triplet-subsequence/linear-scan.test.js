const increasingTriplet = require('./linear-scan')

test('example 1', () => {
    input = [1, 2, 3, 4, 5] 
    expect(increasingTriplet(input)).toBe(true)
})

test('example 2', () => {
    input = [5, 4, 3, 2, 1] 
    expect(increasingTriplet(input)).toBe(false)
})

test('example 3', () => {
    input = [2, 1, 5, 4, 6]
    expect(increasingTriplet(input)).toBe(true)
})