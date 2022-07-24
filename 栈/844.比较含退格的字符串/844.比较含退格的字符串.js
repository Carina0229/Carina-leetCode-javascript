/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var backspaceCompare = function(s, t) {
  if (s.length !== t.length && s.indexOf("#") === -1 && t.indexOf("#") === -1) {
  return false;
}
let sRes = [],
  tRes = [];
for (let i = 0; i < s.length; i++) {
  if (s[i] === "#") {
    if (sRes.length) {
      sRes.pop();
    }
  } else {
    sRes.push(s[i]);
  }
}
for (let i = 0; i < t.length; i++) {
  if (t[i] === "#") {
    if (tRes.length) {
      tRes.pop();
    }
  } else {
    tRes.push(t[i]);
  }
}
if (sRes.toString() === tRes.toString()) {
  return true;
} else {
  return false;
}
};