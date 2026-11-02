# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        cur = head
        prev = None
        remove = None

        while cur:
            n -= 1

            if n == 0:
                prev = None
                remove = head
            elif n < 0:
                prev = remove
                remove = remove.next

            cur = cur.next

        print(head.val)
        print(n)

        if n <= 0:
            if prev:
                prev.next = remove.next
            else:
                head = remove.next

        return head
