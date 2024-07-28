import React, { Fragment } from "react";

/****************************************** 
    PagingList : 페이징 기능 컴포넌트
******************************************/
export const PagingList = ({
    totalCount,
    unitSize,
    pageNum,
    setPageNum,
    pgPgNum,
    pgPgSize,
  }) => {
    /******************************************* 
      [ 전달변수 ]
      1. totalCount : 전체 레코드 개수
      2. unitSize : 게시판 리스트 당 레코드 개수
      3. pageNum : 현재 페이지번호
      4. setPageNum : 현재 페이지번호 변경 메서드
    *******************************************/
    // 전체 페이징 개수 : 전체레코드수 / 페이지당개수
    // 유의점: 나머지가 있는지 검사해서 있으면 +1
  
    // 1. 페이징 개수
    let pagingCount = Math.floor(totalCount.current / unitSize);
  
    // 나머지가 있으면 다음 페이지가 필요함!
    // 나머지가 0이 아니면 1더하기
    if (totalCount.current % unitSize > 0) {
      pagingCount++;
    }
  
    console.log(
      "페이징개수:",
      pagingCount,
      "전체레코드수:",
      totalCount.current,
      "나머지개수:",
      totalCount.current % unitSize
    );
  
    // [ 페이징의 페이징 하기 ]
    // [1] 페이징 블록
    // - 한 페이징블록수 : pgPgSize 변수(4개)
    // [2] 페이징의 페이징 현재번호
    // - pgPgNum 변수(기본값1)
  
    // 2. 페이지의 페이징 한계수 구하기
    // (1) 페이징의 페이징 개수
    // 전체 페이징 개수 / 페이징의 페이징 단위수
    let pgPgCount = Math.floor(pagingCount / pgPgSize);
  
    // 페이징 개수를 페이징의 페이징 단위수로
    // 나눈 나머지가 있으면 다음 페이징의 번호가 필요함!
    // 나머지가 0이 아니면 1더하기
    if (pagingCount % pgPgSize > 0) {
      pgPgCount++;
    } /// if ////
  
    console.log("페이징의 페이징개수:", pgPgCount);
    console.log("페이징의 페이징번호:", pgPgNum.current);
    // 검색시 페이징번호 초기화필요!
  
    // (2) 리스트 시작값 / 한계값 구하기
    // 시작값 : (페페넘-1)*페페단
    let initNum = (pgPgNum.current - 1) * pgPgSize;
    // 한계값 : 페페넘*페페단
    let limitNum = pgPgNum.current * pgPgSize;
  
    console.log("시작값:", initNum, "/한계값:", limitNum);
  
    ///// [ 링크코드 만들기 ] /////////////////
    const pgCode = [];
  
    // [ 페이징의 페이징에 맞게 돌면서 코드만들기 ]
    // 계산된 시작값, 한계값을 기준으로 코드를 생성!
    // [1] for : 페이징 리스트 출력 시작 ///////////
    for (let i = initNum; i < limitNum; i++) {
      // 전체 페이징 번호를 만드는 i가 페이징 전체개수보다
      // 클 경우 나가야함!
      if (i >= pagingCount) break;
  
      pgCode.push(
        <Fragment key={i}>
          {
            // 페이징번호와 현재페이지번호 일치시 b요소
            i + 1 === pageNum ? (
              <b>{i + 1}</b>
            ) : (
              // 불일치시에 모드 링크코드
              <a
                href="##"
                onClick={(e) => {
                  e.preventDefault();
                  setPageNum(i + 1);
                }}
              >
                {i + 1}
              </a>
            )
          }
          {/* 사이에 바넣기 */}
          {i + 1 !== limitNum && i + 1 < pagingCount && " | "}
        </Fragment>
      );
    } ////// [1] for : 페이징 리스트 출력 끝 /////
  
    {
      // [2] 페이징 이전블록 이동버튼 만들기
      // 기준: 1페이지가 아니면 보여라!
      // 배열 맨앞추가는 unshift()
      pgCode.unshift(
        pgPgNum.current === 1 ? (
          ""
        ) : (
          // for문으로 만든 리스트에 추가하는 것이므로
          // key 값이 있어야함! 단, 중복되면 안됨!
          // 중복안되는 수인 마이너스로 셋팅한다!
          <Fragment key={-1}>
            &nbsp;&nbsp;
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                goPaging(-1, false);
              }}
              title="move previous end"
              style={{ marginLeft: "10px" }}
            >
              «
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                goPaging(-1, true);
              }}
              title="move previous"
              style={{ marginLeft: "10px" }}
            >
              ◀
            </a>
            &nbsp;&nbsp;
          </Fragment>
        )
      );
    }
    {
      // [3] 페이징 다음블록 이동버튼 만들기
      // 기준: 끝페이지가 아니면 보여라!
      // 배열 맨뒤추가는 push()
      pgCode.push(
        pgPgNum.current === pgPgCount ? (
          ""
        ) : (
          // for문으로 만든 리스트에 추가하는 것이므로
          // key 값이 있어야함! 단, 중복되면 안됨!
          // 중복안되는 수인 마이너스로 셋팅한다!
          <Fragment key={-2}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                goPaging(1, true);
              }}
              title="move next"
              style={{ marginLeft: "10px" }}
            >
              ▶
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                goPaging(1, false);
              }}
              title="move next end"
              style={{ marginLeft: "10px" }}
            >
              »
            </a>
          </Fragment>
        )
      );
    }
  
    // [ 블록이동함수 ] //////
    const goPaging = (dir, opt) => {
      // dir - 이동방향(오른쪽:+1, 왼쪽:-1)
      // opt - 일반이동(true), 끝이동(false)
      console.log("방향:", dir, "/옵션:", opt);
  
      // 새 페이징의 페이징번호
      let newPgPgNum;
  
      // 1. opt 옵션에 따라 페이징의 페이징이동번호 만들기
      // (1) 일반 페이징이동은 현재페이징번호에 증감
      if (opt) newPgPgNum = pgPgNum.current + dir;
      // (2) 끝 페이징이동은
      // 오른쪽(1)일 경우 맨끝 페이징번호로 이동(pgPgCount)
      // 왼쪽(-1)일 경우 맨앞 페이징번호로 이동(1)
      else newPgPgNum = dir == 1 ? pgPgCount : 1;
  
      // 2.페이징의 페이징 번호 업데이트하기
      pgPgNum.current = newPgPgNum;
  
      // 3. 새로운 페이지의 페이징 구역의
      // 첫번째 페이지번호 업데이트하기
      // -> 항상 이전블록의 마지막번호 + 1 이 다음페이지 첫번호임!
      // 이동할 페이지번호
      let landingPage = (pgPgNum.current - 1) * pgPgSize + 1;
      console.log("도착페이지번호:", landingPage);
      // 페이지번호 상태변수 업데이트로 전체 리랜더링!!!
      setPageNum(landingPage);
    }; //////////// goPaging /////////////
  
    // 코드리턴
    return pgCode;
  }; ////////// pagingList 함수 //////////////