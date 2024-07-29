// 게시판 하위 컴포넌트 불러오기
// 페이지 구성 컴포넌트
import { PagingList } from "../board_modules/pasing_list";

import $ from "jquery";
/****************************************** 
        리스트 모드 서브 컴포넌트
******************************************/
export const ListMode = ({
  bindList,
  totalCount,
  unitSize,
  pageNum,
  setPageNum,
  pgPgNum,
  pgPgSize,
  keyword,
  setKeyword,
  sort,
  setSort,
  sortCta,
  setSortCta,
/* 바인드리스트에서 필요로함  */
  baseData,
  setMode,
  selRecord,
}) => {
  /******************************************* 
      [ 전달변수 ] - 2~5까지 4개는 페이징전달변수
      1. bindList : 리스트 결과 요소
      2. totalCount : 전체 레코드 개수
      3. unitSize : 게시판 리스트 당 레코드 개수
      4. pageNum : 현재 페이지번호
      5. setPageNum : 현재 페이지번호 변경 메서드
      6. pgPgNum : 페이지번호
      7. pgPgSize : 페이징의 페이지 크기
      8. keyword : 검색어
      9. setKeyword : 검색어셋팅
      10. sort : 정렬기준
      11. setSort : 정렬기준셋팅
      12. sortCta : 정렬항목
      13. setSortCta : 정렬항목셋팅
    *******************************************/

  // 코드리턴구역 //////////////////////
  return (
    <>
      <div className="selbx">
        <select name="cta" id="cta" className="cta">
          <option value="tit">Title</option>
          <option value="cont">Contents</option>
          <option value="unm">Writer</option>
        </select>

        <select
          name="sel"
          id="sel"
          className="sel"
          onChange={() => setSort(sort * -1)
          }
          defaultValue={sort === 1 ? "0" : "1"}
        >
          <option value="0">
            Descending
          </option>
          <option value="1">
            Ascending
          </option>
        </select>
        <input
          id="stxt"
          type="text"
          maxLength="50"
          onKeyUp={(e) => {
            // e.keyCode는 번호로 13이 엔터
            // e.key 는 문자로 "Enter"가 엔터
            // console.log(e.key,e.keyCode);
            if (e.key === "Enter") {
              $(e.currentTarget).next().trigger("click");
            }
          }}
        />
        <button
          className="sbtn"
          onClick={(e) => {
            // 검색기준값 읽어오기
            let creteria = $(e.target).siblings(".cta").val();
            console.log("기준값:", creteria);
            // 검색어 읽어오기
            let txt = $(e.target).prev().val();
            console.log(typeof txt, "/검색어:", txt);
            // input값은 안쓰면 빈스트링이 넘어옴!
            if (txt !== "") {
              console.log("검색해!");
              // [검색기준,검색어] -> setKeyword 업데이트
              setKeyword([creteria, txt]);
              // 검색후엔 첫페이지로 보내기
              setPageNum(1);
              // 검색후엔 페이지의 페이징 번호 초기화(1)
              pgPgNum.current = 1;
            }
            // 빈값일 경우
            else {
              alert("Please enter a keyword!");
            }
          }}
        >
          Search
        </button>
        {
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
                setPageNum(1);
              }}
            >
              Back to Total List
            </button>
          )
        }

        {/* 정렬기준선택박스 */}
        <select
          name="sort_cta"
          id="sort_cta"
          className="sort_cta"
          onChange={(e) => setSortCta(e.currentTarget.value)}
          style={{ float: "right", translate: "0 5px" }}
          defaultValue={sortCta}
        >
          <option value="idx">
            Recent
          </option>
          <option value="tit">
            Title
          </option>
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
          {bindList(
            keyword,
            baseData,
            totalCount,
            sortCta,
            sort,
            pageNum,
            unitSize,
            setMode,
            selRecord
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="5" className="paging">
              {
                // 데이터 개수가 0이상일때만 출력
                totalCount.current > 0 && (
                  <PagingList
                    totalCount={totalCount}
                    unitSize={unitSize}
                    pageNum={pageNum}
                    setPageNum={setPageNum}
                    pgPgNum={pgPgNum}
                    pgPgSize={pgPgSize}
                  />
                )
              }
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}; //////////// ListMode ///////////////////
