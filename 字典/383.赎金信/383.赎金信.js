/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
  if (magazine.length < ransomNote.length) {
      return false;
  }
  // magazine 中的每个字符只能在 ransomNote 中使用一次,说明首先二者ransomNote中每一个字符出现的次数小于等于magazine的
  let magazineMap = new Map();
  magazine.split('').forEach(item=>{
      if (magazineMap.get(item)) {
          magazineMap.set(item, magazineMap.get(item) + 1);
      } else {
          magazineMap.set(item, 1);
      }
  })
  let ransomNoteMap = new Map();
  ransomNote.split('').forEach(item=>{
      if (ransomNoteMap.get(item)) {
          ransomNoteMap.set(item, ransomNoteMap.get(item) + 1);
      } else {
          ransomNoteMap.set(item, 1);
      }
  })
  for(let [key,val] of ransomNoteMap) {
      if (!magazineMap.has(key) || magazineMap.get(key) < val) {
          return false;
      } 
  }
  return true;
};