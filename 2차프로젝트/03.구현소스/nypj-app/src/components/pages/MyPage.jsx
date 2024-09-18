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
import { Link } from "react-router-dom";
import SwiperItemSlide from "../plugin/SwiperItemSlide";
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
                <h2 className="cart-tit ">{`Your Cart List (${myCon.localsCart.length})`}</h2>
                {myCon.localsCart.length > 0 ? (
                  <CartInner selecMenu={selecMenu} />
                ) : (
                  <>
                  <span className="mypage-tit"> 장바구니에 상품이 존재하지 않습니다.</span>
                  <Link className="mypage-link" to ="/shop">더 많은상품 둘러보기 &gt;</Link>
                  <SwiperItemSlide idname={"bestitem-area"} />
                  </>
                )}
              </>
            )}
            {selecMenu === "WISHLIST" && (
              <>
                <h2 className="cart-tit">{`Your Wish List (${myCon.wishList.length})`}</h2>
                {myCon.wishList.length > 0 ? (
                  <CartInner selecMenu={selecMenu} />
                ) : (
                  <>
                  <span className="mypage-tit"> 위시리스트에 상품이 존재하지 않습니다.</span>
                  <Link className="mypage-link" to ="/shop">더 많은상품 둘러보기 &gt;</Link>
                  <SwiperItemSlide idname={"bestitem-area"} />
                  </>
                )}
              </>
            )}
            {selecMenu === "MY ACCOUNT" && (
              <>
                <h2 className="cart-tit top">Check your Account</h2>

                <div className="mem-box">
                  <div>
                    <label htmlFor="id">회원 계정:</label>
                    <input
                      id="id"
                      className="id"
                      readOnly
                      type="text"
                      defaultValue={member.uid}
                    ></input>
                  </div>
                  <div>
                    <label htmlFor="name">회원 이름:</label>
                    <input
                      id="name"
                      className="name"
                      type="text"
                      defaultValue={member.unm}
                    ></input>
                  </div>
                  <div>
                    <label htmlFor="email">회원 이메일:</label>
                    <input
                      id="email"
                      className="email"
                      type="text"
                      defaultValue={member.eml}
                    ></input>
                  </div>
                  <div>
                    <label htmlFor="address">회원 주소:</label>
                    <input
                      id="address"
                      className="address"
                      type="text"
                      defaultValue={member.addr}
                    ></input>
                  </div>
                </div>
                <div className="mem-box next">
                  <h2 className="cart-tit">Need to change password?</h2>
                  <div>
                    <label htmlFor="pw">현재 비밀번호: </label>
                    <input
                      id="pw"
                      className="pw"
                      type="text"
                      placeholder={"현재 비밀번호를 입력해 주세요."}
                    ></input>
                  </div>
                  <div>
                    <label htmlFor="cpw">새 비밀번호: </label>
                    <input
                      id="cpw"
                      className="cpw"
                      type="text"
                      placeholder={"변경할 비밀번호를 입력해 주세요."}
                    ></input>
                  </div>
                  <div>
                    <label htmlFor="cpw-confirm">새 비밀번호 확인: </label>
                    <input
                      id="cpw-confirm"
                      className="cpw-confirm"
                      type="text"
                      placeholder={"변경할 비밀번호를 입력해 주세요."}
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
