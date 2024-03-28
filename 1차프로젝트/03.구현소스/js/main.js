// 메인 js

// DOM 선택 객체함수
const domFn = {
  qs: (x) => document.querySelector(x),
  qsEl: (el, x) => el.querySelector(x),
  qsa: (x) => document.querySelectorAll(x),
  qsaEl: (el, x) => el.querySelectorAll(x),

  // 이벤트셋팅함수
  addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),
}; /////// domFn 객체 /////////////
//________________________________________________________________

/* ******************************************* */
// [ 마우스 커서 따라다니기 ]
// 대상선정 : html
/* ******************************************* */
let html = domFn.qs("html"); /* 문서 */
let tg = domFn.qs(".cursor"); /* 커서 */
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

/* *********************************** */
// [ 상단메뉴 오버시 서브메뉴 보이기 ]
// 대상선정 : .gnb .menu
/* *********************************** */

let menu = document.querySelectorAll(".gnb .menu");

console.log("메뉴개수:", menu.length, menu);

for (let i = 0; i < menu.length; i++) {
  menu[i].onmouseenter = function () {
    let tg = this.querySelector(".submenu");
    // 해당 메뉴 하위 서브 속박스 높이값
    let mh = this.querySelector(".sub-wrap").offsetHeight;
    console.log("높이:", mh);
    // 대상 높이값 지정하기
    tg.style.height = mh + "px";
    tg.style.transition = ".4s ease-in-out";

    this.classList.add("gnbOn");
    this.querySelector("a").style.color = "white";
  }; ///마우스 오버 이벤트함수///

  menu[i].onmouseleave = function () {
    let tg = this.querySelector(".submenu");
    // 대상 높이값 지정하기
    tg.style.height = "0px";
    tg.style.transition = ".4s ease-in-out";

    this.classList.remove("gnbOn");
    this.querySelector("a").style.color = "#9f9f9f";
  }; ///마우스 떠날때 이벤트함수///
} /// for ///
/* ******************************************* */
// [ 중앙이미지만 오버시 .center 클래스 넣고 빼기 ]
// (밝아지는효과 적용된 클래스)
/* ******************************************* */
let visualView = document.querySelector(".visualView");
let centerImg = document.querySelector(".img2");

visualView.onmouseenter = function () {
  centerImg.classList.remove("center");
};
visualView.onmouseleave = function () {
  centerImg.classList.add("center");
};

/******************************************** 
 // [ 하단 ol오버시 상단메뉴 글씨색 바꾸기 ]
 ********************************************/
// 이벤트대상: .sub-wrap .sub-wrap ol:first-of-type
// 변경대상: .gnb .menu a:first-of-type
let ol = document.querySelectorAll(".sub-wrap>ol");
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
// 가용길이 : 전체 가로크기 - 보이는 가로크기 = 실제 이동가능한 길이
let allowWidth = tg1Width - tg2Width + 1500;
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
window.addEventListener("wheel", () => {
  let pos = retVal(tg3);
  // console.log(pos);
  // 200px 만큼 보정하여 움직일 거리 계산한 한계값
  let limitNum = -allowWidth;

  if (pos > 0) {
    tg0.style.left = "0px";
  } else if (pos < 0 && pos > limitNum) {
    console.log("작동!");
    tg0.style.left = pos + "px";

    const news = document.querySelectorAll(".news-col .news");

    news.forEach((news, idx) => {
      news.style.transform = `
      translateY(${pos * (idx % 2 == 0 ? 0.05 : -0.07)}px)`;
    }); ///////////for each ///////
  }
});

// 타임아웃변수
// let autoT;

// /********************************************
//  // [ 뉴스영역에서 스크롤방향  가로로 바꾸기 ]
//  *******************************************/
// /* 가로스크롤 대상영역: .news-area.inbox */
// const scrollableArea = document.querySelector(".news-area.inbox");
// /* 가로스크롤시 변경요소: .news들 */
// const news = document.querySelectorAll(".news");

// const retVal = (x) => x.getBoundingClientRect().top;

// /* 대상영역 스크롤이벤트 발생시 이벤트함수실행 */
// window.addEventListener("wheel", (event)=>{
//    let pos = retVal(scrollableArea);
//    console.log(pos);
//    /* event.deltaY :  휠 또는 유사한 장치의 스크롤을 통해
//    발생한 이벤트에서 발생한 "스크롤 양"을 나타냄  */
//    if(pos > 200 && scrollableArea.scrollLeft < 1650){

//    }
//    else if (pos < 200 && pos > -400 && scrollableArea.scrollLeft < 1650 ) {
//       // 수직 스크롤이 발생할 때 기본 동작 방지
//       event.preventDefault();

//       console.log(111);

//       // deltaY 값을 가로 스크롤 값에 누적
//       // scrollBy(수평,수직)
//       scrollableArea.scrollBy(event.deltaY, 0);
//    }else if(pos < -400){
//       scrollableArea.scrollLeft = 1640;

//       console.log(222);
//    }
//    else{

//       console.log(333);
//    }

//    // 영역의 시작과 끝 설정
//    const limitLine =
//    //요소의 가로 스크롤 '위치'를 px단위로 나타내는 속성
//       scrollableArea.scrollLeft >= 1235 ||
//       scrollableArea.scrollLeft === 0;

//    // 현재 누적 deltaY 값 확인
//    console.log(scrollableArea.scrollLeft);

//    // 대상영역 양끝 스크롤 도달시
//    // deltaY 값을 세로 스크롤 값에 누적
//    // console.log(event.deltaY)
//    // if (limitLine) {

//    //     clearTimeout(autoT);

//    //    autoT = setTimeout(() => {;
//    //       //누적된 event.deltaY 값을 초기화하고 싶은데 방법을모름
//    //       //1초동안 누적된 휠값이 한번에 이동함.
//    //       window.scrollBy(0, event.deltaY);
//    //    }, 3000); //일단 0초로 해둠
//    // }

//    //뉴스요소 각각 순회하여 이동적용
//    for (var i = 0; i < news.length; i++) {
//       // 공통 트랜지션
//       news[i].style.transition = "0.3s";
//       // i가 짝수면 양수, 홀수면 음수를 곱함
//       //가로스크롤 위치값과 곱하여  요소 이동 트랜스폼
//       news[i].style.transform = `translateY(${
//          scrollableArea.scrollLeft * (i % 2 == 0 ? 0.07 : -0.07)
//       }px)`;
//    }
// },{passive:false}); // 이벤트 내부 함수

/******************************************** 
  // [ 상품정보 영역에서 스크롤시 원형이미지 돌리기 ]

  *가상요소의 속성을 사용자정의 변수 등록해서 트랜스폼 주기 
  *******************************************/
let deltaBox = 0;
// 이벤트 대상: #product-area
const tgArea = document.querySelector("#product-area");
tgArea.addEventListener("wheel", (e) => {
  /* 변경요소: 가상요소가 속해있는요소들 */
  const tgCircles = document.querySelectorAll(".pullbox");
  //  console.log(tgArea,tgCircles,'델타Y:',e.deltaY);

  deltaBox += e.deltaY;
  //  console.log('누적델타Y:',deltaBox);

  for (const x of tgCircles) {
    x.style.setProperty("--after-transform", `rotate(${deltaBox * 0.1}deg)`);
  }
});

/******************************************** 
  [ 리저브 영역 탑위치 확인하여 letter 변환 효과 넣기 ]
 *******************************************/
//대상선정: reserve-area.inbox
//변경요소: letterItems>p 들
const reserveArea = domFn.qs(".reserve-area.inbox");
const letters = domFn.qsa(".letterItems>p");
console.log("리저브대상:", reserveArea, letters);

// 보이는 화면에서의 위치값 리턴 함수 getBoundingClientRect()
const topVal = (x) => x.getBoundingClientRect().top;

window.addEventListener("wheel", letterMoveFn);

function letterMoveFn() {
  letters.forEach((x) => {
    let topval = topVal(x);
    console.log(x, topval);

    if (topval <= 800 && topval > 0) {
      // 화면 내에 등장한 경우
      x.style.transform = `translateY(${topval * 0.1}px) scale(1.2)`;
      x.style.opacity = 1;
    } else if (topval > 800) {
      // 화면아래로 벗어난 경우
      x.style.transform = `translateY(0px) scale(0)`;
      x.style.opacity = 0;
    }
  });
}

/******************************************** 
  [ 스패셜매장 영역 탑위치 확인하여 on클래스 넣기 ]
 *******************************************/
// 대상선정:  .col-12 storebox
// 변경요소:  .storeBox>.store 들!!
const storeBox = document.querySelector(".col-12.storebox");
const items = document.querySelectorAll(".storebox>.store");
// console.log(storeBox,items);

window.addEventListener("wheel", moveFn);

function moveFn() {
  let topval = topVal(storeBox);
  // console.log(topval);

  let h2 = domFn.qs(".store-Tit");
  let h4 = domFn.qs(".store-Tit.sub");
  if (topval <= 500) {
    /* 배경색 칠하기 */
    document.body.style.backgroundColor = "#000";
    document.body.style.transition = "2s";
    console.log("h2,h4", h2, h4);
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

  if (topval <= 240) {
    items.forEach((ele) => {
      /* 카드펼치는 클래스넣기 */
      ele.classList.add("on");

      setTimeout(() => {
        let bottomTit = document.querySelector(".bottom-Tit");
        // console.log(bottomTit);

        bottomTit.style.transition = "2s";
        bottomTit.style.opacity = "1";
      }, 1000);
    });
  } //// if ////
  else if (topval > 240) {
    items.forEach((ele) => {
      /* 카드펼치는 클래스빼기 */
      ele.classList.remove("on");

      setTimeout(() => {
        let bottomTit = document.querySelector(".bottom-Tit");
        // console.log(bottomTit);

        bottomTit.style.transition = "2s";
        bottomTit.style.opacity = "0";
      }, 1000);
    });
  }
} ////// moveFn 함수

/* 스페셜매장 영역 커서효과 */
storeBox.onmouseenter = () => {
  tg.style.scale = "1.2";
};
storeBox.onmouseleave = () => {
  tg.style.scale = "1";
};
/******************************************** 
  [ 스패셜매장 개별박스 마우스엔터시 커서 스케일+그림자
   + 나머지박스 암전환 ]
 *******************************************/
items.forEach((ele) => {
  ele.onmouseenter = () => {
    tg.style.scale = "1.5";
    tg.style.boxShadow = "inset 0px 0px 15px 5px #bdff38";

    /* 개별 items에 마우스올릴시 전체 items효과  */
    for (x of items) {
      x.style.filter = "grayscale(5) brightness(0.5)";
    }
    ele.style.filter = "none";
  };

  ele.onmouseleave = () => {
    tg.style.scale = "1.2";
    tg.style.boxShadow = "none";

    /* 개별 items에 마우스아웃시 전체 items효과  */
    for (x of items) {
      x.style.filter = "none";
    }
  };
});
