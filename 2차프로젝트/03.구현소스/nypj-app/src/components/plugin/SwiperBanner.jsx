// 펜할리곤스 스와이퍼 -배너 모듈 (메인페이지)
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import $ from "jquery";             
// 컨텍스트 API 사용
import { Con } from "../modules/myCon";
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
import { bannerData } from "../data/banner_data";
// 스와이퍼 개별 CSS
import "./css/Swiper_banner.scss";


export default function Banner() {
const myCon = useContext(Con);
// 시작애니 상태변수 ( true 시작슬라이드 클래스 들어감 ) 
  const [initAni,setInitAni] = useState(true);

    useLayoutEffect(() => {
   //스와이퍼가 메뉴전환시 멈추어서 강제 트리거로 해결
   if (myCon.menu !== "main") {
      setTimeout(() => {
         $('.swiper-button-next').trigger('click');
   
      }, 0);
   }
  }, [myCon.menu]);

  
// 처음 true이후 해당시간뒤애 시작애니 false 처리 
  useEffect(()=>{
    setTimeout(() => {
      setInitAni(false);
    }, 4000); // 최소 애니 지속시간합계 보내 커야 함  swiper_banner.scss line25
    console.log("최초한번텍스트모션");
  },[]); // 한번만 실행

   console.log("메인배너리랜더링");
   // const rdArr =  bannerImg.sort(()=>Math.random()-0.5); // 결과가 배열이라 얕은복사되어 같은배열이 된다.

   // const rdArr = bannerImg.slice(); // 배열복제 (깊은복사) 또는
   // const rdArr = [...bannerImg]; // 배열복제 (깊은복사)

   // [ 랜덤배열 만들기 (1)]
   // sort(()=>Math.random()-0.5) 배열을 랜덤하게 섞는방법. 0.5빼야 -0.5 ~ 0.5 사이의 값이 나온다.
   // ()=> 는  Math.random() 함수가 바로 실행되지 않게 함
   // [ 랜덤배열 만들기 (2)]

   const rdArrIdx = Math.floor(Math.random() * bannerData[myCon.menu].length);
   // 랜덤한 인덱스값 만들기 ( 결과는 0 부터 배열길이-1 사이의 idx 값이 나온다. )
   // console.log('rdArrIdx(배너랜덤인덱스)',rdArrIdx); // 랜덤한 인덱스값 확인

   return (
      <div id="ban-area">
         <div className="loading">
            <section className="ban-area pt1 common-area">
               <h2 className="temp-tit">2. 배너영역</h2>
               {/* **************************************************************** */}
               <Swiper
                  onInit={(swiper) => {
                     //Swiper의 이벤트 핸들러로, Swiper가 초기화될 때 실행
                     // 원하는 딜레이 시간(밀리초) 설정
                     const startDelay = 2000; // 예: 5000 (5초)

                     // autoplay 를 멈추고 수동으로 시작!!!!
                     swiper.autoplay.stop();
                     setTimeout(() => {
                        swiper.autoplay.start();
                     }, startDelay);
                  }}
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
                     // 활성화된 슬라이드 내부의 이미지컨텐츠 요소 가져오기
                     const slideContent = activeSlide.querySelector("img");
                     // 활성화된 슬라이드 내부의 이미지컨텐츠 요소 가져오기
                     const slideText = activeSlide.querySelector(".img-text");
                     // 현재 활성화된 슬라이드의 data-swiper-slide-index 속성값 가져오기
                     const Index = activeSlide.getAttribute(
                        "data-swiper-slide-index"
                     );
                     // console.log('>>>>slideText',slideText);

                     // 슬라이드 직전에 회전값, 스케일을 초기화하기
                     // ( Index 값이 홀수/짝수 일때 회전방향 다르게 분기처리 )
                     slideContent.style.filter = "brightness(0.7)";
                     slideContent.style.transform =
                        Index % 2 === 1
                           ? "rotate(10deg) scale(1.6)"
                           : "rotate(-10deg) scale(1.6)";
                     slideContent.style.transition = "0s";

                     // 슬라이드내부 텍스트 위치 초기화 (올라오기 전)
                     slideText.style.transition = "0s";
                     slideText.style.opacity = "0";
                     slideText.style.top = "60%";

                     // 슬라이드 전환시작시 스케일 키우기 (셋타임아웃을 주어서 초기화된 스케일값이 적용된 후에 실행되도록 설정)
                     setTimeout(function () {
                        slideContent.style.transition =
                           "1s ease-in-out, filter 1.5s";

                        slideContent.style.transform = "rotate(0deg) scale(1)";
                        slideContent.style.filter = "brightness(1)";

                        // 슬라이드내부 텍스트 전환시작 동적전환 (css에 40% 기본값)
                        setTimeout(() => {
                           slideText.style.transition = "0.8s ease-out";
                           slideText.style.opacity = "1";
                           slideText.style.top = "38%";
                        }, 300);
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
                  modules={[
                     EffectFade,
                     Navigation,
                     Pagination,
                     Autoplay,
                     Scrollbar,
                  ]}
                  className="mySwiper"
                  // 스와이퍼 클래스명 지정
                  wrapperClass="cont-box ban-box"
               >
                  {/* ********************swiper-wrapper************************* */}
                  <div className="swiper-wrapper">
                     {bannerData[myCon.menu].map((v, i) => (
                        <SwiperSlide key={i} className="col-12 swiper-slide">
                           <img
                              className={i == 0 ? "first" : ""}
                              src={`${process.env.PUBLIC_URL}/images/banner/${myCon.menu}_${
                                 i + 1
                              }.jpg`}
                              alt={`banner${i + 1}`}
                           />
                           
                           <div className={`img-text ${initAni && i === rdArrIdx ? "init-ani " : ""}${myCon.menu}`}>
                           {/* <div className={"img-text"}> */}
                            {v.text}</div>
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
