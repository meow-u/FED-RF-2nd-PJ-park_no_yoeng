// 펜할리곤스 Member 서브페이지 컴포넌트
import React, { useContext, useEffect, useState } from "react";
import { Con } from "../modules/myCon";
import { Link, useNavigate } from "react-router-dom";
import $ from "jquery";
// 로컬스토리지 생성함수 불러오기
import { initData } from "../func/mem_fn";

// 회원가입 css 불러오기
import "../../css/member.scss";

function Member() {
  //컨텍스트 API사용
  const myCon = useContext(Con);
  // 배너변경
  useEffect(()=>{
  myCon.setMenu('member');
})
  // [ 리액트 라우터 내비게이션 사용하기 ]
  // 라우터 이동 네비게이트
  const goNav = useNavigate();
  // goNav(라우터 주소, state변수(선택))

  // [ 회원가입 페이지 요구사항 ]
  // 1. 각 입력 항목별로 유효성 검사를 실행함
  // 2. 상태체크를 통하여 적절한 유효성검사시
  // 유효성 체크 에러메세지를 출력한다.
  // 3. 유효성 검사 통과시 로컬스토리지에 저장한다.
  // -> 특이사항 :
  // 글자를 입력할때마다 검사
  // -> + submit 버튼 작동시 검사

  // [ 상태관리 변수 ] /////////////////////////////
  // [1] 입력요소 상태변수
  // 1. 아이디변수
  const [userId, setUserId] = useState("");
  // 2. 비밀번호변수
  const [pwd, setPwd] = useState("");
  // 3. 비밀번호확인변수
  const [chkPwd, setChkPwd] = useState("");
  // 4. 사용자이름변수
  const [userName, setUserName] = useState("");
  // 5. 이메일변수
  const [email, setEmail] = useState("");

  // [2] 에러상태관리 변수
  // -> 에러상태값 초기값은 에러아님(false)
  // 1. 아이디변수
  const [userIdError, setUserIdError] = useState(false);
  // 2. 비밀번호변수
  const [pwdError, setPwdError] = useState(false);
  // 3. 비밀번호확인변수
  const [chkPwdError, setChkPwdError] = useState(false);
  // 4. 사용자이름변수
  const [userNameError, setUserNameError] = useState(false);
  // 5. 이메일변수
  const [emailError, setEmailError] = useState(false);

  console.log(">>>>랜더링후 변경확인", userIdError);

  // [ 아이디관련 메시지 프리셋 ] ///////////////////////////
  const msgId = [
    // 최소 5글자이상 입력
    "User ID must contain a minimum of 5 characters",
    // 사용중인 아이디
    "This ID is already in use!",
    // 훌륭한 아이디
    "That's a great ID!",
  ];

  // [ 기타 메시지 프리셋 ]
  const msgEtc = {
    // 비밀번호
    pwd: "5 to 15 digits in the form of special characters, characters, and numbers",
    // 비밀번호확인
    confPwd: "Password verification does not match",
    // 필수입력
    req: "This is a required entry",
    // 이메일
    email: "Please enter a valid email format",
  }; ///// msgEtc ///////

  // [3] 에러메시지 상태변수 : 초기값 msgId[0]번째 ->기본메세지 출력됨
  const [idMsg, setIdMsg] = useState(msgId[0]);

  // [ 유효성 검사 함수 ] ////////////////////////////////////

  // 1. 아이디 유효성 검사 ----------------------------------
  const changeUserId = (e) => {
    //input onchange에 상태변수 셋팅연결
    // 입력된 값 읽기
    let val = e.target.value;

    // 1. 아이디 유효성 검사식(따옴표로 싸지 말것!)
    const valid = /^[A-Za-z0-9+]{5,}$/;
    // 유효성 검사방법: 정규식.test(값) --> 불린값나옴

    // 2. 입력값 확인 : e.target
    //   console.log(val);

    // 3. 에러상태 분기하기
    // 3-1. 에러 아닐때  (유효성검사만 통과시)
    if (valid.test(val)) {
      console.log("유효성만 통과했지만...!");
      // 아이디 검사를 위해 기본 데이터 생성 호출!
      initData();
      // 유효성통과후 로컬스에 "mem-data"가 없으면 초기 셋팅함!

      // 이제 중복 아이디 검사를 실행한다!!!
      // 1. 로컬스 변수할당
      let memData = localStorage.getItem("mem-data");
      console.log(memData);

      // 2. 로컬스객체변환 (왜? 문자형이니까!)
      memData = JSON.parse(memData);
      // -> 문자형에서 배열데이터로 변환!
      // 주의: JSON 파싱할때 원본형식이 제이슨 파일형식으로
      // 엄격하게 작성되어야 에러가 없음(마지막 콤마 등..)
      // (에러뜨면 로컬스토리지 삭제후 해보기)

      // [ @@@새로운 배열메서드: some() ]
      // -> 조건에 맞는 값이 하나만 나오면 true 처리함
      // @@@비교참고) every()는 하나만 false이면 false리턴 (다안돔)
      //  let isT = memData.every(v=>{
      //     console.log('돌아!',v.uid);
      //조건에맞으면 끝나고 더 안돔
      //     return v.uid===val}); //값을 구체적으로 알필요없이 true /false만 필요할 경우엔 some / every 사용

      // 아이디 에러상태변수 업데이트(false)
      //  setUserIdError(false);

      // 3. 배열이니까 현재 입력데이터의 아이디가
      // 기존 배열값으로 있는지 검사함!
      // 있으면 true, 없으면 false
      let isT = memData.some((v) => v.uid === val);
      console.log("중복id있어?", isT);

      // 4. true일 경우 중복데이터 메세지 표시
      if (isT) {
        // 에러 메세지 업데이트
        setIdMsg(msgId[1]);
        // 에러상태값 업데이트
        setUserIdError(true);
      } //if ///
      // 5. false 일 경우 [성공메세지] 표시
      else {
        // 에러상태값 업데이트 : 에러가아님(false)
        setUserIdError(false);
      } /// else ///
    } //if//
    // 3-2. 에러일때 : 유효성 검사 에러
    else {
      console.log("에러!");
      // 에러 메세지 업데이트
      setIdMsg(msgId[0]);
      // 아이디 에러상태변수 업데이트(true)
      setUserIdError(true);
    } //else//

    // 실제 userId 상태변수값이 업데이트 되야만
    // 화면에 출력된다 (input value에 상태변수연결해서)
    setUserId(val);
  }; /// changeUserId 함수 ///////

  // 2. 비밀번호 유효성 검사 ---------------------------------
  const changePwd = (e) => {
    // 입력된 값읽기
    let val = e.target.value;

    // 1. 비밀번호 유효성 검사식(따옴표로 싸지 말것!)
    const valid = /^.*(?=^.{5,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

    // 2. 입력값 확인 : e.target -> 이벤트가 발생한 요소
    // console.log(val);

    // 3. 에러에 따른 상태값 변경
    if (valid.test(val)) setPwdError(false);
    else setPwdError(true);

    // 4. 기존입력값 반영하기
    setPwd(val);
  }; ///////// changePwd 함수 //////////

  // 3. 비밀번호확인 유효성 검사 -------------------------------
  const changeChkPwd = (e) => {
    // 입력된 값읽기
    let val = e.target.value;

    // 1. 비밀번호 입력내용과 일치여부 확인
    if (pwd === val) setChkPwdError(false);
    else setChkPwdError(true); //같지않으면 에러

    // 2. 기존입력값 반영하기
    setChkPwd(val);
  }; ///////// changeChkPwd 함수 //////////

  // 4. 사용자이름 유효성 검사 ---------------------------------
  const changeUserName = (e) => {
    // 입력된 값읽기
    let val = e.target.value;

    // 1. 빈값체크
    if (val !== "") setUserNameError(false);
    else setUserNameError(true);

    // 2. 기존입력값 반영하기
    setUserName(val);
  }; ///////// changeUserName 함수 //////////

  // 5. 이메일 유효성 검사 --------------------------------------
  const changeEmail = (e) => {
    // 입력된 값읽기
    let val = e.target.value;

    // 1. 이메일 유효성 검사식(따옴표로 싸지 말것!)
    const valid =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    // 2. 입력값 확인 : e.target -> 이벤트가 발생한 요소
    // console.log(val);

    // 3. 에러에 따른 상태값 변경
    if (valid.test(val)) setEmailError(false);
    else setEmailError(true);

    // 4. 기존입력값 반영하기
    setEmail(val);
  }; ///////// changeEmail 함수 //////////

  // ===================================================
  // [ 전체 유효성검사 체크함수 ] ///////////
  const totalValid = () => {
    // 1. 모든 상태변수에 '빈값일때 에러'상태값 업데이트!
    if (!userId) setUserIdError(true);
    if (!pwd) setPwdError(true);
    if (!chkPwd) setChkPwdError(true);
    if (!userName) setUserNameError(true);
    if (!email) setEmailError(true);

    // 2. 통과시 true, 불통과시 false 리턴처리
    // 통과조건 : 빈값아님 + 에러후크변수가 모두 false
    if (
      userId &&
      pwd &&
      chkPwd &&
      userName &&
      email &&
      !userIdError &&
      !pwdError &&
      !chkPwdError &&
      !userNameError &&
      !emailError
    )
      return true;
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
      console.log("모두통과! 저장!");

      // [회원정보를 로컬스토리지에 저장하기]
      // 1. 로컬스 체크함수호출 (없으면 기본데이터생성!)
      initData();

      // 2. 로컬스 변수할당
      let memData = localStorage.getItem("mem-data");
      // 3. 로컬스 객체변환
      memData = JSON.parse(memData);

      // 최대수를 위한 배열값 뽑기 (idx항목)
      let temp = memData.map((v) => v.idx);
      // 다음 번호는 항상 최대수+1 이다!
      console.log("다음번호:", Math.max(...temp) + 1);

      // 4. 새로운 데이터 구성하기
      let newData = {
        idx: Math.max(...temp) + 1,
        uid: userId,
        pwd: pwd,
        unm: userName,
        eml: email,
      };

      // 5. 데이터 추가하기: 배열에 데이터 추가 push()
      memData.push(newData);

      // 6. 로컬스에 반영하기: 문자화 해서 넣어야 함!
      localStorage.setItem("mem-data", JSON.stringify(memData));

      // 7. 회원가입 환영 메세지 + 로그인페이지 이동
      // 버튼 텍스트에 환영 메시지
      document.querySelector(".membx").querySelector('h2').innerText = "Thank you for join Us!";
      document.querySelector(".create").innerText = "Success!";

      // 1호 후 페이지 이동 : 라우터 Navigate =======================

      setTimeout(() => {
        goNav("/login");
        // 주의: 경로앞에 슬래쉬(/) 안쓰면
        // 현재 Member 경로 하위 경로를 불러옴
      }, 1000);
    } ///// if //////

    // [3]. 불퉁과시
    else {
      alert("Change your input!");
    } /// else ////
  }; ///// onSubmit 함수 //////////////

  // [ 최대수 테스트 ]
  //    const arr = [
  //       { idx: "100" },
  //       { idx: "77" },
  //       { idx: "3" },
  //       { idx: "44" },
  //       { idx: "5" },
  //    ];
  //    const newArr = arr.map((v) => v.idx);

  // 문자형숫자도 숫자로 취급
  // const maxValue = Math.max("77","33","55");
  // 배열째 넣으면 1개라 안되니 배열값만 넣기 스프레드연산자(...)

  //    const maxValue = Math.max(...newArr);
  //    const minValue = Math.min(...newArr);

  //    console.log(newArr);
  //    console.log("최대수:", maxValue);
  //    console.log("최소수:", minValue);

  // 코드리턴 구역 //////////////////////////////////////
  return (
    <div className="outbx">
      <section className="membx">
        <h2>Join Us</h2>
        <form action="process.php" method="post">
          <ul>
            <li>
              {/* 1. 아이디 */}
              <label>ID : </label>
              <input
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
                    <small>{idMsg}</small>
                  </div>
                )
              }
              {
                // [에러 아닐경우(false) 메세지 출력]
                // 조건문 && 출력요소
                // 조건추가 : userId가 입력전일때 안보임처리
                // userId가 입력전엔 false로 리턴됨!
                !userIdError &&
                  userId && ( // 에러상태변수가 false이면서 입력된상태일때
                    <div className="msg">
                      <small
                        style={{
                          color: "green",
                          fontSize: "11px",
                        }}
                      >
                        {
                          msgId[2] //훌륭해요 고정메세지
                        }
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
                    <small>{msgEtc.pwd}</small>
                  </div>
                )
              }
            </li>
            <li>
              <label>Confirm Password : </label>
              <input
                type="password"
                maxLength="20"
                placeholder="Please enter your Confirm Password"
                value={chkPwd}
                onChange={changeChkPwd}
              />
              {
                // [에러일경우(true) 메세지 출력]
                // 조건문 && 출력요소

                chkPwdError && ( // 에러상태변수가 true일경우
                  <div className="msg">
                    <small>{msgEtc.confPwd}</small>
                  </div>
                )
              }
            </li>
            <li>
              <label>User Name : </label>
              <input
                type="text"
                maxLength="20"
                placeholder="Please enter your Name"
                value={userName}
                onChange={changeUserName}
              />
              {
                // [에러일경우(true) 메세지 출력]
                // 조건문 && 출력요소

                userNameError && ( // 에러상태변수가 true일경우
                  <div className="msg">
                    <small>{msgEtc.req}</small>
                  </div>
                )
              }
            </li>
            <li>
              <label>Email : </label>
              <input
                type="text"
                maxLength="50"
                placeholder="Please enter your Email"
                value={email}
                onChange={changeEmail}
              />
              {
                // [에러일경우(true) 메세지 출력]
                // 조건문 && 출력요소

                emailError && ( // 에러상태변수가 true일경우
                  <div className="msg">
                    <small>{msgEtc.email}</small>
                  </div>
                )
              }
            </li>
          
            <p className="txt">Are you already a Member?</p>
            <li className="btnBox" style={{ overflow: "hidden" }}>
              <button className="sbtn create" onClick={onSubmit}>
                Create Account
              </button>
              <button className="sbtn loginBtn">
                Log In
                <Link className="loginLink" to="/Login">
                  Log In
                </Link>
              </button>
            </li>
          </ul>
        </form>
      </section>
    </div>
  );
}

export default Member;
