/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    return accounts.reduce((richest, account) => {
        let current = account.reduce((acc, money) => acc += money, 0)
        return richest = richest > current ? richest : current
    }, 0)  
};