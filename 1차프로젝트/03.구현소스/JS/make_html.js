
// 데이터 셋팅 파일 불러오기★★ ///
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
/*  href="#" 잠시뻄클릭안되게 */
  hcode += `
  <div class="store ${v[0]}">
              <a>
                <img src="./images/store${idx+1}.png" alt="매장${idx}" />
              </a>
              <div class="info">
                <p>${v[1].지점}</p>
                <p>${v[1].소개}</p>
                <span>${v[1].태그1}</span>
                <span>${v[1].태그2}</span>
              </div>
            </div>
  `;
})
hcode += 
`
<div class="colorbox"></div>
<div class="bottom-Tit">
  <p>더 많은 스타벅스 스페셜 스토어 정보를 <br />확인하세요</p>
  <div><a href="">MORE VIEW</a></div>
</div>
`;
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
console.log('대상',beenBox,drinkBox,foodBox);

//beenBox
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
//  console.log('원두코드',hcode,beenBox);
 beenBox.innerHTML = hcode

//drinkBox
//기존 hcode 값지우기
hcode = '';
 sbData.drinkData.forEach((v) => {
  
  hcode += `
      <div class="imgbox">
      <a href="#"
      ><img src="./images/${v.img}" alt="${v.alt}"/></a>
      <p>${v.이름}</p>
      <p>${v.추가정보}</p>
      </div>
   `
});
//  console.log('음료코드',hcode,drinkBox);
drinkBox.innerHTML = hcode

//foodBox
//기존 hcode 값지우기
hcode = '';
 sbData.foodData.forEach((v) => {
  
  hcode += `
      <div class="imgbox">
      <a href="#"
      ><img src="./images/${v.img}" alt="${v.alt}"/></a>
      <p>${v.이름}</p>
      <p>${v.추가정보}</p>
      </div>
   `
});
//  console.log('푸드코드',hcode,foodBox);
foodBox.innerHTML = hcode
 })();/////////코드 랩핑 끗////////////


/************************************
     [5-1) 리저브 영역 상단 데이터 넣기] 
     대상영역 : .reservebox
************************************/
(()=>{ /////////코드 랩핑 ////////////
  const reserveBox = dFn.qs('.reservebox');
    let hcode = '';
    sbData.reserveTopData.forEach( x => {
      hcode += `
      <div>
        <img
        class="${x.class}"
        src="./images/${x.img}"
        alt="${x.alt}"
        />
      </div> 
      `;
    }); ////for each ///
    // console.log(hcode);
    reserveBox.innerHTML = hcode;
  })();/////////코드 랩핑 끗////////////


/************************************
     [5) 리저브 영역 데이터 넣기] 
     대상영역 : .infowrap
     같은 포이치를 돌면서
     객체의 type 값 별로 if문 분기하여
     별도의 폼으로 작성 하되 전체배열 순서대로 넣기 !!

************************************/
 (()=>{ /////////코드 랩핑 ////////////
  
  const reserveBox = dFn.qs('.infowrap')

  let hcode = '';
sbData.reserveContData.forEach( x => {

  if (x.type === 'text') {
    // x.content.forEach(text => {});

    hcode += `
    <div class="infobox ${x.className}">
    <p>${x.content[0]}</p>
    <p>${x.content[1]}</p>
    </div>
    `;   
    
  } //// if ////
  else if (x.type === 'image') {
    // x.images.forEach(imgSrc => {});
    hcode += `
    <div class="infobox ${x.className}">
    <div><img src="${x.images[0]}" alt="" /></div>
    <div><img src="${x.images[1]}" alt="" /></div>
    </div>
    `;
 
  } //// else if ////


}); ////////// for each ////////////
// console.log('완성된 hcode값:',hcode);
reserveBox.innerHTML = hcode;

})();/////////코드 랩핑 끗////////////


/************************************
    [5) 뉴스 영역 데이터 넣기] 
    대상영역 : .newstxt
************************************/
(()=>{ /////////코드 랩핑 ////////////
  const newBox = dFn.qs('.news-col');
  let hcode = `
      <div class="newstxt">
      <p>
        MEET OUR SPECIAL<br />
        NEWS!
      </p>
      </div>
    `;
sbData.newsData.forEach(x=>{
hcode += `
<div class="newsbox ${x.class}">
    <figure>
      <a href="#"><img src="./images/${x.img}" alt="${x.alt}" /></a>
    </figure>
    <a href="#">${x.title}</a>
  </div>
`;
});/////////// for each ///////////
  // console.log(hcode);
    newBox.innerHTML = hcode;
})();/////////코드 랩핑 끗////////////


/************************************
    [5) snsbox 아이콘 데이터 넣기] 
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
  console.log(hcode);
    iconBox.innerHTML = hcode;
})();/////////코드 랩핑 끗////////////



  
}///////////// export default //////////
