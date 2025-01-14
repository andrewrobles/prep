### Bit Manipulation 

```
Input: a = "11", b = "1"
Output: "100"
```

First we do `a ^ b` to get 10 for the answer then we do `(a & b) << 1` to get 10 for the carry. Next we do `answer ^ carry` to get 0 for the new answer then `(answer & carry) << 1` to get 100 for the carry. Then we do `answer ^ carry` to get 100 for the new answer then `(answer & carry) << 1` to get 0 for the carry. The carry is now 0 so we return the answer 100.

```
Input: a = "1010", b = "1011"
Output: "10101"
```

First we do `a ^ b` to get 1 for the answer and `(a & b) << 1` to get 10100 for the carry. Next we do `answer ^ carry` to get 10101 for the new answer and `(answer & carry) << 1` to get 0 for the carry. The carry is now 0 so we return the answer 10101.

### Pseudocode
First we do `answer = a ^ b`  and `carry = (a & b) << 1`. Then while carry we do `answer ^ carry` to get the new answer and `(answer & carry) << 1` for the carry. When the loop terminates we return the answer.

### Complexity
The time complexity is O(N + M) and the space complexity is O(max(N, M)), where N and M are the length of the input strings.

### Solution
```js
const addBinary = (a, b) => {
    a = BigInt(`0b${a}`), b = BigInt(`0b${b}`)
    let answer = a ^ b, carry = (a & b) << BigInt(1)
    while (carry) {
        new_answer = answer ^ carry
        carry = (answer & carry) << BigInt(1)
        answer = new_answer
    }
    return answer.toString(2)
}
```