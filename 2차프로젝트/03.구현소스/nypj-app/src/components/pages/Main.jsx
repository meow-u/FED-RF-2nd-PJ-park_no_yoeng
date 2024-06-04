// 펜할리곤스 메인(기본)페이지 컴포넌트
//pages 폴더: MainArea에서 바뀌어보이는 각각의 페이지 구성
import { collection , story } from "../data/sub_page_data";

// Main 컴포넌트

import Swiper_newitem from "../plugin/Swiper_newitem";
import Video from "../modules/video";
import Content from "../modules/content";

export default function Main() {
  // 코드 리턴구역 /////
  return (
    <main className="main-area">
      <h1>메인기본페이지</h1>
      {/* <Swiper_newitem idname={"newitem-area"} /> */}
      {/* <Video /> */}
      {/* <Swiper_newitem idname={"bestitem-area"} /> */}
      <Content type={collection} />
      {/* <Content type={story} /> */}
    </main>
  );
} ///////// Main 컴포넌트 ///////////
