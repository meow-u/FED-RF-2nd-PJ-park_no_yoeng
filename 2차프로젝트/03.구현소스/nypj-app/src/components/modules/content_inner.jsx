// 펜할리곤스 컨텐츠이너 컴포넌트

// contetnt.jsx 에서 사용시 선택자 우선순위로 content.scss가 적용됨
// 타 컴포넌트에서 사용시 해당 컴포넌트의 scss가 적용됨

// css 불러오기
import { Link } from "react-router-dom";
import "../../css/_inner.scss";

export function Inner({ type }) {
  console.log(type);
  return (
    <section className="textbox-wrap">
      <div>
        <span className="stit"></span>
        <small>{type.stit}</small>
      </div>
      <h2>{type.tit}</h2>
      <span
        className="text"
        dangerouslySetInnerHTML={{ __html: type.text }}
      ></span>
      <Link to={type.link}>
        <button>{type.btn}</button>
      </Link>
    </section>
  );
} ///// Inner 컴포넌트 //////
