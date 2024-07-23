// 펜할리곤스 Collections 서브페이지 컴포넌트
import { Con } from "../modules/myCon";
import Content from "../modules/content";
import { collection } from "../data/sub_page_data";
import { useContext, useEffect, useLayoutEffect } from "react";

export default function Collections(){
  //컨텍스트 API사용
  const myCon = useContext(Con);
  // 배너변경
  useLayoutEffect(()=>{
    myCon.setMenu('collection');
  })
    // 리턴구역
    return(<>
        <Content type={collection} />
    </>
    );
}//////////// Collections 컴포넌트 ////////
