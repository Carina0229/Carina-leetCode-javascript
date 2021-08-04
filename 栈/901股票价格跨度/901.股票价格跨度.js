var StockSpanner = function() {
  this.stack=[];
  this.count=0;
};

/** 
* @param {number} price
* @return {number}
*/
StockSpanner.prototype.next = function(price) {
  while (this.stack.length && (price >=  this.stack[this.stack.length - 1].value)) {
      this.stack.pop();
  }
  let tmp = this.stack.length ? this.stack[this.stack.length - 1].index : 0;
  this.count++;
  this.stack.push({
      index: this.count,
      value: price
  });
  return this.count - tmp;
};