# sort

## 10814 [나이순 정렬]

> [<링크>](https://www.acmicpc.net/problem/10814)

```python
def mergeSort(data):
    if len(data)==1:
        return data
    mid=len(data)//2
    left=mergeSort(data[:mid])
    right=mergeSort(data[mid:])
    result=[]
    leftP=0
    rightP=0
    while leftP<len(left) or rightP<len(right):
        leftValue=left[leftP] if leftP<len(left) else ['100000','leftDummy']
        rightValue=right[rightP] if rightP<len(right) else ['100000','rightDummy']
        if int(leftValue[0])<=int(rightValue[0]):
            leftP+=1
            result.append(leftValue)
        else:
            rightP+=1
            result.append(rightValue)
    return result
def bj10814():
    n=int(input())
    data=[]
    for i in range(n):
        data.append(input().split())
    result=mergeSort(data)
    for i in result:
        print(i[0],i[1])
bj10814()
```

_<해설>_

_"현재 피보나치 수는 전 피보나치와 전전 피보나치의 수의 합니다"라는 로직을 그대로 f(n)=f(n-1)+f(-2)로 옮겨보면 return f(n-1)+f(n-2)가 된다._

_<예외케이스>0번쨰 수와 1번째 수는 이미 아는 상태에서 시작을 하는 것이기 때문에 미리 n==0,n==1이라는 조건을 주어야 한다._

---

## 10825 [국영수]

> [<링크>](https://www.acmicpc.net/problem/10825)

```python
import sys
def submergeSort(data):
    if len(data)==1:
        return data
    mid=len(data)//2
    left=submergeSort(data[:mid])
    right=submergeSort(data[mid:])
    result=[]
    leftP=0
    rightP=0
    while leftP<len(left) or rightP<len(right):
        leftValue=left[leftP] if leftP<len(left) else ['leftDummy','0','0','0']
        rightValue=right[rightP] if rightP<len(right) else ['rightDummy','0','0','0']
        if int(leftValue[1])>int(rightValue[1]):
            leftP+=1
            result.append(leftValue)
        elif int(leftValue[1])<int(rightValue[1]):
            rightP+=1
            result.append(rightValue)
        else:
            if int(leftValue[2])<int(rightValue[2]):
                leftP+=1
                result.append(leftValue)
            elif int(leftValue[2])>int(rightValue[2]):
                rightP+=1
                result.append(rightValue)
            else:
                if int(leftValue[3])>int(rightValue[3]):
                    leftP+=1
                    result.append(leftValue)
                elif int(leftValue[3])<int(rightValue[3]):
                    rightP+=1
                    result.append(rightValue)
                else:
                    if leftValue[0]<=rightValue[0]:
                        leftP+=1
                        result.append(leftValue)
                    else:
                        rightP+=1
                        result.append(rightValue)
    return result
def bj10825():
    n=int(input())
    data=[]
    for i in range(n):
        data.append(sys.stdin.readline().split())
    result=submergeSort(data)
    for i in result:
        print(i[0])
bj10825()
```

_<해설>_

_"현재 피보나치 수는 전 피보나치와 전전 피보나치의 수의 합니다"라는 로직을 그대로 f(n)=f(n-1)+f(-2)로 옮겨보면 return f(n-1)+f(n-2)가 된다._

_<예외케이스>0번쨰 수와 1번째 수는 이미 아는 상태에서 시작을 하는 것이기 때문에 미리 n==0,n==1이라는 조건을 주어야 한다._

---
