// 스벅 PJ 메인 JS - main.js //////////////

console.log('1. 모듈로 메인js호출확인');

// 공통처리함수 불러오기(html 공통영역) :가상먼저 처리한다!
import setElement from "./common.js";
setElement(); // 공통함수호출 !!!

// 내함수 js 가져오기 (새이름지음)
import dFn from "./my_function.js";

// 데이터 셋팅 파일 불러오기(메인 반복 데이터) - 반복 html 
import make_Main_html from "./make_main_html.js";
make_Main_html(); 



window.onload = () => { //페이지와 모든 자원이 로드된 후 해당 함수가 실행



  (()=>{ ///////// 코드랩핑 시작 
/********************************************
 [ 뉴스영역에서 스크롤방향  가로로 바꾸기 ]
*******************************************/
// 움직일 박스
const tg0 = document.querySelector(".news-cont");
const tg1 = document.querySelector(".news-col");
// 실제 컨텐츠 길이
let tg1Width = tg1.offsetWidth;

const tg2 = document.querySelector(".news-area");
// 보이는박스길이
let tg2Width = tg2.offsetWidth;
// 보이는박스높이
let tg2Height = tg2.offsetHeight;

/******************************** 
 뉴스영역 스크롤 길이 
 가로사이즈에따라 유동적 조절
 ********************************/
// 너비 700 이하일때 뉴스영역 스크롤 길이 조절
window.addEventListener('resize',transAllowWidth)
let transVal = 0;
transAllowWidth()
function transAllowWidth() {
  if(window.innerWidth<700){
    transVal = 1000;
  }
  else {
    transVal = 0;
  }
}

// 가용길이 : 전체 가로크기 - 보이는 가로크기 = 실제 이동가능한 길이
let allowWidth = tg1Width - tg2Width + transVal ;

// 스티키부모박스높이
let allowHeight = tg2Height + allowWidth;

console.log("실제 컨텐츠 길이:", tg1Width);
console.log("보이는박스길이:", tg2Width);
console.log("보이는박스높이:", tg2Height);
console.log("가용길이:", allowWidth);
console.log("스티키부모박스높이:", allowHeight);

// 스티키 부모박스
const tg3 = document.querySelector("#news-area");
// 스티키 부모박스 높이셋팅!
tg3.style.height = allowHeight + "px";

// 보이는 화면에서의 top 위치값 리턴 함수
const retVal = (x) => x.getBoundingClientRect().top;

// 움직이는 셋팅하기
window.addEventListener("scroll", () => {
  let pos = retVal(tg3);
  // console.log(pos);
  // 200px 만큼 보정하여 움직일 거리 계산한 한계값
  let limitNum = -allowWidth;

  if (pos > 0) {
    tg0.style.left = "0px";
  } else if (pos < 0 && pos > limitNum) {
    // console.log("작동!");
    tg0.style.left = pos + "px";


    /************************************ 
     * 가로스크롤양에 비례하여 짝/홀수시 뉴스박스들 위아래 이동
     ************************************/
    const news = document.querySelectorAll(".news-col .newsbox");

    news.forEach((news, idx) => {
      news.style.transform = `
      translateY(${pos * (idx % 2 == 0 ? 0.05 : -0.07)}px)`;
    }); ///////////for each ///////
  }
});
})(); ///////// 코드랩핑 끝


(()=>{///////// 코드랩핑 시작
/******************************************** 
  // [ 상품정보 영역에서 스크롤시 원형이미지 돌리기 ]
  *가상요소의 속성을 사용자정의 변수 등록해서 트랜스폼 주기 
  *******************************************/
// 이벤트 대상: window
// const tgArea = document.querySelector("#product-area");
window.addEventListener("scroll", () => {
  /* 변경요소: 가상요소가 속해있는요소들 */
  const tgCircles = document.querySelectorAll(".pullbox");
  //  console.log(tgArea,tgCircles,window.scrollY);

  let scval = window.scrollY;
  //  console.log('스크롤위치값:',scval);

  for (const x of tgCircles) {
    //setProperty('속성',값설정) 메서드 :객체(요소)의 속성을 지정된 값으로 설정하거나 새로운 속성을 추가
    x.style.setProperty("--after-transform", `rotate(${scval * 0.1}deg)`);
  }
});
})();///////// 코드랩핑 끝

(()=>{///////// 코드랩핑 시작
/******************************************** 
  [ 리저브 영역 탑위치 확인하여 letter 변환 효과 넣기 ]
  해당영역 이미지도 효과넣기
 *******************************************/
//이벤트 대상선정: window
//변경요소: letterItems>p 들
// const reserveArea = dFn.qs(".reserve-area.inbox");
const letters = dFn.qsa(".letterItems>p");
const newsImgs = dFn.qsa(".infobox img");
const infoTxt = dFn.qsa('.infowrap > [class^="infobox b"]');
// console.log("리저브대상:", reserveArea, letters, newsImgs, "머양>", infoTxt);

// 보이는 화면에서의 위치값 리턴 함수 getBoundingClientRect()
const topVal = (x) => x.getBoundingClientRect().top;

window.addEventListener("scroll", transFn);

function transFn() {
  /* 이미지 */
  newsImgs.forEach((x) => {
    let topval = topVal(x);

    if (topval <= 800 && topval > 0) {
      // 화면 내에 등장한 경우
      x.style.transition = ".5s";
      x.style.transform = `translateY(${topval * -0.02}px)`;
      x.style.opacity = 1;
    } else if (topval > 800) {
      // 화면아래로 벗어난 경우
      x.style.transform = `translateY(0px)`;
      x.style.opacity = 0;
    }
  });
  /* letter */
  letters.forEach((x) => {
    let topval = topVal(x);
    // console.log(x, topval);

    if (topval <= 800 && topval > 0) {
      // 화면 내에 등장한 경우
      x.style.transform = `translateY(${topval * 0.1}px) scale(1.2)`;
      x.style.opacity = 1;
    } else if (topval > 800) {
      // 화면아래로 벗어난 경우
      x.style.transform = `translateY(0px) scale(0)`;
      x.style.opacity = 0;
      x.style.fontStyle = "italic";
    }
  });
  /* 설명 */
  infoTxt.forEach((x) => {
    let topval = topVal(x);

    if (topval <= 800 && topval > 0) {
      // 화면 내에 등장한 경우
      x.style.transition = "2s";
      x.style.opacity = 1;
    } else if (topval > 800) {
      // 화면아래로 벗어난 경우
      x.style.opacity = 0;
    }
  });
}
})();///////// 코드랩핑 끝



(()=>{///////// 코드랩핑 시작
/******************************************** 
  [ 스패셜매장 영역 탑위치 확인하여 on클래스 넣기 ]
 *******************************************/
// 대상선정:  .col-12 storebox
// 변경요소:  .storeBox>.store 들!!
const storeBox = document.querySelector(".col-12.storebox");
const items = document.querySelectorAll(".storebox>.store");
// console.log(storeBox,items);

window.addEventListener("scroll", moveFn);

function moveFn() {
  // 보이는 화면에서의 위치값 리턴 함수 getBoundingClientRect()
const topVal = (x) => x.getBoundingClientRect().top;
  let topval = topVal(storeBox);
  // console.log(topval);

  let h2 = dFn.qs(".store-Tit");
  let h4 = dFn.qs(".store-Tit.sub");
  if (topval <= 500) {
    /* 배경색 칠하기 */
    console.log(topval);
    document.body.style.backgroundColor = "#000";
    document.body.style.transition = "2s";
    // console.log("h2,h4", h2, h4);
    setTimeout(() => {
      h2.style.opacity = "1";
    }, 400);
    setTimeout(() => {
      h4.style.opacity = "1";
    }, 700);
  } else if (topval > 500) {
    /* 배경색 되돌리기 */
    document.body.style.backgroundColor = "#f6f3f0";
    h2.style.opacity = "0";
    h4.style.opacity = "0";
  }

  if (topval <= -110) {           1
    items.forEach((ele) => {
      /* 카드펼치는 클래스넣기 */
      ele.classList.add("on");
      
      


          let bottomTit = document.querySelector(".bottom-Tit");
          // console.log("대상", bottomTit);
          // console.log(topval);

          bottomTit.style.transition = "2s 1s";
          bottomTit.style.opacity = "1";

    });
  } //// if ////
  else if (topval > -110) {
    items.forEach((ele) => {
      /* 카드펼치는 클래스빼기 */
      ele.classList.remove("on");



          let bottomTit = document.querySelector(".bottom-Tit");
          // console.log("대상", bottomTit);

          bottomTit.style.transition = "2s 1s";
          bottomTit.style.opacity = "0";

    });
  }
} ////// moveFn 함수

/* 스페셜매장 영역 커서효과 */
storeBox.onmouseenter = () => {
  let tg = dFn.qs(".cursor"); /* 커서 */
  tg.style.scale = "1.2";
};
storeBox.onmouseleave = () => {
  let tg = dFn.qs(".cursor"); /* 커서 */
  tg.style.scale = "1";
};
/******************************************** 
  [ 스패셜매장 개별박스 마우스엔터시 커서 스케일+그림자
   + 나머지박스 암전환 ]
 *******************************************/
items.forEach((ele) => {
  ele.onmouseenter = () => {
    let tg = dFn.qs(".cursor"); /* 커서 */
    tg.style.scale = "1.5";
    tg.style.boxShadow = "inset 0px 0px 15px 5px #bdff38";

    let footerBtn= dFn.qs('.bottom-Tit');
    console.log(footerBtn);

    /* 개별 items에 마우스올릴시 전체 items효과  */
    for (let x of items) {
      x.style.filter = "grayscale(5) brightness(0.5)";

      /* 버튼숨기기 */
      let bottomTit = document.querySelector(".bottom-Tit");
      // console.log("대상", bottomTit);
      bottomTit.style.transition = '0.2s ease-in';
      bottomTit.style.opacity = '0';
    }
    ele.style.filter = "none";
  };

  ele.onmouseleave = () => {
    let tg = dFn.qs(".cursor"); /* 커서 */
    tg.style.scale = "1.2";
    tg.style.boxShadow = "none";

    /* 개별 items에 마우스아웃시 전체 items효과  */
    for (let x of items) {
      x.style.filter = "none";

      /* 버튼보이기 */
      let bottomTit = document.querySelector(".bottom-Tit");
      console.log("대상", bottomTit);
      bottomTit.style.opacity = '1';
    }
  };
});
})();///////// 코드랩핑 끝

};