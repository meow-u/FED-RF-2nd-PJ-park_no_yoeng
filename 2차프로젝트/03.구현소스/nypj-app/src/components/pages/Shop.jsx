// 펜할리곤스 Shop 서브페이지 컴포넌트

import { useEffect, useState } from "react";
import "../../css/_shop.scss";
import { Link } from "react-router-dom";
import MakeItemList from "../modules/make_itemList";
import SwiperItemSlide from "../plugin/SwiperItemSlide";

export default function Shop() {
  const [isSub, setIsSub] = useState(false);
  const [txt, setTxt] = useState("");
  //클릭단어가 컬렉션이 아닐경우 a.innerText를 할당

  useEffect(() => {
    let li = document.querySelectorAll("li");
    console.log("모든 li(서브메뉴포함)", li);

    li.forEach((el) =>
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleCollection(el);
      })
    );
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행되도록 함

  useEffect(() => {
    // txt 값이 업데이트된 후에 필요한 작업을 수행
    console.log("Updated txt:", txt);
  }, [txt]); // txt 값이 변경될 때만 실행되도록 함

  // 컬렉션 메뉴 토글 함수 ////////////////////////////////////
  function toggleCollection(el) {
    // 개별 li 클릭시 호출되는 함수( el은 개별 li)
    let a = el.querySelector("a"); // 각 li안의 이너텍스트를 포함한 개별 a링크
    let ol = el.querySelector("ol"); // 각 li안의 서브메뉴 ol 덩어리
    let toSetText; //전역변수

    if (a.innerText === "COLLECTION") {
      // 컬렉션일때 높이토글  (하위보이게)
      ol.style.height = ol.style.height === "21px" ? "0" : "21px";
      // txt 값을 유지하므로 toSetText를 업데이트하지 않음
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
      <ul className="menu-box">
        <li>
          <a href="###">FRAGRANCES</a>
        </li>
        <li>
          <a href="###">GIFTING</a>
        </li>
        <li>
          <a href="###">BATH &amp; BODY</a>
        </li>
        <li>
          <a href="###">HOME</a>
        </li>
        <li>
          <a href="###">COLLECTION</a>
          <ol className="submenu">
            <li>
              <a href="###">British Tales</a>
            </li>
            <li>
              <a href="###">Potions &amp; Remedies</a>
            </li>
            <li>
              <a href="###">Trade Routes</a>
            </li>
            <li>
              <a href="###">Portraits</a>
            </li>
          </ol>
        </li>
      </ul>
      <div className="cont-wrap">
        <SwiperItemSlide idname={"bestitem-area"} />
        {/* 뿌리는컴포넌트 */}
          <MakeItemList menuTxt={txt} isSub={isSub} />
      </div>
    </>
  );
}
