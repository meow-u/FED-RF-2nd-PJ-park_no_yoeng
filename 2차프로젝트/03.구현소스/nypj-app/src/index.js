// 루트 컴포넌트 (index.js는 public/index.html 페이지에 적용)
import React from "react";
import ReactDOM from "react-dom/client";
// 라우터 불러오기
import { BrowserRouter, Routes, Route } from "react-router-dom";
// 레이아웃 불러오기
import { Layout } from "./components/layout/Layout";
// 메인페이지 CSS 불러오기
import "./css/index.scss";
// 메뉴데이터 불러오기
import { hamMenu } from "./components/data/main_data";
/* 하위라우터 */
import Main from "./components/pages/Main";
import Shop from "./components/pages/Shop";
import Collections from "./components/pages/Collections";
import OurStory from "./components/pages/OurStory";
import Penhaligons from "./components/pages/Penhaligons";
import Cart from "./components/pages/Cart";
import Search from "./components/pages/Search";
import Product from "./components/pages/Product";
import Member from "./components/pages/Member";
import Login from "./components/pages/Login";
import Board from "./components/pages/board";

let subMenu = hamMenu[1].sub; //서브메뉴 데이터

export default function App() {
  const ourStoryArr = Array(4)
    .fill()
    .map((v, i) => i + 1);
  // 출력: [1,2,3,4] 길이가 4이고 각 요소가 인덱스 + 1의 값으로 초기화
  const collectionArr = [
    "TheBritishTalesCollection",
    "PortraitsCollection",
    "TradeRoutesCollection",
    "Potions&Remedies",
  ];
  //let newArr = Array(5).fill(0); (fill 안하면 undefind)
  // 출력: [0,0,0,0,0] 배열의길이가 5인 배열을 0으로 채운다. 

  // [1] 88개 상품데이터 배열 만들기
  // const productArr = Array.from({ length: 88 }, (v, i) => i + 1);
  // console.log('productArr',productArr);
  // [2] 88개 상품데이터 배열 만들기
  const productArr = Array(88)
    .fill()
    .map((v, i) => i + 1);
  console.log("productArr2", productArr);

  return (
    // <BrowserRouter>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        {/* 1. 레이아웃을 루트로 설정: 하위라우트는 내부에위치 */}
        <Route path="/" element={<Layout />}>
          {/* 2. path대신 index 쓰면 첫페이지 */}
          <Route index element={<Main />} />
          <Route path="Shop" element={<Shop />} />
          {subMenu.map((v, i) => (
            <Route
              key={i}
              path={v.link}

              element={<Shop initSmenu={v.txt} />}  //서브메뉴데이터전달
            />
          ))}

          <Route path="Collections" element={<Collections />} />
          <Route path="OurStory" element={<OurStory />} />
          <Route path="Penhaligons" element={<Penhaligons />} />
          <Route path="cart" element={<Cart />} />
          <Route path="Member" element={<Member />} />
          <Route path="Login" element={<Login />} />
          <Route path="search" element={<Search />} />
          <Route path="board" element={<Board />} />
          
          {ourStoryArr.map((v, i) => (
            <Route
              key={i}
              path={"OurStory/story" + (i + 1)}
              element={<Penhaligons />}
            />
          ))}
          {collectionArr.map((v, i) => (
            <Route key={i} path={"Collection/" + v} element={<Penhaligons />} />
          ))}
          {productArr.map((_, i) => (
            <Route
              key={i}
              path={"Shop/product/" + (i + 1)}
              element={<Product/>}
            />))}
        </Route>{" "}
        {/* 레이아웃 라우트 끝 */}
      </Routes>
    </BrowserRouter>
  );
}

//컴포넌트 출력 ////
// 먼저 root 객체만들기
const root = ReactDOM.createRoot(document.querySelector("#root"));
// 출력하기
root.render(<App />);

// -------------------------------------------------------------------
//[상세페이지의 라우터 연결과 useLocation() 사용법 ]

// index.js에서 연결할 상세페이지가 많으면 데이터 length만큼  map돌리기
// 예) 상세페이지갯수가 4개면
//   const ourStoryArr = [1, 1, 1, 1]; 이걸맵돌림.

// 개별주소 필요 없으면 i만돌리고, 있으면 v값내부 데이터 참조해서 주소이름넣어돌리기
// (1) <Route key={i} path={"큰메뉴/저쩌구"+(i+1)} ele..={컴포}>
// (2) <Route key={i} path={"큰메뉴/" +v.tit} ele..={컴포}>

// -------------------------------------------------------------------

// // 맵돌린 링크라우터에 state로 데이터 보내기 (SPA 데이터전달)

// link는 사용자가 직접 클릭하는 요소가 있는 컴포넌트에 있음
// <Link to={path에적힐값} state={{보낼변수명:보낼값,  ..}}>어쩌구</Link>
// ex 펜할리곤스-> topArea컴포 내부 gnb , 컬렉션/스토리 ->content컴포 내부 이미지상자

// 맵돌리면서 컴포넌트가 받아야할 특정 보낼값을 보내면 된다.
// ----------------------------------------------

// Link to 호출시 보낸 state 객체값을 index.js에서 라우터로 연결된 컴포넌트에서 받아준다!
// import { useLocation } from "react-router-dom" 을 추가해야 한다!!

// 값은 useLocation().state.보낸변수명으로 넘어옴. (useLocation()를 변수loc할당해서
// const sData = loc.state.변수명 선언하고
// sData 식으로 쉽게 사용함 (이 최종 할당된 변수를 해당 컴포넌트에 객체구조분해할당 값에  전달하기.

// [기타 참고]
// basename 을 안써도 HashRouter는 package.json의 homepage 속성값을
// 자동으로 연결함. 해당속성값이 없으면 / 로 자동연결됨.
// /란 루트를 의미함 루트는 public/index.html을 의미함
