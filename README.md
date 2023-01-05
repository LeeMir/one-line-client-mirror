<div align="center">
    <img src="https://user-images.githubusercontent.com/42960217/210502277-769f8821-f853-4777-89a2-6243270b7739.png" width="100" alt="project-logo" />
    <h2> 오늘, 한 줄 </h2>
    <p>
        “지구 어딘가에서 누군가가 남긴 <b>한 줄</b>이 도착했습니다. <b>오늘,</b> 당신의 <b>한 줄</b>은 무엇이었나요?”
    </p>
    <br />
</div>

## 배포 주소 💻

https://today-one-line.vercel.app/

<br />

## 소개 :pencil2:

자고로 **명언**이라 함은, **사리에 맞는 훌륭한 말**이라는 정의를 갖고 있으나 현재에는 유명인이 말한 누구에게나 공감되는 짧은 글이라는 의미에 좀 더 가깝게 쓰이는 것 같다. 다시 말하면 **누구나 공감할 수 있는 짧은 글**이라는 의미는 변하지 않았으나, **유명인**이 말해야한다는 조건이 붙어 접근하기 어려워졌다.

한 때 SNS에서, ‘초등학생이 쓴 시’라는 컨텐츠가 한동안 유행했었다. 이게 유행한 이유는 초등학생의 유쾌하고 순수한 시선이 느껴지면서도 어쩌면 많은 사람들에게 **공감**이 되는 내용이었기 때문이다.

하물며 초등학생이 쓴 글도 저렇게 퍼져나가는데, 우리가 쓴 글도 충분히 누군가에게 **공감**이 되는 이야기가 될 수 있다는 생각이 들었고, 가볍게 **오늘 한 줄**씩만 남겨보는 게 어떨까라는 생각에 프로젝트를 기획하게 되었다.

<br />

## 기술 스택 👨‍💻

<img width="600" alt="image" src="https://user-images.githubusercontent.com/42960217/210500321-665b8e0e-88c6-4929-8851-e5e08df5d579.png">

<br />

## 페이지 구조 🎨

<img width="600" alt="image" src="https://user-images.githubusercontent.com/42960217/210497122-520b234e-fecd-4732-8df7-0dbeaabab0a2.png">

- 1 개의 페이지 안에서 스크롤로 공간(Section) 구분
- 페이지 최상단과 최하단에 Ref를 두어 스크롤 타겟으로 삼음
- 사이에 빈 공간(Empty Section)은 극적인 스크롤 효과를 위함

<br />

## Development

### .env

```bash
VITE_BASE_URL = [Server URL]
```
