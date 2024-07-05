// 펜할리곤스 Shop 서브페이지 컴포넌트

import { useEffect, useState } from "react";
import "../../css/_shop.scss";
import { Link } from "react-router-dom";
import MakeItemList from "../modules/make_itemList";
import SwiperItemSlide from "../plugin/SwiperItemSlide";

// 사용 데이터 가져오기 (타이틀데이터)
import { titleTxt } from "../data/main_data";

// gnb 데이터
import { hamMenu, collMenu } from "../data/main_data";
import { Title } from "../modules/title";

let subMenu = hamMenu[1].sub; //서브메뉴 데이터

export default function Shop({ sMenu }) {
  // sMenu는 상위 컴포넌트에서 받아온 클릭된 서브메뉴 데이터
  const [isSub, setIsSub] = useState(false);
  // 클릭해서 들어오면 해당값으로 설정, 없으면 '초기값 null= 그냥 shop으로 들어왔을시'
  // txt 값은 클릭시 내부 텍스트값으로 변경됨
  const [txt, setTxt] = useState(sMenu); 
  console.log("클릭된 sMenu :", sMenu);
  console.log("랜더링! txt:", txt);


  useEffect(() => {
    let menuBox = document.querySelector(".smenu-box");
    let li = menuBox.querySelectorAll("li");
    console.log("모든 li(서브메뉴포함)", li);

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
        submenu.style.height = "";
        // 초기 필터효과 없애기
        document.querySelector(".coll").style.filter = "none";
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
        // 만약 서브가 열려있다면 닫기
        submenu.style.height = "0";
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
      <ul className="smenu-box">
        {subMenu.map((v, i) => {
          return i < 6 ? (
            <li key={i}>
              <a
                className={v.txt === "COLLECTIONS" ? "coll" : null}
                href="###"
                style={v.txt === txt ? { fontWeight: "900"} : null}
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
      <Title txtData={titleTxt} type={"brand"} />
      <div className="cont-wrap">
        <SwiperItemSlide idname={"bestitem-area inshop"} shoptxt={txt} />
        <p className="smenu-tit">{txt}</p>
        {/* 뿌리는컴포넌트 */}
        <MakeItemList menuTxt={txt} isSub={isSub} />
      </div>
    </>
  );
}
