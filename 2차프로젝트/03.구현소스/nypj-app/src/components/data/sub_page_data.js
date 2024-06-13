//  [ 서브 페이지 데이터 ]
// 1. COLLECTION
// 2. STORY

const collection = {
   idx: 1,
   stit: "COLLECTION",
   tit: "Penhaligon's Collection",
   text: `펜할리곤스의 컬렉션은 크게 '브리티시 테일즈' ,'포트레이트' , '트레이드 루트' , '포션 앤 레미디' 네 가지로 나눕니다. <br/>펜할리곤스만의 아이덴티티로 자리매김 한 영국 왕실이 인정한 150년 노하우의 품격과 영국적 감성을 각각의 컬렉션 이미지를 클릭하여 만나보세요!`,
   btn: "View all products in a collection",
   img: [
      "collection_1.jpg",
      "collection_2.jpg",
      "collection_3.jpg",
      "collection_4.jpg",
   ],
      // 이 비쥬얼데이터가 서브페이지이므로 상품으로 연결
   link: "/Shop/Collections",
};
const story = {
   idx: 1,
   stit: "STORY",
   tit: "The story of Penhaligons",
   text: `우리는 늘 주변의 다양한 장소와 순간에서 아이디어를 얻습니다. 
        펜할리곤스는 우리가 살고 있는 ‘현재’를 반영하는 브랜드입니다.<br/> 지금도 창의적 유산과 영국적 위트, 그리고 브랜드 철학은 그대로 이어지고 있습니다.<br/>펜할리곤스의 영감의 원천과 새로운 소식들을 각각의 스토리 이미지를 클릭하여 확인해보세요!`,
   btn: "Learn more about Penhaligons",
   img: ["story_1.jpg", "story_2.jpg", "story_3.jpg", "story_4.jpg"],
   // 이 비쥬얼데이터가 서브페이지이므로  브랜드페이지로 연결
   link: "/Penhaligons",
};

// content inner 컴포넌트용 추가데이터 /////////////////////////////
const brand = {
   idx: 1,
   stit: "The value of trust",
   tit: "About Penhaligons",
   text: `펜할리곤스는 1870년에 설립자인 윌리엄 펜할리곤에 의해 시작되었습니다. <br/>  현재까지도 펜할리곤스 퍼퓸 하우스는 오랜 전통을 이어가고 있습니다.
   `,
   btn: "Learn more about Penhaligons",
   link: "/Penhaligons",
};

// story랑 같은페이지임 (메인페이지 비쥬얼로 나눔)
const Magazine = {
   idx: 1,
   stit: "Our new stories",
   tit: "Penhaligon's Magazine",
   text: `우리는 늘 주변의 다양한 장소와 순간에서 아이디어를 얻습니다. 
   펜할리곤스는 우리가 살고 있는 ‘현재’를 반영하는 브랜드입니다.<br/> 지금도 창의적 유산과 영국적 위트, 그리고 브랜드 철학은 그대로 이어지고 있습니다.<br/>펜할리곤스의 영감의 원천과 새로운 소식들을 클릭하여 확인해보세요!`,
   btn: "Learn more about Story",
   link: "/OurStory",
};

const Fragrance = {
   idx: 1,
   stit: "Our products",
   tit: "Penhaligon's Fragrance",
   text: `"향수는 후각으로 그 감성을 전달한다." <br/><br/>  많은 사람들에게 사랑받는 펜할리곤스는 왕실에서 인정받은 향수로서의 전통을 지키면서도 누구나 탐낼만한 히스토리와 매력을 갖춘 향수입니다.  <br/>
   영국 왕실이 인정한 150년 노하우의 품격과 영국적 감성을 만나보세요.
   `,
   btn: "View all products",
   link: "/Shop/Fragrances/",
};

export { collection, story, brand, Magazine, Fragrance };
