var isValid = function(s) {
  // 首先确定一点，如果s是t操作后得到，那么s一定是多个abc拼接得到，也就是说s中遇到abc则拆分出去，最后一定是空的。
  // 如果s为空或者最后一位不为c，则一定不可能是abc插入得到的
  if (!s.length || s[s.length -1] !== 'c') {
      return false;
  }
  let curS = '';  // 当前累加字符串
  let arr = []; // 维护一个结果栈

  for (let i = 0; i < s.length; i++) {
      // 当为a时，说明是另一个字符开头，此时curs为a,并且把他放入栈中
      if (s[i] === 'a') {
          curS='a';
          arr.push(s[i]);
      } else {
          // 如果不是a，说明是这个字符串的连续，则需要把之前栈中最后一位出栈，进行拼接后入栈
          curS = curS + s[i];
          arr.pop();
          arr.push(curS);
      }
      if (curS === 'abc') {
          // 当字符串达到abc，即可从栈中出栈，并且此时的累加字符串就变成了栈中最后一位
          arr.pop();
          curS = arr?.[arr?.length-1] || ''
      }
  }
  // 最后判断栈中是否还有值，有值则说明不是操作得到的
  if (arr.length){
      return false;
  } else {
      return true;
  }
};