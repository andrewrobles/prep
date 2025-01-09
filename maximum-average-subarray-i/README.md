Solution: [findMaxAverage.js](findMaxAverage.js)
#### Sliding Window
- initialize pointers i and j to 0 and k - 1, respectively
- calculate the sum of all the numbers in the subarray
- create a maximum variable and set it equal to sum / k
- while j < nums.length:
    - subtract i value from sum and increment i
    - increment j and add it to sum
    - update the maximum if necessary
- return maximum variable

#### Example 1
> Input: nums = [1,12,-5,-6,50,3], k = 4
> Output: 12.75000

The sum is 2 and we set maximum to 0.5
```
1 12 -5 -6 50 3
i        j
```
The sum is updated to be 51 and maximum is updated to 12.75
```
1 12 -5 -6 50 3
  i        j
```
The sum is updated to 42 and maximum stays the same
```
1 12 -5 -6 50 3
      i       j
```
We return the maximum to be 12.75