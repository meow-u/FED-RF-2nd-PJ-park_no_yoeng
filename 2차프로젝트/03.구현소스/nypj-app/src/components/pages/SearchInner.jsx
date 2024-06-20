// 펜할리곤스 Search 서브페이지 컴포넌트

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// css불러오기
import "../../css/_search_inner.scss";
import $ from "jquery";
import { useLayoutEffect } from "react";
import MakeItemList from "../modules/make_itemList";
const showMenu = (e) => {
   $(".menu-box").toggleClass("on");
};


export default function SearchInner({ keyword }) {
   // keyword 는 top-area에서 보낸 검색 값
   useLayoutEffect(()=>{
      // 모바일,웹에따라 옵션상자 on토글
      window.addEventListener("resize", () => {
         if (window.innerWidth >= 768) {
            console.log("웹사이즈");
            $(".menu-box").removeClass("on");
         } /// if
         else if (window.innerWidth < 768) {
            console.log("모바일사이즈");
            $(".menu-box").addClass("on");
         } ////else if
      });
      // 컬렉션포함 하위 인풋체크시 하단메뉴on 넣기
      let checkBox = $('.last>.checkbox');
      // console.log(checkBox)
      checkBox.on('change',(e) => {
         console.log('체크여부', e.target.checked);
         if(e.target.checked){
            $('.coll-sub').addClass('on');
         }else {
            $('.coll-sub').removeClass('on');
         }

     });
      
   },[]);//렌더링전 실행구역

   // 리턴구역

   console.log("난 SearchInner :keyword로 받았어~", keyword);
   return (
      <div id="search-area">
         <section className="search-area inbox">
            <h2 className="temp-tit"> SearchInner</h2>
            <div className="cont-box">
               {/* 검색박스 */}
               <div className="col-3 searching-box">
                  {/* 인풋박스 */}
                  <div className="input-box">
                     <FontAwesomeIcon icon={faSearch} />
                     <input
                        type="text"
                        placeholder="Filter by keyword"
                        defaultValue={keyword}
                     />
                  </div>
                  {/* 필터목록 */}
                  <div className="list-wrap">
                     <h2 onClick={showMenu}>Search option</h2>
                     <ul className="menu-box">
                        <li>
                           PRODUCT
                           <input
                              type="checkbox"
                              id="PRODUCT"
                              className="checkbox"
                           />
                           <label htmlFor="PRODUCT" className="label" />
                           <ol className="item-sub">
                              <li>
                                 FRAGRANCES
                                 <input
                                    type="checkbox"
                                    id="fragrances"
                                    className="checkbox"
                                 />
                                 <label
                                    htmlFor="fragrances"
                                    className="label"
                                 />
                              </li>
                              <li>
                                 BATH & BODY
                                 <input
                                    type="checkbox"
                                    id="bathandbody"
                                    className="checkbox"
                                 />
                                 <label
                                    htmlFor="bathandbody"
                                    className="label"
                                 />
                              </li>
                              <li>
                                 HOME
                                 <input
                                    type="checkbox"
                                    id="home"
                                    className="checkbox"
                                 />
                                 <label htmlFor="home" className="label" />
                              </li>
                              <li>
                                 GIFTING
                                 <input
                                    type="checkbox"
                                    id="gifting"
                                    className="checkbox"
                                 />
                                 <label htmlFor="gifting" className="label" />
                              </li>
                              <li className="last">
                                 COLLECTIONS
                                 <input
                                    type="checkbox"
                                    id="collections"
                                    className="checkbox"
                                 />
                                 <label
                                    htmlFor="collections"
                                    className="label"
                                 />
                                 <ol className="coll-sub">
                                    <li>
                                       British Tales
                                       <input
                                          type="checkbox"
                                          id="britishtales"
                                          className="checkbox"
                                       />
                                       <label
                                          htmlFor="britishtales"
                                          className="label"
                                       />
                                    </li>
                                    <li>
                                       Portraits
                                       <input
                                          type="checkbox"
                                          id="portraits"
                                          className="checkbox"
                                       />
                                       <label
                                          htmlFor="portraits"
                                          className="label"
                                       />
                                    </li>
                                    <li>
                                       Trade Routes
                                       <input
                                          type="checkbox"
                                          id="traderoutes"
                                          className="checkbox"
                                       />
                                       <label
                                          htmlFor="traderoutes"
                                          className="label"
                                       />
                                    </li>
                                    <li>
                                       Potions & Remedies
                                       <input
                                          type="checkbox"
                                          id="potionsremedies"
                                          className="checkbox"
                                       />
                                       <label
                                          htmlFor="potionsremedies"
                                          className="label"
                                       />
                                    </li>
                                 </ol>
                              </li>
                           </ol>
                        </li>
                        <li>
                           OUR STORY
                           <input
                              type="checkbox"
                              id="ourstory"
                              className="checkbox"
                           />
                           <label htmlFor="ourstory" className="label" />
                        </li>
                        <li>
                           COLLECTION
                           <input
                              type="checkbox"
                              id="collection"
                              className="checkbox"
                           />
                           <label htmlFor="collection" className="label" />
                        </li>
                     </ul>
                  </div>
               </div>
               {/* 결과박스 */}
               <div className="col-9 result-box">
                  <div className="wrap">
                     <h2>
                        <strong>'{keyword}'</strong>
                        <br />
                        SEARCH RESULT
                     </h2>
                     <h3>3 All items search results</h3>
                  </div>
                  <aside className="sortbx">
                     <select name="sel" id="sel" className="sel">
                        <option value="0">A-Z</option>
                        <option value="1">Z-A</option>
                     </select>
                  </aside>
                  {/* 뿌리는 컴포넌트 */}
                  <MakeItemList/>
               </div>
            </div>
         </section>
      </div>
   );
} //////////// SearchInner 컴포넌트 ////////
