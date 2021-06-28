/**
 * question: 116. 填充每个节点的下一个右侧节点指针
 * address: https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node/
 */

class Node {
    val: number;
    left: Node | null;
    right: Node | null;
    next: Node | null;
    constructor(val?: number, left?: Node, right?: Node, next?: Node) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
        this.next = next === undefined ? null : next;
    }
}


/**
 * 层序遍历的改造
 * @param root 
 * @returns 
 */
export function connect(root: Node | null): Node | null {
    if (!root) {
		return root;
	}

	let left = root;

    while(left) {
        let layLeft = left;
        while (layLeft && layLeft.left) {
            layLeft.left.next = layLeft.right;
            if (layLeft.next) {
                layLeft.right.next = layLeft.next.left;
            }

            layLeft = layLeft.next;
        }

        left = left.left;
    }

    return root;
}


/**
 * 递归实现，和层序类似，都是在上一层完成下一层的next指向
 * @param root 
 * @returns 
 */
export function connect2(root: Node | null): Node | null {
	if (!root) {
		return root;
	}

	connection(root);

	return root;
}

export function connection(node: Node | null) {
	if (!node.left || !node.right) {
		return;
	}

	node.left.next = node.right;

	if (node.next) {
		node.right.next = node.next.left;
	}

	connection(node.left);
	connection(node.right);
}
