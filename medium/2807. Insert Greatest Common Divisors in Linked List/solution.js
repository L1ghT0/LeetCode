/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertGreatestCommonDivisors = function(head) {
    let currNode = head
    let nextNode = currNode.next

    while(nextNode){
        let min = currNode.val > nextNode.val ? currNode.val : nextNode.val
        let max = currNode.val < nextNode.val ? currNode.val : nextNode.val
        for(let i = min; i > 0; i--) {
            if(min % i === 0 && max % i === 0){
                let newNode = new ListNode(i)
                currNode.next = newNode
                newNode.next = nextNode
                currNode = currNode.next
                i = 0; // break
            }
        }
        currNode = currNode.next
        nextNode = currNode.next
    }
    return head
};