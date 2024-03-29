/**
 * question: 142. 环形链表 II
 * address: https://leetcode-cn.com/problems/linked-list-cycle-ii/
 */

export function detectCycle(head: ListNode | null): ListNode | null {
    if (head === null) {
        return null;
    }

    let fast = head;
    let slow = head;

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;

        if (fast === slow) {
            fast = head;

            while (fast !== slow) {
                fast = fast.next;
                slow = slow.next;
            }

            return slow;
        }
    }
    
    return null;
}
