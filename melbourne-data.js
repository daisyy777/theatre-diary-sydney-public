// Melbourne pilot: manually checked official-source snapshot, 26 September 2026.
// A season range is never presented as a complete performance calendar.
const MELBOURNE_SNAPSHOT='2026-09-26';
const MELBOURNE_VENUES=[
  {id:'mel-princess',name:'Princess Theatre',area:'Melbourne CBD',address:'163 Spring Street, Melbourne VIC 3000',url:'https://marrinergroup.com.au/princess-theatre',programme:'https://marrinergroup.com.au/whats-on',note:'Major musical theatre venue.'},
  {id:'mel-regent',name:'Regent Theatre',area:'Melbourne CBD',address:'191 Collins Street, Melbourne VIC 3000',url:'https://marrinergroup.com.au/regent-theatre',programme:'https://marrinergroup.com.au/whats-on',note:'Major musicals, ballet and opera.'},
  {id:'mel-comedy',name:'Comedy Theatre',area:'Melbourne CBD',address:'240 Exhibition Street, Melbourne VIC 3000',url:'https://marrinergroup.com.au/comedy-theatre',programme:'https://marrinergroup.com.au/whats-on',note:'Marriner Group theatre for musicals and plays.'},
  {id:'mel-her-majestys',name:"Her Majesty's Theatre",area:'Melbourne CBD',address:'219 Exhibition Street, Melbourne VIC 3000',url:'https://hmt.com.au/',programme:'https://hmt.com.au/',note:'Historic major-stage theatre.'},
  {id:'mel-national',name:'The National Theatre',area:'St Kilda',address:'20 Carlisle Street, St Kilda VIC 3182',url:'https://nationaltheatre.org.au/',programme:'https://nationaltheatre.org.au/',note:'Home to major community productions and touring work.'},
  {id:'mel-theatre-works',name:'Theatre Works',area:'St Kilda',address:'14 Acland Street, St Kilda VIC 3182',url:'https://www.theatreworks.org.au/',programme:'https://www.theatreworks.org.au/whats-on',note:'Independent theatre and musical productions.'},
  {id:'mel-malthouse',name:'Malthouse Theatre',area:'Southbank',address:'113 Sturt Street, Southbank VIC 3006',url:'https://www.malthousetheatre.com.au/',programme:'https://www.malthousetheatre.com.au/',note:'Contemporary Australian and international theatre.'},
  {id:'mel-1812',name:'1812 Theatre',area:'Upper Ferntree Gully',address:'3 Rose Street, Upper Ferntree Gully VIC 3156',url:'https://www.1812theatre.com.au/',programme:'https://www.1812theatre.com.au/2026-season/',note:'Community theatre with Lowe Auditorium and bakery@1812.'},
  {id:'mel-shirley-burke',name:'Shirley Burke Theatre',area:'Parkdale',address:'64 Parkers Road, Parkdale VIC 3195',url:'https://mordialloctheatre.com.au/',programme:'https://mordialloctheatre.com.au/',note:'Home of Mordialloc Theatre Company.'},
  {id:'mel-clayton',name:'Clayton Community Centre Theatrette',area:'Clayton',address:'9–15 Cooke Street, Clayton VIC 3168',url:'https://encoretheatre.com.au/',programme:'https://encoretheatre.com.au/',note:'Community theatre performance space.'},
  {id:'mel-malvern',name:'Malvern Community Arts Centre',area:'Malvern',address:'29 Burke Road, Malvern East VIC 3145',url:'https://malverntheatre.com.au/',programme:'https://malverntheatre.com.au/whats-on/shows/',note:'Resident venue of Malvern Theatre Company.'}
];
// For every entry, booking is the producer or venue's official show page unless a directly
// linked, explicitly authorised ticket page was checked. Sessions are listed only where
// an official show page publishes individual dates and times.
const MELBOURNE_SHOWS=[
  ['six-mel','SIX the Musical','音乐剧','商业巡演','Comedy Theatre','mel-comedy','2026-07-24','2026-10-04','https://marrinergroup.com.au/shows/six-the-musical','A pop-concert retelling of the six queens of Henry VIII.'],
  ['beautiful-noise-mel','A Beautiful Noise','音乐剧','商业巡演','Princess Theatre','mel-princess','2026-08-05','2026-11-07','https://marrinergroup.com.au/shows/a-beautiful-noise','The Neil Diamond musical.'],
  ['sleeping-beauty-mel','The Sleeping Beauty','舞蹈','专业制作','The Australian Ballet','mel-regent','2026-10-09','2026-10-18','https://marrinergroup.com.au/shows/the-australian-ballet-the-sleeping-beauty','The Stuttgart Ballet production presented by The Australian Ballet.'],
  ['la-boheme-mel','La Bohème','歌剧','专业制作','Opera Australia','mel-regent','2026-11-07','2026-11-18','https://marrinergroup.com.au/shows/opera-australia-la-boheme','Puccini’s opera presented by Opera Australia.'],
  ['mrs-doubtfire-mel','Mrs. Doubtfire – The Musical','音乐剧','商业巡演','Mrs. Doubtfire – The Musical','mel-princess','2026-11-25','2027-02-14','https://marrinergroup.com.au/shows/mrs-doubtfire-the-musical','A musical adaptation of the comedy film.'],
  ['opera-up-late-mel','Opera Up Late','歌剧','专业制作','Opera Australia','mel-regent','2026-11-15','2026-11-15','https://marrinergroup.com.au/shows/opera-australia-opera-up-late','A late-night opera and musical theatre performance.'],
  ['trumpet-swan-mel','The Trumpet of the Swan','亲子剧','专业制作','Opera Australia','mel-regent','2026-11-20','2026-11-22','https://marrinergroup.com.au/shows/opera-australia-the-trumpet-of-the-swan','Actors and Orchestra Victoria bring E. B. White’s story to the stage.'],
  ['nutcracker-mel','The Nutcracker','舞蹈','专业制作','BIG Live','mel-regent','2026-12-04','2026-12-31','https://marrinergroup.com.au/shows/the-nutcracker','A festive ballet season at the Regent Theatre.'],
  ['dinosaur-world-mel','Dinosaur World Live','亲子剧','商业巡演','Dinosaur World Live','mel-comedy','2026-12-30','2027-01-03','https://marrinergroup.com.au/shows/dinosaur-world-live','An interactive family theatre experience.'],
  ['dracula-mel','Dracula: Ballet at its Darkest','舞蹈','专业制作',"Her Majesty's Theatre",'mel-her-majestys','2026-10-01','2026-10-25','https://hmt.com.au/dracula-ballet-at-its-darkest/','A dark ballet interpretation of Dracula.'],
  ['koreaboo-mel','Koreaboo','话剧','专业制作','Malthouse Theatre','mel-malthouse','2026-09-24','2026-10-10','https://www.malthousetheatre.com.au/whats-on/season-2026/koreaboo','A contemporary Malthouse Theatre production.'],
  ['all-about-eve-mel','All About Eve','话剧','专业制作','Malthouse Theatre','mel-malthouse','2026-11-20','2026-12-12','https://www.malthousetheatre.com.au/whats-on/season-2026/all-about-eve','A stage adaptation in Malthouse Theatre’s 2026 season.'],
  ['lord-flies-mel','Lord of the Flies','话剧','独立制作','Theatre Works','mel-theatre-works','2026-09-18','2026-10-02','https://www.theatreworks.org.au/2026/lord-of-the-flies','A physical staging of Nigel Williams’s adaptation.'],
  ['young-frankenstein-mel','Young Frankenstein','音乐剧','独立制作','StageBugs Productions','mel-theatre-works','2026-10-08','2026-10-24','https://www.theatreworks.org.au/young-frankenstein','Mel Brooks’s musical comedy at Theatre Works.'],
  ['come-from-away-cloc','Come From Away','音乐剧','社区剧团','CLOC Musical Theatre','mel-national','2026-10-09','2026-10-24','https://www.cloc.org.au/comefromaway2026.html','A return season of CLOC’s community production.'],
  ['steel-magnolias-encore','Steel Magnolias','话剧','社区剧团','Encore Theatre','mel-clayton','2026-10-16','2026-10-25','https://encoretheatre.com.au/steel-magnolias/','Encore Theatre’s community production.'],
  ['switzerland-1812','Switzerland','话剧','社区剧团','1812 Theatre','mel-1812','2026-10-01','2026-10-24','https://www.1812theatre.com.au/2026-season/switzerland/','A play in 1812 Theatre’s bakery space.'],
  ['closer-1812','Closer','话剧','社区剧团','1812 Theatre','mel-1812','2026-10-28','2026-11-08','https://www.1812theatre.com.au/2026-season/closer/','A community production in bakery@1812.'],
  ['murder-announced-1812','A Murder Is Announced','话剧','社区剧团','1812 Theatre','mel-1812','2026-11-12','2026-12-05','https://www.1812theatre.com.au/2026-season/murder-is-announced/','An Agatha Christie mystery at the Lowe Auditorium.'],
  ['cock-mordialloc','Cock','话剧','社区剧团','Mordialloc Theatre Company','mel-shirley-burke','2026-10-22','2026-10-31','https://mordialloctheatre.com.au/','A community theatre season at Shirley Burke Theatre.'],
  ['breaking-walls-mordialloc','Breaking Down All The Walls','话剧','社区剧团','Mordialloc Theatre Company','mel-shirley-burke','2026-12-03','2026-12-12','https://mordialloctheatre.com.au/','A community theatre season at Shirley Burke Theatre.'],
  ['dirty-rotten-malvern','Dirty Rotten Scoundrels','音乐剧','社区剧团','Malvern Theatre Company','mel-malvern','2026-10-23','2026-11-07','https://malverntheatre.com.au/whats-on/shows/','A community production of the musical comedy.']
].map(([id,title,genre,scale,company,venue,start,end,source,desc])=>({id,title,genre,scale,company,venue,start,end,source,booking:source,bookingLabel:'Official tickets / show page',desc,calendarCoverage:'unavailable',sessions:[],dateNeedsReview:false}));
const melBooking={
  'six-mel':'https://premier.ticketek.com.au/Shows/Show.aspx?sh=SIXMUS26',
  'beautiful-noise-mel':'https://premier.ticketek.com.au/shows/show.aspx?sh=ABEAUTN26',
  'sleeping-beauty-mel':'https://premier.ticketek.com.au/shows/show.aspx?sh=SLEEPINB26',
  'mrs-doubtfire-mel':'https://premier.ticketek.com.au/shows/show.aspx?sh=DOUBTFIR26',
  'la-boheme-mel':'https://premier.ticketek.com.au/shows/show.aspx?sh=LABOHEME26',
  'opera-up-late-mel':'https://premier.ticketek.com.au/shows/show.aspx?sh=OAUPLATE26',
  'trumpet-swan-mel':'https://premier.ticketek.com.au/shows/show.aspx?sh=TRUMPET26',
  'dinosaur-world-mel':'https://premier.ticketek.com.au/shows/show.aspx?sh=DINOSWLD26',
  'dracula-mel':'https://premier.ticketek.com.au/shows/show.aspx?sh=DRACULA26',
  'koreaboo-mel':'https://tickets.malthousetheatre.com.au/production/9960',
  'all-about-eve-mel':'https://tickets.malthousetheatre.com.au/production/10023',
  'steel-magnolias-encore':'https://www.trybooking.com/DNNHR'
};
for(const show of MELBOURNE_SHOWS)if(melBooking[show.id]){show.booking=melBooking[show.id];show.bookingLabel='Official tickets';}
const melDescriptionsZh={
  'six-mel':'以流行演唱会形式重述亨利八世六位王后的故事。',
  'beautiful-noise-mel':'以 Neil Diamond 的音乐与人生为主题的音乐剧。',
  'sleeping-beauty-mel':'斯图加特芭蕾舞团演出，澳大利亚芭蕾舞团呈现。',
  'la-boheme-mel':'澳大利亚歌剧团呈现的普契尼歌剧。',
  'mrs-doubtfire-mel':'根据同名喜剧电影改编的音乐剧。',
  'opera-up-late-mel':'融合歌剧、音乐剧与流行音乐的夜间演出。',
  'trumpet-swan-mel':'演员与维州交响乐团共同演绎 E. B. White 的故事。',
  'nutcracker-mel':'Regent Theatre 的节日芭蕾演出。',
  'dinosaur-world-mel':'适合家庭观众参与的互动戏剧。',
  'dracula-mel':'以芭蕾重新演绎《德古拉》。',
  'koreaboo-mel':'Malthouse Theatre 的当代话剧。',
  'all-about-eve-mel':'Malthouse Theatre 2026 演出季的舞台改编作品。',
  'lord-flies-mel':'Nigel Williams 改编作品的形体化舞台呈现。',
  'young-frankenstein-mel':'Mel Brooks 创作的音乐喜剧。',
  'come-from-away-cloc':'CLOC 社区制作重演。',
  'steel-magnolias-encore':'Encore Theatre 的社区话剧制作。',
  'switzerland-1812':'1812 Theatre 在小剧场呈现的心理惊悚话剧。',
  'closer-1812':'1812 Theatre 与 Avid Theatre 联合制作的话剧。',
  'murder-announced-1812':'1812 Theatre 演出的阿加莎·克里斯蒂悬疑剧。',
  'cock-mordialloc':'Mordialloc Theatre Company 的社区制作。',
  'breaking-walls-mordialloc':'在 Shirley Burke Theatre 上演的社区制作。',
  'dirty-rotten-malvern':'Malvern Theatre Company 制作的音乐喜剧。'
};
for(const show of MELBOURNE_SHOWS)show.descZh=melDescriptionsZh[show.id];
const melSpaces={'koreaboo-mel':'Beckett Theatre','all-about-eve-mel':'Merlyn Theatre','switzerland-1812':'bakery@1812','closer-1812':'bakery@1812','murder-announced-1812':'Lowe Auditorium'};
for(const show of MELBOURNE_SHOWS)if(melSpaces[show.id])show.space=melSpaces[show.id];
// Images are shown from their official promotional pages and credited there.
const melOfficialArt={
  'six-mel':'https://cdn.marrinergroup.com.au/strapi/uploads/SIX_406_Event_Page_Banner_1_3840x2160_2102379cb4.jpg',
  'beautiful-noise-mel':'https://cdn.marrinergroup.com.au/strapi/uploads/ABN_Hero_Image_d5989b738e.jpg',
  'sleeping-beauty-mel':'https://cdn.marrinergroup.com.au/strapi/uploads/TSB_hero_3840px_Wx2160px_H_op_87abc89288.jpg',
  'la-boheme-mel':'https://cdn.marrinergroup.com.au/strapi/uploads/LB_hero_noname_3840px_Wx2160px_H_op_74f99e507b.jpg',
  'mrs-doubtfire-mel':'https://cdn.marrinergroup.com.au/strapi/uploads/Mrs_Doubtfire_Hero_Image_No_Name_a700ee296d.jpg',
  'nutcracker-mel':'https://cdn.marrinergroup.com.au/strapi/uploads/Nutcracker_Melbourne_3840x2160_ba747105dd.jpg',
  'dinosaur-world-mel':'https://cdn.marrinergroup.com.au/strapi/uploads/Dinosaur_World_2000x1000_TF_abd9bb27cd.jpg',
  'opera-up-late-mel':'https://cdn.marrinergroup.com.au/strapi/uploads/OUL_Hero_Image_8cb4cad437.jpg',
  'trumpet-swan-mel':'https://cdn.marrinergroup.com.au/strapi/uploads/TOTS_hero_noname_3840px_Wx2160px_H_op_aaccc72097.jpg',
  'dracula-mel':'https://hmt.com.au/wp-content/uploads/2026/07/Dracula-HerMajestysTheatre-HorizontalBannerDesktop-scaled.jpg',
  'koreaboo-mel':'https://cms.malthousetheatre.com.au/media/x4uiqrj2/koreaboo-web-banner.png?anchor=center&format=png&height=340&mode=crop&quality=90&width=768',
  'all-about-eve-mel':'https://cms.malthousetheatre.com.au/media/0ktlbkkn/all-about-eve-web-banner.png?anchor=center&format=png&height=340&mode=crop&quality=90&width=768'
};
for(const show of MELBOURNE_SHOWS)if(melOfficialArt[show.id]){show.image=melOfficialArt[show.id];show.imageSource=show.source;}
const MELBOURNE_VENUE_NOTES_ZH={
  'mel-princess':'大型音乐剧场馆。','mel-regent':'大型音乐剧、芭蕾与歌剧场馆。','mel-comedy':'Marriner Group 旗下的音乐剧与话剧场馆。','mel-her-majestys':'历史悠久的大型剧院。','mel-national':'社区制作与巡演的主要场馆。','mel-theatre-works':'独立话剧与音乐剧场馆。','mel-malthouse':'当代澳洲与国际戏剧。','mel-1812':'设有 Lowe Auditorium 与 bakery@1812 的社区剧院。','mel-shirley-burke':'Mordialloc Theatre Company 的演出场馆。','mel-clayton':'社区剧场演出空间。','mel-malvern':'Malvern Theatre Company 的常驻场馆。'
};
const MELBOURNE_SOURCE_NOTES_ZH={
  'Marriner Group':'Princess、Regent 和 Comedy Theatre 的官方节目与演出页。',"Her Majesty's Theatre":'剧院官方节目。','Malthouse Theatre':'官方演出季。','Theatre Works':'官方节目；有明确公布时记录逐场时间。','CLOC Musical Theatre':'官方演出及逐场时间。','Encore Theatre':'官方演出及售票链接。','1812 Theatre':'官方 2026 演出季。','Mordialloc Theatre Company':'官方节目与场馆信息。','Malvern Theatre Company':'官方节目与售票入口。','Victorian Drama League':'只用于发现，入库前回到制作方官网核实。'
};
const melSessions={
  'young-frankenstein-mel':[['2026-10-08','19:30','Preview'],['2026-10-09','19:30','Preview'],['2026-10-10','19:30',''],['2026-10-11','14:30',''],['2026-10-13','19:30',''],['2026-10-14','19:30',''],['2026-10-15','19:30',''],['2026-10-16','19:30',''],['2026-10-17','19:30',''],['2026-10-18','14:30',''],['2026-10-20','19:30',''],['2026-10-21','19:30',''],['2026-10-22','19:30',''],['2026-10-23','19:30',''],['2026-10-24','19:30','']],
  'come-from-away-cloc':[['2026-10-09','20:00',''],['2026-10-10','20:00',''],['2026-10-11','14:00',''],['2026-10-14','20:00',''],['2026-10-15','20:00',''],['2026-10-16','20:00',''],['2026-10-17','20:00',''],['2026-10-18','14:00',''],['2026-10-21','20:00',''],['2026-10-22','20:00',''],['2026-10-23','20:00',''],['2026-10-24','14:00','']],
  'steel-magnolias-encore':[['2026-10-16','20:00',''],['2026-10-17','20:00',''],['2026-10-18','14:00',''],['2026-10-22','20:00',''],['2026-10-23','20:00',''],['2026-10-24','14:00',''],['2026-10-24','20:00',''],['2026-10-25','14:00','']]
};
for(const show of MELBOURNE_SHOWS){if(melSessions[show.id]){show.sessions=melSessions[show.id];show.calendarCoverage='published';show.calendarCheckedAt='2026-09-26T12:00:00+10:00';show.calendarSource=show.source;}}
const MELBOURNE_SOURCES=[
  {name:'Marriner Group',url:'https://marrinergroup.com.au/whats-on',type:'Major venues',note:'Princess, Regent and Comedy Theatre programmes; official show pages.'},
  {name:"Her Majesty's Theatre",url:'https://hmt.com.au/',type:'Major venue',note:'Official theatre programme.'},
  {name:'Malthouse Theatre',url:'https://www.malthousetheatre.com.au/',type:'Professional theatre',note:'Official season list.'},
  {name:'Theatre Works',url:'https://www.theatreworks.org.au/whats-on',type:'Independent theatre',note:'Official shows and explicit dates where published.'},
  {name:'CLOC Musical Theatre',url:'https://www.cloc.org.au/comefromaway2026.html',type:'Community company',note:'Official show and performance dates.'},
  {name:'Encore Theatre',url:'https://encoretheatre.com.au/steel-magnolias/',type:'Community company',note:'Official show and booking link.'},
  {name:'1812 Theatre',url:'https://www.1812theatre.com.au/2026-season/',type:'Community company',note:'Official 2026 season.'},
  {name:'Mordialloc Theatre Company',url:'https://mordialloctheatre.com.au/',type:'Community company',note:'Official programme and venue.'},
  {name:'Malvern Theatre Company',url:'https://malverntheatre.com.au/whats-on/shows/',type:'Community company',note:'Official programme and booking.'},
  {name:'Victorian Drama League',url:'https://vdl.org.au/whats-on/',type:'Discovery directory',note:'Used for discovery; individual entries checked against the producer.'}
];

// Official-source expansion reviewed 26 September 2026. No inferred weekly calendars.
MELBOURNE_VENUES.push(...[
  {
    "id": "mel-explosives",
    "name": "Explosives Factory",
    "area": "St Kilda",
    "address": "Rear Laneway, 67 Inkerman Street, St Kilda VIC 3182",
    "url": "https://www.theatreworks.org.au/explosives-factory",
    "programme": "https://www.theatreworks.org.au/explosives-factory",
    "note": "Theatre Works’ intimate venue; stair access only."
  },
  {
    "id": "mel-lamama-hq",
    "name": "La Mama HQ",
    "area": "Carlton",
    "address": "205 Faraday Street, Carlton VIC 3053",
    "url": "https://www.lamama.com.au/your-visit/venue-information",
    "programme": "https://www.lamama.com.au/your-visit/venue-information",
    "note": "Independent theatre at La Mama’s Faraday Street home."
  },
  {
    "id": "mel-lamama-courthouse",
    "name": "La Mama Courthouse",
    "area": "Carlton",
    "address": "349 Drummond Street, Carlton VIC 3053",
    "url": "https://www.lamama.com.au/your-visit/venue-information",
    "programme": "https://www.lamama.com.au/your-visit/venue-information",
    "note": "La Mama’s separate Courthouse venue."
  },
  {
    "id": "mel-chapel",
    "name": "Chapel Off Chapel",
    "area": "Prahran",
    "address": "12 Little Chapel Street, Prahran VIC 3181",
    "url": "https://chapeloffchapel.com.au/",
    "programme": "https://chapeloffchapel.com.au/",
    "note": "The Chapel and The Loft host musicals, dance and theatre."
  },
  {
    "id": "mel-state",
    "name": "Ian Potter State Theatre",
    "area": "Melbourne Arts Precinct",
    "address": "100 St Kilda Road, Melbourne VIC 3004",
    "url": "https://www.artscentremelbourne.com.au/visit/theatres-and-spaces/ian-potter-state-theatre",
    "programme": "https://www.artscentremelbourne.com.au/visit/theatres-and-spaces/ian-potter-state-theatre",
    "note": "Arts Centre Melbourne’s major stage for musicals, opera and ballet."
  },
  {
    "id": "mel-fortyfive",
    "name": "fortyfivedownstairs",
    "area": "Melbourne CBD",
    "address": "45 Flinders Lane, Melbourne VIC 3000",
    "url": "https://fortyfivedownstairs.com/contact-us/",
    "programme": "https://fortyfivedownstairs.com/contact-us/",
    "note": "Independent theatre and gallery; theatre listings only."
  },
  {
    "id": "mel-mccomas",
    "name": "Geoffrey McComas Theatre",
    "area": "Hawthorn",
    "address": "1 Morrison Street, Hawthorn VIC 3122",
    "url": "https://osmad.com.au/titanic",
    "programme": "https://osmad.com.au/titanic",
    "note": "Performance venue for OSMaD’s Titanic."
  },
  {
    "id": "mel-redstitch",
    "name": "Red Stitch Actors’ Theatre",
    "area": "St Kilda East",
    "address": "Rear 2 Chapel Street, St Kilda East VIC 3183",
    "url": "https://www.redstitch.net/st-kilda-venue",
    "programme": "https://www.redstitch.net/st-kilda-venue",
    "note": "Intimate contemporary theatre behind All Saints Church."
  },
  {
    "id": "mel-brighton",
    "name": "Brighton Theatre Company",
    "area": "Brighton",
    "address": "Corner Wilson & Carpenter Streets, Brighton VIC 3186",
    "url": "https://brightontheatre.com.au/",
    "programme": "https://brightontheatre.com.au/",
    "note": "Resident community theatre in Brighton."
  }
]);
Object.assign(MELBOURNE_VENUE_NOTES_ZH,{
  "mel-explosives": "Theatre Works 的小剧场；仅可经楼梯进入。",
  "mel-lamama-hq": "La Mama 位于 Faraday Street 的独立剧场。",
  "mel-lamama-courthouse": "La Mama 位于 Drummond Street 的独立场馆。",
  "mel-chapel": "设有 The Chapel 和 The Loft，呈现音乐剧、舞蹈与戏剧。",
  "mel-state": "Arts Centre Melbourne 的大型音乐剧、歌剧与芭蕾舞台。",
  "mel-fortyfive": "独立剧场与画廊；本目录仅收录舞台演出。",
  "mel-mccomas": "OSMaD《泰坦尼克号》音乐剧的演出场馆。",
  "mel-redstitch": "位于 All Saints Church 后方的当代戏剧小剧场。",
  "mel-brighton": "Brighton 的常驻社区剧院。"
});
MELBOURNE_SHOWS.push(...[
  {
    "id": "stay-married-mel",
    "title": "How to Stay Married Without Exploding!",
    "genre": "话剧",
    "scale": "独立制作",
    "company": "The Šimić Theatre Co. and Theatre Works",
    "venue": "mel-explosives",
    "start": "2026-09-29",
    "end": "2026-10-03",
    "source": "https://www.theatreworks.org.au/2026/how-to-stay-married",
    "booking": "https://www.theatreworks.org.au/2026/how-to-stay-married",
    "bookingLabel": "Official tickets / show page",
    "desc": "A solo performance by Matthew J Young about marriage.",
    "descZh": "Matthew J Young 关于婚姻的独角戏。",
    "calendarCoverage": "published",
    "sessions": [
      [
        "2026-09-29",
        "18:00",
        ""
      ],
      [
        "2026-09-30",
        "18:00",
        ""
      ],
      [
        "2026-10-01",
        "18:00",
        ""
      ],
      [
        "2026-10-02",
        "18:00",
        ""
      ],
      [
        "2026-10-03",
        "18:00",
        ""
      ]
    ],
    "dateNeedsReview": false,
    "checkedAt": "2026-09-26",
    "calendarCheckedAt": "2026-09-26T02:00:00+10:00",
    "calendarSource": "https://www.theatreworks.org.au/2026/how-to-stay-married"
  },
  {
    "id": "anxiety-bakes-mel",
    "title": "My Anxiety is a B*tch Who Bakes",
    "genre": "话剧",
    "scale": "独立制作",
    "company": "Theatre Works / Kasey Barratt",
    "venue": "mel-explosives",
    "start": "2026-09-29",
    "end": "2026-10-03",
    "source": "https://www.theatreworks.org.au/2026/my-anxiety-is-a-b-who-bakes",
    "booking": "https://www.theatreworks.org.au/2026/my-anxiety-is-a-b-who-bakes",
    "bookingLabel": "Official tickets / show page",
    "desc": "Kasey Barratt’s Fringe theatre work.",
    "descZh": "Kasey Barratt 在 Fringe 呈现的戏剧作品。",
    "calendarCoverage": "published",
    "sessions": [
      [
        "2026-09-29",
        "19:30",
        ""
      ],
      [
        "2026-09-30",
        "19:30",
        ""
      ],
      [
        "2026-10-01",
        "19:30",
        ""
      ],
      [
        "2026-10-02",
        "19:30",
        ""
      ],
      [
        "2026-10-03",
        "19:30",
        ""
      ]
    ],
    "dateNeedsReview": false,
    "checkedAt": "2026-09-26",
    "calendarCheckedAt": "2026-09-26T02:00:00+10:00",
    "calendarSource": "https://www.theatreworks.org.au/2026/my-anxiety-is-a-b-who-bakes"
  },
  {
    "id": "fairytalers-mel",
    "title": "Fairytalers",
    "genre": "话剧",
    "scale": "独立制作",
    "company": "Theatre Works / Ellis Austin Finnie",
    "venue": "mel-explosives",
    "start": "2026-09-29",
    "end": "2026-10-03",
    "source": "https://www.theatreworks.org.au/2026/fairytalers",
    "booking": "https://www.theatreworks.org.au/2026/fairytalers",
    "bookingLabel": "Official tickets / show page",
    "desc": "A Fringe theatre work by Ellis Austin Finnie.",
    "descZh": "Ellis Austin Finnie 创作的 Fringe 戏剧。",
    "calendarCoverage": "unavailable",
    "sessions": [],
    "dateNeedsReview": false,
    "checkedAt": "2026-09-26"
  },
  {
    "id": "noah-skape-mel",
    "title": "Noah Skape’s Human Entertainment",
    "genre": "音乐剧",
    "scale": "独立制作",
    "company": "Theatre Works / Noah Skape",
    "venue": "mel-explosives",
    "start": "2026-10-06",
    "end": "2026-10-10",
    "source": "https://www.theatreworks.org.au/2026/noah-skape%27s-human-entertainment",
    "booking": "https://www.theatreworks.org.au/2026/noah-skape%27s-human-entertainment",
    "bookingLabel": "Official tickets / show page",
    "desc": "A solo punk-rock operetta about identity and belonging.",
    "descZh": "关于身份与归属的单人朋克摇滚音乐戏剧。",
    "calendarCoverage": "published",
    "sessions": [
      [
        "2026-10-06",
        "17:45",
        ""
      ],
      [
        "2026-10-07",
        "17:45",
        ""
      ],
      [
        "2026-10-08",
        "17:45",
        ""
      ],
      [
        "2026-10-09",
        "17:45",
        ""
      ],
      [
        "2026-10-10",
        "17:45",
        ""
      ]
    ],
    "dateNeedsReview": false,
    "checkedAt": "2026-09-26",
    "calendarCheckedAt": "2026-09-26T02:00:00+10:00",
    "calendarSource": "https://www.theatreworks.org.au/2026/noah-skape%27s-human-entertainment"
  },
  {
    "id": "girlhood-bathroom-mel",
    "title": "Girlhood in the Bathroom",
    "genre": "音乐剧",
    "scale": "独立制作",
    "company": "Girlhood Productions",
    "venue": "mel-explosives",
    "start": "2026-10-06",
    "end": "2026-10-10",
    "source": "https://www.theatreworks.org.au/2026/girlhood-in-the-bathroom",
    "booking": "https://www.theatreworks.org.au/2026/girlhood-in-the-bathroom",
    "bookingLabel": "Official tickets / show page",
    "desc": "An independent musical at the Theatre Works Fringe hub.",
    "descZh": "Theatre Works Fringe 单元的独立音乐剧。",
    "calendarCoverage": "unavailable",
    "sessions": [],
    "dateNeedsReview": false,
    "checkedAt": "2026-09-26"
  },
  {
    "id": "squizzy-mel",
    "title": "Young Squizzy & McRizz: The World Tour",
    "genre": "音乐剧",
    "scale": "独立制作",
    "company": "Louis Prandolini and Hugo Postregna",
    "venue": "mel-explosives",
    "start": "2026-10-06",
    "end": "2026-10-10",
    "source": "https://www.theatreworks.org.au/2026/young-squizzy-%26-mcrizz%3A-the-world-tour",
    "booking": "https://www.theatreworks.org.au/2026/young-squizzy-%26-mcrizz%3A-the-world-tour",
    "bookingLabel": "Official tickets / show page",
    "desc": "A theatrical hip-hop story told through a fictional world tour.",
    "descZh": "以虚构世界巡演讲述故事的嘻哈音乐戏剧。",
    "calendarCoverage": "published",
    "sessions": [
      [
        "2026-10-06",
        "21:00",
        ""
      ],
      [
        "2026-10-07",
        "21:00",
        ""
      ],
      [
        "2026-10-08",
        "21:00",
        ""
      ],
      [
        "2026-10-09",
        "21:00",
        ""
      ],
      [
        "2026-10-10",
        "21:00",
        ""
      ]
    ],
    "dateNeedsReview": false,
    "checkedAt": "2026-09-26",
    "calendarCheckedAt": "2026-09-26T02:00:00+10:00",
    "calendarSource": "https://www.theatreworks.org.au/2026/young-squizzy-%26-mcrizz%3A-the-world-tour"
  },
  {
    "id": "na-iba-mel",
    "title": "NA-IBA: The Other, A Look at Medea",
    "genre": "话剧",
    "scale": "独立制作",
    "company": "Divergent Theatre Collective",
    "venue": "mel-explosives",
    "start": "2026-10-15",
    "end": "2026-10-17",
    "source": "https://www.theatreworks.org.au/2026/na-iba%3A-the-other%2C-a-look-at-medea",
    "booking": "https://www.theatreworks.org.au/2026/na-iba%3A-the-other%2C-a-look-at-medea",
    "bookingLabel": "Official tickets / show page",
    "desc": "A physical theatre response to Medea.",
    "descZh": "以形体戏剧重新审视《美狄亚》。",
    "calendarCoverage": "published",
    "sessions": [
      [
        "2026-10-15",
        "18:15",
        ""
      ],
      [
        "2026-10-16",
        "18:15",
        ""
      ],
      [
        "2026-10-17",
        "18:15",
        ""
      ]
    ],
    "dateNeedsReview": false,
    "checkedAt": "2026-09-26",
    "calendarCheckedAt": "2026-09-26T02:00:00+10:00",
    "calendarSource": "https://www.theatreworks.org.au/2026/na-iba%3A-the-other%2C-a-look-at-medea"
  },
  {
    "id": "crapbox-mel",
    "title": "Crapbox + Early Morning",
    "genre": "话剧",
    "scale": "独立制作",
    "company": "Tandango Productions and Theatre Works",
    "venue": "mel-explosives",
    "start": "2026-10-27",
    "end": "2026-11-07",
    "source": "https://www.theatreworks.org.au/2026/crapbox",
    "booking": "https://www.theatreworks.org.au/2026/crapbox",
    "bookingLabel": "Official tickets / show page",
    "desc": "An independent theatre programme at Explosives Factory.",
    "descZh": "Explosives Factory 呈现的独立戏剧节目。",
    "calendarCoverage": "unavailable",
    "sessions": [],
    "dateNeedsReview": false,
    "checkedAt": "2026-09-26"
  },
  {
    "id": "timon-mel",
    "title": "Timon of Athens",
    "genre": "话剧",
    "scale": "独立制作",
    "company": "Theatre Works",
    "venue": "mel-theatre-works",
    "start": "2026-10-28",
    "end": "2026-11-07",
    "source": "https://www.theatreworks.org.au/2026/timon-of-athens",
    "booking": "https://www.theatreworks.org.au/2026/timon-of-athens",
    "bookingLabel": "Official tickets / show page",
    "desc": "A staging of Shakespeare and Middleton’s play.",
    "descZh": "莎士比亚与米德尔顿作品的舞台呈现。",
    "calendarCoverage": "unavailable",
    "sessions": [],
    "dateNeedsReview": false,
    "checkedAt": "2026-09-26"
  },
  {
    "id": "cruise-mel",
    "title": "Cruise",
    "genre": "话剧",
    "scale": "独立制作",
    "company": "Theatre Works",
    "venue": "mel-theatre-works",
    "start": "2026-11-11",
    "end": "2026-11-21",
    "source": "https://www.theatreworks.org.au/2026/cruise",
    "booking": "https://www.theatreworks.org.au/2026/cruise",
    "bookingLabel": "Official tickets / show page",
    "desc": "Jack Holden’s play at Theatre Works.",
    "descZh": "Theatre Works 上演 Jack Holden 的话剧。",
    "calendarCoverage": "unavailable",
    "sessions": [],
    "dateNeedsReview": false,
    "checkedAt": "2026-09-26"
  },
  {
    "id": "smoke-mel",
    "title": "Smoke",
    "genre": "话剧",
    "scale": "独立制作",
    "company": "Theatre Works / Hugo Gutteridge",
    "venue": "mel-explosives",
    "start": "2026-11-18",
    "end": "2026-11-28",
    "source": "https://www.theatreworks.org.au/2026/smoke",
    "booking": "https://www.theatreworks.org.au/2026/smoke",
    "bookingLabel": "Official tickets / show page",
    "desc": "A play by Hugo Gutteridge.",
    "descZh": "Hugo Gutteridge 创作的话剧。",
    "calendarCoverage": "unavailable",
    "sessions": [],
    "dateNeedsReview": false,
    "checkedAt": "2026-09-26"
  },
  {
    "id": "engineer-snow-mel",
    "title": "The Engineer in the Snow",
    "genre": "话剧",
    "scale": "独立制作",
    "company": "Theatre Works / Sandra Fiona Long",
    "venue": "mel-theatre-works",
    "start": "2026-12-08",
    "end": "2026-12-17",
    "source": "https://www.theatreworks.org.au/2026/engineer-in-the-snow",
    "booking": "https://www.theatreworks.org.au/2026/engineer-in-the-snow",
    "bookingLabel": "Official tickets / show page",
    "desc": "A theatre work by Sandra Fiona Long.",
    "descZh": "Sandra Fiona Long 创作的戏剧作品。",
    "calendarCoverage": "unavailable",
    "sessions": [],
    "dateNeedsReview": false,
    "checkedAt": "2026-09-26"
  },
  {
    "id": "trash-wizard-mel",
    "title": "Trash Wizard",
    "genre": "话剧",
    "scale": "独立制作",
    "company": "Extraterrestrial",
    "venue": "mel-lamama-hq",
    "start": "2026-09-29",
    "end": "2026-10-04",
    "source": "https://www.lamama.com.au/whats-on/melbourne-fringe-festival-2026/trash-wizard",
    "booking": "https://www.lamama.com.au/whats-on/melbourne-fringe-festival-2026/trash-wizard",
    "bookingLabel": "Official tickets / show page",
    "desc": "Puppetry and theatre at La Mama’s Fringe season.",
    "descZh": "La Mama Fringe 演出季的木偶与戏剧作品。",
    "calendarCoverage": "unavailable",
    "sessions": [],
    "dateNeedsReview": false,
    "checkedAt": "2026-09-26"
  },
  {
    "id": "exhibit-mel",
    "title": "EXHIBIT",
    "genre": "舞蹈",
    "scale": "独立制作",
    "company": "Hawkins & Prowd",
    "venue": "mel-lamama-courthouse",
    "start": "2026-09-30",
    "end": "2026-10-04",
    "source": "https://www.lamama.com.au/whats-on/melbourne-fringe-festival-2026/exhibit",
    "booking": "https://www.lamama.com.au/whats-on/melbourne-fringe-festival-2026/exhibit",
    "bookingLabel": "Official tickets / show page",
    "desc": "A physical performance by Hawkins & Prowd.",
    "descZh": "Hawkins & Prowd 呈现的形体表演。",
    "calendarCoverage": "unavailable",
    "sessions": [],
    "dateNeedsReview": false,
    "checkedAt": "2026-09-26"
  },
  {
    "id": "totos-song-mel",
    "title": "Toto’s Song",
    "genre": "话剧",
    "scale": "独立制作",
    "company": "La Mama",
    "venue": "mel-lamama-hq",
    "start": "2026-10-06",
    "end": "2026-10-11",
    "source": "https://www.lamama.com.au/whats-on/melbourne-fringe-festival-2026/totos-song",
    "booking": "https://www.lamama.com.au/whats-on/melbourne-fringe-festival-2026/totos-song",
    "bookingLabel": "Official tickets / show page",
    "desc": "A play by Emma Fawcett, directed by Kate Fryer.",
    "descZh": "Emma Fawcett 编剧、Kate Fryer 执导的话剧。",
    "calendarCoverage": "unavailable",
    "sessions": [],
    "dateNeedsReview": false,
    "checkedAt": "2026-09-26"
  },
  {
    "id": "parasocial-mel",
    "title": "Parasocial",
    "genre": "音乐剧",
    "scale": "独立制作",
    "company": "Emerson Brophy",
    "venue": "mel-lamama-courthouse",
    "start": "2026-10-06",
    "end": "2026-10-11",
    "source": "https://www.lamama.com.au/whats-on/melbourne-fringe-festival-2026/parasocial",
    "booking": "https://www.lamama.com.au/whats-on/melbourne-fringe-festival-2026/parasocial",
    "bookingLabel": "Official tickets / show page",
    "desc": "Emerson Brophy’s solo musical comedy.",
    "descZh": "Emerson Brophy 的单人音乐喜剧。",
    "calendarCoverage": "unavailable",
    "sessions": [],
    "dateNeedsReview": false,
    "checkedAt": "2026-09-26"
  },
  {
    "id": "wrong-way-mel",
    "title": "Wrong Way Grow Back",
    "genre": "喜剧",
    "scale": "独立制作",
    "company": "Ben Grant",
    "venue": "mel-lamama-hq",
    "start": "2026-10-13",
    "end": "2026-10-18",
    "source": "https://www.lamama.com.au/whats-on/melbourne-fringe-festival-2026/wrong-way-grow-back",
    "booking": "https://www.lamama.com.au/whats-on/melbourne-fringe-festival-2026/wrong-way-grow-back",
    "bookingLabel": "Official tickets / show page",
    "desc": "A solo comedy by Ben Grant.",
    "descZh": "Ben Grant 的单人喜剧。",
    "calendarCoverage": "unavailable",
    "sessions": [],
    "dateNeedsReview": false,
    "checkedAt": "2026-09-26"
  },
  {
    "id": "red-mel",
    "title": "RED",
    "genre": "话剧",
    "scale": "独立制作",
    "company": "Rollercoaster Theatre",
    "venue": "mel-lamama-courthouse",
    "start": "2026-10-14",
    "end": "2026-10-18",
    "source": "https://www.lamama.com.au/whats-on/melbourne-fringe-festival-2026/red",
    "booking": "https://www.lamama.com.au/whats-on/melbourne-fringe-festival-2026/red",
    "bookingLabel": "Official tickets / show page",
    "desc": "An ensemble theatre work from Rollercoaster Theatre.",
    "descZh": "Rollercoaster Theatre 的群体创作戏剧。",
    "calendarCoverage": "unavailable",
    "sessions": [],
    "dateNeedsReview": false,
    "checkedAt": "2026-09-26"
  },
  {
    "id": "melancholia-mel",
    "title": "Melancholia",
    "genre": "舞蹈",
    "scale": "独立制作",
    "company": "Studio Stocks",
    "venue": "mel-chapel",
    "start": "2026-10-01",
    "end": "2026-10-03",
    "source": "https://chapeloffchapel.com.au/show/melancholia-2/",
    "booking": "https://chapeloffchapel.com.au/show/melancholia-2/",
    "bookingLabel": "Official tickets / show page",
    "desc": "Tap and contemporary dance exploring grief and hope.",
    "descZh": "通过踢踏舞与当代舞探索悲伤与希望。",
    "calendarCoverage": "published",
    "sessions": [
      [
        "2026-10-01",
        "20:00",
        ""
      ],
      [
        "2026-10-02",
        "20:00",
        ""
      ],
      [
        "2026-10-03",
        "20:00",
        ""
      ]
    ],
    "dateNeedsReview": false,
    "checkedAt": "2026-09-26",
    "space": "The Chapel",
    "calendarCheckedAt": "2026-09-26T02:00:00+10:00",
    "calendarSource": "https://chapeloffchapel.com.au/show/melancholia-2/"
  },
  {
    "id": "showmance-mel",
    "title": "The Showmance Must Go On",
    "genre": "音乐剧",
    "scale": "社区剧团",
    "company": "University of Melbourne Music Theatre Association",
    "venue": "mel-chapel",
    "start": "2026-10-01",
    "end": "2026-10-03",
    "source": "https://chapeloffchapel.com.au/show/the-showmance-must-go-on/",
    "booking": "https://chapeloffchapel.com.au/show/the-showmance-must-go-on/",
    "bookingLabel": "Official tickets / show page",
    "desc": "A student-run musical about backstage relationships in community theatre.",
    "descZh": "学生剧团制作的音乐剧，讲述社区剧场后台的情感关系。",
    "calendarCoverage": "published",
    "sessions": [
      [
        "2026-10-01",
        "19:00",
        ""
      ],
      [
        "2026-10-02",
        "19:00",
        "Captioned"
      ],
      [
        "2026-10-03",
        "13:00",
        "Captioned"
      ],
      [
        "2026-10-03",
        "19:00",
        ""
      ]
    ],
    "dateNeedsReview": false,
    "checkedAt": "2026-09-26",
    "space": "The Loft",
    "calendarCheckedAt": "2026-09-26T02:00:00+10:00",
    "calendarSource": "https://chapeloffchapel.com.au/show/the-showmance-must-go-on/"
  },
  {
    "id": "mayfair-mel",
    "title": "Mayfair: A New Musical",
    "genre": "音乐剧",
    "scale": "独立制作",
    "company": "Roundhouse Theatrical Co.",
    "venue": "mel-chapel",
    "start": "2026-10-14",
    "end": "2026-10-24",
    "source": "https://chapeloffchapel.com.au/show/mayfair-a-new-musical/",
    "booking": "https://chapeloffchapel.com.au/show/mayfair-a-new-musical/",
    "bookingLabel": "Official tickets / show page",
    "desc": "A new independent musical in The Loft.",
    "descZh": "在 The Loft 上演的原创独立音乐剧。",
    "calendarCoverage": "published",
    "sessions": [
      [
        "2026-10-14",
        "19:30",
        "Preview"
      ],
      [
        "2026-10-15",
        "19:30",
        "Opening"
      ],
      [
        "2026-10-16",
        "19:30",
        ""
      ],
      [
        "2026-10-17",
        "14:30",
        ""
      ],
      [
        "2026-10-17",
        "19:30",
        ""
      ],
      [
        "2026-10-18",
        "17:00",
        ""
      ],
      [
        "2026-10-21",
        "19:30",
        ""
      ],
      [
        "2026-10-22",
        "19:30",
        ""
      ],
      [
        "2026-10-23",
        "19:30",
        ""
      ],
      [
        "2026-10-24",
        "14:30",
        ""
      ],
      [
        "2026-10-24",
        "19:30",
        ""
      ]
    ],
    "dateNeedsReview": false,
    "checkedAt": "2026-09-26",
    "space": "The Loft",
    "calendarCheckedAt": "2026-09-26T02:00:00+10:00",
    "calendarSource": "https://chapeloffchapel.com.au/show/mayfair-a-new-musical/"
  },
  {
    "id": "american-psycho-mel",
    "title": "American Psycho: A Musical Thriller",
    "genre": "音乐剧",
    "scale": "独立制作",
    "company": "See You Sunday",
    "venue": "mel-chapel",
    "start": "2026-10-29",
    "end": "2026-11-21",
    "source": "https://chapeloffchapel.com.au/show/american-psycho-a-musical-thriller/",
    "booking": "https://chapeloffchapel.com.au/show/american-psycho-a-musical-thriller/",
    "bookingLabel": "Official tickets / show page",
    "desc": "A musical thriller presented by See You Sunday.",
    "descZh": "See You Sunday 呈现的惊悚音乐剧。",
    "calendarCoverage": "unavailable",
    "sessions": [],
    "dateNeedsReview": false,
    "checkedAt": "2026-09-26",
    "space": "The Chapel"
  },
  {
    "id": "my-fair-lady-mel",
    "title": "My Fair Lady",
    "genre": "音乐剧",
    "scale": "商业巡演",
    "company": "Opera Australia and Crossroads Live",
    "venue": "mel-state",
    "start": "2026-11-14",
    "end": "2027-01-17",
    "source": "https://opera.org.au/productions/my-fair-lady-melbourne",
    "booking": "https://opera.org.au/productions/my-fair-lady-melbourne",
    "bookingLabel": "Official tickets / show page",
    "desc": "The classic musical at Arts Centre Melbourne.",
    "descZh": "在 Arts Centre Melbourne 上演的经典音乐剧。",
    "calendarCoverage": "unavailable",
    "sessions": [],
    "dateNeedsReview": false,
    "checkedAt": "2026-09-26"
  },
  {
    "id": "rhomboid-mel",
    "title": "Rhomboid",
    "genre": "话剧",
    "scale": "独立制作",
    "company": "fortyfivedownstairs",
    "venue": "mel-fortyfive",
    "start": "2026-10-01",
    "end": "2026-10-11",
    "source": "https://fortyfivedownstairs.com/event/rhomboid/",
    "booking": "https://fortyfivedownstairs.com/event/rhomboid/",
    "bookingLabel": "Official tickets / show page",
    "desc": "Eric Jiang’s play, directed by Margot Morales.",
    "descZh": "Eric Jiang 编剧、Margot Morales 执导的话剧。",
    "calendarCoverage": "unavailable",
    "sessions": [],
    "dateNeedsReview": false,
    "checkedAt": "2026-09-26"
  },
  {
    "id": "never-closer-mel",
    "title": "Never Closer",
    "genre": "话剧",
    "scale": "独立制作",
    "company": "Patalog Theatre",
    "venue": "mel-fortyfive",
    "start": "2026-10-15",
    "end": "2026-11-01",
    "source": "https://fortyfivedownstairs.com/event/never-closer/",
    "booking": "https://fortyfivedownstairs.com/event/never-closer/",
    "bookingLabel": "Official tickets / show page",
    "desc": "Patalog Theatre presents Grace Chapple’s play.",
    "descZh": "Patalog Theatre 呈现 Grace Chapple 的话剧。",
    "calendarCoverage": "unavailable",
    "sessions": [],
    "dateNeedsReview": false,
    "checkedAt": "2026-09-26"
  },
  {
    "id": "titanic-osmad",
    "title": "Titanic the Musical",
    "genre": "音乐剧",
    "scale": "社区剧团",
    "company": "OSMaD",
    "venue": "mel-mccomas",
    "start": "2026-12-03",
    "end": "2026-12-12",
    "source": "https://osmad.com.au/titanic",
    "booking": "https://osmad.com.au/titanic",
    "bookingLabel": "Official tickets / show page",
    "desc": "OSMaD’s community musical production; dates include the preview.",
    "descZh": "OSMaD 的社区音乐剧制作；演期包含预演。",
    "calendarCoverage": "published",
    "sessions": [
      [
        "2026-12-03",
        "19:30",
        "Preview"
      ],
      [
        "2026-12-04",
        "19:30",
        "Opening"
      ],
      [
        "2026-12-05",
        "19:30",
        ""
      ],
      [
        "2026-12-06",
        "17:00",
        ""
      ],
      [
        "2026-12-09",
        "19:30",
        ""
      ],
      [
        "2026-12-10",
        "19:30",
        ""
      ],
      [
        "2026-12-11",
        "19:30",
        ""
      ],
      [
        "2026-12-12",
        "14:00",
        ""
      ],
      [
        "2026-12-12",
        "19:30",
        ""
      ]
    ],
    "dateNeedsReview": false,
    "checkedAt": "2026-09-26",
    "calendarCheckedAt": "2026-09-26T02:00:00+10:00",
    "calendarSource": "https://osmad.com.au/tickets"
  },
  {
    "id": "luke-mel",
    "title": "LUKE",
    "genre": "话剧",
    "scale": "专业制作",
    "company": "Red Stitch Actors’ Theatre",
    "venue": "mel-redstitch",
    "start": "2026-09-12",
    "end": "2026-10-11",
    "source": "https://www.redstitch.net/luke-2026",
    "booking": "https://www.redstitch.net/luke-2026",
    "bookingLabel": "Official tickets / show page",
    "desc": "Red Stitch’s 2026 production; dates include previews from 12 September.",
    "descZh": "Red Stitch 2026 演出季作品；演期包含 9 月 12 日起的预演。",
    "calendarCoverage": "unavailable",
    "sessions": [],
    "dateNeedsReview": false,
    "checkedAt": "2026-09-26"
  },
  {
    "id": "carbon-mel",
    "title": "CARBON",
    "genre": "话剧",
    "scale": "专业制作",
    "company": "Red Stitch Actors’ Theatre",
    "venue": "mel-redstitch",
    "start": "2026-11-07",
    "end": "2026-12-06",
    "source": "https://www.redstitch.net/carbon-2026",
    "booking": "https://www.redstitch.net/carbon-2026",
    "bookingLabel": "Official tickets / show page",
    "desc": "Red Stitch’s 2026 production; dates include previews from 7 November.",
    "descZh": "Red Stitch 2026 演出季作品；演期包含 11 月 7 日起的预演。",
    "calendarCoverage": "unavailable",
    "sessions": [],
    "dateNeedsReview": false,
    "checkedAt": "2026-09-26"
  },
  {
    "id": "kindness-brighton",
    "title": "A Simple Act of Kindness",
    "genre": "话剧",
    "scale": "社区剧团",
    "company": "Brighton Theatre Company",
    "venue": "mel-brighton",
    "start": "2026-11-06",
    "end": "2026-11-21",
    "source": "https://brightontheatre.com.au/project/season-4-a-simple-act-of-kindness/",
    "booking": "https://brightontheatre.com.au/project/season-4-a-simple-act-of-kindness/",
    "bookingLabel": "Official tickets / show page",
    "desc": "Ross Mueller’s family comedy, directed by Blake Stringer.",
    "descZh": "Ross Mueller 创作的家庭喜剧，Blake Stringer 执导。",
    "calendarCoverage": "unavailable",
    "sessions": [],
    "dateNeedsReview": false,
    "checkedAt": "2026-09-26"
  }
]);
MELBOURNE_SOURCES.push(...[
  {
    "name": "La Mama",
    "url": "https://www.lamama.com.au/whats-on",
    "type": "Independent theatre",
    "note": "Official programme; HQ and Courthouse listed separately."
  },
  {
    "name": "Chapel Off Chapel",
    "url": "https://chapeloffchapel.com.au/",
    "type": "Independent theatre",
    "note": "Official theatre, dance and musical listings."
  },
  {
    "name": "Opera Australia — Melbourne",
    "url": "https://opera.org.au/productions/my-fair-lady-melbourne",
    "type": "Major productions",
    "note": "Official Melbourne production dates."
  },
  {
    "name": "fortyfivedownstairs",
    "url": "https://fortyfivedownstairs.com/",
    "type": "Independent theatre",
    "note": "Theatre programme only; gallery exhibitions excluded."
  },
  {
    "name": "OSMaD",
    "url": "https://osmad.com.au/tickets",
    "type": "Community company",
    "note": "Official show and explicit performance times."
  },
  {
    "name": "Red Stitch Actors’ Theatre",
    "url": "https://www.redstitch.net/",
    "type": "Professional theatre",
    "note": "Official production dates including previews."
  },
  {
    "name": "Brighton Theatre Company",
    "url": "https://brightontheatre.com.au/",
    "type": "Community company",
    "note": "Official season and venue."
  }
]);
Object.assign(MELBOURNE_SOURCE_NOTES_ZH,{
  "La Mama": "官方节目；HQ 与 Courthouse 分开列为场馆。",
  "Chapel Off Chapel": "官方话剧、舞蹈及音乐剧节目。",
  "Opera Australia — Melbourne": "官方墨尔本演出日期。",
  "fortyfivedownstairs": "仅收录舞台节目，不含画廊展览。",
  "OSMaD": "官方节目及明确公布的逐场时间。",
  "Red Stitch Actors’ Theatre": "官方演期，包含预演。",
  "Brighton Theatre Company": "官方演出季与场馆资料。"
});

// MTC, Victorian Opera and Australian Ballet official-source review, 26 September 2026.
MELBOURNE_VENUES.push(...[
  {
    "id": "mel-sumner",
    "name": "Southbank Theatre — The Sumner",
    "address": "140 Southbank Boulevard, Southbank VIC 3006",
    "area": "Southbank",
    "url": "https://www.mtc.com.au/your-visit/our-venues/southbank-theatre",
    "programme": "https://www.mtc.com.au/your-visit/our-venues/southbank-theatre",
    "note": "MTC’s main auditorium at Southbank Theatre."
  },
  {
    "id": "mel-lawler",
    "name": "Southbank Theatre — The Lawler",
    "address": "140 Southbank Boulevard, Southbank VIC 3006",
    "area": "Southbank",
    "url": "https://www.mtc.com.au/your-visit/our-venues/southbank-theatre",
    "programme": "https://www.mtc.com.au/your-visit/our-venues/southbank-theatre",
    "note": "The intimate performance space at Southbank Theatre."
  },
  {
    "id": "mel-fairfax",
    "name": "Arts Centre Melbourne — Fairfax Studio",
    "address": "100 St Kilda Road, Melbourne VIC 3004",
    "area": "Melbourne Arts Precinct",
    "url": "https://www.mtc.com.au/your-visit/our-venues/arts-centre-melbourne",
    "programme": "https://www.mtc.com.au/your-visit/our-venues/arts-centre-melbourne",
    "note": "Arts Centre Melbourne’s intimate drama studio."
  },
  {
    "id": "mel-playhouse",
    "name": "Arts Centre Melbourne — Playhouse",
    "address": "100 St Kilda Road, Melbourne VIC 3004",
    "area": "Melbourne Arts Precinct",
    "url": "https://www.mtc.com.au/your-visit/our-venues/arts-centre-melbourne",
    "programme": "https://www.mtc.com.au/your-visit/our-venues/arts-centre-melbourne",
    "note": "Drama and opera at Arts Centre Melbourne."
  },
  {
    "id": "mel-palais",
    "name": "Palais Theatre",
    "address": "Corner Lower Esplanade and Cavell Street, St Kilda VIC 3182",
    "area": "St Kilda",
    "url": "https://www.victorianopera.com.au/palais-theatre/",
    "programme": "https://www.victorianopera.com.au/palais-theatre/",
    "note": "Historic theatre hosting opera and touring performances."
  }
]);
Object.assign(MELBOURNE_VENUE_NOTES_ZH,{
  "mel-sumner": "MTC 在 Southbank Theatre 的主剧场。",
  "mel-lawler": "Southbank Theatre 的小剧场空间。",
  "mel-fairfax": "Arts Centre Melbourne 的小型话剧场馆。",
  "mel-playhouse": "Arts Centre Melbourne 的话剧与歌剧场馆。",
  "mel-palais": "呈现歌剧与巡演的历史剧院。"
});
MELBOURNE_SHOWS.push(...[
  {
    "id": "eliza-mtc",
    "title": "Eliza",
    "start": "2026-09-28",
    "end": "2026-10-31",
    "venue": "mel-sumner",
    "genre": "话剧",
    "scale": "专业制作",
    "company": "Melbourne Theatre Company",
    "source": "https://www.mtc.com.au/plays-and-tickets/whats-on/season-2026/eliza",
    "booking": "https://www.mtc.com.au/plays-and-tickets/whats-on/season-2026/eliza",
    "bookingLabel": "Official show / tickets",
    "desc": "Tom Holloway’s psychological thriller about the origins of AI.",
    "descZh": "Tom Holloway 关于人工智能起源的心理惊悚话剧。",
    "checkedAt": "2026-09-26",
    "sessions": [],
    "calendarCoverage": "unavailable",
    "dateNeedsReview": false
  },
  {
    "id": "before-i-forget-mtc",
    "title": "Before I Forget",
    "start": "2026-10-24",
    "end": "2026-11-28",
    "venue": "mel-fairfax",
    "genre": "话剧",
    "scale": "专业制作",
    "company": "Melbourne Theatre Company",
    "source": "https://www.mtc.com.au/plays-and-tickets/whats-on/season-2026/before-i-forget",
    "booking": "https://www.mtc.com.au/plays-and-tickets/whats-on/season-2026/before-i-forget",
    "bookingLabel": "Official show / tickets",
    "desc": "A new play by Kamarra Bell-Wykes.",
    "descZh": "Kamarra Bell-Wykes 创作的新话剧。",
    "checkedAt": "2026-09-26",
    "sessions": [],
    "calendarCoverage": "unavailable",
    "dateNeedsReview": false
  },
  {
    "id": "a-room-with-a-view-mtc",
    "title": "A Room with a View",
    "start": "2026-11-14",
    "end": "2026-12-19",
    "venue": "mel-sumner",
    "genre": "话剧",
    "scale": "专业制作",
    "company": "Melbourne Theatre Company",
    "source": "https://www.mtc.com.au/plays-and-tickets/whats-on/season-2026/a-room-with-a-view",
    "booking": "https://www.mtc.com.au/plays-and-tickets/whats-on/season-2026/a-room-with-a-view",
    "bookingLabel": "Official show / tickets",
    "desc": "Grace Chapple’s adaptation of E. M. Forster’s novel.",
    "descZh": "Grace Chapple 根据 E. M. Forster 小说改编的话剧。",
    "checkedAt": "2026-09-26",
    "sessions": [],
    "calendarCoverage": "unavailable",
    "dateNeedsReview": false
  },
  {
    "id": "stereophonic-mtc",
    "title": "Stereophonic",
    "start": "2027-01-25",
    "end": "2027-03-13",
    "venue": "mel-sumner",
    "genre": "话剧",
    "scale": "专业制作",
    "company": "Melbourne Theatre Company",
    "source": "https://www.mtc.com.au/plays-and-tickets/whats-on/season-2027/stereophonic",
    "booking": "https://www.mtc.com.au/plays-and-tickets/whats-on/season-2027/stereophonic",
    "bookingLabel": "Official show / tickets",
    "desc": "David Adjmi’s play about a band recording an album, with songs by Will Butler.",
    "descZh": "David Adjmi 关于乐队录制专辑的话剧，歌曲由 Will Butler 创作。",
    "checkedAt": "2026-09-26",
    "sessions": [],
    "calendarCoverage": "unavailable",
    "dateNeedsReview": false,
    "bookingNote": "At the 26 September 2026 check, this show was available through an MTC membership package. Check the official page for individual-ticket releases.",
    "bookingNoteZh": "2026 年 9 月 26 日核对时，本剧通过 MTC 会员套票销售。单场票开放情况请查看官网。"
  },
  {
    "id": "richard-iii-mtc",
    "title": "Richard III",
    "start": "2027-02-13",
    "end": "2027-03-20",
    "venue": "mel-fairfax",
    "genre": "话剧",
    "scale": "专业制作",
    "company": "Melbourne Theatre Company",
    "source": "https://www.mtc.com.au/plays-and-tickets/whats-on/season-2027/richard-iii",
    "booking": "https://www.mtc.com.au/plays-and-tickets/whats-on/season-2027/richard-iii",
    "bookingLabel": "Official show / tickets",
    "desc": "Shakespeare’s play in a new adaptation by Kate Mulvany.",
    "descZh": "Kate Mulvany 重新改编的莎士比亚话剧。",
    "checkedAt": "2026-09-26",
    "sessions": [],
    "calendarCoverage": "unavailable",
    "dateNeedsReview": false,
    "bookingNote": "At the 26 September 2026 check, this show was available through an MTC membership package. Check the official page for individual-ticket releases.",
    "bookingNoteZh": "2026 年 9 月 26 日核对时，本剧通过 MTC 会员套票销售。单场票开放情况请查看官网。"
  },
  {
    "id": "a-delicate-balance-mtc",
    "title": "A Delicate Balance",
    "start": "2027-04-03",
    "end": "2027-05-15",
    "venue": "mel-sumner",
    "genre": "话剧",
    "scale": "专业制作",
    "company": "Melbourne Theatre Company",
    "source": "https://www.mtc.com.au/plays-and-tickets/whats-on/season-2027/a-delicate-balance",
    "booking": "https://www.mtc.com.au/plays-and-tickets/whats-on/season-2027/a-delicate-balance",
    "bookingLabel": "Official show / tickets",
    "desc": "Edward Albee’s play in MTC’s 2027 season.",
    "descZh": "MTC 2027 演出季呈现 Edward Albee 的话剧。",
    "checkedAt": "2026-09-26",
    "sessions": [],
    "calendarCoverage": "unavailable",
    "dateNeedsReview": false,
    "bookingNote": "At the 26 September 2026 check, this show was available through an MTC membership package. Check the official page for individual-ticket releases.",
    "bookingNoteZh": "2026 年 9 月 26 日核对时，本剧通过 MTC 会员套票销售。单场票开放情况请查看官网。"
  },
  {
    "id": "the-war-of-the-worlds-mtc",
    "title": "The War of the Worlds",
    "start": "2027-05-01",
    "end": "2027-05-22",
    "venue": "mel-lawler",
    "genre": "话剧",
    "scale": "专业制作",
    "company": "Melbourne Theatre Company",
    "source": "https://www.mtc.com.au/plays-and-tickets/whats-on/season-2027/the-war-of-the-worlds",
    "booking": "https://www.mtc.com.au/plays-and-tickets/whats-on/season-2027/the-war-of-the-worlds",
    "bookingLabel": "Official show / tickets",
    "desc": "H. G. Wells adapted by Claire G. Coleman, created with Joe Paradise Lui.",
    "descZh": "Claire G. Coleman 改编 H. G. Wells 的作品，与 Joe Paradise Lui 共同创作。",
    "checkedAt": "2026-09-26",
    "sessions": [],
    "calendarCoverage": "unavailable",
    "dateNeedsReview": false,
    "bookingNote": "At the 26 September 2026 check, this show was offered as a membership package add-on.",
    "bookingNoteZh": "2026 年 9 月 26 日核对时，本剧作为会员套票的加购节目销售。"
  },
  {
    "id": "dirty-diamonds-mtc",
    "title": "Dirty Diamonds",
    "start": "2027-05-22",
    "end": "2027-06-26",
    "venue": "mel-fairfax",
    "genre": "话剧",
    "scale": "专业制作",
    "company": "Melbourne Theatre Company",
    "source": "https://www.mtc.com.au/plays-and-tickets/whats-on/season-2027/dirty-diamonds",
    "booking": "https://www.mtc.com.au/plays-and-tickets/whats-on/season-2027/dirty-diamonds",
    "bookingLabel": "Official show / tickets",
    "desc": "Written and directed by Abbie-lee Lewis.",
    "descZh": "Abbie-lee Lewis 编剧并执导。",
    "checkedAt": "2026-09-26",
    "sessions": [],
    "calendarCoverage": "unavailable",
    "dateNeedsReview": false,
    "bookingNote": "At the 26 September 2026 check, this show was available through an MTC membership package. Check the official page for individual-ticket releases.",
    "bookingNoteZh": "2026 年 9 月 26 日核对时，本剧通过 MTC 会员套票销售。单场票开放情况请查看官网。"
  },
  {
    "id": "rebels-mtc",
    "title": "Rebels",
    "start": "2027-06-05",
    "end": "2027-07-10",
    "venue": "mel-sumner",
    "genre": "话剧",
    "scale": "专业制作",
    "company": "Melbourne Theatre Company",
    "source": "https://www.mtc.com.au/plays-and-tickets/whats-on/season-2027/rebels",
    "booking": "https://www.mtc.com.au/plays-and-tickets/whats-on/season-2027/rebels",
    "bookingLabel": "Official show / tickets",
    "desc": "A new play by Julian Larnach.",
    "descZh": "Julian Larnach 创作的新话剧。",
    "checkedAt": "2026-09-26",
    "sessions": [],
    "calendarCoverage": "unavailable",
    "dateNeedsReview": false,
    "bookingNote": "At the 26 September 2026 check, this show was available through an MTC membership package. Check the official page for individual-ticket releases.",
    "bookingNoteZh": "2026 年 9 月 26 日核对时，本剧通过 MTC 会员套票销售。单场票开放情况请查看官网。"
  },
  {
    "id": "john-proctor-is-the-villain-mtc",
    "title": "John Proctor Is the Villain",
    "start": "2027-07-05",
    "end": "2027-08-07",
    "venue": "mel-playhouse",
    "genre": "话剧",
    "scale": "专业制作",
    "company": "Melbourne Theatre Company",
    "source": "https://www.mtc.com.au/plays-and-tickets/whats-on/season-2027/john-proctor-is-the-villain",
    "booking": "https://www.mtc.com.au/plays-and-tickets/whats-on/season-2027/john-proctor-is-the-villain",
    "bookingLabel": "Official show / tickets",
    "desc": "Kimberly Belflower’s play in MTC’s 2027 season.",
    "descZh": "MTC 2027 演出季呈现 Kimberly Belflower 的话剧。",
    "checkedAt": "2026-09-26",
    "sessions": [],
    "calendarCoverage": "unavailable",
    "dateNeedsReview": false,
    "bookingNote": "At the 26 September 2026 check, this show was available through an MTC membership package. Check the official page for individual-ticket releases.",
    "bookingNoteZh": "2026 年 9 月 26 日核对时，本剧通过 MTC 会员套票销售。单场票开放情况请查看官网。"
  },
  {
    "id": "the-authenticator-mtc",
    "title": "The Authenticator",
    "start": "2027-08-02",
    "end": "2027-09-04",
    "venue": "mel-sumner",
    "genre": "话剧",
    "scale": "专业制作",
    "company": "Melbourne Theatre Company",
    "source": "https://www.mtc.com.au/plays-and-tickets/whats-on/season-2027/the-authenticator",
    "booking": "https://www.mtc.com.au/plays-and-tickets/whats-on/season-2027/the-authenticator",
    "bookingLabel": "Official show / tickets",
    "desc": "A play by Winsome Pinnock.",
    "descZh": "Winsome Pinnock 创作的话剧。",
    "checkedAt": "2026-09-26",
    "sessions": [],
    "calendarCoverage": "unavailable",
    "dateNeedsReview": false,
    "bookingNote": "At the 26 September 2026 check, this show was available through an MTC membership package. Check the official page for individual-ticket releases.",
    "bookingNoteZh": "2026 年 9 月 26 日核对时，本剧通过 MTC 会员套票销售。单场票开放情况请查看官网。"
  },
  {
    "id": "phar-lap-the-electro-swing-musical-mtc",
    "title": "Phar Lap the Electro-Swing Musical",
    "start": "2027-09-09",
    "end": "2027-10-16",
    "venue": "mel-sumner",
    "genre": "音乐剧",
    "scale": "专业制作",
    "company": "Hayes Theatre Co. / Melbourne Theatre Company",
    "source": "https://www.mtc.com.au/plays-and-tickets/whats-on/season-2027/phar-lap-the-electro-swing-musical",
    "booking": "https://www.mtc.com.au/plays-and-tickets/whats-on/season-2027/phar-lap-the-electro-swing-musical",
    "bookingLabel": "Official show / tickets",
    "desc": "A musical with book, music and lyrics by Steven Kramer.",
    "descZh": "Steven Kramer 编剧、作曲及作词的音乐剧。",
    "checkedAt": "2026-09-26",
    "sessions": [],
    "calendarCoverage": "unavailable",
    "dateNeedsReview": false,
    "bookingNote": "At the 26 September 2026 check, this show was available through an MTC membership package. Check the official page for individual-ticket releases.",
    "bookingNoteZh": "2026 年 9 月 26 日核对时，本剧通过 MTC 会员套票销售。单场票开放情况请查看官网。"
  },
  {
    "id": "every-second-wednesday-mtc",
    "title": "Every Second Wednesday",
    "start": "2027-10-09",
    "end": "2027-11-13",
    "venue": "mel-fairfax",
    "genre": "话剧",
    "scale": "专业制作",
    "company": "Melbourne Theatre Company",
    "source": "https://www.mtc.com.au/plays-and-tickets/whats-on/season-2027/every-second-wednesday",
    "booking": "https://www.mtc.com.au/plays-and-tickets/whats-on/season-2027/every-second-wednesday",
    "bookingLabel": "Official show / tickets",
    "desc": "A new play by Andrew Bovell.",
    "descZh": "Andrew Bovell 创作的新话剧。",
    "checkedAt": "2026-09-26",
    "sessions": [],
    "calendarCoverage": "unavailable",
    "dateNeedsReview": false,
    "bookingNote": "At the 26 September 2026 check, this show was available through an MTC membership package. Check the official page for individual-ticket releases.",
    "bookingNoteZh": "2026 年 9 月 26 日核对时，本剧通过 MTC 会员套票销售。单场票开放情况请查看官网。"
  },
  {
    "id": "clarice-mtc",
    "title": "Clarice",
    "start": "2027-11-02",
    "end": "2027-12-18",
    "venue": "mel-sumner",
    "genre": "话剧",
    "scale": "专业制作",
    "company": "Melbourne Theatre Company",
    "source": "https://www.mtc.com.au/plays-and-tickets/whats-on/season-2027/clarice",
    "booking": "https://www.mtc.com.au/plays-and-tickets/whats-on/season-2027/clarice",
    "bookingLabel": "Official show / tickets",
    "desc": "A new play by Trudy Hellier.",
    "descZh": "Trudy Hellier 创作的新话剧。",
    "checkedAt": "2026-09-26",
    "sessions": [],
    "calendarCoverage": "unavailable",
    "dateNeedsReview": false,
    "bookingNote": "At the 26 September 2026 check, this show was available through an MTC membership package. Check the official page for individual-ticket releases.",
    "bookingNoteZh": "2026 年 9 月 26 日核对时，本剧通过 MTC 会员套票销售。单场票开放情况请查看官网。"
  },
  {
    "id": "the-turn-of-the-screw-vo",
    "title": "The Turn of the Screw",
    "start": "2026-09-29",
    "end": "2026-10-01",
    "venue": "mel-palais",
    "genre": "歌剧",
    "scale": "专业制作",
    "company": "Victorian Opera",
    "source": "https://www.victorianopera.com.au/production/the-turn-of-the-screw/",
    "booking": "https://www.victorianopera.com.au/production/the-turn-of-the-screw/",
    "bookingLabel": "Official show / tickets",
    "desc": "Benjamin Britten’s chamber opera, based on Henry James’s gothic novella.",
    "descZh": "本杰明·布里顿根据亨利·詹姆斯哥特小说改编的室内歌剧。",
    "checkedAt": "2026-09-26",
    "sessions": [
      [
        "2026-09-29",
        "19:30",
        ""
      ],
      [
        "2026-10-01",
        "19:30",
        ""
      ]
    ],
    "calendarCoverage": "published",
    "calendarCheckedAt": "2026-09-26T02:00:00+10:00",
    "calendarSource": "https://www.victorianopera.com.au/production/the-turn-of-the-screw/",
    "dateNeedsReview": false
  },
  {
    "id": "the-spare-room-vo",
    "title": "The Spare Room",
    "start": "2026-10-07",
    "end": "2026-10-10",
    "venue": "mel-playhouse",
    "genre": "歌剧",
    "scale": "专业制作",
    "company": "Victorian Opera",
    "source": "https://www.victorianopera.com.au/production/the-spare-room/",
    "booking": "https://www.victorianopera.com.au/production/the-spare-room/",
    "bookingLabel": "Official show / tickets",
    "desc": "Jane Hammond and Therèsa Borg’s opera adapted from Helen Garner’s novel.",
    "descZh": "Jane Hammond 与 Therèsa Borg 根据 Helen Garner 小说改编的歌剧。",
    "checkedAt": "2026-09-26",
    "sessions": [
      [
        "2026-10-07",
        "19:30",
        ""
      ],
      [
        "2026-10-08",
        "19:30",
        ""
      ],
      [
        "2026-10-09",
        "19:30",
        ""
      ],
      [
        "2026-10-10",
        "14:00",
        ""
      ],
      [
        "2026-10-10",
        "19:30",
        ""
      ]
    ],
    "calendarCoverage": "published",
    "calendarCheckedAt": "2026-09-26T02:00:00+10:00",
    "calendarSource": "https://www.victorianopera.com.au/production/the-spare-room/",
    "dateNeedsReview": false
  },
  {
    "id": "the-nutcracker-tab-mel",
    "title": "The Nutcracker — The Australian Ballet",
    "start": "2026-10-24",
    "end": "2026-10-31",
    "venue": "mel-state",
    "genre": "舞蹈",
    "scale": "专业制作",
    "company": "The Australian Ballet",
    "source": "https://australianballet.com.au/performances/the-nutcracker",
    "booking": "https://australianballet.com.au/performances/the-nutcracker",
    "bookingLabel": "Official show / tickets",
    "desc": "Peter Wright’s production of Tchaikovsky’s ballet.",
    "descZh": "Peter Wright 编舞的柴可夫斯基芭蕾舞剧。",
    "checkedAt": "2026-09-26",
    "sessions": [],
    "calendarCoverage": "unavailable",
    "dateNeedsReview": false
  },
  {
    "id": "swan-lake-tab-mel",
    "title": "Swan Lake",
    "start": "2027-03-16",
    "end": "2027-03-27",
    "venue": "mel-state",
    "genre": "舞蹈",
    "scale": "专业制作",
    "company": "The Australian Ballet",
    "source": "https://australianballet.com.au/performances/swan-lake",
    "booking": "https://australianballet.com.au/performances/swan-lake",
    "bookingLabel": "Official show / tickets",
    "desc": "The Australian Ballet’s Melbourne season of Swan Lake.",
    "descZh": "澳大利亚芭蕾舞团《天鹅湖》墨尔本演出季。",
    "checkedAt": "2026-09-26",
    "sessions": [],
    "calendarCoverage": "unavailable",
    "dateNeedsReview": false,
    "bookingNote": "Season packages available; individual tickets scheduled to open 11 November 2026. Checked 26 September 2026.",
    "bookingNoteZh": "现阶段可购演出季套票；官网计划于 2026 年 11 月 11 日开放单场票。2026 年 9 月 26 日核对。"
  },
  {
    "id": "kunstkamer-tab-mel",
    "title": "Kunstkamer",
    "start": "2027-06-11",
    "end": "2027-06-19",
    "venue": "mel-state",
    "genre": "舞蹈",
    "scale": "专业制作",
    "company": "The Australian Ballet",
    "source": "https://australianballet.com.au/performances/kunstkamer",
    "booking": "https://australianballet.com.au/performances/kunstkamer",
    "bookingLabel": "Official show / tickets",
    "desc": "The Australian Ballet presents Kunstkamer.",
    "descZh": "澳大利亚芭蕾舞团呈现《Kunstkamer》。",
    "checkedAt": "2026-09-26",
    "sessions": [],
    "calendarCoverage": "unavailable",
    "dateNeedsReview": false,
    "bookingNote": "Season packages available; individual tickets scheduled to open 11 November 2026. Checked 26 September 2026.",
    "bookingNoteZh": "现阶段可购演出季套票；官网计划于 2026 年 11 月 11 日开放单场票。2026 年 9 月 26 日核对。"
  },
  {
    "id": "mayerling-tab-mel",
    "title": "Mayerling",
    "start": "2027-06-30",
    "end": "2027-07-10",
    "venue": "mel-state",
    "genre": "舞蹈",
    "scale": "专业制作",
    "company": "The Australian Ballet",
    "source": "https://australianballet.com.au/performances/mayerling",
    "booking": "https://australianballet.com.au/performances/mayerling",
    "bookingLabel": "Official show / tickets",
    "desc": "A dramatic ballet in a Melbourne-exclusive season.",
    "descZh": "墨尔本独家演出季的戏剧性芭蕾作品。",
    "checkedAt": "2026-09-26",
    "sessions": [],
    "calendarCoverage": "unavailable",
    "dateNeedsReview": false,
    "bookingNote": "Season packages available; individual tickets scheduled to open 11 November 2026. Checked 26 September 2026.",
    "bookingNoteZh": "现阶段可购演出季套票；官网计划于 2026 年 11 月 11 日开放单场票。2026 年 9 月 26 日核对。"
  },
  {
    "id": "cinderella-tab-mel",
    "title": "Cinderella",
    "start": "2027-09-25",
    "end": "2027-10-09",
    "venue": "mel-state",
    "genre": "舞蹈",
    "scale": "专业制作",
    "company": "The Australian Ballet",
    "source": "https://australianballet.com.au/performances/cinderella",
    "booking": "https://australianballet.com.au/performances/cinderella",
    "bookingLabel": "Official show / tickets",
    "desc": "The Australian Ballet’s full-length fairytale ballet.",
    "descZh": "澳大利亚芭蕾舞团的完整童话芭蕾舞剧。",
    "checkedAt": "2026-09-26",
    "sessions": [],
    "calendarCoverage": "unavailable",
    "dateNeedsReview": false,
    "bookingNote": "Season packages available; individual tickets scheduled to open 11 November 2026. Checked 26 September 2026.",
    "bookingNoteZh": "现阶段可购演出季套票；官网计划于 2026 年 11 月 11 日开放单场票。2026 年 9 月 26 日核对。"
  },
  {
    "id": "modern-masters-tab-mel",
    "title": "Mixed Bill S27: Modern Masters",
    "start": "2027-10-16",
    "end": "2027-10-23",
    "venue": "mel-state",
    "genre": "舞蹈",
    "scale": "专业制作",
    "company": "The Australian Ballet",
    "source": "https://australianballet.com.au/performances/modern-masters",
    "booking": "https://australianballet.com.au/performances/modern-masters",
    "bookingLabel": "Official show / tickets",
    "desc": "A programme celebrating masters of modern ballet.",
    "descZh": "呈现现代芭蕾大师作品的组合节目。",
    "checkedAt": "2026-09-26",
    "sessions": [],
    "calendarCoverage": "unavailable",
    "dateNeedsReview": false,
    "bookingNote": "Season packages available; individual tickets scheduled to open 11 November 2026. Checked 26 September 2026.",
    "bookingNoteZh": "现阶段可购演出季套票；官网计划于 2026 年 11 月 11 日开放单场票。2026 年 9 月 26 日核对。"
  },
  {
    "id": "storytime-ballet-tab-mel",
    "title": "Storytime Ballet: Cinderella",
    "start": "2027-01-20",
    "end": "2027-01-23",
    "venue": "mel-comedy",
    "genre": "亲子剧",
    "scale": "专业制作",
    "company": "The Australian Ballet",
    "source": "https://marrinergroup.com.au/shows/storytime-ballet-cinderella",
    "booking": "https://marrinergroup.com.au/shows/storytime-ballet-cinderella",
    "bookingLabel": "Official show / tickets",
    "desc": "A narrated, interactive ballet for children aged three and up.",
    "descZh": "适合三岁及以上儿童、带讲述与互动的芭蕾演出。",
    "checkedAt": "2026-09-26",
    "sessions": [],
    "calendarCoverage": "unavailable",
    "dateNeedsReview": false
  }
]);
MELBOURNE_SOURCES.push(...[
  {
    "name": "Melbourne Theatre Company",
    "url": "https://www.mtc.com.au/plays-and-tickets/whats-on/seasons",
    "type": "Professional theatre",
    "note": "Remaining 2026 shows and announced 2027 season. Package availability is distinguished from individual tickets."
  },
  {
    "name": "Victorian Opera",
    "url": "https://www.victorianopera.com.au/shows-tickets/whats-on/",
    "type": "Opera company",
    "note": "Official production pages and explicitly listed performance times."
  },
  {
    "name": "The Australian Ballet",
    "url": "https://australianballet.com.au/whats-on",
    "type": "Ballet company",
    "note": "Melbourne seasons only; touring dates for other cities excluded. 2027 venue confirmed by Melbourne package guide."
  }
]);
Object.assign(MELBOURNE_SOURCE_NOTES_ZH,{
  "Melbourne Theatre Company": "2026 年剩余节目及已公布的 2027 演出季；区分套票与单场票开放情况。",
  "Victorian Opera": "官方作品页及明确列出的逐场时间。",
  "The Australian Ballet": "仅收录墨尔本演期，不混入其他城市巡演日期；2027 场馆由墨尔本套票指南核实。"
});

const melReviewedArtSeptember={
  "lord-flies-mel": "https://static.wixstatic.com/media/305a8a_2697a37d9c4b4f3f86e06b8be148b78c~mv2.jpg/v1/fill/w_3077,h_1731,al_c,q_90/LOTF_HERO_NEW%20Website.jpg",
  "stay-married-mel": "https://static.wixstatic.com/media/305a8a_185a1c1e7fa9470eae8f3c2190d47a26~mv2.jpg/v1/fill/w_3220,h_1811,al_c,q_90/How%20to%20Stay%20Married%20Hero%20Website.jpg",
  "anxiety-bakes-mel": "https://static.wixstatic.com/media/305a8a_de56947c380045c9ad3416bc8c4106bd~mv2.jpg/v1/fill/w_4463,h_2510,al_c,q_90/Anxiety%20Hero%20Website.jpg",
  "fairytalers-mel": "https://static.wixstatic.com/media/305a8a_e8a0a1c8ed0c471eb5a820059e47318c~mv2.jpg/v1/fill/w_3819,h_2148,al_c,q_90/Fairytalers%20Hero%20Website.jpg",
  "noah-skape-mel": "https://static.wixstatic.com/media/305a8a_ec9ff73bc4524ad9bda4cabd214c9181~mv2.jpg/v1/fill/w_3527,h_1984,al_c,q_90/Noah%20Skape%20Hero%20Website.jpg",
  "girlhood-bathroom-mel": "https://static.wixstatic.com/media/305a8a_6c6c0baf79584af9b06e6ef4876fce48~mv2.jpg/v1/fill/w_4979,h_2801,al_c,q_90/Girlhood%20Hero%20Website.jpg",
  "squizzy-mel": "https://static.wixstatic.com/media/305a8a_669c9b490de24d5a92966b91abdd4a82~mv2.jpg/v1/fill/w_3213,h_1808,al_c,q_90/McRizz%20Edit%20Website.jpg",
  "na-iba-mel": "https://static.wixstatic.com/media/305a8a_4f171802dd0a47c9b4f2f0b6e5c5d3a5~mv2.jpg/v1/fill/w_2731,h_1536,al_c,q_90/Na%20Iba%20Hero%20Website.jpg",
  "crapbox-mel": "https://static.wixstatic.com/media/305a8a_7bf05dc494cd42b9ba8a40312effdc96~mv2.jpg/v1/fill/w_3583,h_2016,al_c,q_90/Crapbox%20Website.jpg",
  "timon-mel": "https://static.wixstatic.com/media/305a8a_2275fb2ccf8448a2a99491795b48d6a0~mv2.jpg/v1/fill/w_5636,h_3170,al_c,q_90/Timon%20Website.jpg",
  "cruise-mel": "https://static.wixstatic.com/media/305a8a_935583b61de84f89bbc4f5881be609c6~mv2.jpg/v1/fill/w_4121,h_2318,al_c,q_90/Cruise-Edit%20Website.jpg",
  "smoke-mel": "https://static.wixstatic.com/media/305a8a_52bc067e76fc476487f36ece2a79f914~mv2.jpg/v1/fill/w_3088,h_1737,al_c,q_90/Smoke%20Website.jpg",
  "engineer-snow-mel": "https://static.wixstatic.com/media/305a8a_eee269abc59e4eeeb72711814dacc5e3~mv2.jpg/v1/fill/w_3600,h_2025,al_c,q_90/Engineer%20Website.jpg",
  "trash-wizard-mel": "https://cms.lamama.com.au/media/1yup1i24/trash_wizard_lores_landscape_1920px_96dpi-c2.jpg?anchor=center&mode=crop&width=1200&height=630&quality=90",
  "exhibit-mel": "https://cms.lamama.com.au/media/uaopzjgv/exhibit_ig_portrait_1080px_96dpi_darren_gill_0176.jpg?anchor=center&mode=crop&width=1200&height=630&quality=90",
  "totos-song-mel": "https://cms.lamama.com.au/media/ltneunsr/totos_song_lores_landscape_1920px_96dpi_darren_gill-0158.jpg?anchor=center&mode=crop&width=1200&height=630&quality=90",
  "parasocial-mel": "https://cms.lamama.com.au/media/ublfv13r/parasocial_lores_landscape_1920px_96dpi_darren_gill-0320.jpg?anchor=center&mode=crop&width=1200&height=630&quality=90",
  "wrong-way-mel": "https://cms.lamama.com.au/media/dp2jguhe/wrong_way_grow_back_ig_portrait_1080px_96dpi_darren_gill-0403.jpg?anchor=center&mode=crop&width=1200&height=630&quality=90",
  "red-mel": "https://cms.lamama.com.au/media/neqhe1bu/red_lores_landscape_1920px_96dpi_darren_gill-0541.jpg?rxy=0.514%2C0.3293333333333333&width=1200&height=630&quality=90",
  "melancholia-mel": "https://chapeloffchapel.com.au/wp-content/uploads/2024/11/1-x-landscape-image-1203px-wide-x-631px-high-Show-Title-OCo-Facebook.jpg",
  "showmance-mel": "https://chapeloffchapel.com.au/wp-content/uploads/2026/08/The-Showmance-Must-Go-On-1203-x-631.png",
  "mayfair-mel": "https://chapeloffchapel.com.au/wp-content/uploads/2026/07/Show-Title-Facebook.png",
  "american-psycho-mel": "https://chapeloffchapel.com.au/wp-content/uploads/2026/07/American-Psycho-2026-Web-Image-1.jpg",
  "my-fair-lady-mel": "https://opera.org.au/app/uploads/2025/08/My-Fair-Lady-2026-750x500-1.jpg",
  "eliza-mtc": "https://res.cloudinary.com/mtc-2018/image/upload/c_limit,w_1000/f_auto/q_auto/v1759299852/Season%202026/Eliza/Eliza_WebAssets_800_x_480_?_a=BAAAV6DQ",
  "before-i-forget-mtc": "https://res.cloudinary.com/mtc-2018/image/upload/c_limit,w_1000/f_auto/q_auto/v1759299918/Season%202026/Before%20I%20Forget/BIF_WebAssets_800_x_480_?_a=BAAAV6DQ",
  "a-room-with-a-view-mtc": "https://res.cloudinary.com/mtc-2018/image/upload/c_limit,w_1000/f_auto/q_auto/v1759299975/Season%202026/Room%20with%20a%20View/RWAV_WebAssets_800_x_480_?_a=BAAAV6DQ",
  "stereophonic-mtc": "https://res.cloudinary.com/mtc-2018/image/upload/c_limit,w_1000/f_auto/q_auto/v1787638486/Stereo_Web__800_x_480__znfqet?_a=BAAAV6DQ",
  "richard-iii-mtc": "https://res.cloudinary.com/mtc-2018/image/upload/c_limit,w_1000/f_auto/q_auto/v1787204495/Richard_Web_800_x_480_jnmkxp?_a=BAAAV6DQ",
  "a-delicate-balance-mtc": "https://res.cloudinary.com/mtc-2018/image/upload/c_limit,w_1000/f_auto/q_auto/v1787704321/ADB_Web_800_x_480_huktpt?_a=BAAAV6DQ",
  "the-war-of-the-worlds-mtc": "https://res.cloudinary.com/mtc-2018/image/upload/c_limit,w_1000/f_auto/q_auto/v1787806700/WotW_Web_800_x_480__xhcd9n?_a=BAAAV6DQ",
  "dirty-diamonds-mtc": "https://res.cloudinary.com/mtc-2018/image/upload/c_limit,w_1000/f_auto/q_auto/v1787726852/DD_Web_800_x_480_bfomy8?_a=BAAAV6DQ",
  "rebels-mtc": "https://res.cloudinary.com/mtc-2018/image/upload/c_limit,w_1000/f_auto/q_auto/v1787809008/Rebels_Web_800_x_480__il7fvb?_a=BAAAV6DQ",
  "john-proctor-is-the-villain-mtc": "https://res.cloudinary.com/mtc-2018/image/upload/c_limit,w_1000/f_auto/q_auto/v1787724379/Proctor_Web_800_x_480__pbsle9?_a=BAAAV6DQ",
  "the-authenticator-mtc": "https://res.cloudinary.com/mtc-2018/image/upload/c_limit,w_1000/f_auto/q_auto/v1788842459/Authenticator_WEB__800_x_480_vkirhp?_a=BAAAV6DQ",
  "phar-lap-the-electro-swing-musical-mtc": "https://res.cloudinary.com/mtc-2018/image/upload/c_limit,w_1000/f_auto/q_auto/v1787808301/PharLap_Web_800_x_480_occiad?_a=BAAAV6DQ",
  "every-second-wednesday-mtc": "https://res.cloudinary.com/mtc-2018/image/upload/c_limit,w_1000/f_auto/q_auto/v1787810122/ESW_Web_800_x_480_yysfyt?_a=BAAAV6DQ",
  "clarice-mtc": "https://res.cloudinary.com/mtc-2018/image/upload/c_limit,w_1000/f_auto/q_auto/v1787813302/Clarice_Web_800_x_480__xfmjuo?_a=BAAAV6DQ",
  "the-nutcracker-tab-mel": "https://images.australianballet.com.au/images/Productions/2024/The-Nutcracker/Nutcracker_2500x1780.jpg?auto=format&crop=focalpoint&domain=images.australianballet.com.au&fit=crop&fp-x=0.5&fp-y=0.5&h=630&ixlib=php-3.3.1&q=82&w=1200",
  "storytime-ballet-tab-mel": "https://cdn.marrinergroup.com.au/strapi/uploads/TAB_5571_STB_MEL_Venue_Assets_Marriner_FA_300_7_2426px_w_x_1365px_0a3d6b323e.jpg",
  "the-turn-of-the-screw-vo": "https://www.victorianopera.com.au/wp-content/uploads/2025/10/VO2026-THE-TURN-OF-THE-SCREW-1.jpg",
  "the-spare-room-vo": "https://www.victorianopera.com.au/wp-content/uploads/2026/07/VO2026-The-Spare-Room-1080-x-1080-2.jpg"
};
const melReviewedBookingSeptember={
  "eliza-mtc": "https://tickets.mtc.com.au/production/19788",
  "before-i-forget-mtc": "https://tickets.mtc.com.au/production/19789",
  "a-room-with-a-view-mtc": "https://tickets.mtc.com.au/production/19790"
};
for(const s of MELBOURNE_SHOWS){if(melReviewedArtSeptember[s.id]){s.image=melReviewedArtSeptember[s.id];s.imageSource=s.source;}if(melReviewedBookingSeptember[s.id]){s.booking=melReviewedBookingSeptember[s.id];s.bookingLabel="Official tickets";}}

const MELBOURNE_ANNOUNCEMENTS=[
  {
    "title": "Disney’s The Lion King",
    "venue": "mel-regent",
    "date": "From March 2027",
    "dateZh": "2027 年 3 月起",
    "status": "Waitlist announced; exact dates to be confirmed.",
    "statusZh": "官网已开放候补登记；具体日期待公布。",
    "source": "https://marrinergroup.com.au/shows/the-lion-king"
  },
  {
    "title": "Matilda The Musical",
    "venue": "mel-princess",
    "date": "From October 2027",
    "dateZh": "2027 年 10 月起",
    "status": "Waitlist announced; exact dates to be confirmed.",
    "statusZh": "官网已开放候补登记；具体日期待公布。",
    "source": "https://marrinergroup.com.au/shows/matilda-the-musical"
  },
  {
    "title": "Private Lives",
    "venue": "mel-princess",
    "date": "From March 2027",
    "dateZh": "2027 年 3 月起",
    "status": "Tickets advertised on sale; exact season dates not verified here.",
    "statusZh": "官网显示已开票；本站尚未核实完整演期。",
    "source": "https://marrinergroup.com.au/shows/private-lives"
  }
];

// Reviewed venue-specific 2027 opera runs and page-specific artwork.
MELBOURNE_VENUES.push(...[
  {
    "id": "mel-horti",
    "name": "Horti Hall",
    "area": "Melbourne CBD",
    "address": "31 Victoria Street, Melbourne VIC 3000",
    "url": "https://www.victorianopera.com.au/hortihall/",
    "programme": "https://www.victorianopera.com.au/hortihall/",
    "note": "Victorian Opera’s home and intimate performance space."
  },
  {
    "id": "mel-round",
    "name": "The Round",
    "area": "Nunawading",
    "address": "379–399 Whitehorse Road, Nunawading VIC 3131",
    "url": "https://www.theround.com.au/your-visit/getting-here",
    "programme": "https://www.theround.com.au/your-visit/getting-here",
    "note": "Performing arts centre in Melbourne’s east."
  },
  {
    "id": "mel-bunjil",
    "name": "Bunjil Place",
    "area": "Narre Warren",
    "address": "2 Patrick Northeast Drive, Narre Warren VIC 3805",
    "url": "https://www.visitmelbourne.com/regions/melbourne/see-and-do/art-and-culture/bunjil-place",
    "programme": "https://www.visitmelbourne.com/regions/melbourne/see-and-do/art-and-culture/bunjil-place",
    "note": "Performing arts venue in Melbourne’s southeast."
  },
  {
    "id": "mel-union",
    "name": "Union Theatre",
    "area": "Parkville",
    "address": "Arts and Cultural Building, Monash Road, University of Melbourne, Parkville VIC 3010",
    "url": "https://www.umac.melbourne/your-visit/getting-here",
    "programme": "https://www.umac.melbourne/your-visit/getting-here",
    "note": "Enter the Parkville campus from Swanston Street via Gate 4 on Monash Road."
  }
]);
Object.assign(MELBOURNE_VENUE_NOTES_ZH,{
  "mel-horti": "Victorian Opera 的驻地及小型演出空间。",
  "mel-round": "墨尔本东区的表演艺术中心。",
  "mel-bunjil": "墨尔本东南区的表演艺术场馆。",
  "mel-union": "由 Swanston Street 经 Monash Road 的 Gate 4 进入 Parkville 校区。"
});
MELBOURNE_SHOWS.push(...[
  {
    "id": "iolanthe-vo",
    "title": "Iolanthe",
    "productionId": "iolanthe-vo-2027",
    "venue": "mel-palais",
    "start": "2027-01-30",
    "end": "2027-02-03",
    "genre": "歌剧",
    "scale": "专业制作",
    "company": "Victorian Opera",
    "source": "https://www.victorianopera.com.au/production/iolanthe/",
    "booking": "https://www.victorianopera.com.au/production/iolanthe/",
    "bookingLabel": "Official show / tickets",
    "desc": "Gilbert and Sullivan’s comic operetta, directed by Stuart Maunder.",
    "descZh": "Stuart Maunder 执导的吉尔伯特与沙利文喜歌剧。",
    "image": "https://www.victorianopera.com.au/wp-content/uploads/2026/09/VO2027-Iolanthe-1080-x-1080-2.png",
    "imageSource": "https://www.victorianopera.com.au/production/iolanthe/",
    "sessions": [
      [
        "2027-01-30",
        "19:30",
        ""
      ],
      [
        "2027-02-01",
        "19:30",
        ""
      ],
      [
        "2027-02-02",
        "19:30",
        ""
      ],
      [
        "2027-02-03",
        "14:00",
        ""
      ],
      [
        "2027-02-03",
        "19:30",
        ""
      ]
    ],
    "calendarCoverage": "published",
    "calendarSource": "https://www.victorianopera.com.au/production/iolanthe/",
    "calendarCheckedAt": "2026-09-26T06:00:00+10:00",
    "checkedAt": "2026-09-26",
    "dateNeedsReview": false,
    "bookingNote": "See the official page for current package and individual-ticket availability. Listed performance times do not confirm tickets are on sale.",
    "bookingNoteZh": "套票及单场票开放情况请以官网为准；已公布演出时间不代表当前已开票。"
  },
  {
    "id": "figaro-horti-vo",
    "title": "The Marriage of Figaro — Horti Hall",
    "productionId": "the-marriage-of-figaro-vo-2027",
    "venue": "mel-horti",
    "start": "2027-03-11",
    "end": "2027-03-13",
    "genre": "歌剧",
    "scale": "专业制作",
    "company": "Victorian Opera",
    "source": "https://www.victorianopera.com.au/production/the-marriage-of-figaro/",
    "booking": "https://www.victorianopera.com.au/production/the-marriage-of-figaro/",
    "bookingLabel": "Official show / tickets",
    "desc": "Mozart’s opera in an intimate staging accompanied by two pianos.",
    "descZh": "莫扎特歌剧的小剧场版本，以双钢琴伴奏。",
    "image": "https://www.victorianopera.com.au/wp-content/uploads/2026/09/VO2027-The-Marriage-of-Figaro-1080-x-1080-2.png",
    "imageSource": "https://www.victorianopera.com.au/production/the-marriage-of-figaro/",
    "sessions": [
      [
        "2027-03-11",
        "19:30",
        ""
      ],
      [
        "2027-03-13",
        "14:00",
        ""
      ]
    ],
    "calendarCoverage": "published",
    "calendarSource": "https://www.victorianopera.com.au/production/the-marriage-of-figaro/",
    "calendarCheckedAt": "2026-09-26T06:00:00+10:00",
    "checkedAt": "2026-09-26",
    "dateNeedsReview": false,
    "bookingNote": "See the official page for current package and individual-ticket availability. Listed performance times do not confirm tickets are on sale.",
    "bookingNoteZh": "套票及单场票开放情况请以官网为准；已公布演出时间不代表当前已开票。"
  },
  {
    "id": "figaro-playhouse-vo",
    "title": "The Marriage of Figaro — Playhouse",
    "productionId": "the-marriage-of-figaro-vo-2027",
    "venue": "mel-playhouse",
    "start": "2027-10-16",
    "end": "2027-10-23",
    "genre": "歌剧",
    "scale": "专业制作",
    "company": "Victorian Opera",
    "source": "https://www.victorianopera.com.au/production/the-marriage-of-figaro/",
    "booking": "https://www.victorianopera.com.au/production/the-marriage-of-figaro/",
    "bookingLabel": "Official show / tickets",
    "desc": "Mozart’s opera with chamber orchestra at the Playhouse.",
    "descZh": "在 Playhouse 上演、由室内乐团伴奏的莫扎特歌剧。",
    "image": "https://www.victorianopera.com.au/wp-content/uploads/2026/09/VO2027-The-Marriage-of-Figaro-1080-x-1080-2.png",
    "imageSource": "https://www.victorianopera.com.au/production/the-marriage-of-figaro/",
    "sessions": [
      [
        "2027-10-16",
        "19:30",
        ""
      ],
      [
        "2027-10-19",
        "19:30",
        ""
      ],
      [
        "2027-10-21",
        "19:30",
        ""
      ],
      [
        "2027-10-23",
        "14:00",
        ""
      ]
    ],
    "calendarCoverage": "published",
    "calendarSource": "https://www.victorianopera.com.au/production/the-marriage-of-figaro/",
    "calendarCheckedAt": "2026-09-26T06:00:00+10:00",
    "checkedAt": "2026-09-26",
    "dateNeedsReview": false,
    "bookingNote": "See the official page for current package and individual-ticket availability. Listed performance times do not confirm tickets are on sale.",
    "bookingNoteZh": "套票及单场票开放情况请以官网为准；已公布演出时间不代表当前已开票。"
  },
  {
    "id": "happy-prince-round-vo",
    "title": "The Happy Prince — The Round",
    "productionId": "the-happy-prince-vo-2027",
    "venue": "mel-round",
    "start": "2027-05-07",
    "end": "2027-05-08",
    "genre": "歌剧",
    "scale": "专业制作",
    "company": "Victorian Opera",
    "source": "https://www.victorianopera.com.au/production/the-happy-prince/",
    "booking": "https://www.victorianopera.com.au/production/the-happy-prince/",
    "bookingLabel": "Official show / tickets",
    "desc": "Malcolm Williamson’s family opera based on Oscar Wilde’s story.",
    "descZh": "Malcolm Williamson 根据王尔德故事创作的家庭歌剧。",
    "image": "https://www.victorianopera.com.au/wp-content/uploads/2026/09/VO2027-The-Happy-Prince-1080-x-1080-2.png",
    "imageSource": "https://www.victorianopera.com.au/production/the-happy-prince/",
    "sessions": [
      [
        "2027-05-07",
        "13:00",
        ""
      ],
      [
        "2027-05-08",
        "14:00",
        ""
      ]
    ],
    "calendarCoverage": "published",
    "calendarSource": "https://www.victorianopera.com.au/production/the-happy-prince/",
    "calendarCheckedAt": "2026-09-26T06:00:00+10:00",
    "checkedAt": "2026-09-26",
    "dateNeedsReview": false,
    "bookingNote": "See the official page for current package and individual-ticket availability. Listed performance times do not confirm tickets are on sale.",
    "bookingNoteZh": "套票及单场票开放情况请以官网为准；已公布演出时间不代表当前已开票。"
  },
  {
    "id": "happy-prince-bunjil-vo",
    "title": "The Happy Prince — Bunjil Place",
    "productionId": "the-happy-prince-vo-2027",
    "venue": "mel-bunjil",
    "start": "2027-05-21",
    "end": "2027-05-22",
    "genre": "歌剧",
    "scale": "专业制作",
    "company": "Victorian Opera",
    "source": "https://www.victorianopera.com.au/production/the-happy-prince/",
    "booking": "https://www.victorianopera.com.au/production/the-happy-prince/",
    "bookingLabel": "Official show / tickets",
    "desc": "A 50-minute family opera performed by Victorian Opera’s emerging artists.",
    "descZh": "由 Victorian Opera 新锐演员演出的 50 分钟家庭歌剧。",
    "image": "https://www.victorianopera.com.au/wp-content/uploads/2026/09/VO2027-The-Happy-Prince-1080-x-1080-2.png",
    "imageSource": "https://www.victorianopera.com.au/production/the-happy-prince/",
    "sessions": [
      [
        "2027-05-21",
        "13:00",
        ""
      ],
      [
        "2027-05-22",
        "14:00",
        ""
      ]
    ],
    "calendarCoverage": "published",
    "calendarSource": "https://www.victorianopera.com.au/production/the-happy-prince/",
    "calendarCheckedAt": "2026-09-26T06:00:00+10:00",
    "checkedAt": "2026-09-26",
    "dateNeedsReview": false,
    "bookingNote": "See the official page for current package and individual-ticket availability. Listed performance times do not confirm tickets are on sale.",
    "bookingNoteZh": "套票及单场票开放情况请以官网为准；已公布演出时间不代表当前已开票。"
  },
  {
    "id": "streetcar-vo",
    "title": "A Streetcar Named Desire",
    "productionId": "a-streetcar-named-desire-vo-2027",
    "venue": "mel-palais",
    "start": "2027-06-29",
    "end": "2027-07-03",
    "genre": "歌剧",
    "scale": "专业制作",
    "company": "Victorian Opera",
    "source": "https://www.victorianopera.com.au/production/a-streetcar-named-desire/",
    "booking": "https://www.victorianopera.com.au/production/a-streetcar-named-desire/",
    "bookingLabel": "Official show / tickets",
    "desc": "André Previn and Philip Littell’s opera based on Tennessee Williams’s play.",
    "descZh": "安德烈·普列文与 Philip Littell 根据田纳西·威廉斯话剧改编的歌剧。",
    "image": "https://www.victorianopera.com.au/wp-content/uploads/2026/09/VO2027-A-Streetcar-Named-Desire-1080-x-1080-2.png",
    "imageSource": "https://www.victorianopera.com.au/production/a-streetcar-named-desire/",
    "sessions": [
      [
        "2027-06-29",
        "19:30",
        ""
      ],
      [
        "2027-07-01",
        "19:30",
        ""
      ],
      [
        "2027-07-03",
        "19:30",
        ""
      ]
    ],
    "calendarCoverage": "published",
    "calendarSource": "https://www.victorianopera.com.au/production/a-streetcar-named-desire/",
    "calendarCheckedAt": "2026-09-26T06:00:00+10:00",
    "checkedAt": "2026-09-26",
    "dateNeedsReview": false,
    "bookingNote": "See the official page for current package and individual-ticket availability. Listed performance times do not confirm tickets are on sale.",
    "bookingNoteZh": "套票及单场票开放情况请以官网为准；已公布演出时间不代表当前已开票。"
  },
  {
    "id": "freischutz-vo",
    "title": "Der Freischütz",
    "productionId": "der-freischutz-vo-2027",
    "venue": "mel-palais",
    "start": "2027-09-28",
    "end": "2027-09-30",
    "genre": "歌剧",
    "scale": "专业制作",
    "company": "Victorian Opera",
    "source": "https://www.victorianopera.com.au/production/der-freischutz/",
    "booking": "https://www.victorianopera.com.au/production/der-freischutz/",
    "bookingLabel": "Official show / tickets",
    "desc": "Carl Maria von Weber’s opera, sung in German.",
    "descZh": "卡尔·马利亚·冯·韦伯的歌剧，以德语演唱。",
    "image": "https://www.victorianopera.com.au/wp-content/uploads/2026/09/VO2027-Der-Freischutz-1080-x-1080.png",
    "imageSource": "https://www.victorianopera.com.au/production/der-freischutz/",
    "sessions": [
      [
        "2027-09-28",
        "19:30",
        ""
      ],
      [
        "2027-09-30",
        "19:30",
        ""
      ]
    ],
    "calendarCoverage": "published",
    "calendarSource": "https://www.victorianopera.com.au/production/der-freischutz/",
    "calendarCheckedAt": "2026-09-26T06:00:00+10:00",
    "checkedAt": "2026-09-26",
    "dateNeedsReview": false,
    "bookingNote": "See the official page for current package and individual-ticket availability. Listed performance times do not confirm tickets are on sale.",
    "bookingNoteZh": "套票及单场票开放情况请以官网为准；已公布演出时间不代表当前已开票。"
  },
  {
    "id": "lola-montez-vo",
    "title": "First Look: Lola Montez",
    "productionId": "lola-montez-vo-2027",
    "venue": "mel-union",
    "start": "2027-11-10",
    "end": "2027-11-14",
    "genre": "歌剧",
    "scale": "专业制作",
    "company": "Victorian Opera",
    "source": "https://www.victorianopera.com.au/production/lola-montez/",
    "booking": "https://www.victorianopera.com.au/production/lola-montez/",
    "bookingLabel": "Official show / tickets",
    "desc": "A stripped-back first look at Joe Chindamo and Peter Tregear’s new opera. The 12 November discussion is not a performance.",
    "descZh": "Joe Chindamo 与 Peter Tregear 新歌剧的初次简约呈现。11 月 12 日的论坛不属于演出。",
    "image": "https://www.victorianopera.com.au/wp-content/uploads/2026/09/VO2027-Lola-Montez-1080-x-1080-2.png",
    "imageSource": "https://www.victorianopera.com.au/production/lola-montez/",
    "sessions": [
      [
        "2027-11-10",
        "19:30",
        ""
      ],
      [
        "2027-11-11",
        "19:30",
        ""
      ],
      [
        "2027-11-13",
        "19:30",
        ""
      ],
      [
        "2027-11-14",
        "14:00",
        ""
      ]
    ],
    "calendarCoverage": "published",
    "calendarSource": "https://www.victorianopera.com.au/production/lola-montez/",
    "calendarCheckedAt": "2026-09-26T06:00:00+10:00",
    "checkedAt": "2026-09-26",
    "dateNeedsReview": false,
    "bookingNote": "See the official page for current package and individual-ticket availability. Listed performance times do not confirm tickets are on sale.",
    "bookingNoteZh": "套票及单场票开放情况请以官网为准；已公布演出时间不代表当前已开票。"
  }
]);
const melRemainingOfficialArt={
  "young-frankenstein-mel": "https://static.wixstatic.com/media/305a8a_afa401f7766f43e4804a73a041112b18~mv2.jpg/v1/fill/w_147,h_83,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/305a8a_afa401f7766f43e4804a73a041112b18~mv2.jpg",
  "come-from-away-cloc": "https://www.cloc.org.au/uploads/1/2/6/4/126416729/come-from-away-website-banner_orig.jpg",
  "steel-magnolias-encore": "https://encoretheatre.com.au/wp-content/uploads/2026/05/Magnolias-Print-566x800.png",
  "cock-mordialloc": "https://mordialloctheatre.com.au/wp-content/uploads/2025/11/Cock.png",
  "breaking-walls-mordialloc": "https://mordialloctheatre.com.au/wp-content/uploads/2025/11/Breaking-Down-All-The-Walls.png",
  "dirty-rotten-malvern": "https://malverntheatre.com.au/wp-content/uploads/2025/10/2026-6_Dirty-Rotten-Scoundrels_main-image_smaller-file-size-scaled.jpg",
  "rhomboid-mel": "https://fortyfivedownstairs.com/wp-content/uploads/2025/11/Rhomboid_launch3_square.jpg",
  "never-closer-mel": "https://fortyfivedownstairs.com/wp-content/uploads/2025/11/PNC6139-2-16_HR_square.jpg",
  "titanic-osmad": "https://images.squarespace-cdn.com/content/v1/5c25f3665ffd2052d6e0c686/02e1a065-95a6-481a-8118-97c7aa200c75/Website+background+image.png",
  "luke-mel": "https://images.squarespace-cdn.com/content/v1/5ec1c2937140f55bfe711e5b/cb6453da-bde3-42bf-a491-98c72911e716/Luke-2.jpg",
  "carbon-mel": "https://images.squarespace-cdn.com/content/v1/5ec1c2937140f55bfe711e5b/b9c1a2d9-3ef4-48c9-894f-9389cdbf8268/1.jpg",
  "kindness-brighton": "https://brightontheatre.com.au/wp-content/uploads/2025/12/A-Simple-Act-of-Kindness-FB-scaled.png",
  "switzerland-1812": "https://www.1812theatre.com.au/wp-content/uploads/2026/08/switzerhand-header-v2.jpg",
  "closer-1812": "https://www.1812theatre.com.au/wp-content/uploads/2026/05/Closer-Banner-Alice-Pink-Wig.jpg",
  "murder-announced-1812": "https://www.1812theatre.com.au/wp-content/uploads/2026/08/2026s6-headerv2.jpg",
  "swan-lake-tab-mel": "https://images.australianballet.com.au/images/Productions/2027/Swan-Lake/Swan-Lake_Hero-Portrait_800x1120_E.jpg?crop=focalpoint&domain=images.australianballet.com.au&fit=crop&fm=pjpg&fp-x=0.5&fp-y=0.5&h=895&ixlib=php-3.3.1&q=82&w=640",
  "kunstkamer-tab-mel": "https://images.australianballet.com.au/images/Productions/2027/Kunstkamer/Kunstkamer_Image-Card_1200x1600_B.jpg?crop=focalpoint&domain=images.australianballet.com.au&fit=crop&fm=pjpg&fp-x=0.5&fp-y=0.5&h=853&ixlib=php-3.3.1&q=82&w=640",
  "mayerling-tab-mel": "https://images.australianballet.com.au/images/Productions/2027/Mayerling/Mayering_Image-Card_1200x1600_C.jpg?crop=focalpoint&domain=images.australianballet.com.au&fit=crop&fm=pjpg&fp-x=0.5&fp-y=0.5&h=853&ixlib=php-3.3.1&q=82&w=640",
  "cinderella-tab-mel": "https://images.australianballet.com.au/images/Productions/2027/Cinderella/Cinderella-_Hero-Landscape_2500x1400_B.jpg?crop=focalpoint&domain=images.australianballet.com.au&fit=crop&fm=pjpg&fp-x=0.5&fp-y=0.5&h=360&ixlib=php-3.3.1&q=82&w=640",
  "modern-masters-tab-mel": "https://images.australianballet.com.au/images/Productions/2027/Mixed-Bill/Mixed-Bill_1200x1600_A.jpg?crop=focalpoint&domain=images.australianballet.com.au&fit=crop&fm=pjpg&fp-x=0.5&fp-y=0.5&h=853&ixlib=php-3.3.1&q=82&w=640"
};
for(const s of MELBOURNE_SHOWS){if(melRemainingOfficialArt[s.id]){s.image=melRemainingOfficialArt[s.id];s.imageSource=s.source;}}
