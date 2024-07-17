/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let result = 0
    for(let i = 0;i < s.length - 1; i++){
        result += s.charCodeAt(i) - s.charCodeAt(i+1) < 0 ? (s.charCodeAt(i) - s.charCodeAt(i+1))*-1 
                                                        : s.charCodeAt(i) - s.charCodeAt(i+1) 
    }
    return result
};