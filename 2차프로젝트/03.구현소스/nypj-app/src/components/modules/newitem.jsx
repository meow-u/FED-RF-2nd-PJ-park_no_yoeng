// 펜할리곤스 신상품 컴포넌트 (메인페이지)
// Import react
import React from "react";

import { allProducts } from "../data/products_data";
import {Title} from "./title";
import { titleTxt } from "../data/main_data";
console.log(allProducts);

export default function Newitem({idname}) {

  // 스와이퍼 인스턴스 변수
  let swiper2;
  // 스와이퍼 인스턴스 생성함수 ////
  const setSwiper = () => {
    swiper2 = new Swiper(".mySwiper2", {
      slidesPerView: 4,
      spaceBetween: 30,
      loop: true,
      // autoplay: {
      //   //사이간격
      //   delay: 2000,
      //    //마우스오버시 멈춤여부
      //    pauseOnMouseEnter: true,
      //    //오토 플레이 진행시간
      //    speed: 100,

      // },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      /* 가로 사이즈별 스와이퍼 설정변경 */
      breakpoints: {
        // 가로 200px이상
        200: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        501: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        // 가로 700px이상
        700: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        // 가로 1000px이상
        1000: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
      on: {},
    });
  };
  // 화면 랜더링전 실행구역 /////
  React.useLayoutEffect(() => {
    // 스와이퍼 생성 함수 호출
    setSwiper();
  }); ///// useLayoutEffect //////////

  return (
    <div id={idname}>
    <section className={idname+" inbox swiper mySwiper2"}>
      
      <h2 className="temp-tit">
        {idname =="newitem-area"?"3. 신상품영역":"5. 베스트메뉴영역"}
      </h2>
      
      <Title txtData={titleTxt} type={'brand'}/>

      <h3 className="catag">NEW</h3>
      <div className="cont-box swiper-wrapper">
        {/* i가 8보다 작은 경우만 필터링 */}
        {allProducts
          .map((v, i) => (
            <div key={i} className="swiper-slide">
              <img src={`./images/${v.img}`} alt={`banner${i + 1}`} />
              <div className="wrap">
                <h2 className="etit">{v.name[1]}</h2>
                <h4 className="price">{v.price}원</h4>
                <h3 className="ktit">{v.name[0]}</h3>
                <p className="rev">review</p>
                <span className="rev2">{v.review}</span>
                <button className="item">MORE VIEW</button>
              </div>
            </div>
          ))
          .filter((v, i) => i < 8)}
      </div>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-pagination"></div>
    </section>
    </div>
  );
} //////// Newitem 컴포넌트 ////////

// 2. filter() 메서드
//       (1) 검색후 모든 일치값을 리턴
//       (2) 결과가 없으면 빈배열 리턴([]->배열.length 값이 0)
//       (3) 콜백함수구성 : function(val,idx,obj){}
//           1) val : 처리중 배열의 값
//           2) idx : 처리중 배열의 순번
//           3) obj : 처리중 배열전체
//       (4) 리턴데이터 : 배열형데이터(하나여도 배열값으로 넘어옴!)
//       (5) 활용케이스 : 검색리스트 결과 리턴
//       (6) 코드예 :
//           변수 = 배열.filter(v=>{
//               if(v[속성명].indexOf(검색어)!==-1) return true;
//           })
//           -> 배열을 자동순회하여 if문에 해당되는 데이터가 있으면
//           return true 하여 다른값이 계속 나올때까지 배열로 값을
//           할당변수에 저장한다!(배열을 전체순회함!)

// array.sort(() => Math.random() - 0.5).slice(0, 8)
// 위의 코드를 사용하면 배열의 요소를 무작위로 섞고 앞에서부터 8개만 추출할 수 있습니다.

// array.sort(() => Math.random() - 0.5)

// sort 메서드에 전달된 비교 함수는 0보다 작은 값을 반환하면 a가 b보다 작은 것으로 간주하고, 0보다 큰 값을 반환하면 b가 a보다 작은 것으로 간주합니다.
// Math.random() - 0.5는 0 또는 양수 또는 음수를 반환하므로 배열 요소의 순서를 무작위로 섞습니다.


// slice(0, 8)

// slice 메서드는 배열의 일부분을 새로운 배열 객체로 반환합니다.
// slice(0, 8)은 배열의 시작 인덱스 0부터 인덱스 8 전까지의 요소를 새로운 배열로 반환합니다.



// 따라서 array.sort(() => Math.random() - 0.5).slice(0, 8)는 배열의 요소를 무작위로 섞고 앞에서부터 8개만 추출한 새로운 배열을 반환합니다.