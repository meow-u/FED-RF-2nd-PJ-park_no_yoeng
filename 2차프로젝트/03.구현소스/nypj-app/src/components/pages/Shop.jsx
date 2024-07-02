// 펜할리곤스 Shop 서브페이지 컴포넌트

import { useEffect, useState } from "react";
import "../../css/_shop.scss";
import { Link } from "react-router-dom";
import MakeItemList from "../modules/make_itemList";
import SwiperItemSlide from "../plugin/SwiperItemSlide";

// gnb 데이터
import { hamMenu, collMenu } from "../data/main_data";

let subMenu = hamMenu[1].sub; //서브메뉴 데이터

export default function Shop({ sMenu }) {
  // sMenu는 상위 컴포넌트에서 받아온 클릭된 서브메뉴 데이터
  console.log("클릭된 sMenu :", sMenu);
  const [isSub, setIsSub] = useState(false);
  const [txt, setTxt] = useState("");
  //클릭단어가 컬렉션이 아닐경우 a.innerText를 할당

  useEffect(() => {
    let menuBox = document.querySelector(".smenu-box");
    let li = menuBox.querySelectorAll("li");
    console.log("모든 li(서브메뉴포함)", li);

    li.forEach((el) =>
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();
        toggleCollection(el);
      })
    );
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행되도록 함

  useEffect(() => {
    // txt 값이 업데이트된 후에 필요한 작업을 수행
    console.log("Updated txt:", txt);
    // 클릭메뉴가 컬렉션이면 ol높이토글
    if (txt === "COLLECTIONS") {
      console.log("COLLECTIONS 클릭됨 하위 토글!");
      let submenu = document.querySelector(".submenu");
      if (window.innerWidth <= 800) {
        submenu.style.height = submenu.style.height === "130px" ? "0" : "130px";
      }else{
        submenu.style.height = submenu.style.height === "21px" ? "0" : "21px";
      }
    }
  }, [txt]); // txt 값이 변경될 때만 실행되도록 함

  if (txt === "") {
    // txt가 초기값이면
    // sMenu가 있고 txt와 sMenu가 다르면 txt를 sMenu로 설정
    sMenu && txt !== sMenu && setTxt(sMenu);
  }

  // 컬렉션 메뉴 토글 함수 ////////////////////////////////////
  function toggleCollection(el) {
    // 개별 li 클릭시 호출되는 함수( el은 개별 li)
    let a = el.querySelector("a"); // 각 li안의 이너텍스트를 포함한 개별 a링크
    let ol = el.querySelector("ol"); // 각 li안의 서브메뉴 ol 덩어리
    let toSetText; //전역변수

    console.log("클릭된 a:", a.innerText);
    console.log("클릭된 ol:", ol);

    if (a.innerText === "COLLECTIONS") {
      // 컬렉션일때 높이토글  (하위보이게)
      let submenu = document.querySelector(".submenu");
      if (window.innerWidth <= 800) {
        submenu.style.height = submenu.style.height === "130px" ? "0" : "130px";
      }else{
        submenu.style.height = submenu.style.height === "21px" ? "0" : "21px";
      }
      setTxt("COLLECTIONS");
    } else {
      toSetText = a.innerText;
      // 이부분이 else문에만 있어야함. if문 바깥에 있으면 collection을 클릭했을 때도 txt가 업데이트됨

      setTxt(toSetText);
      // 나머지 li 메뉴클릭시 내부 a의 이너텍스트값으로  'txt상태변수변경 '
    }

    setIsSub(el.parentElement.classList.contains("submenu"));
    // 클릭된 각 li 부모 클래스가 submenu가 있으면 true (서브메뉴인지확인)
  } ///////////////////////////////////////////////////// ///////

  return (
    <>
      <ul className="smenu-box">
        {subMenu.map((v, i) => {
          return i < 6 ? (
            <li key={i}>
              <a
                href="###"
                style={v.txt === txt ? { fontWeight: "bold" } : null}
              >
                {v.txt}
              </a>
              {v.txt === "COLLECTIONS" ? (
                <ol className="submenu">
                  {collMenu.map((v, i) => (
                    <li key={i}>
                      <a
                        href="###"
                        onClick={(e) => e.preventDefault()}
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

      <div className="cont-wrap">
        <SwiperItemSlide idname={"bestitem-area"} />
        {/* 뿌리는컴포넌트 */}
        <p className="smenu-tit">{txt}</p>
        <MakeItemList menuTxt={txt} isSub={isSub} />
      </div>
    </>
  );
}
