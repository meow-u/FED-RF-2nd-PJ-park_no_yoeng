  import { Link } from "react-router-dom";
import React, { useContext, useEffect, useRef, useState } from "react";
//페이징모듈 불러오기
import { PagingList } from "../modules/board_modules/pasing_list";
// 전역 컨텍스트 API 불러오기
import { Con } from "../modules/myCon";
// 상품데이터 불러오기(검색에서는 안씀)
import { allProducts } from "../data/products_data";
import "../../css/_make_item_list.scss";

function MakeItemList({ dt, menuTxt, isSub, sort, sMenu }) {
  // 현재 페이지번호
  let [currentPageNum, setCurrentPageNum] = useState(1);
  // 뿌려지는 필터 결과데이터
  let resultShop;
  // 전체 레코드 개수
  let totalCount = useRef(resultShop ? resultShop.length : 0);
  // 현재 페이징블록 번호
  let currentPageBlockNum = useRef(1);
  // 페이지당 레코드 개수
  let boardBlockSize = 12;
  // 페이징블록 당 페이지갯수 (한번에 보여줄 페이지개수)
  let pageBlockSize = 4;

  const myCon = useContext(Con);
  //dt - 검색된 배열데이터
  //total - 검색된 배열데이터 개수
  //menuTxt - 클릭한 메뉴텍스트
  //sMenu는 shop에서 받아온 메뉴텍스트
  console.log("랜더링! menuTxt(=shop에서 받은 txt):", menuTxt);
  console.log("랜더링! isSub 컬렉션하위 메뉴인가?:", isSub);
  console.log("전체 레코드수:", totalCount.current);
  console.log("잘찍힘sMenu:", sMenu);

  useEffect(() => {
    // [아이템리스트 위시리스트 포함/ 미포함  버튼 스타일분기 ]
    // SwiperItemSlide.jsx , make_itemList.jsx
    const buttons = document.querySelectorAll("button.item");
    buttons.forEach((el) => {
      if (el.innerText === "Remove Wish") {
        el.style.filter = "invert(1)";
        el.style.border = "1px solid #fff";
      } else if (el.innerText === "Add Wish♥") {
        el.style.filter = "invert(0)";
        el.style.border = "1px solid #000";
      }
    });
  });

  useEffect(() => {
    console.log("useEffect - menuTxt:", menuTxt); // useEffect 내에서 menuTxt 값을 확인
    /* menuTxt값은 클릭해야 찍히도록 되어있음  */
    let result = allProducts.filter((v) => v.collection === menuTxt);
    if (dt) console.log("검색result:", result);

    // console.log("resultShop:", resultShop);
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
              <Link to={`/shop/product/${v.idx}`} state={{ itemIdx: v.idx ,sMenu:sMenu}}>
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
                <button
                  className="item"
                  // 위시리스트 버튼클릭시 공통함수연결
                  onClick={() => myCon.WishHandler(v.idx, v)}
                >
                  {/* 로컬 위시데이터에 해당 idx 포함여부에따라 출력 */}
                  {JSON.parse(localStorage.getItem("wish-data")).some(
                    (v1) => v1.idx === v.idx
                  )
                    ? "Remove Wish"
                    : "Add Wish♥"}
                </button>
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
            .sort(
              (a, b) =>
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
                  // parseInt(str.replace(/,/g, '')) "151,000"을 151000으로 반환
                  sort === "bprice"
                  ? parseInt(a.price.replace(/,/g, "")) <
                    parseInt(b.price.replace(/,/g, ""))
                    ? 1
                    : parseInt(a.price.replace(/,/g, "")) >
                      parseInt(b.price.replace(/,/g, ""))
                    ? -1
                    : 0
                  : // 낮은가격순
                  sort === "sprice"
                  ? parseInt(a.price.replace(/,/g, "")) >
                    parseInt(b.price.replace(/,/g, ""))
                    ? 1
                    : parseInt(a.price.replace(/,/g, "")) <
                      parseInt(b.price.replace(/,/g, ""))
                    ? -1
                    : 0
                  : 0 // 전부아닐때 정렬하지 않음 (0을 쓰면 정렬안됨)
            )
            .map((v, i) => (
              <li key={i}>
                <Link to={`/shop/product/${v.idx}`} state={{ itemIdx: v.idx ,sMenu:sMenu}}>
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
                  <button
                    className="item"
                    // 위시리스트 버튼클릭시 공통함수연결
                    onClick={() => myCon.WishHandler(v.idx, v)}
                  >
                    {/* 로컬 위시데이터에 해당 idx 포함여부에따라 출력 */}
                    {JSON.parse(localStorage.getItem("wish-data")).some(
                      (v1) => v1.idx === v.idx
                    )
                      ? "Remove Wish"
                      : "Add Wish♥"}
                  </button>
                </div>
              </li>
            ))).filter((v, i) => {

              totalCount.current = resultShop.length;
              return i >= (currentPageNum - 1) * boardBlockSize && i < currentPageNum * boardBlockSize;
            })
          }
      </ul>
      {
        /* 페이징 컴포넌트 */
        /******************************************* 
      [ 전달변수 ]
      1. totalCount : 전체 레코드 개수
      2. boardBlockSize : 페이지 당 레코드 개수
      3. currentPageNum : 현재 페이지번호
      4. setCurrentPageNum : 현재 페이지번호 변경 메서드
      5. currentPageBlockNum : 현재 페이징블록 번호
      6. pageBlockSize :  페이징블록 당 페이지갯수 (한번에 보여줄 페이지개수)
    *******************************************/
        // 전체 페이지 개수 : 전체레코드수 / 페이지당개수
        // 유의점: 나머지가 있는지 검사해서 있으면 +1
      }
     
      {/* {console.log("전체 레코드수:", totalCount.current)} */}
      {totalCount.current > 0 && (
        <PagingList
          totalCount={totalCount}
          boardBlockSize={boardBlockSize}
          currentPageNum={currentPageNum}
          setCurrentPageNum={setCurrentPageNum}
          currentPageBlockNum={currentPageBlockNum}
          pageBlockSize={pageBlockSize}
        />
      )}
    </>
  );
}

export default MakeItemList;
