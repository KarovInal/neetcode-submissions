# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
import math

class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        stack = []

        node = dummy = head

        while node.next is not None:
            node = node.next
            stack.append(node)

        size = len(stack)
        s = 0
        e = size -1 

        for i in range(1, size + 1):
            print(i)
            if i % 2 == 0:
                head.next = ListNode(stack[s].val)
                s += 1
            else:
                head.next = ListNode(stack[e].val)
                e -= 1

            head = head.next