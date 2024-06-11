// 펜할리곤스 Collections 페이지 컴포넌트
import SubDetail from "../modules/sub_detail";
import {brand_detail, story_detail, collection_detail} from "../data/sub_detail_data"

export default function Penhaligons() {
   // 리턴구역
   return (
      <>
      {/* subName은 섹션별 데이터객체명, dataNum은 배열순번 */}
      <SubDetail subName={brand_detail} dataNum={0}/>
      </>
     
   );
} //////////// Penhaligons 컴포넌트 ////////
