### 70. Recursion with Cache


```
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
```
We create a hashmap that we store the root node and add the recursive result. So after the algorithm terminates we will have the following hashmap { 2: 1, 1: 2}. 

### Recursive Tree 
```
     0 
   /   \
  2     1
 / \   / \
4   3 3   2
         / \  
        4   3          
```

### Pseudocode
If for any reason that it already exists in the cache then there is no need to do a recursive call.

### Solution
```js
const climbStairs = n => {
    cache = {}
    const step = (count) => {
        if (count === n) {
            return 1
        }

        if (count > n) {
            return 0
        }

        let total = 0
        if (count + 1 in cache) {
            total += cache[count + 1]
        } else {
            cache[count + 1] = step(count + 1)
            total += cache[count + 1]
        }

        if (count + 2 in cache) {
            total += cache[count + 2]
        } else {
            cache[count + 2] = step(count + 2)
            total += cache[count + 2]
        }

        return total
    }
    return step(0)
}
```
