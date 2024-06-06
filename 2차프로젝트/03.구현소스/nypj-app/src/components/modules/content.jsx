// 펜할리곤스 콘텐츠컴포넌트 (메인페이지)
import "../../css/_content.scss";

import { collection } from "../data/sub_page_data";
import { story_detail, collection_detail } from "../data/sub_detail_data";

// 요소에 직접 추가 : dangerouslySetInnerHTML={{__html:type.text}}
// 내부의 html을 읽어서 렌더링할 수 있음

export default function Content({ type }) {
  // type은 데이터 객체의 이름을 받아옴.
  return (
    <div id="content-area">
      <section className="content-area inbox">
        <h2 className="temp-tit">6. 콘텐츠영역</h2>
        <div className="cont-box">
          <div className="col-12">
            <div className="wrap">
              <section className="textbox-wrap">
                <div>
                  <span className="stit"></span>
                  <small>{type.stit}</small>
                </div>
                <h2>{type.tit}</h2>
                <span
                  className="text"
                  dangerouslySetInnerHTML={{ __html: type.text }}
                ></span>
                <button>{type.btn}</button>
              </section>
            </div>
            <section className="imgbox-wrap">
              <div className="img-wrap">
                {type.img.map((v, i) => (
                  <a
                    key={i}
                    href="###"
                    className={
                      type == collection
                        ? "collection" + (i + 1)
                        : "story" + (i + 1)
                    }
                  >
                    {/* <img src={`./images/${v}`} alt={type.stit + i} /> */}
                    <div className="desc">
                      {type == collection ? (
                        collection_detail[i].tit[0]
                      ) : (
                        <> {/* 하나의 노드로 출력되도록 감싸기  */}
                          Read more
                          <small>{story_detail[i].tit[0]}</small>
                        </>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
} //////////// content 컴포넌트 //////////
