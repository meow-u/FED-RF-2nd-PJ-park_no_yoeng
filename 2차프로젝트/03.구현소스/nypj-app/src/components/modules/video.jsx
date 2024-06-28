// 펜할리곤스 비디오 컴포넌트 (메인페이지)
// css 불러오기
import "../../css/_video.scss";

import { Title } from "./title";
import { titleTxt } from "../data/main_data";
import { useEffect } from "react";

export default function Video({ vidName = (process.env.PUBLIC_URL+"/images/main.mp4") }) {
  console.log("vidName", vidName);

  // 비디오가 화면에 등장할때 자동재생되도록 설정하기
  useEffect(() => {
    // 비디오 객체 가져오기
    let vid = document.querySelector("video");
    // IntersectionObserver API 사용
    // 1. 관찰자 만들기
    let observer = new IntersectionObserver((ele) => {
      // ele : 관찰대상들
      console.log("ele", ele);
      // 관찰대상이 화면에 들어온 경우
      if (ele[0].isIntersecting) {
        // 비디오 재생하기
        vid.play();
      } else {
        // 비디오 멈추기
        vid.pause();
      }
    });
    // 2. 관찰대상 지정하기
    observer.observe(vid);
    // 관찰대상 해제하기
    return () => observer.disconnect();
  }, []); // useEffect

  return (
    <div id="video-area">
      <section className="video-area inbox">
        <Title
          txtData={titleTxt}
          type={
            /* 해당 변수가 특정문자를 포함하는지 검사 includes() */
            vidName.includes("images/main.mp4")
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
                vidName !== (process.env.PUBLIC_URL+"/images/main.mp4")
                  ? (process.env.PUBLIC_URL+"/images/sub_page/" + vidName)
                  : (process.env.PUBLIC_URL+"/images/main.mp4")
              }
              // autoPlay
              loop
              muted
              controls
              width="100%"
              height="auto"
            ></video>
          </div>
        </div>
      </section>
    </div>
  );
} //////////// Video 컴포넌트 //////////
