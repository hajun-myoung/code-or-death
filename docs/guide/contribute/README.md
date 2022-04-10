# 기여하는 법

## 처음 셋팅하기

1. 블로그 레포지토리를 git clone

    ```sh
    https://github.com/hajun-myoung/code-or-death.git # (https)
    git@github.com:hajun-myoung/code-or-death.git # SSH
    ```

1. 레포지토리 루트에서 devDependencies 설치

    ```sh
    yarn install # recommended yarn
    npm install # also can use npm
    ```

## 기여하기

아래 방법들 중, 입맛에 맞는 걸 골라 사용하세요!

- 레포지토리를 fork 해서 작업 `외부인` `Contributor`

- 새로운 branch를 만들어서 작업 `Contributor`

## 문서 수정하고 테스트하기

### Contributor에게 할당된 폴더

각 Contributor는 `/docs/<이름>/`의 폴더를 자유롭게 편집하실 수 있어요  
폴더명 수정 등 `config.ts`의 수정이 같이 필요 할 때에는, 팀원들에게 리마인드 하시거나 메인테이너를 불러주세요!

### dev모드로 테스트하기

아래 명령어롤 틍해 내 변경사항이 잘 반영되는지, 오류는 없는지 테스트할 수 있어요

```sh:no-line-numbers
yarn dev # recommended yarn, but still can use npm
```

### 반영 요청하기

- fork 해서 작업하셨다면 pull request를

- 새로운 branch에서 작업하셨다면 merge request를

보내주세요
