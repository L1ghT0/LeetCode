/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let result = n;
    let x = 2;
    while(guess(result) !== 0){
      guess(result) < 0
        ? result -= Math.ceil(n/x)
        : result += Math.ceil(n/x);
      x *= 2;
    }
    return result;
};