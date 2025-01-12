#### Sliding Window
- initialize two pointers i and j to 0
- initialize a zeroes variable to be 0
- while `j < nums.length`:
    - increment j
    - if `nums[j - 1] === 0`, increment zeroes
    - if `zeroes > 1`, increment i and update zeroes
- return j - i - 1

#### Example 1
> Input: nums = [1,1,0,1]
Output: 3

At the end (when i = 0, j = 4, zeroes = 1) we return j - i - 1 = 3
```
1101
i
    j
```