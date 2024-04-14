// 공통처리 JS - common.js

/* 내함수 js 가져오기 */
import dFn from "./my_function.js";
/* 공통html 데이터가져오기 */
import comdata from '../data/common_data.js';

//////////////////////////////////////////////////////////
export default function setElement () {

/* 공통html 넣기 */
// 1. 상단영역 코드
dFn.qs('#top-area').innerHTML = comdata.topArea;
// 2. 배너영역 코드
dFn.qs('#ban-area').innerHTML = comdata.banArea;
// 3. 라인안내영역 코드
dFn.qs('#line-notice-area').innerHTML = comdata.lineNoticeArea;
// 4. 하단영역 코드
dFn.qs('#footer-area').innerHTML = comdata.footerArea;





}  ///////////// 공통 setElement 함수 ////////////////////