// 폰트어썸 불러오기
import { faLaptop,faUserSecret,faCamera } from "@fortawesome/free-solid-svg-icons";
import { faInstagram,faFacebook,faTwitter,faYoutube,} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// 리액트 모듈 불러오기
import {useContext, useEffect, useState } from "react";
// 햄버거 기능 불러오기
import hamFn from "../func/ham";


// 상단영역 컴포넌트 ///////

export default function TopArea() {


//랜더링후 실행구역 ///////////////
useEffect(() => {
  hamFn();
},);


  // 코드 리턴구역 /////
  return (
    <div id="top-area">
      <header className="top-area inbox common-area">
        <h2 className="temp-tit">1. 상단영역</h2>
        <div className="cont-box">
          {/* GNB박스  */}
          <nav className="gnb col-4">
            <ul>
              <li className="ham">
                <span></span>
                <span></span>
                <span></span>
              </li>
              {/* 전체메뉴박스  */}
              <nav className="hambox">
                <ul>
                  <li>
                    <a href="###">PENHALIGON'S</a>
                  </li>
                  <li className="main-menu">
                    <a href="###">SHOP▶</a>
                    <ol className="sub-menu">
                      <li>
                        <a href="###">FRAGRANCES</a>
                      </li>
                      <li>
                        <a href="###">BATH &amp; BODY</a>
                      </li>
                      <li>
                        <a href="###">HOME</a>
                      </li>
                      <li className="main-menu">
                        <a href="###">COLLECTIONS</a>
                      </li>
                      <li>
                        <a href="###">GIFTING</a>
                      </li>
                      <li>
                        <a href="###">ALL</a>
                      </li>
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
          <h1 className="logo col-4">
            <a href="###">
              <img src="./images/logo.png" alt="메인로고" />
            </a>
          </h1>
          {/* 상단메뉴  */}
          <div className="tmenu col-4">
            {/* sns박스  */}
            <div className="sns">
              <a href="###" title="인스타그램">
                <FontAwesomeIcon icon={faInstagram} />
                <span className="ir">인스타그램</span>
              </a>
              <a href="###" title="페이스북">
                <FontAwesomeIcon icon={faFacebook} />
                <span className="ir">페이스북</span>
              </a>
              <a href="###" title="트위터">
                <FontAwesomeIcon icon={faTwitter} />
                <span className="ir">트위터</span>
              </a>
              <a href="###" title="유튜브">
                <FontAwesomeIcon icon={faYoutube} />
                <span className="ir">유튜브</span>
              </a>

              <a href="###" title="로그인">
                <FontAwesomeIcon icon={faLaptop} />
                <span className="ir">로그인</span>
              </a>
              <a href="###" title="회원가입">
                <FontAwesomeIcon icon={faUserSecret} />
                <span className="ir">회원가입</span>
              </a>
              <a href="###" title="갤러리">
                <FontAwesomeIcon icon={faCamera} />
                <span className="ir">갤러리</span>
              </a>
            </div>
            {/* 사이드메뉴  */}
            <div className="sideMenu">
              <ul className="sidebox">
                <li>
                  <a href="###">
                    <img
                      src="./images/icon/icon-search-menu.png"
                      alt="search"
                    />
                  </a>
                </li>
                <li>
                  <a href="###">
                    <img src="./images/icon/icon-user-menu.png" alt="member" />
                  </a>
                  {/* 서브메뉴  */}
                  <ol className="smsub hidden">
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
                    <img src="./images/icon/icon-bag-menu.png" alt="search" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
} ///////// TopArea 컴포넌트 ///////////

/* 
  map()을 사용하여 태그를 생성할때
  데이터의 유일키를 key속성으로 만들지 않으면
  아래와 같은 에러가 발생함!
  (이유:구별되는 항목으로 나중에 업데이트시
      이용할 수 있도록 리액트에서 강제하고 있음!)
  Warning: Each child in a list 
  should have a unique "key" prop.
  */
