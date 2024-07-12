// 펜할리곤스 컨텐츠이너 컴포넌트

// contetnt.jsx 에서 사용시 선택자 우선순위로 content.scss가 적용됨
// 타 컴포넌트에서 사용시 해당 컴포넌트의 scss가 적용됨

// 데이터 불러오기
import { allProducts } from "../data/products_data";

// svg 불러오기
import { EmptyHeartSvg } from "../data/svg/empty_heart.jsx";
import $ from "jquery";

// css 불러오기
import { Link } from "react-router-dom";
import "../../css/_inner.scss";
import { useEffect } from "react";

export function Inner({ type, data, idx }) {
   // type은 데이터 객체의이름을 받아옴  story_detail, collection_detail
   // data는 allProducts 전체 데이터
   // idxs는 전달받은 상품 idx
   console.log(type);

   // 전체상품중 전달받은 idx와 같은 데이터 추출 후 변수에 재할당

   // filter() 함수는 조건에 맞는 모든 요소를 포함하는 '배열을 반환'
   // map() 함수는 각 요소를 변환하여 새로운 '배열을 반환'
   // find() 함수는 조건에 맞는 '첫 번째 요소'를 반환하며,없으면 undefined

   useEffect(() => {
      let icount = $("icount").text();
      console.log(icount);
   });

   let itemdata = allProducts.find((v) => v.idx === idx);
   console.log("itemdata:", itemdata);
   return (
      <section className="textbox-wrap">
         <div className="tit-bx">
            <span className="stit"></span>
            <small>{type ? type.stit : itemdata.type}</small>
            {data && <EmptyHeartSvg />}
         </div>

         <h2 className={data ? "item-name" : ""}>
            {type ? type.tit : itemdata.name[1]}
         </h2>
         {type && (
            <span
               className="text"
               dangerouslySetInnerHTML={{
                  __html: type.text,
               }}
            ></span>
         )}
         {data && (
            <>
               <div className="reviews">
                  <span className="star-box">
                     {Array(5)
                        .fill()
                        .map((_, i) => (
                           <span key={i} className="star">
                              ☆
                           </span>
                        ))}
                  </span>

                  <span className="reviewcount">{itemdata.review} reviews</span>
               </div>
               <p className="kname">{itemdata.name[0]}</p>
               <span className="price">₩{itemdata.price}</span>
               <select className="option"
               onChange={// 옵션박스 값체인지시 이벤트
                  (e)=>{
                     // 바뀐 옵션값
                   let option = $(e.target).val();
                   console.log(option);

                   if(option === "item"){// 상품을 선택한 경우
                     $('.opt-wrap.first').css('height',"55px");
                   }else if(option ==="gift"){// 포장을 선택한 경우
                     $('.opt-wrap.next').css('height',"55px");
                   }
                  }
               }>
                  <option defaultvalue="옵션 선택">옵션 선택</option>
                  <option value="item">1개</option>
                  <option value="gift">선물 포장(+0)</option>
               </select>

               <span
                  className="text"
                  dangerouslySetInnerHTML={{
                     __html: itemdata.info[0],
                  }}
               ></span>
               {/* 선택 옵션출력박스 */}

               <div className="opt-wrap first">
                  <span className="item-name">{itemdata.name[0]}</span>
                  <div className="opt-box">
                     <div className="btn-box"
                     onClick={
                        (e)=>{
                           //버튼 id 읽어오기
                           let btn = $(e.target).attr("data-id");
                           console.log(btn);
                           // input박스
                           let tg = $(e.target).siblings(".cntval");

                           if(btn === "up"){// up일시 1증가
                              tg.val(Number(tg.val())+1)
                           }else if( btn === "down" ){// down일시 1이 아니면 -1
                              tg.val(tg.val() == 1? 1 : Number(tg.val())-1)
                           }
                        }   
                     }
                     >
                        <button className="up detail" data-id="up"></button>
                        <input className="cntval" type="number" defaultValue="1" />
                        <button className="down detail" data-id="down"></button>
                     </div>
                     {/* <div className="btn-wrap">
                        <button className="item up">-</button>
                        <input className="icount" type="number" />
                        <button className="item down">+</button>
                     </div> */}

                     <div className="price-wrap">
                        <span className="result">{itemdata.price}원</span>
                        <span className="delete">X</span>
                     </div>
                  </div>
               </div>
               {/* 선물포장 출력박스 */}
               <div className="opt-wrap next">
                  <div className="opt-box">
                     <div className="price-wrap gift">
                        <span className="gift-tit">
                           Penhaligon's Gift Wrapping Service
                        </span>
                        <span className="gift-info">
                           정성을 담아 소중한 분에게 마음을 전달해 드립니다.
                        </span>
                        <span className="delete gift">X</span>
                     </div>
                  </div>
               </div>

               <div className="btn-wrap">
                  <button className="item-button buy">Buy a product</button>
                  <button className="item-button cart">Add to cart</button>
               </div>
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
