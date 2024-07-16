/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let strOne = ''
    let currL1 = l1
    while(currL1){
        strOne += String(currL1.val)
        currL1 = currL1.next
    }

    let strTwo = ''
    let currL2 = l2
    while(currL2){
        strTwo += String(currL2.val)
        currL2 = currL2.next
    }

    let longestStr = strOne.length >= strTwo.length ? strOne : strTwo
    let shortestStr = strOne.length < strTwo.length ? strOne : strTwo

    let length = longestStr.length - shortestStr.length
    for(let i = 0; i < length; i++){
        shortestStr += '0';
    }
    
    let sum = '';
    let savedVal = 0;
    for(let i = 0; i < longestStr.length; i++){

        if((longestStr[i] - -shortestStr[i] + savedVal) >= 10) {
            sum += String(longestStr[i] - -shortestStr[i] + savedVal).slice(1)
            savedVal = 1;
        } else {
            sum += String(longestStr[i] - -shortestStr[i] + savedVal)
            savedVal = 0;
        }
        if(i+1 === longestStr.length && savedVal) {
            sum += '1'
        }
    }
    sum = sum.split('').reverse().join('');

    let newList = new ListNode();
    let head = newList
    for(let i = sum.length - 1; i >= 0; i--){
        newList.val = sum[i];
        if(i === 0) break;
        newList.next = new ListNode();
        newList = newList.next
    }

    return head
};