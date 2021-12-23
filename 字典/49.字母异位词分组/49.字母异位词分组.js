/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
  let map = new Map();
  strs.forEach(item =>{
      let key = Array.from(item).sort().toString();
      let list = map.get(key) ? map.get(key) : [];
      list.push(item)
      map.set(key,list)
  })
  return Array.from(map.values());
};