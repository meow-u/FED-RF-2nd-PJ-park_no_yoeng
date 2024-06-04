// 메인영역 컴포넌트

import { Outlet } from "react-router-dom";
// Outlet 컴포넌트는 리액트라우터에서
// 컴포넌트를 변경하여 출력하는 자리를 잡아주는 역할을 함
// 공통배너불러오기
import Swiper_banner from "../plugin/Swiper_banner";

export default function MainArea() {
   // 코드 리턴구역
   return (
      <main className="cont">
        {/* 공통배너 */}
         <Swiper_banner />
         <Outlet />
      </main>
   );
} //////////// MainArea ////////////////////////
