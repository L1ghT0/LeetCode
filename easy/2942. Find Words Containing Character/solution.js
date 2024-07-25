/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let result = []
    words.forEach((word, index) => {
        if(word.includes(x)) result.push(index)
    })
    return result
};