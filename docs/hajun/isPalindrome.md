# LeetCode : Palindrome Problem

> Palindrome 숫자란, 뒤집어도 똑같은 수를 말한다

```python
class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0 :
            # negative numbers can't be a palindrome
            return False
        elif (x % 10 == 0) and (x != 0) :
            # Numbers that end with 0, but not started with 0
            return False
        else :
            # reversing number
            reversedNum = 0
            while x > reversedNum :
                reversedNum = reversedNum * 10 + x % 10
                x /= 10
                x = int(x)
            print(x, reversedNum)
            
            return x == reversedNum or x == int(reversedNum / 10)
```

## Idea

- 먼저 두 가지 경우에 무조건 False를 반환할 수 있다

  1. input이 0보다 작은 경우 : 음수는 Palindrome Number일 수 없다

        ```python:no-line-numbers
            if x < 0 :
                # negative numbers can't be a palindrome
                return False
        ```

  1. input이 0으로 나누어 떨어지는 경우 : 0으로 끝나지만, 시작하지 않는 경우 Palindrome이 아니다

  
        ```python:no-line-numbers
        elif (x % 10 == 0) and (x != 0) :
            # Numbers that end with 0, but not started with 0
            return False
        ```
