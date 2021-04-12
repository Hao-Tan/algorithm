/**
 * 59. 螺旋矩阵 II
 * address: https://leetcode-cn.com/problems/spiral-matrix-ii/solution/
 */
function generateMatrix(n: number): number[][] {
    const arr = new Array(n).fill(0).map((item) => new Array(n).fill(0));
    let startX = 0;
    let startY = 0;
    let loop = n >> 1;
    let mid = n >> 1;
    let length = n - 1;
    let num = 1;

    while (loop--) {
        let i = startX;
        let j = startY;
        // 从左到右，左闭右开，每次循环圈大小减1的次数
        for (; j < startY + length; j++) {
            arr[i][j] = num++;
        }
        for (; i < startX + length; i++) {
            arr[i][j] = num++;
        }
        for (; j > startX; j--) {
            arr[i][j] = num++;
        }
        for (; i > startY; i--) {
            arr[i][j] = num++;
        }

        length -= 2;
        startX++;
        startY++;
    }

    if (n % 2 === 1) {
        arr[mid][mid] = num++;
    }

    return arr;
}

console.log(generateMatrix(6));
