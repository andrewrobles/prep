const longestSubarray = (nums) => {
    let i = 0, j = 0, zeroes = 0
    while (j < nums.length) {
        j++
        if (nums[j - 1] === 0) {
            zeroes++
        }

        if (zeroes > 1) {
            if (nums[i] === 0) {
                zeroes--
            }
            i++
        }
    }
    return j - i - 1
}
module.exports = longestSubarray 