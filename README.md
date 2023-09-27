# 쓰랭
## 웹 서비스 주제
COVID-19 이후 쓰레기 배출로 인한 환경 문제는 얼마나 심각할까?
데이터 분석을 통해 포스트 코로나 시대의 급증한 쓰레기양과 배달 음식간의 상관관계 그래프를 제시하여 환경 문제를 제기한다. 쓰레기  문제를 유저들로부터 일깨우며, 분리 배출 방법을 제시해 환경보호를 위한 서비스를 제공한다.
## 웹 서비스 내용
1. 데이터 분석을 통한 쓰레기 문제 제기
2. 문제 해소를 위한 분리 배출 방법 퀴즈 컨텐츠
3. 퀴즈 결과에 따른 등급과 순위표
4. 쓰레기 환경 문제에 대한 사용자 경각심 유도 컨텐츠

## 기술스택

<!-- ### 프론트엔드 기술스택

<img src="https://img.shields.io/badge/-redux--toolkit-%23764ABC?style=for-the-badge&logo=redux&logoColor=black"/> <img src="https://img.shields.io/badge/-react%20-%2361DAFB?style=for-the-badge&logo=react&logoColor=black"/> <img src="https://img.shields.io/badge/-react--router-%23CA4245?style=for-the-badge&logo=react-router&logoColor=black"/>
<img src="https://img.shields.io/badge/-redux--persist-white?style=for-the-badge&logo=redux&logoColor=%23764ABC"/> <img src="https://img.shields.io/badge/-axios-%23764ABC?style=for-the-badge&logo=axios&logoColor=%23764ABC"/> <img src="https://img.shields.io/badge/-styled--components-%23DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/> -->


### 백엔드 기술스택

<img src="https://img.shields.io/badge/-Flask-black?style=for-the-badge&logo=flask&logoColor=white"/> <img src="https://img.shields.io/badge/-Azure-%230078D4?style=for-the-badge&logo=microsoft-azure&logoColor=white"/> <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"> <img src="https://img.shields.io/badge/-Nginx-%23009639?style=for-the-badge&logo=NGINX&logoColor=white"/> <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white">

### 클라우드 기술스택
<img src="https://img.shields.io/badge/kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white">  <img src="https://img.shields.io/badge/amazonaws-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white"> <img src="https://img.shields.io/badge/amazons3-569A31?style=for-the-badge&logo=amazons3&logoColor=white"> <img src="https://img.shields.io/badge/amazonrds-326CE5?style=for-the-badge&logo=amazonrds&logoColor=white"> <img src="https://img.shields.io/badge/amazonroute53-8C4FFF?style=for-the-badge&logo=amazonroute53&logoColor=white"> <img src="https://img.shields.io/badge/amazoneks-FF9900?style=for-the-badge&logo=amazoneks&logoColor=white">



## Getting Started

### 웹애플리케이션

```
cd /frontend && npm start
cd /backend/server && python app.py
```

## 디렉토리 구조
```
🔥 server 🔥
├──apis
│ └─Controller (컨트롤러)
│ │ ├─analysisController.py (분석 컨트롤러)
│ │ └─dataAccessController.py (데이터접근 컨트롤러)
│ └─dto (data transfer object / 데이터 교환)
│   ├─requestDto.py (요청 전달)
│   └─responseDto.py (응답 전달)
├──domain (db / 모델)
│ ├─dao (data access object / 데이터 접근)
│ │ ├─articleDao.py (기사 접근)
│ │ ├─exampleDao.py (문제 접근)
│ │ ├─quizDao.py (퀴즈 접근)
│ │ ├─recyclingDao.py (재활용 접근)
│ │ ├─resultDao.py (결과 접근)
│ │ └─userDao.py (유저 접근)
│ └─models (모델생성)
│   ├─article.py (기사 모델)
│   ├─example.py (문제 모델)
│   ├─quiz.py (퀴즈 모델)
│   ├─recycling.py (재활용 모델)
│   ├─result.py (결과 모델)
│   └─user.py (유저 모델)
├──service (view / 뷰)
│ ├─analysisService.py (분석 로직)
│ ├─mainService.py (메인 로직)
│ ├─quizService.py (퀴즈 로직)
│ ├─rankService.py (점수랭크 로직)
│ ├─resultService.py (결과 로직)
│ ├─userRankService.py (유저랭크 로직)
│ └─userService.py (유저 로직)
├──templates (템플릿)
│ └─index.html (health check)
├──app.py (실행)
├──config.py (비밀키)
├──db_connect.py (데이터베이스)
├──Kinesis.log (로그파일)
└──log.py (logging 구현)
```
──dockerfile (도커 image)
──requirements (라이브러리 ver)

```
♻️ frontend
├─public
│ ├─images(이미지) 
│ ├─favicon.ico (파비콘)
│ └─index.html (기본 HTML)
├─src
│ ├─components(컴포넌트)
│ ├─etc(색상, 멤버리스트, 문제, 문제 설명 등)
│ ├─fonts (폰트)
│ ├─pages(페이지)
│ ├─redux_store(redux 모듈)
│ ├─resultpage-components(결과페이지 컴포넌트)
│ ├─styled_components(스타일)
│ ├─tests(등급 사진, 문제)
│ ├─App.css
│ ├─App.js
│ ├─index.css
│ ├─index.js
│ └─reportWebVitals.js
├─.gitignore
├──README.md
├──package-lock.json
└──package.json
```

## 둘러보기

<details>
<summary>메인 페이지  </summary>

![메인페이지풀샷](https://user-images.githubusercontent.com/75749574/138463425-38cca085-c090-485f-8507-54086a4f4a27.png)


</details>

<details>
<summary>유저 인포 페이지  </summary>

![유저인포페이지](https://user-images.githubusercontent.com/75749574/138461600-9a238e00-e20c-4f9f-bdb4-31389ad14e0d.png)

</details>

<details>
<summary>테스트 페이지  </summary>

![테스트페이지](https://user-images.githubusercontent.com/75749574/138461829-09c52a96-0a1f-45fb-9929-b29cd9593318.png)

</details>

<details>
<summary>로딩 페이지  </summary>

![로딩페이지GIF](https://user-images.githubusercontent.com/75749574/138461823-7cc39c0a-269a-48a0-bdce-8690cac11c9d.gif)

</details>

<details>
<summary>등급 페이지  </summary>

![등급GIF](https://user-images.githubusercontent.com/75749574/138461834-272b4ef1-557c-4a56-a55e-61376a6eb468.gif)

</details>

<details>
<summary>랭킹 페이지  </summary>

![랭킹페이지](https://user-images.githubusercontent.com/75749574/138461837-abf77f77-f4ea-44f0-8aeb-6a0b208a78db.png)

</details>

## Team

### Development

<table>
    <tr align="center">
        <td style="min-width: 175px;">
            <a href="https://github.com/tbvjqkdlcm1">
              <img src="https://github.com/tbvjqkdlcm1.png" width="100">
              <br />
              <b>백승욱</b>
            </a> 
        </td>
    </tr>
    <tr align="center" style="background-color:rgb(245, 245, 245)">
        <td>
            Web BE & Data Analysis
        </td>
    </tr>
</table>

### Cloud

<table>
    <tr align="center">
        <td style="min-width: 175px;">
            <a href="https://github.com/JWhy121">
              <img src="https://avatars.githubusercontent.com/u/87068389?v=4" width="100">
              <br />
              <b>김연지</b>
            </a> 
        </td>
        <td style="min-width: 175px;">
            <a href="https://github.com/tbvjqkdlcm1">
              <img src="https://avatars.githubusercontent.com/u/87068389?v=4" width="100">
              <br />
              <b>유재오</b>
            </a> 
        </td>
        <td style="min-width: 175px;">
            <a href="https://github.com/tbvjqkdlcm1">
              <img src="https://avatars.githubusercontent.com/u/87068389?v=4" width="100">
              <br />
              <b>허수진</b>
            </a> 
        </td> 
    </tr>
    <tr align="center" style="background-color:rgb(245, 245, 245)">
        <td>
            Kubernetes
        </td>
        <td>
            cloud
        </td>
        <td>
            cloud
        </td>
    </tr>
</table>
