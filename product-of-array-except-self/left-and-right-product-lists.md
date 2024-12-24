### Left and Right Product Lists

>Input: nums = [1,2,3,4]
Output: [24,12,8,6]

When nums = [1 2 3 4] we see the result is [2*3*4, 1*3*4, 1*2*4, 1*2*3]
which is the result of taking the left elements [1, 1, 1*2, 1*2*3] and
the right elements [2*3*4, 3*4, 4, 1] and multiplying them together.
So we start by creating an array [1, 1, 1, 1] and iterating from 1 to 
len(nums) - 1 and setting curr to nums[0] and place it in index 1 then
we multiple curr by nums[1] and place the result in index 2 until we get
to the end. We do something similar in which we iterate from len(nums) - 2
to index 0 in which we take curr of the previous index and multiply by the 
and fill the same array by the products.

#### Solution
[left-and-right-product-lists.js](left-and-right-product-lists.js)

