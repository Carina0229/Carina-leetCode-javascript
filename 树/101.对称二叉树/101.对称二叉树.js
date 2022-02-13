/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isSymmetric = function(root) {
  if (!root) {
      return true;
  } 
  const isSame = (l,r) => {
      if (!l && !r) {
          return true;
      } 
      if (l && r && l.val === r.val && isSame(l.left, r.right) && isSame(l.right, r.left)) {
          return true;
      } else {
          return false;
      }
  }
  return isSame(root.left,root.right)
};