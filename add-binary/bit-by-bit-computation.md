### Bit-by-Bit Computation
```
Input: a = "11", b = "1"
Output: "100"
```

For 1's place to 2's place, at the 1's place iteration, we get 0 for this digit and carry the 1 to get c = "0" so far. For the 1's place we add 1 and 1 and get 0 and carry the 1 so we have c = "00". Since we have reached the end and are still carrying a 1 we just add it to the next digit so we have c = "100".

```
Input: a = "1010", b = "1011"
Output: "10101"
```

For the 1's place to the 8's place we add 1 and 0 to get 1 so we have c = "1". For the 2's place we have 1 and 1 to get 0 and carry a 1 so we have c = "01". For the 4's place we have 1 from the carry, 0, and 0 so we get 1 for this digit so we have c = "101". For the 8's place we have 1 and 1 so we get 0 for this digit and carry the 1 so we have c = "0101". We have iterated through all the digits and still have a digit to carry so we add it to the beginning like c = "10101".

### Pseudocode
For i in range 1 to the length of the longer string, we look at a[a.length - i] if that index exists and b[b.length - i] if that index exists. If for any reason the index does not exist for either a or b, we just use 0 for the computation for that digit. If we are carrying a 1 from a previous digit, we add that to the computation as well. When adding 1 and 1 we add 0 to c and carry the 1, when adding 1 and 0 we add 1 to c, when adding 1 and 1 and carrying a 1 we get a 1 and carry the 1. When we get to the end of the iteration, if we are still carrying a value then we add it to c.

### Complexity
The time complexity is O(max(N, M)) and the space complexity is O(max(N, M)), where N and M are the length of the input strings.

### Solution
```js
const addBinary = (a, b) => {
    let c = '', carry = 0

    for (let i = 1; i <= Math.max(a.length, b.length); i++) {
        const computation = [
            carry,
            i <= a.length ? parseInt(a[a.length - i]) : 0,
            i <= b.length ? parseInt(b[b.length - i]) : 0
        ];
        const sum = computation[0] + computation[1] + computation[2]

        if (sum === 3) {
            c = '1' + c
            carry = 1;
        } else if (sum === 2) {
            c = '0' + c
            carry = 1;
        } else if (sum === 1) {
            c = '1' + c
            carry = 0;
        } else if (sum === 0) {
            c = '0' + c
            carry = 0;
        }
    }

    if (carry === 1) {
        c = '1' + c
    }

    return c;
}
```