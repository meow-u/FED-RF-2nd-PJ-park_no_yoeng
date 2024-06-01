// MainArea 컴포넌트

import Newitem from "./newitem";
import Banner from "./banner";
import Video from "./video";

export default function MainArea() {
    // 코드 리턴구역 /////
    return (
      <main class="main-area">
        {/* <Banner />
        <Newitem idname={"newitem-area"}/>
      <Video/> */}
      <Newitem idname={"bestitem-area"}/>
      </main>
    );
  } ///////// MainArea 컴포넌트 ///////////
  