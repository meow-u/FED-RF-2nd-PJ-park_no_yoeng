// 펜할리곤스 레이아웃 컴포넌트 : 실제적인 최상위 컴포넌트임!
// Import react
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// 각영역 불러오기
import TopArea from "./TopArea";
import MainArea from "./MainArea";
import FooterArea from "./FooterArea";
// 카트 컴포넌트 불러오기
import Cart from "../pages/Cart";

// 전역 상태관리변수를 공유하기위한 컨텍스트 API 불러오기
import { Con } from "../modules/myCon";

// [1] 메인 페이지 전체 레이아웃 로딩 컴포넌트 ///
export function Layout() {
  const loc = useLocation();

  let scrollTop = () => {
    console.log("스크롤탑");
    window.scrollTo(0, 0);
  };

  // [ 상태관리 변수 ] ////////////////////////////////////
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

  // 3. 위시리스트 상태관리변수 (위시리스트 페이지에서 사용)
  const [wishList, setWishList] = useState(() => {
    // 로컬스토리지에 저장된 데이터가 있다면 파싱해서 리턴
    if (localStorage.getItem("wish-data")) {
      return (
      JSON.parse(localStorage.getItem("wish-data")));
    } // 로컬스토리지에 저장된 데이터가 없으면 새로 저장하고 빈배열 리턴
     else {
      localStorage.setItem("wish-data", "[]");
      return [];
    }
  });

  // [ 카트 관련 상태관리변수 ] /////////////////////////////

  // [ 카드 로컬 데이터 상태변수 ] : 초기상태로 로컬스토리지에 저장된 카드데이터를 가져오기

  // [ 이전값 꿀팁 ]
  // [arr,setArr] = useState([a,b,c])일때
  // setArr( prev => [...prev, new])
  // 이렇게 하면 결과가 arr 변수값이 [a,b,c,new] 로 되면서 랜더링 됨!
  // -> 즉, 이전값을 복사한후 새로운값을 추가하여 업데이트함!
  // 이전값을 가지고 계산이나 필터도 가능함!
  // 계산예시) setArr( prev => prev.map(v=>v+1) ) 이런식으로!
  // 필터예시) setArr( prev => prev.filter(v=>v>0) ) 이런식으로!

  let savedCart;
  const [localsCart, setLocalsCart] = useState(() => {
    // 로컬스토리지에 저장된 데이터 가져오는 변수
    savedCart = localStorage.getItem("cart-data");

    if (!savedCart) {
      // 로컬스에 저장된 데이터가 없으면 빈 배열을 localStorage에 저장
      localStorage.setItem("cart-data", "[]");
      // 그리고 useState 상태의 초기값으로 빈 배열 반환
      console.log("초기값을가져왔다");
      return [];
    } else if (savedCart) {
      // 로컬스에 저장된 데이터가 있으면 파싱하여 반환
      console.log("저장된걸가져왔다");
      return JSON.parse(savedCart);
    }
  });

  // [ 카트 사용여부 상태변수 ] : true 일때 사용
  const [cartSts, setCartSts] = useState(() => {
    //카드 존재여부 변수 (처음 false로 셋팅)
    let cartTemp = false;

    if (savedCart) {
      // 만약 로컬카트가 존재하면 갯수확인후 0이상일시 카트를 보여준다.
      // 카트에 담긴 갯수확인
      let cartCnt = localsCart.length;
      if (cartCnt > 0) {
        // 담긴갯수가 0 이상이면 카드 존재여부 true
        cartTemp = true;
        console.log("카트존재여부:", cartTemp);
        return cartTemp;
      }
    } /////////////////// if ///////////////////
  });

  // [ 카트 관련 함수 ] //////////////////////////////////

  // 0. 장바구니 데이터 업데이트 함수
  // 내보내면 안됨. 사용하다가 배열대신 다른거들어오면 원본이 위험함!
  // 참조만 하는 함수로 사용해야함! <- 써야할때만 쓰는 함수..
  const updateCart = (toUpdateCartItems) => {
    // toUpdateCartItems 객체나 배열이어야 함 (JSON 문자열이 아님)
    setLocalsCart(toUpdateCartItems); // React 상태 업데이트

    // localStorage에는 JSON 문자열로 저장
    localStorage.setItem("cart-data", JSON.stringify(toUpdateCartItems));
  };

  // 1. 장바구니에 아이템 추가 함수
  const addToCart = (item) => {
    // 장바구니에 추가할 아이템이 이미 존재하는지 확인
    const isSame = localsCart.some((cartItem) => cartItem.idx === item.idx);
    console.log("isSame:", isSame);

    // 이미 존재하는 아이템이면 제외 후 추가
    if (isSame) {
      alert("장바구니 담겨있던 동일상품의 정보가 변경되었습니다");
      // 같은 아이템 삭제 후 다시 추가
      let deleteSame = localsCart.filter(
        (cartItem) => cartItem.idx !== item.idx
      );
      const updatedCart = [...deleteSame, item];
      console.log("같은아이템삭제후 새롭게 추가된카트:", updatedCart);
      updateCart(updatedCart);
      return;
    }

    // 로컬스 카트 데이터에 아이템 추가
    const updatedCart = [...localsCart, item];
    console.log("추가된카트:", updatedCart);
    updateCart(updatedCart);
  };

  // 2. 장바구니에서 아이템 삭제 함수
  const deleteCart = (item) => {
    // 로컬스 카트 데이터에서 아이템 삭제 : idx가 일치하지 않는 것만 필터링 (일치하는 것만 삭제)
    const updatedCart = localsCart.filter(
      (cartItem) => cartItem.idx !== item.idx
    );
    console.log("삭제된카트:", updatedCart);
    updateCart(updatedCart);
  };

  // [ 공통 함수 ] ////////////////////////////////////////

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
    // 만약 세션스(minfo)의 값이 null 이 아니면2
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

  /**************************************** 
   [ 컨텍스트 API 공개 변수들 ] :Provider value 속성으로 전역노출 변수를 설정
   ****************************************/
  return (
    ////코드 리턴구역
    <Con.Provider
      value={{
        // [ 로그인 상태변수 ]
        loginSts, // 로그인상태
        setLoginSts, // 로그인상태셋팅함수
        loginMsg, // 환영메세지

        // [ 공통함수 ]
        goPage, // 라우터이동함수
        makeMsg, // 환영메세지생성함수
        logoutFn, // 로그아웃함수

        // [ 카트관련 상태변수 ]
        setCartSts, // 카트 사용여부 셋팅함수
        localsCart, // 로컬카트데이터
        setLocalsCart, // 로컬카트데이터셋팅함수

        updateCart, // 카트데이터 업데이트함수
        addToCart, // 카트에 아이템 추가함수
        deleteCart, // 카트에 아이템 삭제함수

        wishList, // 위시리스트
        setWishList, // 위시리스트셋팅함수
      }}
    >
      {/* 카트리스트 : 카트상태값 true일시 출력 */}
      {cartSts && <Cart />}
      {/* 1. 상단영역 */}
      <TopArea scrollFn={scrollTop} />
      {/* 2. 메인영역 */}
      <MainArea />
      {/* 3. 하단영역 */}
      <FooterArea />
    </Con.Provider>
  );
} ///////// Layout 컴포넌트 /////////
