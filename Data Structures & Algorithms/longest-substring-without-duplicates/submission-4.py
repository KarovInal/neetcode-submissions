class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if s == '':
            return 0

        L, R = 0, 1
        max_len = 1
        c_set = set(s[0])

        while R < len(s):
            c1 = s[L]
            c2 = s[R]

            if c2 in c_set:
                while c1 != c2:
                    L += 1
                    c_set.discard(c1)
                    c1 = s[L]

                L += 1
            else:
                c_set.add(c2)

            max_len = max(max_len, len(c_set))
            R += 1

        return max_len