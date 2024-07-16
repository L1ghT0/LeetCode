/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for(let i = digits.length-1 ; i >= 0; i--){
        if(digits[i]+1 >= 10) {
            digits[i] = 0;
            if(i - 1 < 0) {
                digits.unshift(1);
            }
            continue;
        }
        digits[i]++;
        break;
    }
    return digits
};