// 스타워즈 PJ 메인 JS - main.js //////////////

console.log("1. 모듈로 메인js호출확인");

// 공통처리함수 불러오기(html 공통영역구조 +공통데이터) :가상먼저 처리한다!
import setElement from "./common.js";
setElement();
/* html main영역구조 + 공통데이터 불러오기 */
import * as mainData from "../data/main_data.js";

(() => {
  // Main html 데이터 불러오기
  const contBox = mFn.qs("section.content-area");
  const newsBox = mFn.qs("section.news-area");
  const visualBox = mFn.qs(".visualView-ban.inbox");
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
    let goLeft = false;

    const banner = mFn.qs(".ban_wrap");
    const btns = mFn.qsa(".banbtn");
    let txt = mFn.qs(".pageInfo");

    let banImg = mFn.qs(".blur-wrap>img");
    const video = mFn.qs(".video");
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
        setTimeout(() => {
          banImg.style.scale = "1.1";
        }, 400);
        banner.style.setProperty("--transition", "0.3s 0.8s");
        banner.style.setProperty("--scale", "1");
        banner.style.setProperty("--opacity", "1");
      } else if (txt.innerText === "02 / 02") {
        txt.innerText = "01 / 02";
        banner.style.left = "-0%";
        /* 동영상컨트롤러 */
        setTimeout(() => {
          videoControl.style.display = "block";
          /* 비디오재생 처음부터 */
          video.currentTime = 0;
        }, 100);
        setTimeout(() => {
          banImg.style.scale = "1";
        }, 400);
        banner.style.setProperty("--transition", "0s 0.1s");
        banner.style.setProperty("--scale", "0.9");
        banner.style.setProperty("--opacity", "0");
      }
    } ///moveBan//

    /********************************************
   [ 메인배너 드래그시 left값 이동하기 ]
  이벤트 /변경대상: .ban_wrap 
  드래그 시작값 , 끝날값 양/음수에 따라 left값이동
  *******************************************/

    let touchStartX = 0; // 터치시작 값
    let touchEndX = 0; // 터치끝 값
    let diffX = 0; // 드래그한 양/음수값

    mFn.addEvt(banner, "touchstart", (e) => {
      touchStartX = e.touches[0].clientX;
      console.log("터치시작:", touchStartX);
    });
    mFn.addEvt(banner, "touchend", (e) => {
      touchEndX = e.changedTouches[0].clientX;
      console.log("터치끝:", touchEndX);
      touchMoveBan();
    });

    function touchMoveBan() {
      diffX = touchEndX - touchStartX;
      console.log("차이값:", diffX);

      if (Math.abs(diffX) > 50) {
        //최소 슬라이드범위( + / - 50)
        if (diffX < 0) {
          // 0보다 작을때 left -100%
          moveBan();
          // moveBannerLeft();
        } else if (diffX > 0) {
          // 0보다 클때 left 0%
          moveBan();
          // moveBannerRight();
        }
      } ///if///
    } ////// touchMoveBan 함수 ///
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
  function revealOnViewport(target) {
    const observer = new IntersectionObserver((ele) => {
      ele.forEach((ele) => {
        if (ele.isIntersecting) {
          ele.target.style.opacity = 1;
        } else {
          ele.target.style.opacity = 0;
        }
      });
    });

    observer.observe(target);
  }
})(); ///////// 코드랩핑 끝

/********************************************
 [ 시리즈이미지,뉴스이미지 클릭시 toggle로 on넣어 
  posterBox / newBox 클래스에 맞는 데이터 보기/닫기]
  이벤트 대상: .item-box
      변경대상: .item-box
*******************************************/
(() => {
  const newBox = mFn.qsa(".news-box");
  const posterBox = mFn.qsa(".right-wrap.second .item-box");
  const newsItem = mainData.newsItemData;
  // console.log('mainData.newsItemData',newsItem);



  // console.log(posterBox, newBox);
  /* 뉴스 */
  newBox.forEach((ele, idx) => {
    mFn.addEvt(ele, "click", () => showItem(ele, idx));
  }); ////////forEach//////
  /* 포스터 */
  posterBox.forEach((ele, idx) => {
    mFn.addEvt(ele, "click", () => showItem(ele, idx));
  }); ////////forEach//////

  
  function showItem(ele, idx) {
  
    console.log("클릭됨", idx);

    ele.classList.toggle("on");

    // "on" 클래스가 추가되었을 때만 스크롤 잠금
    if (ele.classList.contains("on")) {
      document.body.style.overflow = 'hidden';

    } else {
      document.body.style.overflowX = 'hidden';
      document.body.style.overflowY = 'auto';
    }



    // 클릭 될때마다 opacity값을 css의 초기값으로 설정(꼬임차단)
    ele.style.setProperty("--opacity", "0");

    if (ele.classList.contains("news-box")) {
      
      console.log("뉴스영역");
      // console.log('mainData.newsItemData',newsItem);
      
      ele.style.setProperty(
        "--content1",`"${mainData.newsItemData[idx].tit}"`);
      ele.style.setProperty(
        "--content2",`"${mainData.newsItemData[idx].info}"`);
      ele.style.setProperty(
        "--bg-image",`url(../images/main_images/${mainData.newsItemData[idx].src})`);

    } else {
      console.log("시리즈영역");
      ele.style.setProperty("--content1",`"${mainData.seriesData[idx].title}"`);
      ele.style.setProperty("--content2", `'${mainData.seriesData[idx].detail}'`);
      ele.style.setProperty("--bg-image",`url(../images/main_images/${mainData.seriesData[idx].src})`);
    }
    setTimeout(() => {
      //비동기처리 (css transition 적용시간을 위한 대기시간주기)

      //기존 열려있는게 있다면 투명도 0처리 후 클릭요소만 투명도 1주기
      newBox.forEach(ele=>{ele.style.setProperty("--opacity", "0");})
      posterBox.forEach(ele=>{ele.style.setProperty("--opacity", "0");})
      ele.style.setProperty("--opacity", "1");
    }, 0);


  } /////showPoster/////

})(); ///////// 코드랩핑 끝
