// 펜할리곤스 Shop 서브페이지 컴포넌트

import React, { useContext, useEffect, useState } from "react";
import { Con } from "../modules/myCon";
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
// 컴포넌트 프로퍼티(props) 값의 지속성:
// initSmenu는 컴포넌트의 프롭(prop)으로, 부모 컴포넌트에서 전달됩니다. 컴포넌트가 리렌더링되어도 이 프롭 값은 부모 컴포넌트에서 변경하지 않는 한 그대로 유지됩니다. 즉, 리렌더링으로 인해 initSmenu가 자동으로 초기화되지 않습니다.
// 컴포넌트 함수 내에서 initSmenu의 값을 직접 변경하거나 초기화할 수 없습니다. 그 이유는 다음과 같습니다:

// 프롭(prop)의 특성:
// initSmenu는 부모 컴포넌트에서 전달받은 프롭입니다. React의 데이터 흐름 원칙에 따라, 프롭은 읽기 전용(read-only)입니다.
// 함수 매개변수의 특성:
// JavaScript에서 함수 매개변수는 함수 내부에서 지역 변수처럼 취급됩니다. 따라서 함수 내에서 initSmenu에 새 값을 할당하더라도, 이는 함수의 지역 범위에만 영향을 미치며 부모 컴포넌트나 다음 렌더링에 영향을 주지 않습니다.
// React의 단방향 데이터 흐름:
// React는 단방향 데이터 흐름을 따릅니다. 자식 컴포넌트는 부모로부터 받은 프롭을 변경할 수 없습니다.

export default function Shop({ initSmenu = "Shop" }) {

  const myCon = useContext(Con);
  // 배너변경
  useEffect(()=>{
  myCon.setMenu("shop");
  });
  // initSmenu index.js에서 받아온 클릭된 서브메뉴 데이터
  // 하위메뉴를 클릭해서 들어오면 해당값으로 설정,  그냥 shop으로 들어왔을시 '초기값 "Shop"

  // props로 받아온 초기값으로 sMenu 상태변수 초기화
  const [sMenu, setSmenu] = useState(initSmenu);
  // txt 값은 클릭시 내부 텍스트값으로 변경됨 초기값 sMenu로 설정
  const [txt, setTxt] = useState(sMenu);
  // 서브메뉴 여부 상태변수
  const [isSub, setIsSub] = useState(false); // 서브메뉴인지 여부
  // 정렬 상태변수
  const [sort, setSort] = useState("asc");
  console.log(">>>>>>처음랜더링");
  // initSMenu가 "Shop"이 아니면서 sMenu와 같지 않을 때 : 햄버거통한 메뉴값 읽어올 때

  // initSmune값이 변경되면 (상단 메뉴통해 들어올때)
  // 해당 값의 버튼을 찾아서 클릭이벤트 발생시키기 (sMenu값 변경 후 랜더링시키기위함)
  useEffect(() => {
    // 모든 메뉴 선택
    let li = $(".smenu-box li");
    li.each((i, el) => {
      // console.log(el.innerText);
      if (el.innerText === initSmenu) {
        // console.log('클릭할 메뉴:', el.innerText);
        // 클릭할 메뉴에 클릭이벤트 발생시켜서 sMenu값 변경!!

        el.click();
      }
    });
  }, [initSmenu]);

  console.log("랜더링! 클릭된 sMenu :", sMenu);
  console.log("그리구 txt:", txt);

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
    if (sMenu !== txt) {
      console.log("두 값이 달라요!! sMenu:", sMenu, "txt:", txt);

      // 전역변수 값 통일
      setTxt(sMenu);
      console.log("비일치로 sMenu 통일시킴! 랜더링확인");

      if (
        sMenu === "British Tales" ||
        sMenu === "Potions & Remedies" ||
        sMenu === "Trade Routes" ||
        sMenu === "Portraits"
      ) {
        // 서브메뉴면 상태변수 변경 (아이템리스트 뿌릴때 필터에서 사용)
        setIsSub(true);
      } else {
        // 서브메뉴 아닐때
        setIsSub(false);
      }
    }
  }, [sMenu, txt]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      // 리사이즈 발생시 컬렉션 클릭시 하위메뉴 높이 초기화
      let submenu = document.querySelector(".submenu");
      if (window.innerWidth <= 800) {
        // 모바일시 서브 닫힘상태
        // 초기 필터효과
        document.querySelector(".coll").style.filter = "invert(1)";
      } else if (window.innerWidth > 800) {
        // 데스크탑시 서브 열림상태 (css 열린값 clamp(15px, 2vw, 4vw) 지정해두었음)
        if (submenu.style.height === "130px") {
          submenu && (submenu.style.height = "");
          // 초기 필터효과 없애기
        }
        // 초기 필터효과
        document.querySelector(".coll").style.filter = "";
      }

      return () => {
        //소멸구역
        window.removeEventListener("resize", () => {});
      };
    });

    // 리턴함수는 언마운트시 실행됨
    return () => window.removeEventListener("resize", () => {});
  });

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
    // 클릭된 메뉴 내부 텍스트값으로 SMenu전역상태변수 변경
    setSmenu(toSetText);
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
                  // 클릭시 읽어온 sMenu 초기화 (shop기본 페이지)
                  setSmenu("Shop");
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
                    setSmenu={setSmenu}
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
