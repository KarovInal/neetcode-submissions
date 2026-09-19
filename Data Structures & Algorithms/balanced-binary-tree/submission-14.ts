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
     * @return {boolean}
     */
    isBalanced(root: TreeNode | null): boolean {
        let isBalanced = true;

        function inorder(root: TreeNode | null) {
            if(!root) return { lh: -1, rh: -1 };

            const l = inorder(root.left);
            let lh = 1 + Math.max(l.lh, l.rh);
            const r = inorder(root.right);
            let rh = 1 + Math.max(r.lh, r.rh);

            if(Math.abs(lh-rh) > 1) {
                isBalanced = false;
            }

            return { lh, rh };
        }

        inorder(root);

        return isBalanced;
    }
}
