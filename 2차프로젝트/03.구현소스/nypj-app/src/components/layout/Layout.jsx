// 펜할리곤스 레이아웃 컴포넌트 : 실제적인 최상위 컴포넌트임!
// Import react
import React, { useCallback, useEffect, useState } from "react";
// 각영역 불러오기
import TopArea from "./TopArea";
import MainArea from "./MainArea";
import FooterArea from "./FooterArea";

// [1] 메인 페이지 전체 레이아웃 로딩 컴포넌트 ///

export function Layout() {
  // useEffect(() => {
  //   console.log("레이아웃 컴포넌트 로딩됨! 스크롤 탑이동!");
  //   // window.scrollTo(0,0);
  //   let top = document.getElementById("ban-area");
  //   console.log("top:", top);
  //   if (top) top.scrollIntoView();
  // }, []);

  // 상단영역 로고 클릭시 상태변수 변경하여 layout 재마운팅
  let [logo, setLogo] = useState(true);

  let changeFn = useCallback(() => {
    console.log("로고클릭");
    setLogo(!logo);
  },[]);


  // 코드 리턴구역
  return (
    <>
      {/* 1. 상단영역 */}
      <TopArea changeFn={changeFn} />
      {/* 2. 메인영역 */}
      <MainArea />
      {/* 3. 하단영역 */}
      <FooterArea />
    </>
  );
} ///////// Layout 컴포넌트 /////////
