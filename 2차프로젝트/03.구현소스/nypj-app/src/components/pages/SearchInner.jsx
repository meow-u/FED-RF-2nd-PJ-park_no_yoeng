// 펜할리곤스 Search 서브페이지 컴포넌트

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//데이터 불러오기
import { allProducts } from "../data/products_data";
// css불러오기
import "../../css/_search_inner.scss";
import $ from "jquery";
import { useEffect, useState } from "react";
import MakeItemList from "../modules/make_itemList";
const showMenu = (e) => {
  $(".menu-box").toggleClass("on");
};

// 전체 검색 체크박스 상태관리변수
const categories = [
  "allproduct",
  "fragrances",
  "bath&body",
  "home",
  "gifting",
  "collections",
  "britishtales",
  "portraits",
  "traderoutes",
  "potions&remedies",
  "ourstory",
  "collection",
];

export default function SearchInner({ keyword }) {
  // 검색어 상태관리변수
  let [key, setKey] = useState(keyword);
  // 정렬기준 상태관리변수
  // 값: 오름차순 -asc  ascending / 내림차순 -desc descending
  let [sort, setSort] = useState("asc");
  // 필터기준 상태관리변수
  let [chk, setChk] = useState(categories);
  // 페이지 상태관리변수
  let [page, setPage] = useState(1);

  // keyword 는 top-area에서 보낸 검색 값
  console.log("난 SearchInner :keyword로 받았어~", keyword);
  console.log("랜더링후 변경된 chk:", chk);

  // 각각 필터기준별 갯수를 담을 객체
  let listLength = {};

  //컬렉션 (하위 체크박스 합친) 갯수배열만들기
  let collLength = [];
  console.log("collLength:", collLength);

  // 컬렉션 합계를 계산하는 함수
  let collLengthFn = () => {
    return (
      (listLength["britishtales"] ?? 0) +
      (listLength["portraits"] ?? 0) +
      (listLength["traderoutes"] ?? 0) +
      (listLength["potions&remedies"] ?? 0)
    );
  };

  // 검색어가 있는 데이터 이름 필터하기
  let schItemData = allProducts.filter((v) => {
    let LowerKey = key.toLowerCase(); // 전달받은 검색키워드 소문자처리
    // 검색기준 데이터 소문자처리 후 indexOf() - 검색어가 포함된 데이터만 필터링
    console.log("처음필터!");
    return (
      //첫번째 또는 두번쨰 이름과 일치하면 값리턴
      v.name[0].toLocaleLowerCase().indexOf(LowerKey) !== -1 ||
      v.name[1].toLocaleLowerCase().indexOf(LowerKey) !== -1
    );
  });
  console.log("처음필터결과:", schItemData);

  // [필터기능 추가하기] /////////
  // (1) 체크된 필터기준이 있을때
  if (chk.length > 0) {
    //  console.log("chk.length:", chk.length);
    //  console.log("chk:", chk);
    // 상태관리변수 배열의 갯수가 0보다 클때 (체크된게 있을 때)

    // 소문자+공백제거함수
    let LowerNoSpace = (x) => x.toLocaleLowerCase().replace(/\s/g, "");
    // 리턴 안쓸거면 중괄호 제발 생략해라 !!!!!
    ////////////////////////////////////////////////////
    ////////////////////////////////////////////////////

    schItemData = schItemData.filter((v) => {
      //88개돌아!
      console.log("체크된게 있을때 필터!");
      //some 메서드는 적어도 하나의 요소가 조건을 만족하면 true를 반환

      return chk.some((arr, idx) => {
        //각 88개를 각 12개랑 매칭해서 돌아!
        const match =
          LowerNoSpace(v.type) === arr || LowerNoSpace(v.collection) === arr;

        if (match) {
          //매칭발생시 listLength 객체에 추가
          listLength[arr] =
            // 객체에 arr이름이 있으면 1증가 없으면 초기값1
            listLength[arr] ? ++listLength[arr] : 1;
        }

        return match;
      });
    });
    ///////////////////////////////////////////////////
    ///////////////////////////////////////////////////
    console.log(listLength);
  } ////////////// if //////////////////
  else if (chk.length === 0) {
    //(2) 체크된 필터기준이 없을때
    console.log("chk.length:", chk.length);
    console.log("chk:", chk);
    // 아무것도 출력하지 않음
    schItemData = schItemData.filter((v) => {
      console.log("체크된게 없을때는 출력안해!");
      return false; // false를 리턴하면 아무것도 출력하지 않음
    });
  } ////////////// else if //////////////

  // 결과데이터 확인
  let resultData = schItemData;

  console.log("추가필터 이후 resultData:", resultData);
  // [정렬기능 추가하기] /////////
  // (1) 오름차순일 경우
  if (sort === "asc") {
    schItemData.sort((a, b) =>
      // a가 크면 일단바꿔 (그래야오름차순)  a가 작으면 (오름차순이니) 마 놔둬!
      a.name[0] > b.name[0] ? 1 : a.name[0] < b.name[0] ? -1 : 0
    );
  } /// if //////////////////////
  else if (sort === "desc") {
    schItemData.sort((a, b) =>
      a.name[0] > b.name[0] ? -1 : a.name[0] < b.name[0] ? 1 : 0
    );
  } /// else if /////////////////
  // [페지네이션 기능 추가하기] /////////
  // (1) 페이지별로 보여줄 갯수
  let perPage = 12;
  // (2) 현재 페이지의 데이터 시작 인덱스
  let start = (page - 1) * perPage;
  // (3) 현재 페이지의 데이터 종료 인덱스
  let end = start + perPage;
  // (4) 현재 페이지의 데이터만 추출하여 보여줄 데이터로 설정
  resultData = schItemData.slice(start, end);
  console.log("페이지별 데이터:", resultData);
  // 1페이지일시 보여지는 데이터 인덱스 0~11 (0부터시작 12전까지)
  // 2페이지일시 보여지는 데이터 인덱스 12~23 (12부터시작 24전까지)
  // 3페이지일시 보여지는 데이터 인덱스 24~35 (24부터시작 36전까지)
  // 4페이지일시 보여지는 데이터 인덱스 36~47 (36부터시작 48전까지)
  // 5페이지일시 보여지는 데이터 인덱스 48~59 (48부터시작 60전까지)
  // 6페이지일시 보여지는 데이터 인덱스 60~71 (60부터시작 72전까지)
  // 7페이지일시 보여지는 데이터 인덱스 72~83 (72부터시작 84전까지)
  // 8페이지일시 보여지는 데이터 인덱스 84~95 (84부터시작 96전까지)

  /////////////////////////////////////////////////////////
  useEffect(() => {
    console.log("useEffect실행");

    // 모든 체크박스 초기값 체크상태로 설정
    $(".checkbox").attr("checked", true);

    // 체크박스 상태변경시 이벤트
    $(".checkbox").on("change", (e) => {
      // // 첫번째 페이지 강제 트리거
      // $(".page a").eq(0).trigger("click");
      // // 첫번째 페이지 on클래스 추가
      // $(".page a").eq(0).addClass("on").parent().siblings().children().removeClass("on");
      console.log(e.target.checked);
      // 체크박스 아이디값 읽어오기
      let id = $(e.target).attr("id");

      // (1)전체상품 체크박스는 여기서 제외
      if (id === "allproduct") {
        if (e.target.checked) {
          // 전체 체크속성 추가
          $(".checkbox").prop("checked", true);
          //.prop() 사용: atrr 쓰면 잘 실행이 안됨.
          // prop은 checked 속성에 대해 더 신뢰성 있게 작동

          // 모든 체크박스 id를 setChk에 추가
          setChk(categories);
        } else {
          // 전체 체크속성 제거
          $(".checkbox").prop("checked", false);

          // 모든 체크박스 id를 setChk에서 제거
          setChk([]);
        }
      }
      // (2)콜렉션 체크박스는 여기서 따로처리
      else if (id === "collections") {
        if (e.target.checked) {
          $(".coll").prop("checked", true);

          setChk((prevChk) => {
            // Set을 이용하여 중복을 제거하고 새로운 요소들을 추가
            const newSet = new Set([
              ...prevChk,
              "britishtales",
              "portraits",
              "traderoutes",
              "potions&remedies",
            ]);
            return Array.from(newSet); // Set을 다시 배열로 변환하여 반환
          });

          console.log("콜렉션 4개 chk추가! 랜더링확인!");
        } else if (!e.target.checked) {
          $(".coll").prop("checked", false);
          setChk((prevChk) =>
            prevChk.filter(
              (v) =>
                v !== "britishtales" &&
                v !== "portraits" &&
                v !== "traderoutes" &&
                v !== "potions&remedies"
            )
          );
          console.log("콜렉션 4개 chk제거! 랜더링확인!");
        }
      }
      // 나머지 체크박스를 클릭했을 때
      else {
        //React에서 상태관리변수 (예: setChk 함수)는 '직전 상태 값'을 매개변수로 받는 함수형 업데이트 패턴을 사용할 수 있음!!
        setChk((prevChk) => {
          if (e.target.checked) {
            // 체크됐을 때 배열에 추가
            console.log("변경전Chk", [...prevChk]);
            return [...prevChk, id.toLocaleLowerCase()];
          } else if (!e.target.checked) {
            // 체크 해제됐을 때 배열에서 제거
            console.log("체크해제");

            // 체크가 해제된 체크박스 id값을 제외하고 리턴
            return prevChk.filter((v) => v !== id.toLocaleLowerCase());
          }
        });
      } ///////////////// else //////////////////
    });

    // 모바일,웹에따라 옵션상자 on토글
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) {
        console.log("웹사이즈");
        $(".menu-box").removeClass("on");
      } /// if
      else if (window.innerWidth < 768) {
        console.log("모바일사이즈");
        $(".menu-box").addClass("on");
      } ////else if
    });
    // 컬렉션포함 하위 인풋체크시 하단메뉴on 넣기
    let checkBox = $(".last>.checkbox");
    // console.log(checkBox)
    checkBox.on("change", (e) => {
      console.log("체크여부", e.target.checked);
      if (e.target.checked) {
        $(".coll-sub").addClass("on");
      } else {
        $(".coll-sub").removeClass("on");
      }
    });

    console.log($(".page a"));

    // 페이지 버튼 클릭시 출력갯수 변경

    // [정적 바인딩 vs 동적 바인딩]: 
    // e.preventDefault()가 재 랜더링시 안되었던 문제

    // 정적 바인딩 : 페이지가 처음 로드될 때 .page 안의 모든 a 요소에 클릭 이벤트를 직접적으로 바인딩합니다. 이는 해당 시점에서 존재하는 모든 a 요소에 대해 이벤트가 등록되며, 이후에 동적으로 추가된 요소에는 적용X
    // 동적 바인딩: .page 요소에 대한 이벤트를 바인딩하고, 이벤트가 발생했을 때 해당 요소가 a인지 확인한 후, 이벤트를 실행. 페이지 로드 시점에 존재하지 않는 요소에도 이벤트를 적용할 수 있어, 동적으로 생성되는 a 요소들에도 이벤트가 올바르게 적용O
    //  $(".page a").on("click", function (e) { //정적
    $(".page").on("click", "ul > li > a", function (e) {//동적
      //a태그 기본이벤트 제거
      e.preventDefault();
      let pg = $(this).text();
      setPage(pg);
      console.log("클릭페이지", pg, "상태관리변수page", page);

      //선택페이지의 부모의 형제들의 자식들의 a태그의 on클래스 제거
      $(this).addClass("on").parent().siblings().children().removeClass("on");
    });

    // 소멸구역 /////////
    // Clean-up 함수
    return () => {
      $(".checkbox").off("change"); // 이벤트 리스너 제거
    };
  }, []); //렌더링전 실행구역

  // 리턴구역
  return (
    <div id="search-area">
      <section className="search-area inbox">
        <h2 className="temp-tit"> SearchInner</h2>
        <div className="cont-box">
          {/* 검색박스 */}
          <div className="col-3 searching-box">
            {/* 인풋박스 */}
            <div className="input-box">
              <FontAwesomeIcon icon={faSearch} />
              <input
                type="text"
                placeholder="Filter by keyword"
                defaultValue={keyword}
                onKeyUp={(e) => {
                  //만약 엔터키가 눌리면
                  if (e.key === "Enter") {
                    //입력값(검색어)  전역변수변경
                    setKey(e.target.value);
                    //정렬값 오름차순초기화
                    setSort("asc");
                    //콤보박스도 오름차순 형태로 초기화
                    document.querySelector(".sel").value = "asc";
                    // 체크박스 전체 체크로 기본값
                    $(".checkbox").prop("checked", true);
                    // 체크상태변수 초가화
                    setChk(categories);
                    // 페이지 초기화
                    setPage(1);
                  }
                }}
              />
            </div>
            {/* 필터목록 */}
            <div className="list-wrap">
              <h2 onClick={showMenu}>Search option</h2>
              <ul className="menu-box">
                <li>
                  ALL PRODUCT
                  <span>{`(${schItemData.length ?? 0})`}</span>
                  <input type="checkbox" id="allproduct" className="checkbox" />
                  <label htmlFor="allproduct" className="label" />
                  <ol className="item-sub">
                    <li>
                      FRAGRANCES
                      <span>{`(${listLength["fragrances"] ?? 0})`}</span>
                      <input
                        type="checkbox"
                        id="fragrances"
                        className="checkbox"
                      />
                      <label htmlFor="fragrances" className="label" />
                    </li>
                    <li>
                      BATH & BODY
                      <span>{`(${listLength["bath&body"] ?? 0})`}</span>
                      <input
                        type="checkbox"
                        id="bath&body"
                        className="checkbox"
                      />
                      <label htmlFor="bath&body" className="label" />
                    </li>
                    <li>
                      HOME
                      <span>{`(${listLength["home"] ?? 0})`}</span>
                      <input type="checkbox" id="home" className="checkbox" />
                      <label htmlFor="home" className="label" />
                    </li>
                    <li>
                      GIFTING
                      <span>{`(${listLength["gifting"] ?? 0})`}</span>
                      <input
                        type="checkbox"
                        id="gifting"
                        className="checkbox"
                      />
                      <label htmlFor="gifting" className="label" />
                    </li>
                    <li className="last">
                      COLLECTIONS
                      <span>{`(${collLengthFn()})`}</span>
                      <input
                        type="checkbox"
                        id="collections"
                        className="checkbox"
                      />
                      <label htmlFor="collections" className="label" />
                      <ol className="coll-sub">
                        <li>
                          British Tales
                          <span>{`(${listLength["britishtales"] ?? 0})`}</span>
                          <input
                            type="checkbox"
                            id="britishtales"
                            className="checkbox coll"
                          />
                          <label htmlFor="britishtales" className="label" />
                        </li>
                        <li>
                          Portraits
                          <span>{`(${listLength["portraits"] ?? 0})`}</span>
                          <input
                            type="checkbox"
                            id="portraits"
                            className="checkbox coll"
                          />
                          <label htmlFor="portraits" className="label" />
                        </li>
                        <li>
                          Trade Routes
                          <span>{`(${listLength["traderoutes"] ?? 0})`}</span>
                          <input
                            type="checkbox"
                            id="traderoutes"
                            className="checkbox coll"
                          />
                          <label htmlFor="traderoutes" className="label" />
                        </li>
                        <li>
                          Potions & Remedies
                          <span>
                            {`(${listLength["potions&remedies"] ?? 0})`}
                          </span>
                          <input
                            type="checkbox"
                            id="potions&remedies"
                            className="checkbox coll"
                          />
                          <label htmlFor="potions&remedies" className="label" />
                        </li>
                      </ol>
                    </li>
                  </ol>
                </li>
                <li>
                  OUR STORY
                  <input type="checkbox" id="ourstory" className="checkbox" />
                  <label htmlFor="ourstory" className="label" />
                </li>
                <li>
                  COLLECTION
                  <input type="checkbox" id="collection" className="checkbox" />
                  <label htmlFor="collection" className="label" />
                </li>
              </ul>
            </div>
          </div>
          {/* 결과박스 */}
          <div className="col-9 result-box">
            <div className="wrap">
              <h2>
                <strong>'{key}'</strong>
                <br />
                SEARCH RESULT
              </h2>
              <h3>{schItemData.length} All items search results</h3>
            </div>
            <aside className="sortbx">
              <select
                name="sel"
                id="sel"
                className="sel"
                onChange={(e) => setSort(e.target.value)}
              >
                {/* value를 읽어 sort전역변수변경 */}
                <option value="asc">A-Z</option>
                <option value="desc">Z-A</option>
              </select>
            </aside>
            {/* 뿌리는 컴포넌트 */}
            <MakeItemList dt={resultData} />
          <div className="page col-9">
            <ul>
              {/* #!은 새로고침안됨. url은변경. 주로 단일 페이지 애플리케이션(SPA)에서 사용 */}
              {Array(Math.ceil(schItemData.length / 12))
                .fill(0)
                .map((v, i) => (
                  <li key={i}>
                    <a href="#!">{i + 1}</a>
                    {/* 마지막 a태그 제외하고  뒤에 |추가 */}
                    {i === Math.ceil(schItemData.length / 12) - 1 ? "" : "|"}
                  </li>
                ))}
            </ul>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
} //////////// SearchInner 컴포넌트 ////////

// ++a 는 'a를 1증가시킨 후' a를 반환
// a++ 는 'a를 반환한 후' a를 1증가시킴
// [ ?? 연산자: a ?? b]
// 왼쪽 피연산자가 null 또는 undefined일 때만 오른쪽 피연산자를 반환합니다.
// 다른 모든 falsy 값 (0, '', false, NaN)은 유효한 값으로 취급합니다.

// [ || 연산자: a || b ]
// 왼쪽 피연산자가 falsy (null, undefined, 0, '', false, NaN)일 때 오른쪽 피연산자를 반환합니다.
