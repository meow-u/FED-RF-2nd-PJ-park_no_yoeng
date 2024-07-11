// 펜할리곤스 Shop 서브페이지 컴포넌트
// 상품 전체 데이터 불러오기
import { Link } from "react-router-dom";
import { allProducts } from "../data/products_data";
import $ from "jquery";

import { addComma } from "../func/common_fn";

// css불러오기
import "../../css/_cart.scss";

export default function Cart() {
  // 리턴구역
  return (
    <div id="cart-page">
      <section className="cart-page">
        <div className="item-list">
          {/* 상품리스트 생성하기 */}
          <div className="info-wrap">
            <h3>Your Cart List: 4 items </h3><p>X</p>
            <span>각 상품의 이미지를 클릭시 상품정보로 이동합니다.</span>
          </div>

          <div className="center">
              <div className="item-box scbar">
                {allProducts.map((v, i) => {
                  return (
                    // 임시조건
                    i < 9 && (
                      <>
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
                            <h3 className="etit">{v.name[1]}</h3>
                            <h2 className="ktit">{v.name[0]}</h2>
                            <div className="itemlist-wrap">
                              <h4 className="price">
                                {addComma(parseInt(v.price) * 100) + "원"}
                              </h4>
                              <h2 className="num">
                                <span>QTY</span>
                                <div className="btn-box">
                                  <button className="up"></button>
                                  <input className="cntval" type="number" />
                                  <button className="down"></button>
                                </div>
                                {/* <span className="cntval">{i + 2}</span> */}
                              </h2>
                            </div>
                            <div className="itemlist-wrap">
                              <h2 className="item-price">
                                ₩
                                {addComma(
                                  (parseInt(v.price) * 100 * (i + 2)).toString()
                                )}
                              </h2>
                              <button className="delete">X</button>
                            </div>
                          </div>
                        </li>
                      </>
                    )
                  );
                })}
              
                </div>
                <div className="bottom-btn-box">
                <div>
                    <p className="total-tit">SUBTOTAL</p>
                    <p className="total-price">₩{'1,100,400'}</p>
                </div>
                <p className="total-info">TAXES AND SHIPPING CALCULATED AT CHECKOUT</p>
                  <button className="buy">Go to CheckOut</button>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
} //////////// Shop 컴포넌트 ////////
