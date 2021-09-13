/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
  let arr1 = nums1.sort((a,b)=>a-b);
  let arr2 = nums2.sort((a,b)=>a-b);
  let stack = [];
  let map = new Map();
  if (arr1[arr1.length -1] < arr2[0] || arr1[0] > arr2[arr2.length - 1]) {
      return;
  }
  for (const num1 of arr1) { // 记录nums1各个数字的出现次数
      if (map[num1]) {
      map[num1]++;  
      } else {         
      map[num1] = 1; 
      }
  }
  for (const num2 of arr2) { // 遍历nums2，看看有没有数字在nums1出现过
      const val = map[num2];
      if (val > 0) {            // 有出现过
      stack.push(num2);         // 推入res数组
      map[num2]--;            // 匹配掉一个，就减一个
      }
  }
  return stack;
};