// 펜할리곤스 콘텐츠컴포넌트 (메인페이지)

export default function Content({type}) {
  // type은 데이터 객체의 이름을 받아옴.
  return (
    <div id="content-area">
      <section className="content-area inbox">
        <h2 className="temp-tit">6. 콘텐츠영역</h2>
        <div className="cont-box">
          <div className="col-12">
            <section className="textbox-wrap">
              <small>{type.stit}</small>
              <h2 className="">{type.tit}</h2>
              <span className="">{type.text}</span>
              <button>{type.btn}</button>
            </section>
            <section className="imgbox-wrap">
              <div className="img-wrap">
                {type.img.map((v, i) => (
                  <a key={i} href="###">
                    <img src={`./images/${v}`} alt={type.stit + i} />
                  </a>
                ))}
                <div className="desc">read more</div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
} //////////// content 컴포넌트 //////////
