Solution: [largest-altitude.js](largest-altitude.js)

#### Prefix Sum
- create an altitude variable and set it equal to 0
- create a maximum variable and set it equal to 0
- for each value x in the nums array:
    - calculate the new altitude variable
    - update maximum if necessary
- return the maximum

#### Example 1

[-5, 1, 5, 0, -7]
0 - 5 = -5
-5 + 1 = -4
-4 + 5 = 1
1 + 0 = 1
1 - 7 = -6
We take the maximum of all these values and get 1

