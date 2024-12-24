const compress = chars => {
    let i = 0, j = 0
    
    while (j < chars.length) {
        // increment j until we find a mismatch
        while (chars[i] == chars[j]) {
            j += 1
        }
        // perform a compression
        chars[i + 1] = (j - i).toString()
        i += 2
    }

    // resize array
    chars.length = i
    return chars.length
}

module.exports = compress