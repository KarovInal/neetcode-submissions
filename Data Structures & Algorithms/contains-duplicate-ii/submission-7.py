class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        window = set()
        L = 0

        if k == 0:
            return False

        for R in range(len(nums)):
            n = nums[R]

            if abs(L - R) > k:
                window.remove(nums[L])
                L += 1

            if n in window:
                return True

            window.add(n)

        return False