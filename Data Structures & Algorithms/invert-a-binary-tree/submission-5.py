from collections import deque

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        if not root:
            return root

        queue = deque()

        queue.append(root)

        while len(queue) > 0:
            level_items = []
            for i in range(len(queue)):
                curr = queue.popleft()

                level_items.append(curr.val)

                temp_left = curr.left
                temp_right = curr.right

                curr.right = temp_left
                curr.left = temp_right

                if curr.right:
                    # curr.right = temp_left
                    # curr.left = None

                    queue.append(curr.right)
                if curr.left:
                    # curr.left = temp_right

                    # if not curr.left:
                    #     curr.right = None

                    queue.append(curr.left)

        return root