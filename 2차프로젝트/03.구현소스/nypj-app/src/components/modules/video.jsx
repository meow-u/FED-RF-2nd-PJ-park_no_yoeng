// 펜할리곤스 비디오 컴포넌트 (메인페이지)
// css 불러오기
import "../../css/_video.scss";

import { Title } from "./title";
import { titleTxt } from "../data/main_data";

export default function Video({ vidName = "images/main.mp4" }) {
  console.log("vidName", vidName);
  return (
    <div id="video-area">
      <section className="video-area inbox">
        <Title
          txtData={titleTxt}
          type={
            /* 해당 변수가 특정문자를 포함하는지 검사 includes() */
            vidName.includes("brand_detail")
              ? "Penhaligons"
              : vidName.includes("story_detail")
              ? "story"
              : vidName.includes("collection_detail")
              ? "collection"
              : undefined/* 값을안주면 컴포넌트 선언시 작성된 기본값 적용. ""도 값으로 인식해서 오류남 */
          }
        />
        <h2 className="temp-tit">4. 비디오영역</h2>
        <div className="cont-box">
          <div className="col-12">
            <video
              src={
                // 밖에서 값을 받아오면 (기본값이아니면)
                // 주소 + 받아온파일명 , 아니면 기본값 적용
                vidName !== "images/main.mp4"
                  ? "images/sub_page/" + vidName
                  : vidName
              }
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
