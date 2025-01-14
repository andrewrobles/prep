Solution: [uniqueOccurrences.js](uniqueOccurrences.js)

#### Map & Set
- initialize a numbers map
- for number of arr:
    - if number not in numbers then set to 1
    - else increment number in numbers map
- initialize an occurences set
- for number in numbers map:
    -  if value not in occurences then add it to the set
    - if value is in occurences then return false
- return true