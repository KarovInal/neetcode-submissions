class Solution:
    def rob(self, nums: List[int]) -> int:
        if len(nums) <= 2:
            return max(nums)

        sums = nums

        result = max(nums[0], nums[1])

        for i in range(2, len(nums)):
            close_num = nums[i-2]
            far_num = nums[i-3] if i-3 >= 0 else 0

            sums[i] += max(close_num, far_num)

            result = sums[i] if result <= sums[i] else result

        return result
