// 스벅 PJ 서브 JS - sub.js //////////////

console.log('1. 모듈로 sub js호출확인');

// 공통처리함수 불러오기(html 공통영역) :가상먼저 처리한다!
import setElement from "./common.js";
setElement(); // 공통함수호출 !!!

// 내함수 js 가져오기 (새이름지음)
import dFn from "./my_function.js";

// 서브메뉴 데이타 불러오기
import * as SubMenuData from "../data/sub_menu_data.js";
console.log(SubMenuData);

window.onload = () => { //페이지와 모든 자원이 로드된 후 해당 함수가 실행
(()=>{///////코드랩핑 시작
/***************************************** 
 공통배너에 서브이미지 넣기
 * 대상영역: .ban-area .visualView .img
 *****************************************/
let bgBtns = dFn.qsa('.visualView a');
// let bgBoxAll = dFn.qsa('.visualView .bg');
let bgBox1 = dFn.qs('.visualView .img1');
let bgBox2 = dFn.qs('.visualView .img2');
let bgBox3 = dFn.qs('.visualView .img3');
// console.log(bgBox1,bgBtns,bgBoxAll);

//버튼없애기
bgBtns.forEach(ele => {
  ele.style.display = 'none';
});

bgBox1.style.background = 'url(./images/coffee_banner3.jpg) no-repeat center center /cover';
bgBox2.style.background = 'url(./images/coffee_banner1.jpg) no-repeat right center/cover';
bgBox3.style.background = 'url(./images/coffee_banner2.jpg) no-repeat right center/cover';

})();///////코드랩핑 끝

(()=>{///////코드랩핑 시작
/***************************************** 
 서브 커피상품 반복데이터 넣기
 * 대상영역: #sub-coffee-area .col-12
 *****************************************/
let beanArea = dFn.qs('#sub-coffee-area .col-10');
console.log(beanArea);


let hcode = '<h2 class="constTit">COFFEE</h2>';
SubMenuData.beanData.forEach((v) => {
  
  hcode += `
      <div class="imgbox">
      <a href="#"
      ><img src="./images/${v.img}.png" alt="${v.alt}"/></a>
      <p>${v.이름}</p>
      <p>${v.추가정보}</p>
      </div>
   `
});
//  console.log('원두코드',hcode,beanArea);

 beanArea.innerHTML = hcode

})();///////코드랩핑 끝

/***************************************** 
 메뉴클릭시 서브메뉴 높이값대로 여닫기
 이벤트대상들: .ul.nav>li
 확인대상: 대상의 하위  ol
 
 *****************************************/
(()=>{///////코드랩핑 시작
  let menu = dFn.qsa('ul.nav>li');
  // console.log(menu);

menu.forEach(ele=>{ 
  ele.onclick = subOpen;

}); ////foreach////

function subOpen (e){//////////////
console.log('메뉴클릭',this);


let tg = dFn.qsEl(this,'ol');
// 값이 null이면 리턴함 값이 할당되어있으면 무조건 true
if(!tg) return;

 // 해당 메뉴 하위 서브 속박스 높이값
 let mh = tg.offsetHeight;
 console.log('타겟',tg,"타겟높이:", mh,);


 let isOpen = this.offsetHeight;
console.log('높이값확인',isOpen);


//  if(this.classList.contains('이건 클래스만')
 if(isOpen <= 35){
  
  
//열린거 먼저 다 초기화 + 박스색 글씨색 복구
   menu.forEach(ele=>{
    ele.style.height = '35px';
    ele.style.background='transparent';
    dFn.qsEl(ele,'a').style.color = '#222';

    
    this.style.background= 'var(--sb-color)';
    this.style.borderRadius='0px 25px 0px 0px';
    let thisInA = dFn.qsEl(this,'a');
    thisInA.style.color= '#fff';

    this.style.height = mh + 'px';
   });   
  } ///// if /////

 else if(isOpen > 35){

  this.style.background= 'transparent';
    let thisInA = dFn.qsEl(this,'a');
    thisInA.style.color= '#222';

  this.style.height = '0px';
 }



}////클릭 이벤트 함수 /////////////


})();///////코드랩핑 끝


  /***************************************** 
   * 서브배너에 내용바꿔넣기 
   * 대상영역: .visualView>.bg.img1>span
 *****************************************/
(()=>{///////코드랩핑 시작
  let bg1 = dFn.qs('.visualView>.bg.img1');
  let bg2 = dFn.qs('.visualView>.bg.img2');
  let bg3 = dFn.qs('.visualView>.bg.img3');

  console.log('글자대상!!',bg1,bg2,bg3);

  bg2.innerHTML= `
  <span>
  Arabica<br/>
  'BEAN'
  <p>
  스타벅스는 풍부한 풍미와 세련된 바디감과 산미를 가지고 있는<br<br>
고지대에서 생산된 아라비카 커피만 구매합니다.
  </p>
</span
>
  
  `;



})();///////코드랩핑 끝


}; ////////// onload 함수 ////////////