// 펜할리곤스 상품상세 컴포넌트  Product.jsx
import { useLocation } from "react-router-dom";

import React, { useState } from "react";
import ItemDetail from "../modules/ItemDetail";
import SwiperItemSlide from "../plugin/SwiperItemSlide";


function Product({ idx }) {
console.log("Product 컴포넌트 리랜더링");
   // idx는 상품클릭시 받아온 매칭 값
   //  <Link  <-- swiperItemSlide에서 state로 product에 idx값을 넘겨서 전달
   // to={`/shop/product/${v.idx}`}
   // state={{ itemIdx: v.idx }}


   // idx값으로 리랜더링하기
   let loc = useLocation();
   let itemIdx = loc.state.itemIdx;
   console.log("상품클릭시 받아온 itemIdx:", itemIdx);

   return (
      // 상품 상세 영역
      <>
         <ItemDetail itemIdx={itemIdx} />
         <SwiperItemSlide idname={"bestitem-area product"} itemIdx={itemIdx}/>
      </>
   );
}

export default Product;
