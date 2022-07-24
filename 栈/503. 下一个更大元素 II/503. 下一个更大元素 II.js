/**
 * @param {number[]} nums
 * @return {number[]}
 */
//  暴力解法
// var nextGreaterElements = function(nums) {
//     let res = []
//     nums.forEach((item ,index)=>{
//         let arr = [...nums];
//         // 循环数组，也就是说是把当前元素在数组中后面的元素拼接上前面的元素组成的数组，在里面遍历得到较大值即可
//         arr = [...arr.splice(index+1), ...arr.splice(0,index)]
//         for (let i = 0; i <arr.length; i++) {
//             if (arr[i] > item) {
//                 res.push(arr[i]);
//                 return 
//             } 
//         }
//         res.push(-1)
//     })
//     return res;
// };
// 单调栈
var nextGreaterElements = function(nums) {
  // 维护一个数组下标栈，当前值与栈顶比较，比栈顶大，说明是之前一些元素的较大值，栈顶出栈，否则入栈
  const n= nums.length;
  let indexArr =new Array(n).fill(-1);
  const stk = [];
  for (let i = 0; i < nums.length * 2 - 1; i++) {
      // 循环数组，长度应为最多是两次数组长度减一
       while (stk.length && nums[stk[stk.length - 1]] < nums[i % n]) {
          indexArr[stk[stk.length - 1]] = nums[i % n];
          stk.pop();
      }
      stk.push(i % n);
  }
  return indexArr
};