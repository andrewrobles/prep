const moveZeroes = require('./solution')

test('example 1', () => {
    nums = [0, 1, 0, 3, 9]
    moveZeroes(nums)
    expect(nums).toEqual([1, 3, 9, 0, 0])
})

test('example 2', () => {
    nums = [0]
    moveZeroes(nums)
    expect(nums).toEqual([0])
})

test('0 0', () => {
    nums = [0, 0]
    moveZeroes(nums)
    expect(nums).toEqual([0, 0])
})

test('1 0', () => {
    nums = [1, 0]
    moveZeroes(nums)
    expect(nums).toEqual([1, 0])
})

test('2 1', () => {
    nums = [2, 1]
    moveZeroes(nums)
    expect(nums).toEqual([2, 1])
})
