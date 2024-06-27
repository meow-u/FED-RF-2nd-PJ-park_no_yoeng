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

// 사용 데이터 가져오기
import { allProducts } from "../data/products_data";
// 스와이퍼 개별 CSS
import "./css/Swiper_banner.scss";

export default function SwiperDetail({ data, idx }) {
   // data는 전달받은 서브이미지갯수
   // idx는 전달받은 상품 인덱스
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
               clickable: true,
            }}
            // 슬라이드반복여부
            loop={true}
            // 스와이퍼 사용모듈
            modules={[ Pagination, Navigation, Autoplay, EffectFade ]}
            className="mySwiper product-swiper"
         >
            {data.map(
               (_, i) =>
                  i <= 1 && (
                     <SwiperSlide key={i}>
                        <img className="slide-img"
                           src={`${
                              process.env.PUBLIC_URL
                           }/images/products_${idx}/${i + 1}.png`}
                           alt={`products_${idx}`}
                        />
                     </SwiperSlide>
                  )
                  
            )}
         </Swiper>
      </>
   );
}
