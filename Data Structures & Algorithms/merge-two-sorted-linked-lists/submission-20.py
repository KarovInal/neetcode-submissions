# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        res = Optional[ListNode]
        nextNode = None

        while list1 or list2:
            curValue = None
            v1 = list1.val if list1 else float('inf')
            v2 = list2.val if list2 else float('inf')

            if v1 <= v2:
                curValue = v1
                list1 = list1.next
            else:
                curValue = v2
                list2 = list2.next

            if nextNode is None:
                nextNode = ListNode(curValue)
                res = nextNode
            else:
                nextNode.next = ListNode(curValue)
                nextNode = nextNode.next
        
        return res if nextNode else None