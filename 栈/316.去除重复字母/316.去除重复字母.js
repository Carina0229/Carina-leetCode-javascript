/**
 * @param {string} s
 * @return {string}
 */
 var removeDuplicateLetters = function(s) {
  let res = []
  for (let i = 0; i < s.length; i++) {
      if (res.includes(s[i])) continue
      while (res[res.length - 1] > s[i] && s.indexOf(res[res.length - 1], i) > i) {
          res.pop()
      }
      res.push(s[i])
  }
  return res.join('')
};