Solution: [maxOperations.js](maxOperations.js)
#### One Pass Hashmap
- create an operations variable and a hashmap variable
- for each x in nums do the following:
    - if the complement exists in the map
        - decrement the complement count value by 1
        - remove from map if count is decremented to 0 
        - increment operations value by 1
    - else add x to the map and set it to 1 if it does not exist in the map otherwise increment the count

#### Example 1
> Input: nums = [1,2,3,4], k = 5
Output: 2

When x is 3,
```js
operations = 0
counts = {
    1: 1,
    2: 1
}
```
we see that the complement exists in the map so we remove the complement from the map entirely and increment operations.
```js
operations = 1
counts = {
    1: 1
}
```
When x is 4, we see that the complement is in the map so we remove it and increment operations.
```.
operations = 2
counts = {}
```

#### Example 2
> Input: nums = [3,1,3,4,3], k = 6
Output: 1

When x is 3, we see that the complement has not been seen so we add it to the map.
```js
operations = 0
counts = {
    3: 1
}
```
When x is 1, we add this to the map.
```js
operations = 0
counts = {
    3: 1,
    1: 1,
}
```
When x is 3, we see that the complement is in the map so we remove the complement and increment operations.
```js
operations = 1
counts = {
    1: 1,
}
```
At the end we find no more complements.
```js
operations = 1
counts = {
    1: 1,
    4: 1,
    3: 1
}
```


