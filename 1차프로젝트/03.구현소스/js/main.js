// 메인 js
/* *********************************** */
// [ 상단메뉴 오버시 서브메뉴 보이기 ]
// 대상선정 : .gnb .menu
/* *********************************** */

let menu = document.querySelectorAll('.gnb .menu');

console.log("메뉴개수:",menu.length,menu);

for(let i = 0; i<menu.length; i++){
    menu[i].onmouseenter = function(){
        let tg = this.querySelector('.submenu');
        // 해당 메뉴 하위 서브 속박스 높이값
        let mh = this.querySelector('.sub-wrap').offsetHeight
        console.log('높이:',mh);
        // 대상 높이값 지정하기
        tg.style.height = mh + 'px';
        tg.style.transition = '.4s ease-in-out';

        this.classList.add('gnbOn');
        this.querySelector('a').style.color = 'white';
    }; ///마우스 오버 이벤트함수///

    menu[i].onmouseleave = function(){
        let tg = this.querySelector('.submenu');
        // 대상 높이값 지정하기
        tg.style.height = '0px';
        tg.style.transition = '.4s ease-in-out';

        this.classList.remove('gnbOn');
        this.querySelector('a').style.color = '#9f9f9f';
    };///마우스 떠날때 이벤트함수///

} /// for ///
/* ******************************************* */
// [ 중앙이미지만 오버시 .center 클래스 넣고 빼기 ]
// (밝아지는효과 적용된 클래스)
/* ******************************************* */
let visualView = document.querySelector('.visualView');
let centerImg = document.querySelector('.img2');

visualView.onmouseenter = function(){
    centerImg.classList.remove('center');
};
visualView.onmouseleave = function(){
    centerImg.classList.add('center');
};

/******************************************** 
 // [ 하단 ol오버시 상단메뉴 글씨색 바꾸기 ]
 ********************************************/
 // 이벤트대상: .sub-wrap .sub-wrap ol:first-of-type
 // 변경대상: .gnb .menu a:first-of-type
 let ol = document.querySelectorAll('.sub-wrap>ol');
//  let a = document.querySelectorAll('.gnb .menu>a:first-of-type')
// console.log('대상확인:',ol,a);

 for (let i = 0; i < ol.length; i++){
    // console.log(ol[i]);
    ol[i].onmouseenter = function(){

        /* [i]인 요소의 상대적인 선택자!! */
        let gnbname = this.closest('.menu').querySelector('a:first-of-type');

        //(this.closest('.menu').querySelector('a:first-of-type'))는 
        
        //이벤트를 트리거한 각 ol[i] 요소를 기준으로 
        //가장 가까운 조상 요소 중에서 .menu 클래스를 가진 요소의 첫 번째 앵커(<a>) 요소를 선택하므로, 
        //각 ol[i] 값에 따라 다른 요소를 선택합니다.

        console.log(gnbname);
        gnbname.style.color ='white';
        
        let gnbBg = this.closest('.menu');
        // console.log(gnbBg);
        gnbBg.classList.add('gnbOn');

        ol[i].querySelector('a').style.color ='white';
        ol[i].querySelector('a').classList.add('olOn');
    };

    ol[i].onmouseleave =function(){
    
    // 윗 함수에 갇힌 지역변수라 새로 선언
    let gnbname = this.closest('.menu').querySelector('a:first-of-type');
    gnbname.style.color ='#9f9f9f';

    let gnbBg = this.closest('.menu');
    gnbBg.style.backgroundColor ='transparent';
    gnbBg.classList.remove('gnbOn');

    ol[i].querySelector('a').style.color ='#9f9f9f';
    ol[i].querySelector('a').classList.remove('olOn');
    
};
 }