
///////////서브하단배너////////////////////
(() => {
  //슬라이더 박스
  const slider = mFn.qs(".sub-ban-wrap");
  //움직이는 요소
  const inner = mFn.qs(".sub-ban-box");
  const btn = mFn.qsa(".sub-btn");

  //btn에 ele, idx 요소를 가지고 forEach 돈다. idx < 버튼 순서 때문
  btn.forEach((ele, idx) => {
    //ele에 클릭 이벤트가 발생하면 이벤트 할당
    ele.onmouseenter = (e) => {
      //preventDefault: 윈도우 기본값 설정 끔, 기본값 변경해야할 경우 사용
      e.preventDefault();
      inner.style.top = -100 * idx + "%";
      inner.style.transition = ".4s";
    };
  }); //forEach////////////////////////
})(); ////////하단배너 클릭 이벤트
