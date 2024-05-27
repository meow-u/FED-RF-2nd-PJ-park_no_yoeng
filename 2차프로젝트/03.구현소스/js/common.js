// 공통 JS
// import mFn from "./my_function";
/******************** 상단영역 ********************/
// 1.대상선정: .ham(이벤트/변경), .hambox(변경)
const ham = document.querySelector(".ham");
const hambox = document.querySelector(".hambox");
// 하위 메뉴가 있는 li요소
const menu = document.querySelectorAll(".main-menu");
// 하위 메뉴  ol 요소

const submenu = document.querySelector(".sub-menu");
console.log(ham, menu, submenu);

// 2.이벤트설정
ham.onclick = () => {
  // 햄버거버튼 on넣기/빼기
  ham.classList.toggle("on");
  // HAMBOX on넣기/빼기
  hambox.classList.toggle("on");
  if (!ham.classList.contains("on")) {
    // 햄버거 닫을때
    // 기존메뉴 보이기
    const a = hambox.querySelectorAll("ul>li>a");
    a.forEach((a) => {
      // 원래 css로 복귀
      a.style = "";
      // 서브메뉴 닫기
      submenu.classList.remove("on");
    });
  }
}; /////////// click /////////////

menu.forEach((el) => {
  const txt = el.querySelector("a").innerText;
  el.onclick = () => {
    if (txt === "SHOP▶" || txt === "COLLECTIONS") {
      console.log("클릭", txt);
      //서브 메뉴 보이기/숨기기(common.js-94line에서 처리)
      // el.classList.toggle("on");
      // 서브메뉴 보이기
      console.log("submenu", submenu);

      submenu.classList.add("on");
      const a = hambox.querySelectorAll(".on>ul>li>a");

      // 기존메뉴 숨기기
      a.forEach((a) => {
        a.style.transition = "transform 0.3s";
        a.style.transform = "translateY(100%)";
      });
    }
  };
});

// 3.서브메뉴ol의 자식인 li>a 클릭시 햄버거 닫고 기존메뉴 보이기
const subA = document.querySelectorAll(".sub-menu>li>a");
subA.forEach((el) => {
  el.onclick = (e) => {
    console.log("서브메뉴클릭subA", subA);
    // 서브메뉴 안보이기
    submenu.classList.remove("on");
    // 이벤트 전파 중지
    // ->>.sub-menu를 숨기려고 해도 다른 상위 요소(menu)에서 클릭이벤트가 발생

    e.stopPropagation();

    // 햄버거버튼 on넣기/빼기
    ham.classList.toggle("on");
    // HAMBOX on넣기/빼기
    hambox.classList.toggle("on");
    if (!ham.classList.contains("on")) {
      // 햄버거 닫을때
      // 기존메뉴 보이기
      const a = hambox.querySelectorAll("ul>li>a");
      a.forEach((a) => {
        // 원래 css로 복귀
        a.style = "";
      });
    }
  };
});
/******************** 배너영역 ********************/
(() => {
  // 1. 대상 선정: .ban-box
  const ban = document.querySelector(".ban-box");
  console.log(ban);

  // 2. 이벤트 설정: 슬라이드 이동
  // 1) 변수: 현재 슬라이드 번호
  let snum = 0;
  let left = 0;

  // 2) 함수: 슬라이드 함수
  const slideGo = () => {
    // 2. 슬라이드 번호 증가
    snum++;
    // 3. 슬라이드 개수만큼 번호 초기화
    if (snum === ban.children.length) {
      snum = 0;
      left = 0;
      ban.style.left = `${left}%`; // .ban-box의 left 값 변경
    }

    // 첫번째 슬라이드를 마지막으로 이동
    ban.appendChild(ban.children[0]);
    ban.children.forEach((el) => {
      el.classList.remove("ani");
     el[0].classList.add("ani");
    });
  };

  left -= 100;
  ban.style.left = `${left}%`; // .ban-box의 left 값 변경
  ///////// slideGo함수 //////////

  // 3) 함수 호출: 슬라이드 함수
  setInterval(slideGo, 3000);
})();
/******************** 하단영역 ********************/
