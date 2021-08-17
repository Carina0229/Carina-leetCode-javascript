/**
 * @param {string} path
 * @return {string}
 */
 var simplifyPath = function(path) {
  let stack = []; 
  const pathArr = path.split('/');
  pathArr.forEach(item =>{
    if (item === '..') {
          stack.pop();
      } else if (item !== '.' && item !== ''){
          stack.push(item);
      }
  })
  return '/' + stack.join('/');
};