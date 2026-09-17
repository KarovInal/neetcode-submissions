class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums: number[]): void {
        const colorsBucket = [0, 0, 0];

        for(const color of nums) {
            console.log(color)
            colorsBucket[color] += 1;
        }

        let k = 0;
        for(let i = 0; i < colorsBucket.length; i++) {
            for(let j = 0; j < colorsBucket[i]; j++) {
                nums[k] = i;
                k += 1;
            }
        }
    }
}
