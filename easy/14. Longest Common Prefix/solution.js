/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 1) return strs[0]

    let shortestStr = strs.reduce((a, b) => {
        return a.length <= b.length ? a : b;
    })
    let longestPrefix = ''
    
    for(let i = 0; i < shortestStr.length; i++){
        for(let j = 0; j < strs.length - 1; j++){
            if(strs[j][i] !== strs[j+1][i]){
                return longestPrefix
            }
            if(j + 1 === strs.length - 1) longestPrefix += strs[j][i];
        }
    }
    return longestPrefix
};