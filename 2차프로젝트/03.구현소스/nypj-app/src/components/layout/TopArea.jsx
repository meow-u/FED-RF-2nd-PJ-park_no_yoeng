// 라우터용 링크 불러오기
import { Link } from "react-router-dom";

// 아이콘 불러오기 (추가로 필요한 import는 데이터화로 main_data.js 상단에 있음)
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// 리액트 모듈 불러오기
import { useContext, useEffect, useState } from "react";
// 햄버거, 커서 fn 불러오기
import hamFn from "../func/ham";
import cursorFn from "../func/cursor";
// gnb 데이터
import { menu, hamMenu, snsMenu, sideMenu } from "../data/main_data";
// 상단영역 css 불러오기
import "../../css/top_area.scss";

// 상단영역 컴포넌트 ///////

export default function TopArea() {
  //랜더링후 실행구역 ///////////////
  useEffect(() => {
    hamFn();
    cursorFn();
  });

  // 코드 리턴구역 /////
  return (
    <div id="top-area">
      <header className="top-area inbox common-area">
        <h2 className="temp-tit">1. 상단영역</h2>
        <div className="cursor">
          <img src={"/images/cursur.png"} alt="" />
        </div>
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
              <li>
                <nav className="hambox">
                  <ul>
                    {hamMenu.map((v, i) => (
                      <li
                        className={v.link === "/Shop" ? "main-menu" : ""}
                        key={i}
                      >
                        <Link
                          to={v.link}
                          state={
                            v.txt == "PENHALIGON'S"
                              ? { data: "brand", num: 0 }
                              : {}
                          }
                        >
                          {v.txt}
                        </Link>
                        {v.sub && (
                          <ol className="sub-menu">
                            {v.sub.map((v2, i2) => (
                              <li key={i2}>
                                {/* useState로 전환예정*/}
                                <a href="###">{v2.txt}</a>
                                {/* <Link to={v2.link}>{v2.txt}</Link> */}
                              </li>
                            ))}
                          </ol>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </li>
              {/* Gnb메뉴 데이터 배열로 만들기 */}
              {menu.map((v, i) => (
                <li key={i}>
                  {/* link to -> 라우터에서 a링크대신 지원함 */}
                  <Link className="menu" to={v.link}>
                    {v.txt}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* 로고박스  */}
          <h1 className="logo col-4">
            <Link to="/">
              <img src="/images/logo.png" alt="메인로고" />
              <img
                className="mobile"
                src="/images/footer_logo.png"
                alt="메인로고"
              />
            </Link>
          </h1>
          {/* 상단메뉴  */}
          <div className="tmenu col-4">
            {/* sns박스  */}
            <div className="sns">
              {snsMenu.map((v, i) => (
                <a key={i} href={v.link} title={v.txt}>
                  <FontAwesomeIcon icon={v.icon} />
                  <span className="ir">{v.txt}</span>
                </a>
              ))}
            </div>
            {/* 사이드메뉴  */}
            <div className="sideMenu">
              <ul className="sidebox">
                {sideMenu.map((v, i) => (
                  <li key={i}>
                    <a href={v.link} title={v.txt}>
                      <FontAwesomeIcon icon={v.icon} />
                      <span className="ir">{v.txt}</span>
                    </a>
                  </li>
                ))}
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
