Solution: [maxVowels.js](maxVowels.js)

#### Sliding Window
- initialize pointers i and j to 0 and k - 1, respectively
- count the number of vowels in this substring and store it in maximum and count 
- while j < s.length
    - decrement count if i is pointing to a vowel then increment i
    - increment j then increment count if j is pointing to a vowel
    - update maximum if necessary
- return count variable
