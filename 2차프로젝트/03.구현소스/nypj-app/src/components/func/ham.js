// 1. 대상요소
const hamFn = () => {
   const ham = document.querySelector(".ham"); // 햄버거 메뉴 버튼
   const hambox = document.querySelector(".hambox"); // 숨긴 전체 메뉴 박스
   const Allmenu = document.querySelectorAll(".hambox>ul>li>a"); // 메인 메뉴 항목
   const submenu = document.querySelector(".sub-menu"); // 서브 메뉴

   // 2. 필수 요소가 없으면 함수를 종료
   if (!ham || !hambox || !submenu) {
      console.error("필수 요소를 찾을 수 없습니다.");
      return;
   }

   // 3. 햄버거 메뉴 버튼 클릭 이벤트
   let isHamClick = false;
   ham.onclick = () => {
    // 
   //  console.log("클릭");
    if(ham.classList.contains("on")){
      // console.log("on있음");
     if(isHamClick)return;
    isHamClick = true;
   //  console.log("false>true변경");
    setTimeout(() => {
      isHamClick = false;
      // console.log("0.7초후 false로 변경");
    }, 700);
  }else if (!ham.classList.contains("on")){
   // console.log("on없음");
    if(isHamClick)return;
    isHamClick = true;
      // console.log("false>true변경");
    setTimeout(() => {
      isHamClick = false;
      // console.log("2초후 false로 변경");
    }, 2000);

  }



      document.body.style.height = "100%"; // 모바일에서 메뉴 열렸을 때 body 높이 조정
      // // 햄버거 메뉴가 닫힐 때
      toggleMenu(); // 메뉴 여닫기
      // console.log("햄버거on토글!");
   };

   // 4. 메인 메뉴 항목 클릭 이벤트
   Allmenu.forEach((el) => {
      const txt = el.innerText; // 메뉴 항목의 텍스트
      el.onclick = () => {
         if (txt === "SHOP▶") {
            // SHOP 메뉴 항목 클릭 시
            const subA = submenu.querySelectorAll("li>a"); // 서브 메뉴 링크
            subA.forEach((a) => {
               // 보여지기위해 back클릭시 설정된 css 초기화

               a.style.display = ""; // 서브 메뉴 링크 표시
               setTimeout(() => {
                  a.style.transition = "";
                  a.style.transform = "";
               });
            });
            submenu.classList.add("on"); // 서브 메뉴 보이기

            // 메인 메뉴 링크 숨기기
            const a = hambox.querySelectorAll(".on>ul>li>a"); // 메인 메뉴 링크
            a.forEach((a) => {
               a.style.transition = "transform 0.5s";
               a.style.transform = "translateY(100%)"; // 메인 메뉴 숨기기
            });
         } else {
            toggleMenu(); // 다른 메뉴 항목 클릭 시 메뉴 여닫기
         }
      };
   });

   // 5. 서브 메뉴 링크 클릭 이벤트
   const subA = document.querySelectorAll(".sub-menu>li a");
   subA.forEach((el) => {
      el.onclick = (e) => {
         const txt = e.target.innerText; // 클릭한 서브 메뉴 링크 텍스트
         if (txt === "BACK") {
            // BACK 링크 클릭 시 서브 메뉴 숨기기

            const subA = submenu.querySelectorAll("li>a"); // 서브 메뉴 링크
            subA.forEach((a) => {
               a.style.transition = "transform 0.5s";
               a.style.transform = "translateY(100%)";
               a.style.display = "none"; // 서브 메뉴 숨기기
            });

            const a = hambox.querySelectorAll(".on>ul>li>a"); // 메인 메뉴 링크
            a.forEach((a) => {
               a.style.transition = "transform 0.3s";
               a.style.transform = "translateY(0)"; // 메인 메뉴 보이기
            });
         } else if (txt !== "BACK") {
            // 다른 서브 메뉴 링크 클릭 시
            e.stopPropagation(); // 이벤트 전파 중지 (없으면 메인 메뉴 항목 클릭 이벤트가 같이 발생하여 class remove가 제대로 동작하지 않음)
            submenu.classList.remove("on"); // 서브 메뉴 숨기기
            toggleMenu(); // 메뉴 여닫기
         }
      };
   });

   // 6. 메뉴 여닫기 함수
   function toggleMenu() {
      ham.classList.toggle("on"); // 햄버거 버튼 on/off 클래스 토글
      hambox.classList.toggle("on"); // 햄버거 메뉴 박스 on/off 클래스 토글
      if (!ham.classList.contains("on")) {
         // 햄버거 메뉴가 닫힐 때
         document.querySelector(".tmenu.col-4").style.opacity = "1"; // 상단 메뉴 보이기
         // 상단메뉴 포인트이벤트 초기화
         document.querySelector(".tmenu.col-4").style.pointerEvents = "auto";

         const a = hambox.querySelectorAll("ul>li>a"); // 메인 메뉴 링크
         a.forEach((a) => {
            a.style = ""; // 메인 메뉴 링크 스타일 초기화
            submenu.classList.remove("on"); // 서브 메뉴 숨기기
         });
      } else {
         // 햄버거 메뉴가 열릴 때
         document.querySelector(".tmenu.col-4").style.opacity = "0"; // 상단 메뉴 숨기기
         // 상단메뉴 포인트이벤트 초기화
         document.querySelector(".tmenu.col-4").style.pointerEvents = "none";
      }
   }
};
export default hamFn;
