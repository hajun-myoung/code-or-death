# [Palindrome Number](https://leetcode.com/problems/palindrome-number/)

deque를 이용하여 앞 뒤 원소를 출력해 비교하는 방법

```python
from collections import deque

class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        strs = deque([i for i in str(x)])

        while len(strs) > 1:
          if strs.popleft() != strs.pop():
            return False

        return True
```

리스트의 슬라이싱을 이용해 리스트를 반으로 잘라서 앞 뒤를 비교하는 방법

```python
class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        strs = str(x)
        strs_head = strs[:len(strs)//2]
        # 문자열 길이가 짝수인지 홀수인지에 따라 달라짐
        strs_tail = strs[len(strs)//2:] if len(strs)%2 == 0 else strs[len(strs)//2+1:]

        return strs_head == strs_tail[::-1]
```
