//  [ 메인영역 데이터 ]'
const hamMenu =[{
  txt:"PENHALIGON'S",
  link:"/Penhaligons",
},
{
  txt:"SHOP▶",
  link:"/Shop",
  sub:[
    {txt:"FRAGRANCES",link:"/Fragrances"},
    {txt:"BATH & BODY",link:"/BathAndBody"},
    {txt:"HOME",link:"/Home"},
    {txt:"COLLECTIONS",link:"/Collections"},
    {txt:"GIFTING",link:"/Gifting"},
    {txt:"ALL",link:"/All"},
  ]
},
{
  txt:"OUR STORY",
  link:"/OurStory",
},
{
  txt:"COLLECTIONS",
  link:"/Collections",
},
]
const menu =[
  {  
    txt:"SHOP",
    link:"/Shop", 
  },
  {  
    txt:"COLLECTIONS",
    link:"/Collections", 
  },
  {  
    txt:"OUR STORY",
    link:"/OurStory", 
  },
]
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
// 타이틀 컴포넌트 텍스트 데이터
const titleTxt = {
  brand: ["The value of trust", "About Penhaligons", "Learn more"],
  blog: ["Our new stories", "Penhaligon's Magazine", "Learn more"],
  else: ["Our new stories", "Keep up with Penhaligons", "Learn more"],
};

export { menu, hamMenu, bannerImg, titleTxt, };
