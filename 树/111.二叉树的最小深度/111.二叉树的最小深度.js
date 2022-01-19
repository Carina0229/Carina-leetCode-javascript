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
 * @return {number}
 */
 var minDepth = function(root) {
  let arr = [[root, 1]];
  if (!root) {
      return 0;
  }
  while (arr.length) {
      const q = arr.shift();
      const [n, L] = q;
      if (!n.left && !n.right){
          return L;
      }
      if (n.left) {
          arr.push([n.left, L+1])
      }
      if (n.right) {
          arr.push([n.right,L+1])
      }
  }
};