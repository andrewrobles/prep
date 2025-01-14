const uniqueOccurrences = arr => {
    const numbers = {}
    for (const number of arr) {
        if (number.toString() in numbers) {
            numbers[number]++
        } else {
            numbers[number] = 1
        }
    }
    const occurences = new Set()
    for (const number in numbers) {
        if (!occurences.has(numbers[number])) {
            occurences.add(numbers[number])
        } else {
            return false
        }
    }
    return true
}
module.exports = uniqueOccurrences