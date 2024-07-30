// lIST 모드 서브 컴포넌트
// 리스트 모드 서브 컴포넌트는 리스트형태의 게시판을 보여주는 컴포넌트

// 바인드 리스트 함수 불러오기
import { bindList } from "../../func/board_fn/bind_list_fn";
// 페이지 구성 컴포넌트
import { PagingList } from "../board_modules/pasing_list";

// 페이지 구성 컴포넌트

import $ from "jquery";
/****************************************** 
        리스트 모드 서브 컴포넌트
******************************************/
export const ListMode = ({
  sort,
  setSort,
  sortCta,
  setSortCta,
  keyword,
  setKeyword,
  /* 바인드리스트용 */
  setMode,
  baseData,
  totalCount,
  /* 페이지 구성용 */
  currentPageNum,
  setCurrentPageNum,
  boardBlockSize,
  pageBlockSize,
  currentPageBlockNum,
}) => {
  console.log("정렬방향:", sort);
  console.log("정렬항목:", sortCta);
  console.log("검색기준,검색어:", keyword);
  /******************************************* 
      [ 전달변수 ] 
11     3. boardBlockSize : 게시판 리스트 당 레코드 개수
 9     4. currentPageNum : 현재 페이지번호
10     5. setCurrentPageNum : 현재 페이지번호 변경 메서드
       6. currentPageBlockNum : 페이지번호
       7. pageBlockSize : 페이징의 페이지 크기
 5     8. keyword : 검색어
 6     9. setKeyword : 검색어셋팅
 1     10. sort : 정렬기준
 2     11. setSort : 정렬기준셋팅
 3     12. sortCta : 정렬항목
 4     13. setSortCta : 정렬항목셋팅
 7     14. baseData : 원본데이터
 8     15. totalCount : 전체개수
    *******************************************/

  // 코드리턴구역 //////////////////////
  return (
    <>
      <div className="select-option-box">
        {/* 검색기준 박스 (타이틀/콘텐츠/작성자) */}
        <select name="keyword-cta" id="keyword-cta" className="keyword-cta">
          <option value="tit">Title</option>
          <option value="cont">Contents</option>
          <option value="unm">Writer</option>
        </select>

        {/* 정렬방향 박스*/}
        <select
          name="sort-direc"
          id="sort-direc"
          className="sort-direc"
          onChange={() => {
            setSort(sort * -1);
          }} //정렬기준 반대로 뒤집기
          defaultValue={sort} // 1또는 -1이 들어옴
        >
          <option value="1">Ascending</option>
          <option value="-1">Descending</option>
        </select>
        {/* 검색창 */}
        <input
          id="search-text"
          type="text"
          maxLength="50"
          onKeyUp={(e) => {
            // e.keyCode 13이 엔터 , e.key 는 문자로 "Enter"가 엔터
            if (e.key === "Enter") $(".search-btn").trigger("click");
          }}
        />
        <button
          className="search-btn"
          onClick={(e) => {
            console.log("검색버튼 클릭");

            // 검색기준값 읽어오기
            let criteria = $(".keyword-cta").val();
            // 검색어 읽어오기
            let searchTxt = $("#search-text").val();
            console.log("기준값:", criteria, "/검색어:", searchTxt);
            // input값은 안쓰면 빈스트링이 넘어옴!
            if (searchTxt === "") {
              // 빈값이면 경고창
              alert("Please enter a keyword!");
            }

            setKeyword([criteria, searchTxt]);
            // 검색후엔 항상 첫페이지로 보내기
            setCurrentPageNum(1);

            // 검색후엔 페이지의 페이징 번호 초기화(1)
            //     currentPageBlockNum.current = 1;
          }}
        >
          Search
        </button>
        {/* {
          // 키워드가 있는 경우에 전체 리스트 돌아가기 버튼출력
          keyword[0] !== "" && (
            <button
              className="back-total-list"
              onClick={(e) => {
                // 검색어 초기화
                setKeyword(["", ""]);
                // 검색어삭제(input이니까 val())
                $(e.currentTarget).siblings("#stxt").val("");
                // 검색항목초기화
                $(e.currentTarget).siblings("#cta").val("tit");
                // 정렬초기화
                setSort(1);
                // 정렬항목초기화
                setSortCta("idx");
                // 첫페이지번호변경
                setCurrentPageNum(1);
              }}
            >
              Back to Total List
            </button>
          )
        } */}

        {/* 정렬기준선택박스 */}
        <select
          name="sort_cta"
          id="sort_cta"
          className="sort_cta"
          onChange={(e) => setSortCta(e.currentTarget.value)}
          style={{ float: "right", translate: "0 5px" }}
          defaultValue={sortCta}
        >
          <option value="idx">Recent</option>
          <option value="tit">Title</option>
        </select>
      </div>
      <table className="data-table" id="board">
        <thead>
          <tr>
            <th>Number</th>
            <th>Title</th>
            <th>Writer</th>
            <th>Date</th>
            <th>Hits</th>
          </tr>
        </thead>
        <tbody>
          {/* 바인드리스트*/}
          {bindList(
            keyword,
            baseData,
            totalCount,
            sortCta,
            sort,
            currentPageNum,
            boardBlockSize,
            setMode,
            baseData
            // selRecord
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="5" className="paging">
              <PagingList
               totalCount={totalCount}
               boardBlockSize={boardBlockSize}
               currentPageNum={currentPageNum}
               setCurrentPageNum={setCurrentPageNum}
             
               currentPageBlockNum={currentPageBlockNum}
               pageBlockSize={pageBlockSize}
              />
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}; //////////// ListMode ///////////////////
