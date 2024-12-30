const moveZeroes = nums => {
    let A = 0, B = 0

    while (B < nums.length - 1) {
        while (A < nums.length - 1 && nums[A] !== 0) {
            A += 1
        }
        B = A
        while (B < nums.length - 1 && nums[B] === 0) {
            B += 1
        }
        if (nums[A] == 0 && nums[B] !== 0) {
            [nums[A], nums[B]] = [nums[B], nums[A]]
        }
    }
}
module.exports = moveZeroes