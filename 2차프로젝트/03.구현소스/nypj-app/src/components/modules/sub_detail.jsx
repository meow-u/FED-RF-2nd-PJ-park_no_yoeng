// 펜할리곤스 sub detail 페이지 컴포넌트
// css 불러오기
import "../../css/_sub_detail.scss";
export default function SubDetail({ subName, dataNum }) {
  // 리턴구역
  let selData = subName[dataNum];
  console.log(selData);
  return (
    <>
      <div id="sub-detail-area">
        <section className="sub-detail-area inbox">
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
              </div>
              {/* ************ 이미지+글**************** */}
              <div className="img-wrap">
                <img
                  src={"./images/sub_page/" + selData.img[0]}
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
                    src={"./images/sub_page/" + selData.img[1]}
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
                  src={"./images/sub_page/" + selData.img[3]}
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
                  src={"./images/sub_page/" + selData.img[2]}
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

              {/* 비디오 */}
              {/* 신상품 */}
              {/* 하단배너 */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
} //////////// SubDetail 컴포넌트 ////////
