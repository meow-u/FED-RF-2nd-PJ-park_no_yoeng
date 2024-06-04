// 펜할리곤스 비디오 컴포넌트 (메인페이지)

import { Title } from "./title";
import { titleTxt } from "../data/main_data";

export default function Video() {
  console.log(titleTxt);
  return (
    <div id="video-area">
      <section className="video-area inbox">
        <Title txtData={titleTxt} type={"blog"} />
        <h2 className="temp-tit">4. 비디오영역</h2>
        <div className="cont-box">
          <div className="col-12">
            <video
              src="images/main.mp4"
              autoPlay
              loop
              muted
              // controls
              width="100%"
              height="auto"
            ></video>
          </div>
        </div>
      </section>
    </div>
  );
} //////////// Video 컴포넌트 //////////
