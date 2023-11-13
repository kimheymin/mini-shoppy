# MINI-SHOPPY

드림코딩 리액트 - 유튜브 프로젝트 강의를 수강하며 만든 작업물에 디자인, 기능을 추가하여 다시 작업한 프로젝트입니다.

### https://mini-shoppy.netlify.app

<br />

## Stack
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"/> <img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=black"/> <img src="https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white"/>

<br />

## 주요 기능

1. Firebase를 이용한 사용자 로그인 및 인증 (구글 로그인)
2. 상품 등록 (admin인 사용자만 가능, Firebase의 Real-time database 이용)
3. 상품 카페고리별 목록 보기
4. 특정 상품 장바구니 추가, 삭제, 수량 변경
5. 메인 배너 이미지 슬라이드 구현

### 상세 설명

1. 사용자는 총 3분류로 나뉜다.

- 일반 사용자 (로그인 ⭕️)
- admin 사용자 (로그인 ⭕️)
- 일반 사용자 (로그인 ❌️)

###

2.  메뉴는 총 3개이며, 각 메뉴를 이용할 수 있는 사용자는 다음과 같다.

- 상품
  - 모든 사용자 (로그인 ⭕️, 로그인 ❌️)
- 장바구니
  - 일반 사용자 (로그인 ⭕️)
  - admin 사용자 (로그인 ⭕️)
- 상품등록
  - admin 사용자 (로그인 ⭕️)

3. 특정 사용자가 이용할 수 없는 메뉴 경로를 URL에 직접 입력 후 페이지에 접근하려는 경우 메인페이지로 이동시킨다.

<br />

### 화면

1. 로그인

![shoppy-main](https://github.com/kimheymin/mini-shoppy/assets/80433501/daf3b381-8377-491e-8c00-0d15e92ef6d4)

2. 카테고리별 목록 보기

![shoppy-list](https://github.com/kimheymin/mini-shoppy/assets/80433501/6d6cdc19-8b6e-4d84-8bc7-30060c248bc7)

3. 장바구니에 상품 추가, 삭제

![shoppy-show](https://github.com/kimheymin/mini-shoppy/assets/80433501/e2a2f47b-471d-4a01-b2ff-819e10070e7d)

4. admin 사용자 상품 등록

![shoppy-add](https://github.com/kimheymin/mini-shoppy/assets/80433501/54ad4f2b-a603-4083-b00f-c177407bc1e6)
