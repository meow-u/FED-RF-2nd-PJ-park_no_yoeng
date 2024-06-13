// 펜할리곤스 OurStory 서브페이지 컴포넌트
import Content from "../modules/content";
import { story } from "../data/sub_page_data";

export default function OurStory() {
  // 리턴구역
  return (
    <>
      <Content type={story} />
    </>
  );
} //////////// OurStory 컴포넌트 ////////
