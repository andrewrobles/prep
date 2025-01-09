const maxVowels = (s, k) => {
    let i = 0, j = k - 1

    let count = 0
    const substring = s.slice(0, k)
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']) 
    substring.split('').forEach(char => {
        if (vowels.has(char)) {
            count += 1
        }
    })
    let maxCount = count

    while (j < s.length) {
        if (vowels.has(s[i])) {
            count -= 1
        }
        i++
        
        j++
        if (vowels.has(s[j])) {
            count += 1
        }

        if (count > maxCount) {
            maxCount = count
        }
    }

    return maxCount
}

module.exports = maxVowels