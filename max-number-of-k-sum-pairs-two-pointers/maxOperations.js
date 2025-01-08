const maxOperations = (nums, k) => {
    nums.sort((a, b) => a - b)
    let operations = 0
    let i = 0, j = nums.length - 1
    while (i < j) {
        const sum = nums[i] + nums[j]
        if (sum === k) {
            operations += 1
            i++
            j--
        } else if (sum < k) {
            i++
        } else if (sum > k) {
            j--
        }
    }
    return operations
}

module.exports = maxOperations