import math

class Solution:
    def findMin(self, nums: List[int]) -> int:
        if nums[0] < nums[-1]:
            return nums [0]
        
        l = 0
        r = len(nums) - 1

        while r - l > 1:
            mid = l + math.ceil((r - l - 1) / 2)

            if nums[mid] > nums[r]:
                l = mid
            elif nums[mid] < nums[r]:
                r = mid

        return nums[r]