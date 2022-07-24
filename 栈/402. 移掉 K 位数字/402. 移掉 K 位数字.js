/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
 var removeKdigits = function(num, k) {
  if (k >= num.length) {
      return '0';
  }
  let arr = [num[0]];
  for (let i = 1; i <num.length; i++){
      // 后一位数字小于前一位，则删除前一位
      while(arr[arr.length - 1] > num[i] && k >0){
          arr.pop()
          k--;
      }
      arr.push(num[i])
 
  }
  if (k > 0) {
      if (arr.length - k ===1 && arr[arr.length - 1] === '0') {
          return '0'
      } else {
          arr.splice(arr.length  -k)
      }
      
  }  
  while(arr[0] === '0'&& arr.length >1) {
      arr.shift();
  }
  return arr.join('')
};