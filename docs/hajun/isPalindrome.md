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

  1. input이 0으로 나누어 떨어지는 경우 : 0으로 끝나지만, 시작하지 않으므로 Palindrome이 아니다

      ```python:no-line-numbers
      elif (x % 10 == 0) and (x != 0) :
          # Numbers that end with 0, but not started with 0
          return False
      ```

      - 단, 입력값이 0이라면 0으로 시작하고 끝나므로 예외이다

- 상기 경우에 모두 해당하지 않는다면, 유효성을 검사한다

  1. 유효성 검사는, 입력값을 둘로 쪼개어 서로 비교한다

      ```python
      reversedNum = 0
          while x > reversedNum :
              # reversedNum에 x의 마지막 자리를 '밀어넣는다'
              reversedNum = reversedNum * 10 + x % 10
              # x의 마지막 자리를 없앤다 : 
              x /= 10
              x = int(x)
      ```

      - input이 "3443" 이라면 (짝수 갯수)

        - `x = 34`, `reversedNum = 34` 로 나뉘어진다

      - input이 "34543" 이라면 (홀수 갯수)

        - `x = 34`, `reversedNum = 345` 로 나뉘어진다

  1. x와 reversedNum를 비교해 palindrome인지 결정짓는다

      ```python
      return x == reversedNum or x == int(reversedNum / 10)
      ```

      - `x == reversedNum` 은 input이 짝수 갯수인 Palindrome에서 True이다

      - `x == int(reversedNum / 10)` 은 input이 홀수 갯수인 Palindrome에서 True이다
