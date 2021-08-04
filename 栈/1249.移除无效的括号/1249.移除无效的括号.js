var minRemoveToMakeValid = function(s) {
  let stack = [];
  let stringArr = s.split('');

  for (let i =0; i < s.length; i++) {
      if (s[i] === '(') {
          stack.push(i);
      } else if (s[i] === ')') {
          if (stack.length) {
              // 删除栈顶元素
              stack.shift();
          } else {
              // 删除当前元素
               delete stringArr[i];
          }
      }
  }
  if (stack.length) {
      stack.forEach(item =>{
          delete stringArr[item];
      })
  }
  return stringArr.join('');
};