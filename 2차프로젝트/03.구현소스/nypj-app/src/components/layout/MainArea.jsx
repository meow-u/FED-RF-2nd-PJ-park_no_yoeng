// 메인영역 컴포넌트
import { React, useContext, useEffect, useLayoutEffect } from "react";
import { Con } from "../modules/myCon";

import { Outlet } from "react-router-dom";
// Outlet 컴포넌트는 리액트라우터에서
// 컴포넌트를 변경하여 출력하는 자리를 잡아주는 역할을 함
// 공통배너불러오기
import SwiperBanner from "../plugin/SwiperBanner";
import { FotBanner } from "../modules/fot_banner";
import $ from "jquery";

export default function MainArea() {
  const myCon = useContext(Con);

  useEffect(() => {
    let scrollFn = () => {
      window.scrollTo(0, 0);

      setTimeout(() => {
        $("html,body").animate(
          {
            scrollTop: $(".main-wrap").offset().top - 75 + "px",
          },
          400
        );
      }, 1000);
    };
    // 메인페이지가 아닐떄만 실행
   myCon.menu !=="main" && scrollFn();

  },[myCon.menu]);
  // 코드 리턴구역
  return (
    <main className="cont">
      {/* 공통배너 */}
      {/* key prop 사용: menu가 변경될때마다 컴포넌트를 완전히 새로 마운트하라고 지시*/}
      <SwiperBanner/> 
      <section className="main-wrap">
        <Outlet />
      </section>
      {/* 공통하단배너 */}
      <FotBanner />
    </main>
  );
} //////////// MainArea ////////////////////////
