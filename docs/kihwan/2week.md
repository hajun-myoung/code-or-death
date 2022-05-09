- [펠린드롬 만들기](https://www.acmicpc.net/problem/1254)
    
    ```python
    x = input()
        
    for i in range(len(x)) :
        tmp = x + x[:i][::-1]
        if tmp == tmp[::-1] :
            print(len(tmp))
            break
    ```
    
- [최소 회의실 개수](https://www.acmicpc.net/problem/19598)
    
    ```python
    import sys
    import heapq
    
    def input():
        return sys.stdin.readline().rstrip()
    
    n = int(input())
    arr = sorted([list(map(int, input().split())) for _ in range(n)])
    result = []
    
    for i, time in enumerate(arr):
        if not result:
            heapq.heappush(result, time[1])
        else:
            if result[0] <= time[0]:
                heapq.heappop(result)
                heapq.heappush(result, time[1])
            else:
                heapq.heappush(result, time[1])
    
    print(len(result))
    ```
    
- [절댓값 힙](https://www.acmicpc.net/problem/11286)
    
    ```python
    import sys
    import heapq
    
    def input():
        return sys.stdin.readline().rstrip()
    
    n = int(input())
    hq = []
    
    for _ in range(n):
        cur = int(input())
        if cur:
            heapq.heappush(hq, (abs(cur), cur))
        else:
            if not hq:
                print(0)
            else:
                print(heapq.heappop(hq)[1])
    ```
    
- [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)
    
    ```python
    class Solution:
        def isValid(self, s: str) -> bool:
            
            st = []
            m = {"]": "[", "}": "{", ")": "("}
            result = True
            
            for i in s:
                if i == "]" or i == "}" or i == ")":
                    if not st:
                        result = False
                        break
                    
                    if st.pop() != m[i]:
                        result = False
                        break
                else:
                    st.append(i)
            
            if len(st) > 0:
                return False
            
            return result
    ```
    
- [Two Sum](https://leetcode.com/problems/two-sum/)
    
    ```python
    class Solution:
        def twoSum(self, nums: List[int], target: int) -> List[int]:
            
            values = {}
            for i, value in enumerate(nums):
                if target - value in values:
                    return [values[target - value], i] 
                else:
                    values[value] = i
    ```