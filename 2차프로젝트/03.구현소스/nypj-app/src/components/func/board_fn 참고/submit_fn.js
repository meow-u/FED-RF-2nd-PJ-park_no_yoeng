import $ from "jquery";
 
 // 서브밋 처리함수 //////////////

export const submitFn = (
    mode,
    sts,
    baseData,
    totalCount,
    setMode,
    setPageNum,
    selRecord) => {
    // 제목입력항목
    let title = $(".subject").val().trim();
    // 내용입력항목
    let cont = $(".content").val().trim();
    // trim()으로 앞뒤공백 제거후 검사!

    // 1. 공통 유효성검사
    // 제목,내용 모두 비었으면 리턴!
    if (title == "" || cont == "") {
      alert("Insert title or content!");
      return; // 서브밋없이 함수나가기!
    } ////// if ////

    // 2. 글쓰기 서브밋 (mode=="W")
    if (mode == "W") {
      // 0.현재 로그인 사용자 정보 파싱하기
      let person = JSON.parse(sts);

      // 1. 오늘날짜 생성하기 /////
      let today = new Date();
      // yy-mm-dd 형식으로 구하기
      // 제이슨 날짜형식 : toJSON()
      // ISO 표준형식 : toISOString()
      // 시간까지 나오므로 앞에 10자리만 가져감!
      // 문자열.substr(0,10)

      // 2. 글번호 만들기 /////
      // 전체 데이터중 idx 만 모아서 배열만들기
      let arrIdx = baseData.map((v) => parseInt(v.idx));
      // console.log(arrIdx);
      // 최대값 찾기 : 스프레드 연산자로 배열값만 넣음!
      let maxNum = Math.max(...arrIdx);
      // console.log(maxNum);

      // 3. 입력 데이터 객체형식으로 구성하기 ////
      let data = {
        idx: maxNum + 1,
        tit: title,
        cont: cont,
        att: "",
        date: today.toJSON().substr(0, 10),
        uid: person.uid,
        unm: person.unm,
        cnt: "0",
      };
      // console.log("글쓰기 서브밋:",data);

      // 4. 로컬스에 입력하기 //////
      // (1) 로컬스 파싱
      let locals = localStorage.getItem("board-data");
      locals = JSON.parse(locals);
      // (2) 파싱배열에 push
      locals.push(data);
      // (3) 새배열을 문자화하여 로컬스에 넣기
      localStorage.setItem("board-data", JSON.stringify(locals));

      // 로컬스 확인!
      // console.log(localStorage.getItem("board-data"));

      // 4. 추가후 리스트 리랜더링시 리스트 불일치로 인한
      // 에러를 방지하기 위하여 전체 개수를 바로 업데이트한다!
      // 이때 실제로 업데이트된 locals 배열객체의 개수를 센다!
      totalCount.current = locals.length;

      // 5. 리스트로 돌아가기 -> 리랜더링 /////
      // -> 모드변경! "L"
      setMode("L");
      // -> 추가후 첫페이지로 이동!
      setPageNum(1);
    } /// if ///

    // 3. 수정모드 서브밋 (mode=="M")
    else if (mode == "M") {
      // 1. 오늘날짜 생성하기 /////
      // -> 수정시 수정날짜 항목을 새로 만들고 입력함!
      let today = new Date();
      // yy-mm-dd 형식으로 구하기
      // 제이슨 날짜형식 : toJSON()
      // ISO 표준형식 : toISOString()
      // 시간까지 나오므로 앞에 10자리만 가져감!
      // 문자열.substr(0,10)

      // 2. 현재 데이터 idx값
      let currIdx = selRecord.current.idx;

      // 3. 기존 데이터로 찾아서 변경하기
      // : 로컬스 데이터 -> baseData
      // find()는 특정항목을 찾아서 리턴하여 데이터를 가져
      // 오기도 하지만 업데이트 등 작업도 가능함!
      baseData.find((v) => {
        // console.log(v,selRecord);
        if (v.idx == currIdx) {
          // [ 업데이트 작업하기 ]
          // 기존항목변경 : tit, cont
          // 이미 선택된 selRecord 참조변수의 글번호인 idx로
          // 원본 데이터를 조회하여 기존 데이터를 업데이트함!

          // (1) 글제목 : tit
          v.tit = title;
          // (2) 글내용 : cont
          v.cont = cont;
          // 추가항목
          // (원래는 확정된 DB스키마에 따라 입력해야하지만
          // 우리가 사용하는 로컬스토리지의 확장성에 따라 필요한
          // 항목을 추가하여 넣는다!)
          // (3) 수정일 : mdate
          v.mdate = today.toJSON().substr(0, 10);

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
      setMode("L");
    }
  }; ////////// submitFn //////////////