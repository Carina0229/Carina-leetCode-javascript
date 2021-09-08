/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {
  // 迭代法 ，先创建一个0节点，0补位
  let list = new ListNode(0);
  list.next = head;
  // 指针p指向list
  let p = list;
  while (p.next && p.next.next) {
      let node1 = p.next; // 要交换的第一个节点
      let node2 = p.next.next; // 要交换的第二个节点
      p.next = node2; // 交换node1和node2位置
      node1.next = node2.next; // 使node1指向原来node2的下一位
      node2.next = node1; // 交换node1和node2位置
      p = node1; // 当前节点移动到已经交换的节点之后
  } 
  return list.next;  // 去除0节点
};