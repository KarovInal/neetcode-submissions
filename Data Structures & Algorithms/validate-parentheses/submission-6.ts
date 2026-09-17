class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    dic = {
        "[": "]",
        "{": "}",
        "(": ")"
    };

    isValid(s: string): boolean {
        if(s.length % 2 !== 0) return false;

        const stack = [];

        for(const _s of s) {
            if(stack.length === 0 || this.dic[stack[stack.length -1]] !== _s) {
                stack.push(_s);
            } else {
                stack.pop();
            }
        }

        return stack.length === 0;
    }
}
