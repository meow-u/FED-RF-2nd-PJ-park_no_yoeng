/********************************************** 
        함수명: bindList
        기능 : 페이지별 리스트를 생성하여 바인딩함

        전체 데이터를 검색항목이 있으면 필터하고, 필터된 데이터를
        현재 페이지번호에 맞춰 부분 선택하여 출력
  **********************************************/
export const bindList = (
  keyword,
  baseData,
  totalCount,
  sortCta,
  sort,
  currentPageNum,
  boardBlockSize,
  BOARD_MODE,
  setMode,
  selRecord,
  setSelRecord
) => {
  console.log("setSelRecord:", setSelRecord);
  console.log("setMode", setMode);
  console.log("baseData", baseData);
  console.log("totalCount", totalCount);
  console.log('Number(totalCount.current)-1:',Number(totalCount.current)-1);

  // 1. 검색어에 따라 데이터 필터하기
  let filteredBoardData;

  // 1-1.검색어가 있는경우 필터하기
  // keyword[0] : 검색기준 / keyword[1] : 검색어
  if (keyword[1] !== "") {
    filteredBoardData = baseData.filter((v) => {
      // 1. 소문자 처리하기
      // (1) 검색원본 데이터 (옵션박스 선택값: tit, cont, unm)
      let BoardCtaValue = v[keyword[0]].toLowerCase();
      // (2) 검색어 데이터
      let searchTxt = keyword[1].toLowerCase();

      console.log(v[keyword[0]].indexOf(keyword[1]));
      // 2. 필터 검색조건에 맞는 데이터 수집하기
      if (BoardCtaValue.indexOf(searchTxt) != -1) return true;
    });
  } /////// if //////////
  // 1-2.검색어가 없는경우 전체넣기
  else {
    filteredBoardData = baseData;
  } //////// else ///////

  // 1-3. 새로 데이터를 담은 후 바로 전체개수 업데이트 필수!
  totalCount.current = filteredBoardData.length;

  // 2. 정렬 적용하기 : 기존 내림차순(-1)
  // 정렬항목은 sortCta값에 따름("idx"/"tit")

  // "idx"정렬항목일 경우만 Number()처리함수
  function getSortCriteria(x) {
    return sortCta === "idx"
      ? // 정렬 기준이 'idx'면 각데이터 객체의 idx 키값을 숫자로 변환
        Number(x[sortCta])
      : // 정렬 기준이 "tit"면 각데이터 객체의 tit 키값을 (문자형 타이틀) 소문자 변환
        x[sortCta].toLowerCase();
  }

  filteredBoardData.sort((a, b) =>
    getSortCriteria(a) > getSortCriteria(b)
      ? 1 * sort // * 1은 내림차순 그대로
      : getSortCriteria(a) < getSortCriteria(b)
      ? -1 * sort // * -1은 오름차순 변경
      : 0
  );

  // 3. 페이징 별 보여줄 보드데이터 레코드 수 선택하기

  // 시작번호 = (페이지번호-1)*단위수 (1페이지는 0에서 4까지 , 2페이지는 4에서 8까지)
  let startingBoardIdx = (currentPageNum - 1) * boardBlockSize;
  // 끝번호 = 페이지번호*단위수
  let endingBoardIndex = currentPageNum * boardBlockSize;
  // console.log("첫번호:",startingBoardIdx, "/끝번호:",endingBoardIndex);
  // 결과배열
  const selectedBoards = [];

  // for문으로 배열 만들기 (해당 상태관리 페이지번호 변수에 보여줄 레코드 idx 수집)
  for (let i = startingBoardIdx; i < endingBoardIndex; i++) {
    // console.log(i);
    // idx 번호가 보드데이터의 전체 개수보다 크면 push하지말고 나가라!
    if (i >= totalCount.current) break;
    // 대상배열값 추가
    selectedBoards.push(filteredBoardData[i]);
  } ///// for //////

  console.log("currentPageNum", currentPageNum, "선택데이터:", selectedBoards);
  console.log("보여줄 갯수", selectedBoards.length);

  return (
    // 전체 데이터 개수가 0 초과일 경우 출력
    totalCount.current > 0 ? (
      selectedBoards.map((v, i) => (
        <tr key={i}>
          {/* 시작번호를 더하여 페이지별 순번을 변경
          페이지별 시작번호 + 증감변수 i + 1 (0부터 시작하므로) */}
          <td>{startingBoardIdx + i + 1}</td>
          <td>
            <a
              href="###"
              onClick={(e) => {
                e.preventDefault();
                // 해당 데이터 저장하기
                setSelRecord(v);
                // selRecord.current = v;
                // console.log("선택데이터저장(selRecord.current)", selRecord.current);
                // 읽기모드로 변경!
                setMode(BOARD_MODE.READ);
              }}
            >
              {v.tit}
              {v.modifydate ? (
                <span className="update-label">Updated</span>
              ) : (
                ""
              )}
              {v.idx == Number(totalCount.current) && (
                <span className="update-label new">NEW</span>
              )}
            </a>
          </td>
          <td>{v.unm}</td>
          <td>{v.date}</td>
          <td>{v.vcnt}</td>
        </tr>
      ))
    ) : (
      // 데이터가 없을 때 출력 /////////
      <tr>
        <td colSpan="5">There is no data. try new search</td>
      </tr>
    )
  ); //// return /////
}; /////////// bindList 함수 /////////////////
