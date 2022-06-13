/**
 * question: 22. 括号生成
 * address: https://leetcode.cn/problems/generate-parentheses/
 */
export function generateParenthesis(n: number): string[] {
    const res: string[] = [];
    const dfs = (left: number, right: number, s:string) => {
        if (s.length === 2*n) {
            return res.push(s);
        }

        if (left > 0) {
            dfs(left - 1, right, s + '(')
        }
        if (right > left) {
            dfs(left, right -1, s+ ')')
        }
    }

    dfs(n, n, '');
    return res;
};
