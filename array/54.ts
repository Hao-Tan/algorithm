/**
 * question: 54. 螺旋矩阵
 * address: https://leetcode.cn/problems/spiral-matrix/
 */

export function spiralOrder(matrix: number[][]): number[] {
    const m = matrix[0].length;
    const n = matrix.length;
    const total = m * n;
    let t = 0;
    let b = n - 1;
    let l = 0;
    let r = m - 1;
    const res = [];
    let count = 0;

    while (count < total) {
        for (let i = l; i <= r && count < total; i++) {
            res.push(matrix[t][i]);
            count++;
        }
        t++;
        for (let i = t; i <= b && count < total; i++) {
            res.push(matrix[i][r]);
            count++;
        }
        r--;
        for (let i = r; i >= l && count < total; i--) {
            res.push(matrix[b][i]);
            count++;
        }
        b--;
        for (let i = b; i >= t && count < total; i--) {
            res.push(matrix[i][l]);
            count++;
        }
        l++;
    }

    return res;
}


console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))