Solution: [maxArea.js](maxArea.js)

##### Pseudocode
- Set both pointers i and j to the first and last elements of the array
- Calculate the area of this setup and set to max variable
- Move the pointer inward that points to the lower line
- Update max variable if current area is greater than the greatest area found so far
- Repeat while i < j

##### Example 1
> Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

The goal is to choose the following pointers:
```
1 8 6 2 5 4 8 3 7
  i
                j
```
We start with the following setup:
```
1 8 6 2 5 4 8 3 7
i
                j
```
Always move the pointer that points to the lower line, in this case that was `i`. Moving the lower line pointer in this case would result in a smaller area so we choose to terminate the algorithm.
```
1 8 6 2 5 4 8 3 7
  i
                j
```

##### Edge Case 1
> Input: height = [8,7,2,1]
Output: 7

Area is 3
```
8 7 2 1
i
      j
```

Area is 4
```
8 7 2 1
i
    j
```

Area is 7
```
8 7 2 1
i
  j
```

##### Edge Case 2
> Input: height = [2,3,4,5,18,17,6]
Output: 17

Area is 12
```
2 3 4 5 18 17 6
i
              j 
```

Area is 15
```
2 3 4 5 18 17 6
  i
              j 
```

Area is 16
```
2 3 4 5 18 17 6
    i
              j 
```

Area is 15 
```
2 3 4 5 18 17 6
      i
              j 
```

Area is 12
```
2 3 4 5 18 17 6
        i
              j 
```

Area is 17
```
2 3 4 5 18 17 6
        i
            j 
```


