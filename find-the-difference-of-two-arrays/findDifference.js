const findDifference = (nums1, nums2) => {
    const set1 = new Set(nums1)
    const set2 = new Set(nums2)
    let list1 = []
    let list2 = []
    for (const x of set1) {
        if (!set2.has(x)) {
            list1.push(x)
        }
    }
    for (const x of set2) {
        if (!set1.has(x)) {
            list2.push(x)
        }
    }
    return [list1, list2]
}
module.exports = findDifference