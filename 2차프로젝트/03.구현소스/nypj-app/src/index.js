// index.js는 public/index.html 페이지에 적용되는 컴포넌트다!->루트 컴포넌트

// 메인페이지 CSS 불러오기
import "./css/index.css";

// Import react
import React from "react";
import ReactDOM from 'react-dom/client';

import { Layout } from './components/layout/Layout';

export default function App() {
   return (
      <>
         <Layout/>
      </>
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