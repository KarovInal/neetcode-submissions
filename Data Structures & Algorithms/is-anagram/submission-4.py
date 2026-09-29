class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        chars = {}
        left = []

        if len(s) != len(t):
            return False

        for _s in s:
            if _s not in chars:
                chars[_s] = 1

            chars[_s] += 1

        for _t in t:
            if _t in chars:
                chars[_t] -= 1

                if chars[_t] == 0:
                    left.append(_t)
            else:
                left.append(_t)

        return len(left) == 0