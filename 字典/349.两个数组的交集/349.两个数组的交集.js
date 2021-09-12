/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
  let stack = [];
  let map = new Map();
  for (let i = 0; i < nums1.length; i++) {
      map.set(nums1[i])
  }
  for (let j = 0; j < nums2.length; j++) {
      if (map.has(nums2[j])) {
          stack.push(nums2[j]);
      }
  }
  stack = [...new Set(stack)]
  return stack;
};