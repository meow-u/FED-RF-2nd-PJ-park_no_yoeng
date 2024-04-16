// 데이터 파일 불러오기★★ ///
//호출필요x  sbData 객체 호출시 모듈의 모든 값과 함수가 포함되어 있기 때문
import * as sbData from "../data/sb_data.js";

/* 내함수 js 가져오기 (새이름지음)*/
import dFn from './my_function.js';

export default function () {


/************************************
     [0) gnb 메뉴 데이터 넣기] 
     대상영역 : .gnb fbx
     대상데이터 : gnbMenuData
 ************************************/

     (()=>{ /////////코드 랩핑 ////////////
      const gnbBox = dFn.qs('.gnb.fbx');
      
      let hcode = '';
      sbData.gnbMenuData.forEach( v => {
        hcode += `
          <li class="menu">
            <a href="#">${v.mainMenu}</a>
            <!-- 서브메뉴 -->
            <div class="submenu">
              <div class="sub-wrap">
                ${v.subMenus.map(sub => `
                  <ol>
                    ${sub.map(x => `<li><a href="#">${x}</a></li>`).join('\n')}
                  </ol>
                `).join('')}
              </div>
            </div>
          </li>
        `;
      });
    
      // console.log(hcode);
      gnbBox.innerHTML = hcode;
      })();/////////코드 랩핑 끗////////////


/************************************
     [1) 하단영역 메뉴 데이터 넣기] 
     대상영역 : .footer.cont2
     대상데이터 : sbData.footerData
 ************************************/
// ( ()=>{랩핑할코드} )();   <-즉시실행됨

(()=>{ /////////코드 랩핑 ////////////
const footBox = dFn.qs('.footer.cont2');
console.log(sbData.footerData);

let hcode = '';
sbData.footerData.forEach(v=>{
  hcode += `
  <div class="footer ${v[0]}">${
    v[1].map(v=>`<a href="#"><div>${v}</div></a>`).join('')
  }</div>

  `
})

// console.log(hcode);
footBox.innerHTML = hcode;
})();/////////코드 랩핑 끗////////////


/************************************
    [2) snsbox 아이콘 데이터 넣기] 
    대상영역 : .sns-box
************************************/
(()=>{ /////////코드 랩핑 ////////////
  const iconBox = dFn.qs('.sns-box');
  let hcode = `<ol>`;
sbData.iconData.forEach( v=>{
hcode += `
<!-- ${Object.keys(v)} -->
<li>
  <a class="${v[Object.keys(v)]}" href="#"></a>
</li>
`;
});/////////// for each ///////////
hcode += `</ol>`;
  // console.log(hcode);
    iconBox.innerHTML = hcode;
})();/////////코드 랩핑 끗////////////
}///////////// export default //////////
