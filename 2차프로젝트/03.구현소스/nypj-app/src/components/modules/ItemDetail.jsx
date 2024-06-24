// 펜할리곤스 상품상세 모듈  ItemDetail.jsx

// 데이터 불러오기 
import "../data/products_data"

import React from "react";

function ItemDetail({ itemIdx }) {
   console.log("product에서 받아온 itemIdx:", itemIdx);

   let isJpg = ()=>{

   };
   return (
      <>
         <h2>상품상세영역</h2>
         <div id="ItemDetail-area">
            <section class="ItemDetail inbox">
               <h2 class="temp-tit"> 상품 상세 영역 </h2>
               <div class="cont-box">
                  <div class="col-8">
                     <img src={`${process.env.PUBLIC_URL}/images/products_${itemIdx}/1.png`} alt={`products_${itemIdx}`} />
                     
                  </div>
                  <div class="col-4"></div>
               </div>
            </section>
         </div>
      </>
   );
}

export default ItemDetail;
