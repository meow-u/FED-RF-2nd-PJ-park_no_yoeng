// 펜할리곤스 Collections 페이지 컴포넌트
import SubDetail from "../modules/sub_detail";
// Link to 의 state속성값을 받기위한 팩키지
import { useLocation } from "react-router-dom"
import {
  brand_detail,
  story_detail,
  collection_detail,
} from "../data/sub_detail_data";

export default function Penhaligons() {

   // Link to 호출시 보낸 state 객체값을 받아준다!
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
