// 펜할리곤스 스와이퍼 -신상품 모듈 (메인페이지)
import React from "react";
// 스와이퍼 불러오기
import { Swiper, SwiperSlide } from "swiper/react";
// 사용할 스와이퍼 모듈을 불러오기
import { Pagination, Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
// 스와이퍼 기본 스타일 불러오기 (Swiper 패키지)
import "swiper/css"; // 스와이퍼 기본 CSS
import "swiper/css/effect-fade"; // 페이드효과 CSS
import "swiper/css/navigation"; // 네비게이션 CSS
import "swiper/css/pagination"; // 불릿 페이지네이션 CSS
import 'swiper/css/effect-coverflow';// 슬라이드 회전효과 CSS

// 사용 데이터 가져오기 (상품 / 타이틀데이터)
import { allProducts } from "../data/products_data";
import { titleTxt } from "../data/main_data";
// 하위모듈
import { Title } from "../modules/title";
// 스와이퍼 개별 CSS
import "./css/Swiper_itemSlide.scss";

export default function itemSlide({ idname }) {
  //idname은 호출시 영역구분아이디

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
    800: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
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
      slidesPerView: 1,
      spaceBetween: 0,
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

  return (
    <div id={idname}>
      <section className={idname + " inbox swiper mySwiper2"}>
        <h2 className="temp-tit">
          {idname == "newitem-area" ? "3. 신상품영역" : "5. 베스트메뉴영역"}
        </h2>
        {idname == "newitem-area" ? <Title txtData={titleTxt} type={"brand"} /> :""} 
        <h3 className="catag">
        {idname == "newitem-area" ? "NEW" : "BEST"}
         </h3>
        <Swiper
         uniqueNavElements={true}
         speed={500}
          // 마우스 커서를 손가락 모양으로 변경
          // grabCursor={true}
          // 슬라이드 보이는갯수
          slidesPerView={idname == "newitem-area" ? 4 : 3}
          // 슬라이드 사이 여백
          spaceBetween={30}
          // 네비게이션 버튼 (모듈)
          navigation={true}
          // 아래쪽 불릿 (모듈)
          pagination={{ clickable: true }}
          
          // 슬라이드반복여부
          loop={true}
          // 자동넘김 (모듈)
          autoplay={idname == "newitem-area" ? newAuto : bestAuto}
          /* 영역별 가로 사이즈 스와이퍼 설정변경 */
          breakpoints={idname == "newitem-area" ? newItem : bestItem}
          // 스와이퍼 사용모듈
          modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
          className="mySwiper"
          // 스와이퍼 클래스명 지정
          wrapperClass="cont-box"
          effect={idname == "newitem-area" ? "coverflow" : ""}
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
            {allProducts
              .map((v, i) => (
                <SwiperSlide key={i} className="swiper-slide">
                  <img src={`./images/${v.img}`} alt={`banner${i + 1}`} />
                  <div className="wrap">
                    <h2 className="etit">{v.name[1]}</h2>
                    <h4 className="price">{v.price}원</h4>
                    <h3 className="ktit">{v.name[0]}</h3>
                    <p className="rev">review</p>
                    <span className="rev2">{v.review}</span>
                    <button className="item">Add to Cart</button>
                  </div>
                </SwiperSlide>
              ))
              .filter((v, i) => i < 8)}
          </div>
        </Swiper>
      </section>
    </div>
  );
} //////////// itemSlide 컴포넌트 //////////