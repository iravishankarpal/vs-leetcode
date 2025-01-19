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

    class Node {
        constructor(val, next) {
            this.val = (val === undefined ? 0 : val)
            this.next = (next === undefined ? null : next)
        }
    }
    class LinkedList {
        constructor() {
            this.head = null
            this.tail = null
            this.length = 0
        }
        addNode(val) {
            const node = new Node(val)
            if (this.head === null) {
                this.head = node
                this.tail = node
            } else {
                this.tail.next = node
                this.tail = node
            }
            this.length++
        }
    }
    let getSum = (head) => {
        let sum = ""
        for (let current = head; current != null; current = current.next) {
            sum += current.val
        }
        sum = sum.split("").reverse().join("")
        return parseInt(sum)
    }

    let value = getSum(l1) + getSum(l2)
    value = value.toString()
    value = value.split("").reverse().join("")
    let linkList = new LinkedList()
    for (let i = 0; i < value.length; i++) {
        linkList.addNode(parseInt(value[i]))
    }
    return linkList

};

// @lc code=end

