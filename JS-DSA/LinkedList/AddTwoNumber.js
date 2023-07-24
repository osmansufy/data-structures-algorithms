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

// *Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var addTwoNumbers = function (l1, l2) {
  let newHead = new ListNode(0);
  let current = newHead;
  let carry = 0;
  // Loop through lists l1 and l2 until you reach both ends and carry is not 0
  while (l1 || l2) {
    // first check value

    let l1Value = l1 ? l1.val : 0;
    let l2Value = l2 ? l2.val : 0;
    // sum 2 value

    let sum = l1Value + l2Value + carry;

    carry = Math.floor(sum / 10);

    // add to linked list which is modules of 10
    current.next = new ListNode(Math.floor(sum % 10));

    // forward to next
    current = current.next;

    l1 = l1 != null && l1.next;
    l2 = l2 != null && l2.next;
  }

  //   if carry is 1 then add to linked list

  if (carry) {
    current.next = new ListNode(carry);
  }

  return newHead.next;
};
