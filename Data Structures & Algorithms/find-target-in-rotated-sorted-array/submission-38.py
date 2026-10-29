class Solution:
    def search(self, nums: List[int], t: int) -> int:
        l = 0
        r = len(nums) - 1

        while r >= l:
            mid = l + (r - l) // 2

            if nums[mid] == t:
                return mid
            elif nums[l] == t:
                return l
            elif nums[r] == t:
                return r

            if nums[mid] < t:
                if nums[r] > t or nums[r] < nums[mid]:
                    l = mid + 1
                else:
                    r = mid - 1
            elif nums[mid] > t:
                if nums[l] < t or nums[l] > nums[mid]:
                    r = mid - 1
                else:
                    l = mid + 1

        return -1