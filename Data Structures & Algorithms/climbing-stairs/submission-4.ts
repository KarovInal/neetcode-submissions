class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    cache = new Map();

    climbStairs(n: number): number {
        if(n === 2) return 2;
        if(n === 1) return 1;
        if(n <= 0) return 0;

        if(this.cache.has(n)) return this.cache.get(n);

        const result = this.climbStairs(n - 1) + this.climbStairs(n - 2);

        this.cache.set(n, result);

        return result;
    }
}
