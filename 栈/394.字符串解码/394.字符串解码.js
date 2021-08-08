/**
 * @param {string} s
 * @return {string}
 */
 var decodeString = function(s) {
  let str = '';
  let stringStack = [];
  let numStack = [];
  let cur = 0;
  for (let i = 0; i < s.length; i++) {
     if (s[i] >= '0' && s[i] <= '9') {
        cur = cur*10 + (s[i] - '0');
     } else if (s[i] === '[') {
         numStack.push(cur);
         stringStack.push(str);
         cur = 0;
         str = '';
      } else if (s[i] === ']') {
          str = stringStack.pop() + str.repeat(numStack.pop());
     } else {
         str = str + s[i];
     }
  }
  return str;
};