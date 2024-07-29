// 삭제 처리함수 //////////////
export const deleteFn = (
  selRecord,
  baseData,
  totalCount,
  setMode,
  setPageNum
) => {
  // 삭제여부확인
  if (window.confirm("Are you sure you want to delete?")) {
    // 1. 해당항목 idx담기
    let currIdx = selRecord.current.idx;
    // 2. some()로 순회하여 해당항목 삭제하기
    // find()와 달리 some()은 결과값을 boolean값으로
    // 리턴하여 처리한다! 이것을 이용하여 코드처리해보자!
    baseData.some((v, i) => {
      if (v.idx == currIdx) {
        // 해당순번 배열값을 삭제하자!
        // 배열삭제는  splice(순번,1)
        baseData.splice(i, 1);

        // 리턴true할 경우 종료!
        return true;
      } ///// if ////
    }); ///// some ///////

    // 3. 로컬스에 업데이트하기 //////
    localStorage.setItem("board-data", JSON.stringify(baseData));

    // 4. 삭제후 리스트 리랜더링시 리스트 불일치로 인한
    // 에러를 방지하기 위하여 전체 개수를 바로 업데이트한다!
    totalCount.current = baseData.length;

    // 4. 리스트로 돌아가기 -> 리랜더링 /////
    // -> 모드변경! "L"
    setMode("L");
    // -> 삭제후 첫페이지로 이동!
    setPageNum(1);
  } ///////// if ///////////////
}; //////// deleteFn ///////////////
