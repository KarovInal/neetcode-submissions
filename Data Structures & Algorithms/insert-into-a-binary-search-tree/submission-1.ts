/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} val
     * @return {TreeNode}
     */
    insertIntoBST(root: TreeNode | null, val: number): TreeNode {
        if(!root) {
            return {
                val,
                left: null,
                right: null,
            };
        }

        if(val < root.val) {
            // go left
            root.left = this.insertIntoBST(root.left, val);
        } else if (val > root.val) {
            // go right
            root.right = this.insertIntoBST(root.right, val);
        }

        return root;
    }
}
