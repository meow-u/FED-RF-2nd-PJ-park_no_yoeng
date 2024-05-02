// 스벅 PJ 데이터 JS - main_starwars_data.js

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


/********************************
 *   [ 3. 메인영역 데이터 ]
********************************/
//3-1 세계관 데이터
    const contentData = [
      {
        boxClass: 'box1',
        title: 'Official Timeline',
        subtitle: 'The Eras of Star Wars',
        description: 'Every saga has a beginning, middle, and end. The stories of the galaxy far, far away span thousands of years, with eras defined along a mythological timeline giving context to its past, present, and future. As Star Wars continues to expand and evolve, these eras provide a sense of scope to an epic tale still being told.'
      },
      {
        boxClass: 'box2',
        title: 'The Story of',
        subtitle: 'Humanity Set in the Galaxy',
        description: 'The Star Wars series depicts the conflict between the Jedi Knights and the Sith Empire, set against the backdrop of the galaxy. This science fiction epic expresses themes such as familial love, courage, and sacrifice through its extensive universe and characters, and its gripping storyline, all unfolding amidst the dualistic struggle between light and dark. Witness the human drama that unfolds in the infinite realm of space.'
      },
      {
        boxClass: 'box3',
        title: "Star Wars' Epic Saga Across Eras",
        subtitle: 'The Mythical Journey Through Time',
        description: 'The Star Wars saga spans thousands of years in the galaxy, unfolding its narrative across distinct eras along a mythical timeline of past, present, and future. This division into eras lends an epic scale and context to the ever-expanding Star Wars universe, aiding the understanding of the ongoing saga. The eras provide a framework to explore the vast expanse of interconnected stories, from ancient legends to an uncertain future, infusing them with a sense of mythic grandeur as part of a greater cosmic cycle.'
      },
      {
        boxClass: 'box4',
        title: 'The Pioneer of Fandom Culture',
        subtitle: 'The Star Wars Universe',
        description: 'Star Wars is the hugely popular American space opera film series created by George Lucas. It has become a massive cultural phenomenon, transcending just movies by expanding across various media like TV shows, books, and comics. Star Wars represents American culture itself and has cultivated one of the largest fan bases worldwide, especially in the United States.'
      }
    ];
//3-2 뉴스아이템데이터
    const newsItemData = [
      {info: 
        'The Hunt for Jedi Is on in Marvel\'s Star Wars: Inquisitors - Exclusive Reveal'
      },
      {info: 
        'Disneyland After Dark: Star Wars Nite Kicks Off Tonight'
      },
      {info: 
        'New LEGO Star Wars Ultimate Collector Series TIE Interceptor Revealed'
      }
    ];
//3-3 시리즈데이터
const seriesData = [
  {
    imgClass: 'series-img hover-img',
    title: 'Tales of the Empire',
    info: 'A journey into the fearsome Galactic Empire through the eyes of two warriors on divergent paths.'
  },
  {
    imgClass: 'series-img hover-img',
    title: 'The Acolyte',
    info: 'An investigation into a shocking crime spree pits a respected Jedi Master against a dangerous warrior from his past.'
  },
  {
    imgClass: 'series-img hover-img',
    title: 'Ahsoka',
    info: 'Former Jedi Knight Ahsoka Tano investigates an emerging threat to a vulnerable galaxy.'
  },
  {
    imgClass: 'series-img hover-img',
    title: 'The Mandalorian',
    info: 'After the fall of the Empire, a lone Mandalorian makes his way through the lawless galaxy with his foundling, Grogu.'
  },
  {
    imgClass: 'series-img hover-img',
    title: 'Andor',
    info: 'In a dangerous era, Cassian Andor embarks on a path destined to turn him into a rebel hero.'
  },
  {
    imgClass: 'series-img hover-img',
    title: 'Tales of the Jedi',
    info: 'Tales built around Jedi from the prequel era, featuring Ahsoka Tano, Count Dooku, and others.'
  },
  {
    imgClass: 'series-img hover-img',
    title: 'Obi-Wan Kenobi',
    info: 'During the reign of the Empire, Obi-Wan Kenobi embarks on a crucial mission.'
  },
  {
    imgClass: 'series-img hover-img',
    title: 'The Book of Boba Fett',
    info: 'Go inside The Book of BobaFett, now streaming on Disney+, with episode guides, Databank entries, and a bounty of in-depth articles.'
  }
];
//3-4 비주얼배너 데이터
const visualData = [
  {
    title: 'The Bad Batch',
    series: 'Star Wars series',
    desc: 'The Bad Batch follows the elite clones as they navigate a changing galaxy after the Clone War. Each member possesses a unique skill, making them an exceptional and formidable crew.',
    href: '###'
  },
  {
    title: 'The Mandalorian',
    series: 'Star Wars series',
    desc: 'After the fall of the Empire, a lone Mandalorian makes his way through the lawless galaxy with his foundling, Grogu.',
    href: '###'
  },
  {
    title: 'Ahsoka',
    series: 'Star Wars series',
    desc: 'Set after the fall of the Empire, "Ahsoka" follows the former Jedi knight Ahsoka Tano as she investigates an emerging threat to a vulnerable galaxy.',
    href: '###'
  }
];
/* **************************************** */
    const htmlData = {
      secContentArea: `
      <div>
        <h2 class="main_tit">
           <small>epic journey through</small> <br />
           The ages of Star Wars
        </h2>
      </div>
      ${contentData.map(v=>`
      <div class="txt-content ${v.boxClass}">
      <h4 class="tit">${v.title}</h4>
      <h2 class="tit title-sub2">${v.subtitle}</h2>
      <span class="desc"
        >${v.description}
      </span>
    </div>
      `).join('')}
    `,
      newsArea:`
      <div class="news-area box fx-box">
      <div class="left-wrap">
        <div class="left-box">
          <h2>12 Star Wars Movie Poster Designs Found Only in Japan</h2>
          <div class="left-img hover-img"></div>
        </div>
      </div>
      <div class="right-wrap">
        <h4>More News + Features</h4>
        ${newsItemData.map(v=>`
        <div class="item-box">
        <div class="series-img hover-img"></div>
        <p class="info">
         ${v.info}
        </p>
      </div>
        `).join('')}
        <div class="btnbox">
          <a class="btn" href="###">VIEW ALL</a>
          <a class="btn yellow" href="###">MORE INFO</a>
        </div>
      </div>
    </div>
    <!-- 한번더붙임 -->
    <div class="right-wrap">
      <h4 class="title-sub2">ALL series</h4>
      ${seriesData.map(v=>`
      <div class="item-box">
        <div class="${v.imgClass}"></div>
        <p class="info"><strong class="title-topic">${v.title}</strong></p>
        <span class="info"
          >${v.info}</span></div>
      `).join('')}
      <div class="btnbox">
        <a class="btn" href="###">VIEW ALL</a>
        <a class="btn yellow" href="###">WATCH TRAILER▶</a>
      </div>
    </div>
      `,
      visualViewArea:`
      
      <div class="visualView fx-box">
       ${visualData.map(v=>`
       <div class="visualimg">
       <span
         >${v.title}
         <p>${v.series}</p>
         <p class="desc">${v.desc}
         </p>
         <a class="btn" href="###">MORE VIEW</a></span
       >
     </div>`).join('')}
    </div>
      `,
    


    };/////////////// htmlData 객체 ///////////////

    export { htmlData ,
      contentData, newsItemData, seriesData , visualData}