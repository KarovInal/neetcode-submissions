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
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root, key) {
        if (!root) return root;

        let parent = null;
        let cur = root;

        // Find the node to delete
        while (cur && cur.val !== key) {
            parent = cur;
            if (key > cur.val) {
                cur = cur.right;
            } else {
                cur = cur.left;
            }
        }

        if (!cur) return root;

        // Node with only one child or no child
        if (!cur.left || !cur.right) {
            const child = cur.left || cur.right;
            if (!parent) return child;
            if (parent.left === cur) {
                parent.left = child;
            } else {
                parent.right = child;
            }
        } else {
            // Node with two children
            let par = null; // parent of right subtree's min node
            const delNode = cur;
            cur = cur.right;
            while (cur.left) {
                par = cur;
                cur = cur.left;
            }

            if (par) {
                // if there was a left traversal
                par.left = cur.right;
                cur.right = delNode.right;
            }
            cur.left = delNode.left;

            if (!parent) return cur; // if deleting root

            if (parent.left === delNode) {
                parent.left = cur;
            } else {
                parent.right = cur;
            }
        }

        return root;
    }
}





// /**
//  * Definition for a binary tree node.
//  * class TreeNode {
//  *     constructor(val = 0, left = null, right = null) {
//  *         this.val = val;
//  *         this.left = left;
//  *         this.right = right;
//  *     }
//  * }
//  */

// class Solution {
//     /**
//      * @param {TreeNode} root
//      * @param {number} key
//      * @return {TreeNode}
//      */
//     deleteNode(root: TreeNode | null, key: number): TreeNode {
//         if(!root) return root;

//         let ancestor: TreeNode | null = null;
//         let foundNode: TreeNode | null = null;
//         let currentNode: TreeNode | null = root;

//         console.log('foundNode', foundNode)

//         while(!foundNode || !currentNode) {
//             if(currentNode === null) return root;

//             if(currentNode.val === key) {
//                 foundNode = currentNode;
//             } else if(key < currentNode.val) {
//                 ancestor = currentNode;
//                 currentNode = currentNode.left;
//             } else if(key > root.val) {
//                 ancestor = currentNode;
//                 currentNode = currentNode.right;
//             }
//         }

//         if(!foundNode) return root;

//         console.log('foundNode', foundNode)

//         if(foundNode.right) {
//             const lowNode = this.findLowNode(foundNode.right);

//             console.log("____ancestor", ancestor)

//             lowNode.left = foundNode.left;

//             if(ancestor && ancestor.right?.val === foundNode.val) {
//                 ancestor.right = foundNode.right
//             } else if (ancestor && ancestor.left?.val === foundNode.val) {
//                 ancestor.left = foundNode.right
//             } else {
//                 root = foundNode.right
//             }
//         } else if (foundNode.left) {
//             if(ancestor && ancestor.left?.val === foundNode.val) {
//                 ancestor.left = foundNode.left
//             } else if (ancestor && ancestor.right?.val === foundNode.val) {
//                 ancestor.right = foundNode.left
//             } else {
//                 root = foundNode.left;
//             }
//         } else {
//             if(ancestor && ancestor.left?.val === foundNode.val) {
//                 ancestor.left = null;
//             } else if (ancestor && ancestor.right?.val === foundNode.val) {
//                 ancestor.right = null
//             } else {
//                 root = null;
//             }
//         }

//         return root;
//     }

//     findLowNode(root: TreeNode): TreeNode {
//         let lowNode = root;

//         while(lowNode.left) {
//             lowNode = root.left;
//         }

//         return lowNode;
//     }
// }
