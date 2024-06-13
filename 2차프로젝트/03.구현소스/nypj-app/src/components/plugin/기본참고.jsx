import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles (Swiper 패키지 내에서 제공하는 CSS 파일을 직접 불러옴)
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./css/Swiper_banner.scss";

// import required modules
// 사용할 스와이퍼 모듈을 불러온다
// import * as SwiperModules from "swiper/modules";
// (여기서는 페이지네이션,네비게이션,자동넘김)
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";

// 사용 데이터 가져오기 (배너이미지)
import { bannerImg } from "../data/main_data";
// 스와이퍼 개별 CSS
import "./css/Swiper_banner.scss";

export default function App() {
  return (
    <>
      <Swiper
        // 마우스 커서를 손가락 모양으로 변경
        grabCursor={true}
        // 슬라이드 사이 여백
        spaceBetween={30}
        // 슬라이드 효과 (모듈)
        effect={"fade"}
        // 네비게이션 버튼 (모듈)
        navigation={true}
        // 아래쪽 불릿 (모듈)
        pagination={{
          // 불릿이 들어갈 선택자
          el: ".swiper-pagination",
          // 불릿 클릭가능여부
          clickable: true,
        }}
        // 슬라이드반복여부 
        loop={true}
        // 자동넘김 (모듈)
        // autoplay={{
        //   // 넘김시간
        //   delay: 2500,
        //   // 상호작용시 멈춤여부
        //   disableOnInteraction: false,
        // }}
        // 스와이퍼 사용모듈
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {bannerImg.map((v, i) => (
          <SwiperSlide>
            <img
              src={`/images/banner_${i + 1}.jpg`}
              alt={"banner" + (i + 1)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      
    </>
  );
}
