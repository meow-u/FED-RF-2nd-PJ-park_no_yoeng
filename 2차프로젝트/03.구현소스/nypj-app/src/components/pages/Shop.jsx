// 펜할리곤스 Shop 서브페이지 컴포넌트

import React, { useEffect, useState } from "react";
import "../../css/_shop.scss";
import { Link } from "react-router-dom";
import MakeItemList from "../modules/make_itemList";
import SwiperItemSlide from "../plugin/SwiperItemSlide";
import $ from "jquery";

// 사용 데이터 가져오기 (타이틀데이터, 카테고리데이터, 카테고리별 텍스트데이터)
import { titleTxt, ctgList, ctgTxtData } from "../data/main_data";

// gnb 데이터
import { hamMenu, collMenu } from "../data/main_data";
import { Title } from "../modules/title";

let subMenu = hamMenu[1].sub; //서브메뉴 데이터

export default function Shop({ sMenu = "Shop" }) {
  // sMenu는 상위 컴포넌트에서 받아온 클릭된 서브메뉴 데이터
  // 하위메뉴를 클릭해서 들어오면 해당값으로 설정,  그냥 shop으로 들어왔을시 '초기값 "Shop"

  const [isSub, setIsSub] = useState(false); // 서브메뉴인지 여부
  // txt 값은 클릭시 내부 텍스트값으로 변경됨
  const [txt, setTxt] = useState(sMenu);
  // 정렬 상태변수
  const [sort, setSort] = useState("asc");

  // 전달값과 이전값이 같지 않으면 상태변수를 업데이트 해라!
  if(sMenu != txt) setTxt(sMenu);

  console.log("랜더링! 클릭된 sMenu :", sMenu);
  console.log("랜더링! txt:", txt);
    
  useEffect(() => {
    // 스크롤 이동
      $("html,body").animate(
        { scrollTop: $(".main-wrap").offset().top + "px" },
        400
      );
  });

  useEffect(() => {
    let menuBox = document.querySelector(".smenu-box");
    let li = menuBox.querySelectorAll("li");
    // console.log("모든 li(서브메뉴포함)", li);

    // 모든메뉴박스 li에 클릭이벤트 걸기
    li.forEach((el) =>
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        // 내부 a링크 클릭시 기본이벤트 막기
        e.preventDefault();
        // 컬렉션토글+상태변수변경함수 호출
        toggleCollection(el);
      })
    );
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행되도록 함

  useEffect(() => {
      // sMenu가 기본값이고 txt랑 비일치시 전역변수 맞추기
      if (sMenu === "Shop" && txt !== "Shop") {
        // 값 통일
        sMenu = txt;
        console.log("비일치로 sMenu 통일시킴!:", sMenu);

        if( sMenu === "British Tales" || sMenu === "Potions & Remedies" || sMenu === "Trade Routes" || sMenu === "Portraits" ){
          // 서브메뉴면 상태변수 변경 (아이템리스트 뿌릴때 필터에서 사용)
          setIsSub(true);
        }
        // 전역변수 리랜더링
        setTxt(sMenu);
      }
      // txt값이 컬렉션하위메뉴일때 서브메뉴여부 상태변수 변경
      if (txt === "British Tales" || txt === "Potions & Remedies" || txt === "Trade Routes" || txt === "Portraits") {
        console.log("컬렉션하위메뉴발견!", txt);
        
        setIsSub(true);
      } else {
        setIsSub(false);
      }

    window.addEventListener("resize", () => {
      // 리사이즈 발생시 컬렉션 클릭시 하위메뉴 높이 초기화
      let submenu = document.querySelector(".submenu");
      if (window.innerWidth <= 800) {
        // 모바일시 서브 닫힘상태
        submenu.style.height = "0px";

        // 초기 필터효과
        document.querySelector(".coll").style.filter = "invert(1)";
      } else {
        // 데스크탑시 서브 열림상태 (css 열린값 clamp(15px, 2vw, 4vw) 지정해두었음)
        if (submenu.style.height === "0px") {
          submenu.style.height = "";
          // 초기 필터효과 없애기
          document.querySelector(".coll").style.filter = "none";
        }
      }
      
    });

    // 리턴함수는 언마운트시 실행됨
    return () => window.removeEventListener("resize", () => {});
  }, [txt]); // txt 값이 변경될 때만 실행되도록 함

  // 컬렉션 메뉴 토글 + 클릭시 txt상태변수 변경 함수 ////////////////////////////////////
  function toggleCollection(el) {
    // 개별 li 클릭시 호출되는 함수( el은 개별 li)
    let a = el.querySelector("a"); // 각 li안의 이너텍스트를 포함한 개별 a링크
    let submenu = document.querySelector(".submenu"); // 서브메뉴 ol
    let toSetText; //전역변수

    console.log("클릭된 a:", a.innerText);

    if (a.innerText === "COLLECTIONS") {
      // 클릭된 메뉴가 컬렉션일때 높이토글  (하위보이게)
      if (window.innerWidth <= 800) {
        // 서브오픈여부(true 열림)
        let isSubOpen = submenu.style.height === "130px";
        // coll메뉴
        let coll = document.querySelector(".coll");

        submenu.style.height = isSubOpen ? "0" : "130px";
        // 서브메뉴 높이에 따라 coll 필터효과 변경 (클릭시점 기준)
        coll.style.filter = isSubOpen ? "invert(1)" : "invert(0)";
      } else {
        submenu.style.height = submenu.style.height === "" ? "0" : "";
      }
    }
    // 클릭된 메뉴가 컬렉션이 아닐때
    else {
      console.log("컬렉션이 아닌 메뉴 클릭됨!");
      // txt가 collMenu에 없으면 서브메뉴 닫기
      if (!collMenu.includes(a.innerText)) {
        // 모바읾나 만약 서브가 열려있다면 닫기

        if (window.innerWidth <= 800) submenu.style.height = "0";
      }
    }

    toSetText = a.innerText;
    // 클릭된 메뉴 내부 텍스트값으로 전역상태변수 변경
    setTxt(toSetText);

    // 서브메뉴 여부 전역상태변수 변경
    // 클릭된 각 li 부모 클래스가 submenu가 있으면 true (서브메뉴인지확인)
    setIsSub(el.parentElement.classList.contains("submenu"));
  } ///////////////////////////////////////////////////// ///////

  return (
    <>
      <div id="shop-area">
        <section className="shop-area inbox">
          <h2 className="temp-tit">shop</h2>
          <div className="cont-box">
            {/* 메뉴박스 */}
            <ul className="smenu-box">
              {subMenu.map((v, i) => {
                return i < 6 ? (
                  <li key={i}>
                    <a
                      className={v.txt === "COLLECTIONS" ? "coll" : null}
                      href="###"
                      style={v.txt === txt ? { fontWeight: "900" } : null}
                    >
                      {v.txt}
                    </a>
                    {v.txt === "COLLECTIONS" ? (
                      <ol className="submenu">
                        {collMenu.map((v, i) => (
                          <li key={i}>
                            <a
                              href="###"
                              style={v === txt ? { fontWeight: "bold" } : null}
                            >
                              {v}
                            </a>
                          </li>
                        ))}
                      </ol>
                    ) : null}
                  </li>
                ) : null;
              })}
            </ul>
          </div>
          {/* 맵박스 */}
          <ul className="map">
            <li>
              <Link to="/">MAIN</Link>
            </li>
            <li>
              {">"}
              <button
                onClick={() => {
                  // 클릭시 읽어온 서브메뉴데이터 다시 초기화 (shop기본 페이지)
                  sMenu = "Shop";
                  // 클릭시 전역변수 변경
                  setTxt(sMenu);
                }}
              >
                SHOP
              </button>
            </li>
            <li>
              {txt && txt !== "Shop" ? (
                <>
                  {" "}
                  <span>{">"}</span> <button>{txt}</button>
                </>
              ) : null}
            </li>
          </ul>
          {/* 메뉴별 이미지타이틀 */}
          {/* 타이틀 컴포넌트 */}
          <Title txtData={ctgTxtData} type={txt} />
          {/* 메뉴별 이미지출력 */}
          <div
            className="shop-img"
            style={{
              background: `url(${
                process.env.PUBLIC_URL +
                (txt === "FRAGRANCES"
                  ? "/images/sub_page/brand_detail1-1.jpg"
                  : txt === "BATH & BODY"
                  ? "/images/sub_page/collection_detail1-2.jpg"
                  : txt === "HOME"
                  ? "/images/sub_page/penhaligons_gift.jpg"
                  : txt === "COLLECTIONS"
                  ? "/images/products_65/5.png"
                  : txt === "British Tales"
                  ? "/images/sub_page/penhaligons_BritishTales.jpg"
                  : txt === "Potions & Remedies"
                  ? "/images/sub_page/collection_detail4-4.jpg"
                  : txt === "Trade Routes"
                  ? "/images/sub_page/collection_detail3-1.jpg"
                  : txt === "Portraits"
                  ? "/images/sub_page/collection_detail2-1.jpg"
                  : txt === "GIFTING"
                  ? "/images/box.jpg"
                  : // ALL이나 SHOP일때는 동일 이미지
                    "/images/products_65/5.png")
              }) no-repeat fixed center center / cover`,
            }}
          >
            {/* 이미지텍스트 */}
            <span className="smenu-tit">
              {txt &&
                txt
                  .split(" ")
                  .map((v) => v[0].toUpperCase() + v.slice(1).toLowerCase())
                  .join(" ")}
              {txt === "Shop" ? <p> "Welcome Our World" </p> : null}
            </span>
          </div>
          {/* 타이틀 컴포넌트 */}
          <Title txtData={titleTxt} type={"best"} />
        </section>

        {/* 스와이퍼 컴포넌트 */}
        <SwiperItemSlide
          idname={"bestitem-area inshop"}
          shoptxt={txt}
          sMenu={sMenu}
          setIsSub={setIsSub}
        />
      </div>
      <div className="itemList-wrap inbox">
        {/* 뿌리는 박스 타이틀 컴포넌트 */}
        {txt !== "Shop" && <Title txtData={titleTxt} type={"list"} />}
        {/* sort 옵션박스 출력하기 */}
        {txt !== "Shop" && (
          <select onChange={(e) => setSort(e.target.value)}>
            <option value="asc">상품명순(A-Z)</option>
            <option value="desc">상품명순(Z-A)</option>
            <option value="new">신상품순</option>
            <option value="review">리뷰많은순</option>
            <option value="bprice">높은가격순</option>
            <option value="sprice">낮은가격순</option>
          </select>
        )}
        {/* 뿌리는 컴포넌트 */}
        <MakeItemList menuTxt={txt} isSub={isSub} sort={sort} />
        {/* shop 메인일때만 카데고리별 best 뿌리기 */}
        {txt === "Shop" &&
          ctgList.map((v, i) => {
            if (v !== "COLLECTIONS" && v !== "ALL") {
              return (
                <React.Fragment key={i}>
                  <SwiperItemSlide
                    idname={"bestitem-area inshop"}
                    shoptxt={v}
                    shop={txt}
                    setTxt={setTxt}
                  />
                </React.Fragment>
              );
            } else {
              return null;
            }
          })}
      </div>
    </>
  );
}
