# [Happy number](https://leetcode.com/problems/happy-number/)

투 포인터로 어떻게 풀 수 있는지 모르겠음;;

## sol.1

한 자리 숫자인데 짝수인 경우는 절대 1이 될 수 없다.<br/>
따라서 재귀로 돌면서 n이 한자리 숫자인데 1이면 True를 반환하고 짝수라면 False를 반환하도록 하였다.
`4 → 16 → 37 → 58 → 89 → 145 → 42 → 20 → 4`

```python
import sys
sys.setrecursionlimit(10**7)

class Solution:
    def isHappy(self, n: int) -> bool:
        # 한 자리 숫자라면 그 값이 1이면 True
        # 한 자리 숫자인데 짝수이면 False
        if (n < 10):
            if n == 1:
                return True
            elif n == 2 or n == 4 or n == 6 or n == 8:
                return False

        temp = 0
        for s in str(n):
            temp += int(s)**2
        return Solution.isHappy(self,temp)
```

## sol.2

재귀 없이 풀 경우<br/>
제곱들의 합을 temp set에 저장하고 무한루프라면 set안의 값을 다시 만나게 된다 => False 반환

```python
class Solution:
    def isHappy(self, n: int) -> bool:
        temp = set()

        while n not in temp:
            temp.add(n)
            n = sum([int(x)**2 for x in str(n)])

            if n == 1:
                return True
        return False
```
