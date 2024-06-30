// 펜할리곤스 상품상세 모듈  ItemDetail.jsx

import React, { useEffect, useLayoutEffect } from "react";
// 데이터 불러오기
import { allProducts } from "../data/products_data";
// css 불러오기
import "../../css/_item_detail.scss";
import SwiperDetail from "../plugin/SwiperItemDetail";
import App from "../plugin/기본참고";
import { Inner } from "./content_inner";

import $ from "jquery";
function ItemDetail({ itemIdx }) {
  console.log("product에서 받아온 itemIdx:", itemIdx);

  useEffect(() => {
    console.log("아이템디테일 랜더링");

    //////////////////////////// 부드럽게 상단이동
    $("html,body").animate(
      {
        scrollTop: $(".main-wrap").offset().top + "px",
      },
      400
    );
    // 상세페이지 우측박스높이로 좌측 마진탑 - 값 설정
    let imgH = () =>
      $(".left-box").css({ marginTop: -$(".right-box").height() + 15 });

    // 랜더링시 한번실행
    imgH();
    // 윈도우 리사이즈시 실행
    $(window).resize(function () {
      imgH();
    });

    // swiper pagination bullet에 이미지 삽입
    imgArr.map((v, i) => {
      $(`.product-swiper .swiper-pagination-bullet:nth-child(${i})`).css({
        background: `url(${process.env.PUBLIC_URL}/images/products_${itemIdx}/${i}.png) no-repeat center/cover`,
      });
    });

    // 컴포넌트가 unmount 될 때 cleanup 함수 실행
    return () => {
      $(window).off("resize");
    };
  }); // 여기에 빈배열을 담으니, 관련상품 클릭시 리랜더링 되지않아 지움.
  // 이미지갯수 전역변수
  let imgArr;
  // 전체상품중 전달받은 idx와 같은 데이터 추출 후 변수에 재할당
  allProducts.map((v) => {
    if (v.idx === itemIdx) {
      imgArr = Array(v.subimg).fill(1);
      console.log("imgArr:", imgArr);
    }
  });
  return (
    <div id="ItemDetail-area">
      <section className="ItemDetail inbox">
        <h2 className="temp-tit"> 상품 상세 영역 </h2>
        <div className="cont-box">
          <div className="right-box col-4">
            <Inner type={null} data={allProducts} idx={itemIdx} />
          </div>
          <div className="left-box">
            <SwiperDetail data={imgArr} idx={itemIdx} />
            <span className="item-txt">
              {allProducts.map((v) =>
                v.idx === itemIdx ? `"${v.subtit}"` : ""
              )}
            </span>
            <div className="img-box">
              {imgArr.map(
                (_, i) =>
                  i > 1 && (
                    <div key={i + 1} className="img-wrap">
                      <img
                        className="sub-img"
                        src={`${
                          process.env.PUBLIC_URL
                        }/images/products_${itemIdx}/${i + 1}.png`}
                        alt={`products_${itemIdx}`}
                      />
                    </div>
                  )
              )}
            </div>
            {allProducts.map((v, index) =>
              v.idx === itemIdx ? (
                <React.Fragment key={index}>
                  <span className="inner-txt name">{v.name[1]}</span>
                  <span className="inner-txt next">"{v.info[1]}"</span>
                </React.Fragment>
              ) : null
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
export default ItemDetail;
