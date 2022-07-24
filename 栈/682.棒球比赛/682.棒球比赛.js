/**
 * @param {string[]} ops
 * @return {number}
 */
 var calPoints = function(ops) {
  const countNumList = [];
  ops?.forEach((item) => {
    const itemNum =
      item === "C" || item === "D" || item === "+" ? item : Number(item);
    if (itemNum === "C") {
      countNumList.pop();
    } else if (itemNum === "D") {
      const curNum = countNumList[countNumList.length - 1] * 2;
      countNumList.push(curNum);
    } else if (itemNum === "+") {
      const curNum =
        countNumList[countNumList.length - 1] +
        countNumList[countNumList.length - 2];
      countNumList.push(curNum);
    } else {
      countNumList.push(itemNum);
    }
  });

  const res = countNumList.reduce((pre, cur) => pre + cur, 0);
  return res;
};