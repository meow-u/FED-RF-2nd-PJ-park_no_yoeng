
/****************************************** 
        읽기 모드 서브 컴포넌트
******************************************/
export const ReadMode = ({ selRecord, sts }) => {
    // selRecord - 현재글정보 / sts - 로그인 사용자정보
    // 읽기 모드가 호출되었다는 것은
    // 리스트의 제목이 클릭되었다는 것을 의미!
    // 따라서 현재 레코드 값도 저장되었다는 의미!
    // console.log("전달된 참조변수:", selRecord.current);
    // 전달된 데이터 객체를 변수에 할당
    const data = selRecord.current;
  
    // [ 조회수 증가하기 ]
    // 규칙1 : 자신의 글은 증가하지 않는다!
    // 규칙2 : 타인의 글은 증가한다!
    // 규칙3 : 로그인한 상태에서 한번만 증가한다!
  
    // ((조회된 글 저장방법))
    // -> 세션스토리지는 적합! 창을 닫으면 사라지니까!
    // -> 쿠키는 삭제방법이 즉각적이지 못하므로 제외!
    // -> 참조변수는 새로고침하면 초기화 되므로 제외!
  
    // 1.세션스 없으면 세션스 만들기
    if (!sessionStorage.getItem("bd-rec")) {
      sessionStorage.setItem("bd-rec", "[]");
    }
    // 2.세션스에 글번호 저장하기
  
    // (1) 세션스 파싱하여 변수할당
    let rec = JSON.parse(sessionStorage.getItem("bd-rec"));
  
    // (2) 기존 배열값에 현재글번호 존재여부검사하기
    // 결과가 true이면 조회수를 증가하지 않는다!
    let isRec = rec.includes(data.idx);
    console.log("이미있니?", isRec);
  
    // (3) 로그인한 사용자의 글이면 isRec값을 true처리
    // sts가 true이면 즉, 로그인한 사용자이면 처리
    if (sts) {
      console.log(
        "선택글 아이디:",
        data.uid,
        "로그인사용자 아이디:",
        JSON.parse(sts).uid
      );
      // 글쓴이 아이디와 로그인사용자 아이디가 같은가?
      if (data.uid == JSON.parse(sts).uid) {
        // 글번호저장과 조회수증가를 하지 않도록 isRec값을
        // true로 변경한다!
        isRec = true;
      } //// if ///
    } /// if ///
  
    // (4) 배열에 값 추가하기 : 기존값에 없으면 넣기!
    if (!isRec) rec.push(data.idx);
  
    // (5) 다시 세션스에 저장하기
    sessionStorage.setItem("bd-rec", JSON.stringify(rec));
  
    // 3. 글번호 증가하기
    // -> 게시판 원본 데이터에 조회수 업데이트하기
    if (!isRec) {
      // (1) 게시판 로컬스 데이터 파싱
      let bdData = JSON.parse(localStorage.getItem("board-data"));
  
      // (2) 게시판 해당데이터 cnt값 증가
      // 조건: isRec값이 false일때
      bdData.some((v) => {
        if (v.idx == data.idx) {
          // 기존값에 1증가하여 넣기
          v.cnt = Number(v.cnt) + 1;
          return true;
        } /// if ///
      }); /// some ////
  
      // (3) 다시 로컬스에 저장하기
      localStorage.setItem("board-data", JSON.stringify(bdData));
    } /// if : (!isRec) ///
  
    /////// 코드리턴 구역 ///////////
    return (
      <>
        <table className="data-table-view readone">
          <caption>OPINION : Read</caption>
          <tbody>
            <tr>
              <td>Name</td>
              <td>
                <input
                  type="text"
                  className="name"
                  size="20"
                  readOnly
                  value={data.unm}
                />
              </td>
            </tr>
            <tr>
              <td>Title</td>
              <td>
                <input
                  type="text"
                  className="subject"
                  size="60"
                  readOnly
                  value={data.tit}
                />
              </td>
            </tr>
            <tr>
              <td>Content</td>
              <td>
                <textarea
                  className="content"
                  cols="60"
                  rows="10"
                  readOnly
                  value={data.cont}
                ></textarea>
              </td>
            </tr>
            <tr>
              <td>Attachment</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }; ///////////// ReadMode //////////////////