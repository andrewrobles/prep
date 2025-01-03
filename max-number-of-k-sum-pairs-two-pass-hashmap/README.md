##### Example 2
> Input: nums = [3, 1, 3, 4, 3], k = 6
Output: 1

Count the number of occurences of each value
```js
counts = { 
    3: 3,
    1: 1,
    4: 1
}
```
Since 3 is equal to k / 2 then we use the use `counts[3] / 2` which is 1. All the other values do not have pairs so we terminate and return 1.

##### Example 1
> Input: nums = [1,2,3,4], k = 5
Output: 2

```js
counts = {
    1: 1,
    2: 1,
    3: 1,
    4: 1
}
```

For 1, the pair 4 exists in nums so we take the minimum of each and add 1 to the count then decrement this count by 1 so we have counts equal to:
```js
counts = {
    1: 0,
    2: 1,
    3: 1,
    4: 0 
}
```

For 2, we do the same and increment count by 1 and then we have counts equal to:
```js
counts = {
    1: 0,
    2: 0,
    3: 0,
    4: 0 
}
```
##### Pseudocode
- create an operations variable
- count all of the occurences of the numbers using a hash map
- for each x in the hashmap do the following:
    - if x is equal to k / 2 then add `Math.floor(count[x] / 2)` to operations and subtract `count[x]` by the value added to operations
    - otherwise check to see if k - x is in counts. If it is, then add `min(count[x], count[k - x])` to operations and subtract `count[x]` and `count[k - x]` by the value added to operations
- return operations

