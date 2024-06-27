// snsMenu 메뉴데이터를 위해 폰트어썸 불러오기
import {
  faMagnifyingGlass,
  // faUserSecret,
  faCartShopping,
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
      { txt: "HOME", link: "/Home" },
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
];
// 메인배너 이미지 데이터
const bannerImg = [
  {
    filename: "banner_1.jpg",
    alt: "banner1",
  },
  {
    filename: "banner_2.jpg",
    alt: "banner2",
  },
  {
    filename: "banner_3.jpg",
    alt: "banner3",
  },
  {
    filename: "banner_4.jpg",
    alt: "banner4",
  },
  {
    filename: "banner_5.jpg",
    alt: "banner5",
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
  {txt: "인스타그램", link: "###", icon: faInstagram},
  {txt: "페이스북", link: "###", icon: faFacebook},
  {txt: "트위터", link: "###", icon: faTwitter},
  {txt: "유튜브", link: "###", icon: faYoutube},
];

const sideMenu = [
{txt: "검색", link: "/Search", icon: faMagnifyingGlass},
{txt: "장바구니", link: "/Cart", icon: faCartShopping},
{txt: "로그인", link: "/Login", icon: faUser},
// {txt: "회원가입", link: "/Join", icon: faUserSecret},
];



// 타이틀 컴포넌트 텍스트 데이터
const titleTxt = {
  brand: ["The value of trust", "Enjoy NewProduct", "Check our this item"],
  blog: ["Our new stories", "Penhaligon's Magazine", "Learn more"],
  Penhaligons: ["History and values", "About Penhaligons", "Check our this video"],
  story: ["Our stories", "Take a closer look", "Check our this video"],
  collection: ["Our collection", "Take a closer look", "Check our this video"],
};

export { menu, hamMenu, bannerImg, titleTxt, footerMenu ,snsMenu ,sideMenu};
