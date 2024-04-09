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
      alt: "5번원두",
      이름: "상품 이름정보 기재",
      추가정보: "상품 추가정보",
   },
   {
      idx: 2,
      img: "pack_cf8_big.png",
      alt: "5번원두",
      이름: "상품 이름정보 기재",
      추가정보: "상품 추가정보",
   },
   {
      idx: 3,
      img: "pack_cf9_big.png",
      alt: "5번원두",
      이름: "상품 이름정보 기재",
      추가정보: "상품 추가정보",
   },
   {
      idx: 4,
      img: "pack_cf13_big.png",
      alt: "5번원두",
      이름: "상품 이름정보 기재",
      추가정보: "상품 추가정보",
   },
];

const drinkData = [
   {
      idx: 1,
      img: "drink03_big.jpg",
      alt: "3번음료",
      이름: "상품 이름정보 기재",
      추가정보: "상품 추가정보",
   },
   {
      idx: 2,
      img: "drink04_big.jpg",
      alt: "4번음료",
      이름: "상품 이름정보 기재",
      추가정보: "상품 추가정보",
   },
   {
      idx: 3,
      img: "drink10_big.jpg",
      alt: "10번음료",
      이름: "상품 이름정보 기재",
      추가정보: "상품 추가정보",
   },
   {
      idx: 4,
      img: "drink16_big.jpg",
      alt: "16번음료",
      이름: "상품 이름정보 기재",
      추가정보: "상품 추가정보",
   },
];

const foodData = [
   {
      idx: 1,
      img: "food_bread03_big.jpg",
      alt: "3번음식",
      이름: "상품 이름정보 기재",
      추가정보: "상품 추가정보",
   },
   {
      idx: 2,
      img: "food_bread09_big.jpg",
      alt: "9번음식",
      이름: "상품 이름정보 기재",
      추가정보: "상품 추가정보",
   },
   {
      idx: 3,
      img: "food_bread10_big.jpg",
      alt: "10번음식",
      이름: "상품 이름정보 기재",
      추가정보: "상품 추가정보",
   },
   {
      idx: 4,
      img: "food_bread12_big.jpg",
      alt: "12번음식",
      이름: "상품 이름정보 기재",
      추가정보: "상품 추가정보",
   },
];

// 3. 리저브 내용 데이터 
/************************************* 
    [ 데이터항목 : 리저브영역 텍스트 구성 ]
*************************************/

const reserveContData = [
  {
    type: 'text',
    className: 'b1',
    content: [
      'WHERE MY TASTE STAYS 나의 취향이 머무는 곳, STARBUCKS RESERVE™ 입니다.',
      '취향을 채우는 스페셜티 커피와 깊은 풍미를 더하는 추출 방식, 커피향으로 가득 채워진 여유로운 공간까지.<br />모두 스타벅스 리저브에서 경험해 보세요.'
    ]
  },
  {
    type: 'image',
    className: 'img1',
    images: [
      './images/reserve_guides1.png',
      './images/reserve_guides2.png'
    ]
  },
  {
    type: 'text',
    className: 'b2',
    content: [
      '스타벅스 리저브는 스타벅스가 제공하는 가장 희귀하고 특별한 커피입니다.',
      '다채로운 풍미를 가진 최고 품질의 원두, 다양한 추출 방식, 여기에 커피 전문가의 이야기가 더해져 스타벅스 리저브만의 특별한 커피 경험이 완성됩니다.'
    ]
  },
  {
    type: 'image',
    className: 'img2',
    images: [
      './images/reserve_guides3.png',
      './images/reserve_guides4.png'
    ]
  },
  {
    type: 'text',
    className: 'b3',
    content: [
      '스타벅스 커피팀은 고객에게 최고 품질의 커피를 제공하기 위해 매년 25만 잔 이상의 커피를 테스트합니다.',
      '이 과정에서 커피의 품질과 풍미를 체크하는 것뿐만 아니라 커피가 완성되기까지 농부들이 기울인 노력,<br />더 나아가 커뮤니티의 이야기를 듣고 리저브로 선보일 커피를 신중히 선택합니다.<br /><br />우리의 리저브 커피에는 커피의 풍미만이 아니라 농부들의 이야기, 농장과 커뮤니티, 오리진에 대한 고유한 이야기가 가득 담겨 있습니다.'
    ]
  },
  {
    type: 'image',
    className: 'img3',
    images: [
      './images/reserve_guides5.png',
      './images/reserve_guides6.png'
    ]
  },
  {
    type: 'text',
    className: 'b4',
    content: [
      '가장 뛰어난 커피를 제공하기 위해 세계 곳곳을 탐험하고, 놀랍고 다양한 커피 경험을 제공하기 위해 발전하겠다는 "우리의 약속,"',
      '스타벅스 리저브에서 당신의 취향에 꼭 맞는 커피를 발견해 보세요.'
    ]
  }
];

// 데이터 공개하기 ///
export { footerData, spStoreData, 
  beenData, drinkData, foodData , 
  reserveContData };


//   <div class="newsbox n01">
//   <figure>
//     <a href="#"><img src="./images/news1.jpg" alt="" /></a>
//   </figure>
//   <a href="#">2월 22일, 리저브 MD 출시</a>
// </div>
// <div class="newsbox n02">
//   <figure>
//     <a href="#"><img src="./images/news2.jpg" alt="" /></a>
//   </figure>
//   <a href="#">2월 15일, 스프링 프로모션 MD 출시</a>
// </div>
// <div class="newsbox n03">
//   <figure>
//     <a href="#"><img src="./images/news3.jpg" alt="" /></a>
//   </figure>
//   <a href="#">데스크테리어 컬렉션 MD 출시 <br /></a>
// </div>
// <div class="newsbox n04">
//   <figure>
//     <a href="#"><img src="./images/news4.jpg" alt="" /></a>
//   </figure>
//   <a href="#">3월 1일, 삼일절 기념 MD 출시</a>
// </div>