/**
 * question: 19. 删除链表的倒数第 N 个结点
 * address: https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
 */

export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let fast = head;
    let slow = head;

    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    if (fast === null) {
        return head.next;
    }

    while(fast && fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;

    return head;
};