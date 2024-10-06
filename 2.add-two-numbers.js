/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
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
var addTwoNumbers = function (l1, l2) {

    if (!l1) return l2
    if (!l2) return l1


    if (!l1 && !l2) return null

    class ListNode {
        constructor(val, next) {
            this.val = (val === undefined ? 0 : val)
            this.next = (next === undefined ? null : next)
        }
    }

    let head = new ListNode()
    let current = head

    let carry = 0

    while (l1 || l2 || carry) {

        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry

        current.next = new ListNode(sum % 10)

        current = current.next

        carry = Math.floor(sum / 10)

        l1 = l1 ? l1.next : l1

        l2 = l2 ? l2.next : l2

    }

    return head.next
};
// @lc code=end
let linklist = {
    val: 2,
    next: {
        val: 4,
        next: {
            val: 3,
            next: null
        }
    }
}
let linklist2 = {
    val: 5,
    next: {
        val: 6,
        next: {
            val: 4,
            next: null
        }
    }
}
/*
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
*/


console.log(addTwoNumbers(linklist, linklist2))