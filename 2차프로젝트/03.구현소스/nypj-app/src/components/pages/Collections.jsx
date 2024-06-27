// 펜할리곤스 Collections 서브페이지 컴포넌트
import Content from "../modules/content";
import { collection } from "../data/sub_page_data";
import { useEffect } from "react";
import $ from "jquery";

export default function Collections(){
    useEffect(() => {
        $("html,body").animate(
          {
            scrollTop: $(".main-wrap").offset().top - 75 + "px",
          },
          400
        );
      }, []);
    // 리턴구역
    return(<>
        <Content type={collection} />
    </>
    );
}//////////// Collections 컴포넌트 ////////
