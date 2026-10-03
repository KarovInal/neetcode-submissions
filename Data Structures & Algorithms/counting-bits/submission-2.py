class Solution:
    def countBits(self, n: int) -> List[int]:
        if n == 0:
            return [0]
        if n <= 2:
            return [0] + [1] * n

        result = [0, 1, 1]

        for _n in range(3, n + 1):
            count = 0

            while _n > 0:
                if _n & 1 == 1:
                    count += 1
                _n = _n >> 1
            
            result.append(count)
        
        return result
