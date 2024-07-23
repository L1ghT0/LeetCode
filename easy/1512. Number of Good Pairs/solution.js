/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let goodPairs = 0;
    for(let i = 0; i < nums.length; ){
        for(let j = 1; j < nums.length; j++){
            if(nums[i] == nums[j]) goodPairs++
        }
        nums.shift()
    }
    return goodPairs
};