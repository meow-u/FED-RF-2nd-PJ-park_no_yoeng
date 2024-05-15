const products = [
  {
    idx: 1,
    name: '펜할리곤스 루나 EDT 30ML',
    price: '135,900원',
    imageUrl: 'https://shop-phinf.pstatic.net/20230811_119/1691729126268pBMXA_JPEG/18559357829605936_869254530.jpg'
  },
  {
    idx: 2,
    name: '펜할리곤스 베스트셀러 센트 라이브러리 (2mlx10)',
    price: '58,900원',
    imageUrl: 'https://shop-phinf.pstatic.net/20240404_114/17122174511321kpu6_JPEG/113353349821379749_579451555.jpg'
  },
  {
    idx: 3,
    name: '펜할리곤스 루나 EDT 100ML',
    price: '279,000원',
    imageUrl: 'https://shop-phinf.pstatic.net/20240311_8/1710123530545qhuR8_JPEG/37426214430933888_1410148562.jpg'
  },
  {
    idx: 4,
    name: '펜할리곤스 레이디스 컬렉션 (5ml x 5)',
    price: '84,550원',
    imageUrl: 'https://shop-phinf.pstatic.net/20240404_178/1712217188017GE6zc_JPEG/113353086708925442_1628916022.jpg'
  },
  {
    idx: 5,
    name: '펜할리곤스 루나 헤어퍼퓸 30ml',
    price: '81,700원',
    imageUrl: 'https://shop-phinf.pstatic.net/20240423_281/1713858696232Eaoe9_JPEG/114994538935402836_1769031782.jpg'
  },
  {
    idx: 6,
    name: '펜할리곤스 바디&핸드로션 루나 500ML',
    price: '81,700원',
    imageUrl: 'https://shop-phinf.pstatic.net/20230726_80/1690338656915eW0Jo_JPEG/1191245036309688_1260855045.jpg'
  },
  {
    idx: 7,
    name: '펜할리곤스 더치스 로즈 EDP 75ML',
    price: '375,300원',
    imageUrl: 'https://shop-phinf.pstatic.net/20230307_55/1678174202248N6GrK_JPEG/79309985947237144_1047448564.jpg'
  },
  {
    idx: 8,
    name: '펜할리곤스 포트레이트 센트 라이브러리 (10x2ml)',
    price: '67,450원',
    imageUrl: 'https://shop-phinf.pstatic.net/20230403_122/1680501093694tvOS3_JPEG/7803777550128527_903606327.jpg'
  },
  {
    idx: 9,
    name: '펜할리곤스 루나 핸드크림 75ML',
    price: '45,000원',
    imageUrl: 'https://shop-phinf.pstatic.net/20231122_210/1700622304881Bk48f_JPEG/14604734482711598_501308732.jpg'
  },
  {
    idx: 10,
    name: '펜할리곤스 쥬니퍼 슬링 EDT 30ML',
    price: '135,900원',
    imageUrl: 'https://shop-phinf.pstatic.net/20240423_155/1713855312385f8Cju_JPEG/114991155091143664_931517362.jpg'
  },
  {
    idx: 11,
    name: '펜할리곤스 아르테미지아 EDP 30ML',
    price: '135,900원',
    imageUrl: 'https://shop-phinf.pstatic.net/20240423_271/1713859279693ppHyu_JPEG/114995178401990398_417801411.jpg'
  },
  {
    idx: 12,
    name: '펜할리곤스 포션 센트 라이브러리 2mlx5',
    price: '51,300원',
    imageUrl: 'https://shop-phinf.pstatic.net/20230820_64/16925181150153hrh6_JPEG/6370980893538700_1798537017.jpg'
  },
  {
    idx: 13,
    name: '펜할리곤스 젠틀맨스 컬렉션 (5ml x 5)',
    price: '84,550원',
    imageUrl: 'https://shop-phinf.pstatic.net/20240404_277/1712217307569WfHUS_JPEG/113353206261861672_212627070.jpg'
  },
  {
    idx: 14,
    name: '펜할리곤스 블렌하임 부케 EDT 30ML',
    price: '117,000원',
    imageUrl: 'https://shop-phinf.pstatic.net/20240423_248/1713858982812tLrRc_JPEG/114994825516560650_1755836169.jpg'
  },
  {
    idx: 15,
    name: '펜할리곤스 오렌지 블라썸 EDT 30ML',
    price: '117,000원',
    imageUrl: 'https://shop-phinf.pstatic.net/20240423_225/1713854855644KjF8R_JPEG/114990698347751026_1085107181.jpg'
  },
  {
    idx: 16,
    name: '펜할리곤스 엔드미온 EDC 30ML',
    price: '117,000원',
    imageUrl: 'https://shop-phinf.pstatic.net/20240423_79/17138549970822o36i_JPEG/114990839797066220_1346844627.jpg'
  },
  {
    idx: 17,
    name: '펜할리곤스 엘리자베단 로즈 EDP 30ML',
    price: '135,900원',
    imageUrl: 'https://shop-phinf.pstatic.net/20240423_104/1713855567889dKrpY_JPEG/114991410601773473_1382845589.jpg'
  },
  {
    idx: 18,
    name: '펜할리곤스 바디&핸드로션 블렌하임 부케 500ML',
    price: '81,700원',
    imageUrl: 'https://shop-phinf.pstatic.net/20230726_81/1690339904018uiMbW_JPEG/17530872361608211_1409214843.jpg'
  },
  {
    idx: 19,
    name: '펜할리곤스 루나 바디 워시+로션 듀오세트',
    price: '154,800원',
    imageUrl: 'https://shop-phinf.pstatic.net/20230731_107/16907706495097Nhs6_JPEG/4484781390997478_1248978724.jpg'
  },{
    idx: 20,
    name: '펜할리곤스 바디&핸드워시 루나 500ML',
    price: '81,700원',
    imageUrl: 'https://shop-phinf.pstatic.net/20230726_246/1690348633276WrEUI_JPEG/19760646905141443_740272750.jpg'
  },
  {
    idx: 21,
    name: '펜할리곤스 쥬니퍼 슬링 EDT 100ML',
    price: '279,000원',
    imageUrl: 'https://shop-phinf.pstatic.net/20240423_248/1713858551929onjxH_JPEG/114994394637224253_930605189.jpg'
  },
  {
    idx: 22,
    name: '펜할리곤스 블렌하임 부케 EDT 100ML',
    price: '216,000원',
    imageUrl: 'https://shop-phinf.pstatic.net/20240423_209/1713854712238p2q72_JPEG/114990554946187205_1440180165.jpg'
  },
  {
    idx: 23,
    name: '펜할리곤스 더 페이버릿 EDP 30ML',
    price: '135,900원',
    imageUrl: 'https://shop-phinf.pstatic.net/20240423_236/1713855479344gy8kM_JPEG/114991322052122119_684332590.jpg'
  },
  {
    idx: 24,
    name: '펜할리곤스 바디&핸드워시 블렌하임 부케 500ML',
    price: '81,700원',
    imageUrl: 'https://shop-phinf.pstatic.net/20230726_188/1690349169150J3J0f_JPEG/19761182771046170_268884339.jpg'
  },
  {
    idx: 25,
    name: '펜할리곤스 솔라리스 EDP 30ML',
    price: '135,900원',
    imageUrl: 'https://shop-phinf.pstatic.net/20230517_228/1684312383145mGQmb_JPEG/1983867580108660_1515393355.jpg'
  },
  {
    idx: 26,
    name: '펜할리곤스 바디&핸드로션 엠프레사 500ML', 
    price: '81,700원',
    imageUrl: 'https://shop-phinf.pstatic.net/20230726_124/16903336854522CrFo_JPEG/2854502224322612_1991014220.jpg'
  },
  {
    idx: 27,
    name: '펜할리곤스 아르테미지아 EDP 100ML',
    price: '279,000원',
    imageUrl: 'https://shop-phinf.pstatic.net/20240423_113/1713858937806gGEf3_JPEG/114994780508821942_6647679.jpg'
  },
  {
    idx: 28,
    name: '펜할리곤스 브라 브라 브룸 EDP 100ML',
    price: '312,300원',
    imageUrl: 'https://shop-phinf.pstatic.net/20230810_269/1691644201331NqpDE_JPEG/14486310124098725_661088371.jpg'
  },
  {
    idx: 29,
    name: '펜할리곤스 할페티 EDP 100ML',
    price: '342,900원',
    imageUrl: 'https://shop-phinf.pstatic.net/20240423_197/17138575775891HJhr_JPEG/114993420291812876_1286687904.jpg'
  },
  {
    idx: 30,
    name: '펜할리곤스 엔드미온 꽁상트레 EDP 100ML',
    price: '279,000원',
    imageUrl: 'https://shop-phinf.pstatic.net/20230307_291/1678172004738cDtvO_JPEG/79307903426433225_896931478.jpg'
  },
  {
    idx: 31,
    name: '펜할리곤스 키스 오브 블리스 EDP 100ML',
    price: '312,300원',
    imageUrl: 'https://shop-phinf.pstatic.net/20231026_161/16982786485366rU6x_JPEG/45243903320643229_2128799679.jpg'
  },
  {
    idx: 32,
    name: '펜할리곤스 엔드미온 EDC 100ML',
    price: '216,000원',
    imageUrl: 'https://shop-phinf.pstatic.net/20240423_38/1713858498600c7iz8_JPEG/114994341302381530_350450479.jpg'
  },
  {
    idx: 33,
    name: '펜할리곤스 더 페이버릿 핸드크림 75ML',
    price: '45,000원',
    imageUrl: 'https://shop-phinf.pstatic.net/20230307_84/1678178818094fP3qb_JPEG/79314601810463579_297918630.jpg'
  },
  {
    idx: 34,
    name: '펜할리곤스 오렌지 블라썸 EDT 100ML',
    price: '216,000원',
    imageUrl: 'https://shop-phinf.pstatic.net/20240423_147/1713858057137xmA95_JPEG/114993899845543384_332930517.jpg'
  },
  {
    idx: 35,
    name: '펜할리곤스 쿼커스 EDC 30ML',
    price: '117,000원',
    imageUrl: 'https://shop-phinf.pstatic.net/20240423_276/1713858114541NOfLw_JPEG/114993957253872026_861591361.jpg'
  },
  {
    idx: 36,
    name: '펜할리곤스 로드 조지 EDP 75ML',
    price: '375,300원',
    imageUrl: 'https://shop-phinf.pstatic.net/20230307_294/1678173710551y7SVk_JPEG/79309599243964529_1253830371.jpg'
  },
  {
    idx: 37,
    name: '펜할리곤스 바디&핸드워시 쿼커스 500ML',
    price: '81,700원',
    imageUrl: 'https://shop-phinf.pstatic.net/20230726_183/16903460473177BUTQ_JPEG/17537015641235945_1847936123.jpg'
  },
  {
    idx: 38,
    name: '펜할리곤스 사보이 스팀 EDP 100ML',
    price: '279,000원',
    imageUrl: 'https://shop-phinf.pstatic.net/20240423_259/1713856099568olVcR_JPEG/114991988267210207_1367337609.jpg'
  },
{
    idx: 39,
    name: '펜할리곤스 쿼커스 EDC 100ML',
    price: '216,000원',
    imageUrl: 'https://shop-phinf.pstatic.net/20240423_16/17138543640376NUCg_JPEG/114990206747143438_186265635.jpg'
  },
  {
    idx: 40,
    name: '펜할리곤스 쿼커스 핸드크림 75ML',
    price: '45,000원',
    imageUrl: 'https://shop-phinf.pstatic.net/20230307_96/16781788051603cTwX_JPEG/79314584886536827_1764556314.jpg'
  },
  {
    idx: 41,
    name: '펜할리곤스 엔드미온 꽁상트레 EDP 30ML',
    price: '135,900원',
    imageUrl: 'https://shop-phinf.pstatic.net/20240116_139/17053936326869r5jY_JPEG/43474489806989715_1003987617.jpg'
  },
  {
    idx: 42,
    name: '펜할리곤스 바디&핸드워시 엔드미온 500ML',
    price: '81,700원',
    imageUrl: 'https://shop-phinf.pstatic.net/20230726_50/1690346685153rFszG_JPEG/19758698774423742_998028609.jpg'
  },
  {
    idx: 43,
    name: '펜할리곤스 솔라리스 EDP 100ML',
    price: '279,000원',
    imageUrl: 'https://shop-phinf.pstatic.net/20230503_102/1683101554312MNTX6_JPEG/UyCyV_116442_1.jpg'
  },
  {
    idx: 44,
    name: '펜할리곤스 바디&핸드로션 더 페이버릿 500ML',
    price: '81,700원',
    imageUrl: 'https://shop-phinf.pstatic.net/20230726_66/1690339575255lLkBz_JPEG/2860392024543861_316468479.jpg'
  },
  {
    idx: 45,
    name: '펜할리곤스 엠프레사 EDP 100ML',
    price: '342,900원',
    imageUrl: 'https://shop-phinf.pstatic.net/20240423_172/1713857540378UzxVY_JPEG/114993383077245905_599890296.jpg'
  },
  {
    idx: 46,
    name: '펜할리곤스 레이디 블랑쉬 EDP 75ML',
    price: '375,300원',
    imageUrl: 'https://shop-phinf.pstatic.net/20230307_15/1678173524941rTzEj_JPEG/79309413652914736_1233401332.jpg'
  },
  {
    idx: 47,
    name: '펜할리곤스 릴리 오브 더 밸리 EDT 100ML',
    price: '216,000원',
    imageUrl: 'https://shop-phinf.pstatic.net/20240423_217/1713857966808P0xsz_JPEG/114993809513246267_1125181617.jpg'
  },
  {
    idx: 48,
    name: '펜할리곤스 블렌하임 부케 바디 워시+로션 듀오세트',
    price: '154,800원',
    imageUrl: 'https://shop-phinf.pstatic.net/20230728_203/1690532317677Fb83R_JPEG/2160415528432878_1915852972.jpg'
  },
  {
    idx: 49,
    name: '펜할리곤스 바디&핸드로션 쿼커스 500ML',
    price: '81,700원',
    imageUrl: 'https://shop-phinf.pstatic.net/20230726_188/1690338134780QK85R_JPEG/38003052813264438_1892439150.jpg'
  },
  {
    idx: 50,
    name: '펜할리곤스 바디&핸드로션 엔드미온 500ML',
    price: '81,700원',
    imageUrl: 'https://shop-phinf.pstatic.net/20230726_98/1690337446903cnJ15_JPEG/17528415235819449_736897786.jpg'
  }
];