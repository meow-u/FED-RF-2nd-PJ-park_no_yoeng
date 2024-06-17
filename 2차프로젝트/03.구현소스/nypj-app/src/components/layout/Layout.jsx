// 펜할리곤스 레이아웃 컴포넌트 : 실제적인 최상위 컴포넌트임!
// Import react
import React, { useCallback, useEffect, useState } from "react";
// 각영역 불러오기
import TopArea from "./TopArea";
import MainArea from "./MainArea";
import FooterArea from "./FooterArea";

// [1] 메인 페이지 전체 레이아웃 로딩 컴포넌트 ///

export function Layout() {


  let scrollTop = () => {
    console.log("스크롤탑");
    window.scrollTo(0, 0);
  };


  // 코드 리턴구역
  return (
    <>
      {/* 1. 상단영역 */}
      <TopArea scrollFn={scrollTop} />
      {/* 2. 메인영역 */}
      <MainArea />
      {/* 3. 하단영역 */}
      <FooterArea />
    </>
  );
} ///////// Layout 컴포넌트 /////////
