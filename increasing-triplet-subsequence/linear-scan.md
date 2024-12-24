### Linear Scan

> Input: nums = [2,1,5,0,4,6]
Output: true
Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.

When nums = [2, 1, 5, 0, 4, 6] we keep track of the smallest number which is 2 then 1 then 0 then does not get updated after that. We also keep track of the second smallest number which is 5 then 4 then does not get updated after that. We also keep track of the third smallest number which is only ever 6 and when we get to that point we return true.

#### Pseudocode
When nums, an array of integers, is provided, we keep track of the smallest number x[i] then update this when we come across a smaller number. We also keep track of the second smallest number which is x[j], when we find x[k] we return true, otherwise we return false.

#### Solution
[linear-scan.js](linear-scan.js)