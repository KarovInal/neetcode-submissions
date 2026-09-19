class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const dict = {};
        const result = [];

        strs.forEach((str) => {
            const chars = new Array(25).fill(0);
            for(let i = 0; i < str.length; i++) {
                const charIndex = str[i].charCodeAt(0) - 97;

                chars[charIndex] += 1;
            }

            let key = chars.join("_");

            if(!dict[key]) {
                dict[key] = [str]
            } else {
                dict[key].push(str)
            }
        });

        // console.log(dict);

        for(let key in dict) {
            result.push(dict[key]);
        }

        return result;
    }
}
