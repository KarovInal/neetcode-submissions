# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        s = head
        f = head and head.next

        while f is not None:
            if s == f:
                return True

            s = s.next
            f = f.next

            if f is not None:
                f = f.next

        return False