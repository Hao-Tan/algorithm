/**
 * question: 876. 链表的中间结点
 * address: https://leetcode-cn.com/problems/middle-of-the-linked-list/
 */

export function middleNode(head: ListNode | null): ListNode | null {
    let slow = head;
    let fast = head;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
};
