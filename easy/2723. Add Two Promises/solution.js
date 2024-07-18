/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    let valOne = await promise1
    let valTwo = await promise2
    return valOne + valTwo
};