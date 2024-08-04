import React, { Fragment } from "react";

/****************************************** 
    PagingList : 페이징 기능 컴포넌트
******************************************/
export const PagingList = ({
  totalCount,
  boardBlockSize,
  currentPageNum,
  setCurrentPageNum,

  currentPageBlockNum,
  pageBlockSize,
}) => {
  /******************************************* 
      [ 전달변수 ]
      1. totalCount : 전체 레코드 개수
      2. boardBlockSize : 페이지 당 레코드 개수
      3. currentPageNum : 현재 페이지번호
      4. setCurrentPageNum : 현재 페이지번호 변경 메서드
      5. currentPageBlockNum : 현재 페이징블록 번호
      6. pageBlockSize :  페이징블록 당 페이지갯수 (한번에 보여줄 페이지개수)
    *******************************************/
  // 전체 페이지 개수 : 전체레코드수 / 페이지당개수
  // 유의점: 나머지가 있는지 검사해서 있으면 +1

  // 1. 총 페이지 개수
  // 전체 레코드수 / 페이지당 개수 : 소수점이 나오면 페이지가 부족한것임므로  ceil로 올림처리
  let totalPageCount = Math.ceil(totalCount.current / boardBlockSize);

  console.log(
    "페이징총개수:",
    totalPageCount,
    "전체레코드수:",
    totalCount.current,
    "전체 레코드수 / 페이지당 개수 :",
    totalCount.current % boardBlockSize
  );

  // [ 페이징의 페이징 하기 ]
  // [1] 페이징 블록
  // - 페이징블록 사이즈(단위수) : pageBlockSize 변수(4개)
  // [2] 페이징블록 현재번호
  // - currentPageBlockNum 변수(기본값1)

  // 2. 페이징블록 한계수 구하기
  // (1) 페이징블록 총 개수
  // 전체 페이징 개수 / 페이징블록 사이즈
  let totalPageBlockCount = Math.ceil(totalPageCount / pageBlockSize);

  console.log("총 페이징블록 개수:", totalPageBlockCount);
  console.log("페이징블록 현재번호:", currentPageBlockNum.current);
  // 검색시 페이징번호도 초기화필요!

  // 3. 페이징블록 번호별 보여줄 페이지 번호 구하기
  // (2) 리스트 시작값 / 한계값 구하기  currentPageBlockNum 변수(기본값1)
  // 시작값 : (페페넘-1)*페페단
  let startingPageIdx = (currentPageBlockNum.current - 1) * pageBlockSize;
  // 한계값 : 페페넘*페페단
  let endingPageIdx = currentPageBlockNum.current * pageBlockSize;

  console.log("시작값startingPageIdx:", startingPageIdx, "/한계값endingPageIdx:", endingPageIdx);

  ///// [ 페이징 바 출력하기 ] /////////////////
  const pagingBar = [];

  // [ 페이지블록 번호에 맞게 돌면서 코드만들기 ]
  // 계산된 시작값, 한계값을 기준으로 코드를 생성!
  // i는 페이지 번호를 의미함!
  // [1] for : 페이징 리스트 출력 시작 ///////////
  // 일반페이징
  // for (let i = 0; i < totalPageCount; i++) {
  for (let i = startingPageIdx; i < endingPageIdx; i++) {
    // 전체 페이징 번호를 만드는 i가 페이징 전체개수보다
    // 클 경우 나가야함!
    if (i >= totalPageCount) break;

    pagingBar.push(
      <Fragment key={i}>
        {
          // 페이지가 현재페이지면 링크없이 출력 (페이지는 1부터 시작하니  i + 1)
          i + 1 === currentPageNum ? (
            <b>{i + 1}</b>
          ) : (
            // 현재 페이지 아닐시 페이지 링크 걸기
            <a
              href="##"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPageNum(i + 1); // 페이지번호변경
              }}
            >
              {i + 1}
            </a>
          )
        }
        {/* 사이에 구분 바넣기 */}
        {/* 일반페이징 */}
        {/* {i + 1 !== endingPageIdx && " | "} */}
        {(i + 1 !== endingPageIdx) && (i + 1 !==totalPageCount) && " | "}
      </Fragment>
    );
  } ////// [1] for : 페이징 리스트 출력 끝 /////

  // [2] 페이징 이전블록 이동버튼 만들기
  // 기준: 1페이지가 아니면 보여라!
  // 배열 맨앞추가는 unshift()
  pagingBar.unshift(
    currentPageBlockNum.current !== 1 && (
      // for문으로 만든 리스트에 추가하는 것이므로
      // key 값이 있어야함! 단, 중복되면 안됨!
      // 중복안되는 수인 마이너스로 셋팅한다!
      <Fragment key={-1}>
        &nbsp;&nbsp;
        <a
          href="###"
          onClick={(e) => {
            e.preventDefault();
            // 왼쪽이동, 끝블록이동
            goPaging("left", false);
          }}
          title="move previous end"
          style={{ marginLeft: "10px" }}
        >
          «
        </a>
        <a
          href="###"
          onClick={(e) => {
            e.preventDefault();
            // 왼쪽이동, 한블록이동
            goPaging("left", true);
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

  // [3] 페이징 다음블록 이동버튼 만들기
  // 기준: 끝페이지가 아니면 보여라!
  // 배열 맨뒤추가는 push()
  pagingBar.push(
    currentPageBlockNum.current !== totalPageBlockCount && (
      // for문으로 만든 리스트에 추가하는 것이므로
      // key 값이 있어야함! 단, 중복되면 안됨!
      // 중복안되는 수인 마이너스로 셋팅한다!
      <Fragment key={-2}>
        <a
          href="###"
           onClick={(e) => {
             e.preventDefault();
             // 오른쪽이동, 한블록이동
             goPaging("right", true);
           }}
          title="move next"
          style={{ marginLeft: "10px" }}
        >
          ▶
        </a>
        <a
          href="###"
           onClick={(e) => {
             e.preventDefault();
             // 오른쪽이동, 끝블록이동
             goPaging('right', false);
           }}
          title="move next end"
          style={{ marginLeft: "10px" }}
        >
          »
        </a>
      </Fragment>
    )
  );

  // [ 페이지블록 이동함수 ] //////
  const goPaging = (direction, isMoveOneBlock) => {
    // direction - 이동방향에따른 페이지수( 왼쪽:left,오른쪽:right)
    // isMoveOneBlock - 일반이동(true), 끝이동(false)
    console.log("방향:", direction, "/옵션:", isMoveOneBlock);

    //  다음 페이지 블록번호
    let nextIndexPageNum;

    // 1.[ isMoveOneBlock 옵션에 따라  페이지블록번호 변경하기]

    // (1) 일반 페이징이동은 현재페이징번호에 증감
    if (isMoveOneBlock)// 한블록이동
      nextIndexPageNum =
        currentPageBlockNum.current + (direction === "left"?-1:1); //direction - 이동방향( 왼쪽:-1,오른쪽:+1

    // (2) 끝 페이징이동은
    // 왼쪽일 경우 맨앞 페이징번호로 이동(1)
    // 오른쪽일 경우 맨끝 페이징번호로 이동(totalPageBlockCount)
    else if (!isMoveOneBlock) // 한블록이동이 아닐때 (끝이동)
      nextIndexPageNum = (direction === "left"? 1 : totalPageBlockCount); //direction - 이동방향( 왼쪽:-1,오른쪽:+1

    // 2.현재 페이징'블록' 번호 업데이트하기
    currentPageBlockNum.current = nextIndexPageNum;

    // 3. 페이지블록 번호가 바뀌면 해당 구역의
    // 첫번째 페이지번호 업데이트하기
    // -> 항상 이전페이지블록 구역의 마지막페이지번호 + 1 이 다음페이지 첫번호임!
    // 이동할 페이지번호
    let landingPage = (currentPageBlockNum.current - 1) * pageBlockSize + 1;
    console.log("도착페이지번호:", landingPage);
    // '페이지번호' 상태변수 업데이트로 전체 리랜더링!!!
    setCurrentPageNum(landingPage);
  }; //////////// goPaging /////////////

  // 코드리턴
  return pagingBar;
}; ////////// pagingList 함수 //////////////
