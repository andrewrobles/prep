const maxOperations = (nums, k) => {
    let operations = 0, map = {}
    nums.map(x => {
        const complement = (k - x).toString()
        if (complement in map) {
            map[complement] -= 1
            if (map[complement] === 0) {
                delete map[complement]
            }
            operations += 1
        } else {
            value = x.toString()
            if (value in map) {
                map[value] += 1
            } else {
                map[value] = 1
            }
        }
    })
    return operations
}

module.exports = maxOperations