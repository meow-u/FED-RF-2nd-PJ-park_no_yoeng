// 상단영역 컴포넌트 ///////

export default function TopArea() {

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
             {/* sns박스  */}
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
  