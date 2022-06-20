/**
 * question: 51. N 皇后
 * address: https://leetcode.cn/problems/n-queens/
 */
function solveNQueens(n: number): string[][] {
    const dfs = (solution: string[]) => {
        if (solution.length === n) {
            res.push([...solution]);
            return true;
        }

        const len = solution.length;
        for (let i = 0; i < n; i++) {
            if (!isValid(solution, len, i)) {
                continue;
            }
            const newLine = new Array(n).fill('.');
            newLine[i] = 'Q';
            solution.push(newLine.join(''));
            if (dfs(solution)) {
                return true;
            }
            solution.pop();
        }
        return false;
    };

    const isValid = (solution: string[], row: number, col: number) => {
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (solution[i][j] === 'Q') {
                return false;
            }
        }
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (solution[i][j] === 'Q') {
                return false;
            }
        }
        for (let i = 0; i < row; i++) {
            if (solution[i][col] === 'Q') {
                return false;
            }
        }

        return true;
    };

    const res: string[][] = [];
    const solution: string[] = [];
    dfs(solution);
    return res;
}

console.log(solveNQueens(4));
