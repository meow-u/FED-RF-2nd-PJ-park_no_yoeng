  /********************************************** 
        함수명: bindList
        기능 : 페이지별 리스트를 생성하여 바인딩함
  **********************************************/
       export const bindList = (keyword,baseData,totalCount,sortCta,sort,pageNum,unitSize,setMode,selRecord) => {
        console.log('setMode',setMode);
            // console.log(baseData);
        
            // 1. 전체 원본데이터 선택
            let orgData;
        
            // 1-1.검색어가 있는경우 필터하기
            // keyword[0] : 검색기준 / keyword[1] : 검색어
            if (keyword[1] != "") {
              orgData = baseData.filter((v) => {
                // 1. 소문자 처리하기
                // (1) 검색원본 데이터
                let orgTxt = v[keyword[0]].toLowerCase();
                // (2) 검색어 데이터
                let txt = keyword[1].toLowerCase();
        
                // console.log(v[keyword[0]].indexOf(keyword[1]));
                // 2. 필터 검색조건에 맞는 데이터 수집하기
                if (orgTxt.indexOf(txt) != -1) return true;
              });
            } /////// if //////////
            // 1-2.검색어가 없는경우 전체넣기
            else {
              orgData = baseData;
            } //////// else ///////
        
            // 1-3. 새로 데이터를 담은 후 바로 전체개수 업데이트 필수!
            totalCount.current = orgData.length;
        
            // 2. 정렬 적용하기 : 내림차순
            // sort값이 1이면 desc(현재상태유지)
            // sort값이 -1이면 asc(부호반대변경)
            // 정렬항목은 sortCta값에 따름("idx"/"tit")
        
            // "idx"정렬항목일 경우만 Number()처리함수
            const chgVal = x => 
            sortCta=="idx"
            // idx는 숫자형으로 정렬
            ?Number(x[sortCta])
            // "tit"는 문자형이고 소문자로 비교
            :x[sortCta].toLowerCase();
        
            orgData.sort((a, b) =>
              chgVal(a) > chgVal(b) 
              ? -1 * sort 
              : chgVal(a) < chgVal(b) 
              ? 1 * sort : 0
            );
        
            // 3. 일부 데이터만 선택
            // 예시로 0번부터 9번까지만 선택
            // 한페이지당 10개라면...
            // 페이지 번호와 연관시켜 본다!
            // 1,2,3,4,...
        
            // 시작번호 = (페이지번호-1)*단위수
            let sNum = (pageNum - 1) * unitSize;
            // 끝번호 = 페이지번호*단위수
            let eNum = pageNum * unitSize;
            // console.log("첫번호:", sNum, "/끝번호:", eNum);
            // 결과배열
            const selData = [];
        
            // for문으로 배열 만들기
            for (let i = sNum; i < eNum; i++) {
              // console.log(i);
              // 끝번호가 전체 개수보다 크면 나가라!
              if (i >= totalCount.current) break;
              // 대상배열값 추가
              selData.push(orgData[i]);
            } ///// for //////
        
            console.log("일부데이터:", selData);
            console.log("여기:", selData.length);
        
            // if (selData.length == 0) setPageNum(pageNum - 1);
            // -> ListMode컴포넌트가 업데이트 되는동안에
            // 리스트 관련 상태변수를 업데이트하면 
            // 업데이트 불가 에러 메시지가 발생한다!
            // 따라서 이런 코드는 다른 방식으로 변경해야함!
        
            return (
              // 전체 데이터 개수가 0 초과일 경우 출력
              // 0초과 ? map돌기코드 : 없음코드
              totalCount.current > 0 ? (
                selData.map((v, i) => (
                  <tr key={i}>
                    {/* 시작번호를 더하여 페이지별 순번을 변경 */}
                    <td>{i + 1 + sNum}</td>
                    <td>
                      <a
                        href="###"
                        onClick={(e) => {
                          e.preventDefault();
                          // 읽기모드로 변경!
                          setMode("R");
                          // 해당 데이터 저장하기
                          selRecord.current = v;
                        }}
                      >
                        {v.tit}
                      </a>
                    </td>
                    <td>{v.unm}</td>
                    <td>{v.date}</td>
                    <td>{v.cnt}</td>
                  </tr>
                ))
              ) : (// 데이터가 없을 때 출력 /////////
                <tr>
                  <td colSpan="5">There is no data.</td>
                </tr>
              )
            ); //// return /////
          }; /////////// bindList 함수 /////////////////