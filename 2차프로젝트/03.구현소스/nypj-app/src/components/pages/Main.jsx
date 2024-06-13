// 펜할리곤스 메인(기본)페이지 컴포넌트
//pages 폴더: MainArea에서 바뀌어보이는 각각의 페이지 구성
import { collection } from "../data/sub_page_data";

// Main 컴포넌트

import SwiperItemSlide from "../plugin/SwiperItemSlide";
import Video from "../modules/video";
import Content from "../modules/content";
import BrandBlog from "../modules/brand_blog";

export default function Main() {
  // 코드 리턴구역 /////
  return (
    <main className="main-area">
      <h1>메인페이지</h1>
      <SwiperItemSlide idname={"newitem-area"} />
      <Video />
      <SwiperItemSlide idname={"bestitem-area"} />
      <Content type={collection} />
      <BrandBlog/>
    </main>
  );
} ///////// Main 컴포넌트 ///////////
