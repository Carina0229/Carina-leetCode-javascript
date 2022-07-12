/**
 * @param {string} s
 * @return {string}
 */
 var removeOuterParentheses = function(s) {
    let curS = "";
    let arr = [];
    let left = [];
    let right = [];
    for (let i = 0; i < s.length; i++) {
        arr.push(s[i]);
        if (s[i] === "(") {
        left.push(s[i]);
        } else if (s[i] === ")") {
        right.push(s[i]);
        if (left.length === right.length) {
            // 去掉头尾
            arr.shift();
            arr.pop();      
            curS = curS + arr.toString()  ;
            arr = [];
            left = [];
            right = [];
            
        }
        }
    }
  return curS.replaceAll(',','');
};