# [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)

파이썬에는 다음과 같은 함수들이 존재한다. <br/>
`isalpha()` : 문자열이 영어/한글로만 되어있으면 True, 아니면 False <br/>
`isdigit()` : 문자열이 숫자로만 되어있으면 True, 아니면 False <br/>
`isalnum()` : 문자열이 영어/한글/숫자로만 구성되어있으면 True, 아니면 False <br/>

<br/>
아니면 정규식을 이용해 문자열을 필터링할 수 도 있다.

```python
s = re.sub('[^a-z0-9]', '', s)
```

```python
class Solution(object):
    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """

        strs = []
        # 문자열 전처리 (알파벳, 숫자 아닌 것 제거 및 소문자화)
        for c in s:
            if c.isalnum():
                strs.append(c.lower())

        # 펠린드롬 여부 확인
        return strs == strs[::-1]
```
