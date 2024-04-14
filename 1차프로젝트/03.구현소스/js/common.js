// 스벅 PJ 공통처리 JS - common.js

console.log('1. 모듈로 common js호출확인');

/* 내함수 js 가져오기 */
import dFn from "./my_function.js";
/* 공통html 데이터가져오기 */
import comdata from '../data/common_data.js';
// 공통 미디어쿼리 js 가져오기 (새이름지음)
import ComMediaJs from "./media.js";

/* 데이터 셋팅 파일 불러오기(공통 반복 데이터) - 
반복 html 만들어 뿌려주는 js (공통html 호출이후가능) */
import make_Com_html from "./make_com_html.js";


//////////////////////////////////////////////////////////
export default function setElement () {

/* 공통html 넣기 */
// 1. 상단영역 코드
dFn.qs('#top-area').innerHTML = comdata.topArea;
// 2. 배너영역 코드
dFn.qs('#ban-area').innerHTML = comdata.banArea;
// 3. 라인안내영역 코드
dFn.qs('#line-notice-area').innerHTML = comdata.lineNoticeArea;
// 4. 하단영역 코드
dFn.qs('#footer-area').innerHTML = comdata.footerArea;

// 공통반복 데이터 호출
make_Com_html(); 
// 공통 미디어쿼리js 첫호출:  html 구성요소가 다 불러진다음 적용해야 함. 요소 동적기능
ComMediaJs(); 

// 공통 기능처리 함수 호출하기 - onload: 페이지와 모든 자원이 로드된 후 해당 함수가 실행
window.onload = comFn()

}  ///////////// 공통 setElement 함수 ////////////////////


// __________________공통 기능 함수 구역__________________ //
function comFn(){


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
    tg.style.transition = "0.2s ease-out";
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

(()=>{ ///////// 코드랩핑 시작 
    /****************************************
     [ 상단메뉴 오버시 서브메뉴 보이기 ]
      대상선정 : .gnb .menu
     ****************************************/
    /* 처음로딩후 실행안되니 호출꼭 하기 */
    gnbType();
    dFn.addEvt(window, "resize", gnbType);
    function gnbType() {
      if (window.innerWidth > 700) {
          console.log('700초과');
        let menu = dFn.qsa(".gnb .menu");
    
    
        /* *******이건플랙스박스 정렬때문에 넣은것**** */
        let gnbFlex =dFn.qs('nav.gnb')
        console.log('gnbFlex',gnbFlex);
        gnbFlex.style.alignItems = 'center'; 
        /* *********** */
        
    
        console.log("메뉴개수:", menu.length, menu);
    
        for (let i = 0; i < menu.length; i++) {
          menu[i].onmouseenter = function () {
            let tg = dFn.qsEl(this, ".submenu");
            console.log("타겟", tg);
            // 해당 메뉴 하위 서브 속박스 높이값
            let mh = dFn.qsEl(this, ".sub-wrap").offsetHeight;
            console.log("높이:", mh);
            // 대상 높이값 지정하기
            tg.style.height = mh + "px";
            tg.style.transition = ".4s ease-in-out";
    
            this.classList.add("gnbOn");
            dFn.qsEl(this, "a").style.color = "white";
          }; ///마우스 오버 이벤트함수///
    
          menu[i].onmouseleave = function () {
            let tg = dFn.qsEl(this, ".submenu");
            // 대상 높이값 지정하기
            tg.style.height = "0px";
            tg.style.transition = ".4s ease-in-out";
    
            this.classList.remove("gnbOn");
            dFn.qsEl(this, "a").style.color = "#9f9f9f";
          }; ///마우스 떠날때 이벤트함수///
        } /// for ///
      } /////if//////
      else {
        // 700 미만일 때 실행할 코드
        let menu = dFn.qsa(".gnb .menu");
        for (let i = 0; i < menu.length; i++) {
          menu[i].onmouseenter = null;
          menu[i].onmouseleave = null;
        }
      } /////////else//////
    } //////////gnbType 리사이즈 이벤트함수 ///////////
    })(); ///////// 코드랩핑 끝

/****************************************
  [ 중앙이미지만 오버시 .center 클래스 넣고 빼기 ]
  (밝아지는효과 적용된 클래스)
 ****************************************/
(()=>{ ///////// 코드랩핑 시작 
  let visualView = dFn.qs(".visualView");
  let centerImg = dFn.qs(".img2");
  
  visualView.onmouseenter = function () {
    centerImg.classList.remove("center");
  };
  visualView.onmouseleave = function () {
    centerImg.classList.add("center");
  };
})(); ///////// 코드랩핑 끝



/******************************************** 
  [ 하단 ol오버시 상단메뉴 글씨색 바꾸기 ]
  
  // 이벤트대상: .sub-wrap .sub-wrap ol:first-of-type
  // 변경대상: .gnb .menu a:first-of-type
 ********************************************/

(()=>{ ///////// 코드랩핑 시작 
let ol = dFn.qsa(".sub-wrap>ol");
//  let a = document.querySelectorAll('.gnb .menu>a:first-of-type')
// console.log('대상확인:',ol,a);

for (let i = 0; i < ol.length; i++) {
  // console.log(ol[i]);
  ol[i].onmouseenter = function () {
    /* [i]인 요소의 상대적인 선택자!! */
    let gnbname = this.closest(".menu").querySelector("a:first-of-type");

    //(this.closest('.menu').querySelector('a:first-of-type'))는

    //이벤트를 트리거한 각 ol[i] 요소를 기준으로
    //가장 가까운 조상 요소 중에서 .menu 클래스를 가진 요소의 첫 번째 앵커(<a>) 요소를 선택하므로,
    //각 ol[i] 값에 따라 다른 요소를 선택

    console.log(gnbname);
    gnbname.style.color = "white";

    let gnbBg = this.closest(".menu");
    // console.log(gnbBg);
    gnbBg.classList.add("gnbOn");

    ol[i].querySelector("a").style.color = "white";
    ol[i].querySelector("a").classList.add("olOn");
  };

  ol[i].onmouseleave = function () {
    // 윗 함수에 갇힌 지역변수라 새로 선언
    let gnbname = this.closest(".menu").querySelector("a:first-of-type");
    gnbname.style.color = "#9f9f9f";

    let gnbBg = this.closest(".menu");
    gnbBg.style.backgroundColor = "transparent";
    gnbBg.classList.remove("gnbOn");

    ol[i].querySelector("a").style.color = "#9f9f9f";
    ol[i].querySelector("a").classList.remove("olOn");
  };
}
})(); ///////// 코드랩핑 끝


}; ////// comFn 공통기능 함수 /////////