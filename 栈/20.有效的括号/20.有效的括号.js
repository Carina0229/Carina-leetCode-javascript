/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  const arr = [];
  // 如果字符串长度为奇数，一定不是有效的
  if (s % 2) {
      return false;
  }
  for (let i = 0; i < s.length; i++) {
      let c = s[i];
      if (c === '(' || c==='[' || c==='{') {
          arr.push(c);

      } else {
          let t = arr[arr.length - 1];
          if (t === '(' &&c === ')' || t === '['&&c=== ']' || t === '{'&&c=== '}') {
              arr.pop();
          } else {
              return false;
          }
      }
      
  }
  if (arr.length) {
      return false;
  } else {
      return true;
  }
};