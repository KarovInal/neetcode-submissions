import math

class Solution:
    def findMin(self, nums: List[int]) -> int:
        if nums[0] < nums[-1]:
            return nums [0]
        
        l = 0
        r = len(nums) - 1

        while r > l:
            mid = l + (r - l) // 2

            if nums[mid] < nums[r]:
                r = mid
            else:
                l = mid + 1

        return nums[r]