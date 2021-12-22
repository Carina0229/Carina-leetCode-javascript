/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
 var findTheDifference = function(s, t) {
  let res;
  if (s === '') {
      res = t;
      return res;
  }
  let sMap = new Map();
  // map存储字符串中每一个出现的次数
  s.split('').forEach(item=>{
      if (sMap.get(item)) {
          sMap.set(item, sMap.get(item) +1)
      } else {
          sMap.set(item,1)
      }
  })
  // 遍历t 如果map中出现的次数为0，即可得出这个是新增进去的，如果有出现，则把出现的次数减掉1，一直到0为止，此时得出的是t字符串比s字符串字母多出现一次的那个，也就是新增的字符
  for (let i = 0; i < t.length; i++) {
      if (!sMap.get(t[i])) {
          res = t[i];
          return res;
      } else{
          sMap.set(t[i], sMap.get(t[i]) -1)
      }
  }
};