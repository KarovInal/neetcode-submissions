// type ListNode = {
//     val: number;
//     next: null | ListNode;
// }


class Solution {
    headNode = null;
    newList: ListNode = { val: 0, next: null };

    reverseList(head: ListNode | null): ListNode {
        if(head === null) return head;

        if(this.headNode === null && head.next === null) return head;

        if(this.headNode === null) {
            this.headNode = head;
        }

        if(head.next === null) {
            this.newList = {
                val: head.val,
                next: null
            };

            return this.newList;
        }

        const prev = this.reverseList(head.next);

        const _head = {
            val: head.val,
            next: null
        }

        prev.next = _head;

        if(this.headNode === head) return this.newList;

        return _head;
    }
}
