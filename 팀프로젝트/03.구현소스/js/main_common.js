// 스타워즈PJ 공통처리 JS - common.js
import dFn from "./my_function.js";

export default function comFn() {
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
    // //이벤트대상
    const tg = dFn.qs(".social-box.col-4");
    // //변경대상
    const ele = dFn.qs("ul.fx-box");

    let isClicked = false;
    tg.onclick = () => {
      if(window.innerWidth <=700){// 화면너비 700미만일때만 실행

      ele.classList.toggle("on");
      if (!isClicked) {
        tg.style.setProperty("--transform", "rotate(225deg)");
        tg.style.setProperty("--filter", "drop-shadow(2px 2px 6px aqua)");
        isClicked = true;
      } else if (isClicked) {
        tg.style.setProperty("--transform", "rotate(0deg)");
        tg.style.setProperty("--filter", "drop-shadow(0px 0px 0px aqua)");
        isClicked = false;
      }

    }//window if
    };
  })(); ///////// 코드랩핑 끝
} ////// comFn 공통기능 함수 /////////
