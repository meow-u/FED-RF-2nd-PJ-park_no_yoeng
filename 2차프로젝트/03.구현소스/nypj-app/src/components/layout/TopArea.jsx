// 라우터용 링크 불러오기
// 네비게이트메서드 ( 라우터주소,{state:{보낼객체}} ) 사용위해 import
// 받을곳에서 useLocation import하고 loc.state.보낸객체명 으로 받으면 됨!
import { Link, useNavigate } from "react-router-dom";
import { Con } from "../modules/myCon";

// 아이콘 불러오기 (추가로 필요한 import는 데이터화로 main_data.js 상단에 있음)
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket, faSearch } from "@fortawesome/free-solid-svg-icons";

// 리액트 모듈 불러오기
import { useContext, useEffect } from "react";
// 햄버거, 커서 fn 불러오기
import hamFn from "../func/ham";
import cursorFn from "../func/cursor";
// gnb 데이터
import { menu, hamMenu, snsMenu, sideMenu } from "../data/main_data";
// 상단영역 css 불러오기
import "../../css/top_area.scss";
// 제이쿼리불러오기
import $ from "jquery";

// 상단영역 컴포넌트 ///////

export default function TopArea({ scrollFn }) {
  const myCon = useContext(Con);

  // scrollFn은 부모로부터 받은 함수
  // 이동함수
  const goNav = useNavigate();

  // 검색박스 보이기/숨기기 함수
  const showSearch = (e) => {
    console.log("클릭됐다!");
    //기본기능막기
    e.preventDefault();
    $(".input").focus();
    // 아이콘 숨기고 포인터 막기
    $(".searchicon").css("opacity", "0").css("pointer-events", "none");
    // 검색박스 보이고 애니메이션
    $(".search-box").css("opacity", "1");
    $(".search-box").css("animation", "box-ani 0.5s linear 0s forwards");
  };
  const hideSearch = (e) => {
    // 아이콘 보이고 포인터 허용
    $(".searchicon").css("opacity", "1").css("pointer-events", "auto");
    // 검색박스 숨기고 애니메이션 초기화
    $(".search-box").css("opacity", "0");
    setTimeout(() => {
      $(".search-box").css("animation", "none");
    }, 500);
  };

  // 탑메뉴 휠 위아래에 따라 보이기/숨기기 함수
  const TopMenuFn = () => {
    window.addEventListener("wheel", (e) => {
      if (e.deltaY > 0) {
        // console.log("아래로 스크롤발생값",e.deltaY);
        $("#top-area").css("transform", "translateY(-100%)");
      } else {
        // console.log("위로 스크롤발생값",e.deltaY);
        $("#top-area").css("transform", "translateY(0%)");
      }
    });

    window.addEventListener("scroll", () => {
      let innerHeight = window.innerHeight; // 100vh
      // console.log("스크롤위치누적값", window.scrollY);

      // 탑메뉴 스크롤위치가 0이면 다시 보이기
      if (window.scrollY <= 0) {
        $("#top-area").css("transform", "translateY(0%)");
      }

      // 스크롤위치가 100vh보다 크면 버튼 보이기
      if (window.scrollY < innerHeight) {
        $(".fixed").css("opacity", "0");
        $(".fixed").css("pointer-events", "none");
      } else if (window.scrollY >= innerHeight) {
        $(".fixed").css("opacity", "1");
        $(".fixed").css("pointer-events", "auto");
      }
    });
  };

  // 검색창에 엔터키 누르면 검색함수 호출
  const enterKey = (e) => {
    // console.log(e.key);
    let txt = $(".input").val().trim();
    if (e.key === "Enter") {
      $("html,body").animate(
        {
          scrollTop: $(".main-wrap").offset().top - 75 + "px",
        },
        400
      );
      console.log("난top-area input값!", txt);

      if (txt != "") {
        //검색어가 비어있지 않다면
        // 검색메뉴로 이동
        goSearch(txt);
        // 값 비우고 검색창 숨기기
        $(".input").val("");
        hideSearch();
      } else {
        alert("검색어를 입력해주세요.");
      }
    }
  }; //////// enterkey ////////////

  // 검색메뉴로 넘어가는 함수
  const goSearch = (txt) => {
    console.log("검색메뉴로 이동!");
    // 네비게이트메서드 ( 라우터주소,{state:{보낼객체}} )
    goNav("/search", { state: { keyword: txt } });
  };

  //랜더링후 실행구역 ///////////////
  useEffect(() => {
    hamFn();
    cursorFn();
    TopMenuFn();

    // 뒤로가기, 탑으로가기 버튼 클릭시 a이벤트 막기
    $(".fixbtn").on("click", (e) => {
      e.preventDefault();
    });
  }, []); //useEffect

  // 로그인여부에따라 탑 메뉴 필터링
  const loginStsMenu = myCon.loginSts === null ? sideMenu : sideMenu.slice(0, 2);

  // 코드 리턴구역 /////
  return (
    <>
      <div className="cursor">
        <img src={process.env.PUBLIC_URL + "/images/cursur.png"} alt="" />
      </div>
      <button className="fixed">
        <div className="wrap">
          <a className="fixbtn" href="" onClick={(e) => window.history.back()}>
            <span>BACK /</span>
          </a>

          <a
            className="fixbtn"
            href=""
            onClick={(e) => $("html,body").animate({ scrollTop: "0px" }, 400)}
          >
            <span>TOP</span>
          </a>
        </div>
      </button>
      <div id="top-area">
        <header className="top-area inbox common-area">
          {/* 로그인 환영메시지 박스 */}
          <div className="logmsg">{myCon.loginMsg}</div>
          <h2 className="temp-tit">1. 상단영역</h2>

          <div className="cont-box">
            {/* GNB박스  */}
            <nav className="gnb col-4">
              <ul>
                <li className="ham" onClick={hideSearch}>
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
                              v.txt === "PENHALIGON'S"
                                ? { data: "brand", num: 0 }
                                : {}
                            }
                          >
                            {v.txt}
                          </Link>
                          {v.sub && (
                            <ol className="sub-menu">
                              {v.sub.map((v, i) => (
                                <li key={i}>
                                  {v.txt !== "BACK" ? (
                                    <Link to={v.link}>{v.txt}</Link>
                                  ) : (
                                    <a
                                      href="###"
                                      onClick={(e) => e.preventDefault()}
                                    >
                                      {v.txt}
                                    </a>
                                  )}
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
                    <Link className="menu" to={v.link} 
                    state={v.link === "/Shop" && {smenu:null}}>
                      {v.txt}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* 로고박스  */}
            <h1 className="logo col-4">
              <Link to="/" onClick={scrollFn}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/logo.png`}
                  alt="메인로고"
                />
                <img
                  className="mobile"
                  src={`${process.env.PUBLIC_URL}/images/footer_logo.png`}
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
                  {loginStsMenu.map((v, i) => (
                    <li key={i}>
                      <Link
                        to={v.link}
                        className={i === 0 ? "searchicon" : ""}
                        onClick={i === 0 ? showSearch : null}
                        title={v.txt}
                      >
                        <FontAwesomeIcon icon={v.icon} />
                        <span className="ir">{v.txt}</span>
                      </Link>
                      {i === 0 && ( // 검색 아이콘일 때만 추가 출력
                        <div className="search-box">
                          <div className="search-icon" onClick={hideSearch}>
                            <FontAwesomeIcon icon={faSearch} />
                          </div>
                          <input
                            onKeyUp={enterKey}
                            className="input"
                            type="text"
                            placeholder="Filter by keyword"
                          />
                        </div>
                      )}
                    </li>
                    
                  ))}
                    {
                     /* 로그인 상태이면 로그아웃 버튼보이기 */
                     myCon.loginSts !== null && (
                        <>
                           <li>
                              <a
                                 href="###"
                                 title="로그아웃"
                                 onClick={(e) => {
                                    // 기본이동막기
                                    e.preventDefault();
                                    // 로그아웃 처리함수 호출
                                    myCon.logoutFn();
                                 }}
                              >
                                <FontAwesomeIcon icon={faRightToBracket} />
                              </a>
                           </li>
                        </>
                     )
                  }
                </ul>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
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

// import { ReactComponent as Lodingani } from "../data/loading_icon.svg";
// <Lodingani className="loadingicon"/>  svg를 컴포넌트처럼 쓸수있음
