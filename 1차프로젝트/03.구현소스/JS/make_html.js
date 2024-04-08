/* 내함수 js 가져오기 (새이름지음)*/
import dFn from './my_function.js';
// 데이터 셋팅 파일 불러오기★★ ///
import * as sbData from "../data/sb_data.js";

export default function () {

/************************************
     [ 하단영역 메뉴 데이터 넣기] 
     대상영역 : .footer.cont2
     대상데이터 : sbData.footerData
 ************************************/
// ( ()=>{랩핑할코드} )();   <-즉시실행됨

(()=>{ /////////코드 랩핑 ////////////
const fcontBox = dFn.qs('.footer.cont2');
console.log(sbData.footerData);

let hcode = '';
sbData.footerData.forEach(v=>{ //여기서 v는  [ val, [val] ] 각각 총 4개
  // console.log('v',v);
  hcode += `
  <div class="footer ${v[0]}">
  ${v[1].map(v=>`<a href="#"><div>${v}</div></a>`).join('')}
  </div>

  `
})

console.log(hcode);
fcontBox.innerHTML = hcode;
})();/////////코드 랩핑 ////////////



} ///////////// export default //////////
