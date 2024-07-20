// 펜할리곤스 메인(기본)페이지 컴포넌트
//pages 폴더: MainArea에서 바뀌어보이는 각각의 페이지 구성
import { collection } from "../data/sub_page_data";
import { Con } from "../modules/myCon";

// Main 컴포넌트

import SwiperItemSlide from "../plugin/SwiperItemSlide";
import Video from "../modules/video";
import Content from "../modules/content";
import BrandBlog from "../modules/brand_blog";
import { useContext, useEffect, useLayoutEffect } from "react";
import $ from "jquery";

export default function Main() {

  //컨텍스트 API사용
  const myCon = useContext(Con);
  // 배너변경
  useLayoutEffect(()=>{
    myCon.setMenu("main");
  })
  // 메인페이지일때만 실행되는 useEffect
  useEffect(() => {
    let backBtn = $(".fixed").find(".fixbtn").eq(0);
    console.log("backBtn:", backBtn);
    backBtn.css("display", "none");

    $(".fixed").css("width", "100px");

    return () => {
      //메인페이지가 종료될때 실행
      console.log("메인페이지 종료");
      backBtn.css("display", "inline-block");

      $(".fixed").css("width", "");
    };
  }, []); // useEffect

  // 코드 리턴구역 /////
  return (
    <main className="main-area">
      <SwiperItemSlide idname={"newitem-area"} />
      <Video />
      <SwiperItemSlide idname={"bestitem-area"} />
      <Content type={collection} />
      <BrandBlog />
    </main>
  );
} ///////// Main 컴포넌트 ///////////
