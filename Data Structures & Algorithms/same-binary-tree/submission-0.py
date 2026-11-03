# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        if p is None or q is None:
            return p == q
        elif p.val != q.val:
            return False

        if p.left or q.left:
            result = self.isSameTree(p.left, q.left)

            if result == False:
                return False
        elif p.right or q.right:
            result = self.isSameTree(p.right, q.right)

            if result == False:
                return False

        return True
        