// 펜할리곤스 Shop 서브페이지 컴포넌트
// 상품 전체 데이터 불러오기
import $ from "jquery";
import { addComma } from "../func/common_fn";
// css불러오기
import "../../css/_cart.scss";
import CartInner from "../modules/cart_inner";
import { Con } from "../modules/myCon";
import { useContext, useEffect, useState } from "react";

export default function Cart() {
  const myCon = useContext(Con);
  // 로컬스 카트 데이터 가져오기
  // let selData = myCon.localsCart;
  let selData = JSON.parse(localStorage.getItem("cart-data"));

  //체크 아이템 상태관리변수
  const [checkarr, setCheckarr] = useState([]);

  useEffect(() => {
    // 체크아이템이 변경될때마다 실행
    let names;
    $(".item input:checked").on("change", function () {
      //체크된 아이템의 이름값을 배열로 모아서 저장하기
      names = $(".item input:checked")
        .map((i, v) => {
          return $(v).closest(".item").find(".ktit").text();
        })
        .get(); // jQuery 객체를 일반 배열로 변환하기 위해 .get() 사용
      //체크된 아이템의 이름배열을 상태변수에 저장

      let checkData = selData.filter((v) => {
        return names.includes(v.name[0]);
      });
      console.log(checkData);

      setCheckarr(checkData);
    });
    console.log("checkarr:", checkarr);
  }, [checkarr]); //체크아이템이 변경될때마다 실행

  // 총 가격 계산 함수
  const sumTotalPrice = () => {
    // 총가격 계산
    let result = selData.reduce((sumTotal, item) => {
      //item은  selData의 순회 중인 배열의 각 요소(v)를 의미

      console.log("지금 값 : ", sumTotal, "더할값", item.total);
      return sumTotal + Number(item.total.replace(/,/g, ""));
    }, 0); //초기값
    console.log("총합계 : ", result);
    return result;
  };

  ////////////////////////////////////////////////////////////////////////
  // 장바구니 selData 배열의 각 객체에 대해 로컬스 wishData와 일치하는 idx 찾기
  // -> 장바구니상품중 위시리스트 상품인것 찾기
  let wishData = JSON.parse(localStorage.getItem("wish-data")) || [];

  let matchItem = selData
    .map((v) => {
      return wishData.find((wishItem) => wishItem.idx === v.idx);
      // -> 겹치는게 없을 경우 자동으로 undefined가 반환
    })
    .filter(Boolean); // -> 배열에서 falsy 값(null, undefined, 0, "", false, NaN)을 모두 제거

  //[ 다른방법 ] `filter(Boolean)`과 동일한 결과를 제공
  // .filter(item => item); // -> filter(item => item)`은 배열의 각 요소를 그대로 평가하여 `truthy` 값만 남깁니다. (`item`이 `truthy` 값일 경우 `true`가 되고, `falsy` 값일 경우 `false`가 되어 필터링됩니다.)

  console.log("matchItem:", matchItem);
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
            <span className="text">
              각 상품의 이미지를 클릭시 해당 상품정보로 이동합니다.
            </span>
            <span className="allcheck">
              <span className="checkbox">
                <input
                  type="checkbox"
                  defaultChecked
                  onClick={(e) => {
                    if (e.target.checked) {
                      // 체크시 아이템체크박스 전체선택
                      $(".item input").prop("checked", true);
                    } else if (e.target.checked === false) {
                      // 체크해제시 아이템체크박스 전체해제
                      $(".item>.check>input").prop("checked", false);
                    }
                  }}
                />
                <span>전체선택</span>
              </span>
              <button
                onClick={(e) => {
                  let checkItem = $(".item input:checked");

                  if (checkItem.length > 0) {
                    //선택된 아이템이 있을때만 실행
                    let confirm = window.confirm(
                      "선택하신 상품을 장바구니에서 삭제하시겠습니까?"
                    );

                    if (confirm) {
                      //확인시 삭제처리
                      console.log("삭제처리");
                      // 체크된 아이템의 이름값을 배열로 모아서 삭제처리
                      let nameArr = [];
                      checkItem.each((i, v) => {
                        //이름읽어와서 빈배열에 추가하기
                        nameArr.push(
                          $(v).parent().parent().find(".ktit").text()
                        );
                      });
                      console.log("nameArr:", nameArr);
                      selData = selData.filter((v) => {
                        // 체크이름배열에 selData의 이름이 포함되지'않는것'만 모아서 리턴
                        return !nameArr.includes(v.name[0]);
                        // return nameArr.every((v1) => v1 !== v.name[0]); // 모든것이 다르면 리턴
                      });
                      console.log("삭제후 selData:", selData);

                      // 선택된 상품으로 카트업데이트
                      myCon.updateCart(selData);
                      // 상단 체크박스 해제
                      $(".checkbox>input").prop("checked", false);

                      if (
                        // 만약 장바구니에 상품이 없을시
                        JSON.parse(localStorage.getItem("cart-data")).length ===
                        0
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
                    } else {
                      // 취소시 리턴
                      return;
                    }
                  }
                }}
              >
                선택삭제
              </button>
            </span>
          </div>

          <div className="center">
            {/* 장바구니 상품 츌력 */}
            <CartInner />
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
