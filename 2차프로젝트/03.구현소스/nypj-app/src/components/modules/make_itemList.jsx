import { Link } from "react-router-dom";
import React, { useContext, useEffect } from "react";
// 전역 컨텍스트 API 불러오기
import {Con} from "../modules/myCon";
// 상품데이터 불러오기(검색에서는 안씀)
import { allProducts } from "../data/products_data";
import "../../css/_make_item_list.scss";

function MakeItemList({ dt, menuTxt, isSub, sort }) {
  const myCon = useContext(Con);
  //dt - 검색된 배열데이터
  //total - 검색된 배열데이터 개수
  //menuTxt - 클릭한 메뉴텍스트
  console.log("랜더링! menuTxt(=shop에서 받은 txt):", menuTxt);
  console.log("랜더링! isSub 컬렉션하위 메뉴인가?:", isSub);
  let resultShop;

  useEffect(() => {
    // [아이템리스트 위시리스트 포함/ 미포함  버튼 스타일분기 ]
    // SwiperItemSlide.jsx , make_itemList.jsx
    const buttons = document.querySelectorAll('button.item');
    buttons.forEach(el => {
      if (el.innerText === "Remove Wishlist") {
        el.style.filter = 'invert(1)'
        el.style.border = '1px solid #fff'
      }
      else if (el.innerText ==="Add wish List"){
        el.style.filter = 'invert(0)'
        el.style.border = '1px solid #000'
      }
    });
  });


  useEffect(() => {
    console.log("useEffect - menuTxt:", menuTxt); // useEffect 내에서 menuTxt 값을 확인
    /* menuTxt값은 클릭해야 찍히도록 되어있음  */
    let result = allProducts.filter((v) => v.collection === menuTxt);
    if (dt) console.log("검색result:", result);

    console.log("resultShop:", resultShop);
  });
  let total;
  if (dt) total = dt.length;
  // dt 데이터가 있을떄만 콘솔 출력
  if (dt) console.log("상품뿌리는 나 랜더링! 검색 데이터수:", total);
  return (
    // 검색한 dt를 받아와서 상품리스트 생성
    <>
      {!menuTxt && !isSub && total > 0 ? (
        <ul className="product-box search">
          {dt.map((v, i) => (
            <li key={i}>
              <Link to={`/shop/product/${v.idx}`} state={{ itemIdx: v.idx }}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/${v.img}`}
                  alt={`product${i + 1}`}
                />
              </Link>
              <div className="item-wrap">
                <h2 className="etit">{v.name[1]}</h2>
                <h4 className="price">{v.price}원</h4>
                <h3 className="ktit">{v.name[0]}</h3>
                <p className="rev">review</p>
                <span className="rev2">{v.review}</span>
                <button className="item"
                // 위시리스트 버튼클릭시 공통함수연결
                onClick={()=>myCon.WishHandler(v.idx,v)}>
                   {/* 로컬 위시데이터에 해당 idx 포함여부에따라 출력 */}
                      {JSON.parse(localStorage.getItem("wish-data")).some(
                      (v1) => v1.idx === v.idx) ? "Remove Wishlist" : "Add wish List"}</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        // 검색한 데이터가 없을때
        !menuTxt &&
        !isSub &&
        total === 0 && (
          <h2 className="nodata">
            Sorry, we don't have any matches for that search.
          </h2>
        )
      )}

      {/* shop컴포넌트에서 메뉴 클릭시 넘어오는 menuTxt로  상품리스트 생성하기*/}
      <ul className="product-box shop">
        {
          (resultShop = allProducts
            .filter((v) => {
              // console.log("menuTxt",menuTxt);
              // console.log("isSub",isSub);
              return menuTxt === "ALL"
                ? v
                : menuTxt === "COLLECTIONS"
                ? v.collection === "British Tales" ||
                  v.collection === "Potions & Remedies" ||
                  v.collection === "Trade Routes" ||
                  v.collection === "Portraits"
                : // shop컴포넌트에서 컬렉션 메뉴일시 변경됨
                isSub
                ? v.collection === menuTxt
                : !isSub
                ? v.type === menuTxt
                : null;
            })
            .sort((a, b) =>
              //오름차순
              sort === "asc"
                ? a.name[0] > b.name[0]
                  ? 1
                  : a.name[0] < b.name[0]
                  ? -1
                  : 0
                : //내림차순
                sort === "desc"
                ? a.name[0] > b.name[0]
                  ? -1
                  : a.name[0] < b.name[0]
                  ? 1
                  : 0
                : //신상순
                sort === "new"
                ? a.review < b.review
                  ? -1
                  : a.review > b.review
                  ? 1
                  : 0
                : //리뷰순
                sort === "review"
                ? a.review > b.review
                  ? -1
                  : a.review < b.review
                  ? 1
                  : 0
                  : // 높은가격순
                  sort === "bprice"
                  // let a = parseInt(a.price.replace(/,/g,""))
                  ? parseInt()
                : // 전부아닐때 정렬하지 않음
                // parseInt(str.replace(/,/g, '')) "151,000"을 151000으로 반환
                  0
            )
            .map((v, i) => (
              <li key={i}>
                <Link to={`/shop/product/${v.idx}`} state={{ itemIdx: v.idx }}>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/${v.img}`}
                    alt={`product${i + 1}`}
                  />
                </Link>
                <div className="item-wrap">
                  <h2 className="etit">{v.name[1]}</h2>
                  <h4 className="price">{v.price}원</h4>
                  <h3 className="ktit">{v.name[0]}</h3>
                  <p className="rev">review</p>
                  <span className="rev2">{v.review}</span>
                  <button className="item"
                  // 위시리스트 버튼클릭시 공통함수연결
                  onClick={()=>myCon.WishHandler(v.idx,v)}>
                     {/* 로컬 위시데이터에 해당 idx 포함여부에따라 출력 */}
                      {JSON.parse(localStorage.getItem("wish-data")).some(
                      (v1) => v1.idx === v.idx) ? "Remove Wishlist" : "Add wish List"}</button>
                </div>
              </li>
            )))
        }
      </ul>
    </>
  );
}

export default MakeItemList;
