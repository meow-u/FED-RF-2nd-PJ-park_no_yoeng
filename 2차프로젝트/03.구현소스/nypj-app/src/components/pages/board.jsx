// 오피니언 페이지 컴포넌트 ///
import { useContext, useRef, useState } from "react";

// [ 게시판 하위 컴포넌트 불러오기 ]

// 리스트모드 컴포넌트
import { ListMode } from "../modules/board_modules/list_mode";
// 읽기모드 컴포넌트
import { ReadMode } from "../modules/board_modules/read_mode";
// 쓰기모드 컴포넌트
import { WriteMode } from "../modules/board_modules/write_mode";
// 수정모드 컴포넌트
import { ModifyMode } from "../modules/board_modules/modify_mode";

// [ 게시판 기능 함수 불러오기 ]
// 바인드리스트는 리스트모드에서 적용함
// 서브밋 처리함수
import { submitFn } from "../func/board_fn/submit_fn";
// 삭제처리 함수
import { deleteFn } from "../func/board_fn/delete_fn";

// 게시판용 CSS
import "../../css/board.scss";
import "../../css/board_file.scss";

// 로컬스토리지 확인 JS
import { initBoardData } from "../func/board_fn";
import { Con } from "../modules/myCon";

const SORT_DIRECTION = {
  //정렬방향 객체
  ASC: 1, // a>b :1 오름차순
  DESC: -1, // a>b : -1 내림차순
};

const BOARD_MODE = {
  //리스트모드 객체
  LIST: "L", // (1) 리스트 모드(L) : List Mode
  READ: "R", // (2) 글보기 모드(R) : Read Mode
  WRITE: "W", // (3) 글쓰기 모드(W) : Write Mode
  MODIFY: "M", // (4) 수정 모드(M) : Modify Mode (삭제포함)
};

const SORT_BY_CTA = {
  //정렬 항목값 객체
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

  // 로컬스토리지 게시판 데이터 정보확인!
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
  const [currentPageNum, setCurrentPageNum] = useState(1);

  // [2] 기능모드
  const [mode, setMode] = useState(BOARD_MODE.LIST);
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
  // console.log("전체개수:", totalCount);
  // [2] 선택 게시글 데이터 저장
  const [selRecord, setSelRecord] = useState(null);
  // [2-5] 수정전 데이터 저장
  const beforeSelRecords = useRef([{// 49번 샘플로 넣어둠
    "idx": "49",
    "tit": "This is a Title49",
    "cont": "hello there! ",
    "att": "",
    "date": "2024-07-01",
    "uid": "admin",
    "unm": "Administrator",
    "vcnt": "0",
    "modifydate": "2024. 8. 2. 오후 16:23:05"
}]);
  console.log("beforeSelRecords:", beforeSelRecords.current);
  // -> 특정리스트 글 제목 클릭시 데이터 저장함!
  // [3] 페이징의 페이징 번호
  const currentPageBlockNum = useRef(1);

  // [ 일반 변수로 매번 같은값을 유지하면 되는 변수 ]
  // 페이지당 개수 : 페이지당 레코드수
  const boardBlockSize = 4;
  // 페이징의 페이징 개수 : 한번에 보여줄 페이징개수
  const pageBlockSize = 3;

  // Board 컴포넌트 내부
  // const wrappedSubmitFn = (...args) => submitFn(mode, sts, baseData, totalCount, setMode, setPageNum, selRecord, ...args);
  // const wrappedDeleteFn = () => deleteFn(selRecord, baseData, totalCount, setMode, setPageNum);

  // const clickButton = (e, {setMode, setKeyword, wrappedSubmitFn, wrappedDeleteFn}) => {
  //   // 함수 내용
  // };

  // 버튼 클릭시 변경함수 ////////////////////////////////
  const clickButton = (e) => {
    // 버튼글자 읽기
    let btnText = e.target.innerText;
    // console.log(btnText);
    // 버튼별 분기
    switch (btnText) {
      // 글쓰기 모드로 변경
      case "WRITE":
        setMode(BOARD_MODE.WRITE);
        break;
      // 리스트모드로 변경
      case "LIST":
        setMode(BOARD_MODE.LIST);
        // 검색시에도 전체 데이터나오게 함
        setKeyword(["", ""]);
        break;
      // 서브밋일 경우 함수호출!
      case "SUBMIT":
        submitFn(
          mode,
          loginSts,
          baseData,
          totalCount,
          setMode,
          BOARD_MODE,
          setCurrentPageNum,
          selRecord,
          beforeSelRecords,
        );
        break;
      // 수정일 경우 수정모드로 변경
      case "MODIFY":
        setMode(BOARD_MODE.MODIFY);
        break;
      case "CANCEL":
        setMode(BOARD_MODE.READ);
        break;
      // 삭제일 경우 삭제함수 호출
      case "DELETE":
        deleteFn(
          selRecord,
          baseData,
          totalCount,
          setMode,
          BOARD_MODE,
          setCurrentPageNum
        );
        break;

      default:
        break;
    }
  }; ////////// clickButton //////////////////////

  console.log("나 랜더링댔어요 selRecord:", selRecord);
  //// 코드 리턴구역 /////////////////////////////////////////////////////
  return (
    <main className="cont">
      {
        // 1. 리스트 모드일 경우 리스트 출력하기
        mode === BOARD_MODE.LIST && (
          <ListMode
            setKeyword={setKeyword}
            keyword={keyword}
            sort={sort}
            setSort={setSort}
            sortCta={sortCta}
            setSortCta={setSortCta}
            /* bindList에서 필요함 */
            totalCount={totalCount}
            baseData={baseData}
            BOARD_MODE={BOARD_MODE}
            setMode={setMode}
            /* 페이지관련 */
            currentPageNum={currentPageNum}
            setCurrentPageNum={setCurrentPageNum}
            boardBlockSize={boardBlockSize}
            currentPageBlockNum={currentPageBlockNum}
            pageBlockSize={pageBlockSize}
            selRecord={selRecord}
            setSelRecord={setSelRecord}
          />
        )
      }
      {
        // 2. 읽기 모드일 경우 읽기 출력하기
        mode === BOARD_MODE.READ && (
          <ReadMode selRecord={selRecord} loginSts={loginSts} beforeSelRecords={beforeSelRecords} />
        )
      }
      {
        // 2. 쓰기 모드일 경우 읽기 출력하기
        mode === BOARD_MODE.WRITE && <WriteMode loginSts={loginSts} />
      }
      {
        // 3. 수정 모드일 경우 수정 출력하기
        mode === BOARD_MODE.MODIFY && <ModifyMode selRecord={selRecord} />
      }

      <br />
      {/* 모드별 버튼출력 박스 */}
      <table className="data-table btn-group">
        <tbody>
          <tr>
            <td>
              {/* 모드별 버튼 출력*/}
              {/* LIST 모드에서 로그인상태면  글쓰기 버튼 출력 */}
              {mode === BOARD_MODE.LIST && loginSts && (
                <button onClick={clickButton}>WRITE</button>
              )}

              {/* READ모드에서 로그인상태면 본인 글일시 수정버튼 출력 */}
              {mode === BOARD_MODE.READ && loginSts && 
                JSON.parse(loginSts).uid === selRecord.uid && (
                  <button onClick={clickButton}>MODIFY</button>
                )}
              {/* READ 모드에서는 목록 버튼 출력 */}
              {mode === BOARD_MODE.READ && (
                <button onClick={clickButton}>LIST</button>
              )}
              {
                // 3. WRITE 모드
                mode === BOARD_MODE.WRITE && (
                  <>
                    <button onClick={clickButton}>SUBMIT</button>
                    <button onClick={clickButton}>LIST</button>
                  </>
                )
              }
              {
                // 4. MODIFY 모드
                mode === BOARD_MODE.MODIFY && (
                  <>
                    <button onClick={clickButton}>SUBMIT</button>
                    <button onClick={clickButton}>DELETE</button>
                    <button onClick={clickButton}>CANCEL</button>
                    <button onClick={clickButton}>LIST</button>
                  </>
                )
              }
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
} /////////// Board /////////////////////
