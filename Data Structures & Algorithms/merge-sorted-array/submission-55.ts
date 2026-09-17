class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1: number[], m: number, nums2: number[], n: number): void {
        let i = 0;
        let iMax = m;
        let j = 0;
        let jMax = n;
        let pasteIndex = 0;

        const result = [...nums1.slice(i, iMax), ...nums2.slice(j, jMax)];

        while(pasteIndex < m + n) {
            if(iMax <= 0) {
                break;
            } else if (jMax <= 0) {
                break;
            }
            
            if(i >= m) break;

            if (nums1[i] > nums2[j]) {
                result[pasteIndex] = nums2[j];
                pasteIndex += 1;
                j += 1;
            } else if (nums1[i] === nums2[j]) {
                result[pasteIndex] = nums1[i];
                result[pasteIndex + 1] = nums2[j];
                pasteIndex += 2;
                i += 1;
                j += 1;
            } else {
                result[pasteIndex] = nums1[i];
                pasteIndex += 1;
                i += 1;
            }
        }

        for(let i = 0; i < result.length; i++) {
            nums1[i] = result[i]
        }
    }
}
