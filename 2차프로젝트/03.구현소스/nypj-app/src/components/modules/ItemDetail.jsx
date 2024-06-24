// 펜할리곤스 상품상세 모듈  Product.jsx

import React from "react";

function ItemDetail({ itemIdx }) {
   console.log("product에서 받아온 itemIdx:", itemIdx);
   return (
      <>
         <div id="ItemDetail-area">
            <section class="ItemDetail inbox">
               <h2 class="temp-tit"> 상품 상세 영역 </h2>
               <div class="cont-box">
                  <div class="col-8"></div>
                  <div class="col-4"></div>
               </div>
            </section>
         </div>
      </>
   );
}

export default ItemDetail;
