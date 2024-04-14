// 스벅 PJ 데이터 JS - sb_data.js

/*************************************
  [ 데이터 항목 객체 생성시 유의사항 ] 

    1. 모든 데이터는 구분할 수 있는 
    유일키 (기본키)를 생성한다!
    
    2. 항목별 데이터는 객체로 구성한다
    
    3. 반복데이터는 객체를 반복하여 
    배열로 구성한다 
    
    4. 반복데이터가 객체일 경우 배열로
    변환하여 사용한다.

  *************************************/



// 0. gbb 데이터
/********************************************* 
    [ 데이터항목 : gnb메뉴 및 서브 데이터 구성 ]
*********************************************/
const gnbMenuData = [
  {
    mainMenu: 'COFFEE',
    subMenus: [
      ['커피', '블론드 로스트', '미디엄 로스트', '다크 로스트', '리저브 원두'],
      ['커피 이야기', '농장에서 우리의 손으로', '최상의 아라비카 원두', '스타벅스 로스트 스펙트럼', '스타벅스 디카페인'],
      ['에스프레소 음료', '도피오', '에스프레소 마키아또', '아메리카노마키아또', '카푸치노', '라떼', '모카'],
      ['최상의 커피를 즐기는 법', '커피 프레스', '푸어 오버', '아이스 푸어 오버', '커피 메이커']
    ]
  },
  {
    mainMenu: 'MENU',
    subMenus: [
      ['음료', '콜드 브루', '에스프레소', '스타벅스 리프레셔', '브루드 커피', '프라푸치노', '블렌디드', '스타벅스 피지오', '티(티바나)', '스타벅스 주스(병음료)', '기타 제조 음료'],
      ['푸드', '브레드', '케이크', '샌드위치 & 샐러드', '따뜻한 푸드', '과일 & 요거트', '스낵 & 미니 디저트', '아이스크림'],
      ['상품', '머그', '글라스', '플라스틱 텀블러', '스테인리스 텀블러', '보온병', '액세서리', '선물세트', '커피 용품', '패키지 티(티바나)', '시럽'],
      ['카드', '실물카드', 'e-Gift 카드'],
      ['메뉴이야기', '스타벅스 티바나', '스타벅스 콜드 브루']
    ]
  },
  { 
    mainMenu: 'RESERVE', 
    subMenus: [
      ['스타벅스 리저브', 'RESERVE MAGAZINE'],
    ]
   },
  {
    mainMenu: 'STORE',
    subMenus: [
      ['매장 찾기', '퀵 검색', '지역 검색'],
      ['드라이브 스루 매장'],
      ['스타벅스 리저브 매장'],
      ['커뮤니티 스토어 매장']
    ]
  },
  {
    mainMenu: "WHAT'S NEWS",
    subMenus: [
      ['이벤트', '이벤트', '전체스타벅스 카드', '스타벅스 리워드', '온라인'],
      ['뉴스', '뉴스', '상품 출시', '스타벅스와 문화', '스타벅스 사회공헌', '스타벅스 카드출시'],
      ['매장별 이벤트', '일반 매장', '신규 매장'],
      ['공지사항'],
      ['월페이퍼']
    ]
  }
];

// 1. 하단 데이터
/************************************* 
    [ 데이터항목 : 하단메뉴 구성 ]
    클래스명[메뉴,메뉴,메뉴..]
*************************************/

const footerData = [
  ["info1", ["스타벅스소개", "문의하기", "사이트맵"]],
  ["info1", ["로그인", "회원가입", "회원가입"]],
  [
    "info2",
    [
      "COMPANY",
      "CORPORATE SALES",
      "PARTNERSHIP",
      "ONLINE COMMUNITY",
      "RECRUIT",
    ],
  ],
  [
    "info3",
    [
      "개인정보처리방침",
      "영상정보처리기기 운영관리 방침",
      "홈페이지 이용약관",
      "위치정보 이용약관",
      "스타벅스 카드 이용약관",
      "신세계 유니버스 클럽 이용약관",
      "비회원 이용약관",
      "My DT Pass 서비스 이용약관",
      "윤리경영 핫라인",
    ],
  ],
];

// 2. 스페셜매장 데이터
/************************************* 
    [ 데이터항목 : 스페셜매장 내용구성 ]
    클래스명[메뉴,메뉴,메뉴..]
*************************************/
const spStoreData = [
  [
    "item1",
    {
      지점: "이대R점",
      소개: "스타벅스 커피 코리아 1호점",
      태그1: "리저브 &티바나 전용",
      태그2: "#1호점",
    },
  ],
  [
    "item2",
    {
      지점: "경동1960점",
      소개: "60년전폐극장",
      태그1: "#이색테마",
      태그2: "#리모델링",
    },
  ],
  [
    "item3",
    {
      지점: "더북한산 점",
      소개: "북한산 파노라마뷰",
      태그1: "#북한산",
      태그2: "마운틴뷰",
    },
  ],
  [
    "item4",
    {
      지점: "더양평DT점",
      소개: "갓구운빵과 특화음료",
      태그1: "#남한강",
      태그2: "#리버뷰",
    },
  ],
];

// 3. 베스트 메뉴 데이터
/************************************* 
    [ 데이터항목 : 베스트 메뉴 내용구성 ]
*************************************/
const beenData = [
  {
    idx: 1,
    img: "pack_cf5_big.png",
    alt: "1번원두",
    이름: "에티오피아 250g",
    추가정보: "균형잡힌 부드러움 Balance & Mellow",
  },
  {
    idx: 2,
    img: "pack_cf8_big.png",
    alt: "2번원두",
    이름: "카페 베로나 250g",
    추가정보: "강렬하고 강인한 맛 Strong & Powerful",
  },
  {
    idx: 3,
    img: "pack_cf9_big.png",
    alt: "3번원두",
    이름: "수마트라 250g",
    추가정보: "강렬하고 강인한 맛 Strong & Powerful",
  },
  {
    idx: 4,
    img: "pack_cf13_big.png",
    alt: "4번원두",
    이름: "과테말라 우에우에테낭고",
    추가정보: "달콤쌉쌀한 초콜릿과 잘 익은 포도의 풍미",
  },
];

const drinkData = [
  {
    idx: 1,
    img: "drink03_big.jpg",
    alt: "1번음료",
    이름: "돌체콜드브루",
    추가정보: "Dolce Cold Brew",
  },
  {
    idx: 2,
    img: "drink04_big.jpg",
    alt: "2번음료",
    이름: "나이트로 바닐라 크림",
    추가정보: "Nitro Vanilla Cream",
  },
  {
    idx: 3,
    img: "drink10_big.jpg",
    alt: "3번음료",
    이름: "카라멜 마키아또",
    추가정보: "Caramel Macchiato",
  },
  {
    idx: 4,
    img: "drink16_big.jpg",
    alt: "4번음료",
    이름: "핑크 딸기 아사이 리프레셔",
    추가정보: "Pink Drink with Strawberry Acai Refresher",
  },
];

const foodData = [
  {
    idx: 1,
    img: "food_bread03_big.jpg",
    alt: "1번음식",
    이름: "연유 밀크모닝",
    추가정보: "Sweet Milk Bread",
  },
  {
    idx: 2,
    img: "food_bread09_big.jpg",
    alt: "2번음식",
    이름: "리코타 소금빵 샌드위치",
    추가정보: "Ricotta Salted Bread Sandwich",
  },
  {
    idx: 3,
    img: "food_bread10_big.jpg",
    alt: "3번음식",
    이름: "햄 & 딥 치즈 소금빵",
    추가정보: "Ham & Cheese Salted Bread",
  },
  {
    idx: 4,
    img: "food_bread12_big.jpg",
    alt: "4번음식",
    이름: "콥 & 화이트 샐러드 밀 박스",
    추가정보: "Cobb & White Salad Meal Box",
  },
];

// 4. 리저브 내용 데이터
/************************************* 
    [ 데이터항목 : 리저브영역 텍스트 구성 ]
*************************************/

const reserveTopData = [
  { class: "reserve1", img: "reserve_top_logo.png", alt: "리저브글자로고" },
  { class: "reserve2", img: "reserve_main_top.png", alt: "리저브이미지" },
  { class: "reserve3", img: "reserve_star.png", alt: "리저브이미지" },
];

const reserveContData = [
  {
    type: "text",
    className: "b1",
    content: [
      "WHERE MY TASTE STAYS 나의 취향이 머무는 곳, STARBUCKS RESERVE™ 입니다.",
      "취향을 채우는 스페셜티 커피와 깊은 풍미를 더하는 추출 방식, 커피향으로 가득 채워진 여유로운 공간까지.<br />모두 스타벅스 리저브에서 경험해 보세요.",
    ],
  },
  {
    type: "image",
    className: "img1",
    images: ["./images/reserve_guides1.png", "./images/reserve_guides2.png"],
  },
  {
    type: "text",
    className: "b2",
    content: [
      "스타벅스 리저브는 스타벅스가 제공하는 가장 희귀하고 특별한 커피입니다.",
      "다채로운 풍미를 가진 최고 품질의 원두, 다양한 추출 방식, 여기에 커피 전문가의 이야기가 더해져 스타벅스 리저브만의 특별한 커피 경험이 완성됩니다.",
    ],
  },
  {
    type: "image",
    className: "img2",
    images: ["./images/reserve_guides3.png", "./images/reserve_guides4.png"],
  },
  {
    type: "text",
    className: "b3",
    content: [
      "스타벅스 커피팀은 고객에게 최고 품질의 커피를 제공하기 위해 매년 25만 잔 이상의 커피를 테스트합니다.",
      "이 과정에서 커피의 품질과 풍미를 체크하는 것뿐만 아니라 커피가 완성되기까지 농부들이 기울인 노력,<br />더 나아가 커뮤니티의 이야기를 듣고 리저브로 선보일 커피를 신중히 선택합니다.<br /><br />우리의 리저브 커피에는 커피의 풍미만이 아니라 농부들의 이야기, 농장과 커뮤니티, 오리진에 대한 고유한 이야기가 가득 담겨 있습니다.",
    ],
  },
  {
    type: "image",
    className: "img3",
    images: ["./images/reserve_guides5.png", "./images/reserve_guides6.png"],
  },
  {
    type: "text",
    className: "b4",
    content: [
      '가장 뛰어난 커피를 제공하기 위해 세계 곳곳을 탐험하고, 놀랍고 다양한 커피 경험을 제공하기 위해 발전하겠다는 "우리의 약속,"',
      "스타벅스 리저브에서 당신의 취향에 꼭 맞는 커피를 발견해 보세요.",
    ],
  },
];

// 5. 뉴스영역 데이터
/********************************************* 
    [ 데이터항목 : 뉴스영역 이미지+텍스트 구성 ]
*********************************************/
const newsData = [
  {
    class: "n01",
    img: "news1.jpg",
    alt: "news1",
    title: "2월 22일, 리저브 MD 출시",
  },
  {
    class: "n02",
    img: "news2.jpg",
    alt: "news2",
    title: "2월 15일, 스프링 프로모션 MD 출시",
  },
  {
    class: "n03",
    img: "news3.jpg",
    alt: "news3",
    title: "데스크테리어 컬렉션 MD 출시",
  },
  {
    class: "n04",
    img: "news4.jpg",
    alt: "news4",
    title: "2월 22일, 리저브 MD 출시",
  },
];

// 6. snsbox 데이터
/********************************************* 
    [ 데이터항목 : sns 박스 소셜 아이콘 데이터  ]
*********************************************/
const iconData = [
{페이스북 : 'fa-brands fa-square-facebook'},
{트위터X : 'fa-brands fa-square-x-twitter'},
{인스타그램 : 'fa-brands fa-square-instagram'},
{유튜브 : 'fa-brands fa-square-youtube'},
]


    
// 데이터 공개하기 ///
export {
  gnbMenuData,
  footerData,
  spStoreData,
  beenData,
  drinkData,
  foodData,
  reserveContData,
  reserveTopData,
  newsData,
  iconData,
};
