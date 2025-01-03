const maxArea = height => {
    let i = 0, j = height.length - 1
    const area = (left, right) => (right - left) * Math.min(height[left], height[right])

    let max = area(i, j)
    while (i < j) {
        if (height[i] < height[j]) {
            i++
        } else {
            j--
        }

        if (area(i, j) > max) {
            max = area(i, j)
        }
    }
    return max 
}

module.exports = maxArea