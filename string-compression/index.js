const compress = chars => {
    let i = 0, j = 0, count = 0

    while (j < chars.length) {

        // increment j until we find a mismatch or goes out of bounds
        while (j < chars.length && chars[i] == chars[j]) {
            j += 1
            count += 1
        }

        if (count > 1) {
            // perform a compression
            let digits = []
            digits = count.toString().split('')
            digits.map((digit, digitIndex) => {
                chars[i + 1 + digitIndex] = digit
            })

            i += digits.length
        }

        i += 1

        if (i < chars.length - 1) {
            // restore equality condition
            chars[i] = chars[j]
        }
        count = 0
    }

    // resize array
    chars.length = i
    return chars.length
}

module.exports = compress