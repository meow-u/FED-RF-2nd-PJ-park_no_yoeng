// 펜할리곤스 레이아웃 컴포넌트 : 실제적인 최상위 컴포넌트임!
// Import react
import React, { useCallback, useEffect, useState } from "react";
// 각영역 불러오기
import TopArea from "./TopArea";
import MainArea from "./MainArea";
import FooterArea from "./FooterArea";
import { useLocation } from "react-router-dom";
// 컨텍스트 API 불러오기
import { useNavigate } from "react-router-dom";
import { Con } from "../modules/myCon";

// [1] 메인 페이지 전체 레이아웃 로딩 컴포넌트 ///

export function Layout() {
   const loc = useLocation();

   let scrollTop = () => {
      console.log("스크롤탑");
      window.scrollTo(0, 0);
   };

   // [ 상태관리 변수 ] /////////
   // 1. 로그인 상태관리변수 (로그인후,로그아웃,처음랜더링시 셋팅,
   // loginSts는 상단영역 로그인 상태 null여부확인하여 로그인/아웃버튼 노출시 사용)
   const [loginSts, setLoginSts] =
      // useState("loginSts 초기값 test 나야나");
      useState(sessionStorage.getItem("minfo"));
   // -> 초기값으로 로컬 스토리지 "minfo"를 할당함!

   // 2. 로그인 환영메세지 상태변수 (환영메세지생성 공통함수내 , 로그아웃시 초기화셋팅
   // loginMsg는 상단영역 환영메세지박스 요소에서 읽기위해쓰임)
   const [loginMsg, setLoginMsg] = useState(null);
   // console.log('랜더링후loginMsg :',loginMsg);

  // 3. 카트리스트 사용여부 : true 일때 사용
  const [cartSts,setCartSts] = useState(cartTemp);


   // [ 공통 함수 ] //
   // 1. 라우팅 이동함수  (로그인페이지, 로그아웃시 셋팅)
   const goPage = useNavigate();
   // 2. 로그인 환영메세지 생성함수 (로그인후 셋팅)
   const makeMsg = (name) => {
      // 유저아이콘
      const usrIcon = ["🙍‍♂", "🧏‍♀", "🦸‍♂", "👨‍🎤", "🦸‍♀"];
      // 랜덤수 : 0~4사이의 수
      let rdm = Math.floor(Math.random() * 5);

      setLoginMsg(`welcome ${name} ${usrIcon[rdm]}`);
   };
   // 3. 로그아웃 함수 ////// (상단영역 로그아웃버튼 온클릭 이벤트로 호출)
   const logoutFn = () => {
      console.log("로그인상태null/세션스지워!/루트로 돌아가!");
      // 1. 로그인 상태값 null
      setLoginSts(null);
      // 2. 세션스 지우기 : 'minfo'만 지우기
      sessionStorage.removeItem("minfo");
      // 3. 로그인환영메세지 초기화
      setLoginMsg(null);
      // 4. 메인페이지로 돌아가기
      goPage("/");
   }; ///// logoutFn 함수 /////

   // 화면 랜더링 구역 ////////
   useEffect(() => {
      // -> [ 로그인상태 체크함수 ] //

      // (새로고침시에도 로그인이 유지되도록)
      // 만약 세션스(minfo)의 값이 null 이 아니면
      // 로그인 상태변수를 업데이트한다!
      // -> null이 아니면 조건문이 true처리 된다!
      if (sessionStorage.getItem("minfo")) {
         // 세션스 변수할당
         let ss = sessionStorage.getItem("minfo");
         // 로그인상태값
         setLoginSts(ss);
         // 로그인 메세지 업데이트 :
         // -> 세션스값의 unm(이름값)을 보내준다!
         makeMsg(JSON.parse(ss).unm);
      } ////// if ////
   }, []); // 랜더링후 처음한번만체크

   // 코드 리턴구역
   return (
      // Provider value 속성으로 전역노출 변수를 설정함!
      <>
         <Con.Provider
            value={{
               loginSts,
               setLoginSts,
               loginMsg,
               goPage,
               makeMsg,
               logoutFn,
            }}
         >
            {/* 로그인상태, 로긴상태셋팅, 환영메세지, ㅡ전역변수
            nav라우터, 환영메세지생성 , 로그아웃함수 ㅡ공통함수 */}

            {/* setLoginMsg 사용안돼서 지움 */}
            {/* 1. 상단영역 */}
            <TopArea scrollFn={scrollTop} />
            {/* 2. 메인영역 */}
            <MainArea />
            {/* 3. 하단영역 */}
            <FooterArea />
            {/* 카트리스트 : 카트상태값 true 출력 */}
            {cartSts && <CartList />}
         </Con.Provider>
      </>
   );
} ///////// Layout 컴포넌트 /////////
