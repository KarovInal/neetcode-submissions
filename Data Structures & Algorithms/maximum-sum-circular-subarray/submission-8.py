import math

class Solution:
    def maxSubarraySumCircular(self, nums: List[int]) -> int:
        split = math.floor(len(nums) / 3)
        maxSum = nums[0]
        curSum = 0

        arr_1 = nums
        arr_2 = nums[-split:] + nums[0:split] + nums[split:-split]
        arr_3 = nums[split:-split] + nums[-split:] + nums[0:split]

        nums = arr_1 + arr_2 + arr_3

        for i in range(len(nums)):
            n = nums[i]

            if(i % (len(nums) // 3) == 0):
                print("RESET SUM", i)
                curSum = 0

            curSum = max(curSum, 0)
            curSum += n
            maxSum = max(curSum, maxSum)
        
        return maxSum