class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        let records = [];

        for (const opt of operations) {
            if(opt === "D") {
                if(records.length === 0) continue;

                records.push(records[records.length - 1] * 2);
            } else if(opt === "+") {
                if(records.length <= 1) continue;

                records[records.length] = records[records.length - 2] + records[records.length - 1];
            } else if(opt === "C") {
                if(records.length === 0) continue;

                records = records.slice(0, -1);
            } else {
                records.push(Number(opt));
            }
        }

        let sum = 0;

        for(let i = 0; i < records.length; i++) {
            sum += records[i];
        }

        return records.reduce((a, b) => a + b, 0)
    }
}
