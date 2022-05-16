# search

## 22862 [가장 긴 짝수 연속한 부분 수열]

> [<링크>](https://www.acmicpc.net/problem/22862)

```python
def bj22862():
    n,k = map(int, input().split())
    list1=list(map(int,input().split()))
    p2=0
    oddNum=0
    evenNum=0
    for p1 in range(n):
        # print("P1: ",p1)
        while p2 <n:
            # print("P2: ",p2)
            if list1[p2]%2!=0:
                oddNum+=1
            if oddNum>k:
                break;
            p2+=1
        if p2==n:
            evenNum=max(evenNum,p2-p1-oddNum)
            break;
        evenNum=max(evenNum,p2-p1-(oddNum-1))
        if list1[p1]%2!=0:
            oddNum-=1
        p2+=1
    return evenNum
print(bj22862())
```

---

## 2470 [두 용액]

> [<링크>](https://www.acmicpc.net/problem/2470)

```python
def bj2470():
    n=int(input())
    liquids=list(map(int,input().split()))
    liquids=sorted(liquids,key=lambda x:abs(x))
    o_distance=999999999999999
    answer=0
    for i in range(len(liquids)-1):
        current_distance=abs(liquids[i]+liquids[i+1])
        if (current_distance<o_distance):
            answer=[liquids[i],liquids[i+1]]
            o_distance=current_distance
    answer=sorted(answer)
    print(answer[0],answer[1])
bj2470()
```

---
