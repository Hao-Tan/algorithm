/**
 * question: 797. 所有可能的路径
 * address: https://leetcode-cn.com/problems/all-paths-from-source-to-target/
 */


export function allPathsSourceTarget(graph: number[][]): number[][] {
    const res: number[][] = [];
    const path: number[] = [];

    function traverse(graph: number[][], i: number) {
        path.push(i);

        const n = graph.length;
        // 到达终点
        if (n - 1 === i) {
            res.push(path.slice());
            path.pop();
            return;
        }

        for (const node of graph[i]) {
            traverse(graph, node);
        }

        path.pop();
    }

    traverse(graph, 0);
    return res;
}
