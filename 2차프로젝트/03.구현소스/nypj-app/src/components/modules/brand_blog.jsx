// 펜할리곤스 브랜드&블로그 컴포넌트
import React from "react";

function BrandBlog(props) {
   return (
      <div>
         {/* 7. 브랜드&블로그영역 */}
         <div id="brand_blog-area">
            <section class="brand_blog-area inbox">
               <h2 class="temp-tit">7. 브랜드&블로그영역</h2>
               <div class="cont-box">
                  <div class="col-6">
                     <section>
                        <div className="right box1"></div>
                        <div className="right box2"></div>
                     </section>
                  </div>
                  <div class="col-6">
                     <section>
                        <div className="left box1"></div>
                        <div className="left box2"></div>
                     </section>
                  </div>
               </div>
            </section>
         </div>
      </div>
   );
}

export default BrandBlog;
