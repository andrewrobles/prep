### Brute Force Recursion 

We will use brute force recursion then optimize to find a more efficient solution.

```
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
```
We start at 0 and do two recursive calls. One in which we take 1 step and one in which we take 2 steps. One arm of the recursive tree will return 1 because we have reached n = 2, the other arm will do two new branches in which one will go out of bounds and the other will reach n = 2 and return 1 as well. The recursive tree will look like the following:
```
  0
 / \
2   1
   / \
  3   2              
```

```
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
```
We take the same approach as in the above example. The recursive tree will look like the following:
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
When we get to the point in which the number of steps taken equals n, we return 1, if it is greater, we return 0. For each recursive step, we do two recursive calls, one in which we take 2 steps, and one in which we take 1 step. We return the sum of of the result of these two recursive calls.

### Complexity
This solution uses exponential time and linear space.

### Solution
```js
const climbStairs = n => {
    const step = (count) => {
        if (count === n) {
            return 1
        }

        if (count > n) {
            return 0
        }

        return step(count + 1) + step(count + 2)
    }
    return step(0)
}
```
