/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let newSet = new Set();

    for (num of nums) {
        if (newSet.has(num)) {
            return true;
        } else {
            newSet.add(num);
        }
    }

    return false;
};
