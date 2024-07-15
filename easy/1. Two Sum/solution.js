/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let copyNums = [...nums]
    let sortedNums = copyNums.sort((a, b)=> a - b)
    let min = 0;
    let max = sortedNums.length - 1

    for(let i = 0; i < sortedNums.length; i++){
        if(target === sortedNums[min] + sortedNums[max]){
            return [nums.indexOf(sortedNums[min]), nums.lastIndexOf(sortedNums[max])]
        }
        if(target < sortedNums[min] + sortedNums[max]){
            max--;
        } else {
            min++;
        }
    }
    return [];
};