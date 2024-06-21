// 펜할리곤스 Search 서브페이지 컴포넌트

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//데이터 불러오기
import { allProducts } from "../data/products_data";
// css불러오기
import "../../css/_search_inner.scss";
import $ from "jquery";
import { useLayoutEffect, useState } from "react";
import MakeItemList from "../modules/make_itemList";
const showMenu = (e) => {
   $(".menu-box").toggleClass("on");
};

export default function SearchInner({ keyword }) {
   // 검색어 상태관리변수
   let [key, setKey] = useState(keyword);
   // 정렬기준 상태관리변수
   let [sort, setSort] = useState("asc");
   // 값: 오름차순 -asc  ascending / 내림차순 -desc descending
   let [chk, setChk] = useState([]);
   // 필터기준 상태관리변수

   // keyword 는 top-area에서 보낸 검색 값
   console.log("난 SearchInner :keyword로 받았어~", keyword);
   console.log("랜더링후 변경된 chk:", chk);

   // 검색어가 있는 데이터 이름 필터하기
   let schItemData = allProducts.filter((v) => {
      let LowerKey = key.toLowerCase(); // 전달받은 검색키워드 소문자처리
      // 검색기준 데이터 소문자처리 후 indexOf() - 검색어가 포함된 데이터만 필터링
      return (
         //첫번째 또는 두번쨰 이름과 일치하면 값리턴
         v.name[0].toLocaleLowerCase().indexOf(LowerKey) !== -1 ||
         v.name[1].toLocaleLowerCase().indexOf(LowerKey) !== -1
      );

      // if (v.name[0].toLocaleLowerCase().indexOf(LowerKey) !== -1)
      //   return true; // 조건이 참이면 true 값을 반환
      // // 위 조건이 false일 경우 두번째 이름으로 검색
      // else if (v.name[1].toLocaleLowerCase().indexOf(LowerKey) !== -1)
      //   return true;
   });

   // [필터기능 추가하기] /////////
   // (1) 필터기준이 있을때
   if (chk.length > 0) {
      // console.log('chk.length:',chk.length);
      // 상태관리변수 배열의 갯수가 0보다 클때 (체크된게 있을 때)

      // 소문자+공백제거함수
      let LowerNoSpace = (x) => {
         x.toLocaleLowerCase().replace(/\s/g, "");
      };

      schItemData = schItemData.filter((v) => {
         return chk.filter((arr) => {
            // console.log("arr:", arr);
            // console.log(
            //    "v.type.toLocaleLowerCase() :",
            //    v.type.toLocaleLowerCase()
            // );

            return (
               LowerNoSpace(v.type) === arr ||
               LowerNoSpace(v.collection) === arr
            );
         });
      });
   }

   // [정렬기능 추가하기] /////////
   // (1) 오름차순일 경우
   if (sort === "asc") {
      schItemData.sort((a, b) =>
         // a가 크면 일단바꿔 (그래야오름차순)  a가 작으면 (오름차순이니) 마 놔둬!
         a.name[0] > b.name[0] ? 1 : a.name[0] < b.name[0] ? -1 : 0
      );
   } /// if //////////////////////
   else if (sort === "desc") {
      schItemData.sort((a, b) =>
         a.name[0] > b.name[0] ? -1 : a.name[0] < b.name[0] ? 1 : 0
      );
   } /// else if /////////////////

   useLayoutEffect(() => {
      // 모든 체크박스 초기값 체크상태로 설정
      $(".checkbox").attr("checked", true);

      // 처음에 모든체크박스 강제 체인지 이벤트실행
      setTimeout(() => {
         // 셋타임아웃 안넣으면 실행안됨
         $(".checkbox").trigger("change");
      }, 0);

      // });
      // 체크박스 상태변경시 이벤트
      $(".checkbox").on("change", (e) => {
         console.log(e.target.checked);
         // 체크박스 아이디값 읽어오기
         let id = $(e.target).attr("id");

         //React에서 상태관리변수 (예: setChk 함수)는 '직전 상태 값'을 매개변수로 받는 함수형 업데이트 패턴을 사용할 수 있음!!
         setChk((prevChk) => {
            if (e.target.checked) {
               // 체크됐을 때 배열에 추가
               console.log(id);
               console.log("변경전Chk", [...prevChk]);
               return [...prevChk, id];

               // console.log('리랜더링확인');
            } else if (!e.target.checked) {
               // 체크 해제됐을 때 배열에서 제거
               console.log("체크해제");
               return prevChk.filter((v) => v !== id);
            }
         });
      });

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
      let checkBox = $(".last>.checkbox");
      // console.log(checkBox)
      checkBox.on("change", (e) => {
         console.log("체크여부", e.target.checked);
         if (e.target.checked) {
            $(".coll-sub").addClass("on");
         } else {
            $(".coll-sub").removeClass("on");
         }
      });

      // 소멸구역 /////////
      // Clean-up 함수
      return () => {
         $(".checkbox").off("change"); // 이벤트 리스너 제거
      };
   }, []); //렌더링전 실행구역

   // 리턴구역

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
                        onKeyUp={(e) => {
                           //만약 엔터키가 눌리면
                           if (e.key === "Enter") {
                              //입력값(검색어)  전역변수변경
                              setKey(e.target.value);
                              //정렬값 오름차순초기화
                              setSort("asc");
                              //콤보박스도 오름차순 형태로 초기화
                              document.querySelector(".sel").value = "asc";
                           }
                        }}
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
                                    id="bath&body"
                                    className="checkbox"
                                 />
                                 <label htmlFor="bath&body" className="label" />
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
                        <strong>'{key}'</strong>
                        <br />
                        SEARCH RESULT
                     </h2>
                     <h3>{schItemData.length} All items search results</h3>
                  </div>
                  <aside className="sortbx">
                     <select
                        name="sel"
                        id="sel"
                        className="sel"
                        onChange={(e) => setSort(e.target.value)}
                     >
                        {/* value를 읽어 sort전역변수변경 */}
                        <option value="asc">A-Z</option>
                        <option value="desc">Z-A</option>
                     </select>
                  </aside>
                  {/* 뿌리는 컴포넌트 */}
                  <MakeItemList dt={schItemData} />
               </div>
            </div>
         </section>
      </div>
   );
} //////////// SearchInner 컴포넌트 ////////
