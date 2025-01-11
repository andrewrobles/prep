const longestOnes = (nums, k) => {
    let i = 0, j = 0, zeroes = 0
    while (j < nums.length) {
        j++
        if (nums[j - 1] === 0) {
            zeroes++
        }

        if (zeroes > k) {
            if (nums[i] === 0) {
                zeroes--
            }
            i++
        }
    }
    return j - i
}
module.exports = longestOnes