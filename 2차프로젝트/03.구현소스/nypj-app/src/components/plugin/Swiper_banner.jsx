// 펜할리곤스 스와이퍼 -배너 모듈 (메인페이지)
import React from "react";
// 스와이퍼 불러오기
import { Swiper, SwiperSlide } from "swiper/react";
// 사용할 스와이퍼 모듈을 불러오기
import {
  Pagination,
  Navigation,
  Autoplay,
  EffectFade,
  Scrollbar,
} from "swiper/modules";
// 스와이퍼 기본 스타일 불러오기 (Swiper 패키지)
import "swiper/css"; // 스와이퍼 기본 CSS
import "swiper/css/effect-fade"; // 페이드효과 CSS
import "swiper/css/navigation"; // 네비게이션 CSS
import "swiper/css/pagination"; // 불릿 페이지네이션 CSS
import "swiper/css/scrollbar"; // 스크롤바 CSS

// 사용 데이터 가져오기 (배너이미지)
import { bannerImg } from "../data/main_data";
// 스와이퍼 개별 CSS
import "./css/Swiper_banner.scss";

export default function Banner() {
  return (
    <div id="ban-area">
      <section className="ban-area pt1 common-area">
        <h2 className="temp-tit">2. 배너영역</h2>
        {/* **************************************************************** */}
        <Swiper
          // 마우스 커서를 손가락 모양으로 변경
          // grabCursor={true}
          // 슬라이드 사이 여백
          spaceBetween={30}
          // 슬라이드 효과 (모듈)
          effect={"fade"}
          // 네비게이션 버튼 (모듈)
          navigation={{
            // 선택자지정 (없으면 고장남)
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
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
          // 스크롤바 네비
          scrollbar={{
            // 선택자 지정
            el: ".swiper-scrollbar",
          }}
          // 슬라이드 전환시작시 이벤트를 발생시키는 스와이퍼 내장이벤트
          onSlideChangeTransitionStart={(swiper) => {
            // 현재 활성화된 슬라이드 요소 가져오기
            const activeSlide = swiper.slides[swiper.activeIndex];
            // 활성화된 슬라이드 내부의 컨텐츠 요소 가져오기
            const slideContent = activeSlide.querySelector("img");
            // 현재 활성화된 슬라이드의 data-swiper-slide-index 속성값 가져오기
            const Index = activeSlide.getAttribute("data-swiper-slide-index");

            // 슬라이드 직전에 회전값, 스케일을 초기화하기
            // ( Index 값이 홀수/짝수 일때 회전방향 다르게 분기처리 )
            slideContent.style.transform =
              Index % 2 === 1
                ? "rotate(5deg) scale(1.2)"
                : "rotate(-5deg) scale(1.2)";
            slideContent.style.transition = "0s";

            // 슬라이드 전환시작시 스케일 키우기 (셋타임아웃을 주어서 초기화된 스케일값이 적용된 후에 실행되도록 설정)
            setTimeout(function () {
              slideContent.style.transition = "transform 0.5s ease-in-out";
              slideContent.style.transform = "rotate(0deg) scale(1)";
            }, 20); /* 10 말고 20부터 잘작동 */
          }}
          onSlideChangeTransitionEnd={(swiper) => {
            // 전환이 끝난 후 스케일 원래대로 되돌리기
            const activeSlide = swiper.slides[swiper.activeIndex];
            const slideContent = activeSlide.querySelector("img");
            slideContent.style.transform = "rotate(0deg) scale(1)";

            // 이전순서 슬라이드
            // const prevSlide = swiper.slides[swiper.previousIndex];
            // 다음순서 슬라이드
            // const nextSlide = swiper.slides[swiper.nextIndex];

          }} /////////// onSlideChangeTransitionEnd ///////////
          
          // 스와이퍼 사용모듈
          modules={[EffectFade, Navigation, Pagination, Autoplay, Scrollbar]}
          className="mySwiper"
          // 스와이퍼 클래스명 지정
          wrapperClass="cont-box ban-box"
        >
          {/* ********************swiper-wrapper************************* */}
          <div className="swiper-wrapper">
            {bannerImg.map((v, i) => (
              <SwiperSlide key={i} className="col-12 swiper-slide">
                <img
                  src={`./images/banner_${i + 1}.jpg`}
                  alt={`banner${i + 1}`}
                />
              </SwiperSlide>
            ))}
          </div>
          {/* *********************************************************** */}
        </Swiper>
        {/* 버튼 / 불릿 / 스크롤네비 */}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-pagination"></div>
        <div className="swiper-scrollbar"></div>
      </section>
    </div>
  );
}
