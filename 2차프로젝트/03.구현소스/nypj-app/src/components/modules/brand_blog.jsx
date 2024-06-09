// 펜할리곤스 브랜드&블로그 컴포넌트 (메인페이지)
import React, { useEffect, useLayoutEffect } from "react";
import "../../css/_brand_blog.scss";

// Inner 컴포넌트 불러오기
import { Inner } from "./content_inner";
// Inner 사용데이터
import { brand, Magazine, Fragrance } from "../data/sub_page_data";

function BrandBlog() {
  useLayoutEffect(() => {
    // 스크롤 시작 기준영역 박스
    const fistBox = document.querySelector(".fist");
    // 스크롤 끝 기준영역 박스
    const lastbox = document.querySelector(".last");
    // 움직일 대상박스
    const rightbox = document.querySelector(".right.col-6");
    //  console.log(scrollBox, lastbox, rightbox)

    // 보이는 화면에서의 top 위치값 리턴 함수
    const TopVal = (x) => x.getBoundingClientRect().top;
    window.addEventListener("scroll", moveFn);
    function moveFn() {
      // 화면 너비가 750이하일때는 실행하지 않음
      if (window.innerWidth <= 750) {
        // 고정위치값 적용 (없으면 갑작스런 사이즈변화시 이전 위치값이 그대로 남아있음)
        rightbox.style.transform = "translateY(0)";
        rightbox.style.top = "0px";

        return;
      } else if (window.innerWidth > 750) {
        // 스크롤발생시 새롭게 할당함
        const FirstTopVal = TopVal(fistBox);
        const LastTopVal = TopVal(lastbox);

        console.log(FirstTopVal, LastTopVal);

        if (FirstTopVal >= 0) {
          // 첫번쨰박스 top값이 0이상이면 움직이지 않음
          rightbox.style.transform = "translateY(0)";
          rightbox.style.top = "-200vh"; // 갯수가 달라지면 이값을 수정하면 됨
        } else if (FirstTopVal < 0 && LastTopVal >= 0) {
          // 첫번째박스 top값이 0미만이고 마지막박스 top값이 0이상일때 만 움직임 (마지막박스가 상단에 닿으면 멈춤)
          rightbox.style.transform = `translateY(${
            Math.abs(FirstTopVal) * 2
          }px)`;
          rightbox.style.top = "-200vh";
        } else {
          console.log("마지막박스가 상단에 닿음");
          // 고정위치값 적용
          rightbox.style.transform = "translateY(0)";
          rightbox.style.top = "200vh";
          // 맨아래로 갔다가 다시 올리면 top 300vh가 계속 적용되어있음
        } ///// else if /////
      } ///// else if /////////////////
    } ///// moveFn ////
  }); // 랜더링 후 한번만 실행 (useLayoutEffect) //////////

  return (
    <div>
      {/* 7. 브랜드&블로그영역 */}
      <div id="brand_blog-area">
        <section className="brand_blog-area inbox">
          <h2 className="temp-tit">7. 브랜드&블로그영역</h2>
          <div className="cont-box">
            <div className="left col-6">
              <section>
                <div className="left box1 fist"></div>
                <div className="left box2">
                  <Inner type={Magazine} />
                </div>
                <div className="left box3 last"></div>
              </section>
            </div>
            <div className="right col-6">
              <section>
                <div className="right box1">
                  <Inner type={Fragrance} />
                </div>
                <div className="right box2"></div>
                <div className="right box3">
                  <Inner type={brand} />
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default BrandBlog;
