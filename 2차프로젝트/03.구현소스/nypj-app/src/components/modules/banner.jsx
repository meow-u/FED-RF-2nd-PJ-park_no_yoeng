// 펜할리곤스 롤링배너 컴포넌트 (메인페이지)


import { bannerImg } from "../data/main_data";

export default function Banner() {
  // 스와이퍼 인스턴스 변수
  let swiper1;
  // 스와이퍼 인스턴스 생성함수 ////
  const setSwiper = () => {
    swiper1 = new Swiper(".mySwiper1", {
      grabCursor: true,
      //  effect: "flip",
      effect: "fade",
      loop: true,
      autoplay: {
        //사이간격
        delay: 2500,
        // // 상포작용 죽이기 속성 없앰!
        // disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        //   hide: true,
      },
      on: {
        slideChangeTransitionStart: function () {
          // 현재 활성화된 슬라이드 요소 가져오기
          var activeSlide = this.slides[this.activeIndex];
          // console.log(activeSlide)

          // 활성화된 슬라이드 내부의 컨텐츠 요소 가져오기
          var slideContent = activeSlide.querySelector("img");
          // console.log(slideContent);

          // 현재 활성화된 슬라이드의 data-swiper-slide-index 속성값 가져오기
          var Index = activeSlide.getAttribute("data-swiper-slide-index");
          // console.log(Index);

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
        },
        slideChangeTransitionEnd: function () {
          // 전환이 끝난 후 스케일 원래대로 되돌리기
          var activeSlide = this.slides[this.activeIndex];
          var slideContent = activeSlide.querySelector("img");
          slideContent.style.transform = "rotate(0deg) scale(1)";

          // // 이전순서 슬라이드
          // var prevSlide = this.slides[this.previousIndex];
          // 다음순서 슬라이드
          // var nextSlide = this.slides[this.nextIndex];
        },
      },
    });
  };
  // 화면 랜더링전 실행구역 /////
  React.useLayoutEffect(() => {
    // 스와이퍼 생성 함수 호출
    setSwiper();
  }); ///// useLayoutEffect //////////

  return (
    <div id="ban-area">
      <section className="ban-area pt1 common-area swiper mySwiper1">
        <h2 className="temp-tit">2. 배너영역</h2>
        <div className="cont-box ban-box swiper-wrapper">
          {bannerImg.map((v, i) => (
            <div className="col-12 swiper-slide">
              <img
                src={`./images/banner_${i + 1}.jpg`}
                alt={"banner" + (i + 1)}
              />
            </div>
          ))}
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-pagination"></div>
        <div className="swiper-scrollbar"></div>
      </section>
    </div>
  );
} //////// banner컴포넌트 ////////
