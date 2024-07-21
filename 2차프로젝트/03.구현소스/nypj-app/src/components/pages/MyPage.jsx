// 펜할리곤스 마이페이지 컴포넌트 MyPage.jsx
import {
  Fragment,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { Con } from "../modules/myCon";
// css불러오기
import "../../css/_my_page.scss";
// 서브컴포넌트
import CartInner from "../../components/modules/cart_inner";
function MyPage() {
  //컨텍스트 API사용
  const myCon = useContext(Con);
  const [selecMenu, setSelecMenu] = useState(null);
  // 로그인된 정보
  let member = JSON.parse(myCon.loginSts);

  useEffect(() => {
    // 메뉴클릭시 메뉴상태변수에 메뉴명할당
    document.querySelectorAll(".menu ul a").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        // console.log(e.target.innerText);
        setSelecMenu(e.target.innerText);
      });
    });
  });

  // 배너변경
  useLayoutEffect(() => {
    myCon.setMenu("login");
  });

  return (
    <div id="mypage">
      <section className="mypage-area inbox">
        <div className="cont-box">
          <div className="col-3">
            <div className="menu-box">
              <div className="menu">
                <h2>MY PAGE</h2>
                <ul>
                  <li>
                    <a href="#">MY ACCOUNT</a>
                    {/* <ol>
                      <li>
                        <a href="#">EDIT ACCOUNT</a>
                      </li>
                      <li>
                        <a href="#">비밀번호변경</a>
                      </li>
                      <li>
                        <a href="#">배송지관리</a>
                      </li>    
                    </ol> */}
                  </li>

                  <li>
                    <a href="#">MY CART</a>
                  </li>
                  <li>
                    <a href="#">WISHLIST</a>
                  </li>
                  {/* <li>
                    <a href="#">ORDER LIST</a>
                  </li>
                  <li>
                    <a href="#">COUPON</a>
                  </li>
                  <li>
                    <a href="#">REWARDS POINTS</a>
                  </li>

                  <li>
                    <a href="#">DELETE ACCOUNT</a>
                 </li> */}
                  <li>
                    <a
                      href="###"
                      onClick={(e) => {
                        e.preventDefault();
                        window.confirm("정말 로그아웃 하시겠습니까?") &&
                          // 로그아웃 처리함수 호출
                          myCon.logoutFn();
                      }}
                    >
                      LOGOUT
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={`col-9 ${selecMenu}`}>
            {/* {selecMenu === "MY ACCOUNT" && ()} */}
            {selecMenu === "MY CART" && (
              <>
                <h2 className="cart-tit">{`Your Cart List (${myCon.localsCart.length})`}</h2>
                <CartInner selecMenu={selecMenu} />
              </>
            )}
            {selecMenu === "WISHLIST" && (
              <>
                <h2 className="cart-tit">{`Your Wish List (${myCon.wishList.length})`}</h2>
                <CartInner selecMenu={selecMenu} />
              </>
            )}
            {selecMenu === "MY ACCOUNT" && (
              <>
                <h2 className="cart-tit">Check your Account</h2>

                <div className="mem-box">
                  <div>
                    <span>회원 계정: </span>
                    <input
                      className="id"
                      readOnly
                      type="text"
                      defaultValue={member.uid}
                    ></input>
                  </div>
                  <div>
                    <span>회원 이름: </span>
                    <input  
                    className="name"
                    type="text" defaultValue={member.unm}></input>
                  </div>
                  <div>
                    <span>회원 이메일: </span>
                    <input 
                    className="email"
                    type="text" defaultValue={member.eml}></input>
                  </div>
                </div>
                <div className="mem-box next">
                <h2 className="cart-tit">Need to change password?</h2>
                  <div>
                    <span>현재 비밀번호: </span>
                    <input
                      className="pw"
                      type="text"
                      placeholder={'현재 비밀번호를 입력해 주세요.'}
                    ></input>
                  </div>
                  <div>
                    <span>새 비밀번호: </span>
                    <input
                      className="cpw"
                      type="text"
                      placeholder={'변경할 비밀번호를 입력해 주세요.'}
                    ></input>
                  </div>
                  <div>
                    <span>새 비밀번호 확인: </span>
                    <input
                      className="cpw-confirm"
                      type="text"
                      placeholder={'변경할 비밀번호를 입력해 주세요.'}
                    ></input>
                  </div>
                </div>

                {/* {
    "idx": 2,
    "uid": "tomtom",
    "pwd": "1111",
    "unm": "Tom",
    "eml": "tom@gmail.com"
} */}
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default MyPage;
