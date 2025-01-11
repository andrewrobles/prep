Solution: [longest-ones.js](longest-ones.js)
#### Sliding Window
- initialize two pointers i and j to 0
- initialize a zeroes variable to be 0
- while `j < nums.length`:
    - increment j
    - if `nums[j - 1] === 0`, increment zeroes
    - if `zeroes > k`, increment i and update zeroes
- return the length of the subarray starting at i and ending at j

#### Example 1
> Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6

The max subarray here is 5

i = 0, j = 5, zeroes = 2
```
11100011110
i    j
```
Here we have an invalid subarray and we know this because we have counted 3 `0`'s using the j pointer.

i = 1, j = 6, zeroes = 3
```
11100011110
 i    j
```
Here we found a valid subarray but the length is still 5

i = 4, j = 9, zeroes = 2
```
11100011110
    i    j
```
We are able to increment j to increase the length of our subarray to 6

i = 4, j = 10, zeroes = 2
```
11100011110
    i     j
```
We have reached the end of our subarray and the maximum length is still 6

i = 5, j = 11, zeroes = 3
```
k = 2
11100011110
     i     j
```

#### Example 2
> Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10

Here we have reached the maximum k = 3 of zeroes

i = 0, j = 5, zeroes = 3
```
0011001110110001111
i    j
```
Shift the window without affecting the length

i = 2, j = 7, zeroes = 3
```
0011001110110001111
 i    j
```
Here we begin to increase the length because zeroes is less than k
```
0011001110110001111
  i    j
```
This is the biggest that we can get to maintain a valid subarray

i = 2, j = 12, zeroes = 3
```
0011001110110001111
  i         j
```
Now we have an invalid subarray
i = 3, j = 13, zeroes = 4
```
0011001110110001111
   i         j
```
We end the loop without changing the length of the window
i = 9, j = 19, zeroes = 3
```
0011001110110001111
         i         j
```
