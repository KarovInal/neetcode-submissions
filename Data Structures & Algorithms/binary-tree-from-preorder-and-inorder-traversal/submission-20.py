# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        in_order_hm = {val: idx for idx, val in enumerate(inorder)}
        self.pre_idx = 0

        def arr_to_tree(L, R):
            if L > R: return None

            root_val = preorder[self.pre_idx]
            root = TreeNode(root_val)
            self.pre_idx += 1
            root.left = arr_to_tree(L, in_order_hm[root_val] - 1)
            root.right = arr_to_tree(in_order_hm[root_val] + 1, R)

            return root

        return arr_to_tree(0, len(preorder) - 1)
