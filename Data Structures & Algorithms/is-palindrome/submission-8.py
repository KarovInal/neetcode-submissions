import re

class Solution:
    def isPalindrome(self, s: str) -> bool:
        s = re.sub('[^0-9a-zA-Z]+', '', s)

        L, R = 0, len(s) - 1

        print(s)

        while L < R:
            l, r = s[L].lower(), s[R].lower()

            if l != r:
                return False

            L += 1
            R -= 1
        
        return True
