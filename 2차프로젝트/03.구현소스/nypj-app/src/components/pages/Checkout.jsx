// 펜할리곤스 Checkout 결제페이지 컴포넌트

import { Con } from "../modules/myCon";
import { useContext, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Checkout() {
  //컨텍스트 API사용
  const myCon = useContext(Con);
  const loc = useLocation();

  // 회원정보, 구매상품, 총가격 가져오기
  let member;
  let buyData = loc.state.buyData; // 맵돌려야함
  let totalPrice = loc.state.totalPrice;

  // 로그인된 정보
  if (myCon.loginSts) {
    member = JSON.parse(myCon.loginSts);
  }

  // member {eml,idx,pwd,uid,unm,zcode}
  // buyData {idx, type, collection, name, subtit, info, price, img, subimg, review, total, cnt}
  console.log(member); // 로그인된 정보 , 비회원일시 null
  console.log(buyData);
  console.log(totalPrice);

  // 배너변경
  useLayoutEffect(() => {
    myCon.setMenu("main");
  });

  return (
    <>
      <h1>{buyData.map((v) => v.name)}</h1>
      <h1>{totalPrice} </h1>
      <h1>{member && member.unm}</h1>
    </>
  );
} //////////// Checkout 컴포넌트 ////////
