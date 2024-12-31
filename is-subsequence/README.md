### [392. Is Subsequence](https://leetcode.com/problems/is-subsequence)

##### Solution
[solution.js](solution.js)

##### Pseudocode
- set i = 0
- set j = 0
- while i has not reached the end of t and j has not reached the end of s
    - if the pointer values are equal
        - increment j and increment i
    - else
        - while i has not reached the end of t and the pointer values are not equal
            - increment i
- if i has reached the end of t array and j has not reached the end of s:
     - return false
- return true

##### Example 1 
> Input: s = "abc", t = "ahbgdc"
Output: true

- `s[j]` is "a"
- `t[i]` is "a" so no need to increment
- `s[j]` is "b"
- `t[i]` is "a" after incrementing i to 2
- `t[i]` is "c"
- `t[i]` is "c" after incrementing i to 5
- i has reached the end of the t array and j has reached the end of s
- return True

##### Example 2
> Input: s = "axc", t = "ahbgdc"
Output: false

- `s[j]` is "a"
- `t[i]` is "a" so no need to increment
- `s[j]` is "x"
- `t[i]` is incremented all the way to the end
- i has reached the end of the t array and j has not reached the end of s
- return False
