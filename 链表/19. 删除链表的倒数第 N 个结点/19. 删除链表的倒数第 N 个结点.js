/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
  let count = 0; // 计数
  let p = head;
  let p1 = head;
  let prev = null; //前一个节点
  let nextNode = null; // 下一个节点
  // 获取链表长度
  let length = 0;
   while (p1) {
      p1 = p1.next;
      length ++;
  }
  // 目标索引
  let nodeNum = length - n;

  if (nodeNum === 0) {
      head = head.next;
  } else {
      while (p) {
          if (count === nodeNum - 1) {
             prev = p;
          } else if (count === nodeNum + 1) {
              nextNode = p;
          }
          p = p.next;
          count++;
      }
      prev.next = nextNode;
  }    
  return head;
};