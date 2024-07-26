// 스타워즈PJ 공통처리 JS - common.js
import dFn from "./my_function.js";
console.log('1. common js호출확인');

/* 공통html 데이터 가져오기 */
//호출필요x  comData 객체 호출시 모듈의 모든 값과 함수가 포함되어 있기 때문
import * as comData from "../data/common_data.js";

//////////////////////////////////////////////////////////
export default function setElement () {

  /* 공통html 넣기 */
  // 1. 상단영역 코드
  dFn.qs('#top-area').innerHTML = comData.htmlData.topArea;

  // 2. 하단영역 코드
  dFn.qs('#footer-area').innerHTML = comData.htmlData.footerArea;
  

  
  // 공통 기능처리 함수 호출하기 - onload: 페이지와 모든 자원이 로드된 후 해당 함수가 실행
  window.onload = comFn()
  
  }  ///////////// 공통 setElement 함수 ////////////////////
  



function comFn() {

  /****************************************
  [ 마우스 커서 따라다니기 ]
  대상선정 : html
  변경대상 : .cursor
 ****************************************/
  (() => {
    ///////// 코드랩핑 시작
    let html = dFn.qs("html"); /* 문서 */
    let tg = dFn.qs(".cursor"); /* 커서 */
    //윈도우서 마우스 무브시
    window.onmousemove = (e) => {
      tg.style.opacity = "1";
      tg.style.transition = "0.05s ease-out";
      tg.style.left = e.clientX + "px";
      tg.style.top = e.clientY + "px";
    };
    //문서에 마우스 앤터시
    html.onmouseenter = (e) => {
      tg.style.opacity = "1";
    };
    //문서에 마우스 떠날시
    html.onmouseleave = (e) => {
      tg.style.opacity = "0";
    };
  })(); ///////// 코드랩핑 끝

  /****************************************
   * 화면너비 700 미만일시
  [ GNB 메뉴 토글 (클릭시 높이 확장/축소) ]
  + 대상영역의 가상요소 클릭효과 (사용자정의변수)

  대상선정 : .social-box.col-4 (+가상요소 부모)
  변경대상 : ul.fx-box (소셜버튼 부모박스)
 ****************************************/
  (() => {
    ///////// 코드랩핑 시작
    // //이벤트대상 (가상요소부모)
    const tg = dFn.qs(".social-box.col-4");
    // //변경대상 (소셜메뉴박스)
    const ele = dFn.qs("ul.fx-box");

    let isClicked = false;
    tg.onclick = () => {
      if (window.innerWidth <= 700) {
        // 화면너비 700미만일때만 실행

        ele.classList.toggle("on");
        if (!isClicked) {
          console.log(ele.classList.contains("on"));
          /* 사용자정의변수 가상요소 속성 변경 */
          tg.style.setProperty("--transform", "rotate(225deg)");
          tg.style.setProperty("--filter", "drop-shadow(2px 2px 6px aqua)");
          isClicked = true;
        } else if (isClicked) {
          tg.style.setProperty("--transform", "rotate(0deg)");
          tg.style.setProperty("--filter", "drop-shadow(0px 0px 0px aqua)");
          isClicked = false;
        }
      } //window if


    };
      window.addEventListener("click", hiddenMenu);
/********************************************** 
    ele(소셜박스)가 on 일때  
    가상요소 외 나머지영역 클릭하면 닫기
 **********************************************/

  function hiddenMenu(e) {
    if (ele.classList.contains("on") && !tg.contains(e.target)) { 
      //  && !tg.contains(e.target) 핵심 : tg가 이벤트타켓(클릭영역)이 아닐때
      tg.style.setProperty("--transform", "rotate(0deg)");
      tg.style.setProperty("--filter", "drop-shadow(0px 0px 0px aqua)");
      isClicked = false;
      ele.classList.remove("on");
      clickEventAdded = false;
      window.removeEventListener("click", hiddenMenu);
    }
  }

  })(); ///////// 코드랩핑 끝

} ////// comFn 공통기능 함수 /////////
