/**
 * @param {string} s
 * @return {number}
 */
 var minAddToMakeValid = function(s) {
  let leftStack = [];
  let rightStack =[];

  for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') {
          leftStack.push(i);
      } else if (s[i] === ')') {
          if (leftStack.length) {
              leftStack.shift();
          } else {
              rightStack.push(i);
          }
      }
  }
  return rightStack.length + leftStack.length;
};