/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const arr = [];
    let index = 0;
    while (l1 || l2) {
        const up = Math.floor(((arr[index] || 0) + (l1 || {val: 0}).val + (l2 || {val:0}).val) / 10);
        arr[index] = ((arr[index] || 0) + ((l1 || {val: 0}).val + (l2 || {val:0}).val)) % 10;
        up && (arr[index + 1] = up);

        l1 && (l1 = l1.next);
        l2 && (l2 = l2.next);
        index += 1;
    }
    return arr;
};
