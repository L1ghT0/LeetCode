/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let res = 0;
    operations.forEach(op => res += op.includes('+') ? 1 : -1)
    return res;
};