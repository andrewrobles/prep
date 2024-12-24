const productExceptSelf = (nums) => {
    let curr = 1, left = Array(nums.length).fill(1)
    for(let i = 0; i < nums.length - 1; i++) {
        curr = curr * nums[i]
        left[i + 1] = curr
    }

    curr = 1, right = Array(nums.length).fill(1)
    for(let i = nums.length - 1; i > 0; i--) {
        curr = curr * nums[i]
        right[i - 1] = curr 
    }
    
    answer = Array(nums.length).fill(1)
    for(let i = 0; i < answer.length; i++) {
        answer[i] = left[i] * right[i]
    }

    return answer
};