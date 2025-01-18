export class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
export function printLinkList(head) {
    let current = head;
    let string = "";
    while (current) {
        string += current.val + " ";
        current = current.next;
    }
    console.log(string);
}
export class LinkList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    addNode(val) {
        let node = new ListNode(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }
    print() {
        printLinkList(this.head);
    }
    insertFromArray(arr) {
        for (let i = 0; i < arr.length; i++) {
            this.addNode(arr[i]);
        }
        this.print();
    }
}
