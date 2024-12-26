#### Example 1
> Input: chars = ["a","a","b","b","c","c","c"]
Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".

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
        i   j
```
```
a 3 b 2 c 2 c
            i
            j
```
We have reached the end so we resize the array to i - 1 and return i - 1.

#### Middle Double Digit Compression
> Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b","c"]
Output: Return 5
Begin
```
a b b b b b b b b b b b b c
i
j
```
Start.
```
a b b b b b b b b b b b b c
i
  j
```
We find a mismatch but no compression is needed so we increment i.
```
a b b b b b b b b b b b b c
  i
  j
```
We increment j until we find a mismatch in which case we must do a compression but of double digit values. More generally, we calculate how many powers of 10 are in the difference between i and j.
```
a b b b b b b b b b b b b c
  i
                          j
```
We take note of the initial difference between the indexes and copy over the new character and increment j and i.  
```
a b 1 2 c b b b b b b b b c
          i
                            j
```
We have reached the end and no compression is necessary as found from looking at the initial delta so we resize the array to i - 1 and return i - 1.

#### Example 2
> Input: chars = ["a"]
Output: Return 1, and the first character of the input array should be: ["a"]
Explanation: The only group is "a", which remains uncompressed since it's a single character.

```
a
i
j
```
Start. We see that j is at the end of the array. Since this is the case we must return the length of i which is 1. 

#### Pseudocode
We start by setting i and j equal to 0 and also d to 0. We increment j until we find a mismatch and when we do we must see if we need to perform a compression. We need to perform a compression if the count is bigger than 1. If we need to perform a compression we take the digits from count and place them in front of i. We place this number after i and then we increment i to go after this number. If we do not need to perform a compression then we set i to the next number. We repeat this process until j gets to the last digit and when that happens we have iterated through the entire array.