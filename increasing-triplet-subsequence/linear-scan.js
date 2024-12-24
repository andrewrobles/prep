const increasingTriplet = nums => {
    let FIRST_SMALLEST = Number.MAX_VALUE
    let SECOND_SMALLEST = Number.MAX_VALUE
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < FIRST_SMALLEST) {
            FIRST_SMALLEST = nums[i]
        } else if (nums[i] > FIRST_SMALLEST && nums[i] < SECOND_SMALLEST) {
            SECOND_SMALLEST = nums[i]
        } else if (nums[i] > SECOND_SMALLEST) {
            return true
        }
    }
    return false
}