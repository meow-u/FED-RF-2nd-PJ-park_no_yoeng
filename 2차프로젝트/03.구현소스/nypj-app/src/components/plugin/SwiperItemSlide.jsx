// 펜할리곤스 스와이퍼 -신상품 모듈 (메인페이지)
import React, { useEffect, useContext ,useState } from "react";
import { Link } from "react-router-dom";
// 전역 컨텍스트 API 불러오기
import {Con} from "../modules/myCon";
// 스와이퍼 불러오기
import { Swiper, SwiperSlide } from "swiper/react";
// 사용할 스와이퍼 모듈을 불러오기
import $ from "jquery";
import {
  Pagination,
  Navigation,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
// 스와이퍼 기본 스타일 불러오기 (Swiper 패키지)
import "swiper/css"; // 스와이퍼 기본 CSS
import "swiper/css/effect-fade"; // 페이드효과 CSS
import "swiper/css/navigation"; // 네비게이션 CSS
import "swiper/css/pagination"; // 불릿 페이지네이션 CSS
import "swiper/css/effect-coverflow"; // 슬라이드 회전효과 CSS

// 사용 데이터 가져오기 (상품 / 타이틀데이터)
import { allProducts } from "../data/products_data";
import { titleTxt } from "../data/main_data";
// 하위모듈
import { Title } from "../modules/title";
// 스와이퍼 개별 CSS
import "./css/Swiper_itemSlide.scss";

export default function SwiperItemSlide({
  idname,
  selData,
  itemIdx,
  shoptxt,
  shop,
  setSmenu,
  setIsSub,
  sMenu,
}) {
  let [index, setIndex] = useState(0);
  const myCon = useContext(Con);
  // 리랜더링을 위해 상태값으로 itemIdx 받아옴

  //idname은 호출시 영역구분아이디
  // selData는 sub_detail에서 넘어온 선택데이터
  // itemIdx는 상품상세페이지일시 받아온 idx

  // [ shop 컴포넌트에서 전달]
  // shoptxt는 각각 받아온 상품카테고리명
  // shop는 상품페이지에서 받아온 shop텍스트
  // setSmenu는 클릭시 변경할 상태관리함수

  // 상품상세페이지일때 받아온 idx로 상품데이터 필터링
  let detaildata;
  let filterName;
  if (itemIdx) {
    //모든상품을 순회 후
    detaildata = allProducts.find((v) => v.idx === itemIdx);
    // 이름을 공백으로 나눠서 두번째 단어를 필터링
    filterName = detaildata.name[0].split(" ")[1];
  }
  // console.log("detaildata", detaildata, "filterName", filterName);

  // 영역 아이디별 스와이퍼 반응형변경
  const newItem = {
    200: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1300: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  };

  const newAuto = {
    // 넘김시간
    delay: 2500,
    // 상호작용시 멈춤여부
    disableOnInteraction: true,
  };

  const bestItem = {
    200: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    400: {
      slidesPerView: idname === "bestitem-area inshop" ? 2 : 2,
      spaceBetween: idname === "bestitem-area inshop" ? 20 : 0,
    },
    520: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    850: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1050: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  };

  const bestAuto = {
    // 넘김시간
    delay: 2500,
    // 상호작용시 멈춤여부
    disableOnInteraction: false,
  };

  const isCollecMenu = idname.includes("colletion");
  const isProductMenu = idname.includes("product");
  // console.log("idname.includes('colletion')", idname.includes("colletion"));
  // console.log("idname.includes('product')", idname.includes("product"));
  // console.log(
  //   selData ? console.log("컬렉션상품필터selData.tit[4]:", selData.tit[4]) : ""
  // );
  // console.log("idname:", idname);


  useEffect(() => {
    // [아이템리스트 위시리스트 포함/ 미포함  버튼 스타일분기 ]
    // SwiperItemSlide.jsx , make_itemList.jsx
    const buttons = document.querySelectorAll('button.item');
    buttons.forEach(el => {
      if (el.innerText === "Remove Wish") {
        el.style.filter = 'invert(1)'
        el.style.border = '1px solid #fff'
      }
      else if (el.innerText ==="Add Wish♥"){
        el.style.filter = 'invert(0)'
        el.style.border = '1px solid #000'
      }
    });
  });


  return (
    <div id={idname}>
      <section className={idname + " inbox swiper mySwiper2"}>
        <h2 className="temp-tit">
          {idname === "newitem-area"
            ? "3. 신상품영역"
            : isProductMenu
            ? "관련 상품 영역"
            : "5. 베스트메뉴영역"}
        </h2>
        {idname === "newitem-area" ? (
          <Title txtData={titleTxt} type={"brand"} />
        ) : (
          ""
        )}
        <h3 className="catag shop">
          {idname === "newitem-area" ? (
            "NEW"
          ) : isCollecMenu || isProductMenu ? ( // 컬렉션상세, 상품상세일떄만 true
            "Related products".toUpperCase()
          ) : // 전달받은 shoptxt가 있으면서 값이 Shop/ALL이 아닐때
          shoptxt && shoptxt !== "Shop" && shoptxt !== "ALL" ? (
            // 하나의 요소로 반환하기위해 감쌈
            <>
              {shoptxt} <p>BEST</p>
              {/* shop 메인일때  영역별 버튼클릭시 txt, issub 상태관리변수 변경 */}
              {shop && (
                <button
                  className="more"
                  onClick={() => {
                    if (
                      shoptxt === "British Tales" ||
                      shoptxt === "Potions & Remedies" ||
                      shoptxt === "Trade Routes" ||
                      shoptxt === "Portraits"
                    ) {
                      console.log("컬렉션하위메뉴클릭", shoptxt);

                      // setIsSub(true); // 서브메뉴면 상태변수 변경 (아이템리스트 뿌릴때 필터에서 사용)
                    } else {
                      // setIsSub(false);
                    }
                    setSmenu(shoptxt);
                  }}
                >
                  {" "}
                  See All in Category
                </button>
              )}
            </>
          ) : (
            "BEST"
          )}
        </h3>
        <Swiper
          uniqueNavElements={true}
          speed={500}
          // 마우스 커서를 손가락 모양으로 변경
          // grabCursor={true}
          // 슬라이드 보이는갯수
          slidesPerView={idname === "newitem-area" || isProductMenu ? 4 : 3}
          // 슬라이드 사이 여백
          spaceBetween={30}
          // 네비게이션 버튼 (모듈)
          navigation={true}
          // 아래쪽 불릿 (모듈)
          pagination={{ clickable: true }}
          // 슬라이드반복여부 (메인 shop이 아닐때만 반복)
          loop={true}
          // 자동넘김 (모듈)
          autoplay={
            shop ? false : idname === "newitem-area" ? newAuto : bestAuto
          }
          /* 영역별 가로 사이즈 스와이퍼 설정변경 */
          breakpoints={idname === "newitem-area" ? newItem : bestItem}
          // 스와이퍼 사용모듈
          modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
          className="mySwiper"
          // 스와이퍼 클래스명 지정
          wrapperClass="cont-box"
          effect={idname === "newitem-area" ? "coverflow" : ""}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
        >
          <div className="swiper-wrapper">
            {/* i가 8보다 작은 경우만 필터링 */}
            {/* allProducts의 복사본을 매번 새로 만들어서 정렬 및 필터링 . 
            그냥 allProducts를 사용하면 컴포넌트 재활용시 이미 sort되어있음 */}

            {[...allProducts] ///////중요 !!!!! 컴포넌트 사용할때마다 매번 새롭게 생성하기
              .sort(
                (a, b) =>
                  //컬렉션영역일때만 랜덤정렬
                  isCollecMenu || isProductMenu
                    ? Math.random() - 0.5 //양 음수가 나오게 하여 랜덤하게 정렬
                    : //신상품영역일때는 리뷰 오름차순으로 정렬
                    idname === "newitem-area"
                    ? a.review - b.review
                    : //베스트영역일때는 리뷰 내림차순으로 정렬
                    idname.includes("bestitem-area")
                    ? b.review - a.review
                    : 0 // 모두 아니면 sort값이 0으로 정렬하지 않음
              ) //랜덤한 순서로 정렬
              // 필터는 데이터 바로 뒤에 사용해야함 (map이후에 사용하면  데이터가 바뀔수 있음)

              .filter((v, i) => {
                return isCollecMenu
                  ? v.collection === selData.tit[4]
                  : isProductMenu
                  ? v.name[0].includes(filterName) ||
                    v.collection === detaildata.collection
                  : // ALL과 COLLECTIONS는 아래 필터시 값이없어 별도처리
                  shoptxt === "ALL"
                  ? v
                  : shoptxt === "COLLECTIONS"
                  ? v.collection === "British Tales" ||
                    v.collection === "Potions & Remedies" ||
                    v.collection === "Trade Routes" ||
                    v.collection === "Portraits"
                  : //shoptxt가 null이 아니면 타입, 컬렉션에서 찾기
                  shoptxt
                  ? v.type === shoptxt || v.collection === shoptxt
                  : // : shoptxt === "COLLECTIONS"?
                    v;
              })
              // selData.tit[4]는 각각의 컬렉션 명 sub_page_data 파일에서  products_data와 와 연결함

              //filter((v, i) => v.collection === "British Tales") && i < 8)를 사용하면 안됨.
              //전체 데이터에서 i<8가 적용되기 때문에 총 8개의 데이터가 나오지 않을 수 있음.
              .filter((v, i) => i < 8)

              .map((v, i) => (
                <SwiperSlide key={i} className="swiper-slide">
                  <Link
                    to={`/shop/product/${v.idx}`}
                    state={{ itemIdx: v.idx , sMenu:sMenu}}
                    key={i}
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/images/${v.img}`}
                      alt={`banner${i + 1}`}
                    />
                  </Link>
                  <div className="wrap">
                    <h2 className="etit">{v.name[1]}</h2>
                    <h4 className="price">{v.price}원</h4>
                    <h3 className="ktit">{v.name[0]}</h3>
                    <p className="rev">review</p>
                    <span className="rev2">{v.review}</span>
                    <button className="item"
                    // 위시리스트 버튼클릭시 공통함수연결
                    onClick={()=>myCon.WishHandler(v.idx,v)}
                    >
                      {/* 로컬 위시데이터에 해당 idx 포함여부에따라 출력 */}
                      {JSON.parse(localStorage.getItem("wish-data")).some(
                      (v1) => v1.idx === v.idx) ? "Remove Wish" : "Add Wish♥"}</button>
                   
                  </div>
                </SwiperSlide>
              ))}
          </div>
        </Swiper>
      </section>
    </div>
  );
} //////////// SwiperItemSlide 컴포넌트 //////////
