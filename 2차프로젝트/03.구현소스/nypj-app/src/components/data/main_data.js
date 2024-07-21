// snsMenu 메뉴데이터를 위해 폰트어썸 불러오기
import {
  faMagnifyingGlass,
  // faUserSecret,
  faCartShopping,
  faUserSecret,
  faRightToBracket,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

//  [ 메인영역 데이터 ]'
const hamMenu = [
  {
    txt: "PENHALIGON'S",
    link: "/Penhaligons",
  },
  {
    txt: "SHOP▶",
    link: "/Shop",
    sub: [
      { txt: "FRAGRANCES", link: "/Shop/Fragrances" },
      { txt: "BATH & BODY", link: "/Shop/BathAndBody" },
      { txt: "HOME", link: "/Shop/Home" },
      { txt: "COLLECTIONS", link: "/Shop/Collections" },
      { txt: "GIFTING", link: "/Shop/Gifting" },
      { txt: "ALL", link: "/Shop/All" },
      { txt: "BACK", link: "/" },
    ],
  },
  {
    txt: "OUR STORY",
    link: "/OurStory",
  },
  {
    txt: "COLLECTIONS",
    link: "/Collections",
  },
  {
    txt: "OPINIONS",
    link: "/board",
  },
];

const collMenu = [
  "British Tales",
  "Potions & Remedies",
  "Trade Routes",
  "Portraits",
];
const menu = [
  {
    txt: "SHOP",
    link: "/Shop",
  },
  {
    txt: "COLLECTIONS",
    link: "/Collections",
  },
  {
    txt: "OUR STORY",
    link: "/OurStory",
  },
  {
    txt: "OPINIONS",
    link: "/board",
  },
];


const footerMenu = {
  SERVICES: [
    { txt: "CONSUMER SERVICES", link: "###" },
    { txt: "DELIVERY & RETURNS", link: "###" },
    { txt: "TRACK MY ORDER", link: "###" },
    { txt: "FAQS", link: "###" },
    { txt: "KLARNA", link: "###" },
    { txt: "E-GIFT CARDS", link: "###" },
    { txt: "OLFACTIVE SOCIETY", link: "###" },
    { txt: "COME RICICLARE", link: "###" },
  ],

  ABOUTUS: [
    { txt: "PENHALIGON'S PHILOSOPHY", link: "###" },
    { txt: "PENHALIGON'S PERKS", link: "###" },
    { txt: "HERITAGE", link: "###" },
    { txt: "STORES", link: "###" },
    { txt: "CAREERS", link: "###" },
    { txt: "GOVERNANCE", link: "###" },
  ],
};

const snsMenu = [
  { txt: "인스타그램", link: "###", icon: faInstagram },
  { txt: "페이스북", link: "###", icon: faFacebook },
  { txt: "트위터", link: "###", icon: faTwitter },
  { txt: "유튜브", link: "###", icon: faYoutube },
];

const loginsideMenu = [
  { txt: "검색", link: "/Search", icon: faMagnifyingGlass },
  { txt: "마이페이지", link: "/MyPage", icon: "" },

];
const sideMenu = [
  { txt: "검색", link: "/Search", icon: faMagnifyingGlass },
  { txt: "회원가입", link: "/Member", icon: faUserPlus },
  { txt: "로그인", link: "/Login", icon: faUser },
];

// 타이틀 컴포넌트 텍스트 데이터
const titleTxt = {
  list: ["All Products", "View All Items in This Category", "Find everything you need in one place"],
  best: ["Must-Have Items", "Customer Favorite", "See why these items are fan favorites."],
  brand: ["The value of trust", "Enjoy NewProduct", "Check our this item"],
  blog: ["Our new stories", "Penhaligon's Magazine", "Learn more"],
  Penhaligons: [
    "History and values",
    "About Penhaligons",
    "Check our this video",
  ],
  story: ["Our stories", "Take a closer look", "Check our this video"],
  collection: ["Our collection", "Take a closer look", "Check our this video"],
};

// shop 페이지 카테고리 서브메뉴 배열
const ctgList = [ "FRAGRANCES", "BATH & BODY", "HOME", "COLLECTIONS", "British Tales", "Potions & Remedies", "Trade Routes", "Portraits", "GIFTING", "ALL" ];

// 카테고리 데이터 생성함수
const ctgTxt = (ctg)=>{
  // 소문자 카테고리명
  let lowerCtg = ctg.toLowerCase();

  if(ctg === "ALL") lowerCtg = "products";
  if(ctg === "HOME") lowerCtg = `${lowerCtg} items`;
  if(ctg === "BATH & BODY") lowerCtg = `${lowerCtg} items`;
  
  
  // ctg를 받아서 텍스트 데이터를 생성하는 함수
  return (
    [ctg,[ctg,`${ctg} - See all ${lowerCtg}`,"Choosing your signature scent is a big deal. Luckily, Penhaligons has been smelling the great and good of society for over 150 years, so we're well versed in the matter."]]
  )
};
// 카테고리 데이터 리스트를 생성하고  객체로 변환
let ctgTxtData = Object.fromEntries(// 키와 값으로 이루어진 배열을 객체로 변환하는 메서드
  ctgList.map(v=>{
    // console.log(ctgTxt(v));
    return ctgTxt(v)})
);

// SHOP 데이터항목 추가
ctgTxtData["Shop"] = ["SHOP","SHOP - See Best products","Choosing your signature scent is a big deal. Luckily, Penhaligons has been smelling the great and good of society for over 150 years, so we're well versed in the matter."];
export {
  menu,
  hamMenu,
  titleTxt,
  footerMenu,
  snsMenu,
  loginsideMenu,
  sideMenu,
  collMenu,
  ctgList,
  ctgTxtData,
  
};
