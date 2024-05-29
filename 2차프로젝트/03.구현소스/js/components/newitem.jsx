import { allProducts } from "../data/products_data";
console.log(allProducts);

export default function Newitem() {
  // 스와이퍼 인스턴스 변수
  let swiper2;
  // 스와이퍼 인스턴스 생성함수 ////
  const setSwiper = () => {
    swiper2 = new Swiper(".mySwiper2", {
      slidesPerView: 4,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        //사이간격
        delay: 2000,
         //마우스오버시 멈춤여부
         pauseOnMouseEnter: true,
         //오토 플레이 진행시간
         speed: 100,

      },
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
    <section class="newitem-area inbox swiper mySwiper2">
      <h2 class="temp-tit">3. 신상품영역</h2>
      <Title/>
      <h3 className="catag">NEW</h3>
      <div class="cont-box swiper-wrapper">
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


function Title() {
   return (
     <div className="tit-wrap">
       <h4>Our new stories</h4>
       <h2 className="tit">Keep up with Penhaligons</h2>
       <span>Learn more</span>
     </div>
   );
 } ///// title 컴포넌트 //////
 