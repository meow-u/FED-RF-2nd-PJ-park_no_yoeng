// 메인영역 컴포넌트
import {React , useLayoutEffect} from "react";

import { Outlet } from "react-router-dom";
// Outlet 컴포넌트는 리액트라우터에서
// 컴포넌트를 변경하여 출력하는 자리를 잡아주는 역할을 함
// 공통배너불러오기
import SwiperBanner from "../plugin/SwiperBanner";
import { FotBanner } from "../modules/fot_banner";

export default function MainArea() {
   
  useLayoutEffect(()=>{ /////////////// 작동안함 왜? 
   console.log("여기야~!");
   setTimeout(()=>{
      window.scrollTo(0,0); 
   },200); 
   // (타임아웃없이 바로 실행하면 스크롤이 안됨... 가끔비디오랑 충돌함)
  },[]);
   // 코드 리턴구역
   return (
      <main className="cont">
        {/* 공통배너 */}
         <SwiperBanner />
         <Outlet />
         {/* 공통하단배너 */}
         <FotBanner/>
      </main>
   );
} //////////// MainArea ////////////////////////
