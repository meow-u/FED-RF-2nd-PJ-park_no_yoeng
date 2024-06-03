// 루트 컴포넌트 (index.js는 public/index.html 페이지에 적용)
import React from "react";
import ReactDOM from 'react-dom/client';
// 라우터 불러오기
import { BrowserRouter, Routes, Route} from "react-router-dom";
// 레이아웃 불러오기
import { Layout } from './components/layout/Layout';
// 메인페이지 CSS 불러오기
import "./css/index.css";
/* 하위라우터 */
import Main from "./components/pages/Main";
import Shop from "./components/pages/Shop";
import Collections from "./components/pages/Collections";
import OurStory from "./components/pages/OurStory";
import Penhaligons from "./components/pages/Penhaligons";



export default function App() {
   return (
    <BrowserRouter>
      <Routes>
         {/* 1. 레이아웃을 루트로 설정: 하위라우트는 내부에위치 */}
         <Route path="/" element={<Layout/>}>
            {/* 2. path대신 index 쓰면 첫페이지 */}
            <Route index element={<Main/>}/>
            <Route path="Shop" element={<Shop/>} />
            <Route path="Collections" element={<Collections/>} />
            <Route path="OurStory" element={<OurStory/>} />
            <Route path="Penhaligons" element={<Penhaligons/>} />

         </Route>
      </Routes>
    </BrowserRouter>
   );
}

//컴포넌트 출력 ////
// 먼저 root 객체만들기
const root = ReactDOM
.createRoot(document.querySelector("#root"));
// 출력하기
root.render(<App/>);

// basename 을 안써도 HashRouter는 package.json의 homepage 속성값을 
// 자동으로 연결함. 해당속성값이 없으면 / 로 자동연결됨.
// /란 루트를 의미함 루트는 public/index.html을 의미함