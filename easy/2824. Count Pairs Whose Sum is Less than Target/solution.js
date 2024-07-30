/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    let r = 0;
    for(let i = 0; i < nums.length; i++){
        for(let j = 1 + i; j < nums.length; j++){
            if(nums[i] + nums[j] < target) r++;
        }
    }
    return r
};