// 공통요소 데이터 객체 - common_data.js
const comData = {
// 1. 상단영역 코드
topArea:`
      <header class="top-area inbox">
        <h2 class="temp-tit">1. 상단 영역</h2>
        <!-- 1-1. 탑메뉴 -->
        <aside class="tmenu-box">
          <ul class="tmenu fbx fxw">
            <li><a href="#">Sign In</a></li>
            <li><a href="#">My Starbucks</a></li>
            <li><a href="#">Customer Service &amp; Ideas</a></li>
            <li><a href="#">Find a Store</a></li>
          </ul>
        </aside>
        <!-- 1-2. 메인로고 -->
        <h1 class="logo inbox">
          <a href="#">
            <img src="./images/logo.png" alt="세이렌 로고" />
          </a>
          <a href="index.html">
            <img src="./images/toplogo_letter.png" alt="Starbucks로고" />
          </a>
          <div class="wrap-box inbox">
            <div class="logo-wrap n01">
              <div class="box b01">
                <h2>Starbucks story</h2>
                <p>
                  스타벅스 코리아는 1999년 이대 1호점을시작으로<br />
                  국내에새로운 커피 문화를 소개하며, <br />다양한 이해관계자들과
                  지역사회를 배려하는<br />사회적책임과 성장을 함께 추구하고
                  있습니다.<br /><br />오늘날 스타벅스는 <br />전세계 각국에서
                  수만여 명의 파트너들이 근무하는 <br />세계 최고의 커피 전문
                  회사로, <br /><br />최상급 아라비카 원두의 윤리적 구매와<br />
                  50년 이상의전문적 로스팅 기술과 철저한 품질관리로
                  <br /><br />특별한 스타벅스의 경험과 문화를<br />
                  한잔의커피와 함께 제공합니다.
                </p>
              </div>
            </div>
            <div class="logo-wrap n02">
              <div class="box b02">
                <h2>Starbucks story</h2>
                <p>
                  스타벅스 코리아는 1999년 이대 1호점을시작으로<br />
                  국내에새로운 커피 문화를 소개하며, <br />다양한 이해관계자들과
                  지역사회를 배려하는<br />사회적책임과 성장을 함께 추구하고
                  있습니다.
                </p>
                <div class="sns-box">
                   <!-- make_html.js로 출력 -->
                </div>
              </div>
            </div>
          </div>
          <div class="wrap-box inbox">
            <div class="logo-wrap n03"></div>
          </div>
        </h1>
        <!-- 1-3. GNB메뉴 -->
        <span class="inbox">
          <nav class="gnb">
            <ul class="gnb fbx">
                <!-- make_html.js로 출력 -->
            </ul>
          </nav>
        </span>
      </header>
`,
// 2. 배너영역 코드
banArea:`
      <section class="ban-area inbox">
        <h2 class="temp-tit">2. 롤링배너 영역</h2>
        <div class="visualView">
          <div class="bg img1">
            <span
              >Speacial<br />
              'BEAN'
              <p>
                최상급 아라비카 원두와<br />50년 이상의 전문적인 로스팅 기술을
                통해 <br /><br />최상의 풍미를 선사합니다.
              </p>
              <a href="sub1_coffeeBean.html">MORE VIEW</a></span
            >
          </div>
          <div class="bg img2 center">
            <span
              >Speacial Place<br />
              'RESERVE'
              <p>
                다채로운 풍미를 가진 최고 품질의 원두,<br />
                다양한 추출 방식,<br /><br />
                여기에 커피 전문가의 이야기를 더해 <br />
                특별한 경험을 제공합니다.
              </p>
              <a href="#reserve-area">MORE VIEW</a></span
            >
          </div>
          <div class="bg img3">
            <span
              >Starbucks<br />
              'COFFEE'
              <p>
                <strong>'커피 이상의 특별한 경험'</strong><br /><br />
                세계인들의 생활 속에 스며들어 <br />전 세계의 커피 문화를
                선도하는 스타벅스의 커피를 소개합니다.
              </p>
              <a href="sub2_drink.html">MORE VIEW</a></span
            >
          </div>
        </div>
        <div class="bg-arr">
          <button class="arr1"><p>&lt;</p></button>
          <button class="arr2"><p>&gt;</p></button>
        </div>
      </section>
`,
// 2. 라인안내영역 코드
lineNoticeArea:`
      <section class="line-notice-area inbox">
        <h2 class="temp-tit">3. 라인안내 영역</h2>
        <div class="cont-box">
          <div class="col-6">
            <h2>공지사항</h2>
            <p>서비스 개선 및 서비스 점검안내</p>
            <a href="#"
              ><img src="./images/btn_notice_plus.png" alt="add-icon"
            /></a>
          </div>
          <div class="col-6">
            <h2>프로모션</h2>
            <p>진행중인 이벤트안내</p>
            <a href="#"
              ><img src="./images/btn_prom_down.png" alt="down-arrow-icon"
            /></a>
          </div>
        </div>
      </section>
`,

// 4. 하단영역 코드
footerArea:`
      <footer class="footer-area inbox">
        <h2 class="temp-tit">9. 하단영역</h2>
        <div class="cont-box">
          <div class="col-12">
            <div class="footer cont1">
              <img src="./images/footer_logo.png" alt="하단 스타벅스 로고" />
            </div>
            <div class="footer cont2">
              <!-- make_html.js로 출력 -->
            </div>
          </div>
        </div>
      </footer>
`,

}; /////////////// comData 객체 ///////////////

export default comData;