// 펜할리곤스 sub detail 페이지 컴포넌트
// css 불러오기
import "../../css/_sub_detail.scss";
import Video from "./video";
import SwiperItemSlide from "../plugin/SwiperItemSlide";
import { useEffect } from "react";

export default function SubDetail({ subName, dataNum }) {
  // subName은 섹션별 데이터객체명, dataNum은 배열순번
  // 리턴구역
  let selData = subName[dataNum];
  console.log("subName", subName);

  // useEffect(()=>{
  //   console.log( '펜할리곤스 서브페이지(이너) 컴포넌트 로딩됨! 스크롤 탑이동!')
  //   window.scrollTo(0,0);
  // });
 
  useEffect(() => {
    console.log('펜할리곤스 서브페이지(이너) 컴포넌트 로딩됨! 스크롤 탑이동!');
    const targetElement = document.getElementById('sub-detail-area');

    if (targetElement) {//존재할때만 실행해서 없을떄 에러안나게
      targetElement.scrollIntoView(
        // { behavior: 'smooth' }
      );
    }
  });
  
  return (
    <>
      <div id="sub-detail-area">
        <section className="sub-detail-area inbox">
          <button className="fixed" onClick={() => window.history.back()}>
            이전
          </button>
          <h2 className="temp-tit">1. 디테일 영역</h2>
          <div className="cont-box">
            <div className="col-12">
              {/* *************제목/내용****************** */}
              <div className="txt-wrap">
                <h2>{selData.tit[0]}</h2>
                <span
                  dangerouslySetInnerHTML={{
                    __html: selData.text[0].split("*").join("<br />"),
                  }}
                />
                {selData.img[0]
                // 값이 포함되어있는지 확인 후 출력
                .includes("collection") && (
                // .indexOf("collection") !== -1 && (
                  <button>View products in{selData.tit[0]}</button>
                )}
              </div>
              {/* ************ 이미지+글**************** */}
              <div className="img-wrap">
                <img
                  src={"/images/sub_page/" + selData.img[0]}
                  alt="메인이미지"
                />
                <h2>{selData.tit[1]}</h2>

                <span
                  dangerouslySetInnerHTML={{
                    __html: selData.text[1].split("*").join("<br />"),
                  }}
                />
              </div>
              {/* ***********이미지 /글 분활상자 ********** */}
              <div className="content-box">
                <div className="img-wrap">
                  <img
                    src={"/images/sub_page/" + selData.img[1]}
                    alt="메인이미지"
                  />
                </div>
                <div className="txt-wrap">
                  <h2>{selData.tit[2]}</h2>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: selData.text[2].split("*").join("<br />"),
                    }}
                  />
                </div>
              </div>
              {/* *************제목/내용****************** */}
              <div className="img-wrap">
                <img
                  src={"/images/sub_page/" + selData.img[3]}
                  alt="메인이미지"
                />
              </div>
              <div className="txt-wrap only">
                <span
                  dangerouslySetInnerHTML={{
                    __html: selData.text[3].split("*").join("<br />"),
                  }}
                />
              </div>
              {/* ************* 이미지 ******************* */}
              <div className="img-wrap">
                <img
                  src={"/images/sub_page/" + selData.img[2]}
                  alt="메인이미지"
                />
              </div>
              {/* *************제목/내용****************** */}
              <div className="txt-wrap only">
                <h2>{selData.tit[3]}</h2>
                <span
                  dangerouslySetInnerHTML={{
                    __html: selData.text[4].split("*").join("<br />"),
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* 비디오 */}
      <Video vidName={selData.video} />
      {/* 관련상품 */}
      <SwiperItemSlide idname={"bestitem-area " + selData.img[0].includes("collection")} selData={selData} />
    </>
  );
} //////////// SubDetail 컴포넌트 ////////
