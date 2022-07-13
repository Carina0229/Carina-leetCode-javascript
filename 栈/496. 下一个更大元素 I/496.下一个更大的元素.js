/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var nextGreaterElement = function(nums1, nums2) {
  let res = [];
  nums1.forEach((item,index) =>{
      let sameIndex = -1;
      let biggerNum = -1;
      nums2.forEach((subItem, jndex)=>{
          if (item === subItem){
             sameIndex=jndex;
          } else if (subItem > item && sameIndex!== -1 && jndex > sameIndex){
              biggerNum = subItem;   
              sameIndex = -1;
          } 
          
      })
      res.push(biggerNum)
      
  })
  return res;
};