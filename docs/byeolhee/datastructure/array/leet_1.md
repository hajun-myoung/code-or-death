# [Two Sum](https://leetcode.com/problems/two-sum/)

## 브루트 포스 풀이

```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i in range(len(nums)):
            for j in range(i+1, len(nums)):
                if nums[i] + nums[j] == target:
                    return [i,j]
```

<br/>

## 한번에 정답 찾기

`A + B = target`값이 되는 A, B를 찾아야 한다.<br/>
그렇다면 target은 주어진 값이니까 `target - A = B` 로 바로 찾을 수 있을 것이다. <b/>
B 값으로 바로 idx를 찾아내려면 딕셔너리에 {key:값 value:인덱스} 형태로 저장하면 된다.

```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        dict = {}
        # Key: nums element, Value: nums index
        for i, num in enumerate(nums):
            dict[num] = i

        for i, num in enumerate(nums):
            # 같은 원소는 안되므로 and로 조건 추가
            if target - num in dict and i != dict[target - num]:
                return [i, dict[target-num]]
```
