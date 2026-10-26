from collections import Counter

class Solution:
    def minWindow(self, s: str, t: str) -> str:
        L = None
        mathes = []
        tSize = len(t)
        curSize = len(t)
        count = dict(Counter(t))
        countS = dict(Counter(s))
        countT = dict(Counter(t))
        minL, minR = None, None

        for R in range(len(s)):
            c = s[R]

            if c in count:
                count[c] -= 1
                curSize -= 1 if count[c] >= 0 else 0
                mathes.append(R)
                L = R if L is None else L

            while curSize == 0:
                if minL is None or R - L < minR - minL:
                    minL = L
                    minR = R + 1

                count[s[L]] += 1

                if count[s[L]] <= 0:
                    curSize = 0
                else:
                    curSize += 1

                L += 1

                while  L < len(s) and s[L] not in count:
                    L += 1

        return "" if minL is None else s[minL:minR]
