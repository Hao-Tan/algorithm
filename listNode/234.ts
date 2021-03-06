/**
 * question: 234. 回文链表
 * address: https://leetcode-cn.com/problems/palindrome-linked-list/
 */

let left: ListNode | null;

export function traverse(head: ListNode | null) {
    if (!head) {
        return true;
    }

    const res = traverse(head.next);
    const newRes = res && (left.val === head.val);
    left = left.next;
    return newRes;
}

export function isPalindrome(head: ListNode | null): boolean {
    left = head;
    return traverse(head);
}


// 以下空间复杂度为O(1)
export function reverse(head: ListNode | null) {
    let pre = null;
    let curr = head;
    while(curr) {
        const next = curr.next;
        curr.next = pre;
        pre = curr;
        curr = next;
    }

    return pre;
}

export function isPalindrome2(head: ListNode | null): boolean {
    let left = head;
    let slow = head;
    let fast = head;
    let beforeSlow: ListNode | null = null;

    while (fast && fast.next) {
        beforeSlow = slow;
        fast = fast.next.next;
        slow = slow.next;
    }

    if (fast) {
        beforeSlow = slow;
        slow = slow.next;
    }

    const newHead = reverse(slow);
    let right = newHead;

    let res: boolean = true;
    while(right) {
        if (right.val === left.val ) {
            res = true;
        } else {
            res = false;
            break;
        }

        left = left.next;
        right = right.next;
    }

    beforeSlow.next = reverse(newHead);

    return res;
}