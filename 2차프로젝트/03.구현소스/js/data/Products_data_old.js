const allProducts = [
{
idx: 1 ,
type: "FRAGRANCES" ,
collection: "British Tales" ,
name: "펜할리곤스 루나 EDT 30ML" ,
price: "151,000" ,
img: "products_1.jpg"
} ,
{
idx: 2 ,
type: "FRAGRANCES" ,
collection: "British Tales" ,
name: "펜할리곤스 루나 EDT 100ML" ,
price: "310,000" ,
img: "products_2.jpg"
} ,
{
idx: 3 ,
type: "GIFTING" ,
collection: "British Tales" ,
name: "펜할리곤스 베스트셀러 센트 라이브러리 (2mlx10)" ,
price: " 62,000" ,
img: "products_3.jpg"
} ,
{
idx: 4 ,
type: "BATH &amp; BODY" ,
collection: "etc " ,
name: "펜할리곤스 루나 헤어퍼퓸 30ml" ,
price: " 86,000" ,
img: "products_4.jpg"
} ,
{
idx: 5 ,
type: "BATH &amp; BODY" ,
collection: "etc " ,
name: "펜할리곤스 바디&amp;핸드로션 루나 500ML" ,
price: " 86,000" ,
img: "products_5.jpg"
} ,
{
idx: 6 ,
type: "FRAGRANCES" ,
collection: "British Tales" ,
name: "펜할리곤스 쥬니퍼 슬링 EDT 30ML" ,
price: "151,000" ,
img: "products_6.jpg"
} ,
{
idx: 7 ,
type: "FRAGRANCES" ,
collection: "Potions &amp; Remedies" ,
name: "펜할리곤스 키스 오브 블리스 EDP 100ML" ,
price: "347,000" ,
img: "products_7.jpg"
} ,
{
idx: 8 ,
type: "FRAGRANCES" ,
collection: "Portraits" ,
name: "펜할리곤스 더치스 로즈 EDP 75ML" ,
price: "417,000" ,
img: "products_8.jpg"
} ,
{
idx: 9 ,
type: "BATH &amp; BODY" ,
collection: "etc " ,
name: "펜할리곤스 루나 핸드크림 75ML" ,
price: " 50,000" ,
img: "products_9.jpg"
} ,
{
idx: 10 ,
type: "FRAGRANCES" ,
collection: "Trade Routes" ,
name: "펜할리곤스 엠프레사 EDP 30ML" ,
price: "195,000" ,
img: "products_10.jpg"
} ,
{
idx: 11 ,
type: "GIFTING" ,
collection: "etc " ,
name: "펜할리곤스 루나 바디 워시+로션 듀오세트" ,
price: "172,000" ,
img: "products_11.jpg"
} ,
{
idx: 12 ,
type: "BATH &amp; BODY" ,
collection: "etc " ,
name: "펜할리곤스 바디&amp;핸드워시 루나 500ML" ,
price: " 86,000" ,
img: "products_12.jpg"
} ,
{
idx: 13 ,
type: "BATH &amp; BODY" ,
collection: "etc " ,
name: "펜할리곤스 바디&amp;핸드워시 엠프레사 500ML" ,
price: " 86,000" ,
img: "products_13.jpg"
} ,
{
idx: 14 ,
type: "BATH &amp; BODY" ,
collection: "etc " ,
name: "펜할리곤스 바디&amp;핸드로션 블렌하임 부케 500ML" ,
price: " 86,000" ,
img: "products_14.jpg"
} ,
{
idx: 15 ,
type: "FRAGRANCES" ,
collection: "British Tales" ,
name: "펜할리곤스 솔라리스 EDP 30ML" ,
price: "151,000" ,
img: "products_15.jpg"
} ,
{
idx: 16 ,
type: "FRAGRANCES" ,
collection: "British Tales" ,
name: "펜할리곤스 엘리자베단 로즈 EDP 30ML" ,
price: "151,000" ,
img: "products_16.jpg"
} ,
{
idx: 17 ,
type: "FRAGRANCES" ,
collection: "Portraits" ,
name: "펜할리곤스 더 듀크 EDP 75ML" ,
price: "417,000" ,
img: "products_17.jpg"
} ,
{
idx: 18 ,
type: "FRAGRANCES" ,
collection: "British Tales" ,
name: "펜할리곤스 블렌하임 부케 EDT 100ML" ,
price: "240,000" ,
img: "products_18.jpg"
} ,
{
idx: 19 ,
type: "FRAGRANCES" ,
collection: "British Tales" ,
name: "펜할리곤스 쥬니퍼 슬링 EDT 100ML" ,
price: "310,000" ,
img: "products_19.jpg"
} ,
{
idx: 20 ,
type: "FRAGRANCES" ,
collection: "British Tales" ,
name: "펜할리곤스 블렌하임 부케 EDT 30ML" ,
price: "130,000" ,
img: "products_20.jpg"
} ,
{
idx: 21 ,
type: "BATH &amp; BODY" ,
collection: "etc " ,
name: "펜할리곤스 쿼커스 핸드크림 75ML" ,
price: " 50,000" ,
img: "products_21.jpg"
} ,
{
idx: 22 ,
type: "FRAGRANCES" ,
collection: "British Tales" ,
name: "펜할리곤스 엔드미온 EDC 30ML" ,
price: "130,000" ,
img: "products_22.jpg"
} ,
{
idx: 23 ,
type: "FRAGRANCES" ,
collection: "Trade Routes" ,
name: "펜할리곤스 알울라 EDP 30ML" ,
price: "195,000" ,
img: "products_23.jpg"
} ,
{
idx: 24 ,
type: "FRAGRANCES" ,
collection: "Trade Routes" ,
name: "펜할리곤스 알울라 EDP 100ML" ,
price: "381,000" ,
img: "products_24.jpg"
} ,
{
idx: 25 ,
type: "FRAGRANCES" ,
collection: "British Tales" ,
name: "펜할리곤스 엔드미온 꽁상트레 EDP 30ML" ,
price: "151,000" ,
img: "products_25.jpg"
} ,
{
idx: 26 ,
type: "FRAGRANCES" ,
collection: "Portraits" ,
name: "펜할리곤스 미스터 톰슨 EDP 75ML" ,
price: "417,000" ,
img: "products_26.jpg"
} ,
{
idx: 27 ,
type: "GIFTING" ,
collection: "Potions &amp; Remedies" ,
name: "펜할리곤스 포션 센트 라이브러리 2mlx5" ,
price: " 54,000" ,
img: "products_27.jpg"
} ,
{
idx: 28 ,
type: "FRAGRANCES" ,
collection: "Potions &amp; Remedies" ,
name: "펜할리곤스 브라 브라 브룸 EDP 100ML" ,
price: "347,000" ,
img: "products_28.jpg"
} ,
{
idx: 29 ,
type: "FRAGRANCES" ,
collection: "Potions &amp; Remedies" ,
name: "펜할리곤스 오 디 오데시티 EDP 100ML" ,
price: "347,000" ,
img: "products_29.jpg"
} ,
{
idx: 30 ,
type: "FRAGRANCES" ,
collection: "Potions &amp; Remedies" ,
name: "펜할리곤스 밤 오브 캄 EDP 100ML" ,
price: "347,000" ,
img: "products_30.jpg"
} ,
{
idx: 31 ,
type: "FRAGRANCES" ,
collection: "Potions &amp; Remedies" ,
name: "펜할리곤스 리퀴드 러브 EDP 100ML" ,
price: "347,000" ,
img: "products_31.jpg"
} ,
{
idx: 32 ,
type: "GIFTING" ,
collection: "etc " ,
name: "펜할리곤스 더 페이버릿 바디 워시+로션 듀오세트" ,
price: "172,000" ,
img: "products_32.jpg"
} ,
{
idx: 33 ,
type: "GIFTING" ,
collection: "etc " ,
name: "펜할리곤스 엘리자베단 로즈 바디 워시+로션 듀오세트" ,
price: "172,000" ,
img: "products_33.jpg"
} ,
{
idx: 34 ,
type: "GIFTING" ,
collection: "etc " ,
name: "펜할리곤스 엠프레사 바디 워시+로션 듀오세트" ,
price: "172,000" ,
img: "products_34.jpg"
} ,
{
idx: 35 ,
type: "GIFTING" ,
collection: "etc " ,
name: "펜할리곤스 엔드미온 바디 워시+로션 듀오세트" ,
price: "172,000" ,
img: "products_35.jpg"
} ,
{
idx: 36 ,
type: "GIFTING" ,
collection: "etc " ,
name: "펜할리곤스 쿼커스 바디 워시+로션 듀오세트" ,
price: "172,000" ,
img: "products_36.jpg"
} ,
{
idx: 37 ,
type: "BATH &amp; BODY" ,
collection: "etc " ,
name: "펜할리곤스 바디&amp;핸드워시 블렌하임 부케 500ML" ,
price: " 86,000" ,
img: "products_37.jpg"
} ,
{
idx: 38 ,
type: "BATH &amp; BODY" ,
collection: "etc " ,
name: "펜할리곤스 바디&amp;핸드워시 더 페이버릿 500ML" ,
price: " 86,000" ,
img: "products_38.jpg"
} ,
{
idx: 39 ,
type: "BATH &amp; BODY" ,
collection: "etc " ,
name: "펜할리곤스 바디&amp;핸드워시 엔드미온 500ML" ,
price: " 86,000" ,
img: "products_39.jpg"
} ,
{
idx: 40 ,
type: "BATH &amp; BODY" ,
collection: "etc " ,
name: "펜할리곤스 바디&amp;핸드워시 쿼커스 500ML" ,
price: " 86,000" ,
img: "products_40.jpg"
} ,
{
idx: 41 ,
type: "BATH &amp; BODY" ,
collection: "etc " ,
name: "펜할리곤스 바디&amp;핸드로션 더 페이버릿 500ML" ,
price: " 86,000" ,
img: "products_41.jpg"
} ,
{
idx: 42 ,
type: "BATH &amp; BODY" ,
collection: "etc " ,
name: "펜할리곤스 바디&amp;핸드로션 엘리자베단 로즈 500ML" ,
price: " 86,000" ,
img: "products_42.jpg"
} ,
{
idx: 43 ,
type: "BATH &amp; BODY" ,
collection: "etc " ,
name: "펜할리곤스 바디&amp;핸드워시 엘리자베단 로즈 500ML" ,
price: " 86,000" ,
img: "products_43.jpg"
} ,
{
idx: 44 ,
type: "GIFTING" ,
collection: "etc " ,
name: "펜할리곤스 블렌하임 부케 바디 워시+로션 듀오세트" ,
price: "172,000" ,
img: "products_44.jpg"
} ,
{
idx: 45 ,
type: "BATH &amp; BODY" ,
collection: "etc " ,
name: "펜할리곤스 바디&amp;핸드로션 쿼커스 500ML" ,
price: " 86,000" ,
img: "products_45.jpg"
} ,
{
idx: 46 ,
type: "BATH &amp; BODY" ,
collection: "etc " ,
name: "펜할리곤스 바디&amp;핸드로션 엔드미온 500ML" ,
price: " 86,000" ,
img: "products_46.jpg"
} ,
{
idx: 47 ,
type: "BATH &amp; BODY" ,
collection: "etc " ,
name: "펜할리곤스 바디&amp;핸드로션 엠프레사 500ML" ,
price: " 86,000" ,
img: "products_47.jpg"
} ,
{
idx: 48 ,
type: "FRAGRANCES" ,
collection: "British Tales" ,
name: "펜할리곤스 솔라리스 EDP 100ML" ,
price: "310,000" ,
img: "products_48.jpg"
} ,
{
idx: 49 ,
type: "FRAGRANCES" ,
collection: "British Tales" ,
name: "펜할리곤스 스포츠카 클럽 EDP 100ML" ,
price: "286,000" ,
img: "products_49.jpg"
} ,
{
idx: 50 ,
type: "FRAGRANCES" ,
collection: "British Tales" ,
name: "펜할리곤스 로테어 EDT 100ML" ,
price: "310,000" ,
img: "products_50.jpg"
} ,
{
idx: 51 ,
type: "FRAGRANCES" ,
collection: "Portraits" ,
name: "펜할리곤스 아서 EDP 75ML" ,
price: "417,000" ,
img: "products_51.jpg"
} ,
{
idx: 52 ,
type: "GIFTING" ,
collection: "etc " ,
name: "펜할리곤스 레이디스 collection etc(5ml x 5)" ,
price: " 89,000" ,
img: "products_52.jpg"
} ,
{
idx: 53 ,
type: "GIFTING" ,
collection: "Portraits" ,
name: "펜할리곤스 포트레이트 센트 라이브러리 (10x2ml)" ,
price: " 71,000" ,
img: "products_53.jpg"
} ,
{
idx: 54 ,
type: "home" ,
collection: "etc " ,
name: "펜할리곤스 쿰간 로즈 캔들 200G" ,
price: "116,000" ,
img: "products_54.jpg"
} ,
{
idx: 55 ,
type: "FRAGRANCES" ,
collection: "etc " ,
name: "펜할리곤스 헐트리스 헬렌 EDP 75ML" ,
price: "417,000" ,
img: "products_55.jpg"
} ,
{
idx: 56 ,
type: "FRAGRANCES" ,
collection: "British Tales" ,
name: "펜할리곤스 사토리얼 EDT 100ML" ,
price: "240,000" ,
img: "products_56.jpg"
} ,
{
idx: 57 ,
type: "FRAGRANCES" ,
collection: "British Tales" ,
name: "펜할리곤스 사보이 스팀 EDP 100ML" ,
price: "310,000" ,
img: "products_57.jpg"
} ,
{
idx: 58 ,
type: "FRAGRANCES" ,
collection: "British Tales" ,
name: "펜할리곤스 쿼커스 EDC 100ML" ,
price: "240,000" ,
img: "products_58.jpg"
} ,
{
idx: 59 ,
type: "FRAGRANCES" ,
collection: "Portraits" ,
name: "펜할리곤스 블래이징 미스터 샘 EDP 75ML" ,
price: "417,000" ,
img: "products_59.jpg"
} ,
{
idx: 60 ,
type: "FRAGRANCES" ,
collection: "Trade Routes" ,
name: "펜할리곤스 바빌론 EDP 100ML" ,
price: "381,000" ,
img: "products_60.jpg"
} ,
{
idx: 61 ,
type: "FRAGRANCES" ,
collection: "Trade Routes" ,
name: "펜할리곤스 콘스탄티노플 EDP 100ml" ,
price: "381,000" ,
img: "products_61.jpg"
} ,
{
idx: 62 ,
type: "FRAGRANCES" ,
collection: "British Tales" ,
name: "펜할리곤스 엔드미온 꽁상트레 EDP 100ML" ,
price: "310,000" ,
img: "products_62.jpg"
} ,
{
idx: 63 ,
type: "FRAGRANCES" ,
collection: "etc " ,
name: "펜할리곤스 하맘 부케 EDT 100ml" ,
price: "240,000" ,
img: "products_63.jpg"
} ,
{
idx: 64 ,
type: "FRAGRANCES" ,
collection: "British Tales" ,
name: "펜할리곤스 오퍼스 EDT 100ML" ,
price: "240,000" ,
img: "products_64.jpg"
} ,
{
idx: 65 ,
type: "FRAGRANCES" ,
collection: "Portraits" ,
name: "펜할리곤스 클레데스틴 클라라 EDP 75ML" ,
price: "417,000" ,
img: "products_65.jpg"
} ,
{
idx: 66 ,
type: "FRAGRANCES" ,
collection: "Portraits" ,
name: "펜할리곤스 채인징 콘스탄스 EDP 75ML" ,
price: "417,000" ,
img: "products_66.jpg"
} ,
{
idx: 67 ,
type: "FRAGRANCES" ,
collection: "Portraits" ,
name: "펜할리곤스 비위칭 야스민 EDP 75ML" ,
price: "417,000" ,
img: "products_67.jpg"
} ,
{
idx: 68 ,
type: "FRAGRANCES" ,
collection: "etc " ,
name: "펜할리곤스 언컴프로마이징 소한 EDP 75ML" ,
price: "417,000" ,
img: "products_68.jpg"
} ,
{
idx: 69 ,
type: "home" ,
collection: "etc " ,
name: "펜할리곤스 마두로 리프 캔들 200G" ,
price: "116,000" ,
img: "products_69.jpg"
} ,
{
idx: 70 ,
type: "GIFTING" ,
collection: "Portraits" ,
name: "펜할리곤스 포트레이트 맨션 10mlx8" ,
price: "302,000" ,
img: "products_70.jpg"
} ,
{
idx: 71 ,
type: "FRAGRANCES" ,
collection: "British Tales" ,
name: "펜할리곤스 더 페이버릿 EDP 100ML" ,
price: "310,000" ,
img: "products_71.jpg"
} ,
{
idx: 72 ,
type: "FRAGRANCES" ,
collection: "Trade Routes" ,
name: "펜할리곤스 엠프레사 EDP 100ML" ,
price: "381,000" ,
img: "products_72.jpg"
} ,
{
idx: 73 ,
type: "FRAGRANCES" ,
collection: "Trade Routes" ,
name: "펜할리곤스 할페티 EDP 100ML" ,
price: "381,000" ,
img: "products_73.jpg"
} ,
{
idx: 74 ,
type: "FRAGRANCES" ,
collection: "Portraits" ,
name: "펜할리곤스 윌리엄 펜할리곤 EDP 75ML" ,
price: "417,000" ,
img: "products_74.jpg"
} ,
{
idx: 75 ,
type: "FRAGRANCES" ,
collection: "Portraits" ,
name: "펜할리곤스 레이디 블랑쉬 EDP 75ML" ,
price: "417,000" ,
img: "products_75.jpg"
} ,
{
idx: 76 ,
type: "FRAGRANCES" ,
collection: "Portraits" ,
name: "펜할리곤스 테러블 테디 EDP 75ML" ,
price: "417,000" ,
img: "products_76.jpg"
} ,
{
idx: 77 ,
type: "FRAGRANCES" ,
collection: "British Tales" ,
name: "펜할리곤스 릴리 오브 더 밸리 EDT 100ML" ,
price: "240,000" ,
img: "products_77.jpg"
} ,
{
idx: 78 ,
type: "FRAGRANCES" ,
collection: "British Tales" ,
name: "펜할리곤스 오렌지 블라썸 EDT 100ML" ,
price: "240,000" ,
img: "products_78.jpg"
} ,
{
idx: 79 ,
type: "FRAGRANCES" ,
collection: "British Tales" ,
name: "펜할리곤스 쿼커스 EDC 30ML" ,
price: "130,000" ,
img: "products_79.jpg"
} ,
{
idx: 80 ,
type: "FRAGRANCES" ,
collection: "Portraits" ,
name: "펜할리곤스 로드 조지 EDP 75ML" ,
price: "417,000" ,
img: "products_80.jpg"
} ,
{
idx: 81 ,
type: "FRAGRANCES" ,
collection: "British Tales" ,
name: "펜할리곤스 엘리자베단 로즈 EDP 100ML" ,
price: "310,000" ,
img: "products_81.jpg"
} ,
{
idx: 82 ,
type: "FRAGRANCES" ,
collection: "British Tales" ,
name: "펜할리곤스 엔드미온 EDC 100ML" ,
price: "240,000" ,
img: "products_82.jpg"
} ,
{
idx: 83 ,
type: "FRAGRANCES" ,
collection: "British Tales" ,
name: "펜할리곤스 아르테미지아 EDP 100ML" ,
price: "310,000" ,
img: "products_83.jpg"
} ,
{
idx: 84 ,
type: "FRAGRANCES" ,
collection: "British Tales" ,
name: "펜할리곤스 오렌지 블라썸 EDT 30ML" ,
price: "130,000" ,
img: "products_84.jpg"
} ,
{
idx: 85 ,
type: "GIFTING" ,
collection: "etc " ,
name: "펜할리곤스 젠틀맨스 collection etc(5ml x 5)" ,
price: "89,000" ,
img: "products_85.jpg"
} ,
{
idx: 86 ,
type: "BATH &amp; BODY" ,
collection: "etc " ,
name: "펜할리곤스 더 페이버릿 핸드크림 75ML" ,
price: "50,000" ,
img: "products_86.jpg"
} ,
{
idx: 87 ,
type: "FRAGRANCES" ,
collection: "British Tales" ,
name: "펜할리곤스 아르테미지아 EDP 30ML" ,
price: "151,000" ,
img: "products_87.jpg"
} ,
{
idx: 88 ,
type: "FRAGRANCES" ,
collection: "British Tales" ,
name: "펜할리곤스 더 페이버릿 EDP 30ML" ,
price: "151,000" ,
img: "products_88.jpg"
}
]

export {allProducts};