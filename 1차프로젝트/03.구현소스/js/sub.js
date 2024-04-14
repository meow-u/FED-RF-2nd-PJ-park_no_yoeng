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
 서브 반복데이터 넣기
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
 console.log('원두코드',hcode,beanArea);

 beanArea.innerHTML = hcode



})();///////코드랩핑 끝


}; ////////// onload 함수 ////////////