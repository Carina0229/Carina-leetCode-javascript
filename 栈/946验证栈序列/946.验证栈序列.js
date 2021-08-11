/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
 var validateStackSequences = function(pushed, popped) {
  let stack = [];
 for (let i = 0; i < pushed.length; i++) {
     stack.push(pushed[i]);
     while (stack[stack.length - 1] === popped[0] && stack.length) {
         stack.pop();
         popped.shift();
     }
 }
 if (stack.length) {
     return false;
 } else {
     return true;
 }
};