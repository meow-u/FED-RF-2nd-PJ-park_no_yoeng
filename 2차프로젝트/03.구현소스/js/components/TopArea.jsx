// 상단영역 컴포넌트 ///////

export default function TopArea() {}

  window.addEventListener("DOMContentLoaded", () => {
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

  }); //////////////////// 로딩구역 ///////////////////
    
    // 코드 리턴구역 /////
    return (
      <React.Fragment>
        
      <header class="top-area inbox common-area">
        <h2 class="temp-tit">1. 상단영역</h2>
        <div class="cont-box">
           {/* GNB박스  */}
          <nav class="gnb col-4">
            <ul>
              <li class="ham">
                <span></span>
                <span></span>
                <span></span>
              </li>
               {/* 전체메뉴박스  */}
              <nav class="hambox">
                <ul>
                  <li>
                    <a href="###">PENHALIGON'S</a>
                  </li>
                  <li class="main-menu">
                    <a href="###">SHOP▶</a>
                    <ol class="sub-menu">
                      <li><a href="###">FRAGRANCES</a></li>
                      <li><a href="###">BATH &amp; BODY</a></li>
                      <li><a href="###">HOME</a></li>
                      <li class="main-menu">
                        <a href="###">COLLECTIONS</a>
                      </li>
                      <li><a href="###">GIFTING</a></li>
                      <li><a href="###">ALL</a></li>
                    </ol>
                  </li>
                  <li>
                    <a href="###">OUR STORY</a>
                  </li>
                  <li>
                    <a href="###">COLLECTIONS</a>
                  </li>
                </ul>
              </nav>
              <li>
                <a href="###">SHOP</a>
              </li>
              <li>
                <a href="###">COLLECTIONS</a>
              </li>
              <li>
                <a href="###">OUR STORY</a>
              </li>
            </ul>
          </nav>

           {/* 로고박스  */}
          <h1 class="logo col-4">
            <a href="###">
              <img src="./images/logo.png" alt="메인로고" />
            </a>
          </h1>
           {/* 상단메뉴  */}
          <div class="tmenu col-4">
             sns박스 
            <div class="sns">
              <a href="###" class="fi fi-instagram" title="인스타그램">
                <span class="ir">인스타그램</span>
              </a>
              <a href="###" class="fi fi-facebook" title="페이스북">
                <span class="ir">페이스북</span>
              </a>
              <a href="###" class="fi fi-twitter" title="트위터">
                <span class="ir">트위터</span>
              </a>
              <a href="###" class="fi fi-youtube-play" title="유튜브">
                <span class="ir">유튜브</span>
              </a>

              <a href="###" class="fi fi-laptop" title="로그인">
                <span class="ir">로그인</span>
              </a>
              <a href="###" class="fi fi-user-secret" title="회원가입">
                <span class="ir">회원가입</span>
              </a>
              <a href="###" class="fi fi-camera" title="갤러리">
                <span class="ir">갤러리</span>
              </a>
              <a href="###" class="fi cas" title="카카오스토리">
                <span class="ir">카카오스토리</span>
              </a>
            </div>
             {/* 사이드메뉴  */}
            <div class="sideMenu">
              <ul class="sidebox">
                <li>
                  <a href="###">
                    <img src="./images/icon/icon-search-menu.png" alt="search"
                  /></a>
                </li>
                <li>
                  <a href="###">
                    <img src="./images/icon/icon-user-menu.png" alt="member" />
                  </a>
                   {/* 서브메뉴  */}
                  <ol class="smsub hidden">
                    <li>
                      <a href="###">LOGIN</a>
                    </li>
                    <li>
                      <a href="###">SIGN UP</a>
                    </li>
                    <li>
                      <a href="###">개인정보 처리방침</a>
                    </li>
                  </ol>
                </li>
                <li>
                  <a href="###">
                    <img src="./images/icon/icon-bag-menu.png" alt="search"
                  /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    
      </React.Fragment>
    );
  } ///////// TopArea 컴포넌트 ///////////
  