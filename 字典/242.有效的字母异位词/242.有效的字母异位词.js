/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
  if (s.length !== t.length) {
      return false;
  }
  let sMap = new Map();
  let tMap = new Map();
  for (let i = 0; i < s.length; i++) {
      if (sMap.get(s[i])) {
          sMap.set(s[i], sMap.get(s[i]) + 1);
      } else {
          sMap.set(s[i], 1);
      }
  }
  for (let i = 0; i < t.length; i++) {
      if (tMap.get(t[i])) {
          tMap.set(t[i], tMap.get(t[i]) + 1);
      } else {
          tMap.set(t[i], 1);
      }
  }

  for (let [key,value] of sMap) {
      if (!tMap.has(key) || tMap.get(key) !== value) {
          return false;
      }
  }
  return true;
};
