> Input: chars = ["a","a","b","b","c","c","c"]
Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".

For the naive implementation, when i = 0 we cannot do anything because it is the first element. When i = 1 we have reached a compression case so we add a pointer to j = 0 and k = 1. When i = 2, we have finished the compression case so we must perform a compression. We set chars[j + 1] = j - k + 1 and continue. We do the same thing to handle the the consecutive b characters. When j = 4 and k = 6, we must perform a compression. we set chars[j + 1] = j - k + 1 then resize the array by shortening it by 1.

The concern is that this has the potential to be very inefficient due to the fact that we have to shift the values in the case when we have to compress 3 or more characters that are not at the end of the array. I think we might be able to do a trailing and leading pointer approach.

The pointers are both pointing to the same value so we do nothing. 
```
a a b b c c c
i
j
```
The pointers are both pointing to the same value so we do nothing.
```
a a b b c c c
i
  j
```
The pointers are pointing to different values now so we perform a compression.
```
a a b b c c c
i
    j
```
Now we reset to where i is pointing to the value after the compression and j is pointing to the first number it was pointing to.
```
a 2 b b c c c
    i
    j
```
Both pointers are pointing to the same so we do nothing.
```
a 2 b b c c c
    i
      j
```
We have reached a mismatch so we do a compression.
```
a 2 b b c c c
    i
        j
```
We reset.
```
a 2 b 2 c c c
        i
        j
```
When j reaches the end of the array we do a compression
```
a 2 b 2 c c c
        i
              j
```
Since we have reached the end there is no more values to copy so we resize the array to be 6 and return that value.
```
a 2 b 2 c 3 c
            i
              j
```
#### Middle triple compression
> Input: chars = ["a", "a", "a", "b", "b", "c", "c"]
Output: Return 6

```
a a a b b c c
i     j
```
We see a mismatch but we do not want to perform a compression like we have previously, we simply want to copy over the value. We need to make note of the fact that after the compression, i and j were off by 1.
```
a 3 a b b c c
    i j
```
We have reached a mismatch, so we need to perform a compression, but remember that we had the initial offset by 1 so we will subtract the difference from the compression.
```
a 3 b b b c c
    i     j
```
We copy over the value in this case but also make note of the delta.
```
a 3 b 2 b c c
        i j
```
We have reached the end so we perform a compression taking the delta into account.
```
a 3 b 2 c c c
        i     j
```
```
a 3 b 2 c 2 c
            i j
```
We have reached the end so we resize the array to i - 1 and return i - 1.

#### Middle Double Digit Compression
> Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b","c"]
Output: Return 5

