# config.ts 파일의 사용 방법

우리 블로그는 VuePress가 제공하는 방법들 중, typescript를 적용해놓은 상태에요  
따라서, 블로그의 설정을 편집하고 싶다면 `/docs/.vuepress/config.ts`를 수정하셔야 합니다

## config 파일의 구조

> 사전 예약된 변수 이름 <변수 자료형>

```txt:no-line-numbers
UserConfig
├── lang<string>, title<string>, description<string>, base<string> 등의 기본 site config
├── theme<string> : 블로그 전체에 적용할 theme을 설정할 수 있음
├── themeConfig<Object>
│   ├── logo<string> : 로고 이미지 경로
│   ├── notFound<string Array> : 404 메시지
│   ├── navbar<Object Array> : 네비게이션 바
│   ├── sidebar<Object> : 사이드 바
│   └── 등 '사이트의 테마'를 변경할 때에는 대부분 이 Object에서 처리됨
└── plugins : 블로그를 빌드할 때 사용할 plugin을 명세해줘야 함
    ├── `yarn add -D <플러그인이름>`으로 원하는 플러그인을 설치
    ├── plugins array에 해당 플러그인에 대한 정보, 옵션을 명세
    └── plugin usage에 맞게 사용
```

## 네비게이션 바 수정하기

### Type 1 : 네비게이션 텍스트가 링크

```ts
navbar: [
  {
    text: "제목",
    link: "/경로/",
  },
]
```

<img src="/navExample-01.png" style="width: 300px;">

### Type 2 : 네비게이션 바(큰제목) 아래 링크

```ts
navbar:[
  {
    text: "큰제목",
    children: [
      {
        text: "소제목1",
        link: "/경로1/",
      },
      {
        text: "소제목2",
        link: "/경로2/",
      }
    ]
  }
]
```

<img src="/navExample-02.png" style="width: 400px;">

### Type 3 : 큰제목 - 중간제목 - 링크

```ts
navbar: [
  {
    text: "큰제목",
    children: [
      {
        text: "중간제목1",
        children: [
          {
            text: "소제목1",
            link: "/경로1/",
          },
          {
            text: "소제목2",
            link: "/경로2/",
          },
        ],
      },
      {
        text: "중간제목2",
        children: [
          {
            text: "소제목1",
            link: "/경로1/",
          },
          {
            text: "소제목2",
            link: "/경로2/",
          },
        ],
      },
    ],
  },
]
```

<img src="/navExample-03.png" style="width: 400px;">

각각의 타입에 따라, 네비게이션 바의 깊이가 달라진다

## 사이드바 수정하기

`config.ts` 파일에서 각 문서 경로에 대해 어떤 사이드바를 보여줄 것인지 직접 지정한다

- 파일 이름을 지정하면 해당 파일을 사이드바에 노출시켜 이동 가능하도록 도와주며,
사이드바의 제목은 지정된 `.md` 파일의 수준1 헤더 내용(# 헤더)으로 결정된다

  - code

    ```ts
    sidebar: {
      "/guide/contribute/": [
        "README.md", // 기여하는 법
        "configGuide.md" // config.ts 파일의 사용 방법
      ],
    }
    ```

  - build

    <img src="/sidebarExample-01.png" style="width: 300px;">

- 지정하지 않는다면 자동으로 해당 문서가 속한 폴더의 `README.md` 파일을 사이드바에 노출시켜준다

  - no sidebar code

  - build : "config.ts 파일의 사용 방법"이 없음

    <img src="/sidebarExample-02.png" style="width: 300px;">
