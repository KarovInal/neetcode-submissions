class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        let records = [];

        for (const opt of operations) {
            const [a, b] = records.slice(-2);

            switch(opt) {
                case "D":
                    if(records.length === 0) break;

                    records.push(records[records.length - 1] * 2);
                    break;
                case "+":
                    if(records.length <= 1) break;

                    records[records.length] = a + b;
                    break;
                case "C":
                    if(records.length === 0) break;

                    records = records.slice(0, -1);
                    break;
                default:
                    records.push(Number(opt));
            }
        }

        return records.reduce((acc, prev) => {
            acc += prev;

            return acc;
        }, 0);
    }
}
