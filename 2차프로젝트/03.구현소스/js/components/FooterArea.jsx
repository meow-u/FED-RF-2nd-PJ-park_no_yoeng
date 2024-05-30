// 하단영역 컴포넌트 ///////

export default function FooterArea() {
  // 코드 리턴구역 /////
  return (
    <div id="footer-area">
      <footer className="footer-area inbox common-area">
        <h2 className="temp-tit">하단영역</h2>
        <div className="cont-box">
          {/* 하단로고  */}
          <div className="blogo col-4">
            <img src="./images/footer_logo.png" alt="하단로고" />
          </div>
          {/* 하단링크  */}
          <div className="link-box1 col-3">
            <h3>SERVICES</h3>
            <ul className="link">
              <li>
                <a href="###">CONSUMER SERVICES</a>
              </li>
              <li>
                <a href="###">DELIVERY &amp; RETURNS</a>
              </li>
              <li>
                <a href="###">TRACK MY ORDER</a>
              </li>
              <li>
                <a href="###">FAQS</a>
              </li>
              <li>
                <a href="###">KLARNA</a>
              </li>
              <li>
                <a href="###">E-GIFT CARDS</a>
              </li>
              <li>
                <a href="###">OLFACTIVE SOCIETY</a>
              </li>
              <li>
                <a href="###">COME RICICLARE</a>
              </li>
            </ul>
          </div>
          <div className="link-box2 col-3">
            <h3>ABOUT US</h3>
            <ul className="link">
              <li>
                <a href="###">PENHALIGON'S PHILOSOPHY</a>
              </li>
              <li>
                <a href="###">PENHALIGON'S PERKS</a>
              </li>
              <li>
                <a href="###">HERITAGE</a>
              </li>
              <li>
                <a href="###">STORES</a>
              </li>
              <li>
                <a href="###">CAREERS</a>
              </li>
              <li>
                <a href="###">GOVERNANCE</a>
              </li>
            </ul>
          </div>
          {/* 회사주소  */}
          <address className="addr col-12">
            <h4>www.penhaligons.com Ⓒ PENHALIGON'S. ALL RIGHTS RESERVED.</h4>
          </address>
        </div>
      </footer>
      {/* 위로가기버튼  */}
      <a href="###" class="tbtn fi fi-angle-up">
        <span class="ir">위로가기버튼</span>
      </a>
    </div>
  );
} ///////// FooterArea 컴포넌트 ///////////
