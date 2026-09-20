class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const freq = {};
        const result = [];

        for(let n of nums) {
            if(!freq[n]) {
                freq[n] = {
                    count: 0,
                    index: null
                }
            }

            freq[n].count += 1;

            // console.log("result.length", result.length);

            if(result.length < k && freq[n].index === null) {
                result.push(n);
                freq[n].index = result.length - 1;
            } else if (freq[n].index === null && freq[n].count > 1) {
                const lastNumber = result[result.length - 1];
                const freqNumber = freq[lastNumber];

                if(freqNumber.count < freq[n].count) {
                    freqNumber.index = null;
                    result[result.length - 1] = n;
                    freq[n].index = result.length - 1;
                }
            }

            let i = freq[n].index;

            while(i > 0 && freq[n].count > freq[result[i - 1]].count) {
                const leftNum = result[i - 1];
                const freqNumber = freq[leftNum];

                freqNumber.index = i;
                result[i] = leftNum;
                result[i - 1] = n;
                freq[n].index = i - 1;
                i -= 1;
            }
        }

        return result;
    }
}
