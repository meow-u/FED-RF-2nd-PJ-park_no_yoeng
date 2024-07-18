// 로그인 페이지 컴포넌트  - Login.jsx

import React, { useContext, useEffect, useState } from "react";
import $ from "jquery";

// css불러오기
import "../../css/member.scss";
import { initData } from "../func/mem_fn";
import { Con } from "../modules/myCon";
import { Link } from "react-router-dom";

function Login(props) {


  // ====== layout에서 불러온  컨텍스트 사용 =======
  const myCon = useContext(Con);
  console.log(myCon.loginSts);
  // 배너변경
  useEffect(()=>{
  myCon.setMenu('login');
})
  // =============================================

  // [ 상태관리 변수 ] /////////////////////////////
  // [1] 입력요소 상태변수
  // 1. 아이디변수
  const [userId, setUserId] = useState("");
  // 2. 비밀번호변수
  const [pwd, setPwd] = useState("");

  // [2] 에러상태관리 변수
  // -> 에러상태값 초기값은 에러아님(false)
  // 1. 아이디변수
  const [userIdError, setUserIdError] = useState(false);
  // 2. 비밀번호변수
  const [pwdError, setPwdError] = useState(false);

  // [ 아이디관련 메시지 프리셋 ] ///////////////////////////
  const msgId = [
    "This is a required entry", //필수입력
    "ID does not exist", //아이디가 존재하지 않습니다
  ];

  // [ 비밀번호 관련 메시지 프리셋 ] ////////////////////////
  const msgPwd = [
    // 비밀번호
    "This is a required entry", //필수입력
    "Password doesn't match", //비밀번호가 일치하지 않습니다
  ];

  // [3] 에러메시지 상태변수 : 초기값 msgId[0]번째
  // ->기본메세지 출력됨
  const [idMsg, setIdMsg] = useState(msgId[0]);
  const [pwdMsg, setPwdMsg] = useState(msgPwd[0]);

  // [ 유효성 검사 함수 ] ////////////////////////////////////

  // 1. 아이디 유효성 검사 ----------------------------------
  const changeUserId = (e) => {
    //input onchange에 상태변수 셋팅연결
    // 입력된 값 읽기
    let val = e.target.value;

    // 1. 빈값체크 :

    // 1-1 빈값 아니면 에러 아님 (false)
    if (val !== "") setUserIdError(false);
    // 1-2 빈값이면 에러임 (true)
    else {
      // (1) 메세지 띄우기
      setIdMsg(msgId[0]);
      // (2) 에러상태값 변경하기
      setUserIdError(true);
    } /////// else //////////////

    // 실제 userId 상태변수값이 업데이트 되야만
    // 화면에 출력된다 (input value에 상태변수연결해서)
    setUserId(val);
  }; /// changeUserId 함수 ///////

  // 2. 비밀번호 유효성 검사 ---------------------------------
  const changePwd = (e) => {
    // 입력된 값읽기
    let val = e.target.value;

    // 1. 빈값체크 :

    // 1-1 빈값 아니면 에러 아님 (false)
    if (val !== "") setPwdError(false);
    // 1-2 빈값이면 에러임 (true)
    else {
      // (1) 메세지 띄우기
      setPwdMsg(msgPwd[0]);
      // (2) 에러상태값 변경하기
      setPwdError(true);
    } /////// else //////////////

    // 2. 기존입력값 반영하기
    setPwd(val);
  }; ///////// changePwd 함수 //////////

  // [ 전체 유효성검사 체크함수 ] ///////////
  const totalValid = () => {
    // 1. 모든 상태변수에 '빈값일때 에러'상태값 업데이트!
    if (!userId) setUserIdError(true);
    if (!pwd) setPwdError(true);

    // 2. 통과시 true, 불통과시 false 리턴처리
    // 통과조건 : 빈값아님 + 에러후크변수가 모두 false
    if (userId && pwd) return true;
    // 하나라도 false이면 false를 리턴함!
    else return false;
  }; /////////// totalValid 함수 ///////////

  // [ 서브밋 기능함수 ] =================================
  const onSubmit = (e) => {
    // [1]. 기본 서브밋 기능막기 (안막음 process.php로 날라감)
    e.preventDefault();

    console.log("최종검사:", totalValid());
    // [2]. 유효성 검사 전체 통과시
    if (totalValid()) {
      console.log("모두통과! 데이터조회!");

      // [회원정보를 로컬스토리지에 저장하기]
      // 1. 로컬스 체크함수호출 (없으면 기본데이터생성!)
      initData();

      // 2. 로컬스 변수할당
      let memData = localStorage.getItem("mem-data");

      // 3. 로컬스 객체변환
      memData = JSON.parse(memData);
      console.log(memData);

      // 4. 아이디 존재 여부 검사하기
      let result = memData.find((v) => {
        if (v.uid === userId) return true;
      }); /////// find ///////////
      console.log("find결과:", result);

      // 4-1. 결과값이 없으면 false처리 됨!
      if (!result) {
        // (1) 에러메세지 선택하기
        setIdMsg(msgId[1]);
        // (1) 에러메세지 보이기
        setUserIdError(true);
      } ////////// if ////////////
      // 4-2. 결과값이 있다면 비밀번호 검사
      else {
        // (1) 아이디 에러메세지 숨기기
        setUserIdError(false);
        // (2) 비밀번호 검사 : 입력비번 == 결과비번
        if (pwd === result.pwd) {
          // 같을경우 로그인 성공처리
          //   alert("Login success!")

          // ============[ 로그인 후 셋팅작업 ]=============
          // 1. 로그인 한 회원정보를 세션스에 셋팅!
          // -> 서버세션을 대신하여 사용함!
          // -> 결과가 result에 배열로 담김
          // -> 넣을때는 JSON.stringify()

          sessionStorage.setItem("minfo", JSON.stringify(result));

          // 2. 컨텍스트 API의 로그인 상태 업데이트
          myCon.setLoginSts(sessionStorage.getItem("minfo"));
          //-> 업데이트된 minfo 세션스 값을 넣음!

          // 3. 로그인 환영메세지 셋팅함수 호출
          myCon.makeMsg(result.unm);

          // 4. 로그인 성공 메세지 버튼에 출력하기
          document.querySelector(".sbtn").innerText = "Success!";

          document.querySelector(".membx").querySelector("h2").innerText =
            "You’re logged in!";

          // 5. 라우팅 페이지 이동
          setTimeout(() => {
            myCon.goPage("/");
          }, 1000);
        } //// if ////
        // 로그인 실패시 메시지 출력!
        else {
          // (1) 비밀번호 에러메세지 선택하기
          setPwdMsg(msgPwd[1]);
          // (2) 비밀번호 에러메세지 보이기
          setPwdError(true);
        } ///// else ////

        // -> 원래 비밀번호는 암호화 되어 있으므로
        // 백엔드 비밀번호 검사 모듈로 대부분 검사한다.
      } //// else ////

      // 배열.find() -> 있을경우 레코드 저장
      // find는 filter와 다를게 '배열로 저장하지 않고 값만 저장'함!!!
      // 그래서 결과값이 없으면 undefined를 리턴함.
    } ///// if //////

    // [3]. 불퉁과시
    else {
      alert("Change your input!");
    } /// else ////
  }; ///// onSubmit 함수 //////////////

  // 화면 랜더링 구역 //
  useEffect(() => {
    // 아이디 입력창 포커스
    document.querySelector("#user-id").focus();
  }, []);

  // 코드 리턴구역 ////////////////////////////////////
  return (
    <div className="outbx">
      <section className="membx" style={{ minHeight: "300px" }}>
        <h2>LOG IN</h2>
        <form method="post" action="process.php">
          <ul>
            <li>
              <label>ID : </label>
              <input
                id="user-id"
                type="text"
                maxLength="20"
                placeholder="Please enter your ID"
                value={userId}
                onChange={changeUserId}
              />
              {
                // [에러일경우(true) 메세지 출력]
                // 조건문 && 출력요소

                userIdError && ( // 에러상태변수가 true일경우
                  <div className="msg">
                    <small
                      style={{
                        color: "red",
                        fontSize: "10px",
                      }}
                    >
                      {idMsg}
                    </small>
                  </div>
                )
              }
            </li>
            <li>
              <label>Password : </label>
              <input
                type="password"
                maxLength="20"
                placeholder="Please enter your Password"
                value={pwd}
                onChange={changePwd}
              />
              {
                // [에러일경우(true) 메세지 출력]
                // 조건문 && 출력요소

                pwdError && ( // 에러상태변수가 true일경우
                  <div className="msg">
                    <small
                      style={{
                        color: "red",
                        fontSize: "10px",
                      }}
                    >
                      {pwdMsg}
                    </small>
                  </div>
                )
              }
            </li>
            <li className="txt">Are you need create account?</li>
            <li className="btnBox" style={{ overflow: "hidden" }}>
              <button className="sbtn create" onClick={onSubmit}>
              Log In
              </button>
              <button className="sbtn loginBtn">
              Create Account
                <Link className="loginLink" to="/Member">
                Create Account
                </Link>
              </button>
            </li>
          </ul>
        </form>
      </section>
    </div>
  );
}

export default Login;
