// 펜할리곤스 Shop 서브페이지 컴포넌트
// 상품 전체 데이터 불러오기
import { Link } from "react-router-dom";
import { useContext } from "react";
// import { allProducts } from "../data/products_data";
import $ from "jquery";

import { addComma } from "../func/common_fn";
import { Con } from "../modules/myCon";

// css불러오기
import "../../css/_cart.scss";
import CartInner from "../modules/cart_inner";

export default function Cart() {
  // 전역 상태관리변수를 공유하기위한 컨텍스트 API 불러오기
  const myCon = useContext(Con);

  // 로컬스 카트 데이터 가져오기
  // let selData = myCon.localsCart;
  let selData = JSON.parse(localStorage.getItem("cart-data"));

  // 총 가격 계산 함수
  const sumTotalPrice = () => {
    let result = selData.reduce((sumTotal, item) => {
      console.log("지금 값 : ", sumTotal, "더할값", item.total);
      return sumTotal + Number(item.total.replace(/,/g, ""));
    }, 0); //초기값
    console.log("총합계 : ", result);
    return result;
  };

  // 대상 데이터에서 선택된 갯수와 총가격 변경 후 업데이트 함수
  const upChangeCntTotal = (v,i,tg) => {  // v:데이터, i:인덱스, tg:타겟
    // 대상 데이터에서 선택된 갯수와 총가격 변경
    selData[i].cnt = tg.val();
    selData[i].total = addComma(
      Number(v.price.replace(",", "")) *
        Number(tg.val())
    );
    // 변경된 데이터로 다시 셋팅
    myCon.updateCart(selData);
    }; 


////////////////////////////////////////////////////////////////////////
// 장바구니 selData 배열의 각 객체에 대해 로컬스 wishData와 일치하는 idx 찾기
// -> 장바구니상품중 위시리스트 상품인것 찾기
let wishData = JSON.parse(localStorage.getItem("wish-data")) || [];

let matchItem = selData.map(v => {
  return wishData.find(wishItem => wishItem.idx === v.idx);
  // -> 겹치는게 없을 경우 자동으로 undefined가 반환
})
.filter(Boolean); // -> 배열에서 falsy 값(null, undefined, 0, "", false, NaN)을 모두 제거

//[ 다른방법 ] `filter(Boolean)`과 동일한 결과를 제공
// .filter(item => item); // -> filter(item => item)`은 배열의 각 요소를 그대로 평가하여 `truthy` 값만 남깁니다. (`item`이 `truthy` 값일 경우 `true`가 되고, `falsy` 값일 경우 `false`가 되어 필터링됩니다.)

console.log('matchItem:', matchItem);
// map 함수는 항상 원본 배열과 같은 길이의 새 배열을 반환함. matchingItem가 없어도 undefind가 저장되서
//결과 적으로 길이가 기존 데이터 요소갯수만큼 생기기 떄문에 아닌값은 꼭 필터로 빼줘야 함
////////////////////////////////////////////////////////////////////////



  // 리턴구역
  return (
    <div id="cart-page">
      <section
        className="cart-btn"
        onClick={(e) => {
          /* 카드열기 */
          $(".cart-page").css({
            translate: "-100%",
            transition: "0.3s",
            pointerEvents: "all",
          });
          $("#cart-page").css({
            background: "rgba(0, 0, 0, 0.4)",
            transition: "0.3s",
            pointerEvents: "none",
          });
        }}
      >
        <p>{`CART(${selData.length})`}</p>
      </section>
      <section className="cart-page">
        <div className="item-list">
          {/* 상품리스트 생성하기 */}
          <div className="info-wrap">
            <h3>{`Your Cart List: ${selData.length} items `}</h3>
            <p
              className="close"
              onClick={(e) => {
                /* 카드닫기 */
                $("#cart-page").css({
                  background: "rgba(0, 0, 0, 0)",
                  transition: "0.3s",
                });
                $(".cart-page").css({
                  translate: "0%",
                  transition: "0.3s",
                  pointerEvents: "all",
                });
              }}
            >
              X
            </p>
            <span>각 상품의 이미지를 클릭시 해당 상품정보로 이동합니다.</span>
          </div>

          <div className="center">
            <CartInner selData={selData} upChangeCntTotal={upChangeCntTotal}/>
            <div className="bottom-btn-box">
              <div>
                <p className="total-tit">SUBTOTAL</p>
                <p className="total-price">₩{addComma(sumTotalPrice())}</p>
              </div>
              <p className="total-info">
                TAXES AND SHIPPING CALCULATED AT CHECKOUT
              </p>
              <button
                className="buy"
                onClick={() => {
                  alert("결제기능이 준비중 입니다.");
                }}
              >
                Go to CheckOut
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} //////////// Shop 컴포넌트 ////////
