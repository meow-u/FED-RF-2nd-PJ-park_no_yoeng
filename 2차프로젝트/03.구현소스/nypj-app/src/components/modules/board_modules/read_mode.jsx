import { useRef } from "react";

/****************************************** 
        읽기 모드 서브 컴포넌트
******************************************/
export const ReadMode = ({ selRecord, loginSts, beforeSelRecords }) => {
  // selRecord - 게시글 클릭으로 저장된 현재글정보 / loginSts - 로그인 사용자정보
  console.log("전달된 selRecord:", selRecord);
  console.log("전달된 loginSts:", loginSts);
  // 전달된 데이터 객체를 변수에 할당
  const selectBoardData = selRecord;
  console.log(
    "basedata에 before 키를 추가함  beforeSelRecords:",
    beforeSelRecords.current
  );

  // [ 조회수 증가하기 ]
  // 규칙1 : 타인의 글만 증가한다!
  // 규칙2 : 로그인한 상태에서 한번만 증가한다!

  // ((조회된 글 저장방법))
  // -> 세션스토리지는 적합! 창을 닫으면 사라지니까!
  // -> 참조변수는 새로고침하면 초기화 되므로 제외!

  // 1.세션스 없으면 세션스 만들기
  if (!sessionStorage.getItem("viewed-boards")) {
    sessionStorage.setItem("viewed-boards", "[]");
  }
  // 2.세션스에 글번호 저장하기

  // (1) 세션스 파싱하여 변수할당
  let viewedBoards = JSON.parse(sessionStorage.getItem("viewed-boards"));

  // (2) 기존 배열값에 현재글번호 존재여부검사하기
  // isViewed 결과가 true이면 조회수를 증가하지 않는다!
  let isViewed = viewedBoards.includes(selectBoardData.idx);
  console.log("이미봤니?", isViewed);

  // (3) 로그인한 본인의 글이면 isViewed값을 true처리
  //(본것으로 처리해서 조회수 안올림)
  if (loginSts) {
    // 로그인상태

    // 글쓴이 아이디와 로그인사용자 아이디가 같은가?
    if (selectBoardData.uid === JSON.parse(loginSts).uid) {
      // 본것으로 처리
      isViewed = true;
    } //// if ///
    console.log("선택글 아이디:", selectBoardData.uid);
    console.log("로그인사용자 아이디:", JSON.parse(loginSts).uid);
  } /// if ///

  // (4) (보지 않은 글이면서 자기글아니면 )배열에 값 추가하기 : 기존값에 없으면 넣기!
  if (!isViewed) viewedBoards.push(selectBoardData.idx);

  // (5) 다시 세션스에 저장하기
  sessionStorage.setItem("viewed-boards", JSON.stringify(viewedBoards));

  // 3. 위를 기반으로 조회수 증가하기
  // -> 게시판 원본 데이터에 조회수 업데이트하기
  if (!isViewed) {
    // (1) 게시판 로컬스 데이터 파싱
    let allBoardData = JSON.parse(localStorage.getItem("board-data"));

    // (2) 게시판 해당데이터 vcnt값 증가
    // 조건: isViewed값이 false일때
    allBoardData.some((v) => {
      if (v.idx === selectBoardData.idx) {
        // 각각의 게시글중 선택게시글과 idx가 같은것 만
        // 조회수 기존값에 1증가하여 넣기
        v.vcnt = Number(v.vcnt) + 1;
        return true;
      } /// if ///
    }); /// some ////

    // (3) 다시 로컬스에 저장하기
    localStorage.setItem("board-data", JSON.stringify(allBoardData));
  } /// if : (!isViewed) ///

  /////// 코드리턴 구역 ///////////
  return (
    <>
      <table className="data-table-view readone">
        <caption>Notice</caption>
        <tbody>
          <tr>
            <td>Name</td>
            <td>
              <input
                type="text"
                className="name"
                size="20"
                readOnly
                value={selectBoardData.unm}
              />
              <span className="modify-data">
                {selectBoardData.modifydate
                  ? "최종 수정일: " + selectBoardData.modifydate
                  : ""}
              </span>
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
                value={selectBoardData.tit}
              />
            </td>
          </tr>
          <tr>
            <td>Content</td>
            <td>
              {
                /* 해당게시글에 수정key값이 있으면 직전레코드참조변수에서 해당 idx의 객체를 찾아 cont를 보여준다. */
                selectBoardData.modifydate
                  ? <span className="beforecont">[수정 전 내용] : " + {selectBoardData.beforecont}</span>
                  : ""
              }
              <textarea
                className="content"
                cols="60"
                rows="10"
                readOnly
                value={selectBoardData.cont}
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
