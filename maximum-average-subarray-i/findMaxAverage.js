const findMaxAverage = (nums, k) => {
    let i = 0, j = k
    let maximum = Number.MIN_SAFE_INTEGER 
    let sum = 0
    while (j < nums.length) {
        if (i === 0) {
            const slice = nums.slice(0, k)
            sum = slice.reduce((a, b) => a + b, 0) 
            if (sum / k > maximum) {
                maximum = sum / k
            }
        } else {
            sum += nums[j]
            if (sum / k > maximum) {
                maximum = sum / k
            }
        }
        sum -= nums[i]
        i++
        j++
    }
    return maximum
}

module.exports = findMaxAverage