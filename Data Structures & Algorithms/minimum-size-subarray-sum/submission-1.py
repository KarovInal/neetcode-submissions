class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        minLength = float("inf")
        currentSum = 0
        L = 0

        for R in range(len(nums)):
            r = nums[R]

            currentSum += r

            while R - L >= 0 and currentSum >= target:
                # if currentSum >= target:
                if R - L + 1 < minLength:
                    minLength = R - L + 1

                currentSum -= nums[L]

                L += 1

        return 0 if minLength == float("inf") else minLength