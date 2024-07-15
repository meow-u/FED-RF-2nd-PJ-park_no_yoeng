// 펜할리곤스 컨텐츠이너 컴포넌트

// contetnt.jsx 에서 사용시 선택자 우선순위로 content.scss가 적용됨
// 타 컴포넌트에서 사용시 해당 컴포넌트의 scss가 적용됨

// 데이터 불러오기
import { allProducts } from "../data/products_data";
import { addComma } from "../func/common_fn";

// svg 불러오기
import { EmptyHeartSvg } from "../data/svg/empty_heart.jsx";
import $ from "jquery";

// css 불러오기
import { Link } from "react-router-dom";
import "../../css/_inner.scss";
import { useContext, useEffect, useState } from "react";
import { Con } from "./myCon.jsx";

export function Inner({ type, data, idx }) {
  //컨텍스트 API 사용
  const myCon = useContext(Con);
  console.log(">>>아이템이너 랜더링");
  // type은 데이터 객체의이름을 받아옴  story_detail, collection_detail
  // data는 allProducts 전체 데이터
  // idxs는 전달받은 상품 idx
  // console.log(type);

  // 상품 선택여부 상태변수
  const [isChoice, setIsChoice] = useState(false);
  // 선물포장 선택여부 상태변수
  const [isGift, setIsGift] = useState(false);
  // 선택수량 상태변수
  const [cnt, setCnt] = useState(1);

  useEffect(() => {
    console.log("선택수량 전역변수 cnt:", cnt);
  }, [cnt]);

  useEffect(() => {
    // 재랜더링시 상품선택여부 초기화
    console.log("아이템이너 재랜더링!! 새로운 상품 선택!");

    // 옵션상태변수 & 갯수변수 초기화
    setIsChoice(false);
    setIsGift(false);
    setCnt(1);
    // 셀렉박스 값 초기화
    $('.cntval').val(1);
  }, [idx]); // 전달받은 상품 idx가 변경될때만 재랜더링

  // 전체상품중 전달받은 idx와 같은 데이터 추출 후 변수에 재할당

  // filter() 함수는 조건에 맞는 모든 요소를 포함하는 '배열을 반환'
  // map() 함수는 각 요소를 변환하여 새로운 '배열을 반환'
  // find() 함수는 조건에 맞는 '첫 번째 요소'를 반환하며,없으면 undefined

  // [옵션박스 값체인지시 이벤트 함수]
  function handleOptionChange(e) {
    // 바뀐 옵션값
    let option = $(e.target).val();
    console.log(option);

    if (option === "item") {
      // 상품을 선택한 경우
      // 확장은 state값으로 삼항연산자 통해 처리
      isChoice === false ? setIsChoice(true) : alert("이미 선택한 옵션입니다.");

      // console.log("isChoice",isChoice);
      // console.log("isGift",isGift);
    } else if (option === "gift") {
      // 포장을 선택한 경우

      if (isChoice) {
        //상품을 선택한 경우에만 포장가능
        isGift === false ? setIsGift(true) : alert("이미 선택한 옵션입니다.");
      } else {
        alert("상품 주문시 선물포장이 가능합니다.");

        // console.log("isChoice",isChoice);
        // console.log("isGift",isGift);

        return false;
      }
    }
  } /////////// handleOptionChange 함수 /////////////

  // [옵션삭제 이벤트 함수]
  function deleteOption(e) {
    // 삭제 버튼의 클래스명을 읽어온다.
    let btnClass = $(e.target).data("id");
    console.log("클래스명:", btnClass);

    // 삭제확인여부 변수
    let confirm;

    if (btnClass === "item") {
      confirm = window.confirm("상품을 삭제하시겠습니까?");
      if (confirm) {
        if (isGift) {
          alert("단독 주문이 불가한 옵션이 포함되어 있어, 함께 삭제됩니다.");
          setIsGift(false);
        }
        //상태값 변경 (옵션박스 닫기)
        setIsChoice(false);
      } else {
        return false;
      }
    } else if (btnClass === "gift") {
      confirm = window.confirm("선물포장을 취소하시겠습니까?");
      if (confirm) {
        //상태값 변경 (옵션박스 닫기)
        setIsGift(false);
        //데이터에서 gift 키 속성 삭제
        delete itemdata.gift;
      } else {
        return false;
      }
    }
  } /////////// deleteOption 함수 /////////////

  // 선택된 상품데이터 추출하기 // (장바구니 전달용 데이터 객체)
  let itemdata = allProducts.find((v) => v.idx === idx);
  console.log("itemdata:", itemdata);

  // 총합계 변경함수 (콤마있는 개별가격을 받아서 수량을 반영한 총합계로 변경하기)
  let totalPrice = () => {
    let total = Number(itemdata.price.replace(",", "")) * cnt;
    return addComma(total);
  };

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
          <select
          defaultValue="옵션 선택"
            className="option"
            onChange={(e) => {
              handleOptionChange(e);
              // 옵션박스 초기화 하기 selectedIndex는 옵션박스의 내장메서드
              e.target.selectedIndex = 0
            }}
          >
            <option value="옵션 선택" disabled >옵션 선택</option>
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

          <div className={"opt-wrap first " + (isChoice ? "open" : "")}>
            <span className="item-name">{itemdata.name[0]}</span>
            <div className="opt-box">
              <div
                className="btn-box"
                onClick={(e) => {
                  //버튼 id 읽어오기
                  let btn = $(e.target).attr("data-id");
                  console.log(btn);
                  // input박스
                  let tg = $(e.target).siblings(".cntval");

                  if (btn === "up") {
                    // up일시 1증가
                    tg.val(Number(tg.val()) + 1);
                  } else if (btn === "down") {
                    // down일시 1이 아니면 -1
                    tg.val(tg.val() == 1 ? 1 : Number(tg.val()) - 1);
                  }

                  // 위 분기를 바탕으로 선택수량 변경
                  setCnt(Number(tg.val()));
                  // console.log("선택수량 전역변수 cnt:", cnt);// 여기선 바뀌어도 이전값이 출력됨
                }}
              >
                <button className="up detail" data-id="up"></button>
                <input
                  className="cntval"
                  type="number"
                  defaultValue="1"
                  onBlur={(e) => {
                    // 포커스 아웃시 빈값이면 1로 고정
                    if (e.target.value === "") {
                      e.target.value = 1;
                    }
                    // 선택수량 변경
                    setCnt(Number(e.target.value));
                  }}
                  onKeyDown={(e) => {
                    e.key === "Enter" && e.target.blur();
                  }}
                />
                <button className="down detail" data-id="down"></button>
              </div>

              <div className="price-wrap">
                <span className="result">{totalPrice()}원</span>
                <span
                  className="delete item"
                  data-id="item"
                  onClick={(e) => deleteOption(e)}
                >
                  X
                </span>
              </div>
            </div>
          </div>
          {/* 선물포장 출력박스 */}
          <div className={"opt-wrap next " + (isGift ? "open" : "")}>
            <div className="opt-box">
              <div className="price-wrap gift">
                <span className="gift-tit">
                  Penhaligon's Gift Wrapping Service
                </span>
                <span className="gift-info">
                  정성을 담아 소중한 분에게 마음을 전달해 드립니다.
                </span>
                <span
                  className="delete gift"
                  data-id="gift"
                  onClick={(e) => {
                    deleteOption(e);
                  }}
                >
                  X
                </span>
              </div>
            </div>
          </div>

          <div className="btn-wrap">
            <button
              className="item-button buy"
              onClick={() => {
                console.log("클릭!");
                isChoice
                  ? alert(
                      "결제기능이 준비중 입니다. 먼저 장바구니를 이용해 주세요"
                    )
                  : alert("최소 하나의 상품을 선택해 주세요!");
              }}
            >
              Buy a product
            </button>
            <button
              className="item-button cart"
              onClick={() => {
                // 장바구니 버튼 클릭 !!!
                //여러가지 명령어 칠때는 이렇게 함수형으로 보내기

                console.log("장바구니 클릭!");

                if (isChoice) {

                  // 1. 카트 사용여부 true로 변경
                  myCon.setCartSts(true);

                  console.log("기존 장바구니:", myCon.localsCart);
                  console.log("추가할 상품객체 itemdata :", itemdata);

                  // 2. 추가상품 데이터 가공하기
                  // (1) 총합계 total추가하기
                  itemdata.total = totalPrice();
                  // (2) 선택수량 cnt추가하기
                  itemdata.cnt = cnt;
                  // (3) 선물포장여부 gift추가하기
                  isGift && (itemdata.gift = "Gift Wrapping Service");

                  // 3. 선택된 상품데이터를 로컬카트에 추가하기
                  myCon.addToCart(itemdata);

                  // 4. 추가시마다 애니작동을위한 카드사용상태변수 변경  
                  myCon.setCartSts(false);
                  setTimeout(()=>{
                    myCon.setCartSts(true);

                  },0);
                } else {
                  alert("최소 하나의 상품을 선택해 주세요!");
                }
              }}
            >
              Add to cart
            </button>
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
