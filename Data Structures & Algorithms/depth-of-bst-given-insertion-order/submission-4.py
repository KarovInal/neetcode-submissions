class Solution:
    def maxDepthBST(self, order: List[int]) -> int:
        n = len(order)
        rank = [0]*(n+1)
        for i, value in enumerate(order):
            rank[value] = i
        parent = [0]*(n+1)
        stack = []
        for value in range(1,n+1):
            last = 0
            while stack and rank[stack[-1]] > rank[value]:
                last = stack.pop()
            if stack:
                parent[value] = stack[-1]
            if last:
                parent[last] = value
            stack.append(value)
        depth = [0]*(n+1)
        answer = 0
        for value in order:
            depth[value] = depth[parent[value]]+1
            answer = max(answer,depth[value])
        return answer
