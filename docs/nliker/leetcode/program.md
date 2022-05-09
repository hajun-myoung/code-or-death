# 구현

## 720 [Longest Word in Dictionary]

> [<링크>](https://leetcode.com/problems/longest-word-in-dictionary)

```python
def leet720(words):
    dic={}
    result=[]
    for word in words:
        dic[word]=1
    for word in words:
        if(len==1):
            result.append(word)
        else:
            status=True
            for i in range(len(word)-1):
                if dic.get(word[:i+1],0)==0:
                    status=False
                    break
            if status==False:
                continue
            else:
                result.append(word)
    if len(result)==0:
        return ""
    realResult=''
    for i in result:
        if len(realResult)<len(i):
            realResult=i
        elif len(realResult)==len(i):
            realResult=min(realResult,i)
    print(realResult)
    return realResult
```

_<해설>_

_"현재 피보나치 수는 전 피보나치와 전전 피보나치의 수의 합니다"라는 로직을 그대로 f(n)=f(n-1)+f(-2)로 옮겨보면 return f(n-1)+f(n-2)가 된다._

_<예외케이스>0번쨰 수와 1번째 수는 이미 아는 상태에서 시작을 하는 것이기 때문에 미리 n==0,n==1이라는 조건을 주어야 한다._

---

## 9 [Palindrome Number]

> [<링크>](https://leetcode.com/problems/palindrome-number)

```python
def leet9(x):
    if x<0:
        return False
    sub=x[::-1]
    if x==sub:
        return True
    return False
```

_<해설>_

_"현재 피보나치 수는 전 피보나치와 전전 피보나치의 수의 합니다"라는 로직을 그대로 f(n)=f(n-1)+f(-2)로 옮겨보면 return f(n-1)+f(n-2)가 된다._

_<예외케이스>0번쨰 수와 1번째 수는 이미 아는 상태에서 시작을 하는 것이기 때문에 미리 n==0,n==1이라는 조건을 주어야 한다._

---

## 455 [Assign Cookies]

> [<링크>](https://leetcode.com/problems/assign-cookies)

```python
def leet455(g,s):
    g=sorted(g)
    s=sorted(s)
    idx=0
    for cookie in s:
        if g[idx]>cookie:
            continue
        else:
            idx+=1
            if idx>=len(g):
                break
    return idx
```

_<해설>_

_"현재 피보나치 수는 전 피보나치와 전전 피보나치의 수의 합니다"라는 로직을 그대로 f(n)=f(n-1)+f(-2)로 옮겨보면 return f(n-1)+f(n-2)가 된다._

_<예외케이스>0번쨰 수와 1번째 수는 이미 아는 상태에서 시작을 하는 것이기 때문에 미리 n==0,n==1이라는 조건을 주어야 한다._

---

## 11 [Container With Most Water]

> [<링크>](https://leetcode.com/problems/container-with-most-water/)

```python
def leet12(height):
    leftX=0
    rightX=len(height)-1
    leftMax=height[leftX]
    rightMax=height[rightX]
    maxWater=0
    for i in range(len(height)):
        if leftMax<=height[i] and height[leftX]<=rightMax:
            nowMaxWater=min(height[i],rightMax)*(rightX-i)
            if maxWater<=nowMaxWater:
                leftX=i
                leftMax=height[leftX]
                maxWater=nowMaxWater
        if rightMax<=height[len(height)-i-1] and height[rightX]<=leftMax:
            nowMaxWater=min(leftMax,height[len(height)-i-1])*(len(height)-i-1-leftX)
            if maxWater<=nowMaxWater:
                rightX=len(height)-i-1
                rightMax=height[rightX]
                maxWater=nowMaxWater
        if leftX>=rightX:
            break
    return maxWater
```

_<해설>_

_"현재 피보나치 수는 전 피보나치와 전전 피보나치의 수의 합니다"라는 로직을 그대로 f(n)=f(n-1)+f(-2)로 옮겨보면 return f(n-1)+f(n-2)가 된다._

_<예외케이스>0번쨰 수와 1번째 수는 이미 아는 상태에서 시작을 하는 것이기 때문에 미리 n==0,n==1이라는 조건을 주어야 한다._

---
