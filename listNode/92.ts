/**
 * question: 92. 反转链表 II
 * address: https://leetcode-cn.com/problems/reverse-linked-list-ii/
 */

let nextNode: ListNode | null = null;
/**
 * 1.1 反转前n个节点--递归
 * @param head
 */
function reverseN(head: ListNode | null, n: number): ListNode | null {
    if (n === 1) {
        nextNode = head.next;
        return head;
    }

    const last = reverseN(head.next, n - 1);
    head.next.next = head;
    head.next = nextNode;

    return last;
}

/**
 * 1.2 反转前n个节点--迭代
 * @param head
 */
function reverseN2(head: ListNode | null, n: number): ListNode | null {
    let pre = null;
    let curr = head;
    const headNode = head;
    while (curr && n > 0) {
        if (n === 1) {
            nextNode = curr.next;
        }
        const next = curr.next;
        curr.next = pre;
        pre = curr;
        curr = next;
        n--;
    }

    headNode.next = nextNode;

    return pre;
}

/**
 * 2.1 区间内反转
 * @param head
 */
function reverseBetween(
    head: ListNode | null,
    left: number,
    right: number
): ListNode | null {
    if (head === null || head.next === null) {
        return head;
    }

    if (left == 1) {
        return reverseN2(head, right);
    }
    // 前进到反转的起点触发 base case
    head.next = reverseBetween(head.next, left - 1, right - 1);
    return head;
}

exports = {
    reverseN,
    reverseN2,
    reverseBetween
};
