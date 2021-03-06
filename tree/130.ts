/**
 * question: 130. 被围绕的区域
 * address: https://leetcode-cn.com/problems/surrounded-regions/
 */

export function solve(board: string[][]): void {
    const width = board[0].length;
    const height = board.length;

    function DFS(x: number, y: number) {
        if (
            x < 0 ||
            x >= height ||
            y < 0 ||
            y >= width ||
            board[x][y] !== 'O'
        ) {
            return;
        }
        board[x][y] = 'T';
        DFS(x - 1, y);
        DFS(x + 1, y);
        DFS(x, y - 1);
        DFS(x, y + 1);
    }

    for (let i = 0; i < height; i++) {
        DFS(i, 0);
        DFS(i, width - 1);
    }

    for (let j = 1; j < width - 1; j++) {
        DFS(0, j);
        DFS(height - 1, j);
    }

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (board[i][j] === 'T') {
                board[i][j] = 'O';
            } else {
                board[i][j] = 'X';
            }
        }
    }
}

export function solve2(board: string[][]): void {
    const width = board[0].length;
    const height = board.length;
    const queue = [];

    for (let i = 0; i < height; i++) {
        if (board[i][0] === 'O') {
            queue.push([i, 0]);
        }

        if (board[i][width - 1] === 'O') {
            queue.push([i][width - 1]);
        }
    }

    for (let j = 1; j < width - 1; j++) {
        if (board[0][j] === 'O') {
            queue.push([0, j]);
        }

        if (board[height - 1][j] === 'O') {
            queue.push([height - 1][j]);
        }
    }

    while (queue.length) {
        const [x, y] = queue.shift();
        board[x][y] = 'T';

        for (const [i, j] of [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ]) {
            if (
                x + i < 0 ||
                x + i >= height ||
                y + j < 0 ||
                y + j >= width ||
                board[x + i][y + j] !== 'O'
            ) {
                continue;
            }
            queue.push([x + i, y + j]);
        }
    }

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (board[i][j] === 'T') {
                board[i][j] = 'O';
            } else {
                board[i][j] = 'X';
            }
        }
    }
}
