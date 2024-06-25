// 펜할리곤스 상품상세 모듈  ItemDetail.jsx

import React from "react";
// 데이터 불러오기
import { allProducts } from "../data/products_data";
// css 불러오기
import "../../css/_item_detail.scss";
import SwiperDetail from "../plugin/SwiperItemDetail";
import App from "../plugin/기본참고";
import { Inner } from "./content_inner";

function ItemDetail({ itemIdx }) {
   console.log("product에서 받아온 itemIdx:", itemIdx);

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
                  {/* <Inner/> */}
               </div>
               <div className="left-box">
                  <SwiperDetail data={imgArr} idx={itemIdx} />
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
               </div>
            </div>
         </section>
      </div>
   );
}
export default ItemDetail;
