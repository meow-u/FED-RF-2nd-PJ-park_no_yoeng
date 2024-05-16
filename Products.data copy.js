const AllProducts = [
    {
    idx: 1 ,
    type: "FRAGRANCES" ,
    collection: "British Tales" ,
    name: ["펜할리곤스 루나 EDT 30ML" ,"LUNA"],
    info: ["달의 여신의 목욕은 그녀의 오드 뚜왈렛처럼 매혹적이면서도 차분한 향을 선사합니다. 오렌지, 자스민, 부드러운 장미, 전나무 발삼 향으로 빛납니다. 휴식을 취하세요. 몸을 담그세요. 항복이 이렇게 달콤하게 느껴진 적은 없었습니다.","The Moon Goddess’ bath is as soothing as it is seductive, much like her eau de toilette. It shines with orange, jasmine, soft rose and fir balsam. Relax. Sink in. Surrender has never felt so sweet."],
    price: "151,000" ,
    img: "products_1.jpg"
    } ,
    {
    idx: 2 ,
    type: "FRAGRANCES" ,
    collection: "British Tales" ,
    name: ["펜할리곤스 루나 EDT 100ML" ,"LUNA"],
    info: ["달의 여신의 목욕은 그녀의 오드 뚜왈렛처럼 매혹적이면서도 차분한 향을 선사합니다. 오렌지, 자스민, 부드러운 장미, 전나무 발삼 향으로 빛납니다. 휴식을 취하세요. 몸을 담그세요. 항복이 이렇게 달콤하게 느껴진 적은 없었습니다.","The Moon Goddess’ bath is as soothing as it is seductive, much like her eau de toilette. It shines with orange, jasmine, soft rose and fir balsam. Relax. Sink in. Surrender has never felt so sweet."],
    price: "310,000" ,
    img: "products_2.jpg"
    } ,
    {
    idx: 3 ,
    type: "GIFTING" ,
    collection: "British Tales" ,
    name: ["펜할리곤스 베스트셀러 센트 라이브러리 (2mlx10)" ,""],
    info: ["",""],
    price: " 62,000" ,
    img: "products_3.jpg"
    } ,
    {
    idx: 4 ,
    type: "BATH &amp; BODY" ,
    collection: "etc" ,
    name: ["펜할리곤스 루나 헤어퍼퓸 30ml" ,"LUNA"],
    info: ["달의 여신의 목욕은 그녀의 오드 뚜왈렛처럼 매혹적이면서도 차분한 향을 선사합니다. 오렌지, 자스민, 부드러운 장미, 전나무 발삼 향으로 빛납니다. 휴식을 취하세요. 몸을 담그세요. 항복이 이렇게 달콤하게 느껴진 적은 없었습니다.","The Moon Goddess’ bath is as soothing as it is seductive, much like her eau de toilette. It shines with orange, jasmine, soft rose and fir balsam. Relax. Sink in. Surrender has never felt so sweet."],
    price: " 86,000" ,
    img: "products_4.jpg"
    } ,
    {
    idx: 5 ,
    type: "BATH &amp; BODY" ,
    collection: "etc" ,
    name: ["펜할리곤스 바디&amp;핸드로션 루나 500ML" ,"LUNA"],
    info: ["달의 여신의 목욕은 그녀의 오드 뚜왈렛처럼 매혹적이면서도 차분한 향을 선사합니다. 오렌지, 자스민, 부드러운 장미, 전나무 발삼 향으로 빛납니다. 휴식을 취하세요. 몸을 담그세요. 항복이 이렇게 달콤하게 느껴진 적은 없었습니다.","The Moon Goddess’ bath is as soothing as it is seductive, much like her eau de toilette. It shines with orange, jasmine, soft rose and fir balsam. Relax. Sink in. Surrender has never felt so sweet."],
    price: " 86,000" ,
    img: "products_5.jpg"
    } ,
    {
    idx: 6 ,
    type: "FRAGRANCES" ,
    collection: "British Tales" ,
    name: ["펜할리곤스 쥬니퍼 슬링 EDT 30ML" ,"JUNIPER SLING"],
    info: ["진 한 잔 어떠세요? 안젤리카와 후추를 가지고,  따뜻한 향신료와 포근한 온기. 이 오 드 뚜왈렛은 정교한 향취가 느껴지는 독특한 향료입니다. 더블로 하시는 게 좋겠네요.","Anyone for gin? A juniper burst of freshness. Teasing angelica and black pepper. Warm spice and warm hearts. This eau de toilette is a complex cocktail. Better make it a double."],
    price: "151,000" ,
    img: "products_6.jpg"
    } ,
    {
    idx: 7 ,
    type: "FRAGRANCES" ,
    collection: "Potions &amp; Remedies" ,
    name: ["펜할리곤스 키스 오브 블리스 EDP 100ML" ,"A KISS OF BLISS"],
    info: ["베르가못과 그린 클로버로 우울함을 날려버리세요. 머스크와 장미가 언덕 꼭대기에서 노래하듯, 여러분도 함께 하시겠습니까? 화창한 낮에 탄생한 오드 퍼퓸이 밤새도록 여러분을 사로잡아 춤을 추게 합니다.","Spritz those blues away with bergamot and green clover. Musk and rose sing from the hilltops: would one like to join? An eau de parfum borne from sunny days to have you dancing all night long."],
    price: "347,000" ,
    img: "products_7.jpg"
    } ,
    {
    idx: 8 ,
    type: "FRAGRANCES" ,
    collection: "Portraits" ,
    name: ["펜할리곤스 더치스 로즈 EDP 75ML" ,"THE COVETED DUCHESS ROSE"],
    info: ["로즈 오 드 퍼퓸의 은은한 향은 머스크 우드의 힌트처럼 관능적인 무언가를 숨기고 있습니다. 아아, 공작의 달콤한 젊은 신부가 욕망으로 아파하는 동안 공작이 방탕한 시간을 보내고 있습니다. 누군가(누구라도) 그녀를 풀어주지 않을까요?","Rose’s coy eau de parfum conceals something more sensual a hint of musky wood. Alas, the Duke is off gallivanting while his sweet young bride aches with desire. Won’t someone (anyone) release her?"],
    price: "417,000" ,
    img: "products_8.jpg"
    } ,
    {
    idx: 9 ,
    type: "BATH &amp; BODY" ,
    collection: "etc" ,
    name: ["펜할리곤스 루나 핸드크림 75ML" ,"LUNA"],
    info: ["달의 여신의 목욕은 그녀의 오드 뚜왈렛처럼 매혹적이면서도 차분한 향을 선사합니다. 오렌지, 자스민, 부드러운 장미, 전나무 발삼 향으로 빛납니다. 휴식을 취하세요. 몸을 담그세요. 항복이 이렇게 달콤하게 느껴진 적은 없었습니다.","The Moon Goddess’ bath is as soothing as it is seductive, much like her eau de toilette. It shines with orange, jasmine, soft rose and fir balsam. Relax. Sink in. Surrender has never felt so sweet."],
    price: " 50,000" ,
    img: "products_9.jpg"
    } ,
    {
    idx: 10 ,
    type: "FRAGRANCES" ,
    collection: "Trade Routes" ,
    name: ["펜할리곤스 엠프레사 EDP 30ML" ,"EMPRESSA"],
    info: ["엠프레샤는 강렬한 인상을 남깁니다. 그녀의 오드 퍼퓸은 복숭아, 바닐라, 반짝이는 블러드 오렌지가 어우러져 새벽처럼 밝고 활기찬 향을 선사합니다. 그녀의 미소는  따뜻하고, 윤기 있고, 잊을 수 없는 것입니다. ","The Empressa leaves an impression. Her eau de parfum is laced with peach, vanilla and shimmering blood orange, as bright and stirring as the dawn. Her smile? Warm, lustrous, and unforgettable. "],
    price: "195,000" ,
    img: "products_10.jpg"
    } ,
    {
    idx: 11 ,
    type: "GIFTING" ,
    collection: "etc" ,
    name: ["펜할리곤스 루나 바디 워시+로션 듀오세트" ,"LUNA"],
    info: ["달의 여신의 목욕은 그녀의 오드 뚜왈렛처럼 매혹적이면서도 차분한 향을 선사합니다. 오렌지, 자스민, 부드러운 장미, 전나무 발삼 향으로 빛납니다. 휴식을 취하세요. 몸을 담그세요. 항복이 이렇게 달콤하게 느껴진 적은 없었습니다.","The Moon Goddess’ bath is as soothing as it is seductive, much like her eau de toilette. It shines with orange, jasmine, soft rose and fir balsam. Relax. Sink in. Surrender has never felt so sweet."],
    price: "172,000" ,
    img: "products_11.jpg"
    } ,
    {
    idx: 12 ,
    type: "BATH &amp; BODY" ,
    collection: "etc" ,
    name: ["펜할리곤스 바디&amp;핸드워시 루나 500ML" ,"LUNA"],
    info: ["달의 여신의 목욕은 그녀의 오드 뚜왈렛처럼 매혹적이면서도 차분한 향을 선사합니다. 오렌지, 자스민, 부드러운 장미, 전나무 발삼 향으로 빛납니다. 휴식을 취하세요. 몸을 담그세요. 항복이 이렇게 달콤하게 느껴진 적은 없었습니다.","The Moon Goddess’ bath is as soothing as it is seductive, much like her eau de toilette. It shines with orange, jasmine, soft rose and fir balsam. Relax. Sink in. Surrender has never felt so sweet."],
    price: " 86,000" ,
    img: "products_12.jpg"
    } ,
    {
    idx: 13 ,
    type: "BATH &amp; BODY" ,
    collection: "etc" ,
    name: ["펜할리곤스 바디&amp;핸드워시 엠프레사 500ML" ,"EMPRESSA"],
    info: ["엠프레샤는 강렬한 인상을 남깁니다. 그녀의 오드 퍼퓸은 복숭아, 바닐라, 반짝이는 블러드 오렌지가 어우러져 새벽처럼 밝고 활기찬 향을 선사합니다. 그녀의 미소는  따뜻하고, 윤기 있고, 잊을 수 없는 것입니다. ","The Empressa leaves an impression. Her eau de parfum is laced with peach, vanilla and shimmering blood orange, as bright and stirring as the dawn. Her smile? Warm, lustrous, and unforgettable. "],
    price: " 86,000" ,
    img: "products_13.jpg"
    } ,
    {
    idx: 14 ,
    type: "BATH &amp; BODY" ,
    collection: "etc" ,
    name: ["펜할리곤스 바디&amp;핸드로션 블렌하임 부케 500ML" ,"BLENHEIM BOUQUET"],
    info: ["최고의 진만큼 드라이하면서도 싱그러운, 그리고 유쾌한 영국 특유의 위트를 느낄 수 있습니다.  이 오 드 뚜왈렛은 말보로 공작을 위해 처음 탄생했으며, 그 모습을 그대로 드러냅니다.","What-ho! As dry and fresh as the best gin  or the best of British humour. Lemon, black pepper and pine. This eau de toilette was first created for the Duke of Marlborough, and by jove it shows."],
    price: " 86,000" ,
    img: "products_14.jpg"
    } ,
    {
    idx: 15 ,
    type: "FRAGRANCES" ,
    collection: "British Tales" ,
    name: ["펜할리곤스 솔라리스 EDP 30ML" ,"SOLARIS"],
    info: ["감각적. 관대함. 따뜻함. 시공간을 뛰어넘는 태양에 대한 찬사. 제니스처럼 활기찬 시트러스 향이 강렬한 블랙커런트와 조화를 이룹니다. 시더, 샌들우드, 바닐라가 힘을 북돋아주고 천상의 우아함을 선사하는 오 드 퍼퓸을 완성합니다.","Sensational. Generous. Warming. An ode to the sun, reaching through time and space. A Zenith-like, lively citrus beams down to blend with powerful blackcurrant. Cedar, sandalwood and vanilla creates an eau de parfum with uplifting strength and celestial grace."],
    price: "151,000" ,
    img: "products_15.jpg"
    } ,
    {
    idx: 16 ,
    type: "FRAGRANCES" ,
    collection: "British Tales" ,
    name: ["펜할리곤스 엘리자베단 로즈 EDP 30ML" ,"ELISABETHAN ROSE"],
    info: ["영국의 꽃으로 사랑받는 튜더 왕가의 장미를 만나보세요. 요크와 랭커스터 가문의 만남에서 영감을 받아 만들어진 이 에어리 오 드 퍼퓸은 장미, 헤이즐넛 잎, 베티버가 조화롭게 어우러진 매력적인 노트가 특징입니다.","Behold the famous Tudor rose  the flower of England. Inspired by the coming together of houses York and Lancaster, this airy eau de parfum is a harmonious union of rose, hazelnut leaf and vetiver"],
    price: "151,000" ,
    img: "products_16.jpg"
    } ,
    {
    idx: 17 ,
    type: "FRAGRANCES" ,
    collection: "Portraits" ,
    name: ["펜할리곤스 더 듀크 EDP 75ML" ,"MUCH ADO ABOUT THE DUKE"],
    info: ["훤칠한 젊은 공작의 매혹적인 장미 향기는 여심을 설레게 하지만, 생각하는 것과는 다릅니다. 런던에서 가장 사랑받는 여인인 그의 아내는 그에게 전혀 관심이 없는 듯 보입니다. ","The handsome young Duke’s peppery rose fragrance sets hearts aflutter – but not the ones you might think. His wife, the most coveted girl in London, seems not to interest him at all. Fancy that."],
    price: "417,000" ,
    img: "products_17.jpg"
    } ,
    {
    idx: 18 ,
    type: "FRAGRANCES" ,
    collection: "British Tales" ,
    name: ["펜할리곤스 블렌하임 부케 EDT 100ML" ,"BLENHEIM BOUQUET"],
    info: ["최고의 진만큼 드라이하면서도 싱그러운, 그리고 유쾌한 영국 특유의 위트를 느낄 수 있습니다.  이 오 드 뚜왈렛은 말보로 공작을 위해 처음 탄생했으며, 그 모습을 그대로 드러냅니다.","What-ho! As dry and fresh as the best gin  or the best of British humour. Lemon, black pepper and pine. This eau de toilette was first created for the Duke of Marlborough, and by jove it shows."],
    price: "240,000" ,
    img: "products_18.jpg"
    } ,
    {
    idx: 19 ,
    type: "FRAGRANCES" ,
    collection: "British Tales" ,
    name: ["펜할리곤스 쥬니퍼 슬링 EDT 100ML" ,"JUNIPER SLING"],
    info: ["진 한 잔 어떠세요? 안젤리카와 후추를 가지고,  따뜻한 향신료와 포근한 온기. 이 오 드 뚜왈렛은 정교한 향취가 느껴지는 독특한 향료입니다. 더블로 하시는 게 좋겠네요.","Anyone for gin? A juniper burst of freshness. Teasing angelica and black pepper. Warm spice and warm hearts. This eau de toilette is a complex cocktail. Better make it a double."],
    price: "310,000" ,
    img: "products_19.jpg"
    } ,
    {
    idx: 20 ,
    type: "FRAGRANCES" ,
    collection: "British Tales" ,
    name: ["펜할리곤스 블렌하임 부케 EDT 30ML" ,"BLENHEIM BOUQUET"],
    info: ["최고의 진만큼 드라이하면서도 싱그러운, 그리고 유쾌한 영국 특유의 위트를 느낄 수 있습니다.  이 오 드 뚜왈렛은 말보로 공작을 위해 처음 탄생했으며, 그 모습을 그대로 드러냅니다.","What-ho! As dry and fresh as the best gin  or the best of British humour. Lemon, black pepper and pine. This eau de toilette was first created for the Duke of Marlborough, and by jove it shows."],
    price: "130,000" ,
    img: "products_20.jpg"
    } ,
    {
    idx: 21 ,
    type: "BATH &amp; BODY" ,
    collection: "etc" ,
    name: ["펜할리곤스 쿼커스 핸드크림 75ML" ,"QUERCUS"],
    info: ["영국을 상징하는 오크 나무에서 이름을 딴 세련된 향조입니다. 계곡물처럼 상쾌한 바질과 레몬, 달콤한 자스민, 우디한 이끼 향이 어우러져 마치 자연으로 돌아간 듯한 행복감을 선사합니다.","A cologne of some sophistication, named for the iconic English oak. Basil and lemon as fresh as a mountain stream, sweet jasmine, and a woody, mossy depth that brings one happily back to earth."],
    price: " 50,000" ,
    img: "products_21.jpg"
    } ,
    {
    idx: 22 ,
    type: "FRAGRANCES" ,
    collection: "British Tales" ,
    name: ["펜할리곤스 엔드미온 EDC 30ML" ,"ENDYMION"],
    info: ["제우스의 가장 잘생긴 아들에게 어울리는 클래식한 우아함을 선사합니다. 베르가못의 반짝임이 스웨이드, 커피, 제라늄과 조화를 이룹니다. 시대를 초월한 오 드 코롱.  누가 이런 남자를 거부할 수 있을까요?","Classical elegance befitting of Zeus’s most handsome son. A sparkle of bergamot dances off suede, coffee and geranium. An eau de cologne for the ages. Who can resist a man such as this?"],
    price: "130,000" ,
    img: "products_22.jpg"
    } ,
    {
    idx: 23 ,
    type: "FRAGRANCES" ,
    collection: "Trade Routes" ,
    name: ["펜할리곤스 알울라 EDP 30ML" ,"PENHALIGON'S ALULA"],
    info: ["바닐라 바람이 수평선 너머로 속삭입니다. 플럼. 파출리. 향신료와 시가 어우러진 모놀리스 옆으로 야자수가 향보다 더 높이 하늘로 뻗어 있습니다. 모래에서 태어나 하늘에 흠뻑 젖은 사프란의 광활한 사막.","Vanilla winds whisper across the horizon. Plum. Patchouli. Palms reach skyward, taller than incense, next to a monolith of spice and tobacco. A sweeping desert of saffron, born of sand and drenched in sky."],
    price: "195,000" ,
    img: "products_23.jpg"
    } ,
    {
    idx: 24 ,
    type: "FRAGRANCES" ,
    collection: "Trade Routes" ,
    name: ["펜할리곤스 알울라 EDP 100ML" ,"PENHALIGON'S ALULA"],
    info: ["바닐라 바람이 수평선 너머로 속삭입니다. 플럼. 파출리. 향신료와 시가 어우러진 모놀리스 옆으로 야자수가 향보다 더 높이 하늘로 뻗어 있습니다. 모래에서 태어나 하늘에 흠뻑 젖은 사프란의 광활한 사막.","Vanilla winds whisper across the horizon. Plum. Patchouli. Palms reach skyward, taller than incense, next to a monolith of spice and tobacco. A sweeping desert of saffron, born of sand and drenched in sky."],
    price: "381,000" ,
    img: "products_24.jpg"
    } ,
    {
    idx: 25 ,
    type: "FRAGRANCES" ,
    collection: "British Tales" ,
    name: ["펜할리곤스 엔드미온 꽁상트레 EDP 30ML" ,"ENDYMION CONCENTRÉ"],
    info: ["제우스의 가장 잘생긴 아들에게 어울리는 클래식한 우아함을 선사합니다. 베르가못의 반짝임이 스웨이드, 커피, 제라늄과 조화를 이룹니다. 시대를 초월한 오 드 코롱.  누가 이런 남자를 거부할 수 있을까요?","Classical elegance befitting of Zeus’s most handsome son. A sparkle of bergamot dances off suede, coffee and geranium. An eau de cologne for the ages. Who can resist a man such as this?"],
    price: "151,000" ,
    img: "products_25.jpg"
    } ,
    {
    idx: 26 ,
    type: "FRAGRANCES" ,
    collection: "Portraits" ,
    name: ["펜할리곤스 미스터 톰슨 EDP 75ML" ,"THE OMNISCIENT MR THOMPSON"],
    info: ["스모키하고 럼주 같은 향과 바닐라와 참깨 우유가 가미된 가죽 향을 내는 톰슨은 매번 안도감을 주지만 한편으로는 감시의 달인이기도 합니다. 집사가 본 광경에 관해서는 결코 잊지 않고 항상 신중합니다. 최고의 집사라면 언제나 비밀을 지켜줍니다...","Serving smoky, rum-like and leather hints calmed by vanilla and sesame milk, Mr Thompson is reassuring at every turn  yet a master in the art of spying. As for what the butler saw… well, he never forgets, but is ever discrete. All the best butlers keep your secrets…"],
    price: "417,000" ,
    img: "products_26.jpg"
    } ,
    {
    idx: 27 ,
    type: "GIFTING" ,
    collection: "Potions &amp; Remedies" ,
    name: ["펜할리곤스 포션 센트 라이브러리 2mlx5" ,""],
    info: ["",""],
    price: " 54,000" ,
    img: "products_27.jpg"
    } ,
    {
    idx: 28 ,
    type: "FRAGRANCES" ,
    collection: "Potions &amp; Remedies" ,
    name: ["펜할리곤스 브라 브라 브룸 EDP 100ML" ,"VRA VRA VROOM"],
    info: ["어서 서두르세요! 만다린과 목련의 생기 넘치는 발산, 오스만투스 앱솔루트의 열정적인 한 스푼. 성공으로 향하는 길에 에너지를 불어넣으세요. 이제 그 누구도 당신을 멈추지 못할 겁니다.","Dash it all and make haste! An energetic blast of mandarin and magnolia, enthusiastic spoonfuls of osmanthus absolute. Spritz your way to success. Nothing shall stop one now."],
    price: "347,000" ,
    img: "products_28.jpg"
    } ,
    {
    idx: 29 ,
    type: "FRAGRANCES" ,
    collection: "Potions &amp; Remedies" ,
    name: ["펜할리곤스 오 디 오데시티 EDP 100ML" ,"EAU THE AUDACITY"],
    info: ["수줍음의 족쇄를 벗어던지는 대담함의 향기. 선명한 오렌지 꽃이 바닐라와 향을 깜짝 놀라게 합니다. 조심스럽게 뿌려보세요.","A bottle of boldness to cast off the shackles of shyness. Audacious orange blossom surprises vanilla and incense; how fancy! Spritz sparingly (or not  we dare you)."],
    price: "347,000" ,
    img: "products_29.jpg"
    } ,
    {
    idx: 30 ,
    type: "FRAGRANCES" ,
    collection: "Potions &amp; Remedies" ,
    name: ["펜할리곤스 밤 오브 캄 EDP 100ML" ,"A BALM OF CALM"],
    info: ["라벤더의 자장가, 제라늄의 구름. 아이리스와 샌달우드가 평온함을 선사하며 깊은 평온함을 선사합니다. 럼과 부드러운 우드가 펜할리곤의 평온함을 완성합니다. 낙원.","A lullaby of lavender, a cloud of geranium. Iris and sandalwood for a dose of composure; an instant serenity remedy. Rum and soft woods round off Penhaligon’s tranquillity blend. Heaven."],
    price: "347,000" ,
    img: "products_30.jpg"
    } ,
    {
    idx: 31 ,
    type: "FRAGRANCES" ,
    collection: "Potions &amp; Remedies" ,
    name: ["펜할리곤스 리퀴드 러브 EDP 100ML" ,"LIQUID LOVE"],
    info: ["마음을 설레게 하는 열정적인 오 드 퍼퓸. 핑크 페퍼, 생강, 강황의 스파이시한 향이 칠리, 머스크와 함께 불처럼 타오르는 향을 선사합니다. 주의: 한 번 너무 많이 뿌리면 정신을 잃을지도 몰라요","A passionate eau de parfum to set hearts a-flutter. Spicy rushes of pink pepper, ginger and turmeric lock in fiery embrace with chilli and musk. Be warned: one spritz too many may cause swooning."],
    price: "347,000" ,
    img: "products_31.jpg"
    } ,
    {
    idx: 32 ,
    type: "GIFTING" ,
    collection: "etc" ,
    name: ["펜할리곤스 더 페이버릿 바디 워시+로션 듀오세트" ,"THE FAVOURITE"],
    info: ["이 여인에게는 기다림이 통하지 않습니다. 그녀는 궁전 문 뒤에서 무슨 일이 벌어지는지 정확히 알고 있으며, 황금빛 미모사로 사회의 여론을 흔들고 있습니다. 아이리스와 머스크의 장엄한 향기가 샌달우드 무대에 등장할 때 사랑스러운 미소로 맞이합니다.","Waiting won't do for this lady. She knows exactly what goes on behind Palace doors, and her golden mimosa sways society's opinion. Her majestic scent of iris and musk greets with a darling smile as she begins to emerge on a sandalwood stage."],
    price: "172,000" ,
    img: "products_32.jpg"
    } ,
    {
    idx: 33 ,
    type: "GIFTING" ,
    collection: "etc" ,
    name: ["펜할리곤스 엘리자베단 로즈 바디 워시+로션 듀오세트" ,"ELISABETHAN ROSE"],
    info: ["영국의 꽃으로 사랑받는 튜더 왕가의 장미를 만나보세요. 요크와 랭커스터 가문의 만남에서 영감을 받아 만들어진 이 에어리 오 드 퍼퓸은 장미, 헤이즐넛 잎, 베티버가 조화롭게 어우러진 매력적인 노트가 특징입니다.","Behold the famous Tudor rose  the flower of England. Inspired by the coming together of houses York and Lancaster, this airy eau de parfum is a harmonious union of rose, hazelnut leaf and vetiver"],
    price: "172,000" ,
    img: "products_33.jpg"
    } ,
    {
    idx: 34 ,
    type: "GIFTING" ,
    collection: "etc" ,
    name: ["펜할리곤스 엠프레사 바디 워시+로션 듀오세트" ,"EMPRESSA"],
    info: ["엠프레샤는 강렬한 인상을 남깁니다. 그녀의 오드 퍼퓸은 복숭아, 바닐라, 반짝이는 블러드 오렌지가 어우러져 새벽처럼 밝고 활기찬 향을 선사합니다. 그녀의 미소는  따뜻하고, 윤기 있고, 잊을 수 없는 것입니다. ","The Empressa leaves an impression. Her eau de parfum is laced with peach, vanilla and shimmering blood orange, as bright and stirring as the dawn. Her smile? Warm, lustrous, and unforgettable. "],
    price: "172,000" ,
    img: "products_34.jpg"
    } ,
    {
    idx: 35 ,
    type: "GIFTING" ,
    collection: "etc" ,
    name: ["펜할리곤스 엔드미온 바디 워시+로션 듀오세트" ,"ENDYMION"],
    info: ["제우스의 가장 잘생긴 아들에게 어울리는 클래식한 우아함을 선사합니다. 베르가못의 반짝임이 스웨이드, 커피, 제라늄과 조화를 이룹니다. 시대를 초월한 오 드 코롱.  누가 이런 남자를 거부할 수 있을까요?","Classical elegance befitting of Zeus’s most handsome son. A sparkle of bergamot dances off suede, coffee and geranium. An eau de cologne for the ages. Who can resist a man such as this?"],
    price: "172,000" ,
    img: "products_35.jpg"
    } ,
    {
    idx: 36 ,
    type: "GIFTING" ,
    collection: "etc" ,
    name: ["펜할리곤스 쿼커스 바디 워시+로션 듀오세트" ,"QUERCUS"],
    info: ["영국을 상징하는 오크 나무에서 이름을 딴 세련된 향조입니다. 계곡물처럼 상쾌한 바질과 레몬, 달콤한 자스민, 우디한 이끼 향이 어우러져 마치 자연으로 돌아간 듯한 행복감을 선사합니다.","A cologne of some sophistication, named for the iconic English oak. Basil and lemon as fresh as a mountain stream, sweet jasmine, and a woody, mossy depth that brings one happily back to earth."],
    price: "172,000" ,
    img: "products_36.jpg"
    } ,
    {
    idx: 37 ,
    type: "BATH &amp; BODY" ,
    collection: "etc" ,
    name: ["펜할리곤스 바디&amp;핸드워시 블렌하임 부케 500ML" ,"BLENHEIM BOUQUET"],
    info: ["최고의 진만큼 드라이하면서도 싱그러운, 그리고 유쾌한 영국 특유의 위트를 느낄 수 있습니다.  이 오 드 뚜왈렛은 말보로 공작을 위해 처음 탄생했으며, 그 모습을 그대로 드러냅니다.","What-ho! As dry and fresh as the best gin  or the best of British humour. Lemon, black pepper and pine. This eau de toilette was first created for the Duke of Marlborough, and by jove it shows."],
    price: " 86,000" ,
    img: "products_37.jpg"
    } ,
    {
    idx: 38 ,
    type: "BATH &amp; BODY" ,
    collection: "etc" ,
    name: ["펜할리곤스 바디&amp;핸드워시 더 페이버릿 500ML" ,"THE FAVOURITE"],
    info: ["이 여인에게는 기다림이 통하지 않습니다. 그녀는 궁전 문 뒤에서 무슨 일이 벌어지는지 정확히 알고 있으며, 황금빛 미모사로 사회의 여론을 흔들고 있습니다. 아이리스와 머스크의 장엄한 향기가 샌달우드 무대에 등장할 때 사랑스러운 미소로 맞이합니다.","Waiting won't do for this lady. She knows exactly what goes on behind Palace doors, and her golden mimosa sways society's opinion. Her majestic scent of iris and musk greets with a darling smile as she begins to emerge on a sandalwood stage."],
    price: " 86,000" ,
    img: "products_38.jpg"
    } ,
    {
    idx: 39 ,
    type: "BATH &amp; BODY" ,
    collection: "etc" ,
    name: ["펜할리곤스 바디&amp;핸드워시 엔드미온 500ML" ,"ENDYMION"],
    info: ["제우스의 가장 잘생긴 아들에게 어울리는 클래식한 우아함을 선사합니다. 베르가못의 반짝임이 스웨이드, 커피, 제라늄과 조화를 이룹니다. 시대를 초월한 오 드 코롱.  누가 이런 남자를 거부할 수 있을까요?","Classical elegance befitting of Zeus’s most handsome son. A sparkle of bergamot dances off suede, coffee and geranium. An eau de cologne for the ages. Who can resist a man such as this?"],
    price: " 86,000" ,
    img: "products_39.jpg"
    } ,
    {
    idx: 40 ,
    type: "BATH &amp; BODY" ,
    collection: "etc" ,
    name: ["펜할리곤스 바디&amp;핸드워시 쿼커스 500ML" ,"QUERCUS"],
    info: ["영국을 상징하는 오크 나무에서 이름을 딴 세련된 향조입니다. 계곡물처럼 상쾌한 바질과 레몬, 달콤한 자스민, 우디한 이끼 향이 어우러져 마치 자연으로 돌아간 듯한 행복감을 선사합니다.","A cologne of some sophistication, named for the iconic English oak. Basil and lemon as fresh as a mountain stream, sweet jasmine, and a woody, mossy depth that brings one happily back to earth."],
    price: " 86,000" ,
    img: "products_40.jpg"
    } ,
    {
    idx: 41 ,
    type: "BATH &amp; BODY" ,
    collection: "etc" ,
    name: ["펜할리곤스 바디&amp;핸드로션 더 페이버릿 500ML" ,"THE FAVOURITE"],
    info: ["이 여인에게는 기다림이 통하지 않습니다. 그녀는 궁전 문 뒤에서 무슨 일이 벌어지는지 정확히 알고 있으며, 황금빛 미모사로 사회의 여론을 흔들고 있습니다. 아이리스와 머스크의 장엄한 향기가 샌달우드 무대에 등장할 때 사랑스러운 미소로 맞이합니다.","Waiting won't do for this lady. She knows exactly what goes on behind Palace doors, and her golden mimosa sways society's opinion. Her majestic scent of iris and musk greets with a darling smile as she begins to emerge on a sandalwood stage."],
    price: " 86,000" ,
    img: "products_41.jpg"
    } ,
    {
    idx: 42 ,
    type: "BATH &amp; BODY" ,
    collection: "etc" ,
    name: ["펜할리곤스 바디&amp;핸드로션 엘리자베단 로즈 500ML" ,"ELISABETHAN ROSE"],
    info: ["영국의 꽃으로 사랑받는 튜더 왕가의 장미를 만나보세요. 요크와 랭커스터 가문의 만남에서 영감을 받아 만들어진 이 에어리 오 드 퍼퓸은 장미, 헤이즐넛 잎, 베티버가 조화롭게 어우러진 매력적인 노트가 특징입니다.","Behold the famous Tudor rose  the flower of England. Inspired by the coming together of houses York and Lancaster, this airy eau de parfum is a harmonious union of rose, hazelnut leaf and vetiver"],
    price: " 86,000" ,
    img: "products_42.jpg"
    } ,
    {
    idx: 43 ,
    type: "BATH &amp; BODY" ,
    collection: "etc" ,
    name: ["펜할리곤스 바디&amp;핸드워시 엘리자베단 로즈 500ML" ,"ELISABETHAN ROSE"],
    info: ["영국의 꽃으로 사랑받는 튜더 왕가의 장미를 만나보세요. 요크와 랭커스터 가문의 만남에서 영감을 받아 만들어진 이 에어리 오 드 퍼퓸은 장미, 헤이즐넛 잎, 베티버가 조화롭게 어우러진 매력적인 노트가 특징입니다.","Behold the famous Tudor rose  the flower of England. Inspired by the coming together of houses York and Lancaster, this airy eau de parfum is a harmonious union of rose, hazelnut leaf and vetiver"],
    price: " 86,000" ,
    img: "products_43.jpg"
    } ,
    {
    idx: 44 ,
    type: "GIFTING" ,
    collection: "etc" ,
    name: ["펜할리곤스 블렌하임 부케 바디 워시+로션 듀오세트" ,"BLENHEIM BOUQUET"],
    info: ["최고의 진만큼 드라이하면서도 싱그러운, 그리고 유쾌한 영국 특유의 위트를 느낄 수 있습니다.  이 오 드 뚜왈렛은 말보로 공작을 위해 처음 탄생했으며, 그 모습을 그대로 드러냅니다.","What-ho! As dry and fresh as the best gin  or the best of British humour. Lemon, black pepper and pine. This eau de toilette was first created for the Duke of Marlborough, and by jove it shows."],
    price: "172,000" ,
    img: "products_44.jpg"
    } ,
    {
    idx: 45 ,
    type: "BATH &amp; BODY" ,
    collection: "etc" ,
    name: ["펜할리곤스 바디&amp;핸드로션 쿼커스 500ML" ,"QUERCUS"],
    info: ["영국을 상징하는 오크 나무에서 이름을 딴 세련된 향조입니다. 계곡물처럼 상쾌한 바질과 레몬, 달콤한 자스민, 우디한 이끼 향이 어우러져 마치 자연으로 돌아간 듯한 행복감을 선사합니다.","A cologne of some sophistication, named for the iconic English oak. Basil and lemon as fresh as a mountain stream, sweet jasmine, and a woody, mossy depth that brings one happily back to earth."],
    price: " 86,000" ,
    img: "products_45.jpg"
    } ,
    {
    idx: 46 ,
    type: "BATH &amp; BODY" ,
    collection: "etc" ,
    name: ["펜할리곤스 바디&amp;핸드로션 엔드미온 500ML" ,"ENDYMION"],
    info: ["제우스의 가장 잘생긴 아들에게 어울리는 클래식한 우아함을 선사합니다. 베르가못의 반짝임이 스웨이드, 커피, 제라늄과 조화를 이룹니다. 시대를 초월한 오 드 코롱.  누가 이런 남자를 거부할 수 있을까요?","Classical elegance befitting of Zeus’s most handsome son. A sparkle of bergamot dances off suede, coffee and geranium. An eau de cologne for the ages. Who can resist a man such as this?"],
    price: " 86,000" ,
    img: "products_46.jpg"
    } ,
    {
    idx: 47 ,
    type: "BATH &amp; BODY" ,
    collection: "etc" ,
    name: ["펜할리곤스 바디&amp;핸드로션 엠프레사 500ML" ,"EMPRESSA"],
    info: ["엠프레샤는 강렬한 인상을 남깁니다. 그녀의 오드 퍼퓸은 복숭아, 바닐라, 반짝이는 블러드 오렌지가 어우러져 새벽처럼 밝고 활기찬 향을 선사합니다. 그녀의 미소는  따뜻하고, 윤기 있고, 잊을 수 없는 것입니다. ","The Empressa leaves an impression. Her eau de parfum is laced with peach, vanilla and shimmering blood orange, as bright and stirring as the dawn. Her smile? Warm, lustrous, and unforgettable. "],
    price: " 86,000" ,
    img: "products_47.jpg"
    } ,
    {
    idx: 48 ,
    type: "FRAGRANCES" ,
    collection: "British Tales" ,
    name: ["펜할리곤스 솔라리스 EDP 100ML" ,"SOLARIS"],
    info: ["감각적. 관대함. 따뜻함. 시공간을 뛰어넘는 태양에 대한 찬사. 제니스처럼 활기찬 시트러스 향이 강렬한 블랙커런트와 조화를 이룹니다. 시더, 샌들우드, 바닐라가 힘을 북돋아주고 천상의 우아함을 선사하는 오 드 퍼퓸을 완성합니다.","Sensational. Generous. Warming. An ode to the sun, reaching through time and space. A Zenith-like, lively citrus beams down to blend with powerful blackcurrant. Cedar, sandalwood and vanilla creates an eau de parfum with uplifting strength and celestial grace."],
    price: "310,000" ,
    img: "products_48.jpg"
    } ,
    {
    idx: 49 ,
    type: "FRAGRANCES" ,
    collection: "British Tales" ,
    name: ["펜할리곤스 스포츠카 클럽 EDP 100ML" ,"Sports Car Club"],
    info: ["펜할리곤스의 스포츠카 클럽! 브리티시 테일즈 라인의 한정판 향수로, 트랙을 질주하는 영국 레이싱카에서 영감을 받은 상쾌하고 활기찬 향입니다.","Penhaligon's Sports Car Club! A limited edition fragrance from the British Tales line, this fresh and energizing scent is inspired by British racing cars tearing down the track."],
    price: "286,000" ,
    img: "products_49.jpg"
    } ,
    {
    idx: 50 ,
    type: "FRAGRANCES" ,
    collection: "British Tales" ,
    name: ["펜할리곤스 로테어 EDT 100ML" ,"LOTHAIR"],
    info: ["이국적인 해안처럼 낯설지만 차 한 잔처럼 친숙합니다. 마지막 클리퍼 중 한 명의 이름을 딴 로세어호의 화물칸에는 향나무, 무화과 우유, 앰버그리스 등 모험의 전리품이 가득합니다.","As novel as a foreign shore, as familiar as a cup of tea. Named after one of the last clippers, the Lothair’s hold is stuffed with the fragrant spoils of adventure: juniper, fig milk and ambergris."],
    price: "310,000" ,
    img: "products_50.jpg"
    } ,
    {
    idx: 51 ,
    type: "FRAGRANCES" ,
    collection: "Portraits" ,
    name: ["펜할리곤스 아서 EDP 75ML" ,"THE WORLD ACCORDING TO ARTHUR"],
    info: ["아서는 은수저와 말을 칼처럼 칼집에 넣습니다. 이제 동방에서 온 그는 현자의 지혜를 터득했습니다. 그러니 악마 같은 조지 경은 동생을 잘 다독여야 합니다. 분노하면 불을 뿜어내죠.","Arthur sheaths his silver spoon and words like a sword. Now, fresh from the East, he’s mastered sage wisdom. So, that devil Lord George best keep his brother sweet. When incensed, he breathes fire."],
    price: "417,000" ,
    img: "products_51.jpg"
    } ,
    {
    idx: 52 ,
    type: "GIFTING" ,
    collection: "etc" ,
    name: ["펜할리곤스 레이디스 collection etc(5ml x 5)" ,""],
    info: ["",""],
    price: " 89,000" ,
    img: "products_52.jpg"
    } ,
    {
    idx: 53 ,
    type: "GIFTING" ,
    collection: "Portraits" ,
    name: ["펜할리곤스 포트레이트 센트 라이브러리 (10x2ml)" ,""],
    info: ["",""],
    price: " 71,000" ,
    img: "products_53.jpg"
    } ,
    {
    idx: 54 ,
    type: "home" ,
    collection: "etc" ,
    name: ["펜할리곤스 쿰간 로즈 캔들 200G" ,"KUMGAN ROSE"],
    info: ["사천 고추 특유의 차가운 느낌. 그리고 이제는 따뜻함. 숲과 사프란은 그런 효과가 있지요. 장미 꽃잎이 봉인을 허물고 여명을 밝힙니다. 아무런 말도 나오지 않는 향기로운 캔들. ","Unusual a cold sensation of Sichuan pepper. And now, warmth. Woods and saffron have that effect, you know. Rose petals break the seal and, light, the dawn. A scented candle that spouts no nonsense."],
    price: "116,000" ,
    img: "products_54.jpg"
    } ,
    {
    idx: 55 ,
    type: "FRAGRANCES" ,
    collection: "etc" ,
    name: ["펜할리곤스 헐트리스 헬렌 EDP 75ML" ,"HEARTLESS HELEN"],
    info: ["권력을 쥐고 있는 사람에게 로맨스가 필요하겠어요? 튜베로즈, 만다린, 우드: 두려움 없는 정복가의 향기가 그녀의 앞을 가로막는 모든 이들을 유혹합니다.  사파리에서 일어난 일은 사파리에 남는다는 테디 경의 생각처럼...","Who needs romance when one wields power? Tuberose, mandarin, wood: our fearless conquistador's scent seduces all in her path. What happens on safari, stays on safari, or so Sir Teddy thinks..."],
    price: "417,000" ,
    img: "products_55.jpg"
    } ,
    {
    idx: 56 ,
    type: "FRAGRANCES" ,
    collection: "British Tales" ,
    name: ["펜할리곤스 사토리얼 EDT 100ML" ,"SARTORIAL"],
    info: ["새빌 로우의 클래식한 향: 스팀, 라벤더, 바닐라. 젠틀한 신사를 위한 엄선된 향입니다.","Savile Row’s classic scent: steam, lavender, vanilla. Strictly for dapper gents."],
    price: "240,000" ,
    img: "products_56.jpg"
    } ,
    {
    idx: 57 ,
    type: "FRAGRANCES" ,
    collection: "British Tales" ,
    name: ["펜할리곤스 사보이 스팀 EDP 100ML" ,"SAVOY STEAM"],
    info: ["신선한 튀니지 장미의 향긋한 향기가 가득한 하맘에서 수증기가 피어오릅니다. 플런지 풀만큼이나 상쾌한 핑크 페퍼는 로즈마리와 향으로 조화를 이룹니다. 진정한 터키의 즐거움입니다.","Steam rises in the hammam, laced with the heady fragrance of fresh Tunisian roses. Pink pepper, as invigorating as the plunge pool itself, balanced by rosemary and incense. A Turkish delight indeed."],
    price: "310,000" ,
    img: "products_57.jpg"
    } ,
    {
    idx: 58 ,
    type: "FRAGRANCES" ,
    collection: "British Tales" ,
    name: ["펜할리곤스 쿼커스 EDC 100ML" ,"QUERCUS"],
    info: ["영국을 상징하는 오크 나무에서 이름을 딴 세련된 향조입니다. 계곡물처럼 상쾌한 바질과 레몬, 달콤한 자스민, 우디한 이끼 향이 어우러져 마치 자연으로 돌아간 듯한 행복감을 선사합니다.","A cologne of some sophistication, named for the iconic English oak. Basil and lemon as fresh as a mountain stream, sweet jasmine, and a woody, mossy depth that brings one happily back to earth."],
    price: "240,000" ,
    img: "products_58.jpg"
    } ,
    {
    idx: 59 ,
    type: "FRAGRANCES" ,
    collection: "Portraits" ,
    name: ["펜할리곤스 블래이징 미스터 샘 EDP 75ML" ,"THE BLAZING MISTER SAM"],
    info: ["건방진 자신감이 넘치는 해외에서 온 미국인. 그의 오 드 퍼퓸은 드라이한 패출리와 크리미한 시더 위에 뜨겁고 차가운 향신료가 어우러져 있습니다. 누구도 샘의 매력을 거부할 수 없죠!","An American abroad, with all the cocky confidence you might expect. Hot and cold spices mingle over dry patchouli and creamy cedar in his eau de parfum. No one can quite resist Sam’s charms. Yeehaw!"],
    price: "417,000" ,
    img: "products_59.jpg"
    } ,
    {
    idx: 60 ,
    type: "FRAGRANCES" ,
    collection: "Trade Routes" ,
    name: ["펜할리곤스 바빌론 EDP 100ML" ,"BABYLON"],
    info: ["죄악의 소굴인가요, 아니면 고대 세계의 장엄한 경이로움인가요? 바빌론의 향기는 그야말로 신성합니다. 따뜻한 바닐라, 독특한 삼나무, 퇴폐적인 사프란이 어우러져 있습니다. 어떤 미스터리는 풀리지 않은 채로 남겨두는 것이 가장 좋습니다.","Den of iniquity, or majestic wonder of the ancient world? No matter – Babylon’s scent is simply divine. Warm vanilla, distinguished cedar and decadent saffron. Some mysteries are best left unsolved.."],
    price: "381,000" ,
    img: "products_60.jpg"
    } ,
    {
    idx: 61 ,
    type: "FRAGRANCES" ,
    collection: "Trade Routes" ,
    name: ["펜할리곤스 콘스탄티노플 EDP 100ml" ,"CONSTANTINOPLE"],
    info: ["도시의 여왕의 향기. 화려한 붓꽃이 해안을 따라 흙빛 이끼와 어우러져 있습니다. 그리고 밤이 찾아옵니다. 따뜻한 바닐라 향이 밀려옵니다. 관능적이면서도 도전적인, 두 개의 세계가 얽혀 있습니다.","A scent of the Queen of Cities. Opulent iris mingles with earthy moss along the shore. Then, night falls. A warm rush of vanilla. Sensual yet defiant, two worlds entwined."],
    price: "381,000" ,
    img: "products_61.jpg"
    } ,
    {
    idx: 62 ,
    type: "FRAGRANCES" ,
    collection: "British Tales" ,
    name: ["펜할리곤스 엔드미온 꽁상트레 EDP 100ML" ,"ENDYMION CONCENTRÉ"],
    info: ["제우스의 가장 잘생긴 아들에게 어울리는 클래식한 우아함을 선사합니다. 베르가못의 반짝임이 스웨이드, 커피, 제라늄과 조화를 이룹니다. 시대를 초월한 오 드 코롱.  누가 이런 남자를 거부할 수 있을까요?","Classical elegance befitting of Zeus’s most handsome son. A sparkle of bergamot dances off suede, coffee and geranium. An eau de cologne for the ages. Who can resist a man such as this?"],
    price: "310,000" ,
    img: "products_62.jpg"
    } ,
    {
    idx: 63 ,
    type: "FRAGRANCES" ,
    collection: "etc" ,
    name: ["펜할리곤스 하맘 부케 EDT 100ml" ,"HAMMAM BOUQUET"],
    info: ["지나간 시대의 고급스러운 향기. (1872년, 메이페어의 터키식 목욕탕에서 라벤더, 장미, 샌달우드 향이 어깨를 문지릅니다. 수건 좀 줘요, 친구.","The luxurious scent of a bygone era. (Our very first fragrance, no less.) It’s 1872, and in the Turkish baths of Mayfair, heady lavender, rose and sandalwood rub shoulders. Pass me a towel, old chap."],
    price: "240,000" ,
    img: "products_63.jpg"
    } ,
    {
    idx: 64 ,
    type: "FRAGRANCES" ,
    collection: "British Tales" ,
    name: ["펜할리곤스 오퍼스 EDT 100ML" ,"OPUS 1870"],
    info: ["물론 걸작입니다. 클래식하면서도 진부하지 않습니다. 은은한 향이 상쾌한 유자와 만나 무겁지 않으면서도 상쾌하고 화사한 향을 만들어 냅니다.","A masterpiece, of course. Classic, without ever being de rigueur. A delicate waft of incense meets invigorating yuzu a bracing, brilliant fragrance, and not a bit heavy."],
    price: "240,000" ,
    img: "products_64.jpg"
    } ,
    {
    idx: 65 ,
    type: "FRAGRANCES" ,
    collection: "Portraits" ,
    name: ["펜할리곤스 클레데스틴 클라라 EDP 75ML" ,"CLANDESTINE CLARA"],
    info: ["클라라는 매콤함과 달콤함을 동시에 즐기는 진정한 미식가입니다. 그녀의 향은 럼 바닐라, 시나몬 머스크, 앰버리 패출리 등 이국적인 여행의 이야기를 들려줍니다. (조지 경이 잘 알고 있듯이) 완전히 매력적인 향입니다.","Clara is a true gourmand, spicy and sweet in equal measure. Her scent tells a tale of exotic travel: rhum vanilla, cinnamon musk, ambery patchouli. Completely delectable (as Lord George knows well)."],
    price: "417,000" ,
    img: "products_65.jpg"
    } ,
    {
    idx: 66 ,
    type: "FRAGRANCES" ,
    collection: "Portraits" ,
    name: ["펜할리곤스 채인징 콘스탄스 EDP 75ML" ,"CHANGING CONSTANCE"],
    info: ["콘스탄스는 '지극히 현대적인 여성'이라고 할 수 있습니다. 그녀는 관습에 구애받지 않고 자신이 원하는 대로 행동합니다. 시원한 카 다몬, 뜨거운 피멘토, 소금에 절인 캐러멜 - 그녀의 상반된 향수는 모든 규칙을 깨뜨립니다.","Constance is what one might call A Very Modern Woman. She has no regard for custom, and does exactly as she likes. Cool cardamom, hot pimento, salted caramel her contrary perfume breaks every rule."],
    price: "417,000" ,
    img: "products_66.jpg"
    } ,
    {
    idx: 67 ,
    type: "FRAGRANCES" ,
    collection: "Portraits" ,
    name: ["펜할리곤스 비위칭 야스민 EDP 75ML" ,"THE BEWITCHING YASMINE"],
    info: ["야스민의 시선은 런던을 향하고 있으며, 그에 걸맞게 어울립니다. 그녀의 앰버 향은 재스민, 향, 우드 등 풍성한 향을 선사합니다. 영광스럽고 관능적인 모든 것을 기념하는 향수입니다.  누가 거부할 수 있을까요?","Yasmine’s sights are set on London and a suitable match. Her amber fragrance is a voluptuous affair: jasmine, incense, oud. A celebration of all that is gloriously sensual. Who could resist?"],
    price: "417,000" ,
    img: "products_67.jpg"
    } ,
    {
    idx: 68 ,
    type: "FRAGRANCES" ,
    collection: "etc" ,
    name: ["펜할리곤스 언컴프로마이징 소한 EDP 75ML" ,"UNCOMPROMISING SOHAN"],
    info: ["고대 이집트를 연상시키는 화려하고 퇴폐적인 향으로 깊은 따뜻함을 선사하는 소한은 유럽에서 가장 결단력 있는 남자, 바틀헤드는 이집트 신화에 나오는 태양의 신 독수리를 형상화한 향수입니다.","With a sumptuous, decadent scent that evokes ancient Egypt with its deep warmth, Sohan is the most determined man in all of Europe, and Bartlehead is the eagle, the Egyptian mythological god of the sun."],
    price: "417,000" ,
    img: "products_68.jpg"
    } ,
    {
    idx: 69 ,
    type: "home" ,
    collection: "etc" ,
    name: ["펜할리곤스 마두로 리프 캔들 200G" ,"MADURO LEAF"],
    info: ["쿠바 연기가 웃음소리처럼 신사 클럽에 퍼진다... 나무 패널로 된 벽. 부드러운 가죽 안락 의자. 아바나에서 세인트 제임스까지, 최고의 취향을 위한 캔들. 이제 누가 내 시가에 불 좀 붙여줄래요?","Cuban smoke drifts through the gentlemen’s club like laughter… Wood-panelled walls. Soft leather armchairs. From Havana to St. James’s, a candle for superior tastes. Now, will someone light my cigar?​"],
    price: "116,000" ,
    img: "products_69.jpg"
    } ,
    {
    idx: 70 ,
    type: "GIFTING" ,
    collection: "Portraits" ,
    name: ["펜할리곤스 포트레이트 맨션 10mlx8" ,""],
    info: ["",""],
    price: "302,000" ,
    img: "products_70.jpg"
    } ,
    {
    idx: 71 ,
    type: "FRAGRANCES" ,
    collection: "British Tales" ,
    name: ["펜할리곤스 더 페이버릿 EDP 100ML" ,"THE FAVOURITE"],
    info: ["이 여인에게는 기다림이 통하지 않습니다. 그녀는 궁전 문 뒤에서 무슨 일이 벌어지는지 정확히 알고 있으며, 황금빛 미모사로 사회의 여론을 흔들고 있습니다. 아이리스와 머스크의 장엄한 향기가 샌달우드 무대에 등장할 때 사랑스러운 미소로 맞이합니다.","Waiting won't do for this lady. She knows exactly what goes on behind Palace doors, and her golden mimosa sways society's opinion. Her majestic scent of iris and musk greets with a darling smile as she begins to emerge on a sandalwood stage."],
    price: "310,000" ,
    img: "products_71.jpg"
    } ,
    {
    idx: 72 ,
    type: "FRAGRANCES" ,
    collection: "Trade Routes" ,
    name: ["펜할리곤스 엠프레사 EDP 100ML" ,"EMPRESSA"],
    info: ["엠프레샤는 강렬한 인상을 남깁니다. 그녀의 오드 퍼퓸은 복숭아, 바닐라, 반짝이는 블러드 오렌지가 어우러져 새벽처럼 밝고 활기찬 향을 선사합니다. 그녀의 미소는  따뜻하고, 윤기 있고, 잊을 수 없는 것입니다. ","The Empressa leaves an impression. Her eau de parfum is laced with peach, vanilla and shimmering blood orange, as bright and stirring as the dawn. Her smile? Warm, lustrous, and unforgettable. "],
    price: "381,000" ,
    img: "products_72.jpg"
    } ,
    {
    idx: 73 ,
    type: "FRAGRANCES" ,
    collection: "Trade Routes" ,
    name: ["펜할리곤스 할페티 EDP 100ML" ,"HALFETI"],
    info: ["이것이 바로 사랑입니다. 강렬한 자몽, 레반트 향신료, 장미가 달빛에 뒤엉킨 듯한 중독성 있고 신비로운 향기. 하지만 강변에 저것은 무엇일까요? 전설 속의 검은 장미일까요?","So this is love. An intoxicating, mysterious fragrance: vigorous grapefruit, Levantine spice and rose tangle in the moonlight. But what’s that upon the riverbank? Could it be the fabled black rose?"],
    price: "381,000" ,
    img: "products_73.jpg"
    } ,
    {
    idx: 74 ,
    type: "FRAGRANCES" ,
    collection: "Portraits" ,
    name: ["펜할리곤스 윌리엄 펜할리곤 EDP 75ML" ,"THE INIMITABLE MR. PENHALIGON"],
    info: ["펜할리곤 씨입니다! 그는 따뜻하고 프레시하며 흙내음이 물씬 풍깁니다. 이 정도 향이라면 그가 사교계의 신사 숙녀들이 유일하게 신뢰하는 조향사라는 것은 당연한 일이지요.   ","I say, Mr Penhaligon himself! He enters in a vetiver haze  warm, fresh and earthy. With a scent this good, there’s no wonder he’s the only trusted perfumer of High Society’s ladies and gents."],
    price: "417,000" ,
    img: "products_74.jpg"
    } ,
    {
    idx: 75 ,
    type: "FRAGRANCES" ,
    collection: "Portraits" ,
    name: ["펜할리곤스 레이디 블랑쉬 EDP 75ML" ,"THE REVENGE OF LADY BLANCHE"],
    info: ["위험할 정도로 매력적인 레이디 블랑쉬는 자신의 아름다움을 무기처럼 휘두릅니다. 희생자는 누구인가요?  불쌍하게도 그녀의 무지한 남편입니다. 상큼하면서도 매콤한. 플로럴과 우디 ,이런! 이 오 드 퍼퓸은 진짜 너무 좋네요.","The dangerously charming Lady Blanche wields her beauty like a weapon. The victim? Her poor oblivious husband. Fresh yet spicy. Floral and woody. Golly! This eau de parfum is criminally good."],
    price: "417,000" ,
    img: "products_75.jpg"
    } ,
    {
    idx: 76 ,
    type: "FRAGRANCES" ,
    collection: "Portraits" ,
    name: ["펜할리곤스 테러블 테디 EDP 75ML" ,"TERRIBLE TEDDY"],
    info: ["테디는 가죽, 향, 암브록산의 향기로 순진한 사람들의 마음을 사로잡으며 짜릿한 추격전을 즐기며 살아갑니다. 능숙한 사냥꾼인 그의 눈은 헬렌에게 맞춰져 있는데... 공작을 만나기 전까지는 말이지요.","Teddy lives for the thrill of the chase, ensnaring unsuspecting hearts with his scent of leather, incense and ambroxan. A smooth operator, his sights are trained on Helen... until he meets the Duke."],
    price: "417,000" ,
    img: "products_76.jpg"
    } ,
    {
    idx: 77 ,
    type: "FRAGRANCES" ,
    collection: "British Tales" ,
    name: ["펜할리곤스 릴리 오브 더 밸리 EDT 100ML" ,"LILY OF THE VALLEY"],
    info: ["레이시 잎. 드문드문 보이는 빛.  녹색, 깨끗함, 온전함. 릴리 오브 더 밸리는 아침 이슬처럼 신선하고 낙관적이며 베르가못과 샌들우드 향으로 마무리됩니다. 시대를 초월하여 변치 않는 오 드 뚜왈렛.","Lacey leaves. Dappled light. Green, clean, wholesome. Lily of the Valley is as fresh and optimistic as the morning dew, grounded by notes of bergamot and sandalwood. A timeless eau de toilette."],
    price: "240,000" ,
    img: "products_77.jpg"
    } ,
    {
    idx: 78 ,
    type: "FRAGRANCES" ,
    collection: "British Tales" ,
    name: ["펜할리곤스 오렌지 블라썸 EDT 100ML" ,"ORANGE BLOSSOM"],
    info: ["꽃이 만개한 오렌지 과수원의 황홀한 플로럴 향기를 담은 향수입니다. 이 오 드 뚜왈렛을 뿌리고 나면 그늘진 숲에서 따뜻한 햇살을 받으며 산책하는 듯한 기분이 듭니다.  자, 이제 저의 파나마 모자는 어디에 두었을까요?","A perfume that captures the honeyed floral haze of orange orchards in bloom. Wearing this eau de toilette is like strolling from a shaded grove into warm sunshine. Now, where did I put my Panama hat?"],
    price: "240,000" ,
    img: "products_78.jpg"
    } ,
    {
    idx: 79 ,
    type: "FRAGRANCES" ,
    collection: "British Tales" ,
    name: ["펜할리곤스 쿼커스 EDC 30ML" ,"QUERCUS"],
    info: ["영국을 상징하는 오크 나무에서 이름을 딴 세련된 향조입니다. 계곡물처럼 상쾌한 바질과 레몬, 달콤한 자스민, 우디한 이끼 향이 어우러져 마치 자연으로 돌아간 듯한 행복감을 선사합니다.","A cologne of some sophistication, named for the iconic English oak. Basil and lemon as fresh as a mountain stream, sweet jasmine, and a woody, mossy depth that brings one happily back to earth."],
    price: "130,000" ,
    img: "products_79.jpg"
    } ,
    {
    idx: 80 ,
    type: "FRAGRANCES" ,
    collection: "Portraits" ,
    name: ["펜할리곤스 로드 조지 EDP 75ML" ,"THE TRAGEDY OF LORD GEORGE"],
    info: ["들어와요, 전에도 만났던 것 같은데... 고귀한 가부장이자 남성적 우아함의 표본인 조지 경은 면도 비누 향과 따뜻한 럼주 향으로 여러분을 맞이합니다. 하지만 전통 뒤에는 어떤 비밀이 숨겨져 있을까요?","Do come in, I’m sure we’ve met before... Noble patriarch, paragon of masculine elegance, Lord George welcomes with a scent of shaving soap and warming rum. But what secrets hide behind tradition?"],
    price: "417,000" ,
    img: "products_80.jpg"
    } ,
    {
    idx: 81 ,
    type: "FRAGRANCES" ,
    collection: "British Tales" ,
    name: ["펜할리곤스 엘리자베단 로즈 EDP 100ML" ,"ELISABETHAN ROSE"],
    info: ["영국의 꽃으로 사랑받는 튜더 왕가의 장미를 만나보세요. 요크와 랭커스터 가문의 만남에서 영감을 받아 만들어진 이 에어리 오 드 퍼퓸은 장미, 헤이즐넛 잎, 베티버가 조화롭게 어우러진 매력적인 노트가 특징입니다.","Behold the famous Tudor rose  the flower of England. Inspired by the coming together of houses York and Lancaster, this airy eau de parfum is a harmonious union of rose, hazelnut leaf and vetiver"],
    price: "310,000" ,
    img: "products_81.jpg"
    } ,
    {
    idx: 82 ,
    type: "FRAGRANCES" ,
    collection: "British Tales" ,
    name: ["펜할리곤스 엔드미온 EDC 100ML" ,"ENDYMION"],
    info: ["제우스의 가장 잘생긴 아들에게 어울리는 클래식한 우아함을 선사합니다. 베르가못의 반짝임이 스웨이드, 커피, 제라늄과 조화를 이룹니다. 시대를 초월한 오 드 코롱.  누가 이런 남자를 거부할 수 있을까요?","Classical elegance befitting of Zeus’s most handsome son. A sparkle of bergamot dances off suede, coffee and geranium. An eau de cologne for the ages. Who can resist a man such as this?"],
    price: "240,000" ,
    img: "products_82.jpg"
    } ,
    {
    idx: 83 ,
    type: "FRAGRANCES" ,
    collection: "British Tales" ,
    name: ["펜할리곤스 아르테미지아 EDP 100ML" ,"ARTEMISIA"],
    info: ["사냥의 여신이 활을 활짝 펴고 숲은 기대감으로 떨고 있습니다. 무성한 넥타라인, 자스민, 바이올렛이 캐러멜과 크리미한 바닐라 위에서 유영하듯 펼쳐집니다.  피부에 닿는 순간. 찬가가 울려 퍼지는 듯한 오 드 퍼퓸. ","The goddess of the hunt arches her bow, and the forest quivers in anticipation. Lush nectarine, jasmine and violet swim above caramel and creamy vanilla. An eau de parfum sung like a hymn on the skin."],
    price: "310,000" ,
    img: "products_83.jpg"
    } ,
    {
    idx: 84 ,
    type: "FRAGRANCES" ,
    collection: "British Tales" ,
    name: ["펜할리곤스 오렌지 블라썸 EDT 30ML" ,"ORANGE BLOSSOM"],
    info: ["꽃이 만개한 오렌지 과수원의 황홀한 플로럴 향기를 담은 향수입니다. 이 오 드 뚜왈렛을 뿌리고 나면 그늘진 숲에서 따뜻한 햇살을 받으며 산책하는 듯한 기분이 듭니다.  자, 이제 저의 파나마 모자는 어디에 두었을까요?","A perfume that captures the honeyed floral haze of orange orchards in bloom. Wearing this eau de toilette is like strolling from a shaded grove into warm sunshine. Now, where did I put my Panama hat?"],
    price: "130,000" ,
    img: "products_84.jpg"
    } ,
    {
    idx: 85 ,
    type: "GIFTING" ,
    collection: "etc" ,
    name: ["펜할리곤스 젠틀맨스 collection etc(5ml x 5)" ,""],
    info: ["",""],
    price: "89,000" ,
    img: "products_85.jpg"
    } ,
    {
    idx: 86 ,
    type: "BATH &amp; BODY" ,
    collection: "etc" ,
    name: ["펜할리곤스 더 페이버릿 핸드크림 75ML" ,"THE FAVOURITE"],
    info: ["이 여인에게는 기다림이 통하지 않습니다. 그녀는 궁전 문 뒤에서 무슨 일이 벌어지는지 정확히 알고 있으며, 황금빛 미모사로 사회의 여론을 흔들고 있습니다. 아이리스와 머스크의 장엄한 향기가 샌달우드 무대에 등장할 때 사랑스러운 미소로 맞이합니다.","Waiting won't do for this lady. She knows exactly what goes on behind Palace doors, and her golden mimosa sways society's opinion. Her majestic scent of iris and musk greets with a darling smile as she begins to emerge on a sandalwood stage."],
    price: "50,000" ,
    img: "products_86.jpg"
    } ,
    {
    idx: 87 ,
    type: "FRAGRANCES" ,
    collection: "British Tales" ,
    name: ["펜할리곤스 아르테미지아 EDP 30ML" ,"ARTEMISIA"],
    info: ["사냥의 여신이 활을 활짝 펴고 숲은 기대감으로 떨고 있습니다. 무성한 넥타라인, 자스민, 바이올렛이 캐러멜과 크리미한 바닐라 위에서 유영하듯 펼쳐집니다.  피부에 닿는 순간. 찬가가 울려 퍼지는 듯한 오 드 퍼퓸. ","The goddess of the hunt arches her bow, and the forest quivers in anticipation. Lush nectarine, jasmine and violet swim above caramel and creamy vanilla. An eau de parfum sung like a hymn on the skin."],
    price: "151,000" ,
    img: "products_87.jpg"
    } ,
    {
    idx: 88 ,
    type: "FRAGRANCES" ,
    collection: "British Tales" ,
    name: ["펜할리곤스 더 페이버릿 EDP 30ML" ,"THE FAVOURITE"],
    info: ["이 여인에게는 기다림이 통하지 않습니다. 그녀는 궁전 문 뒤에서 무슨 일이 벌어지는지 정확히 알고 있으며, 황금빛 미모사로 사회의 여론을 흔들고 있습니다. 아이리스와 머스크의 장엄한 향기가 샌달우드 무대에 등장할 때 사랑스러운 미소로 맞이합니다.","Waiting won't do for this lady. She knows exactly what goes on behind Palace doors, and her golden mimosa sways society's opinion. Her majestic scent of iris and musk greets with a darling smile as she begins to emerge on a sandalwood stage."],
    price: "151,000" ,
    img: "products_88.jpg"
    }
    ];
