// 펜할리곤스 상품상세 컴포넌트  Product.jsx
import { useLocation } from "react-router-dom";
import { Con } from "../modules/myCon";

import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import ItemDetail from "../modules/ItemDetail";
import SwiperItemSlide from "../plugin/SwiperItemSlide";


function Product({ idx}) {
   //컨텍스트 API사용
  const myCon = useContext(Con);
  // 배너변경
  useLayoutEffect(()=>{
   myCon.setMenu('shop');
})
console.log("Product 컴포넌트 리랜더링");
   // idx는 상품클릭시 받아온 매칭 값
   //  <Link  <-- swiperItemSlide에서 state로 product에 idx값을 넘겨서 전달
   // to={`/shop/product/${v.idx}`}
   // state={{ itemIdx: v.idx }}


   // idx값으로 리랜더링하기
   let loc = useLocation();
   let itemIdx = loc.state.itemIdx;
   let sMenu = loc.state.sMenu;
   console.log('loc.state', loc.state);   
   console.log("상품클릭시 받아온 itemIdx:", itemIdx);
   console.log("상품클릭시 받아온 sMenu:", sMenu);
   

   return (
      // 상품 상세 영역
      <>
         <ItemDetail itemIdx={itemIdx} sMenu={sMenu} />
         <SwiperItemSlide idname={"bestitem-area product"} itemIdx={itemIdx} />
      </>
   );
}

export default Product;
