class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        result = []
        sums = {}

        for i, num in enumerate(nums):
            if num in sums:
                result = [sums[num], i]
                break

            dif = target - num

            sums[dif] = i

        return result