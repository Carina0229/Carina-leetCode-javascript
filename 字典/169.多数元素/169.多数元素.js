/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
  let map = new Map();
  nums.forEach(item => {
      if (map.get(item)) {
          map.set(item, map.get(item) + 1);
      } else {
          map.set(item,1);
      }
  });
  const count = nums.length / 2;
  let res = null;
  map.forEach((value,key) => {
      if (value > count) {
          res = key;
      }
  })
  return res;
};