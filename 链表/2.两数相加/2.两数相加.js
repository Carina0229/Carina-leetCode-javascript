/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
  let p = new ListNode(0);
  let sum = p;
  let carry = 0; // 进位
  while (l1 || l2 || carry) {
      let r1 = l1 !== null ? l1.val : 0;
      let r2 =  l2 !== null ? l2.val : 0 ;
      let res = r1 + r2 + carry;
      carry = res >= 10 ? 1 : 0 ;
      p.next =  new ListNode(res % 10);
      p = p.next;
      if (l1) l1 = l1.next 
      if (l2) l2 = l2.next 
  }
  return sum.next;
};