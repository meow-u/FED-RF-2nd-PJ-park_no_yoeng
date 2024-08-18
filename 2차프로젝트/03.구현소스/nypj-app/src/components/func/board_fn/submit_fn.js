import $ from "jquery";

// 서브밋 처리함수 //////////////

export const submitFn = (
  mode,
  loginSts,
  baseData,
  totalCount,
  setMode,
  BOARD_MODE,
  setCurrentPageNum,
  selRecord,
  beforeSelRecords
) => {
  // 제목입력항목
  let title = $(".subject").val().trim();
  // 내용입력항목
  let content = $(".content").val().trim();
  // trim()으로 앞뒤공백 제거후 검사!

  // 1. 공통 유효성검사
  // 제목,내용 모두 비었으면 리턴!
  if (title == "") {
    alert("제목과 내용을 입력해주세요!");
    return; // 서브밋없이 함수나가기!
  } else if (content == "") {
    alert("내용을 입력해주세요!");
    return; // 서브밋없이 함수나가기!
  }

  // 2. 글쓰기 서브밋 (mode=="W")
  if (mode == BOARD_MODE.WRITE) {
    // modify에서도 submit이 실행되므로 W로 구분
    // 0.현재 로그인 사용자 정보 파싱하기
    let Writer = JSON.parse(loginSts);
    console.log("작성자(로그인정보)Writer:", Writer);

    // 1. [ 오늘날짜 생성하기 ] /////
    let today = new Date();
    // yy-mm-dd 형식으로 구하기

    // today.toJSON() 할시 시간까지 나오므로 앞에 10자리만 가져감!
    // 문자열.substr(0,10)

    // console.log("today:", today); // Fri Aug 02 2024 14:36:08 GMT+0900 (한국 표준시)
    // console.log("today.toLocaleString():", today.toLocaleString()); // 로컬시간 2024. 8. 2. 오후 2:40:18

    // console.log("today.toJSON():", today.toJSON()); // 제이슨 날짜형식 2024-08-02T05:37:50.995Z (협정 세계시)
    // console.log("today.toISOString():", today.toISOString()); // ISO표준형식 2024-08-02T05:37:50.995Z (협정 세계시)

    // 2. [ 해당 순서에 맞는 고유 글번호 만들기 ] /////
    // 전체 데이터중 idx 만 모아서 배열만들기
    let boardsIdxArr = baseData.map((v) => parseInt(v.idx));
    // console.log(boardsIdxArr);
    // 최대값 찾기 : 스프레드 연산자로 배열값만 넣음!
    let maxIdx = Math.max(...boardsIdxArr);
    // console.log(maxIdx);

    // 3. 입력 데이터 객체형식으로 구성하기 ////
    let newBoard = {
      idx: maxIdx + 1, // 현존 글번호중 최대값 + 1
      tit: title,
      cont: content,
      att: "",
      date: today.toJSON().substr(0, 10),
      uid: Writer.uid,
      unm: Writer.unm,
      vcnt: "0",
    };
    console.log("새로작성할 게시글 객체:", newBoard);

    // 4. 로컬스에 입력하기 //////
    // (1) 로컬스 파싱
    let currentAllBoards = localStorage.getItem("board-data");
    currentAllBoards = JSON.parse(currentAllBoards);
    // (2) 파싱배열에 push
    currentAllBoards.push(newBoard);
    // (3) 새배열을 문자화하여 로컬스에 넣기
    localStorage.setItem("board-data", JSON.stringify(currentAllBoards));

    // 로컬스 확인!
    // console.log('추가 게시글 확인 localStorage.getItem("board-data")',localStorage.getItem("board-data"));

    // 4. 추가후 리스트 리랜더링시 리스트 불일치로 인한
    // 에러를 방지하기 위하여 전체 개수를 바로 업데이트한다!
    // 이때 실제로 업데이트된 currentAllBoards 배열객체의 개수를 센다!
    console.log("변경전 총개수 totalCount:", totalCount);
    totalCount.current = currentAllBoards.length;
    console.log("변경후 총개수 totalCount:", totalCount);

    // 5. 리스트로 돌아가기 -> 리랜더링 /////
    // -> 모드변경! "L"
    setMode(BOARD_MODE.LIST);
    // -> 추가후 첫페이지로 이동!
    setCurrentPageNum(1);
  } ///WRITE모드시 if ///////////////////////////////////////////////////////////////////////

  // 3. 수정모드 서브밋 (mode=="M")
  else if (BOARD_MODE.MODIFY) {

    // [ 수정 전 게시글 저장/업데이트 (중복여부 분기) 함수]
    // function updateRecord(v) {
    //   const matchIdx = beforeSelRecords.current.findIndex(Record => Record.idx === v.idx);
    
    //   if (matchIdx !== -1) { 
    //     // -1이 아니면 존재하는 인덱스 값이므로 업데이트
    //     // beforeSelRecords.current[matchIdx] = v; // 참조변수의 해당 인덱스값에 새로운 객체를 할당 
    //     beforeSelRecords.current[matchIdx].beforecont = v.cont; // 참조변수의 해당 인덱스값에 새로운 객체를 할당 
    //   } else if(matchIdx === -1) {
    //     // 존재하지않는 새로운 항목이면 추가
    //     beforeSelRecords.current.push(v);
    //   }
    // }


    // 1. 오늘날짜 생성하기 //////
    // -> 수정시 수정날짜 항목을 새로 만들고 입력함!
    let today = new Date();

    // 2. 현재 데이터 idx값
    let currentBoardIdx = selRecord.idx;

    // 3. 기존 데이터로 찾아서 변경하기
    // : 로컬스 데이터 -> baseData
    // find()는 특정항목을 찾아서 리턴하여 데이터를 가져
    // 오기도 하지만 업데이트 등 작업도 가능함!
    baseData.find((v) => {
      // console.log(v,selRecord);
      if (v.idx == currentBoardIdx) {
        // 선택된 글번호와 같은 글번호를 찾았다면!
        // [ 업데이트 작업하기 ]
        // 기존항목변경 : tit, content
        // 이미 선택된 selRecord의 글번호인 idx로
        // 원본 데이터를 조회하여 기존 데이터를 업데이트함!
        // (0) 수정전 게시글 저장 함수 호출!!
          // updateRecord(selRecord);

        // (1) 글제목 : tit
        v.tit = title;
        // (2) 수정전 글내용 : beforecont
        v.beforecont = selRecord.cont;
        // (3) 글내용 : content
        v.cont = content;
        // 추가항목
        // (원래는 확정된 DB스키마에 따라 입력해야하지만
        // 우리가 사용하는 로컬스토리지의 확장성에 따라 필요한
        // 항목을 추가하여 넣는다!)
        // (3) 수정일 : modifydate
        let mdate = today.toLocaleString();
        // let mtime = today.toTimeString().split(" ")[0]; // 14:36:08 GMT+0900 를 ' ' 로 잘라 앞부분만 출력!
        // console.log("mdate:",mdate);
        // console.log("mtime:",mtime);

        // (3) 수정날짜 : 날짜 + 시간 조합
        v.modifydate = mdate;
        // console.log('v.modifydate:',v.modifydate);

        // 해당항목을 만나면 끝남!
        return true;
      } /// if ///
    }); /////// find 메서드 /////////

    // 4. 로컬스에 업데이트하기 //////
    localStorage.setItem("board-data", JSON.stringify(baseData));

    // 로컬스 확인!
    // console.log(localStorage.getItem("board-data"));

    // 5. 리스트로 돌아가기 /////
    // -> 모드변경! "L"
    setMode(BOARD_MODE.LIST);
  }
}; ////////// submitFn //////////////
