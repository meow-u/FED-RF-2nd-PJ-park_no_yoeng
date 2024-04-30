// 스타워즈PJ 공통처리 JS - common.js
import dFn from "./my_function.js";

export default function comFn(){

/****************************************
  [ 마우스 커서 따라다니기 ]
  대상선정 : html
 ****************************************/
  (()=>{ ///////// 코드랩핑 시작 
    let html = dFn.qs("html"); /* 문서 */
    let tg = dFn.qs(".cursor"); /* 커서 */
    //윈도우서 마우스 무브시
    window.onmousemove = (e) => {
      tg.style.opacity = "1";
      tg.style.transition = "0s ease-out";
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


  const tg = dFn.qs('.social-box.col-4');
  const ele = dFn.qs('ul.fx-box');
  tg.onclick = () =>{
    ele.classList.toggle('on');
  };

}; ////// comFn 공통기능 함수 /////////
