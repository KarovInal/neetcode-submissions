import heapq

class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        h = stones
        heapq.heapify_max(h)

        print(h)

        while len(h) > 1:
            stone1 = heapq.heappop_max(h)
            stone2 = heapq.heappop_max(h)

            result = abs(stone1 - stone2)
            heapq.heappush_max(h, result)

        return h[0]