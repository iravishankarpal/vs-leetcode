/*
 * @lc app=leetcode id=82 lang=javascript
 *
 * [82] Remove Duplicates from Sorted List II
 */

import { LinkList, printLinkList } from "./LinkList.js";

// @lc code=start
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
var deleteDuplicates = function (head) {
    let current = head;
    let dir = {};
    while (current) {
        let f = current.val;
        let s = current.next ? current.next.val : null;
        if (f === s) {
            dir[f] = true;
            current = current.next;
        } else {
            if (dir[f]) {
                current = current.next;
            } else {
                current = current.next;
            }
        }
    }
    printLinkList(current);
    return current;
};
// @lc code=end
console.clear();
let ll = new LinkList();
ll.insertFromArray([1, 2, 3, 3, 3, 4, 4, 5]);
console.log(deleteDuplicates(ll.head));
ll.print();
/* 
show steps 

empty dir {}
 f , s

if( f = s )
then {
move f in dir 
remove f from list
}else{
  f in dir if true remove f from list
}
else move to next 

*/
