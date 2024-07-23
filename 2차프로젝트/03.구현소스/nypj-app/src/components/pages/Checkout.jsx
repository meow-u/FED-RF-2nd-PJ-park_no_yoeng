// 펜할리곤스 Checkout 결제페이지 컴포넌트

import { Con } from "../modules/myCon";
import {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Link, useLocation } from "react-router-dom";
import $ from "jquery";
import "../../css/_checkout.scss";

export default function Checkout() {
  //컨텍스트 API사용
  const myCon = useContext(Con);
  const loc = useLocation();

  // 회원정보, 구매상품, 총가격 가져오기
  let member;
  let buyData = loc.state.buyData; // 맵돌려야함
  let totalPrice = loc.state.totalPrice; //합계금액

  // 로그인된 정보
  if (myCon.loginSts) {
    // 로그인상태이면  member에 데이터 저장
    member = JSON.parse(myCon.loginSts);
  }

  //주소 상태관리변수
  const [address, setAddress] = useState(member ? member.addr : null);
  console.log("address", address);

  // member (로그인데이터) {eml,idx,pwd,uid,unm,zcode}
  // buyData (상품데이터) {idx, type, collection, name, subtit, info, price, img, subimg, review, total, cnt}
  console.log(member); // 로그인된 정보 , 비회원일시 null
  console.log(buyData);
  console.log(totalPrice);

  // 배너변경
  useLayoutEffect(()=>{
    myCon.setMenu("main");
  })
  useEffect(() => {
    // 컴포넌트가 마운트될 때  카드버튼의 초기 텍스트 저장
    // 주소변경버튼 누르면 cart창 열리게 하기
    $(".addr-change").on("click", showAddrFn);

    function showAddrFn() {
      console.log("클릭이다!");
      $(".cart-btn").trigger("click");

      // cart박스 리랜더링을 위한  내부체크 클릭트리거
      // $(".item input").trigger('change');
    }

    return () => {
      $(".addr-change").off("click", showAddrFn);
    };
  }, []);
  // 전체 주문상품 토탈수량
  let totalCnt = 0;
  return (
    // <>
    //   <h1>{buyData.map((v) => v.name)}</h1>
    //   <h1>{totalPrice} </h1>
    //   <h1>{member && member.unm}</h1>
    // </>

    <div className="checkout-area inbox">
      <h1 className="checkout-tit">CHECK YOUR ORDER</h1>
      <p className="notice"> 결제 전 주문정보를 다시 확인하세요. </p>
      <div className="cont-box">
        <div className="order-box">
          <h2>Order list</h2>
          {buyData.map((v, i) => {
            // 전체주문상품 토탈수량
            totalCnt += Number(v.cnt);
            // console.log("totalCnt:", totalCnt);
            return (
              <div key={i} className="order-item">
                <Link
                  className="item-image"
                  to={`/shop/product/${v.idx}`}
                  state={{ itemIdx: v.idx }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/images/${v.img}`}
                    alt={`product${i + 1}`}
                  />
                </Link>
                <div className="item-details">
                  <p className="index">{`No.${i + 1}`}</p>
                  {v.gift && <p className="gift">{v.gift}</p>}
                  <h3>{v.name}</h3>
                  <p className="type">{v.collection}</p>
                  <p>수량: {v.cnt}</p>
                  <p className="item-price">{v.price}원</p>
                  <p className="item-total">{v.total}원</p>
                </div>
              </div>
            );
          })}
          <div className="total-price">
            <div className="length">
              <span>{buyData.length} items</span>
              <span> Total quantity {totalCnt}</span>
            </div>
            <h3>총 결제 금액</h3>
            <p>{totalPrice}원</p>
          </div>
        </div>
        <div className="customer-info">
          <h2>Orderer info</h2>
          {member ? (
            <>
              <p className="guest-message">주문자 정보를 확인해 주세요.</p>
              <div className="member-info">
                <p>
                  <strong>주문자명:</strong> {member.unm}
                </p>
                <p>
                  <strong>이메일:</strong> {member.eml}
                </p>
                <p>
                  <strong>주소:</strong>
                </p>
                <p className="adress-result"> {`[${member.zcode}] ${member.addr}`}</p>
                <button className="addr-change login">변경</button>

                <div className="default-box">
                  <label className="default" id="default">
                    기본 배송지로 설정
                    <input
                      type="checkbox"
                      htmlFor="default"
                      defaultChecked
                    ></input>
                  </label>
                </div>
              </div>
            </>
          ) : (
            <>
              <p className="guest-message">
                비회원 구매입니다. 정보를 입력해주세요.
              </p>
              <div className="member-info">
                <p>
                  <label className="default" htmlFor="name">
                    주문자명:
                  </label>
                  <input id="name" type="text"></input>
                </p>
                <p>
                  <label className="default" htmlFor="number">
                    전화번호:
                  </label>
                  <input id="number" type="text"></input>
                </p>
                <p>
                  <label className="default" htmlFor="email">
                    이메일:{" "}
                  </label>
                  <input id="email" type="text"></input>
                </p>

                <p>
                  <label className="default" htmlFor="addr">
                    주소:{" "}
                  </label>

                  <button className="addr-change">찾기</button>
                </p>
                <p className="default-box">
                  <label className="default" id="default">
                    기본 배송지로 설정
                    <input
                      type="checkbox"
                      htmlFor="default"
                      defaultChecked
                    ></input>
                  </label>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
      <button
        className="checkout-button"
        onClick={() => alert("결제기능이 준비중 입니다.")}
      >
        PAYMENT
      </button>
    </div>
  );
} //////////// Checkout 컴포넌트 ////////
