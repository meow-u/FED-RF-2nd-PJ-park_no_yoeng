// 펜할리곤스 OurStory 서브페이지 컴포넌트
import Content from "../modules/content";
import { Con } from "../modules/myCon";

import { story } from "../data/sub_page_data";
import $ from "jquery";
import { useContext, useEffect, useLayoutEffect } from "react";

export default function OurStory() {
  //컨텍스트 API사용
  const myCon = useContext(Con);
  // 배너변경
  useLayoutEffect(()=>{
    myCon.setMenu('ourstory');
  })
  // 리턴구역
  return (
    <>
      <Content type={story} />
    </>
  );
} //////////// OurStory 컴포넌트 ////////
