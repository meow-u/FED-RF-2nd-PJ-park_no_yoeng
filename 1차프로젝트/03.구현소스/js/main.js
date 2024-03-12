// 메인 js

// 오버시 메뉴 보이기
// 대상선정 : .gnb .menu

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
    };
    menu[i].onmouseleave = function(){
        let tg = this.querySelector('.submenu');
        // 대상 높이값 지정하기
        tg.style.height = '0px';
        // tg.style.transition = '.4s ease-in-out';
    };

} /// for ///

// 중앙이미지만 오버시 .center 클래스 넣고 빼기
let visualView = document.querySelector('.visualView');
let centerImg = document.querySelector('.img2');

visualView.onmouseenter = function(){
    centerImg.classList.remove('center');
};
visualView.onmouseleave = function(){
    centerImg.classList.add('center');
};
