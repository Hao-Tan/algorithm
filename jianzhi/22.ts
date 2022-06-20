/**
 * question: 剑指 Offer 22. 链表中倒数第k个节点
 * address: https://leetcode.cn/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/
 */

export function getKthFromEnd(
    head: ListNode | null,
    k: number
): ListNode | null {
    let fast = head;
    let slow = head;
    for (let i = 0; i < k; i++) {
        fast = fast.next;
    }

    while(fast) {
        fast = fast.next;
        slow = slow.next;
    }

    return slow;
}
