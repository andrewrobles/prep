### Built-in Split + Reverse 
```
Input: s = "the sky is blue"
Output: "blue is sky the"
```
We can split the string to get an array of words and iterate through the string backwards to produce a new string with the words reversed. 

```
Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
```
We will do the same approach as before except this time we will use the strip function to begin. 

```
Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
```
The first approach will work for this as well.

### Pseudocode
Strip the string then do split then reverse the array then call the join function. Note that the \s+ regex means a set of adjacent whitespace characters and the surrounding forwardslashes are delimiters for the regex expression.

### Solution

```js
const reverseWords = s => s.trim().split(/\s+/).reverse().join(' ')
```