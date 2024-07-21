/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let maxSteps = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] % 3 !== 0){
            if((nums[i] + 1) % 3 === 0) {
                maxSteps++
            } else if((nums[i] - 1) % 3 === 0){
                maxSteps++
            } else if((nums[i] - 2) % 3 === 0){
                maxSteps += 2
            } else if((nums[i] + 2) % 3 === 0){
                maxSteps += 2
            }
        }
    }
    return maxSteps
};