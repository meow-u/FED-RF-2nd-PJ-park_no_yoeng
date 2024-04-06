// 스벅 PJ 미디어쿼리 JS - media.js //////////////
//_________________________________________________________________
const domFn = {
  qs: (x) => document.querySelector(x),
  qsEl: (el, x) => el.querySelector(x),
  qsa: (x) => document.querySelectorAll(x),
  qsaEl: (el, x) => el.querySelectorAll(x),
   
  // 이벤트셋팅함수
  addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),

  // 바운딩위치값함수
  getBCR: (ele) => ele.getBoundingClientRect().top,

  // 옵셋탑값 반환함수
  getOT: (ele) => ele.offsetTop,

}//_________________________________________________________________


/**********************************************
  요구사항: 화면너비가 1000px이하일때 
  무한 슬라이드
  + 버튼 클릭시 슬라이드 방향대로! 
  변경대상 : .visualView
  이벤트대상들 : .bg-arr button
 **********************************************/


export default function (){
// console.log('2. 미디어js연결!')

let bgBox = domFn.qs('.visualView');
let btns = domFn.qsa('.bg-arr button');
// console.log(bgBox,btns);




/* 처음시작시 1000이하 화면이면 2번째 이미지부터 보이게 (메인이미지가 2임) */
if (window.innerWidth < 1000){
    bgBox.appendChild(bgBox.querySelectorAll('.bg')[0]);
    console.log('첫번째이미지순서 맨뒤자식으로넘기기')
    bgBox.style.transition = '0s';
    bgBox.style.left = '0%';
}

setInterval(() => {
  if (window.innerWidth < 1000) {
    console.log('움직여라')
    bgBox.style.transition = '2s ease-out';
    bgBox.style.left = '-100%';

    setTimeout(() => {
      if (window.innerWidth < 1000){
      bgBox.appendChild(bgBox.querySelectorAll('.bg')[0]);
      console.log('멈춰라')
      bgBox.style.transition = '0s';
      bgBox.style.left = '0%';
      } 
    }, 3000);

  }
  
}, 6000);

addEventListener("resize", (event) => {
  if(window.innerWidth >= 1000){
    resetTrans()
  }
})

function resetTrans(){
  /* 원래순서로 다시넣기 */
  bgBox.innerHTML =`
  
  <div class="bg img1">
            <span
              >Speacial<br>
              'BEAN'
              <p>
                최상급 아라비카 원두와<br>50년 이상의 전문적인 로스팅 기술을 통해 <br><br>최상의 풍미를 선사합니다.
              </p><a href="#">MORE VIEW</a></span
            >
            
          </div>
          <div class="bg img2 center">
            <span
              >Speacial Place<br> 'RESERVE'
              <p>
                다채로운 풍미를 가진 최고 품질의 원두,<br> 다양한 추출 방식,<br><br> 여기에 커피 전문가의 이야기를 더해 <br> 특별한 경험을 제공합니다.
              </p><a href="#">MORE VIEW</a></span
            >
          </div>
          <div class="bg img3">
            <span
              >Starbucks<br>
              'COFFEE'
              <p>
                <strong>'커피 이상의 특별한 경험'</strong><br><br>
                  세계인들의 생활 속에 스며들어 <br>전 세계의 커피 문화를 선도하는 스타벅스의 커피를 소개합니다.
              </p><a href="#">MORE VIEW</a></span
            >
          </div>
  `;
  
  bgBox.style.transition = '0s';
  bgBox.style.left = '0%';
}


};  ///export default