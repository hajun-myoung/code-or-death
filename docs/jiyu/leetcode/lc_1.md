---
sidebarDepth: 1
---

# 1. Two Sum

> 자료구조(배열, 해시테이블)

## 📋 문제

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.  
You may assume that each input would have exactly one solution, and you may not use the same element twice.  
You can return the answer in any order.

## 👉 입출력

**Example 1:**

```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

**Example 2:**

```
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

**Example 3:**

```
Input: nums = [3,3], target = 6
Output: [0,1]
```

## 📝 풀이

### ✔️ 첫 번째 풀이

```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i in range(len(nums)):
            for j in range(i+1, len(nums)):
                if nums[i] + nums[j] == target:
                    return [i, j]
```

브루트포스로 푼 풀이이다.

### ✔️ 두 번째 풀이

```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashmap = {}
        for i in range(len(nums)):
            temp = target - nums[i]
            if temp in hashmap:
                return [i, hashmap[temp]]
            else:
                hashmap[nums[i]] = i
```

해시맵을 쓴 예제이다.  
브루트포스로 풀면 O(n^2)인 반면 해시맵을 사용하면 O(n)으로 줄일 수 있다.

해시맵으로 쓸 빈 딕셔너리를 하나 선언하고 for문으로 nums의 요소들을 순회한다.  
temp에 target - nums[i], 그러니까 현재 살펴보고 있는 요소인 nums[i]와 더해서 target이 될 수 있는 요소가 hashmap에 있는지 살핀다.  
찾고자 하는 요소가 없다면 hashmap에 key는 요소의 값, value는 요소의 인덱스로 넣어준다.  
찾고자 하는 요소가 있다면 현재 인덱스인 i와 짝이 되는 요소의 인덱스를 hashmap에서 찾아 리턴한다.

브루트포스의 방법으로 풀면 런타임이 3857ms이고 해시맵으로 풀면 57ms이다.
