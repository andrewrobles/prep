#### Example 1
> Input: nums = [1,7,3,6,5,6]
Output: 3

For x in nums:
1. left_sum = 0, right_sum = 27 
2. left_sum = 1, right_sum = 20
3. left_sum = 8, right_sum = 17
4. left_sum = 11, right_sum = 11

#### Prefix Sum
- initialize left_sum to 0 and right_sum to sum(nums)
- for i in range(nums):
    - increment left_sum by nums[i - 1] if possible
    - decrement right_sum by nums[i]
    - if left_sum === right_sum return i
- return -1