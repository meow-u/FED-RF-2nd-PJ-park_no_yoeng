// 하단영역 컴포넌트 ///////

// 하단영역 css 불러오기
import "../../css/footer_area.scss";
// 하단영역 데이터 불러오기
import {footerMenu} from "../data/main_data.js"

export default function FooterArea() {
  // 코드 리턴구역 /////
  return (
    <div id="footer-area">
      <footer className="footer-area inbox common-area">
        <h2 className="temp-tit">하단영역</h2>
        <div className="cont-box">
          {/* 하단로고  */}
          <div className="blogo col-4">
            <img src="/images/footer_logo.png" alt="하단로고" />
          </div>
          {/* 하단링크  */}
          <div className="link-box1 col-3">
            <h3>SERVICES</h3>
            <ul className="link">
             {footerMenu.SERVICES.map((v,i)=>
              <li key={i}>
                <a href={v.link}>{v.txt}</a>
              </li>
            )}
            </ul>
          </div>
          <div className="link-box2 col-3">
            <h3>ABOUT US</h3>
            <ul className="link">
            {footerMenu.ABOUTUS.map((v,i)=>
              <li key={i}>
                <a href={v.link}>{v.txt}</a>
              </li>
            )}
            </ul>
          </div>
          {/* 회사주소  */}
          <address className="addr col-12">
            <h4>www.penhaligons.com Ⓒ PENHALIGON'S. ALL RIGHTS RESERVED.</h4>
          </address>
        </div>
      </footer>
      {/* 위로가기버튼  */}
      <a href="###" className="tbtn fi fi-angle-up">
        <span className="ir">위로가기버튼</span>
      </a>
    </div>
  );
} ///////// FooterArea 컴포넌트 ///////////
