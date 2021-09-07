/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
  // 第一位用0补位，处理头部的节点
  let list = new ListNode(0);
  list.next = head;
  let p = list;
  while (p && p.next) {
      if (p.next.val === val) {
          p.next = p.next.next;
      } else {
          p = p.next;
      }
  }
  // 处理边界 如果最后的值与要删除的值相等，就删除
  if (p && p.val === val) {
      // 返回next.next是因为有0节点
      return list.next.next;
  } else {
      // 删除0节点
      return list.next;
  }
};