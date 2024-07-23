// 펜할리곤스 Penhaligons 서브 페이지 컴포넌트 
// (Our Story, Collection 서브페이지 의 상세페이지 겸용)

import SubDetail from "../modules/sub_detail";
import { Con } from "../modules/myCon";

// Link to 의 state속성값을 받기위한 팩키지
import { useLocation } from "react-router-dom"
import {
  brand_detail,
  story_detail,
  collection_detail,
} from "../data/sub_detail_data";
import { useContext, useEffect, useLayoutEffect } from "react";

export default function Penhaligons() {
  //컨텍스트 API사용
  const myCon = useContext(Con);
  // 배너변경
  myCon.setMenu('penhaligons');
  
   // Link to 호출시 보낸 state 객체값을 연결된 컴포넌트에서 받아준다!
   // state는 해당 메뉴를 사용자가 직접 클릭하는 컴포넌트의 <link> 부분에서 보냄 
   // ex 펜할리곤스-> topArea컴포 , 컬렉션/스토리 ->content컴포
   const loc = useLocation();
   // 데이터 셋팅값
   const sData = loc.state.data;
   // 데이터 숫자값
   const sNum = loc.state.num;
   console.log(sData, sNum);

  const selData = {
    brand: brand_detail,
    story: story_detail,
    collection: collection_detail,
  };



  // 리턴구역
  return (
    <>
      {/* subName은 섹션별 데이터객체명, dataNum은 배열순번 */}
      <SubDetail subName={selData[sData]} dataNum={sNum} />
    </>
  );
} //////////// Penhaligons 컴포넌트 ////////
