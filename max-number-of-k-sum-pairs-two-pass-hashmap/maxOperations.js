const maxOperations = (nums, k) => {
    let operations = 0, counts = {}

    nums.map(x => {
        counts[x] = x in counts ? counts[x] + 1 : 1
    })
 
    for (const key in counts) {
        const x = parseInt(key)
        if (parseInt(x) === k / 2) {
            operations += Math.floor(counts[x] / 2)
            counts[x] -= Math.floor(counts[x])
        } else {
            if (k - x in counts) {
                const operationCount = Math.min(counts[x], counts[k - x])
                operations += operationCount 
                counts[x] -= operationCount 
                counts[k - x] -= operationCount 
            }
        }
    }

    return operations
}

module.exports = maxOperations