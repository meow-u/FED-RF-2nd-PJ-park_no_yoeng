// 펜할리곤스 OurStory 서브페이지 컴포넌트
import Content from "../modules/content";
import { story } from "../data/sub_page_data";
import $ from "jquery";
import { useEffect } from "react";

export default function OurStory() {
  useEffect(() => {
    $("html,body").animate(
      {
        scrollTop: $(".main-wrap").offset().top - 75 + "px",
      },
      400
    );
  }, []);
  // 리턴구역
  return (
    <>
      <Content type={story} />
    </>
  );
} //////////// OurStory 컴포넌트 ////////
