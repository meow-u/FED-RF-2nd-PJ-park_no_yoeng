import React from 'react';
import { useContext } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import { Con } from "../modules/myCon";
import "../../css/_cart.scss";


function CartInner({selData , upChangeCntTotal}) {
    const myCon = useContext(Con);


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



    //코드 리턴구역
    return (
        <>
             <div className="item-box scbar">
              {selData.map((v, i) => {
                return (
                  // 데이터의 갯수가 0이상일때만 렌더링
                  selData.length > 0 ? (
                    <li className="item cont-box" key={i}>
                      <Link
                        className="img-wrap"
                        to={`/shop/product/${v.idx}`}
                        state={{ itemIdx: v.idx }}
                      >
                        <img
                          src={`${process.env.PUBLIC_URL}/images/${v.img}`}
                          alt={`product${i + 1}`}
                        />
                      </Link>
                      <div className="item-wrap">
                        <h4 className="cnt">{i + 1}</h4>
                        {/* 선물포장표시 */}
                        {v.gift && <span className="gift">{v.gift}</span>}

                        {/* 위시여부표시 여기서 분기해서 칠! */}
                        <button className="cart-wish-btn" 
                        style={matchItem.some((v1)=>v1.idx === v.idx) ? 
                          {color : "red"}
                           :{color :""}
                        }
                        onClick={(e) => {myCon.WishHandler(v.idx,v,e)}}
                        >♡</button>
                        
                        <h3 className="etit">{v.name[1]}</h3>
                        <h2 className="ktit">{v.name[0]}</h2>
                        <div className="itemlist-wrap">
                          <h4 className="price">{v.price + "원"}</h4>
                          <h2 className="num">
                            <span>QTY</span>
                            <div className="btn-box">
                              <button
                                className="up"
                                onClick={(e) => {
                                  let tg = $(e.target).next();
                                  // console.log(tg);
                                  tg.val(Number(tg.val()) + 1);

                                  
                                  // 대상 데이터에서 선택된 갯수와 총가격 변경
                                  upChangeCntTotal(v, i, tg);
                                }}
                              ></button>
                              <input
                                className="cntval"
                                type="number"
                                value={v.cnt}
                                onChange={(e) => {
                                  console.log("입력값:", e.target.value);
                                  let tg = $(e.target);

                                  // 대상 데이터에서 선택된 갯수와 총가격 변경
                                  upChangeCntTotal(v, i, tg);
                                }}
                                onBlur={(e) => {
                                  // 포커스 아웃시 빈값이면 1로 고정
                                  if (e.target.value === "") {
                                    e.target.value = 1;
                                  let tg = $(e.target);

                                  // 대상 데이터에서 선택된 갯수와 총가격 변경
                                  upChangeCntTotal(v, i, tg);
                                  }
                                }}
                                onKeyDown={(e) => {
                                  e.key === "Enter" && e.target.blur();
                                }}
                              />
                              <button
                                className="down"
                                onClick={(e) => {
                                  let tg = $(e.target).prev();
                                  // console.log(tg);
                                  tg.val(
                                    tg.val() == 1 ? 1 : Number(tg.val()) - 1
                                  );

                                  // 대상 데이터에서 선택된 갯수와 총가격 변경
                                  upChangeCntTotal(v, i, tg);
                                }}
                              ></button>
                            </div>
                          </h2>
                        </div>
                        <div className="itemlist-wrap">
                          <h2 className="item-price">₩{v.total}</h2>
                          <button
                            className="delete"
                            onClick={(e) => {
                              let confirm = window.confirm(
                                "선택하신 상품을 장바구니에서 삭제하시겠습니까?"
                              );

                              if (confirm) {
                                // 선택된 상품 삭제
                                myCon.deleteCart(v);

                                // 결과 0개
                                //   console.log(
                                //     "localStorage.getItem('cart-data')",
                                //     JSON.parse(
                                //       localStorage.getItem("cart-data")
                                //     ).length
                                //   );

                                // 결과 1개
                                //   console.log(
                                //     "selData.length",
                                //     selData.length,
                                //     selData
                                //   );

                                // 상태 업데이트의 비동기성:  React의 상태 업데이트는 비동기적!
                                // myCon.deleteCart(v)를 호출한 직후에 selData를 조회하면, 아직 업데이트되지 않은 이전 상태를 보여줌.

                                // 로컬 스토리지와 React 상태의 불일치:
                                // localStorage.getItem("cart-data")는 실시간으로 최신 데이터를 반영하지만, React의 selData 상태는 컴포넌트가 리렌더링될 때까지 업데이트되지 않는다.

                                // 클로저(Closure) 효과:
                                // selData는 컴포넌트가 렌더링될 때의 값을 참조하고 있어, 이벤트 핸들러 내에서 사용될 때 최신 값을 반영하지 않을 수 있습니다.

                                if (
                                  JSON.parse(localStorage.getItem("cart-data"))
                                    .length === 0
                                ) {
                                  // 장바구니에 상품이 없을시 close버튼 강제 트리거
                                  setTimeout(() => {
                                    $(".close").trigger("click");
                                    console.log("x 클릭!");
                                    setTimeout(() => {
                                      // 카드 사용여부 상태변수 변경
                                      myCon.setCartSts(false);
                                    }, 200);
                                  }, 200);
                                }
                              }
                            }}
                          >
                            X
                          </button>
                        </div>
                      </div>
                    </li>
                  ) : (
                    <h1>장바구니에 상품이 존재하지 않습니다.</h1>
                  )
                );
              })}
            </div>
        </>
    );
}

export default CartInner;