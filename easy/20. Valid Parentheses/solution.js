/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const openTags = ['[', '{', '(']
    const closeTags = [']', '}', ')']
    const queueOfOpenedTags = [];

    for(i = 0; i < s.length; i++){
        if(openTags.some(tag => tag === s[i])) {
            queueOfOpenedTags.push(s[i])
        } else {
            const lastOpenedTag = queueOfOpenedTags.pop();
            if(s[i] !== closeTags[openTags.indexOf(lastOpenedTag)]) {
                return false;
            }                    
        }
    }
    return !queueOfOpenedTags.length;
};