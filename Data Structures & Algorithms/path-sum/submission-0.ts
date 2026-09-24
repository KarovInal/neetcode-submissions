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
     * @param {number} targetSum
     * @return {boolean}
     */
    sum = 0;

    hasPathSum(root: TreeNode | null, targetSum: number): boolean {
        if(!root) return false;

        this.sum += root.val;

        if(!root.left && !root.right) {
            if(this.sum !== targetSum) {
                this.sum -= root.val;
                return false;
            }

            return true;
        }

        if(this.hasPathSum(root.left, targetSum)) {
            return true;
        }

        if(this.hasPathSum(root.right, targetSum)) {
            return true;
        }

        this.sum -= root.val;
        return false;
    }
}
