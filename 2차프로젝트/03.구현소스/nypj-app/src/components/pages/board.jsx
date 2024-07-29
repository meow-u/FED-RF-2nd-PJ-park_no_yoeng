// 오피니언 페이지 컴포넌트 ///
import { useContext, useRef, useState } from "react";

// [ 게시판 하위 컴포넌트 불러오기 ]

// 리스트모드 컴포넌트
import { ListMode } from "../modules/board_modules/list_mode";
// 읽기모드 컴포넌트
// 쓰기모드 컴포넌트
// 수정모드 컴포넌트

// [ 게시판 기능 함수 불러오기 ]
// 바인드리스트는 리스트모드에서 사용함
// 서브밋 처리함수
// 삭제처리 함수

// 게시판용 CSS
import "../../css/board.scss";
import "../../css/board_file.scss";

// 로컬스토리지 확인 JS
import { initBoardData } from "../func/board_fn";
import { Con } from "../modules/myCon";

const SORT_DIRECTION = {
  ASC: 1, // a>b :1 오름차순
  DESC: -1, // a>b : -1 내림차순
};

const BOARD_COMPONENT_MODE = {
  LIST: "L", // (1) 리스트 모드(L) : List Mode
  READ: "R", // (2) 글보기 모드(R) : Read Mode
  WRITE: "W", // (3) 글쓰기 모드(W) : Write Mode
  MODIFY: "M", // (4) 수정 모드(M) : Modify Mode (삭제포함)
};

const SORT_BY_CTA = {
  // 정렬 항목값 상수 categories
  IDX: "idx",
  TITLE: "tit",
};

////////////////////////////////////////////////////////////////////
export default function Board() {
  // 컨텍스트 사용하기
  const myCon = useContext(Con);
  // 전역 로그인 상태 변수 확인(변수할당!)
  const loginSts = myCon.loginSts;
  //   console.log("로그인상태:", loginSts);

  // 로컬스토리지 게시판 데이터 정보확인! //
  initBoardData();

  // 보드 초기 로컬스 데이터 파싱 후 변수할당하기!
  const baseData = JSON.parse(localStorage.getItem("board-data"));

  // 원본 데이터에 정렬 적용하기 : 내림차순
  baseData.sort((a, b) =>
    Number(a.idx) > Number(b.idx)
      ? SORT_DIRECTION.DESC
      : Number(a.idx) < Number(b.idx)
      ? SORT_DIRECTION.ASC
      : 0
  );

  ///////// [ 상태관리 변수 ] //////////////
  // [1] 페이지 번호

  // [2] 기능모드
  const [mode, setMode] = useState(BOARD_COMPONENT_MODE.LIST);
  // [3] 검색어 저장변수 : 배열 [기준,검색어]
  const [keyword, setKeyword] = useState(["", ""]);
  console.log("[기준,키워드]", keyword);
  // [4] 정렬 기준값 상태변수 : 최초 내림차순 (A>B : -1 DESC)
  const [sort, setSort] = useState(SORT_DIRECTION.DESC);
  // [5] 정렬 항목값 상태변수 : 최초 IDX 순   (idx / tit)
  const [sortCta, setSortCta] = useState(SORT_BY_CTA.IDX);

  // [ 참조변수 ] ///
  // [1] 전체 개수 - 매번 계산하지 않도록 참조변수로!
  const totalCount = useRef(baseData.length);

  //// 코드 리턴구역 /////////////////////////////////////////////////////
  return (
    <main className="cont">
      {
        // 1. 리스트 모드일 경우 리스트 출력하기
        mode === BOARD_COMPONENT_MODE.LIST && (
          <ListMode
            // unitSize={unitSize}
            // pageNum={pageNum}
            // setPageNum={setPageNum}
            // pgPgNum={pgPgNum}
            // pgPgSize={pgPgSize}
            setKeyword={setKeyword}
            keyword={keyword}
            sort={sort}
            setSort={setSort}
            sortCta={sortCta}
            setSortCta={setSortCta}
            // /* bindList에서 필요함 */
            // baseData={baseData}
            // setMode={setMode}
            // selRecord={selRecord}
          />
        )
      }

      <br />
      {/* 모드별 버튼출력 박스 */}
      <table className="data-table btn-group">
        <tbody>
          <tr>
            <td>{/* 버튼위치 */}</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
} /////////// Board /////////////////////
