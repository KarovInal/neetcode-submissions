class Solution {
    salt = 0;

    constructor() {
        this.salt = Math.floor(Math.random() * (100 - 20 + 1)) + 20;
    }

    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let result = "";
        const encodedChars = {};

        for(const str of strs) {
            let encodedStr = "";

            for(let c of str) {
                if(!c) {
                    console.log("CONTINUE");
                    continue;
                }

                console.log("c---", c)

                if(!encodedChars[c]) {
                    encodedChars[c] = c.charCodeAt(0) * this.salt;
                }

                encodedStr += encodedStr ? `_${encodedChars[c]}` : `${encodedChars[c]}`;
            }

            result += `${encodedStr}#`;
        }

        return result || "";
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const result = [];
        const strs = str.split("#");
        const i = 0;
        let _str = "";
        let _strs = [];

        for(const c of str) {
            if(c === "#") {
                _strs.push(_str);
                _str = "";
            } else {
                _str += c;
            }
        }

        for(const str of _strs) {
            let encodedStr = "";
            const encodedChars = str.split("_");

            for(const char of encodedChars) {
                if(!char) continue;

                encodedStr += String.fromCharCode(Number(char) / this.salt);
            }

            result.push(encodedStr);
        }

        return result;
    }
}
