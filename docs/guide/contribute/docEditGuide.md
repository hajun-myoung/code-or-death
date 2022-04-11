# 문서작성 가이드

## 스타일 규칙

markdownlint가 적용되어 있음

### 예외처리된 규칙

- MD033 : md파일 내에 html태그의 사용을 지양하는 규칙

  - VuePress는 마크다운의 이미지 resize 문법을 지원하지 않음

  - [관련 이슈](https://github.com/vuejs/vuepress/issues/578)에서 이미지 resize를 원할 경우 html 태그 사용을 권장함

  - 따라서 이 린트를 비활성화

### 주로 경고를 뿜는 규칙

- 리스트는 위 아래로 한 줄씩의 빈 줄을 둬야 한다
- 코드블럭은 위 아래로 한 줄씩의 빈 줄을 둬야 한다
- 헤더는 특수문자로 끝나면 안 된다
- bold 처리만으로 이루어진 줄은 권장하지 않는다(차라리 헤더를 써라)
- 한 줄에 80자 이상이 오면 안 된다
- 모든 문서는 비어있는 하나의 줄로 끝나야 한다

## 마크다운 문법 in VuePress

### 줄바꾸기

각 줄의 내용이 '공백 두 글자'로 끝나야 줄이 바뀌어짐

```markdown
<!-- 레포지토리 또는 편집기에서 코드를 확인하기 -->
그냥 끝난줄은
줄이 바뀌지 않는다

두 번의 공백으로 끝내면  
줄이 바뀐다
```

그냥 끝난줄은
줄이 바뀌지 않는다

두 번의 공백으로 끝내면  
줄이 바뀐다

> 두 번의 줄바꿈은 문단을 나눠버림에 주의

### 헤더

> Markdown 문법과 같음

- `# 헤더내용`으로 헤더를 설정

- #의 개수가 많을수록 작은 헤더(h 태그와 완전히 같은 작동)

- 수준2 짜리 헤더에는 구분선이 들어감

- example

  ```markdown
  # 헤더1
  ## 헤더2
  ### 헤더3
  #### 헤더4
  ##### 헤더5
  ###### 헤더6
  ####### 헤더7은 존재하지 않음
  ```

- result

  ![header example](/header-exam.png)

### 각종 리스트

```markdown
- unordered list
- unordered list
  - unordered list

1. ordered list
1. ordered list
    1. ordered list

- unordered list
  1. child ordered list
  1. child ordered list

1. ordered list
  - child unordered list
  - child unordered list

<!-- 주의 -->

1. ordered list
1. ordered list
  1. ordered list가 ordered list의 child일 경우, 4칸 들여쓰기가 필요함

- unordered list
- unordered list
    - unordered list가 unordered list의 child일 경우, 2칸 들여쓰기가 린트에서 권장됨
```

- unordered list
- unordered list
  - unordered list

1. ordered list
1. ordered list
    1. ordered list

- unordered list
  1. child ordered list
  1. child ordered list

1. ordered list
    - child unordered list
    - child unordered list

<!-- 주의 -->

> 이 밑의 리스트들은 의도대로 동작되지 않는 코드임  
> 편집기에서 린트 규칙 위반 경고가 뜨지만, 무시할 것

1. ordered list
1. ordered list
  1. ordered list의 child일 경우, 4칸 들여쓰기가 필요함

- unordered list
- unordered list
    - unordered list가 unordered list의 child일 경우, 2칸 들여쓰기가 린트에서 권장됨

### 이미지 삽입하기

```markdown
![대체 텍스트](경로) <!-- 기본적으로는 이 방법을 권장, 쌍따옴표로 감싸지 않는게 맞음 -->
<img src="경로" style="css inline style"> <!-- resize 등이 필요하면 이걸 사용 -->

<!-- docs/public/ 폴더 아래에 참조하고픈 파일이 있다면 -->
![대체 텍스트](/파일이름) <!-- 퍼블릭 폴더 기준 상대주소 -->
<img src="/파일이름" style="~~~"> <!-- 동일 -->
```

### 표

```markdown
|this|is|header|line|
|:---|:---:|---:|---| <!-- text-align 설정 : 꼭 해야함 -->
|left align|center align|right align|default align|
|this|is|content|row|
```

|this|is|header|line|
|:---|:---:|---:|---|
|left align|center align|right align|default align|
|this|is|content|row|

### 문자 강조

```markdown
*이탤릭*  
**볼드**  
***이탤릭 볼드***  
~~취소선~~
```

*이탤릭*  
**볼드**  
***이탤릭 볼드***  
~~취소선~~

### 링크

```markdown
[텍스트](링크)
```

### 이모티콘

디스코드에서처럼 사용 가능

```markdown
hi :hand: this is DENVER :rofl: ! I'm hungry :sob:
```

hi :hand: this is DENVER :rofl: ! I'm hungry :sob:

> [마크다운 이모지 단축어들](https://gist.github.com/rxaviers/7360908)

### toc, table of contents

```markdown
[[toc]]
```

[[toc]]

### 코드블럭

- code

    ````markdown
    `inline codeblock`

    ```language
    code
    ```

    <!-- example -->
    `cd elice`

    ```python
    if not code :
        kill(self)
    ```

    <!-- 라인 하이라이팅, 공백 있으면 안됨 -->
    ```python{1,4-5}
    if not code :
        eat(pizza)
        sleep('8h')
        kill(self)
        revive(self)
    ```

    <!-- 라인넘버 -->
    ```python:no-line-numbers
    if not code :
        eat(pizza)
        sleep('8h')
        kill(self)
        revive(self)
    ```

    ````

- result

  - inline

    `cd elice`

  - code block

    ```python
    # default code block
    if not code :
        kill(self)
    ```

    ```python{1,4-5}
    # line highlighting
    if not code :
        eat(pizza)
        sleep('8h')
        kill(self)
        revive(self)
    ```

    ```python:no-line-numbers
    # line numbers
    if not code :
        eat(pizza)
        sleep('8h')
        kill(self)
        revive(self)
    ```
