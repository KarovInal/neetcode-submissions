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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root: TreeNode | null, k: number): number {
        const list = [];

        function inorder(root: TreeNode | null) {
            if(!root) return;

            inorder(root.left);
            list.push(root.val);
            inorder(root.right);
        }

        inorder(root);

        return list[k - 1]
    }
}
