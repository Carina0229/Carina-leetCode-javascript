/**
 * @param {string[]} tokens
 * @return {number}
 */
 var evalRPN = function(tokens) {
  const nums = [];
  const text = /^-?[1-9]+[0-9]*$|^0$/
  for (let i = 0; i < tokens.length; i++) {
      if (text.test(tokens[i])) {
          nums.push(tokens[i]);
      } else {
          const num1 = nums.pop();
          const num2 = nums.pop();
          let res = 0;
          if (tokens[i] === '+'){
              res = Number(num2)   + Number(num1);
          } else if (tokens[i] === '-') {
              res = Number(num2) - Number(num1);
          } else if (tokens[i] === '*') {
              res = Number(num2) * Number(num1) ;
          } else {
              res = parseInt (Number(num2) / Number(num1));
          }
          nums.push(res)
      }
  }
   return nums.join('')
};