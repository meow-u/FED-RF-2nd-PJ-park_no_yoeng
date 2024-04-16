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
}; //_________________________________________________________________

/**********************************************
  요구사항: 화면너비가 1000px이하일때 
  무한 슬라이드
  + 버튼 클릭시 슬라이드 방향대로! 
  변경대상 : .visualView
  이벤트대상들 : .bg-arr button
 **********************************************/

export default function () {
  // console.log('2. 미디어js연결!')

  let bgBox = domFn.qs(".visualView");
  let btns = domFn.qsa(".bg-arr button");
  // console.log(bgBox,btns);

  // 인터발용 변수 (지울목적)
  let autoI; // 변수 선언
  // 타임아웃용 변수 (지울목적)
  let autoT; // 변수 선언
  // 광클금지 변수
  let overClickCut = false;
  // 광오토금지 변수
  let overAutoCut = false;

  let bgCont = bgBox.querySelectorAll(".bg"); 
  console.log('default 펑션에서의 bgCont[0]',bgCont[0]);
  
  handleResize();
  // 윈도우 리사이즈 감시 이벤트 설정
  domFn.addEvt(window, "resize", handleResize);
  function handleResize() {
    //리사이즈시 마다 클리어오토
    clearAuto();
    console.log('리사이즈~ 기존것 클리어 후 나머지실행!');
    
    if (window.innerWidth < 1000) {
      console.log("1000미만! 감지!");
      //버튼들 클릭시 이벤트함수실행
      for (let x of btns) {
        x.onclick = showSlide; //전달변수없이 실행
      }

      
      //자동실행 함수호출  여기가 시작지점!!!
      autoSlide();

    } ///if///

    else if (window.innerWidth >= 1000) {
      console.log("1000이상! 감지!");
      resetTrans();
    } ///else if///
  } //////// handleResize리사이즈 감시이벤트함수 ///////


  //_______________________________________
  function showSlide(e, sts = true) {


    //sts -(상태) 전달변수 없이 실행은 true
    console.log("전달변수:", e, sts);

    // 만약 버튼 클릭일 경우 인터발 지우기 함수 호출
    if (sts) {
      clearAuto();
    } ///// if ////

    // 광클금지설정
    if (overClickCut) return;
    overClickCut = true;
    setTimeout(() => {
      overClickCut = false;
    }, 2000);

    const isRbtn = sts ? this.classList.contains("arr2") : true;
    // sts=true면 arr2를 확인하고, sts=false(오토실행)이면 true를 할당

    if (isRbtn) {
      // console.log("r버튼! 2초 움직여라");
      bgBox.style.left = "-100%";
      bgBox.style.transition = "1s ease-in-out";

      setTimeout(() => {
        bgBox.appendChild(bgBox.querySelectorAll(".bg")[0]);
        // console.log("2초기다린뒤 뒤로옮기고 + left 0!!(셋타임아웃)");
        bgBox.style.transition = "0s";
        bgBox.style.left = "0%";
      }, 2000);
    } /// isRbtn if ///
    else {

      let bgCont = bgBox.querySelectorAll(".bg");
      /* _______________________________________________________여기에 써야 잘 됨 */

      console.log("맨앞으로 옮기고 + left -100!!");
      bgBox.insertBefore(bgCont[bgCont.length - 1], bgCont[0]);
       console.log('showSlide함수에서의 bgCont[0]',bgCont[0]);
      bgBox.style.left = "-100%";
      bgBox.style.transition = "0s";

      setTimeout(() => {
        console.log("2초동안 left 0!!");
        bgBox.style.left = "0%";
        bgBox.style.transition = "1s ease-in-out";
      }, 0); //left를 두번바꾸므로 비동기화 위해서 타임아웃걸음
    } /// isRbtn else ///
  } //////////// showSlide 이벤트함수 //////////
  //_______________________________________


  // [ 자동실행 함수 ]
  function autoSlide() {

    //(리사이징시 계속 누적 호출되지않도록 광실행방지)
    // overAutoCut이 true인 경우 함수 실행을 중단
    if (overAutoCut) return; 
    overAutoCut = true;
    setTimeout(() => {
      overAutoCut = false;
    }, 5000);

      autoI = setInterval(() => {
        if(window.innerWidth <1000)
        showSlide(false, false);
      }, 5000); ///3초마다 실행되는 너낌

  } ////// autoSlide 함수 //////////

  /// [ 인터발 지우기 함수 ]
  function clearAuto() {
    //지우기 확인!
    console.log("인터발 지워!");
    //1. 인터발 지우기
    clearInterval(autoI);
    //2. 타임아웃 지우기 : 실행쓰나미 방지!!!
    clearTimeout(autoT);
    autoT = setTimeout(() => {
      //3.  2초후 아무작동도 안하면 너비확인후 인터발호출
      if (window.innerWidth < 1000) {
      autoSlide();
      }
    }, 2000); //결과적으론 클릭이벤2초후 5초뒤실행
  } //// clearAuto ///////////////

    // [ 리셋 함수 ]
  function resetTrans(){
    console.log("리셋!");
    clearAuto()
 
    let bgCenter = domFn.qsEl(bgBox,'.center');
    console.log(bgCont[0],bgCenter,bgCont[2]);
    //크기늘렸을때 순서 재정렬
    bgBox.appendChild(bgCont[0]);
    bgBox.appendChild(bgCont[1]);
    bgBox.appendChild(bgCont[2]);
    console.log('순서변경!')

    bgBox.style.transition = '0s';
    bgBox.style.left = '0%';
  }
  


  /**********************************************
  요구사항: 화면너비가 700px이하일때 
  gnb메뉴클릭시 서브메뉴 여닫기
  변경대상 : .submenu
  이벤트대상들 : .gnb .menu
 **********************************************/
  handleResize2();
  domFn.addEvt(window, "resize", handleResize2);
  function handleResize2() {

    if (window.innerWidth < 700) {
      console.log('700미만 확인!')

      let gnbFlex =domFn.qs('nav.gnb')
      console.log('gnbFlex',gnbFlex);
      gnbFlex.style.alignItems = 'flex-start'; 


    let gnbMenu = domFn.qsa(".gnb .menu");
    console.log('gnb개별',gnbMenu);
    gnbMenu.forEach(ele=>{
        /* 토글클릭 기능을 쓰기위해 상태변수선언 */
        ele.isOpen =false;
    domFn.addEvt(ele,'click',submenuOpen);
    });

  function submenuOpen(e){

// 이벤트 전파 차단 (버블링차단!! 이걸안하면 상위 gnb 토글이 작동됨)
    e.stopPropagation()
    console.log('클릭됐다!!',this)
    let tg = domFn.qsEl(this,'.submenu')
     // 해당 메뉴 하위 서브 속박스 높이값
     let mh = domFn.qsEl(this,'.sub-wrap').offsetHeight;
     console.log("높이:", mh);

    if(this.isOpen){// 열려있으면 !! 높이 닫고 false
      tg.style.height = 0 + "px";
      tg.style.transition = ".4s ease-in-out";
      this.isOpen = false;
    }
    else{//안열렸으면 !! 높이만들고 true
      let allSubmenu = domFn.qsa('.submenu');
      console.log('모든서브메뉴',allSubmenu);

      
      /* 모든서브메뉴닫기 */
      allSubmenu.forEach(ele=>{
        ele.style.height = "0px";
      });
      /* 클릭요소 메뉴열기 */
      tg.style.height = mh + "px";
      tg.style.transition = ".4s ease-in-out";
      this.isOpen = true;

    }
    
  } //////submenu open 이벤트함수 //////////
  gnbOpen()
} ////// if /////
else{//700보다 클때 너비 원위치로
  let gnbBox = domFn.qs('nav.gnb');
  gnbBox.style.height = '40px';
    gnbOpen = null;
}///////else



  /**********************************************
   요구사항: 화면너비가 700px보다 작을때 
  네비박스 클릭시 네비박스 토글로 여닫기
  대상:'nav.gnb'
 **********************************************/
function gnbOpen(){
  if (gnbOpen !== null) { // gnbOpen이 null이 아닌 경우에만 실행
    let gnbBox = domFn.qs('nav.gnb');
    // console.log('네비박스',gnbBox);
    /* 토글클릭 기능을 쓰기위해 상태변수선언 */
    let isClick = false


    domFn.addEvt(gnbBox,'click',gnbClick);
    function gnbClick(){
      console.log('네비박스클릭')
    
      if(isClick){
        gnbBox.style.setProperty('--gnb-btn-rotate','0deg');
        gnbBox.style.height = '0px';
        isClick = false;
      }
      else{
        gnbBox.style.setProperty('--gnb-btn-rotate','233deg');
        gnbBox.style.height = '100vh';
        isClick = true;
      }
      };
    }////////////if/////////////
  } /////////////gnb open함수//////////

  }//////////handleResize2 리사이즈 이벤트 함수///////////////








} ///export default
