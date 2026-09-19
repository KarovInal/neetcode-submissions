class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const dict = {};
        // const result = [];

        strs.forEach((str) => {
            const chars = new Array(25).fill(0);
            for (let c of str) {
                chars[c.charCodeAt(0) - 97] += 1;
            }

            let key = chars.join("_");

            if(!dict[key]) {
                dict[key] = [str]
            } else {
                dict[key].push(str)
            }
        });

        // console.log(dict);

        return Object.values(dict);
    }
}
