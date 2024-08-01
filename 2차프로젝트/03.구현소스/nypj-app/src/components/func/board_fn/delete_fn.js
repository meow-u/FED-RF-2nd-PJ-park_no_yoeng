// 삭제 처리함수 //////////////
export const deleteFn = (
  selRecord,
  baseData,
  totalCount,
  setMode,
  BOARD_MODE,
  setCurrentPageNum
) => {
  console.log("totalCount:", totalCount);
  // 삭제여부확인
  if (window.confirm("해당 게시글을 정말 삭제하시겠습니까?")) {
    // 1. 해당항목 idx담기
    // let currentIdx = selRecord.idx;
    // 2. some()로 순회하여 해당항목 삭제하기
    // find()와 달리 some()은 결과값을 boolean값으로
    // 리턴하여 처리한다! 이것을 이용하여 코드처리해보자!

    // baseData.some((v, i) => {
    //   if (v.idx == currentIdx) {
    //     // 해당순번 배열값을 삭제하자!
    //     // 배열삭제는  splice(순번,1) -> i부터 1개를 삭제해서 잇는다!
    //     baseData.splice(i, 1);

    //     // 리턴true할 경우 종료!
    //     return true;
    //   } ///// if ////
    // }); ///// some ///////


    // findIndex 메서드는 배열의 각 요소에 대해 주어진 테스트 함수를 실행하고, 조건을 만족하는 첫 번째 요소의 인덱스를 반환합니다.

    // indexOf: 기본형 데이터(문자열, 숫자 등)에서 사용합니다.
    // findIndex: 객체 배열에서 특정 조건을 만족하는 요소의 인덱스를 찾을 때 사용합니다.
    // 따라서, 객체 배열에서 인덱스를 찾으려면 findIndex를 사용해야 합니다.
    // indexOf로 동일한 값의 객체를 비교하면 참조를 예민하게 비교하기때문에 사용하지말자
    const thisIdx = baseData.findIndex((item) => item.idx === selRecord.idx);
    console.log('selRecord:',selRecord);
    console.log('thisIdx:',thisIdx);
    if (thisIdx !== -1) {
      // 배열에서 해당 요소를 삭제-> i부터 1개를 삭제해서 잇는다!
      baseData.splice(thisIdx, 1);
    }



    // 3. 로컬스에 업데이트하기 //////
    localStorage.setItem("board-data", JSON.stringify(baseData));

    // 4. 삭제후 리스트 리랜더링시 리스트 불일치로 인한
    // 에러를 방지하기 위하여 전체 개수를 바로 업데이트한다!
    totalCount.current = baseData.length;

    // 4. 리스트로 돌아가기 -> 리랜더링 /////
    // -> 모드변경! "L"
    setMode(BOARD_MODE.LIST);
    // ->첫페이지로 이동!
    setCurrentPageNum(1);
  } ///////// if ///////////////
}; //////// deleteFn ///////////////
