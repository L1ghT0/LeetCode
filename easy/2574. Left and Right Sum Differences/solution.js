/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let leftsum = 0;
    let leftsumArr = [0]
    for(let i = 0; i < nums.length - 1; i++){
        leftsum += nums[i];
        leftsumArr.push(leftsum)
    }
    
    let rightsum = 0;
    let rightsumArr = [0]
    for(let i = nums.length - 1; i > 0; i--){
        rightsum += nums[i];
        rightsumArr.push(rightsum)
    }
    rightsumArr.reverse();

    return leftsumArr.map((ls, index) => {
        let answer = ls - rightsumArr[index];
        return answer < 0 ? answer*-1 : answer
    })
};