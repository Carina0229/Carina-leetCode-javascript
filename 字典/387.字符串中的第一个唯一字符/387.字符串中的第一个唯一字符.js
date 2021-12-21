// 写出的方法
/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
  let res = -1;
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
      if (map.get(s[i])) {
          map.set(s[i], map.get(s[i]) + 1);
      } else {
          map.set(s[i], 1);
      }
  }
  for (let [key,val] of map) {
      if (val === 1) {
          res = s.indexOf(key);
          return res;
      }
  }
  return res;
};


// 官方题解
var firstUniqChar = function(s) {
  const frequency = _.countBy(s);
  for (const [i, ch] of Array.from(s).entries()) {
      if (frequency[ch] === 1) {
          return i;
      }
  }
  return -1;
};
/* _.countBy方法  ：指的是Lodash_.countBy方法,
_.countBy方法创建一个由键组成的对象，这些键是通过运行iteratee的collection的每个元素的结果生成的。每个 key 的对应值是iteratee返回 key 的次数。

用法:

_.countBy(collection, [iteratee=_.identity])
参数：该方法接受上述和以下所述的两个参数：

集合(数组|对象)：此参数保留要迭代的集合。
[iteratee = _。identity](函数)：此参数保存用于转换键的迭代器。
返回值：此方法用于返回组成的聚合对象。

范例1：在这里，const _ = require(‘lodash’)用于将lodash库导入文件中。

// Requiring the lodash library  
const _ = require("lodash");  
      
// Original array  
  
var obj1 = ([6.1, 4.2, 6.3, 5, 7.9, 5.3, 5.1, 7.3 ]); 
  
// Use of _.countBy() method 
let y = _.countBy(obj1, Math.floor); 
      
console.log(y);
输出：

{ '4':1, '5':3, '6':2, '7':2 }
*/
// 注意：该代码在常规JavaScript中不起作用，因为它需要安装库lodash。