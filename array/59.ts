/**
 * question: 59. 螺旋矩阵 II
 * address: https://leetcode-cn.com/problems/spiral-matrix-ii/solution/
 */
exports = function generateMatrix(n: number): number[][] {
    const arr = new Array(n).fill(0).map((item) => new Array(n).fill(0));
    let startX = 0;
    let startY = 0;
    let endX = n - 1;
    let endY = n - 1;
    let loop = n >> 1;
    let mid = n >> 1;
    let num = 1;

    while (loop--) {
        // 从左到右，左闭右开，每次循环圈大小减1的次数
        for (let j = startY; j < endY; j++) {
            arr[startX][j] = num++;
        }
        for (let i = startX; i < endX; i++) {
            arr[i][endY] = num++;
        }
        for (let j = endY; j > startY; j--) {
            arr[endX][j] = num++;
        }
        for (let i = endX; i > startX; i--) {
            arr[i][startX] = num++;
        }

        startX++;
        startY++;
        endX--;
        endY--;
    }

    if (n % 2 === 1) {
        arr[mid][mid] = num++;
    }

    return arr;
}

console.log(generateMatrix(6));
