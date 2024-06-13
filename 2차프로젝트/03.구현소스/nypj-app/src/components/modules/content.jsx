// 펜할리곤스 콘텐츠컴포넌트 (메인페이지)

// CSS 불러오기
import "../../css/_content.scss";

import { collection } from "../data/sub_page_data";
import { story_detail, collection_detail } from "../data/sub_detail_data";
import { Inner } from "./content_inner";
import { Link } from "react-router-dom";

// 요소에 직접 추가 : dangerouslySetInnerHTML={{__html:type.text}}
// 내부의 html을 읽어서 렌더링할 수 있음

export default function Content({ type }) {
  // type은 데이터 객체의 이름을 받아옴.
  console.log('type.stit',type.stit);
  return (
    <div id="content-area">
      <section className={"content-area inbox "+ type.stit.toLowerCase()}>
        <h2 className="temp-tit">6. 콘텐츠영역</h2>
        <div className="cont-box">
          <div className="col-12">
            <div className="wrap">
              <Inner type={ type }/>
            </div>
            <section className="imgbox-wrap">
              <div className="img-wrap">
                {type.img.map((v, i) => (
                   
                  <Link to={//Path 주소연결
                    type.stit ==="COLLECTION"?
                    // [1] /Collection/ + 각컬렉션명 출력하기    
                    //    (1) 공백기준으로 찢고 join으로 연결해서 변환
                    //    "/Collection/" + collection_detail[i].tit[0].split(' ').join('')
                    //    (2) replace(/\s/g,'') -->> replace(정규식 또는 바꿀값 , '바뀔값') 해서 변환
                    "/Collection/" + collection_detail[i].tit[0].replace(/\s/g,'')
               
                    // [2] /OurStory/ + story1..2..3... 출력하기
                    : "/OurStory/" + "story" +(i+1) }
                    key={i}
                    className={
                      type == collection
                        ? "collection" + (i + 1)
                        : "story" + (i + 1)
                    }
                    state={{ data: type.stit.toLowerCase(), num: i }}
                  >
                    {/* <img src={`/images/${v}`} alt={type.stit + i} /> */}
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
                    </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
} //////////// content 컴포넌트 //////////
