
// 데이터 셋팅 파일 불러오기★★ ///
import * as sbData from "../data/sb_data.js";
/* 내함수 js 가져오기 (새이름지음)*/
import dFn from './my_function.js';

export default function () {


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
     [2) 스페셜매장 메뉴 데이터 넣기] 
     대상영역 : .store-Tit.sub / .storebox
     대상데이터 : sbData.spStoreData
 ************************************/
(()=>{ ////////코드랩핑 //////////
const storeTitsub = dFn.qs('.store-Tit.sub');
storeTitsub.innerHTML = 
`
스타벅스가 해석한 지역의 고유성 특별한 장소에<br />스타벅스 고유의
아이덴티티를 더해<br />
이색적이고 특별한 경험을 선사하는 매장을 소개합니다.<br /><br />
지역적 특징에 영감을 받아 만든<br />
스타벅스 한정 음료를 즐길수도 있고,<br />
특색있는 인테리어를 경험할 수 있는 곳!<br /><br />
지역 경관과 조화롭게 어우러지며 정취를 물씬 풍기는<br />
스타벅스 스페셜 스토어를 만나보세요
`;

const stBox = dFn.qs('.storebox')
console.log(stBox);
let hcode = ''; 
sbData.spStoreData.forEach((v,idx) => {

  hcode += `
  <div class="store ${v[0]}">
              <a href="#">
                <img src="./images/store${idx+1}.png" alt="매장${idx}" />
              </a>
              <div class="info">
                <p>${v[1].지점}</p>
                <p>${v[1].소개}</p>
                <span>>${v[1].태그1}</span>
                <span>${v[1].태그2}</span>
              </div>
            </div>
  `;
})
// console.log(hcode);
stBox.innerHTML = hcode;
})();////////코드랩핑 끗//////////

/************************************
     [3) 글자 하나씩 돌려 출력하기] 
     대상영역 : .letterItems
************************************/

(()=>{ /////////코드 랩핑 ////////////
  const letterItems = dFn.qs('.letterItems');
  let ltCode = 'STARBUCKS';
  let hcode = '';
 for(let x of ltCode){
   hcode += `<p>${x}</p>`;
 }
 // console.log(hcode);
 letterItems.innerHTML = hcode
  })();/////////코드 랩핑 끗////////////


/************************************
     [4) 베스트메뉴 데이터 넣기] 
     대상영역 : .subbox.been
     대상영역 : .subbox.drink
     대상영역 : .subbox.food

************************************/
  (()=>{ /////////코드 랩핑 ////////////
const beenBox = dFn.qs('.subbox.been')
const drinkBox = dFn.qs('.subbox.drink')
const foodBox = dFn.qs('.subbox.food')

let hcode = '';
sbData.beenData.forEach((v) => {
  
  hcode += `
      <div class="imgbox">
      <a href="#"
      ><img src="./images/${v.img}" alt="${v.alt}"/></a>
      <p>${v.이름}</p>
      <p>${v.추가정보}</p>
      </div>
   `
});
//  console.log(hcode,beenBox);
 beenBox.innerHTML = hcode

  })();/////////코드 랩핑 끗////////////


  
}///////////// export default //////////
