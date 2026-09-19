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
     * @return {number[]}
     */
    result = [];

    inorderTraversal(root: TreeNode | null): number[] {
        if(!root) return this.result;

        this.inorderTraversal(root.left);
        this.result.push(root.val);
        this.inorderTraversal(root.right);

        return this.result;
    }
}
