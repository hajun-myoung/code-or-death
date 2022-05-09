# Leetcode

Leetcode 문제 풀이

## 2022.04 1주차

❗️ 720. Longest Word in Dictionary https://leetcode.com/problems/longest-word-in-dictionary/

9. Palindrome Number https://leetcode.com/problems/palindrome-number/

125. Valid Palindrome https://leetcode.com/problems/valid-palindrome/ 

455. Assign Cookies https://leetcode.com/problems/assign-cookies/ 

❗️ 11. Container With Most Water https://leetcode.com/problems/container-with-most-water/ 


### 9. Palindrome Number
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.

```python
class Solution(object):
    def isPalindrome(self, x):
        return str(x) == str(x)[::-1]
```

### 125. Valid Palindrome

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

```python
class Solution(object):
    def isPalindrome(self, s):
        s=s.lower().replace(" ", "") 
        for c in s:
            if not c.isalnum():
                s=s.replace(c, "")
        return s == s[::-1]
```