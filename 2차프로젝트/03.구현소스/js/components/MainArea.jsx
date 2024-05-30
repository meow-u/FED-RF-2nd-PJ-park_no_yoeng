import Newitem from "./newitem";
import Banner from "./banner";
import Video from "./video";
// 메인영역 컴포넌트 ///////

export default function MainArea() {
    // 코드 리턴구역 /////
    return (
      <main class="main-area">
        <Banner />
        <Newitem />
      <Video/>
      <Newitem />
      </main>
    );
  } ///////// MainArea 컴포넌트 ///////////
  