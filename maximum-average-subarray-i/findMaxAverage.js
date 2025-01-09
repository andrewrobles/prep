const findMaxAverage = (nums, k) => {
    let i = 0, j = k - 1

    const subarray = nums.slice(0, k)
    let sum = subarray.reduce((a, b) => a + b, 0)
    let maximum = sum / k 

    while (j < nums.length) {
        sum -= nums[i]
        i++

        j++
        sum += nums[j]

        if(sum / k > maximum) {
            maximum = sum / k
        }
    }

    return maximum
}

module.exports = findMaxAverage