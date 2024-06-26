// 펜할리곤스 상품상세 컴포넌트  Product.jsx
import { useLocation } from "react-router-dom";

import React from "react";
import ItemDetail from "../modules/ItemDetail";
import SwiperItemSlide from "../plugin/SwiperItemSlide";

function Product({ idx }) {
   // idx는 상품클릭시 받아온 매칭 값
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
