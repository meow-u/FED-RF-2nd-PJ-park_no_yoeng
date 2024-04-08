// 스벅 PJ 데이터 JS - sb_data.js

/*************************************
  [ 데이터 항목 객체 생성시 유의사항 ] 

    1. 모든 데이터는 구분할 수 있는 
    유일키 (기본키)를 생성한다!
    
    2. 항목별 데이터는 객체로 구성한다
    
    3. 반복데이터는 객체를 반복하여 
    배열로 구성한다 
    
    4. 반복데이터가 객체일 경우 배열로
    변환하여 사용한다.

  *************************************/


// 1. 하단 데이터
/************************************* 
    [ 데이터항목 : 하단메뉴 구성 ]
    [ 클래스명 , [메뉴,메뉴, ...] ],
   
*************************************/

const footerData = 

[
    ["info1",["스타벅스소개","문의하기","사이트맵"]],
    ["info1",["로그인","회원가입","회원가입"]],
    ["info2",["COMPANY","CORPORATE SALES","PARTNERSHIP","ONLINE COMMUNITY","RECRUIT"]],
    ["info3",["개인정보처리방침","영상정보처리기기 운영관리 방침","홈페이지 이용약관","위치정보 이용약관","스타벅스 카드 이용약관","신세계 유니버스 클럽 이용약관","비회원 이용약관","My DT Pass 서비스 이용약관","윤리경영 핫라인"]],
];




// 데이터 공개하기 ///
export { footerData };
