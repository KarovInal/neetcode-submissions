# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    _subRoot = None

    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
        if self._subRoot is None:
            self._subRoot = subRoot

        if self._subRoot != subRoot:
            if subRoot is None or root is None:
                return subRoot == root

            if subRoot.val != root.val:
                return False

            return (
                self.isSubtree(root.left, subRoot.left) and
                self.isSubtree(root.right, subRoot.right)
            )

        if root and root.val == self._subRoot.val:
            if (
                self.isSubtree(root.left, self._subRoot.left) and
                self.isSubtree(root.right, self._subRoot.right)
            ):
                return True

        if root is None:
            return False

        return (
            self.isSubtree(root.left, self._subRoot) or
            self.isSubtree(root.right, self._subRoot)
        )