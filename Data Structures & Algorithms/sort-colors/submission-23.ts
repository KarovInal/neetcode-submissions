class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums: number[]): void {
        const colorsBucket = [0, 0, 0];

        for(const color of nums) {
            colorsBucket[color] += 1;
        }

        console.log("colorsBucket", colorsBucket)

        let k = 0;
        for(let i = 0; i < colorsBucket.length; i++) {
            const _k = k;
            while(k < (_k + colorsBucket[i])) {
                nums[k] = i;
                k += 1;
            }
        }
    }
}
