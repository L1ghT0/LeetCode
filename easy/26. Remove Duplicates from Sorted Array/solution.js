/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let result = new Set(nums)
    nums.splice(0, nums.length, ...(Array.from(result)))
    return result.length;
};