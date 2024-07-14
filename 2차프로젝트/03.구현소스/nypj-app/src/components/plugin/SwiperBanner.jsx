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
  console.log('메인배너리랜더링');
  // const rdArr =  bannerImg.sort(()=>Math.random()-0.5); // 결과가 배열이라 얕은복사되어 같은배열이 된다.

  // const rdArr = bannerImg.slice(); // 배열복제 (깊은복사) 또는
  // const rdArr = [...bannerImg]; // 배열복제 (깊은복사)

  // [ 랜덤배열 만들기 (1)]
  // sort(()=>Math.random()-0.5) 배열을 랜덤하게 섞는방법. 0.5빼야 -0.5 ~ 0.5 사이의 값이 나온다.
  // ()=> 는  Math.random() 함수가 바로 실행되지 않게 함
  // [ 랜덤배열 만들기 (2)]

  const rdArrIdx = Math.floor(Math.random() * bannerImg.length); 
  // 랜덤한 인덱스값 만들기 ( 결과는 0 부터 배열길이-1 사이의 idx 값이 나온다. )
  // console.log('rdArrIdx(배너랜덤인덱스)',rdArrIdx); // 랜덤한 인덱스값 확인


  return (
    <div id="ban-area">
      <div className="loading">
      <section className="ban-area pt1 common-area">
        <h2 className="temp-tit">2. 배너영역</h2>
        {/* **************************************************************** */}
        <Swiper
          // 처음 보여질 슬라이드 순번
          initialSlide={rdArrIdx}
          virtualTranslate={true}
          uniqueNavElements={true}
          // 마우스 커서를 손가락 모양으로 변경
          grabCursor={true}
          // 슬라이드 사이 여백
          spaceBetween={30}
          // 슬라이드 효과 (모듈)
          effect={"fade"}
          // 네비게이션 버튼 (모듈)
          navigation={true}
          // 아래쪽 불릿 (모듈)
          pagination={{ clickable: true }}
          // 슬라이드반복여부
          loop={true}
          //자동넘김 (모듈)
          autoplay={{
            // 넘김시간
            delay: 3000,
            // 상호작용시 멈춤여부
            disableOnInteraction: false,
          }}
          // 스크롤바 네비
          scrollbar={true}
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
            slideContent.style.filter = "brightness(0.7)";
            slideContent.style.transform =
              Index % 2 === 1
                ? "rotate(10deg) scale(1.6)"
                : "rotate(-10deg) scale(1.6)";
            slideContent.style.transition = "0s";

            // 슬라이드 전환시작시 스케일 키우기 (셋타임아웃을 주어서 초기화된 스케일값이 적용된 후에 실행되도록 설정)
            setTimeout(function () {
              slideContent.style.transition = "1s ease-in-out, filter 1.5s";

              slideContent.style.transform = "rotate(0deg) scale(1)";
              slideContent.style.filter = "brightness(1)";
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
                <img className={i==0 ? "first":''}
                  src={`${process.env.PUBLIC_URL}/images/banner_${i + 1}.jpg`}
                  alt={`banner${i + 1}`}
                />
              </SwiperSlide>
            ))}
          </div>
          {/* *********************************************************** */}
        </Swiper>
      </section>
      </div>
    </div>
  );
}
