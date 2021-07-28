/**
 * question: 83. 删除排序链表中的重复元素
 * address: https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/
 */
export function deleteDuplicates(head: ListNode | null): ListNode | null {
    let fast = head;
    let slow = head;

    while(fast) {
        if (slow.val !== fast.val) {
            slow.next = fast;
            slow = slow.next;
        }
        fast = fast.next;
    }

    return head;
}
