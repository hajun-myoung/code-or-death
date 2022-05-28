# Generate Parentheses

> Parentheses란 "괄호"로, 주어진 정수 만큼의 쌍으로 이루어진 괄호들을 만드는 문제이다

## Examples

### Input

- Inteager Number

- 3

### Expected Output

- All valid parantheses

- ['((()))', '(()())', '(())()', '()(())', '()()()']

## Code

```python
class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        def createSequence(A = [ ]):
            if len(A) == 2*n :
                if isValid(A):
                    result.append("".join(A))
            else:
                A.append('(')
                createSequence(A)
                A.pop()
                A.append(')')
                createSequence(A)
                A.pop()
        
        def isValid(myArr):
            check = 0
            for c in myArr:
                if c == "(":
                    check += 1
                else :
                    check -= 1
                if check < 0 : return False
            return check == 0
        
        result = []
        createSequence()
        return result
```

## Idea

- 각 괄호들("(", ")")로 이루어진 모든 배열을 만든 후, 유효한지 검사한다

  - 모든 경우의 수 생성은 **재귀**로 처리한다

## Code destructing

### Final step of Recursion

```python
if len(A) == 2*n :
    if isValid(A):
        result.append("".join(A))
```

재귀로 호출될 함수이므로, *마지막*을 미리 정한다  
하나의 경우에 해당할 배열 내용이 2*n개의 길이라면, 배열이 완성된 것이므로 유효성 검사를 진행한다

### Progressing Recursion

```python
else:
    A.append('(')
    createSequence(A)
    A.pop()
    A.append(')')
    createSequence(A)
    A.pop()
```

- 배열에 여는괄호("(")를 넣고, 스스로를 호출한다

- 마지막 요소를 제거하고, 닫는괄호를 넣고, 다시 스스로를 호출한다

- 마지막 요소를 제거한다

이 과정을 재귀적으로 반복하면, "모든 경우의 수"를 생성할 수 있다  

### isValid

```python
def isValid(myArr):
    check = 0
    for c in myArr:
        if c == "(":
            check += 1
        else :
            check -= 1
        if check < 0 : return False
    return check == 0
```

- 여는괄호를 찾으면, check를 1 증가시킨다

- 닫는괄호를 찾으면, check를 1 감소시킨다

- check가 최종적으로 0이어야 순서쌍이 형성되었는 것이다

- for loop를 반복하는 중에 check가 0보다 작아지면, 불가능한 경우이다 (괄호를 열지 않았는데 닫음)

## Code Review

```python{7-13}
class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        def createSequence(A = [ ]):
            if len(A) == 2*n :
                if isValid(A):
                    result.append("".join(A))
            else:
                A.append('(')
                createSequence(A)
                A.pop()
                A.append(')')
                createSequence(A)
                A.pop()
        
        def isValid(myArr):
            check = 0
            for c in myArr:
                if c == "(":
                    check += 1
                else :
                    check -= 1
                if check < 0 : return False
            return check == 0
        
        result = []
        createSequence()
        return result
```

다음과 같이 함수를 호츨했다고 가정하자:  

```text:no-line-numbers
createSequence([], 1)
```

n == 1 이므로, 배열의 길이가 2가 돼야 유효성 검사가 시작된다. 그 전까지:

```python
## Depth 1
A = ["("] # 여는 괄호를 넣고, 재귀호출

## Depth 2
# 길이가 1임 - 유효성 검사 X
A = ["(", "("] # 여는 괄호를 넣고, 재귀호출
```

n == 2 부터, 유효성 검사가 진행된다

```python
## Depth 3
A == ["(", "("] # 유효성 검사 결과, check == 2 로, check == 0에 의해 False가 반환됨

## Depth 2
A = ["("] # A.pop() 에 의해 마지막 요소가 지워짐
A = ["(", ")"] # 닫는괄호를 추가하고, 재귀호출

## Depth 3
A == ["(", ")"] # True
result = ["()"] # "".join(A)가 배열 A를 문자열로 만듦

## Depth 2
A == ["("] # A.pop()

## Depth 1
A = [] # A.pop()
A = [")"] # A.append(")")

## Depth 2
A = [")", "("]

## Depth 3
check < 0 # False, 닫는 괄호로 시작해 check가 음수가 됨

## Depth 2
A = [")"]
A = [")", ")"]

## Depth 3
# False

# Depth 2
A = [")"]

# Depth 1
A = []
```

n == 1 에서, 위와 같은 과정을 거쳐 `((`, `()`, `)(`, `))` 의 모든 경우를 검사하게 된다

### Summary

```python
[]
['('] # Depth 1
['(', '('] # Depth 2
['(', ')'] # Depth 2
# valid:  ['(', ')']
[')'] # Depth 1
[')', '('] # Depth 2
[')', ')'] # Depth 2
# result : ['()']
```
