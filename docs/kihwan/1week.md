- [9. Palindrome Number](https://leetcode.com/problems/palindrome-number/)
    
    ```python
    class Solution:
        def isPalindrome(self, x: int) -> bool:
    		    
    				# 양 끝을 비교해서 값이 다르면 False
            x = str(x)
            result = True
            
            for i in range(len(x)//2):
                if x[i] != x[-1-i]:
                    result = False
                    break
        
            return result
    ```
    
- [125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)
    
    ```python
    class Solution:
        def isPalindrome(self, s: str) -> bool:
            
            result = True
            s = ''.join(filter(str.isalnum, s.lower()))
            
            for i in range(len(s)//2):
                if s[i] != s[-1-i]:
                    result = False
                    break
            
            return result
    ```
    
- [455. Assign Cookies](https://leetcode.com/problems/assign-cookies/)
    
    ```python
    class Solution:
        def findContentChildren(self, g: List[int], s: List[int]) -> int:
            result = 0
            heapq.heapify(g)
            heapq.heapify(s)      
            
            while len(g) and len(s):
                cookie = heapq.heappop(s)
                
                if cookie >= g[0]:
                    heapq.heappop(g)
                    result +=1
            
            return result
    ```
    
- [11. Container With Most Water](https://leetcode.com/problems/container-with-most-water/)
    
    ```python
    class Solution:
        def maxArea(self, height: List[int]) -> int:
            
            left = 0
            right = len(height) - 1
            result = 0
            
            while left <= right:
                
                h = min(height[left], height[right])
                result = max(result, h * (right - left))
                
                if height[right] > height[left]:
                    left += 1
                else:
                    right -= 1
                
            return result
    ```
    
- [체육복](https://programmers.co.kr/learn/courses/30/lessons/42862)
    
    ```python
    import heapq
    
    def solution(n, lost, reserve):
    
        lost, reserve = list(set(lost) - set(reserve)), list(set(reserve) - set(lost))
        heapq.heapify(lost)
        heapq.heapify(reserve)
        
        count = 0
        
        while len(lost) and len(reserve):
            
            if lost[0] > reserve[0] + 1:
                heapq.heappop(reserve)
            elif reserve[0] + 1 == lost[0] or reserve[0] - 1 == lost[0]:
                heapq.heappop(reserve)
                heapq.heappop(lost)
            else:
                heapq.heappop(lost)
                count += 1
            
        return n - count - len(lost)
    ```
    
- [베스트앨범](https://programmers.co.kr/learn/courses/30/lessons/42579)
    
    ```python
    def solution(genres, plays):
        d = {}
        dsum = {}
        answer = []
        
        for i, gen in enumerate(genres):
            if gen in dsum:
                d[gen].append((i ,plays[i]))
                dsum[gen] += plays[i]
                d[gen] = sorted(d[gen], key=lambda x: x[1], reverse=True)
                if len(d[gen]) > 2:
                    d[gen].pop()
            else:
                d[gen] = [(i ,plays[i])]
                dsum[gen] = plays[i]
        
        dsum = sorted(dsum.items(), key=lambda x: x[1], reverse=True)
        
        for element in dsum:
            for j in d[element[0]]:
                answer.append(j[0])
        
        return answer
    ```
    
- [큰 수 만들기](https://programmers.co.kr/learn/courses/30/lessons/42883)
    
    ```python
    def solution(number, k):
        stk = []
        for i in number:
            while stk and stk[-1] < i and k>0:
                k-=1
                stk.pop()
            stk.append(i)
        return "".join(stk[:len(stk)-k])
    ```
    
- [블로그2](https://www.acmicpc.net/problem/20365)
    
    ```python
    n = int(input())
    s = input()
    
    red = 0
    blue = 0
    cur = s[0]
    if cur == "B":
        blue += 1
    else:
        red += 1
    
    for i in s:
        if i != cur:
            cur = i
            if cur == "B":
                blue += 1
            else:
                red += 1
    
    if red > blue:
        red = 1
    else:
        blue = 1
    
    print(red + blue)
    ```
    
- [나이순 정렬](https://www.acmicpc.net/problem/10814)
    
    ```python
    n = int(input())
    a=[]
    
    for i in range(n):
        data = input().split(' ')
        a.append((int(data[0]), data[1]))
    
    a.sort(key=lambda x:x[0])
    
    for i in a:
        print(i[0], i[1])
    ```
    
- [국영수](https://www.acmicpc.net/problem/10825)
    
    ```python
    import sys
    
    def input():
        return sys.stdin.readline().rstrip()
    
    n = int(input())
    
    l = [list(input().split()) for _ in range(n)]
    
    for i in l:
        i[1], i[2], i[3] = int(i[1]), int(i[2]), int(i[3])
    
    l.sort(key=lambda x: (-x[1], x[2], -x[3], x[0]))
    
    for i in l:
        print(i[0])
    ```