/**
 * question: 25. K 个一组翻转链表
 * address: https://leetcode-cn.com/problems/reverse-nodes-in-k-group/
 */

export function reverseList(head: ListNode | null, tail: ListNode | null): ListNode | null {
    let pre = null;
    let curr = head;
    while (curr !== tail) {
        const next = curr.next;
        curr.next = pre;
        pre = curr;
        curr = next;
    }

    return pre;
}

export function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    let hair = new ListNode(0, head);
    let pre = hair;

    while(head) {
        let tail = head;
        for (let i = 0; i < k; i++) {
            if (tail === null) {
                return hair.next;
            }
            tail = tail.next;
        }

        const reversed = reverseList(head, tail);

        pre.next = reversed;
        head.next = tail;
        pre = head;
        head = tail;
    }

    return hair.next;
};
