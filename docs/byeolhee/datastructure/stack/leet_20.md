# [Valid-parentheses](https://leetcode.com/problems/valid-parentheses/)

(, [, { 는 stack에 push, 그 반대 방향 기호들은 pop한다.<br/>
), ], } 인데 stack이 비어있거나 stack.pop()이 해당 기호의 반대 기호가 아니라면 False를 return하게 한다.

```python
class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        bracket = {
            ')':'(',
            '}':'{',
            ']':'[',
        }

        for char in s:
            if char not in bracket:
                stack.append(char)
            elif not stack or bracket[char] != stack.pop():
                return False
        return len(stack) == 0
```
