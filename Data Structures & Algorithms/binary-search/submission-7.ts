class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let L = 0;
        let R = nums.length - 1;

        while(L <= R) {
            const M = Math.floor((R + L) / 2);

            if(target > nums[M]) {
                L = M + 1;
            } else if (target < nums[M]) {
                R = M - 1;
            } else {
                return M;
            }
        }

        return -1;
    }
}
