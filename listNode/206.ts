/**
 * question: 206. 反转链表
 * address: https://leetcode-cn.com/problems/reverse-linked-list/
 */

/**
 * 1. 迭代实现
 * @param head
 */
function reverseList(head: ListNode | null): ListNode | null {
    let pre = null;
    let curr = head;
    while (curr) {
        const next = curr.next;
        curr.next = pre;
        pre = curr;
        curr = next;
    }

    return pre;
}

/**
 * 2. 递归实现
 * @param head
 */
function reverseList2(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) {
        return head;
    }

    const reversedNext = reverseList2(head.next);
    head.next.next = head;
    head.next = null;

    return reversedNext;
}

exports = {
    reverseList,
    reverseList2,
};
