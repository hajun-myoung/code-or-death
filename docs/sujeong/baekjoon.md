# Baekjoon

Baekjoon 문제 풀이

## 2022.04 1주차

[2 + 1 세일](https://www.acmicpc.net/problem/11508 )

폴리오미노 https://www.acmicpc.net/problem/1343

나이순 정렬 https://www.acmicpc.net/problem/10814 

국영수 https://www.acmicpc.net/problem/10825 

❗️ 상어 초등학교 https://www.acmicpc.net/problem/21608 

❗️ 달력 https://www.acmicpc.net/problem/20207 

❗️ 블로그2 https://www.acmicpc.net/problem/20365 


### 2+1 세일(11508)
KSG 편의점에서는 과일우유, 드링킹요구르트 등의 유제품을 '2+1 세일'하는 행사를 하고 있습니다. KSG 편의점에서 유제품 3개를 한 번에 산다면 그중에서 가장 싼 것은 무료로 지불하고 나머지 두 개의 제품 가격만 지불하면 됩니다. 한 번에 3개의 유제품을 사지 않는다면 할인 없이 정가를 지불해야 합니다.

예를 들어, 7개의 유제품이 있어서 각 제품의 가격이 10, 9, 4, 2, 6, 4, 3이고 재현이가 (10, 3, 2), (4, 6, 4), (9)로 총 3번에 걸쳐서 물건을 산다면 첫 번째 꾸러미에서는 13원을, 두 번째 꾸러미에서는 10원을, 세 번째 꾸러미에서는 9원을 지불해야 합니다.

재현이는 KSG 편의점에서 친구들과 같이 먹을 총 N팩의 유제품을 구입하려고 합니다. 재현이를 도와 최소비용으로 유제품을 구입할 수 있도록 도와주세요!

```python
import sys
input = sys.stdin.readline

n=int(input())

arr = []
for x in range(n):
    arr.append(int(input()))
arr.sort(reverse=True)

temp=[]
price=0
for a in arr:
    temp.append(a)
    if len(temp) % 3 != 0:
        price+=a
print(price)
```

### 블로그

```pyton
import sys
input = sys.stdin.readline

n, x = map(int, input().split(' '))
visitors=list(map(int, input().split(' ')))

if max(visitors) == 0:
    print("SAD")
else:
    max_visitor=sum(visitors[:x])
    count_visitor=1
    sum_visitor=max_visitor
    for i in range(n-x):
            sum_visitor+=visitors[x+i]
            sum_visitor-=visitors[i]
            if sum_visitor > max_visitor:
                max_visitor=sum_visitor
                count_visitor=1
            elif sum_visitor == max_visitor:
                max_visitor=sum_visitor
                count_visitor+=1
    print(max_visitor)
    print(count_visitor)
```

### 두 용액

```pyton
import sys
input = sys.stdin.readline

n = int(input())
solutions=sorted(list(map(int, input().split(' '))))
forward = 0
back = n-1
temp = abs(solutions[forward] + solutions[back])
acid = solutions[forward]
alkalinity = solutions[back]
while forward < back:
    result = solutions[forward] + solutions[back]
    abs_result = abs(result)
    if temp > abs_result:
        temp = abs_result
        acid = solutions[forward]
        alkalinity = solutions[back]
    if result > 0:
        back -= 1
    else:
        forward += 1
print(acid, alkalinity)
```
