// 펜할리곤스 컨텐츠이너 컴포넌트

// contetnt.jsx 에서 사용시 선택자 우선순위로 content.scss가 적용됨
// 타 컴포넌트에서 사용시 해당 컴포넌트의 scss가 적용됨

// 데이터 불러오기
import { allProducts } from "../data/products_data";

// svg 불러오기
import {EmptyHeartSvg } from "../data/svg/empty_heart.jsx";

// css 불러오기
import { Link } from "react-router-dom";
import "../../css/_inner.scss";

export function Inner({ type, data, idx }) {
  // type은 데이터 객체의이름을 받아옴  story_detail, collection_detail
  // data는 allProducts 전체 데이터
  // idxs는 전달받은 상품 idx
  console.log(type);

  // 전체상품중 전달받은 idx와 같은 데이터 추출 후 변수에 재할당

  // filter() 함수는 조건에 맞는 모든 요소를 포함하는 '배열을 반환'
  // map() 함수는 각 요소를 변환하여 새로운 '배열을 반환'
  // find() 함수는 조건에 맞는 '첫 번째 요소'를 반환하며,없으면 undefined

  let itemdata = allProducts.find((v) => v.idx === idx);
  console.log("itemdata:", itemdata);
  return (
    <section className="textbox-wrap">
      <div>
        <span className="stit"></span>
        <small>{type ? type.stit : itemdata.type}</small>
        {data&&<EmptyHeartSvg/>}
      </div>
      <h2 className={data ? "item-name" : ""}>
        {type ? type.tit : itemdata.name[1]}
      </h2>
     {type && <span
            className="text"
            dangerouslySetInnerHTML={{
              __html:type.text
            }}
            ></span>}
      {data && (
        <>
          <div class="reviews">
            <span class="star-box">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <span key={i} class="star">
                    ☆
                  </span>
                ))}
            </span>
       
            <span className="reviewcount">{itemdata.review} reviews</span>
          </div>
          <p className="kname">{itemdata.name[0]}</p>
          <span className="price">₩{itemdata.price}</span>
          <select onchange="" className="option">
            <option value="">옵션 선택</option>
            <option value="1">1개</option>
            <option value="2">선물 포장(+0)</option>
          </select>
          <span
            className="text"
            dangerouslySetInnerHTML={{
              __html: itemdata.info[0],
            }}
            ></span>
            <button className="item-button buy">Buy a product</button>
            <button className="item-button cart">Add to cart</button>
        </>
      )}
      {type && (
        <Link
          to={type.link}
          // 펜할리 컴포넌트에 라우터가 연결될때만 state값 전달하기 (펜할리일때만 서브 디테일페이지로 감)
          state={type.link === "/Penhaligons" && { data: "brand", num: 0 }}
        >
          <button>{type.btn}</button>
        </Link>
      )}
    </section>
  );
} ///// Inner 컴포넌트 //////
