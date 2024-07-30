/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    return nums.map(num => nums.reduce((acc, n)=> acc += num > n ? 1 : 0, 0))
};