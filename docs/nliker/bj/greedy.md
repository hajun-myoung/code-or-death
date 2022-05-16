# greedy

## 11508 [2+1세일]

> [<링크>](https://www.acmicpc.net/problem/11508)

```python
def bj11508():
    n=int(input())
    data=[]
    for i in range(n):
        data.append(int(input()))

    data=sorted(data,reverse=True)
    result=0
    for i in range(n):
        if (i+1)%3==0:
            continue
        result+=data[i]
bj11508()
```

_<해설>_

_"현재 피보나치 수는 전 피보나치와 전전 피보나치의 수의 합니다"라는 로직을 그대로 f(n)=f(n-1)+f(-2)로 옮겨보면 return f(n-1)+f(n-2)가 된다._

_<예외케이스>0번쨰 수와 1번째 수는 이미 아는 상태에서 시작을 하는 것이기 때문에 미리 n==0,n==1이라는 조건을 주어야 한다._

---

## 1343 [폴리오미노]

> [<링크>](https://www.acmicpc.net/problem/1343)

```python
def bj1343():
    data=input()
    dotData=list(filter(lambda x:x!='',data.split('X')))+['']
    xData=list(filter(lambda x:x!='',data.split('.')))
    result=''
    for i in range(len(xData)):
        xlen=len(xData[i])
        if xlen%2!=0:
            print(-1)
            return
        c,d=divmod(xlen,4)
        e,f=divmod(d,2)
        string='AAAA'*c+'BB'*e
        if data.startswith('.'):
            result+=dotData[i]+string
        else:
            result+=string+dotData[i]
    if len(dotData)-2==len(xData):
        result=result+dotData[-2]
    print(result)
bj1343()
```

_<해설>_

_"현재 피보나치 수는 전 피보나치와 전전 피보나치의 수의 합니다"라는 로직을 그대로 f(n)=f(n-1)+f(-2)로 옮겨보면 return f(n-1)+f(n-2)가 된다._

_<예외케이스>0번쨰 수와 1번째 수는 이미 아는 상태에서 시작을 하는 것이기 때문에 미리 n==0,n==1이라는 조건을 주어야 한다._

---
