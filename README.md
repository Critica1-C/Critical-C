# 쓰랭 (가칭)
- COVID-19 이후 쓰레기 증가에 대한 유저의 책임감 향상, 환경보호 캠페인 확산 유도  

## 프로젝트 구성 안내
* 주요 기능
  - 데이터 분석 파트 : COVID-19 전후 배달 음식과 관련된       데이터들을 비교 분석하여 환경 문제를 제기한다. (상세 데이터 셋은 추후 갱신 예정)

  - 유저 상호 작용 파트 :
    - 유저로부터 설문 형식의 데이터를 받아 점수로 계산하고, '당신의 쓰레기 등급은?' 이라는 절대평가 방식의 등급을 부여한다.
      - 점수 산정 방식 : (설문 조사 항목 작성 후 갱신 예정) 
      - 등급 표 : 등급이 높을수록 부정적인 이미지로 보여야 함.
        - 수능 등급 형식(1안) 
          | 등급 | 점수 |
          | ------ | ------ |
          | 1 |  |
          | 2 |  |
          | 3 |  |
          | 4 |  |
          | 5 |  |
          | 6 |  |
          | 7 |  |
          | 8 |  |
          | 9 |  |
        - 게임 등급 형식(2안)
          | 티어 | 점수 |
          | ------ | ------ |
          | Grandmaster |  |
          | Diamond |  |
          | Platinum |  |
          | Gold |  |
          | Silver |  |
          | Bronze |  |

    - 점수를 기준으로 백분율을 나타낸다.
      - 당신은 상위 4% 쓰레기 입니다.(1안 예시)
      - (2안 추가 예정)
    - 점수를 기반으로 유저의 쓰레기 배출 습관이 지속될 경우 현실적인 데이터를 제시하여 경각심을 유도하는 메시지를 노출.
      - 당신은 10년동안 800kg 쓰레기를 배출하고 있습니다. (1안 예시)
      - 당신은 10년동안 북극곰 10마리를 죽였습니다. (2안 예시) 
    - 점수에 따라 올바른 쓰레기 분리 배출 방법을 제시한다.
      - 점수별 제시 내용 (추가 예정)


* 서브 기능
  - (추가 예정)

## 1. 프로젝트 소개

**엔드유저에게 보이는 웹서비스에 대한 소개 추가 필요**

** 팀원분들은 본인이 사용한 기술 스택과 라이브러리를 추가해주세요.**

  - 사용하려는 데이터(제안된 데이터 중 하나 또는 선택한 다른 데이터 세트)를 명시, 이에 대한 설명
  - 기술 스택 (python, d3, pandas, jupyter, javascript, MySQL 등)
  - 사용된 라이브러리 (numpy, matplotlib, wordcloud 등)
  - 웹서비스에 대한 자세한 개요

## 2. 프로젝트 목표
  COVID-19 이후 쓰레기 배출로 인한 환경 문제는 얼마나 심각할까? 그리고 어떻게 해결할 수 있을까?
  포스트 코로나 시대의 급증한 쓰레기양과 배달 음식의 상관관계를 분석하고 쓰레기 배출 문제를 유저들로부터 일깨운다. 개개인의 노력을 통해 해당 문제를 얼마나 개선시킬 수 있는지 보여주어 환경보호 캠페인 확산을 유도한다.

## 3. 프로젝트 설명

**웹서비스의 유용성, 편의성 및 시각화의 실용성에 대한 설명**
  - 프로젝트만의 차별점, 기대 효과

## 4. 프로젝트 구성도
  - [와이어프레임](https://whimsical.com/elice-Ba4scYLvFB3ySKtkpj3Abd)

## 5. 프로젝트 팀원 역할 분담
| 이름 | 담당 업무 |
| ------ | ------ |
| 김태호 | 프론트엔드 개발/데이터 분석 |
| 남궁은선 | 프론트엔드 개발/데이터 분석 |
| 문지윤 | 백엔드 개발/데이터 분석 |
| 서명현 | 팀장/데이터 분석 |
| 백승욱 | 백엔드 개발/데이터 분석 |
| 정희재 | 백엔드 개발/데이터 분석 |


**멤버별 responsibility**

1. 팀장 

- 기획 단계: 구체적인 설계와 지표에 따른 프로젝트 제안서 작성, 데이터 수집, 와이어프레임 작성
- 개발 단계: 팀원간의 일정 등 조율 + 데이터 분석
- 수정 단계: 기획, 스크럼 진행, 코치님 피드백 반영해서 수정, 발표 준비

2. 프론트엔드 

- 기획 단계: 큰 주제에서 문제 해결 아이디어 도출, 데이터 수집
- 개발 단계: 와이어프레임을 기반으로 구현, 데이터 처리 및 시각화 담당, UI 디자인 완성 + 데이터 분석
- 수정 단계: 피드백 반영해서 프론트 디자인 수정

 3. 백엔드 & 데이터 담당  

- 기획 단계: 데이터 수집, 기획 데이터 분석을 통해 해결하고자 하는 문제를 정의
- 개발 단계: 웹 서버 유저가 직접 백엔드에 저장할수 있는 기능 구현, 데이터 베이스 구축 및 API 활용, 데이터 분석 개념 총동원하기 + 데이터 분석
- 수정 단계: 코치님 피드백 반영해서 분석/ 시각화 방식 수정

## 6. 버전
  - ver 0.6
    - 기획서 초안 작성완료
    - 서브 기능 및 등급 구간 갱신 필요
    - 팀원 피드백 & 코치님 컨펌 필요

  - ver 0.51
    - 프로젝트 목표 수정
    - 프로젝트 팀원 역할 분담 수정

  - ver 0.5
    - 서비스 이름 작성
    - 프로젝트 목표 작성
    - 와이어프레임 제작
    - 프로젝트 팀원 역할 분담
    - 멤버별 responsibility 작성

## 7. FAQ
  - (갱신 예정)