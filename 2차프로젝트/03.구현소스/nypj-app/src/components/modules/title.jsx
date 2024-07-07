// 펜할리곤스 타이틀 컴포넌트 (메인/상세페이지용)
// css 불러오기
import "../../css/_title.scss";

export function Title({ txtData, type = "brand"}) {
  //type은 데이터 객체의 속성명

  let tdata = txtData[type];

  // tdata가 undefined 또는 null인지 확인
  // shop메뉴로 바로들어가면 txt가 할당되지않아 'brand'텍스트로 기본값이 적용되지만, 
  // ctgData에는 그런 키가 없으니 값변경
  if (!tdata) {
    //type이 brand(기본값 적용)라 tdata가 없을때만, type 기본값변경
    type = "shop";
    return tdata = txtData[type];
  }

  // console.log("tdata:", tdata);

  return (
    <div className="tit-wrap">
      <h4 className="tit">{tdata[0]}</h4>
      <h2 className="tit">{tdata[1]}</h2>
      <span className="tit">{tdata[2]}</span>
    </div>
  );
} ///// title 컴포넌트 //////

//export function Title(){} 로 보내거나
//한파일 맨 하단에서  export {title , 어쩌구,  ...}로 보내면
// import {Title} from "./title";이렇게 받을수 있다

// 이방법은 한파일에서 여러개 내보낼 수 있음

//export default 로 보내면
// import Title(이름맘대로) from "./title";이렇게만 받을수 있다
