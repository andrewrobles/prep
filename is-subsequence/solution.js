const isSubsequence = (s, t) => {
    let i = 0
    let j = 0
    while (i < t.length && j < s.length) {
        if (j < s.length && s.charAt(j) == t.charAt(i)) {
            j += 1
            i += 1
        } else {
            while (i < t.length && s.charAt(j) !== t.charAt(i)) {
                i += 1
            }
        }
    }
    if (i === t.length && j !== s.length) {
        return false
    }
    return true
}

module.exports = isSubsequence