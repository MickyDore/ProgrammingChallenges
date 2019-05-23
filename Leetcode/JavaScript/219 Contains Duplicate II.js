/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {

    let index = {};

    for (let i = 0; i < nums.length; i ++) {
        if (nums[i] in index && i - index[nums[i]] <= k) {
            return true;
        }
        index[nums[i]] = i;
    }
    return false;
};
