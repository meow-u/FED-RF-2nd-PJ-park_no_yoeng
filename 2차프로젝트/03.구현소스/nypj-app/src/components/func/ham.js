const hamFunction = () => {
  const ham = document.querySelector(".ham");
  const hambox = document.querySelector(".hambox");
  const menu = document.querySelectorAll(".main-menu");
  const submenu = document.querySelector(".sub-menu");

  // 필수 요소가 없으면 함수 나가기 
  //(혹시 오류가 생기더라도 페이지는 안깨지게 하기 위함)
  
  if (!ham || !hambox || !submenu) {
    console.error("필수 요소를 찾을 수 없습니다.");
    return;
  }


    // 햄버거 버튼 클릭 이벤트
    ham.onclick = () => {
      // 윈도우 스크롤 이벤트 막기
      document.body.style.height = "100%";

      // 햄버거 버튼 on 넣기/빼기
      ham.classList.toggle("on");
      // HAMBOX on 넣기/빼기
      hambox.classList.toggle("on");

      if (!ham.classList.contains("on")) {
        // 햄버거 닫을 때 기존 메뉴 보이기
        const a = hambox.querySelectorAll("ul>li>a");
        a.forEach((a) => {
          // 원래 css로 복귀
          a.style = "";
          // 서브메뉴 닫기
          submenu.classList.remove("on");
        });
      }
    };

    menu.forEach((el) => {
      const txt = el.querySelector("a").innerText;
      el.onclick = () => {
        if (txt === "SHOP▶" || txt === "COLLECTIONS") {
          console.log("클릭", txt);
          // 서브 메뉴 보이기/숨기기
          submenu.classList.add("on");
          const a = hambox.querySelectorAll(".on>ul>li>a");

          // 기존 메뉴 숨기기
          a.forEach((a) => {
            a.style.transition = "transform 0.3s";
            a.style.transform = "translateY(100%)";
          });
        }
      };
    });

    // 서브메뉴 ol의 자식인 li>a 클릭시 햄버거 닫고 기존 메뉴 보이기
    const subA = document.querySelectorAll(".sub-menu>li>a");
    subA.forEach((el) => {
      el.onclick = (e) => {
        console.log("서브메뉴클릭subA", subA);
        // 서브메뉴 안보이기
        submenu.classList.remove("on");
        // 이벤트 전파 중지
        e.stopPropagation();

        // 햄버거 버튼 on 넣기/빼기
        ham.classList.toggle("on");
        // HAMBOX on 넣기/빼기
        hambox.classList.toggle("on");

        if (!ham.classList.contains("on")) {
          // 햄버거 닫을 때 기존 메뉴 보이기
          const a = hambox.querySelectorAll("ul>li>a");
          a.forEach((a) => {
            // 원래 css로 복귀
            a.style = "";
          });
        }
      };
    });

};

export default hamFunction;
