/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let result = 0;
    let sum = 0;

    for(let i = 0; i < nums.length; i++){
        if(nums[i]){
            sum++;
        }else{
            if(result < sum){
                result = sum;
            }
            sum = 0;
        }
    }
    return result > sum ? result : sum;
};