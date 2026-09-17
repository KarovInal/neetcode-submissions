class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        let arr = [];
        for(const values of matrix) {
            arr.push(...values)
        }

        let L = 0, R = arr.length - 1;

        while (L <= R) {
            let mid = Math.floor((L + R) / 2);

            if (target > arr[mid]) {
                L = mid + 1;
            } else if (target < arr[mid]) {
                R = mid - 1;
            } else {
                return true;
            }
        }
        return false;
    }
}
