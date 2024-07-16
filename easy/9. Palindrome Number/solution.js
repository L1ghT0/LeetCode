/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return false;
    let reversedX = String(x).split("").reverse().join("");
    return String(x) === reversedX
};