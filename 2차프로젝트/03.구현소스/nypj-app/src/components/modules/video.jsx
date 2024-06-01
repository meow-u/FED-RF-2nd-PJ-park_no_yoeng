// 펜할리곤스 비디오 컴포넌트 (메인페이지)

import { Title } from "../components/title";
import { titleTxt } from "../data/main_data";

export default function Video() {
  console.log(titleTxt);
  return (
    <div id="video-area">
      <section className="video-area inbox">
        <Title txtData={titleTxt} type={"blog"} />
        <h2 class="temp-tit">4. 비디오영역</h2>
        <div class="cont-box">
          <div class="col-12">
          <video
  src="images/sub_page/brand_detail1.mp4"
  autoPlay
  muted
  controls
  width="100%"
  height="auto"
></video>
<h3 class="catag">BEST</h3>
          </div>
        </div>
      </section>
    </div>
  );
} //////////// Video 컴포넌트 //////////
