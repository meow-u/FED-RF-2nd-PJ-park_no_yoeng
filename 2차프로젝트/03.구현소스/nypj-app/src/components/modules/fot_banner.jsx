// 펜할리곤스 하단베너 컴포넌트 (메인페이지)
// CSS 불러오기
import "../../css/_fot_banner.scss";

export function FotBanner() {

    return (
    <div id="bottom-ban-area">
      <section className="bottom-ban-area pt1">
        <h2 className="temp-tit">8. 하단배너영역</h2>
        <div className="cont-box">
          <div className="col-12 bg-box">
          <img src={`${process.env.PUBLIC_URL}/images/logo_trensparent.png`} alt="member" />
          </div>
        </div>
      </section>
    </div>
  );
} ///// FotBanner
