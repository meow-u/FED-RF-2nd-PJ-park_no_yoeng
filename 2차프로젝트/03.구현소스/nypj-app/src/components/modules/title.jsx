// 펜할리곤스 타이틀 컴포넌트 (메인/상세페이지용)
// css 불러오기
import "../../css/_title.scss";

export function Title({txtData, type="brand"}) {//type은 데이터 객체의 속성명
  
    let tdata = txtData[type];
    console.log(tdata);
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
