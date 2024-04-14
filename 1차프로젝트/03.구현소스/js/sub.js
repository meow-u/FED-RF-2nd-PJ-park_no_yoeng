// 스벅 PJ 서브 JS - sub.js //////////////

console.log('1. 모듈로 sub js호출확인');

// 공통처리함수 불러오기(html 공통영역) :가상먼저 처리한다!
import setElement from "./common.js";
setElement(); // 공통함수호출 !!!

// 내함수 js 가져오기 (새이름지음)
import dFn from "./my_function.js";




window.onload = () => { //페이지와 모든 자원이 로드된 후 해당 함수가 실행
(()=>{///////코드랩핑 시작

})();///////코드랩핑 끝
}; ////////// onload 함수 ////////////