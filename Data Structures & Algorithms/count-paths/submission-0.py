class Solution:
    def uniquePaths(self, r: int, c: int) -> int:
        prev_row = [0] * c

        for _r in range(r - 1, -1, -1):
            cur_row = [0] * c
            cur_row[c -1] = 1

            for _c in range(c - 2, -1, -1):
                cur_row[_c] = cur_row[_c + 1] + prev_row[_c]
            prev_row = cur_row

        return cur_row[0]