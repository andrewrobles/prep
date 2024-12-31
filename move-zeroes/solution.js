const moveZeroes = nums => {
    let A = 0
    nums.map((_, B) => {
        while (A < nums.length - 1 && nums[A] !== 0) {
            A += 1
        }
        if (B > A && nums[B] !== 0 && nums[A] == 0) {
            [nums[A], nums[B]] = [nums[B], nums[A]]
        }
    })  
}
module.exports = moveZeroes