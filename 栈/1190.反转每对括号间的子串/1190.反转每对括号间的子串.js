/**
 * @param {string} s
 * @return {string}
 */
 var reverseParentheses = function(s) {

  let leftStack = [];
  let ans = s;
  const reverse = (s) => {
    return  s.split('').reverse().join('');
  }
  for (let i = 0; i <s.length; i++) {
      if (s[i] ===  '(') {
          leftStack.push(i+1);
      } else if (s[i] === ')') {
          const m = leftStack.pop();
          ans = ans.substring(0, m) + reverse(ans.substring(m, i)) + ans.substring(i, s.length)
      }
  }
  return ans.replaceAll('(', '').replaceAll(')','');
};