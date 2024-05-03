// 스타워즈 PJ 메인 JS - main.js //////////////

console.log("1. 모듈로 메인js호출확인");

// 공통처리함수 불러오기(html 공통영역구조 +공통데이터) :가상먼저 처리한다!
import setElement from "./common.js";
setElement();
/* html main영역구조 + 공통데이터 불러오기 */
import * as mainData from "../data/main_data.js";


(()=>{
  // Main html 데이터 불러오기
  const contBox= mFn.qs('section.content-area');
  const newsBox= mFn.qs('section.news-area');
  const visualBox= mFn.qs('.visualView-ban.inbox')
  //  3-1. 컨텐츠영역(세계관)
  contBox.innerHTML = mainData.htmlData.secContentArea;
  //  3-2. 뉴스영역(뉴스,시리즈)
  newsBox.innerHTML = mainData.htmlData.newsArea;
  //  3-3. 3-3.메인 하단 배너 박스
  visualBox.innerHTML = mainData.htmlData.visualViewArea;
})();

// 내함수 js 가져오기 (새이름지음)
import mFn from "./my_function.js";

window.onload = () => {
  //페이지와 모든 자원이 로드된 후 해당 함수가 실행

  /********************************************
 [ 메인배너 버튼 클릭시 left값 이동하기 ]
 이벤트대상: .banbtn
 변경대상: .ban_wrap 
*******************************************/
  (() => {
    ///////// 코드랩핑 시작
    const banner = mFn.qs(".ban_wrap");
    const btns = mFn.qsa(".banbtn");
    let txt = mFn.qs(".pageInfo");

    const videoControl = mFn.qs(".video_control");
    let isClick = false;

    console.log(banner, btns);

    btns.forEach((x) => (x.onclick = moveBan));

    function moveBan() {
      // console.log('클릭됐다!')
      // 광클금지설정 (초기 false )
      if (isClick) return;
      isClick = true;
      setTimeout(() => {
        isClick = false;
      }, 400);

      if (txt.innerText === "01 / 02") {
        txt.innerText = "02 / 02";
        banner.style.left = "-100%";
        /* 동영상컨트롤러 */
        videoControl.style.display = "none";
      } else {
        txt.innerText = "01 / 02";
        banner.style.left = "-0%";
        /* 동영상컨트롤러 */
        setTimeout(() => {
          videoControl.style.display = "block";
        }, 100);
      }
    } ///moveBan//

  /********************************************
   [ 메인배너 드래그시 left값 이동하기 ]
  이벤트 /변경대상: .ban_wrap 
  드래그 시작값 , 끝날값 양/음수에 따라 left값이동
  *******************************************/
  mFn.addEvt(banner,'touchstart',dragBan);
  mFn.addEvt(banner,'touchend',dragBan);

  function dragBan(e){
    console.log(screenX, screenY)
  } /////// dragBan /////////






/*  // (1) 터치스타트 이벤트 함수연결하기
  mFn.addEvt(dtg, "touchstart", (e) => {
    // 0. 자동넘김 멈춤함수 호출하기
    // clearAuto();
    // 자동호출을 지우기만 해서 자동시작안함!
    clearInterval(autoI);
    clearTimeout(autoT);

    // 드래그 상태값 true로 변경!
    dTrue();
    // 첫번째 위치포인트 셋팅!
    firstPoint(e);
    // 단독할당되지 않고 내부 함수호출로 연결되어있으므로
    // 이벤트 전달을 토스해줘야 한다!(전달변수 e)

    // z-index 전역변수(zNum) 숫자를 1씩 높이기
    // dtg.style.zIndex = ++zNum;

    // // console.log("터치스타트!", dragSts);
  }); ///////// touchstart //////////

  // (2) 터치엔드 이벤트 함수연결하기
  mFn.addEvt(dtg, "touchend", () => {
    // 0. 자동넘김 멈춤함수 호출하기
    clearAuto();

    // 드래그 상태값 false로 변경!
    dFalse();
    // 마지막 위치포인트 셋팅!
    lastPoint();

    // 드래그 슬라이드 이동함수 호출!
    moveDragSlide();

    // // console.log("터치엔드!", dragSts);
  }); ///////// touchend //////////

  // (3) 터치무브 이벤트 함수연결하기
  mFn.addEvt(dtg, "touchmove", dMove);
  //////////// touchmove ///////////// */



















  })(); ///////// 코드랩핑 끝

  /********************************************
 [ 메인배너 플레이버튼 클릭시 
    클래스 on 넣었다 뺏다하며 동영상 실행/멈춤 ]
    이벤트대상: .video
    변경대상: .video_control
*****************************************/
  (() => {
    ///////// 코드랩핑 시작
    const video = mFn.qs(".video");
    const videoControl = mFn.qs(".video_control");

    mFn.addEvt(videoControl, "click", () => {
      if (video.paused) {
        video.play();
        videoControl.classList.remove("on");
      } else {
        video.pause();
        videoControl.classList.add("on");
      }
    });
  })(); ///////// 코드랩핑 끝
}; /////////////////// load 이벤트함수  //////////////////

/********************************************
     [ 요소 화면에 등장시 보이기 ]
        추상화함수: IntersectionObserver 
        변경대상: .txt-content / .left-wrap / .right-wrap
    *******************************************/
(() => {
  ///////// 코드랩핑 시작
  const txtBox = mFn.qsa(".txt-content");
  const newsLbox = mFn.qs(".left-wrap");
  const newsRbox = mFn.qs(".right-wrap");

  txtBox.forEach((x) => {
    x.style.opacity = "0";
    x.style.transition = "1s ease-out";
    x.style.boxShadow = "0px 0px 40px #00ffff7a";
    revealOnViewport(x);
  });

  newsRbox.style.transition = "1s ease-out";
  newsLbox.style.transition = "1s ease-out 0.5s";

  revealOnViewport(newsLbox);
  revealOnViewport(newsRbox);

  /* 화면등장시 보이기 추상화 함수 */
  function revealOnViewport(targetElement) {
    const observer = new IntersectionObserver((ele) => {
      ele.forEach((ele) => {
        if (ele.isIntersecting) {
          ele.target.style.opacity = 1;
        } else {
          ele.target.style.opacity = 0;
        }
      });
    });

    observer.observe(targetElement);
  }
})(); ///////// 코드랩핑 끝
