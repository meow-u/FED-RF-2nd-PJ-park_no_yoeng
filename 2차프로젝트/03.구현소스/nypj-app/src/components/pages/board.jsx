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

// 리스트바인딩 함수
import { bindList } from "../func/board_fn/bind_list_fn";
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

export default function Board() {
  // 컨텍스트 사용하기
  const myCon = useContext(Con);
  // 전역 로그인 상태 변수 확인(변수할당!)
  const sts = myCon.loginSts;
  // console.log("로그인상태:", sts);

  // 로컬스토리지 게시판 데이터 정보확인! //
  initBoardData();

  // 로컬스 데이터 변수할당하기!
  const baseData = JSON.parse(localStorage.getItem("board-data"));

  // 원본 데이터에 정렬 적용하기 : 내림차순
  baseData.sort((a, b) =>
    Number(a.idx) > Number(b.idx) ? -1 : Number(a.idx) < Number(b.idx) ? 1 : 0
  );

  ///////// [ 상태관리 변수 ] //////////////
  // [1] 페이지 번호
  const [pageNum, setPageNum] = useState(1);

  // [2] 기능모드
  const [mode, setMode] = useState("L");
  //   console.log('setMode',setMode);
  // (1) 리스트 모드(L) : List Mode
  // (2) 글보기 모드(R) : Read Mode
  // (3) 글쓰기 모드(W) : Write Mode
  // (4) 수정 모드(M) : Modify Mode (삭제포함)

  // [3] 검색어 저장변수 : 배열 [기준,검색어]
  const [keyword, setKeyword] = useState(["", ""]);
  console.log("[기준,키워드]", keyword);

  // [4] 정렬 기준값 상태변수 : 값 (asc(-1) / desc(1))
  const [sort, setSort] = useState(1);
  // -> 기존 셋팅값에 1을 곱하면 원래값, -1을 곱하면 반대값셋팅

  // [5] 정렬 항목값 상태변수 : 값 - idx / tit
  const [sortCta, setSortCta] = useState("idx");

  // [ 참조변수 ] ///
  // [1] 전체 개수 - 매번 계산하지 않도록 참조변수로!
  const totalCount = useRef(baseData.length);
  // console.log("전체개수:", totalCount);
  // [2] 선택 데이터 저장
  const selRecord = useRef(null);
  // -> 특정리스트 글 제목 클릭시 데이터 저장함!
  // [3] 페이징의 페이징 번호
  const pgPgNum = useRef(1);

  // [ 일반 변수로 매번 같은값을 유지하면 되는 변수 ]
  // 페이지당 개수 : 페이지당 레코드수
  const unitSize = 4;
  // 페이징의 페이징 개수 : 한번에 보여줄 페이징개수
  const pgPgSize = 3;

  // 버튼 클릭시 변경함수 ////////////////////////////////
  const clickButton = (e) => {
    // 버튼글자 읽기
    let btnText = e.target.innerText;
    // console.log(btnText);
    // 버튼별 분기
    switch (btnText) {
      // 글쓰기 모드로 변경
      case "Write":
        setMode("W");
        break;
      // 리스트모드로 변경
      case "List":
        setMode("L");
        // 검색시에도 전체 데이터나오게 함
        setKeyword(["", ""]);
        break;
      // 서브밋일 경우 함수호출!
      case "Submit":
        submitFn(
          mode,
          sts,
          baseData,
          totalCount,
          setMode,
          setPageNum,
          selRecord
        );
        break;
      // 수정일 경우 수정모드로 변경
      case "Modify":
        setMode("M");
        break;
      // 삭제일 경우 삭제함수 호출
      case "Delete":
        deleteFn(selRecord, baseData, totalCount, setMode, setPageNum);
        break;
      default:
        break;
    }
  }; ////////// clickButton //////////////////////

  //// 코드 리턴구역 /////////////////////////////////////////////////////
  return (
    <main className="cont">
      <h1 className="tit">OPINION</h1>
      {
        // 1. 리스트 모드일 경우 리스트 출력하기
        mode === "L" && (
          <ListMode
            bindList={bindList}
            totalCount={totalCount}
            unitSize={unitSize}
            pageNum={pageNum}
            setPageNum={setPageNum}
            pgPgNum={pgPgNum}
            pgPgSize={pgPgSize}
            setKeyword={setKeyword}
            keyword={keyword}
            sort={sort}
            setSort={setSort}
            sortCta={sortCta}
            setSortCta={setSortCta}
            /* bindList에서 필요함 */
            baseData={baseData}
            setMode={setMode}
            selRecord={selRecord}
          />
        )
      }
      {
        // 2. 읽기 모드일 경우 상세보기 출력하기
        mode === "R" && <ReadMode selRecord={selRecord} sts={sts} />
      }
      {
        // 3. 쓰기 모드일 경우 로그인 정보 보내기
        // sts값은 문자열이므로 파싱하여 객체로 보냄
        mode === "W" && <WriteMode sts={JSON.parse(sts)} />
      }
      {
        // 4. 수정 모드일 경우 상세보기 출력하기
        mode === "M" && <ModifyMode selRecord={selRecord} />
      }
      <br />
      {/* 모드별 버튼출력 박스 */}
      <table className="dtbl btngrp">
        <tbody>
          <tr>
            <td>
              {
                // 1. 글쓰기 버튼은 로그인상태이고 "L"이면출력
                mode === "L" && sts && (
                  <button onClick={clickButton}>Write</button>
                )
              }
              {
                // 2. 읽기상태 "R" 일 경우
                <>
                  {mode === "R" && <button onClick={clickButton}>List</button>}

                  {
                    // console.log("비교:",
                    // JSON.parse(sts).uid,
                    // "==?",
                    // selRecord.current.uid)
                  }

                  {
                    // 로그인한 상태이고 글쓴이와 일치할때
                    // 수정보드 이동버튼이 노출됨!
                    // 현재글은 selRecord 참조변수에 저장됨
                    // 글정보 항목중 uid 가 사용자 아이디임!
                    // 로그인 상태정보하위의 sts.uid와 비교함
                    mode === "R" &&
                      sts &&
                      JSON.parse(sts).uid === selRecord.current.uid && (
                        <button onClick={clickButton}>Modify</button>
                      )
                  }
                </>
              }
              {
                // 3. 쓰기상태 "W" 일 경우
                mode === "W" && (
                  <>
                    <button onClick={clickButton}>Submit</button>
                    <button onClick={clickButton}>List</button>
                  </>
                )
              }
              {
                // 4. 수정상태 "M" 일 경우
                mode === "M" && (
                  <>
                    <button onClick={clickButton}>Submit</button>
                    <button onClick={clickButton}>Delete</button>
                    <button onClick={clickButton}>List</button>
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
