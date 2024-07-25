/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
    return s.split('').reduce((acc, item, i1) => {
        let i2 = t.indexOf(item)
        return acc += i1 - i2 < 0 ? (i1 - i2)*(-1) : i1 - i2 
    }, 0)
};