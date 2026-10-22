class Solution:
    def maxArea(self, heights: List[int]) -> int:
        L = 0
        R = len(heights) - 1
        maxTank = 0

        while L < R:
            size = R - L
            h = min(heights[L], heights[R])
            maxTank = max(h * size, maxTank)

            if heights[L] > heights[R]:
                R -= 1
            elif heights[R] > heights[L]:
                L += 1
            else:
                R -= 1
        
        return maxTank
        