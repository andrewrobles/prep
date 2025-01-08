Solution: [maxOperations.js](maxOperations.js)
#### Two Pointers
- sort the array
- set both pointers to the ends of the array
- do the following while i < j
  - if the sum of the values equal k then increment operations and move the pointers inward
  - if the sum of the values is less than k then increment the smaller pointer
  - if the sum of the values is more than k than decrement the larger pointer
- return operations


#### Example 1
> Input: nums = [1,2,3,4], k = 5
> Output: 2

1 + 4 = 5 so we have found a pair so we increment operations and move the pointers to the next element inward
```
1 2 3 4
i
      j
```
2 + 3 = 5 so we increment operations and move the pointers inward
```
1 2 3 4
  i
    j
```
i is now greater than j so we terminate the logic loop
```
1 2 3 4
    i
  j
```
#### Example 2
> Input: nums = [3,1,3,4,3], k = 6
> Output: 1

1 + 4 = 5 is less than 6 so we increment the smaller pointer
```
1 3 3 3 4
i
        j
```
3 + 4 = 7 is more than 6 so we decrement the larger pointer
```
1 3 3 3 4
  i
      j
```
3 + 3 = 6 is 6 so we decrement both pointers and increment operations
```
1 3 3 3 4
    i
    j
```
We terminate because i < j





