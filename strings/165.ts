/**
 * question: 165. 比较版本号
 * address: https://leetcode.cn/problems/compare-version-numbers/
 */

export function compareVersion(version1: string, version2: string): number {
    const arr1 = version1.split('.');
    const arr2 = version2.split('.');
    const size = Math.max(arr1.length, arr2.length);

    for (let i = 0; i < size; i++) {
        const x = arr1[i] ? parseInt(arr1[i]) : 0;
        const y = arr2[i] ? parseInt(arr2[i]) : 0;

        if (x > y) {
            return 1;
        }

        if (x < y) {
            return -1;
        }
    }

    return 0;
}
