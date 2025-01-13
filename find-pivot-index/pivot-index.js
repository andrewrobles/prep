const pivotIndex = nums => {
    let leftSum = 0, rightSum = 0 
    for (let i = 0; i < nums.length; i++) {
        rightSum += nums[i]
    }
    for (let i = 0; i < nums.length; i++) {
        rightSum -= nums[i]
        if (i > 0) {
            leftSum += nums[i - 1]
        }
        if (leftSum === rightSum) {
            return i
        }
    }
    return -1
}

module.exports = pivotIndex