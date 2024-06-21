import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLayoutEffect, useState } from "react";
import { allProducts } from "../data/products_data";
import MakeItemList from "../modules/make_itemList";
import "../../css/_search_inner.scss";
import $ from "jquery";

const showMenu = (e) => {
  $(".menu-box").toggleClass("on");
};

export default function SearchInner({ keyword }) {
  let [key, setKey] = useState(keyword);
  let [sort, setSort] = useState("asc");
  let [filters, setFilters] = useState([]);

  console.log("난 SearchInner :keyword로 받았어~", keyword);
  console.log('filters:', filters);

  let schItemData = allProducts.filter((v) => {
    let LowerKey = key.toLowerCase();
    return (
      v.name[0].toLocaleLowerCase().includes(LowerKey) ||
      v.name[1].toLocaleLowerCase().includes(LowerKey)
    );
  });

  if (sort === "asc") {
    schItemData.sort((a, b) => (a.name[0] > b.name[0] ? 1 : -1));
  } else if (sort === "desc") {
    schItemData.sort((a, b) => (a.name[0] < b.name[0] ? 1 : -1));
  }

  if (filters.length > 0) {
    schItemData = schItemData.filter((v) => {
      return filters.some((v) => {
        return v.type.toLowerCase() === v || v.collection.toLowerCase() === v;
      });
    });
  }

  useLayoutEffect(() => {
    const handleCheckboxChange = (e) => {
      const { id, checked } = e.target;
      setFilters((prevFilters) => {
        if (checked) {
          return [...prevFilters, id.toLowerCase()];
        } else {
          return prevFilters.filter((filter) => filter !== id.toLowerCase());
        }
      });
    };

    $(".checkbox").on("change", handleCheckboxChange);

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) {
        $(".menu-box").removeClass("on");
      } else if (window.innerWidth < 768) {
        $(".menu-box").addClass("on");
      }
    });

    const checkBox = $(".last>.checkbox");
    checkBox.on("change", (e) => {
      if (e.target.checked) {
        $(".coll-sub").addClass("on");
      } else {
        $(".coll-sub").removeClass("on");
      }
    });

    return () => {
      $(".checkbox").off("change", handleCheckboxChange);
    };
  }, []);

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
                    //입력값 전역변수변경
                    setKey(e.target.value);
                    //정렬값 오름차순초기화
                    setSort("asc");
                    //콤보박스 초기화
                    document.querySelector(".sel").value = "asc";
                  }
                }}
              />
            </div>
            {/* 필터목록 */}
            <div className="list-wrap">
              <h2 onClick={showMenu}>Search option</h2>
              <ul className="menu-box">
                <li>
                  PRODUCT
                  <input type="checkbox" id="PRODUCT" className="checkbox" />
                  <label htmlFor="PRODUCT" className="label" />
                  <ol className="item-sub">
                    <li>
                      FRAGRANCES
                      <input
                        type="checkbox"
                        id="fragrances"
                        className="checkbox"
                      />
                      <label htmlFor="fragrances" className="label" />
                    </li>
                    <li>
                      BATH & BODY
                      <input
                        type="checkbox"
                        id="bathandbody"
                        className="checkbox"
                      />
                      <label htmlFor="bathandbody" className="label" />
                    </li>
                    <li>
                      HOME
                      <input type="checkbox" id="home" className="checkbox" />
                      <label htmlFor="home" className="label" />
                    </li>
                    <li>
                      GIFTING
                      <input
                        type="checkbox"
                        id="gifting"
                        className="checkbox"
                      />
                      <label htmlFor="gifting" className="label" />
                    </li>
                    <li className="last">
                      COLLECTIONS
                      <input
                        type="checkbox"
                        id="collections"
                        className="checkbox"
                      />
                      <label htmlFor="collections" className="label" />
                      <ol className="coll-sub">
                        <li>
                          British Tales
                          <input
                            type="checkbox"
                            id="britishtales"
                            className="checkbox"
                          />
                          <label htmlFor="britishtales" className="label" />
                        </li>
                        <li>
                          Portraits
                          <input
                            type="checkbox"
                            id="portraits"
                            className="checkbox"
                          />
                          <label htmlFor="portraits" className="label" />
                        </li>
                        <li>
                          Trade Routes
                          <input
                            type="checkbox"
                            id="traderoutes"
                            className="checkbox"
                          />
                          <label htmlFor="traderoutes" className="label" />
                        </li>
                        <li>
                          Potions & Remedies
                          <input
                            type="checkbox"
                            id="potionsremedies"
                            className="checkbox"
                          />
                          <label htmlFor="potionsremedies" className="label" />
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
            <MakeItemList dt={schItemData} />
          </div>
        </div>
      </section>
    </div>
  );
} //////////// SearchInner 컴포넌트 ////////
