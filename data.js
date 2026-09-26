const SNAPSHOT = "2026-09-25";
const VENUES = [
  {
    "id": "lyric",
    "name": "Sydney Lyric",
    "area": "Pyrmont",
    "region": "市区与东区",
    "address": "55 Pirrama Road, Pyrmont NSW",
    "url": "https://www.sydneylyric.com.au/visit/getting-here",
    "programme": "https://www.sydneylyric.com.au/",
    "note": "主要音乐剧及大型巡演场馆。已录入部分节目，完整排期见官方节目。"
  },
  {
    "id": "capitol",
    "name": "Capitol Theatre",
    "area": "Haymarket",
    "region": "市区与东区",
    "address": "13 Campbell Street, Haymarket NSW",
    "url": "https://www.capitoltheatre.com.au/visit/getting-here",
    "programme": "https://www.capitoltheatre.com.au/",
    "note": "大型音乐剧、芭蕾及巡演场馆。已录入部分节目，完整排期见官方节目。"
  },
  {
    "id": "hayes",
    "name": "Hayes Theatre",
    "area": "Elizabeth Bay",
    "region": "市区与东区",
    "address": "19 Greenknowe Avenue, Elizabeth Bay NSW 2011",
    "url": "https://hayestheatre.com.au/getting-here/",
    "programme": "https://hayestheatre.com.au/",
    "note": "音乐剧与 cabaret；每部制作独立核对售票入口。"
  },
  {
    "id": "belvoir",
    "name": "Belvoir St Theatre",
    "area": "Surry Hills",
    "region": "市区与东区",
    "address": "25 Belvoir Street, Surry Hills NSW 2010",
    "url": "https://belvoir.com.au/",
    "programme": "https://belvoir.com.au/",
    "note": "包含 Upstairs 和 Downstairs 两个演出空间；Griffin 的部分制作也在这里演出。"
  },
  {
    "id": "ensemble",
    "name": "Ensemble Theatre",
    "area": "Kirribilli",
    "region": "北岸",
    "address": "78 McDougall Street, Kirribilli NSW 2061",
    "url": "https://www.ensemble.com.au/about/",
    "programme": "https://www.ensemble.com.au/",
    "note": "以话剧为主，演出页面提供单场日历。"
  },
  {
    "id": "neilson",
    "name": "Neilson Studio",
    "area": "Dawes Point",
    "region": "市区与东区",
    "address": "Wharf 4/5, 15 Hickson Road, Dawes Point NSW 2000",
    "url": "https://www.sydneydancecompany.com/performance/sydney-fringe-festival/",
    "programme": "https://www.sydneydancecompany.com/",
    "note": "Sydney Dance Company 的演出空间，与 Bell Shakespeare 的 Neilson Nutshell 是不同场馆。"
  },
  {
    "id": "opera",
    "name": "Sydney Opera House",
    "area": "Bennelong Point",
    "region": "市区与东区",
    "address": "Bennelong Point, Sydney NSW 2000",
    "url": "https://www.sydneyoperahouse.com/",
    "programme": "https://www.sydneyoperahouse.com/whats-on",
    "note": "多厅场馆，具体演出厅以每场节目为准。"
  },
  {
    "id": "concourse",
    "name": "The Concourse",
    "area": "Chatswood",
    "region": "北岸",
    "address": "409 Victoria Avenue, Chatswood NSW 2067",
    "url": "https://www.theconcourse.com.au/visit/",
    "programme": "https://www.theconcourse.com.au/",
    "note": "主舞台与 The Lounge 分开标注；社区剧团是重要节目来源。"
  },
  {
    "id": "royal",
    "name": "Theatre Royal Sydney",
    "area": "Sydney CBD",
    "region": "市区与东区",
    "address": "108 King Street, Sydney NSW 2000",
    "url": "https://theatreroyalsydney.com/",
    "programme": "https://theatreroyalsydney.com/",
    "note": "音乐剧、话剧及巡演；从剧院官方节目页进入授权售票。"
  },
  {
    "id": "recital",
    "name": "City Recital Hall",
    "area": "Sydney CBD",
    "region": "市区与东区",
    "address": "2 Angel Place, Sydney NSW 2000",
    "url": "https://www.cityrecitalhall.com/",
    "programme": "https://www.cityrecitalhall.com/",
    "note": "除音乐会外，也关注 Pinchgut Opera 等歌剧制作。"
  },
  {
    "id": "newtheatre",
    "name": "New Theatre",
    "area": "Newtown",
    "region": "内西区",
    "address": "542 King Street, Newtown NSW",
    "url": "https://newtheatre.org.au/map-and-transport/",
    "programme": "https://newtheatre.org.au/",
    "note": "Newtown 的独立剧场；逐部核对票价与场次。"
  },
  {
    "id": "carriageworks",
    "name": "Carriageworks",
    "area": "Eveleigh",
    "region": "内南区",
    "address": "245 Wilson Street, Eveleigh NSW",
    "url": "https://carriageworks.com.au/visit/",
    "programme": "https://carriageworks.com.au/",
    "note": "多空间艺术场馆；请按演出详情确认具体厅名。"
  },
  {
    "id": "state",
    "name": "State Theatre",
    "area": "Sydney CBD",
    "region": "市区与东区",
    "address": "49 Market Street, Sydney NSW 2000",
    "url": "https://www.statetheatre.com.au/",
    "programme": "https://www.statetheatre.com.au/show-calendar/",
    "note": "1929 年开业的音乐剧、话剧、舞蹈与喜剧场馆；官方授权 Ticketmaster 售票。"
  },
  {
    "id": "roslynpacker",
    "name": "Roslyn Packer Theatre",
    "area": "Walsh Bay",
    "region": "市区与东区",
    "address": "22 Hickson Road, Walsh Bay NSW 2000",
    "url": "https://www.sydneytheatre.com.au/your-visit/roslyn-packer-theatre",
    "programme": "https://www.sydneytheatre.com.au/whats-on/venues/roslyn-packer-theatre",
    "note": "悉尼剧院公司（STC）最大的场馆，896 座；除自身季目外也承接舞蹈、喜剧与巡演。"
  },
  {
    "id": "foundry",
    "name": "Foundry Theatre",
    "area": "Pyrmont",
    "region": "市区与东区",
    "address": "55 Pirrama Road, Pyrmont NSW 2009",
    "url": "https://www.foundrytheatre.com.au/",
    "programme": "https://www.foundrytheatre.com.au/",
    "note": "位于 Sydney Lyric 内的小剧场；音乐剧、话剧、喜剧与现场音乐。"
  },
  {
    "id": "teatro",
    "name": "Teatro at the Italian Forum",
    "area": "Leichhardt",
    "region": "内西区",
    "address": "Shop 30A/23 Norton Street, Leichhardt NSW 2040",
    "url": "https://teatroitalianforum.com.au/",
    "programme": "https://teatroitalianforum.com.au/whats-on",
    "note": "莱卡特 300 座专业音乐剧场，2025 年启用，是内西区音乐剧的新据点。"
  },
  {
    "id": "factory",
    "name": "Factory Theatre",
    "area": "Marrickville",
    "region": "内西区",
    "address": "105 Victoria Road, Marrickville NSW 2204",
    "url": "https://www.factorytheatre.com.au/",
    "programme": "https://www.factorytheatre.com.au/event",
    "note": "内西区多功能演出场馆，含多个空间；音乐剧、喜剧、歌舞与现场音乐。"
  },
  {
    "id": "comedystore",
    "name": "The Comedy Store",
    "area": "Moore Park",
    "region": "市区与东区",
    "address": "Building 207/122 Lang Road, The Entertainment Quarter, Moore Park NSW 2021",
    "url": "https://www.comedystore.com.au/",
    "programme": "https://www.comedystore.com.au/",
    "note": "1981 年开办的单口喜剧俱乐部，位于 Entertainment Quarter。"
  },
  {
    "id": "qtopia",
    "name": "Qtopia Sydney",
    "area": "Darlinghurst",
    "region": "市区与东区",
    "address": "301 Forbes Street, Darlinghurst NSW 2010",
    "url": "https://qtopiasydney.com.au/",
    "programme": "https://qtopiasydney.com.au/",
    "note": "酷儿历史与文化中心，内设 The Substation 等表演空间。"
  },
  {
    "id": "darlingquarter",
    "name": "Darling Quarter Theatre",
    "area": "Sydney CBD",
    "region": "市区与东区",
    "address": "Shop 3/1-25 Harbour Street, Sydney NSW 2000",
    "url": "https://www.darlingquartertheatre.com.au/",
    "programme": "https://www.darlingquartertheatre.com.au/",
    "note": "达令港区的剧场，常演喜剧、卡巴莱、音乐与亲子演出。"
  },
  {
    "id": "fools",
    "name": "Fool's Paradise (Entertainment Quarter)",
    "area": "Moore Park",
    "region": "市区与东区",
    "address": "Entertainment Quarter, 122 Lang Road, Moore Park NSW 2021",
    "url": "https://www.entertainmentquarter.com.au/",
    "programme": "https://sydneyfringe.com/fools-paradise",
    "note": "Sydney Fringe 的杂技与卡巴莱主场地，含 The Virago 与 The Bunker 两个空间。"
  },
  {
    "id": "newtownhotel",
    "name": "Newtown Hotel",
    "area": "Newtown",
    "region": "内西区",
    "address": "174 King Street, Newtown NSW 2042",
    "url": "https://newtownhotel.com.au/",
    "programme": "https://newtownhotel.com.au/",
    "note": "1887 年营业至今的酒吧，楼上与地下空间常演喜剧与歌舞。"
  },
  {
    "id": "chippo",
    "name": "The Chippo Hotel",
    "area": "Chippendale",
    "region": "内南区",
    "address": "87-91 Abercrombie Street, Chippendale NSW 2008",
    "url": "https://www.thechippohotel.com.au/",
    "programme": "https://www.thechippohotel.com.au/",
    "note": "Chippendale 的现场音乐与喜剧酒吧。"
  },
  {
    "id": "fringeontherocks",
    "name": "Fringe on The Rocks",
    "area": "The Rocks",
    "region": "市区与东区",
    "address": "6-8 Atherden Street, The Rocks NSW 2000",
    "url": "https://sydneyfringe.com/",
    "programme": "https://sydneyfringe.com/whats-on/",
    "note": "Sydney Fringe 在岩石区的旗舰场地，含多个楼层空间（另有 47 George Street）。"
  },
  {
    "id": "erskineville",
    "name": "Erskineville Town Hall",
    "area": "Erskineville",
    "region": "内西区",
    "address": "104 Erskineville Road, Erskineville NSW 2043",
    "url": "https://www.cityofsydney.nsw.gov.au/landmarks/erskineville-town-hall",
    "programme": "https://sydneyfringe.com/emerging-artist-share-house/",
    "note": "悉尼市议会市政厅；Fringe 期间作为新兴艺术家共享空间，含 The Spare Room、The Living Room 等房间。"
  },
  {
    "id": "marrickville",
    "name": "Marrickville Town Hall",
    "area": "Marrickville",
    "region": "内西区",
    "address": "303 Marrickville Road, Marrickville NSW 2204",
    "url": "https://www.innerwest.nsw.gov.au/town-halls-100-people/marrickville-town-hall",
    "programme": "https://sydneyfringe.com/",
    "note": "内西区议会市政厅；Fringe 的卡巴莱主场地，含 The Chambers 与 The Safe Room。"
  },
  {
    "id": "improv",
    "name": "Improv Theatre Sydney",
    "area": "Alexandria",
    "region": "内南区",
    "address": "44-54 Botany Road, Alexandria NSW 2015",
    "url": "https://improvtheatresydney.com.au/",
    "programme": "https://improvtheatresydney.com.au/",
    "note": "悉尼第一座专门即兴剧场，2014 年起运营。"
  },
  {
    "id": "eternity",
    "name": "Eternity Playhouse",
    "area": "Darlinghurst",
    "region": "市区与东区",
    "address": "39 Burton Street, Darlinghurst NSW 2010",
    "url": "https://www.cityofsydney.nsw.gov.au/hireable-indoor-spaces/eternity-playhouse",
    "programme": "https://sydneyfringe.com/",
    "note": "由 1884 年浸信会教堂改建的剧场；Fringe 期间作为 Off Broadway Hub。"
  },
  {
    "id": "barrelbelow",
    "name": "Barrel Below",
    "area": "Sydney CBD",
    "region": "市区与东区",
    "address": "115 Clarence Street, Sydney NSW 2000",
    "url": "https://sydneyfringe.com/",
    "programme": "https://tickets.sydneyfringe.com/Venues",
    "note": "Clarence Street 的地下演出空间；Fringe 期间作为 Multicultural Comedy Hub。"
  },
  {
    "id": "pact",
    "name": "PACT Centre for Emerging Artists",
    "area": "Erskineville",
    "region": "内西区",
    "address": "107 Railway Parade, Erskineville NSW 2043",
    "url": "https://www.pact.net.au/",
    "programme": "https://www.pact.net.au/",
    "note": "澳大利亚最早的新兴艺术家中心，含剧场与画廊空间。"
  },
  {
    "id": "potterylane",
    "name": "Pottery Lane Performance Space",
    "area": "Lane Cove",
    "region": "北岸",
    "address": "1 Pottery Lane, Lane Cove NSW 2066",
    "url": "https://www.lanecove.nsw.gov.au/Services/Facilities-for-Hire/Indoor-Venue-Hire/Lane-Cove-Community-Hub-Pottery-Lane-Performance-Space",
    "programme": "https://sydneyfringe.com/lane-cove-festival/",
    "note": "Lane Cove 市议会的演出空间，Fringe 期间举办 Lane Cove Festival。"
  },
  {
    "id": "pyt",
    "name": "PYT Fairfield",
    "area": "Fairfield",
    "region": "西区",
    "address": "Fairfield School of Arts, 19 Harris Street, Fairfield NSW 2165",
    "url": "https://pyt.com.au/",
    "programme": "https://pyt.com.au/",
    "note": "西悉尼的青年剧团与 Fairfield School of Arts 剧场。"
  },
  {
    "id": "studioone",
    "name": "Studio One (UNSW)",
    "area": "Kensington",
    "region": "市区与东区",
    "address": "Gate 2, High Street, Kensington NSW 2033",
    "url": "https://www.unsw.edu.au/arts-design-architecture/our-schools/arts-media/engage-with-us/esme-timbery-creative-practice-lab/venues-hires",
    "programme": "https://sydneyfringe.com/the-lab-unsw/",
    "note": "新南威尔士大学艺术与媒体学院的实验剧场；Fringe 期间作为 The Lab。"
  },
  {
    "id": "sydneyevent",
    "name": "Sydney Event Centre",
    "area": "Pyrmont",
    "region": "市区与东区",
    "address": "80 Pyrmont Street, Pyrmont NSW 2009",
    "url": "https://www.eventcentresydney.com.au/",
    "programme": "https://www.eventcentresydney.com.au/",
    "note": "Foundation Theatres 运营的商业演出场馆，位于 The Star Sydney。"
  },
  {
    "id": "shepherd21",
    "name": "21 Shepherd",
    "area": "Marrickville",
    "region": "内西区",
    "address": "21 Shepherd Street, Marrickville NSW 2204",
    "url": "https://livingroomtheatre.org/",
    "programme": "https://livingroomtheatre.org/",
    "note": "Livingroom Theatre 的独立演出空间，面向音乐、舞蹈与剧场。"
  },
  {
    "id": "chippen",
    "name": "Chippen St Theatre",
    "area": "Chippendale",
    "region": "内南区",
    "address": "Level 1, 45 Chippen Street, Chippendale NSW 2008",
    "url": "https://www.sydneyeisteddfod.com.au/",
    "programme": "https://www.sydneyeisteddfod.com.au/",
    "note": "悉尼 Eisteddfod 的剧场，靠近 Central 与 Redfern 车站。"
  },
  {
    "id": "drillhall",
    "name": "The Drill Hall",
    "area": "Darlinghurst",
    "region": "市区与东区",
    "address": "1C New Beach Road, Darlinghurst NSW 2011",
    "url": "https://criticalpath.org.au/",
    "programme": "https://criticalpath.org.au/",
    "note": "Woollahra 市议会所有、Critical Path 租赁的舞蹈研究场馆。"
  },
  {
    "id": "escac",
    "name": "East Sydney Community and Arts Centre",
    "area": "Darlinghurst",
    "region": "市区与东区",
    "address": "34-40 Burton Street, Darlinghurst NSW 2010",
    "url": "https://www.cityofsydney.nsw.gov.au/hireable-indoor-spaces/lower-hall-east-sydney-community-and-arts-centre",
    "programme": "https://brandx.org.au/about/our-venues/east-sydney-community-and-arts-centre-escac/",
    "note": "原 Heffron Hall，由 Brand X 与悉尼市议会运营的两层艺术空间。"
  },
  {
    "id": "flightpath",
    "name": "Flight Path Theatre",
    "area": "Marrickville",
    "region": "内西区",
    "address": "9b/142 Addison Road, Marrickville NSW 2204",
    "url": "https://www.flightpaththeatre.org/",
    "programme": "https://www.flightpaththeatre.org/",
    "note": "位于 Addison Road 社区中心的剧场，前身为旧教学楼。"
  },
  {
    "id": "pridecentre",
    "name": "Inner West Pride Centre",
    "area": "Newtown",
    "region": "内西区",
    "address": "1A Bedford Street, Newtown NSW 2042",
    "url": "https://www.innerwest.nsw.gov.au/lgbtq/inner-west-pride-centre",
    "programme": "https://www.innerwest.nsw.gov.au/lgbtq/inner-west-pride-centre",
    "note": "由 Newtown 市政厅改建的 LGBTQIA+ 中心，设有 Pride Hall。"
  },
  {
    "id": "low302",
    "name": "Low 302",
    "area": "Darlinghurst",
    "region": "市区与东区",
    "address": "302 Crown Street, Darlinghurst NSW 2010",
    "url": "https://low302.com.au/",
    "programme": "https://low302.com.au/",
    "note": "Crown Street 上的小型现场演出酒吧，常演卡巴莱与喜剧。"
  },
  {
    "id": "seandollys",
    "name": "Sean & Dolly's",
    "area": "Woolloomooloo",
    "region": "市区与东区",
    "address": "Basement, 220 William Street, Woolloomooloo NSW 2011",
    "url": "https://seananddollys.com/",
    "programme": "https://seananddollys.com/",
    "note": "William Street 地下层的钢琴酒吧，主打卡巴莱。"
  },
  {
    "id": "zenith",
    "name": "Zenith Theatre",
    "area": "Chatswood",
    "region": "北岸",
    "address": "Cnr McIntosh Street & Railway Street, Chatswood NSW 2067",
    "url": "https://www.zeniththeatre.com.au/",
    "programme": "https://www.zeniththeatre.com.au/",
    "note": "Willoughby 市议会运营的剧院与会议中心，位于 Chatswood。"
  },
  {
    "id": "actorspulse",
    "name": "The Actors Pulse Playhouse",
    "area": "Redfern",
    "region": "内南区",
    "address": "103 Regent Street, Redfern NSW 2016",
    "url": "https://www.theactorspulse.com.au/",
    "programme": "https://www.theactorspulse.com.au/",
    "note": "表演学校的 45 座剧场，楼上即 The Actors Pulse 工作室。"
  },
  {
    "id": "greektheatre",
    "name": "The Greek Theatre at Addi Road",
    "area": "Marrickville",
    "region": "内西区",
    "address": "Addison Road Community Centre, 142 Addison Road, Marrickville NSW 2204",
    "url": "https://www.hellenicarttheatre.com/",
    "programme": "https://sydneyfringe.com/",
    "note": "Addison Road 社区中心内由历史建筑改建的剧场，Hellenic Art Theatre 驻地。"
  },
  {
    "id": "oldfitz",
    "name": "Old Fitz Theatre",
    "area": "Woolloomooloo",
    "region": "市区与东区",
    "address": "129 Dowling Street, Woolloomooloo NSW 2011",
    "url": "https://www.oldfitztheatre.com.au/",
    "programme": "https://www.oldfitztheatre.com.au/",
    "note": "Old Fitzroy 酒店内的酒吧剧场，悉尼独立戏剧的重要据点。"
  },
  {
    "id": "pbc",
    "name": "Petersham Bowling Club",
    "area": "Petersham",
    "region": "内西区",
    "address": "77 Brighton Street, Petersham NSW 2049",
    "url": "https://www.thepbc.org.au/",
    "programme": "https://www.thepbc.org.au/",
    "note": "社区所有的保龄球俱乐部，常设现场音乐与小型演出。"
  },
  {
    "id": "flowstudios",
    "name": "Flow Studios",
    "area": "Camperdown",
    "region": "内西区",
    "address": "57 Denison Street, Camperdown NSW 2050",
    "url": "https://sydneyfringe.com/",
    "programme": "https://sydneyfringe.com/",
    "note": "Camperdown 的小型剧场与工作室空间。"
  },
  {
    "id": "nautistudios",
    "name": "Nauti Studios",
    "area": "Forest Lodge",
    "region": "内西区",
    "address": "189B St Johns Road, Forest Lodge NSW 2037",
    "url": "https://nautistudios.com.au/",
    "programme": "https://nautistudios.com.au/",
    "note": "工业仓库改建的创意工作室群，设有多个活动空间。"
  },
  {
    "id": "vaucluse",
    "name": "Vaucluse House",
    "area": "Vaucluse",
    "region": "市区与东区",
    "address": "69A Wentworth Road, Vaucluse NSW 2030",
    "url": "https://mhnsw.au/visit-us/vaucluse-house/",
    "programme": "https://mhnsw.au/visit-us/vaucluse-house/",
    "note": "新州历史博物馆管理的 19 世纪宅邸，园内偶尔举办演出。"
  },
  {
    "id": "woollahralibrary",
    "name": "Woollahra Library at Double Bay",
    "area": "Double Bay",
    "region": "市区与东区",
    "address": "Level 1, 451 New South Head Road, Double Bay NSW 2028",
    "url": "https://www.woollahra.nsw.gov.au/Library/Visit-Us/Double-Bay-Library",
    "programme": "https://www.woollahra.nsw.gov.au/Library",
    "note": "Woollahra 市议会图书馆，兼作小型演出与讲座场地。"
  },
  {
    "id": "lanecovecivic",
    "name": "Lane Cove Civic Centre",
    "area": "Lane Cove",
    "region": "北岸",
    "address": "48 Longueville Road, Lane Cove NSW 2066",
    "url": "https://www.lanecove.nsw.gov.au/Services/Facilities-for-Hire/Indoor-Venue-Hire/Civic-Centre-Cove-Room",
    "programme": "https://www.lanecove.nsw.gov.au/Community/Events-and-Festivals/Lane-Cove-Festival-2026",
    "note": "Lane Cove 市议会市民中心，Cove Room 可作演出与讲座场地。"
  },
  {
    "id": "canopy",
    "name": "The Canopy",
    "area": "Lane Cove",
    "region": "北岸",
    "address": "2 Rosenthal Avenue, Lane Cove NSW 2066",
    "url": "https://www.lanecove.nsw.gov.au/",
    "programme": "https://www.lanecove.nsw.gov.au/Community/Events-and-Festivals/Lane-Cove-Festival-2026",
    "note": "Rosenthal 停车场之上的露天舞台，Lane Cove Festival 主场地。"
  },
  {
    "id": "paddorsl",
    "name": "Paddo RSL",
    "area": "Paddington",
    "region": "市区与东区",
    "address": "220-232 Oxford Street, Paddington NSW 2021",
    "url": "https://paddorsl.com.au/",
    "programme": "https://paddorsl.com.au/",
    "note": "Oxford Street 上的退伍军人俱乐部，常办喜剧与音乐演出。"
  },
  {
    "id": "lansdowne",
    "name": "The Lansdowne Hotel",
    "area": "Chippendale",
    "region": "内南区",
    "address": "2-6 City Road, Chippendale NSW 2008",
    "url": "https://thelansdownepub.com.au/",
    "programme": "https://thelansdownepub.com.au/",
    "note": "悉尼老牌现场音乐酒吧，设有 300 人演出厅。"
  },
  {
    "id": "campbellstchurch",
    "name": "Campbell St Presbyterian Church",
    "area": "Balmain",
    "region": "内西区",
    "address": "7 Campbell Street, Balmain NSW 2041",
    "url": "https://www.campbellstreetchurch.com.au/",
    "programme": "https://www.campbellstreetchurch.com.au/",
    "note": "Balmain 的教堂，以管风琴与古典音乐会演出为主。"
  },
  {
    "id": "machinehall",
    "name": "Machine Hall",
    "area": "Sydney CBD",
    "region": "市区与东区",
    "address": "183 Clarence Street, Sydney NSW 2000",
    "url": "https://machinehall.com.au/",
    "programme": "https://machinehall.com.au/",
    "note": "由百年变电站改建的活动与演出空间，含多个厅。"
  },
  {
    "id": "churchststudios",
    "name": "Church Street Studios",
    "area": "Camperdown",
    "region": "内西区",
    "address": "62-68 Church Street, Camperdown NSW 2050",
    "url": "https://www.churchstreetstudios.com.au/",
    "programme": "https://www.churchstreetstudios.com.au/gigs",
    "note": "60 座的小型现场音乐空间，只在周末演出，不设酒吧。"
  },
  {
    "id": "vinechurch",
    "name": "Vine Church",
    "area": "Surry Hills",
    "region": "市区与东区",
    "address": "200 Albion Street, Surry Hills NSW 2010",
    "url": "https://vinechurch.com.au/venuehire/",
    "programme": "https://vinechurch.com.au/venuehire/",
    "note": "Surry Hills 的教堂，礼堂可租作演出与活动场地。"
  },
  {
    "id": "bryanbrown",
    "name": "Bryan Brown Theatre",
    "area": "Bankstown",
    "region": "西区",
    "address": "80 Rickard Road, Bankstown NSW 2200",
    "url": "https://bryanbrowntheatre.cbcity.nsw.gov.au/contact-us",
    "programme": "https://bryanbrowntheatre.cbcity.nsw.gov.au/contact-us",
    "note": "社区制作演出场馆；具体节目与入场信息请查官方页面。"
  },
  {
    "id": "rockdaletownhall",
    "name": "Rockdale Town Hall",
    "area": "Rockdale",
    "region": "南区",
    "address": "448 Princes Highway, Rockdale NSW 2216",
    "url": "https://www.rockdalemusicalsociety.com/",
    "programme": "https://www.rockdalemusicalsociety.com/",
    "note": "社区制作演出场馆；具体节目与入场信息请查官方页面。"
  },
  {
    "id": "smithauditorium",
    "name": "Smith Auditorium (Shore)",
    "area": "North Sydney",
    "region": "北岸",
    "address": "Shore School, Blue Street, North Sydney NSW 2060",
    "url": "https://www.gsosydney.com.au/booking.html",
    "programme": "https://www.gsosydney.com.au/booking.html",
    "note": "社区制作演出场馆；具体节目与入场信息请查官方页面。"
  },
  {
    "id": "petershamtownhall",
    "name": "Petersham Town Hall",
    "area": "Petersham",
    "region": "内西区",
    "address": "107 Crystal Street, Petersham NSW 2049",
    "url": "https://www.innerwesttheatre.com.au/productions/catch-me-if-you-can-2026",
    "programme": "https://www.innerwesttheatre.com.au/productions/catch-me-if-you-can-2026",
    "note": "社区制作演出场馆；具体节目与入场信息请查官方页面。"
  },
  {
    "id": "pioneer",
    "name": "Pioneer Theatre",
    "area": "Castle Hill",
    "region": "西区",
    "address": "Level 1, 12–14 Pennant Street, Castle Hill NSW 2154",
    "url": "https://www.pioneertheatre.com.au/contact",
    "programme": "https://www.pioneertheatre.com.au/contact",
    "note": "社区制作演出场馆；具体节目与入场信息请查官方页面。"
  },
  {
    "id": "pavilioncastlehill",
    "name": "Pavilion Theatre",
    "area": "Castle Hill",
    "region": "西区",
    "address": "Castle Hill Showground, Doran Drive, Castle Hill NSW 2154",
    "url": "https://paviliontheatre.org.au/the-audience/",
    "programme": "https://paviliontheatre.org.au/the-audience/",
    "note": "社区制作演出场馆；具体节目与入场信息请查官方页面。"
  },
  {
    "id": "genesian",
    "name": "Genesian Theatre",
    "area": "Rozelle",
    "region": "内西区",
    "address": "2B Gordon Street, Rozelle NSW 2039",
    "url": "https://genesiantheatre.com.au/events/yerma/",
    "programme": "https://genesiantheatre.com.au/events/yerma/",
    "note": "社区制作演出场馆；具体节目与入场信息请查官方页面。"
  },
  {
    "id": "clubryde",
    "name": "Hunters Hill Theatre at Club Ryde",
    "area": "Ryde",
    "region": "北岸",
    "address": "Level 2, Club Ryde Ex, 728 Victoria Road, Ryde NSW 2112",
    "url": "https://www.huntershilltheatre.com.au/contact-us",
    "programme": "https://www.huntershilltheatre.com.au/contact-us",
    "note": "社区制作演出场馆；具体节目与入场信息请查官方页面。"
  },
  {
    "id": "latviantheatre",
    "name": "Latvian Theatre",
    "area": "Strathfield",
    "region": "内西区",
    "address": "32 Parnell Street, Strathfield NSW 2135",
    "url": "https://strathfieldmusicalsociety.com.au",
    "programme": "https://strathfieldmusicalsociety.com.au",
    "note": "社区制作演出场馆；具体节目与入场信息请查官方页面。"
  },
  {
    "id": "northnarrabeen",
    "name": "North Narrabeen Community Centre",
    "area": "North Narrabeen",
    "region": "北岸",
    "address": "2–10 Woorarra Avenue, North Narrabeen NSW 2101",
    "url": "https://elanoraplayers.com.au/",
    "programme": "https://elanoraplayers.com.au/",
    "note": "社区制作演出场馆；具体节目与入场信息请查官方页面。"
  },
  {
    "id": "thecube",
    "name": "The CUBE",
    "area": "Campbelltown",
    "region": "西区",
    "address": "20–22 Camden Road, Campbelltown NSW 2560",
    "url": "https://www.ctgi.org.au/take-a-bow",
    "programme": "https://www.ctgi.org.au/take-a-bow",
    "note": "社区制作演出场馆；具体节目与入场信息请查官方页面。"
  },
  {
    "id": "guild",
    "name": "The Guild Theatre",
    "area": "Rockdale",
    "region": "南区",
    "address": "87 Railway Street, Rockdale NSW 2216",
    "url": "https://www.guildtheatre.com.au/",
    "programme": "https://www.guildtheatre.com.au/",
    "note": "社区制作演出场馆；具体节目与入场信息请查官方页面。"
  },
  {
    "id": "chester",
    "name": "Theatre on Chester",
    "area": "Epping",
    "region": "北岸",
    "address": "Corner Chester and Oxford Streets, Epping NSW 2121",
    "url": "https://www.theatreonchester.com.au/",
    "programme": "https://www.theatreonchester.com.au/",
    "note": "社区制作演出场馆；具体节目与入场信息请查官方页面。"
  },
  {
    "id": "engadine",
    "name": "Engadine Community Centre",
    "area": "Engadine",
    "region": "南区",
    "address": "1034–1036 Old Princes Highway, Engadine NSW 2233",
    "url": "https://www.engadinemusicalsociety.com.au/venues.html",
    "programme": "https://www.engadinemusicalsociety.com.au/venues.html",
    "note": "社区制作演出场馆；具体节目与入场信息请查官方页面。"
  },
  {
    "id": "beecroft",
    "name": "Beecroft Community Centre",
    "area": "Beecroft",
    "region": "北岸",
    "address": "109–111 Beecroft Road, Beecroft NSW 2119",
    "url": "https://communitytheatre.com.au/whats-on/rapunzel/",
    "programme": "https://communitytheatre.com.au/whats-on/rapunzel/",
    "note": "社区剧场；请查官方节目与入场指引。"
  },
  {
    "id": "artscronulla",
    "name": "Arts Theatre Cronulla",
    "area": "Cronulla",
    "region": "南区",
    "address": "6 Surf Road, Cronulla NSW 2230",
    "url": "https://www.artstheatrecronulla.com.au/",
    "programme": "https://www.artstheatrecronulla.com.au/",
    "note": "社区剧场；请查官方节目与入场指引。"
  }
];
const SHOWS = [
  {
    "id": "how-to-succeed",
    "title": "How to Succeed in Business Without Really Trying",
    "genre": "音乐剧",
    "scale": "独立制作",
    "venue": "hayes",
    "company": "LPD Productions / Hayes Theatre Co",
    "start": "2026-08-28",
    "end": "2026-09-27",
    "price": 89,
    "priceText": "A$89–105 · 常规成人票",
    "priceNote": "官网另列预演全价 A$75；预演是否仍有场次、优惠资格及手续费请查官方。",
    "duration": "约 2 小时 50 分钟，含中场",
    "desc": "一名擦窗工利用一本职场指南步步晋升。这部讽刺音乐剧以办公室野心与人际关系为题。",
    "source": "https://hayestheatre.com.au/event/how-to-succeed-in-business-without-really-trying/",
    "booking": "https://boxoffice.hayestheatre.com.au/WebPages/EntaWebGateway/gateway.aspx?E=N&QL=S210|RINT|VHTC|G~/WEBPAGES/EntaWebShow/ShowPerformance.aspx&colour=A7ECA7",
    "bookingLabel": "前往官方售票",
    "schedule": "周三至周六 19:30；周四 13:00；周六 13:30；周日 14:00。官网另列 8 月 29 日和 9 月 3 日无午场、9 月 1 日加场；未据此推算总场次。",
    "access": "轮椅席；包含成人主题、烟雾及闪光效果。",
    "sessions": [],
    "sessionsComplete": false,
    "verifiedAt": "2026-09-20",
    "image": "http://hayestheatre.com.au/wp-content/uploads/2025/09/HTS-Web-Banner-2026-Artworks.png",
    "imageCredit": "官方宣传图 © Hayes Theatre Co"
  },
  {
    "id": "tigers",
    "title": "We Are The Tigers",
    "genre": "音乐剧",
    "scale": "独立制作",
    "venue": "hayes",
    "company": "Cheers Productions / Hayes Theatre Co",
    "start": "2026-10-09",
    "end": "2026-11-08",
    "price": 69,
    "priceText": "A$69–89 · 成人／预演",
    "priceNote": "Under 35 票 A$64 起，有适用场次限制；手续费以官方结账页为准。",
    "duration": "约 2 小时 20 分钟，含中场",
    "desc": "一场啦啦队睡衣派对，突然变成充满秘密的悬疑之夜。流行摇滚音乐剧里的青春、友情与谋杀谜题。",
    "source": "https://hayestheatre.com.au/event/we-are-the-tigers/",
    "booking": "https://boxoffice.hayestheatre.com.au/WebPages/EntaWebGateway/gateway.aspx?E=N&QL=S211%7CRINT%7CVHTC%7CG~%2FWEBPAGES%2FEntaWebShow%2FShowPerformance.aspx&colour=FDA94F",
    "bookingLabel": "前往官方售票",
    "schedule": "周二 18:30；周三至周六 19:30；周四 13:00；周六 14:00；周日 17:00。10 月 10 日、15 日没有午场。",
    "access": "官网列有轮椅席；建议 15 岁以上。含闪光、舞台烟雾、暴力与粗俗语言。",
    "image": "https://hayestheatre.com.au/wp-content/uploads/2025/09/WATT26_2000x1000_clean.png",
    "imageCredit": "官方宣传图 © Hayes Theatre Co",
    "sessions": [],
    "sessionsComplete": false
  },
  {
    "id": "room",
    "title": "A Room with a View",
    "genre": "话剧",
    "scale": "专业制作",
    "venue": "belvoir",
    "space": "Upstairs Theatre",
    "company": "Belvoir",
    "start": "2026-10-03",
    "end": "2026-11-01",
    "price": 58,
    "priceText": "A$58 起 · 预演",
    "priceNote": "成人常规票 A$78–98；学生及其他优惠另有条件。手续费以官方为准。",
    "duration": "官方尚未公布",
    "desc": "改编自 E. M. Forster 的小说。一次佛罗伦萨之旅，改变了 Lucy 对爱情与人生选择的想象。",
    "source": "https://belvoir.com.au/productions/a-room-with-a-view/",
    "booking": "https://my.belvoir.com.au/overview/14656",
    "bookingLabel": "前往官方售票",
    "schedule": "已录入官网前 6 个面向公众的场次；完整日历请查看官方。10 月 7 日为受邀开幕场，不列入可购票场次。",
    "access": "内容提示及无障碍安排请查官方页面。",
    "image": "https://belvoir.com.au/wp-content/uploads/2025/08/Belvoir-2026_Room-with-a-View_web.jpg",
    "imageCredit": "官方宣传图 © Belvoir",
    "sessions": [
      [
        "2026-10-03",
        "19:30",
        "预演"
      ],
      [
        "2026-10-04",
        "18:30",
        "预演"
      ],
      [
        "2026-10-06",
        "19:30",
        "预演"
      ],
      [
        "2026-10-08",
        "19:30",
        ""
      ],
      [
        "2026-10-09",
        "19:30",
        "Queer Night"
      ],
      [
        "2026-10-10",
        "14:00",
        ""
      ]
    ],
    "sessionsComplete": false
  },
  {
    "id": "elevator",
    "title": "The Elevator",
    "genre": "话剧",
    "scale": "专业制作",
    "venue": "ensemble",
    "company": "Ensemble Theatre",
    "start": "2026-09-18",
    "end": "2026-10-18",
    "price": 90,
    "priceText": "A$90–95 · 成人",
    "priceNote": "全日制学生／30 岁以下 A$46；优惠资格及手续费以官方为准。",
    "duration": "90 分钟，无中场",
    "desc": "一名刚休完产假的 CEO 被困在办公室电梯里。一部关于企业环保形象、职场压力与谎言的澳洲黑色喜剧。",
    "source": "https://www.ensemble.com.au/shows/the-elevator/",
    "booking": "https://www.ensemble.com.au/shows/the-elevator/#",
    "bookingLabel": "官方场次与购票",
    "schedule": "本原型录入 4 个官网公布场次供体验；并非全季场次。",
    "access": "建议 14 岁以上；官网列有轮椅通道、听力环路与指定口述影像场。",
    "sessions": [
      [
        "2026-09-20",
        "17:00",
        "预演"
      ],
      [
        "2026-09-22",
        "11:00",
        ""
      ],
      [
        "2026-09-22",
        "19:30",
        "采样时售罄"
      ],
      [
        "2026-09-23",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "image": "https://www.ensemble.com.au/wp-content/uploads/2025/08/THE-ELEVATOR-new-image.jpg",
    "imageSource": "https://www.ensemble.com.au/shows/the-elevator/",
    "imageCredit": "官方宣传图 © Ensemble Theatre"
  },
  {
    "id": "current",
    "title": "Current",
    "genre": "舞蹈",
    "scale": "专业制作",
    "venue": "neilson",
    "company": "Sydney Dance Company",
    "start": "2026-09-03",
    "end": "2026-09-20",
    "price": 95,
    "priceText": "A$95 · 成人",
    "priceNote": "优惠票 A$77；25 岁以下 A$35，资格与手续费以官方为准。",
    "duration": "约 60 分钟，无中场",
    "desc": "四位编舞者的作品在同一晚相遇，以身体、节奏与不同创作语言探索当代舞。",
    "source": "https://www.sydneydancecompany.com/performance/current/",
    "booking": "https://my.sydneydancecompany.com/overview/2324",
    "bookingLabel": "前往官方售票",
    "schedule": "周三至周日演出，部分日子有两场；学校场与特殊场次另列。",
    "access": "含闪光、烟雾与成人主题；指定日期有 relaxed、口述影像及触觉辅助场。",
    "sessions": [
      [
        "2026-09-20",
        "14:00",
        ""
      ],
      [
        "2026-09-20",
        "17:15",
        ""
      ]
    ],
    "sessionsComplete": false
  },
  {
    "id": "silver",
    "title": "Silver Tongue",
    "genre": "音乐剧",
    "scale": "独立制作",
    "venue": "hayes",
    "company": "Hayes Theatre Co",
    "start": "2026-11-13",
    "end": "2026-12-12",
    "price": 74,
    "priceText": "A$74–95 · 成人／预演",
    "priceNote": "Under 35 指定场次 A$60 起；手续费以官方为准。",
    "duration": "约 100 分钟，无中场",
    "desc": "以《金银岛》为起点的新音乐剧。一位海盗女王和年轻旅伴，踏上关于野心、身份与选择的航程。",
    "source": "https://hayestheatre.com.au/event/silver-tongue/",
    "booking": "https://boxoffice.hayestheatre.com.au/WebPages/EntaWebGateway/gateway.aspx?E=N&QL=S213%7CVHTC%7CG~%2FWebPages%2FEntaWebShow%2FShowPerformance.aspx",
    "bookingLabel": "前往官方售票",
    "schedule": "周一 18:30；周二至周六 19:30；周四 13:00；周六 14:00。11 月 14 日、19 日没有午场。",
    "access": "官网列有轮椅席，12 月 9 日有字幕场；可能包含闪光与成人主题。",
    "sessions": [],
    "sessionsComplete": false,
    "image": "http://hayestheatre.com.au/wp-content/uploads/2025/09/ST26_2000x1000_clean-1024x512.png",
    "imageCredit": "官方宣传图 © Hayes Theatre Co"
  },
  {
    "id": "rink",
    "dateNeedsReview": false,
    "dateNote": "售票日历已确认最后一场为 10 月 4 日；官网首页结束日期尚未同步。",
    "title": "The Rink",
    "genre": "音乐剧",
    "scale": "独立制作",
    "venue": "hayes",
    "company": "Neglected Musicals / Hayes Theatre Co",
    "start": "2026-09-30",
    "end": "2026-10-04",
    "price": 65,
    "priceText": "A$65 · 全价",
    "priceNote": "手续费以官方为准。",
    "duration": "约 2 小时 15 分钟，含中场",
    "desc": "Kander 与 Ebb 的音乐剧，以即将拆除的溜冰场为背景，讲述母女如何面对彼此和过去。以手持剧本与钢琴伴奏形式呈现。",
    "source": "https://hayestheatre.com.au/event/the-rink/",
    "booking": "https://boxoffice.hayestheatre.com.au/WebPages/EntaWebGateway/gateway.aspx?E=N&QL=S215%7CRINT%7CVHTC%7CG~%2FWEBPAGES%2FEntaWebShow%2FShowPerformance.aspx&colour=A7ECA7",
    "bookingLabel": "官方场次与购票",
    "schedule": "官网首页列为 9 月 30 日至 10 月 2 日；详情页每周时间表包含更广日期，具体场次请以官方售票日历为准。",
    "access": "官网列有轮椅席。",
    "sessions": [],
    "sessionsComplete": false,
    "image": "http://hayestheatre.com.au/wp-content/uploads/2025/09/MGP25_TheRink_Hayes_05_Web_2000x1000_ImageOnly.jpg",
    "imageCredit": "官方宣传图 © Hayes Theatre Co"
  },
  {
    "id": "opera-hits",
    "title": "Great Opera Hits",
    "genre": "歌剧",
    "scale": "专业制作",
    "venue": "opera",
    "space": "Joan Sutherland Theatre",
    "company": "Opera Australia",
    "start": "2026-09-28",
    "end": "2026-10-26",
    "dateNote": "本轮已公布场次；非全年首演日期",
    "price": 69,
    "priceText": "A$69 起 + 订票费",
    "priceNote": "官网标注 A$9.80 订票费；实际总价以结账页为准。",
    "duration": "约 90 分钟，含 20 分钟中场",
    "desc": "由 Opera Australia 歌唱家带来的歌剧选段音乐会，配以钢琴伴奏。提供英文与简体中文字幕。",
    "source": "https://opera.org.au/productions/great-opera-hits-sydney",
    "booking": "https://opera.org.au/productions/great-opera-hits-sydney",
    "bookingLabel": "官方选场与购票",
    "schedule": "官网当前日历列出以下 11 个日期；这是本次采样的已公布场次，不代表全年总场数。",
    "access": "多语演唱，英文与简体中文字幕；无障碍座席请向官方确认。",
    "sessions": [
      [
        "2026-09-28",
        "18:30",
        ""
      ],
      [
        "2026-09-29",
        "19:30",
        ""
      ],
      [
        "2026-10-04",
        "20:00",
        ""
      ],
      [
        "2026-10-05",
        "18:30",
        ""
      ],
      [
        "2026-10-06",
        "18:30",
        ""
      ],
      [
        "2026-10-11",
        "20:00",
        ""
      ],
      [
        "2026-10-12",
        "18:30",
        ""
      ],
      [
        "2026-10-18",
        "20:00",
        ""
      ],
      [
        "2026-10-19",
        "18:30",
        ""
      ],
      [
        "2026-10-25",
        "20:00",
        ""
      ],
      [
        "2026-10-26",
        "18:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "image": "https://www.sydneyoperahouse.com/sites/default/files/styles/360x414/public/collaborodam_assets/greatoperahits-3-1.jpg?itok=IqoQFkOM",
    "imageSource": "https://www.sydneyoperahouse.com/opera-australia/2026-season/great-opera-hits-2026",
    "imageCredit": "官方宣传图 © Sydney Opera House"
  },
  {
    "id": "semele",
    "title": "Semele",
    "genre": "歌剧",
    "scale": "专业制作",
    "venue": "recital",
    "company": "Pinchgut Opera",
    "start": "2026-11-26",
    "end": "2026-12-02",
    "price": null,
    "priceText": "票价见官方",
    "duration": "约 3 小时，含中场",
    "desc": "Handel 的歌剧，讲述凡人 Semele 与神之间的爱情、野心和代价。由 Neil Armfield 执导，英文演唱并配字幕。",
    "source": "https://www.pinchgutopera.com.au/shows/semele-2026",
    "booking": "https://www.pinchgutopera.com.au/shows/semele-2026",
    "bookingLabel": "官方选场与购票",
    "schedule": "本季官网公布 5 场，日期与时间已逐场录入。",
    "access": "座席及无障碍安排请查官方。",
    "sessions": [
      [
        "2026-11-26",
        "19:00",
        ""
      ],
      [
        "2026-11-28",
        "14:00",
        ""
      ],
      [
        "2026-11-29",
        "17:00",
        ""
      ],
      [
        "2026-12-01",
        "12:00",
        ""
      ],
      [
        "2026-12-02",
        "19:00",
        ""
      ]
    ],
    "sessionsComplete": true,
    "image": "https://cdn.sanity.io/images/7ox9xefw/production/f00eabc99ddfdc0412ea51d7c69080c715e1773e-600x500.jpg?rect=0,93,600,314&w=1200&h=627&fit=crop&auto=format",
    "imageSource": "https://www.pinchgutopera.com.au/shows/semele-2026",
    "imageCredit": "官方宣传图 © Pinchgut Opera"
  },
  {
    "id": "six",
    "title": "SIX the Musical",
    "genre": "音乐剧",
    "scale": "商业巡演",
    "venue": "royal",
    "company": "制作方信息见官方节目页",
    "start": "2026-10-09",
    "end": "2026-12-20",
    "price": null,
    "priceText": "票价见官方",
    "duration": "约 80 分钟",
    "desc": "亨利八世的六位王后走上舞台，以流行音乐演唱会的形式重新讲述自己的故事。",
    "source": "https://theatreroyalsydney.com/shows/six-the-musical-2026/",
    "booking": "https://ticket.theatreroyalsydney.com/en/buyingflow/tickets/120",
    "bookingLabel": "官方场次与购票",
    "schedule": "演期已核实；尚未录入逐场日历。",
    "access": "年龄建议、内容提示与无障碍场次见官方。",
    "sessions": [],
    "sessionsComplete": false,
    "image": "https://theatreroyalsydney.com/wp-content/uploads/2026/03/SIX410_SYD_Theatre-Royal-Sydney-Production-Image-Updates_MAIN-SHOW-IMAGE_1920x1080-1024x576.jpg",
    "imageCredit": "官方宣传图 © Theatre Royal Sydney"
  },
  {
    "id": "billy",
    "title": "Billy Elliot",
    "genre": "音乐剧",
    "scale": "社区剧团",
    "venue": "concourse",
    "space": "The Concourse Theatre",
    "company": "Willoughby Theatre Company",
    "start": "2027-04-16",
    "end": "2027-04-25",
    "price": null,
    "priceText": "票价待补齐",
    "duration": "待官方确认",
    "desc": "Willoughby Theatre Company 公布的 2027 年社区音乐剧制作，演出地点为 Chatswood 的 The Concourse。",
    "source": "https://willoughbytheatreco.com.au/show/billy-elliot/",
    "booking": "https://willoughbytheatreco.com.au/show/billy-elliot/",
    "bookingLabel": "查看官方演出公告",
    "schedule": "已公布演期；开票状态与逐场时间请查官方公告。",
    "access": "待具体演出信息公布。",
    "sessions": [],
    "sessionsComplete": false,
    "image": "https://willoughbytheatreco.com.au/wp-content/uploads/2026/08/Email-Banners-44-scaled.png",
    "imageSource": "https://willoughbytheatreco.com.au/show/billy-elliot/",
    "imageCredit": "官方宣传图 © Willoughby Theatre Co"
  },
  {
    "id": "fiddler",
    "title": "Fiddler on the Roof",
    "genre": "音乐剧",
    "scale": "商业巡演",
    "venue": "royal",
    "company": "See official production credits",
    "start": "2026-07-31",
    "end": "2026-10-03",
    "source": "https://theatreroyalsydney.com/shows/fiddler-on-the-roof/",
    "booking": "https://ticket.theatreroyalsydney.com/en/buyingflow/tickets/92",
    "bookingLabel": "前往官方售票",
    "price": null,
    "priceText": "票价见官方",
    "duration": "约 2 小时 40 分钟，含 20 分钟中场",
    "access": "内容提示及无障碍安排请查官方页面。",
    "schedule": "演期已核实；逐场日历尚未录入。",
    "sessions": [],
    "sessionsComplete": false,
    "verifiedAt": "2026-09-20",
    "evidenceUrls": [
      "https://theatreroyalsydney.com/shows/fiddler-on-the-roof/",
      "https://theatreroyalsydney.com/news/john-waters-joins-the-cast-of-fiddler-on-the-roof/"
    ],
    "desc": "Tevye 与家人在变化的时代面对传统、爱情与离别。",
    "dateNote": "完整演期由剧院 2026 年 7 月公告补核；未采用详情页中旧的无障碍日期。",
    "image": "https://theatreroyalsydney.com/wp-content/uploads/2026/03/Fiddler-on-the-Roof-UK-Production-Sydney-2.jpg",
    "imageSource": "https://theatreroyalsydney.com/shows/fiddler-on-the-roof/",
    "imageCredit": "官方宣传图 © Theatre Royal Sydney"
  },
  {
    "id": "private-lives",
    "title": "Private Lives",
    "genre": "话剧",
    "scale": "商业巡演",
    "venue": "royal",
    "company": "See official production credits",
    "start": "2027-02-06",
    "end": "2027-03-14",
    "source": "https://theatreroyalsydney.com/shows/private-lives/",
    "booking": "https://ticket.theatreroyalsydney.com/en/buyingflow/tickets/190",
    "bookingLabel": "前往官方售票",
    "price": null,
    "priceText": "票价见官方",
    "duration": "约 2 小时 10 分钟，含 20 分钟中场",
    "access": "内容提示及无障碍安排请查官方页面。",
    "schedule": "演期已核实；逐场日历尚未录入。",
    "sessions": [],
    "sessionsComplete": false,
    "verifiedAt": "2026-09-20",
    "evidenceUrls": [
      "https://theatreroyalsydney.com/shows/private-lives/",
      "https://privatelivesplay.com.au/tickets/sydney/"
    ],
    "desc": "一对离婚夫妻与各自的新伴侣度蜜月时重逢，旧日感情再度引发混乱。",
    "dateNote": "剧院列出 2 月 6 日至 3 月 14 日；制作方悉尼页面补核年份为 2027。",
    "image": "https://theatreroyalsydney.com/wp-content/uploads/2026/06/Private-Lives-Theatre-Royal-Sydney-February-2027-1.jpg",
    "imageSource": "https://theatreroyalsydney.com/shows/private-lives/",
    "imageCredit": "官方宣传图 © Theatre Royal Sydney"
  },
  {
    "id": "next-to-godliness",
    "title": "Next to Godliness",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "newtheatre",
    "company": "New Theatre",
    "start": "2026-10-06",
    "end": "2026-10-31",
    "source": "https://newtheatre.org.au/next-to-godliness/",
    "booking": "https://aunewtheatre.sales.ticketsearch.com/sales/salesevent/156918",
    "bookingLabel": "前往官方售票",
    "price": 45,
    "priceText": "A$45 · 成人",
    "duration": "官方尚未公布",
    "access": "内容提示及无障碍安排请查官方页面。",
    "schedule": "已录入明确列出的预演与末场，共 3 场；周四至周六 19:30、周日 14:00 的通常排期未展开为完整日历。",
    "sessions": [
      [
        "2026-10-06",
        "19:30",
        "预演"
      ],
      [
        "2026-10-07",
        "19:30",
        "预演"
      ],
      [
        "2026-10-31",
        "14:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "verifiedAt": "2026-09-20",
    "evidenceUrls": [
      "https://newtheatre.org.au/next-to-godliness/"
    ],
    "desc": "犯罪现场清洁工发现受害人仍然活着，一场工作变成黑色讽刺闹剧。",
    "priceNote": "预演 A$25；优惠票 A$40，会员 A$30，周四优惠 A$30；另计手续费。",
    "image": "https://newtheatre.org.au/wp-content/uploads/2025/11/Next-To-Godliness-scaled.png",
    "imageSource": "https://newtheatre.org.au/next-to-godliness/",
    "imageCredit": "官方宣传图 © New Theatre"
  },
  {
    "id": "blithe-spirit",
    "title": "Blithe Spirit",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "newtheatre",
    "company": "New Theatre",
    "start": "2026-11-10",
    "end": "2026-12-12",
    "source": "https://newtheatre.org.au/blithe-spirit/",
    "booking": "https://aunewtheatre.sales.ticketsearch.com/sales/salesevent/156921",
    "bookingLabel": "前往官方售票",
    "price": 45,
    "priceText": "A$45 · 成人",
    "duration": "官方尚未公布",
    "access": "内容提示及无障碍安排请查官方页面。",
    "schedule": "已录入明确列出的预演与末场，共 3 场；周四至周六 19:30、周日 14:00 的通常排期未展开为完整日历。",
    "sessions": [
      [
        "2026-11-10",
        "19:30",
        "预演"
      ],
      [
        "2026-11-11",
        "19:30",
        "预演"
      ],
      [
        "2026-12-12",
        "14:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "verifiedAt": "2026-09-20",
    "evidenceUrls": [
      "https://newtheatre.org.au/blithe-spirit/"
    ],
    "desc": "作家为搜集素材举行降灵会，却招来了亡妻的鬼魂。",
    "priceNote": "预演 A$25；优惠票 A$40，会员 A$30，周四优惠 A$30；另计手续费。",
    "image": "https://newtheatre.org.au/wp-content/uploads/2025/11/Blithe-Spirit-scaled.png",
    "imageSource": "https://newtheatre.org.au/blithe-spirit/",
    "imageCredit": "官方宣传图 © New Theatre"
  },
  {
    "id": "wake-in-fright",
    "title": "Wake in Fright",
    "genre": "话剧",
    "scale": "专业制作",
    "venue": "carriageworks",
    "company": "Malthouse Theatre / Griffin Theatre Company / Carriageworks",
    "start": "2026-12-02",
    "end": "2026-12-19",
    "source": "https://griffintheatre.com.au/whats-on/wake-in-fright/",
    "booking": "https://welcome.griffintheatre.com.au/overview/5027",
    "bookingLabel": "前往官方售票",
    "price": 69,
    "priceText": "A$69 起 · 成人",
    "duration": "官方尚未公布",
    "access": "内容提示及无障碍安排请查官方页面。",
    "schedule": "12 月 2–3 日预演，4 日开幕，5–19 日正式演出。通常周一 18:30、周二至周五 19:30、周六 13:30 和 19:30；未推算场次总数。",
    "sessions": [],
    "sessionsComplete": false,
    "verifiedAt": "2026-09-20",
    "evidenceUrls": [
      "https://griffintheatre.com.au/whats-on/wake-in-fright/",
      "https://griffintheatre.com.au/",
      "https://carriageworks.com.au/visit/"
    ],
    "desc": "Zahra Newman 独角演出，讲述一名教师受困于澳洲内陆小镇的经历。",
    "priceNote": "订阅与青年优惠另有条件；结账金额以官方为准。",
    "space": "Bay 20",
    "image": "https://griffintheatre.com.au/wp-content/uploads/2025/09/Wake_16_9-scaled.jpg",
    "imageCredit": "官方宣传图 © Griffin Theatre Company"
  },
  {
    "id": "coconut-children",
    "title": "The Coconut Children",
    "genre": "话剧",
    "scale": "专业制作",
    "venue": "belvoir",
    "company": "Belvoir",
    "start": "2026-11-21",
    "end": "2026-12-20",
    "source": "https://belvoir.com.au/productions/the-coconut-children/",
    "booking": "https://my.belvoir.com.au/overview/14658",
    "bookingLabel": "前往官方售票",
    "price": null,
    "priceText": "票价见官方",
    "duration": "官方尚未公布",
    "access": "内容提示及无障碍安排请查官方页面。",
    "schedule": "已录入 4 场公开演出；排除学校场及受邀开幕场。",
    "sessions": [
      [
        "2026-11-21",
        "19:30",
        "预演"
      ],
      [
        "2026-11-22",
        "18:30",
        "预演"
      ],
      [
        "2026-11-26",
        "19:30",
        ""
      ],
      [
        "2026-11-28",
        "14:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "verifiedAt": "2026-09-20",
    "evidenceUrls": [
      "https://belvoir.com.au/productions/the-coconut-children/"
    ],
    "desc": "1998 年的 Cabramatta，两名年轻人在家庭、友情与成长之间寻找方向。",
    "space": "Upstairs Theatre",
    "image": "https://belvoir.com.au/wp-content/uploads/2025/08/Belvoir-2026_The-Coconut-Children_web.jpg",
    "imageCredit": "官方宣传图 © Belvoir St Theatre"
  },
  {
    "id": "stocktake",
    "title": "STOCKTAKE",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "belvoir",
    "company": "25A / Jess Zlotnick",
    "start": "2026-10-04",
    "end": "2026-10-25",
    "source": "https://belvoir.com.au/productions/stocktake/",
    "booking": "https://my.belvoir.com.au/overview/15291",
    "bookingLabel": "前往官方售票",
    "price": 25,
    "priceText": "A$25–35 · 成人",
    "duration": "85 分钟，无中场",
    "access": "含粗俗语言、恐怖、假血、身体恐怖与全黑效果；无障碍安排请查官方。",
    "schedule": "已录入 6 个明确日期；10 月 6 日采用单场列出的 19:45，与一般周二时间表不同。排除受邀开幕场。",
    "sessions": [
      [
        "2026-10-04",
        "18:45",
        "预演"
      ],
      [
        "2026-10-06",
        "19:45",
        "预演"
      ],
      [
        "2026-10-08",
        "19:45",
        "预演"
      ],
      [
        "2026-10-10",
        "14:15",
        ""
      ],
      [
        "2026-10-10",
        "19:45",
        ""
      ],
      [
        "2026-10-11",
        "17:15",
        ""
      ]
    ],
    "sessionsComplete": false,
    "verifiedAt": "2026-09-20",
    "evidenceUrls": [
      "https://belvoir.com.au/productions/stocktake/"
    ],
    "desc": "零售店员工的盘点工作逐渐显露不寻常的一面，一部职场恐怖喜剧。",
    "priceNote": "预演 A$20–30；具体票种与费用以官方为准。",
    "space": "Downstairs Theatre",
    "image": "https://belvoir.com.au/wp-content/uploads/2026/07/1-Landscape-1024x683.png",
    "imageCredit": "官方宣传图 © Belvoir St Theatre"
  },
  {
    "id": "the-lion-king",
    "title": "The Lion King",
    "genre": "音乐剧",
    "scale": "商业巡演",
    "venue": "capitol",
    "company": "",
    "start": "2026-09-20",
    "end": "2026-11-01",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "Ticketmaster 接口未返回票价，未作估算。",
    "duration": "",
    "desc": "The Lion King 在Capitol Theatre上演，演期 2026-09-20 至 2026-11-01，官方售票页已公布 50 场。本条目由 Ticketmaster 官方售票页汇总，暂无官方剧情简介。",
    "source": "https://www.ticketmaster.com.au/disney-presents-the-lion-king-australia-haymarket-20-09-2026/event/13006329AFED4383",
    "booking": "https://www.ticketmaster.com.au/disney-presents-the-lion-king-australia-haymarket-20-09-2026/event/13006329AFED4383",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-20",
        "13:00",
        ""
      ],
      [
        "2026-09-20",
        "18:30",
        ""
      ],
      [
        "2026-09-23",
        "13:00",
        ""
      ],
      [
        "2026-09-23",
        "19:00",
        ""
      ],
      [
        "2026-09-24",
        "19:00",
        ""
      ],
      [
        "2026-09-25",
        "19:30",
        ""
      ],
      [
        "2026-09-26",
        "14:00",
        ""
      ],
      [
        "2026-09-26",
        "19:30",
        ""
      ],
      [
        "2026-09-27",
        "13:00",
        ""
      ],
      [
        "2026-09-27",
        "18:30",
        ""
      ],
      [
        "2026-09-30",
        "13:00",
        ""
      ],
      [
        "2026-09-30",
        "19:00",
        ""
      ],
      [
        "2026-10-01",
        "13:00",
        ""
      ],
      [
        "2026-10-02",
        "19:30",
        ""
      ],
      [
        "2026-10-03",
        "14:00",
        ""
      ],
      [
        "2026-10-03",
        "19:30",
        ""
      ],
      [
        "2026-10-04",
        "13:00",
        ""
      ],
      [
        "2026-10-04",
        "18:30",
        ""
      ],
      [
        "2026-10-07",
        "13:00",
        ""
      ],
      [
        "2026-10-07",
        "19:00",
        ""
      ],
      [
        "2026-10-08",
        "13:00",
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
      ],
      [
        "2026-10-11",
        "13:00",
        ""
      ],
      [
        "2026-10-11",
        "18:30",
        ""
      ],
      [
        "2026-10-14",
        "13:00",
        ""
      ],
      [
        "2026-10-14",
        "19:00",
        ""
      ],
      [
        "2026-10-15",
        "19:00",
        ""
      ],
      [
        "2026-10-16",
        "19:30",
        ""
      ],
      [
        "2026-10-17",
        "14:00",
        ""
      ],
      [
        "2026-10-17",
        "19:30",
        ""
      ],
      [
        "2026-10-18",
        "13:00",
        ""
      ],
      [
        "2026-10-18",
        "18:30",
        ""
      ],
      [
        "2026-10-21",
        "13:00",
        ""
      ],
      [
        "2026-10-21",
        "19:00",
        ""
      ],
      [
        "2026-10-22",
        "19:00",
        ""
      ],
      [
        "2026-10-23",
        "19:30",
        ""
      ],
      [
        "2026-10-24",
        "14:00",
        ""
      ],
      [
        "2026-10-24",
        "19:30",
        ""
      ],
      [
        "2026-10-25",
        "13:00",
        ""
      ],
      [
        "2026-10-25",
        "18:30",
        ""
      ],
      [
        "2026-10-28",
        "13:00",
        ""
      ],
      [
        "2026-10-28",
        "19:00",
        ""
      ],
      [
        "2026-10-29",
        "19:00",
        ""
      ],
      [
        "2026-10-30",
        "19:30",
        ""
      ],
      [
        "2026-10-31",
        "14:00",
        ""
      ],
      [
        "2026-10-31",
        "19:30",
        ""
      ],
      [
        "2026-11-01",
        "13:00",
        ""
      ],
      [
        "2026-11-01",
        "18:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 50 场（2026-09-20 至 2026-11-01）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "image": "https://foundation-prod.imgix.net/shows/headers/the-lion-king--thumbnail.jpg",
    "imageCredit": "官方宣传图 © Capitol Theatre"
  },
  {
    "id": "my-fair-lady",
    "title": "My Fair Lady",
    "genre": "音乐剧",
    "scale": "专业制作",
    "venue": "opera",
    "company": "Opera Australia",
    "start": "2026-09-20",
    "end": "2026-10-30",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "Ticketmaster 接口未返回票价，未作估算。",
    "duration": "",
    "desc": "My Fair Lady 在Sydney Opera House上演，演期 2026-09-20 至 2026-10-30，官方售票页已公布 48 场。本条目由 Ticketmaster 官方售票页汇总，暂无官方剧情简介。",
    "source": "https://www.ticketmaster.com.au/my-fair-lady-australia-sydney-20-09-2026/event/1300632BB9103D25",
    "booking": "https://www.ticketmaster.com.au/my-fair-lady-australia-sydney-20-09-2026/event/1300632BB9103D25",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-20",
        "15:00",
        ""
      ],
      [
        "2026-09-22",
        "19:00",
        ""
      ],
      [
        "2026-09-23",
        "13:00",
        ""
      ],
      [
        "2026-09-23",
        "19:30",
        ""
      ],
      [
        "2026-09-24",
        "19:30",
        ""
      ],
      [
        "2026-09-25",
        "19:30",
        ""
      ],
      [
        "2026-09-26",
        "14:00",
        ""
      ],
      [
        "2026-09-26",
        "19:30",
        ""
      ],
      [
        "2026-09-27",
        "15:00",
        ""
      ],
      [
        "2026-09-29",
        "13:00",
        ""
      ],
      [
        "2026-09-30",
        "13:00",
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
        "14:00",
        ""
      ],
      [
        "2026-10-03",
        "19:30",
        ""
      ],
      [
        "2026-10-04",
        "15:00",
        ""
      ],
      [
        "2026-10-06",
        "13:00",
        ""
      ],
      [
        "2026-10-07",
        "13:00",
        ""
      ],
      [
        "2026-10-07",
        "19:30",
        ""
      ],
      [
        "2026-10-08",
        "13:00",
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
      ],
      [
        "2026-10-11",
        "15:00",
        ""
      ],
      [
        "2026-10-13",
        "19:00",
        ""
      ],
      [
        "2026-10-14",
        "13:00",
        ""
      ],
      [
        "2026-10-14",
        "19:30",
        ""
      ],
      [
        "2026-10-15",
        "19:30",
        ""
      ],
      [
        "2026-10-16",
        "19:30",
        ""
      ],
      [
        "2026-10-17",
        "14:00",
        ""
      ],
      [
        "2026-10-17",
        "19:30",
        ""
      ],
      [
        "2026-10-18",
        "15:00",
        ""
      ],
      [
        "2026-10-20",
        "19:00",
        ""
      ],
      [
        "2026-10-21",
        "13:00",
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
        "14:00",
        ""
      ],
      [
        "2026-10-24",
        "19:30",
        ""
      ],
      [
        "2026-10-25",
        "15:00",
        ""
      ],
      [
        "2026-10-27",
        "19:00",
        ""
      ],
      [
        "2026-10-28",
        "13:00",
        ""
      ],
      [
        "2026-10-28",
        "19:30",
        ""
      ],
      [
        "2026-10-29",
        "13:00",
        ""
      ],
      [
        "2026-10-29",
        "19:30",
        ""
      ],
      [
        "2026-10-30",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 48 场（2026-09-20 至 2026-10-30）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Joan Sutherland Theatre",
    "image": "https://www.sydneyoperahouse.com/sites/default/files/styles/360x414/public/collaborodam_assets/MFL2026_2560x854.jpg?itok=_a-VtflC",
    "imageSource": "https://www.sydneyoperahouse.com/opera-australia/2026-season/my-fair-lady",
    "imageCredit": "官方宣传图 © Sydney Opera House"
  },
  {
    "id": "dracula",
    "title": "Dracula",
    "genre": "舞蹈",
    "scale": "商业巡演",
    "venue": "capitol",
    "company": "BIG LIVE",
    "start": "2026-11-07",
    "end": "2026-11-29",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "Ticketmaster 接口未返回票价，未作估算。",
    "duration": "",
    "desc": "Dracula 在Capitol Theatre上演，演期 2026-11-07 至 2026-11-29，官方售票页已公布 22 场。本条目由 Ticketmaster 官方售票页汇总，暂无官方剧情简介。",
    "source": "https://www.ticketmaster.com.au/dracula-haymarket-07-11-2026/event/130064FFBF1C6A91",
    "booking": "https://www.ticketmaster.com.au/dracula-haymarket-07-11-2026/event/130064FFBF1C6A91",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-11-07",
        "14:00",
        ""
      ],
      [
        "2026-11-07",
        "19:00",
        ""
      ],
      [
        "2026-11-08",
        "13:00",
        ""
      ],
      [
        "2026-11-08",
        "18:00",
        ""
      ],
      [
        "2026-11-12",
        "19:00",
        ""
      ],
      [
        "2026-11-13",
        "19:00",
        ""
      ],
      [
        "2026-11-14",
        "14:00",
        ""
      ],
      [
        "2026-11-14",
        "19:00",
        ""
      ],
      [
        "2026-11-15",
        "13:00",
        ""
      ],
      [
        "2026-11-15",
        "18:00",
        ""
      ],
      [
        "2026-11-19",
        "19:00",
        ""
      ],
      [
        "2026-11-20",
        "19:00",
        ""
      ],
      [
        "2026-11-21",
        "14:00",
        ""
      ],
      [
        "2026-11-21",
        "19:00",
        ""
      ],
      [
        "2026-11-22",
        "13:00",
        ""
      ],
      [
        "2026-11-22",
        "18:00",
        ""
      ],
      [
        "2026-11-26",
        "19:00",
        ""
      ],
      [
        "2026-11-27",
        "19:00",
        ""
      ],
      [
        "2026-11-28",
        "14:00",
        ""
      ],
      [
        "2026-11-28",
        "19:00",
        ""
      ],
      [
        "2026-11-29",
        "13:00",
        ""
      ],
      [
        "2026-11-29",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 22 场（2026-11-07 至 2026-11-29）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "image": "https://foundation-prod.imgix.net/shows/headers/dracula-capitol-thumbnail.png",
    "imageCredit": "官方宣传图 © Capitol Theatre"
  },
  {
    "id": "a-beautiful-noise",
    "title": "A Beautiful Noise",
    "genre": "音乐剧",
    "scale": "商业巡演",
    "venue": "lyric",
    "company": "TEG AUSTRALIA",
    "start": "2026-11-14",
    "end": "2027-02-14",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "Ticketmaster 接口未返回票价，未作估算。",
    "duration": "",
    "desc": "A Beautiful Noise 在Sydney Lyric上演，演期 2026-11-14 至 2027-02-14，官方售票页已公布 106 场。本条目由 Ticketmaster 官方售票页汇总，暂无官方剧情简介。",
    "source": "https://www.ticketmaster.com.au/a-beautiful-noise-pyrmont-14-11-2026/event/130064BD999046C8",
    "booking": "https://www.ticketmaster.com.au/a-beautiful-noise-pyrmont-14-11-2026/event/130064BD999046C8",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-11-14",
        "14:00",
        ""
      ],
      [
        "2026-11-14",
        "19:30",
        ""
      ],
      [
        "2026-11-15",
        "13:00",
        ""
      ],
      [
        "2026-11-15",
        "18:30",
        ""
      ],
      [
        "2026-11-17",
        "19:00",
        ""
      ],
      [
        "2026-11-18",
        "19:30",
        ""
      ],
      [
        "2026-11-19",
        "19:00",
        ""
      ],
      [
        "2026-11-20",
        "19:30",
        ""
      ],
      [
        "2026-11-21",
        "14:00",
        ""
      ],
      [
        "2026-11-21",
        "19:30",
        ""
      ],
      [
        "2026-11-22",
        "13:00",
        ""
      ],
      [
        "2026-11-22",
        "18:30",
        ""
      ],
      [
        "2026-11-25",
        "13:00",
        ""
      ],
      [
        "2026-11-25",
        "19:30",
        ""
      ],
      [
        "2026-11-26",
        "19:30",
        ""
      ],
      [
        "2026-11-27",
        "19:30",
        ""
      ],
      [
        "2026-11-28",
        "14:00",
        ""
      ],
      [
        "2026-11-28",
        "19:30",
        ""
      ],
      [
        "2026-11-29",
        "13:00",
        ""
      ],
      [
        "2026-11-29",
        "18:30",
        ""
      ],
      [
        "2026-12-02",
        "13:00",
        ""
      ],
      [
        "2026-12-03",
        "13:00",
        ""
      ],
      [
        "2026-12-03",
        "19:30",
        ""
      ],
      [
        "2026-12-04",
        "19:30",
        ""
      ],
      [
        "2026-12-05",
        "14:00",
        ""
      ],
      [
        "2026-12-05",
        "19:30",
        ""
      ],
      [
        "2026-12-06",
        "13:00",
        ""
      ],
      [
        "2026-12-06",
        "18:30",
        ""
      ],
      [
        "2026-12-09",
        "13:00",
        ""
      ],
      [
        "2026-12-10",
        "13:00",
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
      ],
      [
        "2026-12-13",
        "13:00",
        ""
      ],
      [
        "2026-12-13",
        "18:30",
        ""
      ],
      [
        "2026-12-16",
        "13:00",
        ""
      ],
      [
        "2026-12-16",
        "19:30",
        ""
      ],
      [
        "2026-12-17",
        "19:30",
        ""
      ],
      [
        "2026-12-18",
        "19:30",
        ""
      ],
      [
        "2026-12-19",
        "14:00",
        ""
      ],
      [
        "2026-12-19",
        "19:30",
        ""
      ],
      [
        "2026-12-20",
        "13:00",
        ""
      ],
      [
        "2026-12-20",
        "18:30",
        ""
      ],
      [
        "2026-12-22",
        "19:00",
        ""
      ],
      [
        "2026-12-23",
        "13:00",
        ""
      ],
      [
        "2026-12-23",
        "19:30",
        ""
      ],
      [
        "2026-12-26",
        "19:30",
        ""
      ],
      [
        "2026-12-27",
        "13:00",
        ""
      ],
      [
        "2026-12-27",
        "18:30",
        ""
      ],
      [
        "2026-12-29",
        "19:00",
        ""
      ],
      [
        "2026-12-30",
        "13:00",
        ""
      ],
      [
        "2026-12-30",
        "19:30",
        ""
      ],
      [
        "2027-01-01",
        "15:00",
        ""
      ],
      [
        "2027-01-02",
        "14:00",
        ""
      ],
      [
        "2027-01-02",
        "19:30",
        ""
      ],
      [
        "2027-01-03",
        "13:00",
        ""
      ],
      [
        "2027-01-03",
        "18:30",
        ""
      ],
      [
        "2027-01-06",
        "13:00",
        ""
      ],
      [
        "2027-01-06",
        "19:30",
        ""
      ],
      [
        "2027-01-07",
        "19:30",
        ""
      ],
      [
        "2027-01-08",
        "19:30",
        ""
      ],
      [
        "2027-01-09",
        "14:00",
        ""
      ],
      [
        "2027-01-09",
        "19:30",
        ""
      ],
      [
        "2027-01-10",
        "13:00",
        ""
      ],
      [
        "2027-01-10",
        "18:30",
        ""
      ],
      [
        "2027-01-13",
        "13:00",
        ""
      ],
      [
        "2027-01-13",
        "19:30",
        ""
      ],
      [
        "2027-01-14",
        "19:30",
        ""
      ],
      [
        "2027-01-15",
        "19:30",
        ""
      ],
      [
        "2027-01-16",
        "14:00",
        ""
      ],
      [
        "2027-01-16",
        "19:30",
        ""
      ],
      [
        "2027-01-17",
        "13:00",
        ""
      ],
      [
        "2027-01-17",
        "18:30",
        ""
      ],
      [
        "2027-01-20",
        "13:00",
        ""
      ],
      [
        "2027-01-20",
        "19:30",
        ""
      ],
      [
        "2027-01-21",
        "19:30",
        ""
      ],
      [
        "2027-01-22",
        "19:30",
        ""
      ],
      [
        "2027-01-23",
        "14:00",
        ""
      ],
      [
        "2027-01-23",
        "19:30",
        ""
      ],
      [
        "2027-01-24",
        "13:00",
        ""
      ],
      [
        "2027-01-24",
        "18:30",
        ""
      ],
      [
        "2027-01-27",
        "13:00",
        ""
      ],
      [
        "2027-01-27",
        "19:30",
        ""
      ],
      [
        "2027-01-28",
        "19:30",
        ""
      ],
      [
        "2027-01-29",
        "19:30",
        ""
      ],
      [
        "2027-01-30",
        "14:00",
        ""
      ],
      [
        "2027-01-30",
        "19:30",
        ""
      ],
      [
        "2027-01-31",
        "13:00",
        ""
      ],
      [
        "2027-01-31",
        "18:30",
        ""
      ],
      [
        "2027-02-03",
        "13:00",
        ""
      ],
      [
        "2027-02-03",
        "19:30",
        ""
      ],
      [
        "2027-02-04",
        "19:30",
        ""
      ],
      [
        "2027-02-05",
        "19:30",
        ""
      ],
      [
        "2027-02-06",
        "14:00",
        ""
      ],
      [
        "2027-02-06",
        "19:30",
        ""
      ],
      [
        "2027-02-07",
        "13:00",
        ""
      ],
      [
        "2027-02-07",
        "18:30",
        ""
      ],
      [
        "2027-02-09",
        "19:00",
        ""
      ],
      [
        "2027-02-10",
        "13:00",
        ""
      ],
      [
        "2027-02-10",
        "19:30",
        ""
      ],
      [
        "2027-02-11",
        "19:30",
        ""
      ],
      [
        "2027-02-12",
        "19:30",
        ""
      ],
      [
        "2027-02-13",
        "14:00",
        ""
      ],
      [
        "2027-02-13",
        "19:30",
        ""
      ],
      [
        "2027-02-14",
        "13:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 106 场（2026-11-14 至 2027-02-14）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "image": "https://foundation-prod.imgix.net/shows/headers/abn265-syd-foundation-website-refresh-3296x1854-fa-1.jpg",
    "imageCredit": "官方宣传图 © Sydney Lyric"
  },
  {
    "id": "the-nutcracker",
    "title": "The Nutcracker",
    "genre": "舞蹈",
    "scale": "商业巡演",
    "venue": "capitol",
    "company": "",
    "start": "2026-12-04",
    "end": "2026-12-23",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "Ticketmaster 接口未返回票价，未作估算。",
    "duration": "",
    "desc": "The Nutcracker 在Capitol Theatre上演，演期 2026-12-04 至 2026-12-23，官方售票页已公布 21 场。本条目由 Ticketmaster 官方售票页汇总，暂无官方剧情简介。",
    "source": "https://www.ticketmaster.com.au/the-nutcracker-haymarket-04-12-2026/event/1300650B88CD17BC",
    "booking": "https://www.ticketmaster.com.au/the-nutcracker-haymarket-04-12-2026/event/1300650B88CD17BC",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-12-04",
        "19:00",
        ""
      ],
      [
        "2026-12-05",
        "14:30",
        ""
      ],
      [
        "2026-12-05",
        "19:00",
        ""
      ],
      [
        "2026-12-06",
        "13:00",
        ""
      ],
      [
        "2026-12-06",
        "18:00",
        ""
      ],
      [
        "2026-12-09",
        "14:00",
        ""
      ],
      [
        "2026-12-10",
        "18:30",
        ""
      ],
      [
        "2026-12-11",
        "19:00",
        ""
      ],
      [
        "2026-12-12",
        "14:30",
        ""
      ],
      [
        "2026-12-12",
        "19:00",
        ""
      ],
      [
        "2026-12-13",
        "13:00",
        ""
      ],
      [
        "2026-12-13",
        "18:00",
        ""
      ],
      [
        "2026-12-16",
        "14:00",
        ""
      ],
      [
        "2026-12-17",
        "18:30",
        ""
      ],
      [
        "2026-12-18",
        "19:00",
        ""
      ],
      [
        "2026-12-19",
        "14:30",
        ""
      ],
      [
        "2026-12-19",
        "19:00",
        ""
      ],
      [
        "2026-12-20",
        "13:00",
        ""
      ],
      [
        "2026-12-20",
        "18:00",
        ""
      ],
      [
        "2026-12-23",
        "14:30",
        ""
      ],
      [
        "2026-12-23",
        "18:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 21 场（2026-12-04 至 2026-12-23）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "image": "https://foundation-prod.imgix.net/shows/headers/capitol-nutcracker-thumbnail.png",
    "imageCredit": "官方宣传图 © Capitol Theatre"
  },
  {
    "id": "moulin-rouge-the-musical",
    "title": "Moulin Rouge! The Musical",
    "genre": "音乐剧",
    "scale": "商业巡演",
    "venue": "lyric",
    "company": "GLOBAL CREATURES",
    "start": "2027-03-09",
    "end": "2027-05-02",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "Ticketmaster 接口未返回票价，未作估算。",
    "duration": "",
    "desc": "Moulin Rouge! The Musical 在Sydney Lyric上演，演期 2027-03-09 至 2027-05-02，官方售票页已公布 62 场。本条目由 Ticketmaster 官方售票页汇总，暂无官方剧情简介。",
    "source": "https://www.ticketmaster.com.au/moulin-rouge-the-musical-australia-pyrmont-09-03-2027/event/1300644C7EAE399B",
    "booking": "https://www.ticketmaster.com.au/moulin-rouge-the-musical-australia-pyrmont-09-03-2027/event/1300644C7EAE399B",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2027-03-09",
        "19:00",
        ""
      ],
      [
        "2027-03-10",
        "19:00",
        ""
      ],
      [
        "2027-03-11",
        "19:00",
        ""
      ],
      [
        "2027-03-12",
        "19:30",
        ""
      ],
      [
        "2027-03-13",
        "14:00",
        ""
      ],
      [
        "2027-03-13",
        "19:30",
        ""
      ],
      [
        "2027-03-14",
        "15:00",
        ""
      ],
      [
        "2027-03-16",
        "19:00",
        ""
      ],
      [
        "2027-03-17",
        "19:00",
        ""
      ],
      [
        "2027-03-18",
        "19:00",
        ""
      ],
      [
        "2027-03-19",
        "19:30",
        ""
      ],
      [
        "2027-03-20",
        "14:00",
        ""
      ],
      [
        "2027-03-20",
        "19:30",
        ""
      ],
      [
        "2027-03-21",
        "15:00",
        ""
      ],
      [
        "2027-03-23",
        "19:00",
        ""
      ],
      [
        "2027-03-24",
        "13:00",
        ""
      ],
      [
        "2027-03-24",
        "19:00",
        ""
      ],
      [
        "2027-03-25",
        "19:00",
        ""
      ],
      [
        "2027-03-26",
        "19:30",
        ""
      ],
      [
        "2027-03-27",
        "14:00",
        ""
      ],
      [
        "2027-03-27",
        "19:30",
        ""
      ],
      [
        "2027-03-28",
        "15:00",
        ""
      ],
      [
        "2027-03-30",
        "19:00",
        ""
      ],
      [
        "2027-03-31",
        "13:00",
        ""
      ],
      [
        "2027-03-31",
        "19:00",
        ""
      ],
      [
        "2027-04-01",
        "19:00",
        ""
      ],
      [
        "2027-04-02",
        "19:30",
        ""
      ],
      [
        "2027-04-03",
        "14:00",
        ""
      ],
      [
        "2027-04-03",
        "19:30",
        ""
      ],
      [
        "2027-04-04",
        "15:00",
        ""
      ],
      [
        "2027-04-06",
        "19:00",
        ""
      ],
      [
        "2027-04-07",
        "13:00",
        ""
      ],
      [
        "2027-04-07",
        "19:00",
        ""
      ],
      [
        "2027-04-08",
        "19:00",
        ""
      ],
      [
        "2027-04-09",
        "19:30",
        ""
      ],
      [
        "2027-04-10",
        "14:00",
        ""
      ],
      [
        "2027-04-10",
        "19:30",
        ""
      ],
      [
        "2027-04-11",
        "15:00",
        ""
      ],
      [
        "2027-04-13",
        "19:00",
        ""
      ],
      [
        "2027-04-14",
        "13:00",
        ""
      ],
      [
        "2027-04-14",
        "19:00",
        ""
      ],
      [
        "2027-04-15",
        "19:00",
        ""
      ],
      [
        "2027-04-16",
        "19:30",
        ""
      ],
      [
        "2027-04-17",
        "14:00",
        ""
      ],
      [
        "2027-04-17",
        "19:30",
        ""
      ],
      [
        "2027-04-18",
        "15:00",
        ""
      ],
      [
        "2027-04-20",
        "19:00",
        ""
      ],
      [
        "2027-04-21",
        "13:00",
        ""
      ],
      [
        "2027-04-21",
        "19:00",
        ""
      ],
      [
        "2027-04-22",
        "19:00",
        ""
      ],
      [
        "2027-04-23",
        "19:30",
        ""
      ],
      [
        "2027-04-24",
        "14:00",
        ""
      ],
      [
        "2027-04-24",
        "19:30",
        ""
      ],
      [
        "2027-04-25",
        "15:00",
        ""
      ],
      [
        "2027-04-27",
        "19:00",
        ""
      ],
      [
        "2027-04-28",
        "13:00",
        ""
      ],
      [
        "2027-04-28",
        "19:00",
        ""
      ],
      [
        "2027-04-29",
        "19:00",
        ""
      ],
      [
        "2027-04-30",
        "19:30",
        ""
      ],
      [
        "2027-05-01",
        "14:00",
        ""
      ],
      [
        "2027-05-01",
        "19:30",
        ""
      ],
      [
        "2027-05-02",
        "15:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 62 场（2027-03-09 至 2027-05-02）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "image": "https://foundation-prod.imgix.net/shows/headers/mrtm---sydney-lyric-and-ticketmaster-website-assets-v1-thumbnail-2048-x-1364-px.jpg",
    "imageCredit": "官方宣传图 © Sydney Lyric"
  },
  {
    "id": "the-shark-is-broken",
    "title": "The Shark Is Broken",
    "genre": "话剧",
    "scale": "专业制作",
    "venue": "foundry",
    "company": "",
    "start": "2026-09-20",
    "end": "2026-10-04",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "Ticketmaster 接口未返回票价，未作估算。",
    "duration": "",
    "desc": "The Shark Is Broken 在Foundry Theatre上演，演期 2026-09-20 至 2026-10-04，官方售票页已公布 16 场。本条目由 Ticketmaster 官方售票页汇总，暂无官方剧情简介。",
    "source": "https://www.ticketmaster.com.au/the-shark-is-broken-pyrmont-20-09-2026/event/13006471A64B3E55",
    "booking": "https://www.ticketmaster.com.au/the-shark-is-broken-pyrmont-20-09-2026/event/13006471A64B3E55",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-20",
        "13:00",
        ""
      ],
      [
        "2026-09-23",
        "13:00",
        ""
      ],
      [
        "2026-09-23",
        "19:00",
        ""
      ],
      [
        "2026-09-24",
        "19:00",
        ""
      ],
      [
        "2026-09-25",
        "19:00",
        ""
      ],
      [
        "2026-09-26",
        "14:00",
        ""
      ],
      [
        "2026-09-26",
        "19:00",
        ""
      ],
      [
        "2026-09-27",
        "13:00",
        ""
      ],
      [
        "2026-09-27",
        "18:00",
        ""
      ],
      [
        "2026-09-30",
        "13:00",
        ""
      ],
      [
        "2026-09-30",
        "19:00",
        ""
      ],
      [
        "2026-10-01",
        "19:00",
        ""
      ],
      [
        "2026-10-02",
        "19:00",
        ""
      ],
      [
        "2026-10-03",
        "14:00",
        ""
      ],
      [
        "2026-10-03",
        "19:00",
        ""
      ],
      [
        "2026-10-04",
        "13:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 16 场（2026-09-20 至 2026-10-04）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "image": "https://foundation-prod.imgix.net/shows/headers/website-thumbnail-2048-x-1364.jpg",
    "imageSource": "https://www.foundrytheatre.com.au/the-shark-is-broken",
    "imageCredit": "官方宣传图 © Foundry Theatre"
  },
  {
    "id": "dracula-state",
    "title": "Dracula",
    "genre": "舞蹈",
    "scale": "商业巡演",
    "venue": "state",
    "company": "BIG LIVE",
    "start": "2026-09-22",
    "end": "2026-09-27",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "Ticketmaster 接口未返回票价，未作估算。",
    "duration": "",
    "desc": "Dracula 在State Theatre上演，演期 2026-09-22 至 2026-09-27，官方售票页已公布 8 场。本条目由 Ticketmaster 官方售票页汇总，暂无官方剧情简介。",
    "source": "https://www.ticketmaster.com.au/dracula-sydney-22-09-2026/event/13006482A96464F1",
    "booking": "https://www.ticketmaster.com.au/dracula-sydney-22-09-2026/event/13006482A96464F1",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-22",
        "19:00",
        ""
      ],
      [
        "2026-09-23",
        "19:00",
        ""
      ],
      [
        "2026-09-24",
        "19:00",
        ""
      ],
      [
        "2026-09-25",
        "19:00",
        ""
      ],
      [
        "2026-09-26",
        "14:30",
        ""
      ],
      [
        "2026-09-26",
        "19:00",
        ""
      ],
      [
        "2026-09-27",
        "13:30",
        ""
      ],
      [
        "2026-09-27",
        "18:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 8 场（2026-09-22 至 2026-09-27）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "image": "https://cdn.statetheatre.com.au/wp-content/uploads/2025/04/29010254/750x750-2.jpg",
    "imageSource": "https://www.statetheatre.com.au/show-calendar/dracula/",
    "imageCredit": "官方宣传图 © State Theatre"
  },
  {
    "id": "cirque-alice",
    "title": "Cirque Alice",
    "genre": "马戏",
    "scale": "商业巡演",
    "venue": "lyric",
    "company": "",
    "start": "2026-09-25",
    "end": "2026-10-11",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "Ticketmaster 接口未返回票价，未作估算。",
    "duration": "",
    "desc": "Cirque Alice 在Sydney Lyric上演，演期 2026-09-25 至 2026-10-11，官方售票页已公布 21 场。本条目由 Ticketmaster 官方售票页汇总，暂无官方剧情简介。",
    "source": "https://www.ticketmaster.com.au/cirque-alice-pyrmont-25-09-2026/event/1300650BA46823C3",
    "booking": "https://www.ticketmaster.com.au/cirque-alice-pyrmont-25-09-2026/event/1300650BA46823C3",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-25",
        "19:00",
        ""
      ],
      [
        "2026-09-26",
        "13:00",
        ""
      ],
      [
        "2026-09-26",
        "19:00",
        ""
      ],
      [
        "2026-09-27",
        "13:00",
        ""
      ],
      [
        "2026-09-27",
        "18:00",
        ""
      ],
      [
        "2026-09-30",
        "13:00",
        ""
      ],
      [
        "2026-09-30",
        "19:00",
        ""
      ],
      [
        "2026-10-01",
        "19:00",
        ""
      ],
      [
        "2026-10-02",
        "19:00",
        ""
      ],
      [
        "2026-10-03",
        "13:00",
        ""
      ],
      [
        "2026-10-03",
        "19:00",
        ""
      ],
      [
        "2026-10-04",
        "13:00",
        ""
      ],
      [
        "2026-10-04",
        "18:00",
        ""
      ],
      [
        "2026-10-07",
        "13:00",
        ""
      ],
      [
        "2026-10-07",
        "19:00",
        ""
      ],
      [
        "2026-10-08",
        "19:00",
        ""
      ],
      [
        "2026-10-09",
        "19:00",
        ""
      ],
      [
        "2026-10-10",
        "13:00",
        ""
      ],
      [
        "2026-10-10",
        "19:00",
        ""
      ],
      [
        "2026-10-11",
        "13:00",
        ""
      ],
      [
        "2026-10-11",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 21 场（2026-09-25 至 2026-10-11）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "image": "https://foundation-prod.imgix.net/shows/headers/cirquealice-2048x1364-thumbnail.jpg",
    "imageCredit": "官方宣传图 © Sydney Lyric"
  },
  {
    "id": "bill-bailey-vaudevillean",
    "title": "Bill Bailey: Vaudevillean",
    "genre": "喜剧",
    "scale": "商业巡演",
    "venue": "state",
    "company": "BOHM",
    "start": "2026-09-28",
    "end": "2026-09-30",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "Ticketmaster 接口未返回票价，未作估算。",
    "duration": "",
    "desc": "Bill Bailey: Vaudevillean 在State Theatre上演，演期 2026-09-28 至 2026-09-30，官方售票页已公布 3 场。本条目由 Ticketmaster 官方售票页汇总，暂无官方剧情简介。",
    "source": "https://www.ticketmaster.com.au/bill-bailey-vaudevillean-sydney-28-09-2026/event/1300647FACCF427E",
    "booking": "https://www.ticketmaster.com.au/bill-bailey-vaudevillean-sydney-28-09-2026/event/1300647FACCF427E",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-28",
        "20:00",
        ""
      ],
      [
        "2026-09-29",
        "20:00",
        ""
      ],
      [
        "2026-09-30",
        "20:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 3 场（2026-09-28 至 2026-09-30）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "image": "https://cdn.statetheatre.com.au/wp-content/uploads/2021/05/08123300/BB-750x750-2.jpg",
    "imageSource": "https://www.statetheatre.com.au/show-calendar/bill-bailey/",
    "imageCredit": "官方宣传图 © State Theatre"
  },
  {
    "id": "bugsy-malone",
    "title": "Bugsy Malone",
    "genre": "音乐剧",
    "scale": "专业制作",
    "venue": "teatro",
    "company": "",
    "start": "2026-10-02",
    "end": "2026-10-11",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "Ticketmaster 接口未返回票价，未作估算。",
    "duration": "",
    "desc": "Bugsy Malone 在Teatro at the Italian Forum上演，演期 2026-10-02 至 2026-10-11，官方售票页已公布 10 场。本条目由 Ticketmaster 官方售票页汇总，暂无官方剧情简介。",
    "source": "https://www.ticketmaster.com.au/bugsy-malone-leichhardt-02-10-2026/event/250064D8959525F2",
    "booking": "https://www.ticketmaster.com.au/bugsy-malone-leichhardt-02-10-2026/event/250064D8959525F2",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-10-02",
        "19:00",
        ""
      ],
      [
        "2026-10-03",
        "14:00",
        ""
      ],
      [
        "2026-10-03",
        "19:30",
        ""
      ],
      [
        "2026-10-04",
        "18:00",
        ""
      ],
      [
        "2026-10-07",
        "13:00",
        ""
      ],
      [
        "2026-10-07",
        "18:00",
        ""
      ],
      [
        "2026-10-08",
        "19:00",
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
      ],
      [
        "2026-10-11",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 10 场（2026-10-02 至 2026-10-11）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20"
  },
  {
    "id": "cirque-nouvelle",
    "title": "Cirque Nouvelle",
    "genre": "马戏",
    "scale": "商业巡演",
    "venue": "state",
    "company": "",
    "start": "2026-10-04",
    "end": "2026-10-04",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "Ticketmaster 接口未返回票价，未作估算。",
    "duration": "",
    "desc": "Cirque Nouvelle 在State Theatre上演，演期 2026-10-04 至 2026-10-04，官方售票页已公布 1 场。本条目由 Ticketmaster 官方售票页汇总，暂无官方剧情简介。",
    "source": "https://www.ticketmaster.com.au/cirque-nouvelle-sydney-04-10-2026/event/1300646F8C86346A",
    "booking": "https://www.ticketmaster.com.au/cirque-nouvelle-sydney-04-10-2026/event/1300646F8C86346A",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-10-04",
        "17:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-10-04 至 2026-10-04）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20"
  },
  {
    "id": "aaron-chen-technology",
    "title": "Aaron Chen - Technology",
    "genre": "喜剧",
    "scale": "商业巡演",
    "venue": "state",
    "company": "LIVE NATION AUSTRALIA",
    "start": "2026-10-07",
    "end": "2026-10-14",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "Ticketmaster 接口未返回票价，未作估算。",
    "duration": "",
    "desc": "Aaron Chen - Technology 在State Theatre上演，演期 2026-10-07 至 2026-10-14，官方售票页已公布 3 场。本条目由 Ticketmaster 官方售票页汇总，暂无官方剧情简介。",
    "source": "https://www.ticketmaster.com.au/aaron-chen-technology-sydney-07-10-2026/event/130064F7C80D69F9",
    "booking": "https://www.ticketmaster.com.au/aaron-chen-technology-sydney-07-10-2026/event/130064F7C80D69F9",
    "bookingLabel": "官方场次与购票",
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
        "2026-10-14",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 3 场（2026-10-07 至 2026-10-14）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "image": "https://cdn.statetheatre.com.au/wp-content/uploads/2023/11/31110543/aaron_clean_750x750.jpg",
    "imageSource": "https://www.statetheatre.com.au/show-calendar/aaron-chen/",
    "imageCredit": "官方宣传图 © State Theatre"
  },
  {
    "id": "carousel",
    "title": "Carousel",
    "genre": "音乐剧",
    "scale": "专业制作",
    "venue": "foundry",
    "company": "",
    "start": "2026-10-15",
    "end": "2026-10-18",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "Ticketmaster 接口未返回票价，未作估算。",
    "duration": "",
    "desc": "Carousel 在Foundry Theatre上演，演期 2026-10-15 至 2026-10-18，官方售票页已公布 6 场。本条目由 Ticketmaster 官方售票页汇总，暂无官方剧情简介。",
    "source": "https://www.ticketmaster.com.au/carousel-pyrmont-15-10-2026/event/130064ACD9F7918A",
    "booking": "https://www.ticketmaster.com.au/carousel-pyrmont-15-10-2026/event/130064ACD9F7918A",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-10-15",
        "19:00",
        ""
      ],
      [
        "2026-10-16",
        "19:00",
        ""
      ],
      [
        "2026-10-17",
        "13:00",
        ""
      ],
      [
        "2026-10-17",
        "19:00",
        ""
      ],
      [
        "2026-10-18",
        "13:00",
        ""
      ],
      [
        "2026-10-18",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 6 场（2026-10-15 至 2026-10-18）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "image": "https://foundation-prod.imgix.net/shows/headers/carousel-2048x1364-foundry-01-thumbnail.jpg",
    "imageSource": "https://www.foundrytheatre.com.au/carousel",
    "imageCredit": "官方宣传图 © Foundry Theatre"
  },
  {
    "id": "morgan-jay-the-goofy-guy-tour",
    "title": "Morgan Jay: The Goofy Guy Tour",
    "genre": "喜剧",
    "scale": "商业巡演",
    "venue": "state",
    "company": "Morgan Jay",
    "start": "2026-10-18",
    "end": "2026-10-18",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "Ticketmaster 接口未返回票价，未作估算。",
    "duration": "",
    "desc": "Morgan Jay: The Goofy Guy Tour 在State Theatre上演，演期 2026-10-18 至 2026-10-18，官方售票页已公布 2 场。本条目由 Ticketmaster 官方售票页汇总，暂无官方剧情简介。",
    "source": "https://www.ticketmaster.com.au/morgan-jay-the-goofy-guy-tour-sydney-18-10-2026/event/1300638AA2CF757F",
    "booking": "https://www.ticketmaster.com.au/morgan-jay-the-goofy-guy-tour-sydney-18-10-2026/event/1300638AA2CF757F",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-10-18",
        "16:00",
        ""
      ],
      [
        "2026-10-18",
        "19:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 2 场（2026-10-18 至 2026-10-18）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "image": "https://cdn.statetheatre.com.au/wp-content/uploads/2025/12/13211824/MJ-SYD-750x750-1.jpg",
    "imageSource": "https://www.statetheatre.com.au/show-calendar/morgan-jay/",
    "imageCredit": "官方宣传图 © State Theatre"
  },
  {
    "id": "kitty-flanagan-glad-game",
    "title": "Kitty Flanagan: Glad Game",
    "genre": "喜剧",
    "scale": "商业巡演",
    "venue": "state",
    "company": "A-LIST ENTERTAINMENT",
    "start": "2026-10-23",
    "end": "2026-10-31",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "Ticketmaster 接口未返回票价，未作估算。",
    "duration": "",
    "desc": "Kitty Flanagan: Glad Game 在State Theatre上演，演期 2026-10-23 至 2026-10-31，官方售票页已公布 4 场。本条目由 Ticketmaster 官方售票页汇总，暂无官方剧情简介。",
    "source": "https://www.ticketmaster.com.au/kitty-flanagan-glad-game-sydney-23-10-2026/event/1300646CCFC76D97",
    "booking": "https://www.ticketmaster.com.au/kitty-flanagan-glad-game-sydney-23-10-2026/event/1300646CCFC76D97",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-10-23",
        "20:00",
        ""
      ],
      [
        "2026-10-24",
        "20:00",
        ""
      ],
      [
        "2026-10-30",
        "20:00",
        ""
      ],
      [
        "2026-10-31",
        "20:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 4 场（2026-10-23 至 2026-10-31）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "image": "https://cdn.statetheatre.com.au/wp-content/uploads/2026/03/13082557/KittyFlanagan_GladGame_750x750.jpg",
    "imageSource": "https://www.statetheatre.com.au/show-calendar/kitty-flanagan/",
    "imageCredit": "官方宣传图 © State Theatre"
  },
  {
    "id": "lawrence-mooney-full-moon-party",
    "title": "Lawrence Mooney: Full Moon Party",
    "genre": "喜剧",
    "scale": "商业巡演",
    "venue": "state",
    "company": "A-LIST ENTERTAINMENT",
    "start": "2026-11-06",
    "end": "2026-11-06",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "Ticketmaster 接口未返回票价，未作估算。",
    "duration": "",
    "desc": "Lawrence Mooney: Full Moon Party 在State Theatre上演，演期 2026-11-06 至 2026-11-06，官方售票页已公布 1 场。本条目由 Ticketmaster 官方售票页汇总，暂无官方剧情简介。",
    "source": "https://www.ticketmaster.com.au/lawrence-mooney-full-moon-party-sydney-06-11-2026/event/130064A5E60A88A0",
    "booking": "https://www.ticketmaster.com.au/lawrence-mooney-full-moon-party-sydney-06-11-2026/event/130064A5E60A88A0",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-11-06",
        "20:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-11-06 至 2026-11-06）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "image": "https://cdn.statetheatre.com.au/wp-content/uploads/2026/05/17224232/LawrenceMooney_FullMoonParty_750x750.jpg",
    "imageSource": "https://www.statetheatre.com.au/show-calendar/lawrence-mooney/",
    "imageCredit": "官方宣传图 © State Theatre"
  },
  {
    "id": "greg-davies-full-fat-legend",
    "title": "Greg Davies: Full Fat Legend",
    "genre": "喜剧",
    "scale": "商业巡演",
    "venue": "state",
    "company": "BOHM",
    "start": "2026-11-07",
    "end": "2026-11-09",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "Ticketmaster 接口未返回票价，未作估算。",
    "duration": "",
    "desc": "Greg Davies: Full Fat Legend 在State Theatre上演，演期 2026-11-07 至 2026-11-09，官方售票页已公布 3 场。本条目由 Ticketmaster 官方售票页汇总，暂无官方剧情简介。",
    "source": "https://www.ticketmaster.com.au/greg-davies-full-fat-legend-sydney-07-11-2026/event/13006454AF2999C8",
    "booking": "https://www.ticketmaster.com.au/greg-davies-full-fat-legend-sydney-07-11-2026/event/13006454AF2999C8",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-11-07",
        "20:00",
        ""
      ],
      [
        "2026-11-08",
        "20:00",
        ""
      ],
      [
        "2026-11-09",
        "20:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 3 场（2026-11-07 至 2026-11-09）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "image": "https://cdn.statetheatre.com.au/wp-content/uploads/2026/02/25104948/GregDavies25-StateTheatre-750x750-TF.jpg",
    "imageSource": "https://www.statetheatre.com.au/show-calendar/greg-davies/",
    "imageCredit": "官方宣传图 © State Theatre"
  },
  {
    "id": "dara-o-briain-re-creation",
    "title": "Dara O Briain - Re:Creation",
    "genre": "喜剧",
    "scale": "商业巡演",
    "venue": "state",
    "company": "BOHM",
    "start": "2026-11-11",
    "end": "2026-11-11",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "Ticketmaster 接口未返回票价，未作估算。",
    "duration": "",
    "desc": "Dara O Briain - Re:Creation 在State Theatre上演，演期 2026-11-11 至 2026-11-11，官方售票页已公布 1 场。本条目由 Ticketmaster 官方售票页汇总，暂无官方剧情简介。",
    "source": "https://www.ticketmaster.com.au/dara-o-briain-recreation-sydney-11-11-2026/event/130064DED6625A08",
    "booking": "https://www.ticketmaster.com.au/dara-o-briain-recreation-sydney-11-11-2026/event/130064DED6625A08",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-11-11",
        "20:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-11-11 至 2026-11-11）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "image": "https://cdn.statetheatre.com.au/wp-content/uploads/2023/08/06134615/DaraOBriain2026-StateTheatre-750x750-TF.jpg",
    "imageSource": "https://www.statetheatre.com.au/show-calendar/dara-o-briain/",
    "imageCredit": "官方宣传图 © State Theatre"
  },
  {
    "id": "whispering-jack-the-john-farnham-musical",
    "title": "Whispering Jack: The John Farnham Musical",
    "genre": "音乐剧",
    "scale": "专业制作",
    "venue": "roslynpacker",
    "company": "",
    "start": "2026-11-15",
    "end": "2027-01-03",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "Ticketmaster 接口未返回票价，未作估算。",
    "duration": "",
    "desc": "Whispering Jack: The John Farnham Musical 在Roslyn Packer Theatre上演，演期 2026-11-15 至 2027-01-03，官方售票页已公布 57 场。本条目由 Ticketmaster 官方售票页汇总，暂无官方剧情简介。",
    "source": "https://www.ticketmaster.com.au/whispering-jack-the-john-farnham-musical-millers-point-26-11-2026/event/1300643BDB3C92AD",
    "booking": "https://www.ticketmaster.com.au/whispering-jack-the-john-farnham-musical-millers-point-26-11-2026/event/1300643BDB3C92AD",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-11-15",
        "19:30",
        ""
      ],
      [
        "2026-11-17",
        "19:30",
        ""
      ],
      [
        "2026-11-18",
        "19:30",
        ""
      ],
      [
        "2026-11-19",
        "19:30",
        ""
      ],
      [
        "2026-11-20",
        "19:30",
        ""
      ],
      [
        "2026-11-21",
        "13:30",
        ""
      ],
      [
        "2026-11-21",
        "19:30",
        ""
      ],
      [
        "2026-11-22",
        "18:00",
        ""
      ],
      [
        "2026-11-24",
        "19:30",
        ""
      ],
      [
        "2026-11-25",
        "19:30",
        ""
      ],
      [
        "2026-11-26",
        "19:30",
        ""
      ],
      [
        "2026-11-27",
        "19:30",
        ""
      ],
      [
        "2026-11-28",
        "13:30",
        ""
      ],
      [
        "2026-11-28",
        "19:30",
        ""
      ],
      [
        "2026-11-29",
        "13:00",
        ""
      ],
      [
        "2026-11-29",
        "18:00",
        ""
      ],
      [
        "2026-12-01",
        "18:30",
        ""
      ],
      [
        "2026-12-02",
        "19:30",
        ""
      ],
      [
        "2026-12-03",
        "19:30",
        ""
      ],
      [
        "2026-12-04",
        "19:30",
        ""
      ],
      [
        "2026-12-05",
        "13:30",
        ""
      ],
      [
        "2026-12-05",
        "19:30",
        ""
      ],
      [
        "2026-12-06",
        "13:00",
        ""
      ],
      [
        "2026-12-06",
        "18:00",
        ""
      ],
      [
        "2026-12-09",
        "13:00",
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
        "13:30",
        ""
      ],
      [
        "2026-12-12",
        "19:30",
        ""
      ],
      [
        "2026-12-13",
        "13:00",
        ""
      ],
      [
        "2026-12-13",
        "18:00",
        ""
      ],
      [
        "2026-12-15",
        "18:30",
        ""
      ],
      [
        "2026-12-16",
        "19:30",
        ""
      ],
      [
        "2026-12-17",
        "19:30",
        ""
      ],
      [
        "2026-12-18",
        "19:30",
        ""
      ],
      [
        "2026-12-19",
        "13:30",
        ""
      ],
      [
        "2026-12-19",
        "19:30",
        ""
      ],
      [
        "2026-12-20",
        "13:00",
        ""
      ],
      [
        "2026-12-20",
        "18:00",
        ""
      ],
      [
        "2026-12-22",
        "18:30",
        ""
      ],
      [
        "2026-12-23",
        "13:00",
        ""
      ],
      [
        "2026-12-23",
        "19:30",
        ""
      ],
      [
        "2026-12-24",
        "13:00",
        ""
      ],
      [
        "2026-12-26",
        "13:30",
        ""
      ],
      [
        "2026-12-26",
        "19:30",
        ""
      ],
      [
        "2026-12-27",
        "13:00",
        ""
      ],
      [
        "2026-12-27",
        "18:00",
        ""
      ],
      [
        "2026-12-29",
        "18:30",
        ""
      ],
      [
        "2026-12-30",
        "13:00",
        ""
      ],
      [
        "2026-12-30",
        "19:30",
        ""
      ],
      [
        "2026-12-31",
        "13:00",
        ""
      ],
      [
        "2027-01-01",
        "19:30",
        ""
      ],
      [
        "2027-01-02",
        "13:30",
        ""
      ],
      [
        "2027-01-02",
        "19:30",
        ""
      ],
      [
        "2027-01-03",
        "13:00",
        ""
      ],
      [
        "2027-01-03",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 57 场（2026-11-15 至 2027-01-03）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20"
  },
  {
    "id": "the-addams-family",
    "title": "The Addams Family",
    "genre": "音乐剧",
    "scale": "专业制作",
    "venue": "teatro",
    "company": "",
    "start": "2026-11-17",
    "end": "2026-12-06",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "Ticketmaster 接口未返回票价，未作估算。",
    "duration": "",
    "desc": "The Addams Family 在Teatro at the Italian Forum上演，演期 2026-11-17 至 2026-12-06，官方售票页已公布 20 场。本条目由 Ticketmaster 官方售票页汇总，暂无官方剧情简介。",
    "source": "https://www.ticketmaster.com.au/the-addams-family-leichhardt-17-11-2026/event/25006518E98F498E",
    "booking": "https://www.ticketmaster.com.au/the-addams-family-leichhardt-17-11-2026/event/25006518E98F498E",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-11-17",
        "19:00",
        ""
      ],
      [
        "2026-11-18",
        "19:00",
        ""
      ],
      [
        "2026-11-19",
        "19:00",
        ""
      ],
      [
        "2026-11-21",
        "14:00",
        ""
      ],
      [
        "2026-11-21",
        "19:30",
        ""
      ],
      [
        "2026-11-22",
        "13:00",
        ""
      ],
      [
        "2026-11-22",
        "18:00",
        ""
      ],
      [
        "2026-11-24",
        "19:00",
        ""
      ],
      [
        "2026-11-25",
        "19:00",
        ""
      ],
      [
        "2026-11-26",
        "19:00",
        ""
      ],
      [
        "2026-11-27",
        "19:30",
        ""
      ],
      [
        "2026-11-28",
        "14:00",
        ""
      ],
      [
        "2026-11-28",
        "19:30",
        ""
      ],
      [
        "2026-11-29",
        "13:00",
        ""
      ],
      [
        "2026-12-02",
        "19:00",
        ""
      ],
      [
        "2026-12-03",
        "19:00",
        ""
      ],
      [
        "2026-12-04",
        "19:30",
        ""
      ],
      [
        "2026-12-05",
        "14:00",
        ""
      ],
      [
        "2026-12-05",
        "19:30",
        ""
      ],
      [
        "2026-12-06",
        "13:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 20 场（2026-11-17 至 2026-12-06）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20"
  },
  {
    "id": "carl-barron-just-wondering-why",
    "title": "Carl Barron: Just Wondering Why",
    "genre": "喜剧",
    "scale": "商业巡演",
    "venue": "state",
    "company": "Carl Barron",
    "start": "2026-11-17",
    "end": "2026-12-13",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "Ticketmaster 接口未返回票价，未作估算。",
    "duration": "",
    "desc": "Carl Barron: Just Wondering Why 在State Theatre上演，演期 2026-11-17 至 2026-12-13，官方售票页已公布 13 场。本条目由 Ticketmaster 官方售票页汇总，暂无官方剧情简介。",
    "source": "https://www.ticketmaster.com.au/carl-barron-just-wondering-why-sydney-17-11-2026/event/130063737A914DC7",
    "booking": "https://www.ticketmaster.com.au/carl-barron-just-wondering-why-sydney-17-11-2026/event/130063737A914DC7",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-11-17",
        "20:00",
        ""
      ],
      [
        "2026-11-18",
        "20:00",
        ""
      ],
      [
        "2026-11-20",
        "20:00",
        ""
      ],
      [
        "2026-11-21",
        "20:00",
        ""
      ],
      [
        "2026-11-22",
        "17:00",
        ""
      ],
      [
        "2026-11-24",
        "20:00",
        ""
      ],
      [
        "2026-11-25",
        "20:00",
        ""
      ],
      [
        "2026-11-27",
        "20:00",
        ""
      ],
      [
        "2026-11-28",
        "20:00",
        ""
      ],
      [
        "2026-11-29",
        "17:00",
        ""
      ],
      [
        "2026-12-11",
        "20:00",
        ""
      ],
      [
        "2026-12-12",
        "20:00",
        ""
      ],
      [
        "2026-12-13",
        "17:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 13 场（2026-11-17 至 2026-12-13）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "image": "https://cdn.statetheatre.com.au/wp-content/uploads/2025/10/16133112/CarlBarron_JustWonderingWhy_750x750.jpg",
    "imageSource": "https://www.statetheatre.com.au/show-calendar/carl-barron/",
    "imageCredit": "官方宣传图 © State Theatre"
  },
  {
    "id": "the-christmas-spectacular",
    "title": "THE CHRISTMAS SPECTACULAR",
    "genre": "马戏",
    "scale": "商业巡演",
    "venue": "state",
    "company": "BOYD PRODUCTIONS",
    "start": "2026-12-19",
    "end": "2026-12-20",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "Ticketmaster 接口未返回票价，未作估算。",
    "duration": "",
    "desc": "THE CHRISTMAS SPECTACULAR 在State Theatre上演，演期 2026-12-19 至 2026-12-20，官方售票页已公布 4 场。本条目由 Ticketmaster 官方售票页汇总，暂无官方剧情简介。",
    "source": "https://www.ticketmaster.com.au/the-christmas-spectacular-sydney-19-12-2026/event/13006505C5D94750",
    "booking": "https://www.ticketmaster.com.au/the-christmas-spectacular-sydney-19-12-2026/event/13006505C5D94750",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-12-19",
        "14:00",
        ""
      ],
      [
        "2026-12-19",
        "18:30",
        ""
      ],
      [
        "2026-12-20",
        "14:00",
        ""
      ],
      [
        "2026-12-20",
        "18:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 4 场（2026-12-19 至 2026-12-20）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "image": "https://cdn.statetheatre.com.au/wp-content/uploads/2024/08/29114509/State_tile_750x750px.jpg",
    "imageSource": "https://www.statetheatre.com.au/show-calendar/christmas-spectacular/",
    "imageCredit": "官方宣传图 © State Theatre"
  },
  {
    "id": "2026-sydney-comedy-revue",
    "title": "2026 Sydney Comedy Revue",
    "genre": "喜剧",
    "scale": "商业巡演",
    "venue": "state",
    "company": "Sydney Comedy Revue",
    "start": "2026-12-29",
    "end": "2026-12-29",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "Ticketmaster 接口未返回票价，未作估算。",
    "duration": "",
    "desc": "2026 Sydney Comedy Revue 在State Theatre上演，演期 2026-12-29 至 2026-12-29，官方售票页已公布 1 场。本条目由 Ticketmaster 官方售票页汇总，暂无官方剧情简介。",
    "source": "https://www.ticketmaster.com.au/2026-sydney-comedy-revue-sydney-29-12-2026/event/130064F4C4B7472C",
    "booking": "https://www.ticketmaster.com.au/2026-sydney-comedy-revue-sydney-29-12-2026/event/130064F4C4B7472C",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-12-29",
        "20:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-12-29 至 2026-12-29）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "image": "https://cdn.statetheatre.com.au/wp-content/uploads/2026/07/28221958/ST_DIG_750x750_V1-copy.jpg",
    "imageSource": "https://www.statetheatre.com.au/show-calendar/sydney-comedy-revue/",
    "imageCredit": "官方宣传图 © State Theatre"
  },
  {
    "id": "matt-mathews-not-what-i-ordered-world-tour",
    "title": "Matt Mathews: Not What I Ordered World Tour",
    "genre": "喜剧",
    "scale": "商业巡演",
    "venue": "state",
    "company": "LIVE NATION AUSTRALIA",
    "start": "2027-01-14",
    "end": "2027-01-15",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "Ticketmaster 接口未返回票价，未作估算。",
    "duration": "",
    "desc": "Matt Mathews: Not What I Ordered World Tour 在State Theatre上演，演期 2027-01-14 至 2027-01-15，官方售票页已公布 2 场。本条目由 Ticketmaster 官方售票页汇总，暂无官方剧情简介。",
    "source": "https://www.ticketmaster.com.au/matt-mathews-not-what-i-ordered-sydney-14-01-2027/event/130064AEA9667931",
    "booking": "https://www.ticketmaster.com.au/matt-mathews-not-what-i-ordered-sydney-14-01-2027/event/130064AEA9667931",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2027-01-14",
        "19:00",
        ""
      ],
      [
        "2027-01-15",
        "19:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 2 场（2027-01-14 至 2027-01-15）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "image": "https://cdn.statetheatre.com.au/wp-content/uploads/2026/05/17231941/MATTMATHEWS-750x750-Clean.jpg",
    "imageSource": "https://www.statetheatre.com.au/show-calendar/matt-mathews/",
    "imageCredit": "官方宣传图 © State Theatre"
  },
  {
    "id": "troy-hawke-never-stop-never-change",
    "title": "Troy Hawke - Never Stop, Never Change!",
    "genre": "喜剧",
    "scale": "商业巡演",
    "venue": "state",
    "company": "LIVE NATION AUSTRALIA",
    "start": "2027-01-23",
    "end": "2027-01-23",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "Ticketmaster 接口未返回票价，未作估算。",
    "duration": "",
    "desc": "Troy Hawke - Never Stop, Never Change! 在State Theatre上演，演期 2027-01-23 至 2027-01-23，官方售票页已公布 1 场。本条目由 Ticketmaster 官方售票页汇总，暂无官方剧情简介。",
    "source": "https://www.ticketmaster.com.au/troy-hawke-never-stop-never-change-sydney-23-01-2027/event/130064BA8CD022EE",
    "booking": "https://www.ticketmaster.com.au/troy-hawke-never-stop-never-change-sydney-23-01-2027/event/130064BA8CD022EE",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2027-01-23",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2027-01-23 至 2027-01-23）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "image": "https://cdn.statetheatre.com.au/wp-content/uploads/2026/05/28115604/TH-SYD-750x750-1.jpg",
    "imageSource": "https://www.statetheatre.com.au/show-calendar/troy-hawke/",
    "imageCredit": "官方宣传图 © State Theatre"
  },
  {
    "id": "randy-feltface-gimmick",
    "title": "Randy Feltface - Gimmick",
    "genre": "喜剧",
    "scale": "商业巡演",
    "venue": "state",
    "company": "TEG AUSTRALIA",
    "start": "2027-02-09",
    "end": "2027-02-09",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "Ticketmaster 接口未返回票价，未作估算。",
    "duration": "",
    "desc": "Randy Feltface - Gimmick 在State Theatre上演，演期 2027-02-09 至 2027-02-09，官方售票页已公布 1 场。本条目由 Ticketmaster 官方售票页汇总，暂无官方剧情简介。",
    "source": "https://www.ticketmaster.com.au/randy-feltface-gimmick-sydney-09-02-2027/event/130065188EBE167C",
    "booking": "https://www.ticketmaster.com.au/randy-feltface-gimmick-sydney-09-02-2027/event/130065188EBE167C",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2027-02-09",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2027-02-09 至 2027-02-09）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "image": "https://cdn.statetheatre.com.au/wp-content/uploads/2026/08/30153457/RandyFeltface_750x750_image.jpg",
    "imageSource": "https://www.statetheatre.com.au/show-calendar/randy-feltface/",
    "imageCredit": "官方宣传图 © State Theatre"
  },
  {
    "id": "monty-python-s-spamalot",
    "title": "Monty Python's Spamalot",
    "genre": "音乐剧",
    "scale": "商业巡演",
    "venue": "sydneyevent",
    "company": "",
    "start": "2026-10-15",
    "end": "2026-10-18",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "",
    "desc": "Monty Python's Spamalot 在Sydney Event Centre上演，演期 2026-10-15 至 2026-10-18，已公布 7 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://www.ticketmaster.com.au/monty-pythons-spamalot-pyrmont-15-10-2026/event/130064D68B193409",
    "booking": "https://www.ticketmaster.com.au/monty-pythons-spamalot-pyrmont-15-10-2026/event/130064D68B193409",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-10-15",
        "13:00",
        ""
      ],
      [
        "2026-10-15",
        "19:30",
        ""
      ],
      [
        "2026-10-16",
        "19:30",
        ""
      ],
      [
        "2026-10-17",
        "14:00",
        ""
      ],
      [
        "2026-10-17",
        "19:30",
        ""
      ],
      [
        "2026-10-18",
        "11:00",
        ""
      ],
      [
        "2026-10-18",
        "16:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 7 场（2026-10-15 至 2026-10-18）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20"
  },
  {
    "id": "er-gou-a-dog-named-love",
    "title": "Er Gou, \"A Dog Named Love\"",
    "genre": "喜剧",
    "scale": "商业巡演",
    "venue": "sydneyevent",
    "company": "Er Gou",
    "start": "2026-11-13",
    "end": "2026-11-13",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "",
    "desc": "Er Gou, \"A Dog Named Love\" 在Sydney Event Centre上演，演期 2026-11-13 至 2026-11-13，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://www.ticketmaster.com.au/er-gou-a-dog-named-love-pyrmont-13-11-2026/event/130064F8AFB169E8",
    "booking": "https://www.ticketmaster.com.au/er-gou-a-dog-named-love-pyrmont-13-11-2026/event/130064F8AFB169E8",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-11-13",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-11-13 至 2026-11-13）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20"
  },
  {
    "id": "thomas-green-brainstorm-2nd-show",
    "title": "Thomas Green - Brainstorm | 2nd Show",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "Thomas Green",
    "start": "2027-03-11",
    "end": "2027-03-11",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "",
    "desc": "Thomas Green - Brainstorm | 2nd Show 在Factory Theatre上演，演期 2027-03-11 至 2027-03-11，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://www.moshtix.com.au/v2/event/thomas-green-brainstorm-2nd-show/197021",
    "booking": "https://www.moshtix.com.au/v2/event/thomas-green-brainstorm-2nd-show/197021",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2027-03-11",
        "19:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2027-03-11 至 2027-03-11）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20"
  },
  {
    "id": "thomas-green-brainstorm",
    "title": "Thomas Green - Brainstorm",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "Thomas Green",
    "start": "2027-03-13",
    "end": "2027-03-13",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "",
    "desc": "Thomas Green - Brainstorm 在Factory Theatre上演，演期 2027-03-13 至 2027-03-13，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://www.moshtix.com.au/v2/event/thomas-green-brainstorm/196626",
    "booking": "https://www.moshtix.com.au/v2/event/thomas-green-brainstorm/196626",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2027-03-13",
        "19:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2027-03-13 至 2027-03-13）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20"
  },
  {
    "id": "chris-marlton-global-financial-chysalis",
    "title": "Chris Marlton - Global Financial Chysalis",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-26",
    "end": "2026-09-27",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "Chris Marlton - Global Financial Chysalis 在Factory Theatre上演，演期 2026-09-26 至 2026-09-27，已公布 2 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/chris-marlton-global-financial-chysalis/",
    "booking": "https://sydneyfringe.com/events/chris-marlton-global-financial-chysalis/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-26",
        "20:00",
        ""
      ],
      [
        "2026-09-27",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 2 场（2026-09-26 至 2026-09-27）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/09-07-2026-045201-5825.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "nat-s-what-i-reckon-practice-at-the-bistro-work-in-progress",
    "title": "NAT'S WHAT I RECKON - PRACTICE AT THE BISTRO (WORK IN PROGRESS)",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-25",
    "end": "2026-09-25",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "NAT'S WHAT I RECKON - PRACTICE AT THE BISTRO (WORK IN PROGRESS) 在Factory Theatre上演，演期 2026-09-25 至 2026-09-25，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/nats-what-i-reckon/",
    "booking": "https://sydneyfringe.com/events/nats-what-i-reckon/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-25",
        "18:45",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-25 至 2026-09-25）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/08-26-2026-052342-9042.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "burlesque-with-evana-de-lune",
    "title": "Burlesque with Evana De Lune",
    "genre": "卡巴莱",
    "scale": "独立制作",
    "venue": "fools",
    "company": "",
    "start": "2026-09-26",
    "end": "2026-09-26",
    "price": 80,
    "priceText": "A$80 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 120 分钟",
    "desc": "Burlesque with Evana De Lune 在Fool's Paradise (Entertainment Quarter)上演，演期 2026-09-26 至 2026-09-26，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/burlesque-with-evana-de-lune/",
    "booking": "https://sydneyfringe.com/events/burlesque-with-evana-de-lune/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-26",
        "21:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-26 至 2026-09-26）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "The Virago",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-12-2025-160608-7662.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "blow-bubble-cabaret-for-grown-ups",
    "title": "BLOW: Bubble Cabaret for Grown Ups",
    "genre": "马戏",
    "scale": "独立制作",
    "venue": "fools",
    "company": "",
    "start": "2026-09-13",
    "end": "2026-09-13",
    "price": 33,
    "priceText": "A$33 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "BLOW: Bubble Cabaret for Grown Ups 在Fool's Paradise (Entertainment Quarter)上演，演期 2026-09-13 至 2026-09-13，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/blow-bubble-cabaret-for-grown-ups/",
    "booking": "https://sydneyfringe.com/events/blow-bubble-cabaret-for-grown-ups/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-13",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-13 至 2026-09-13）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "The Virago",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/08-12-2026-143223-2883.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "bubble-show-in-space",
    "title": "Bubble Show in Space",
    "genre": "亲子剧",
    "scale": "独立制作",
    "venue": "fools",
    "company": "",
    "start": "2026-09-13",
    "end": "2026-09-13",
    "price": 30,
    "priceText": "A$30 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Bubble Show in Space 在Fool's Paradise (Entertainment Quarter)上演，演期 2026-09-13 至 2026-09-13，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/bubble-show-in-space/",
    "booking": "https://sydneyfringe.com/events/bubble-show-in-space/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-13",
        "12:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-13 至 2026-09-13）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "The Virago",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/08-12-2026-161837-5566.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "left-of-centre",
    "title": "Left of Centre",
    "genre": "卡巴莱",
    "scale": "独立制作",
    "venue": "fools",
    "company": "",
    "start": "2026-10-09",
    "end": "2026-10-09",
    "price": 40,
    "priceText": "A$40 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Left of Centre 在Fool's Paradise (Entertainment Quarter)上演，演期 2026-10-09 至 2026-10-09，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/left-of-centre/",
    "booking": "https://sydneyfringe.com/events/left-of-centre/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-10-09",
        "18:50",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-10-09 至 2026-10-09）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "The Bunker",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/08-12-2026-061436-6504.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "carly-electric-back-in-my-box",
    "title": "Carly Electric - Back In My Box",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-10-02",
    "end": "2026-10-03",
    "price": 35,
    "priceText": "A$35 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Carly Electric - Back In My Box 在Factory Theatre上演，演期 2026-10-02 至 2026-10-03，已公布 2 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/carly-electric-back-in-my-box/",
    "booking": "https://sydneyfringe.com/events/carly-electric-back-in-my-box/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-10-02",
        "19:00",
        ""
      ],
      [
        "2026-10-03",
        "19:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 2 场（2026-10-02 至 2026-10-03）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/07-20-2026-081415-4344.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "dan-rath-wip-the-comedy-store",
    "title": "Dan Rath – WIP @ The Comedy Store",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "comedystore",
    "company": "",
    "start": "2026-10-01",
    "end": "2026-10-01",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Dan Rath – WIP @ The Comedy Store 在The Comedy Store上演，演期 2026-10-01 至 2026-10-01，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/dan-rath-wip-the-comedy-store/",
    "booking": "https://sydneyfringe.com/events/dan-rath-wip-the-comedy-store/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-10-01",
        "19:45",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-10-01 至 2026-10-01）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/07-03-2026-052247-8119.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "outback-rhapsody-stand-up-tour",
    "title": "Outback Rhapsody - Stand-up Tour",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "chippo",
    "company": "",
    "start": "2026-09-17",
    "end": "2026-09-17",
    "price": 59,
    "priceText": "A$59 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Outback Rhapsody - Stand-up Tour 在The Chippo Hotel上演，演期 2026-09-17 至 2026-09-17，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/outback-rhapsody-stand-up-tour/",
    "booking": "https://sydneyfringe.com/events/outback-rhapsody-stand-up-tour/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-17",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-17 至 2026-09-17）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-30-2026-125835-8339.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "fresh-laundry",
    "title": "Fresh Laundry",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "newtownhotel",
    "company": "",
    "start": "2026-09-05",
    "end": "2026-09-05",
    "price": 18,
    "priceText": "A$18 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 45 分钟",
    "desc": "Fresh Laundry 在Newtown Hotel上演，演期 2026-09-05 至 2026-09-05，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/fresh-laundry/",
    "booking": "https://sydneyfringe.com/events/fresh-laundry/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-05",
        "19:45",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-05 至 2026-09-05）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/03-30-2026-083509-2557.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "wonder-mama-s-pop-art-cabaret",
    "title": "Wonder Mama's Pop/Art Cabaret",
    "genre": "卡巴莱",
    "scale": "独立制作",
    "venue": "qtopia",
    "company": "",
    "start": "2026-09-18",
    "end": "2026-09-18",
    "price": 30,
    "priceText": "A$30 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 40 分钟",
    "desc": "Wonder Mama's Pop/Art Cabaret 在Qtopia Sydney上演，演期 2026-09-18 至 2026-09-18，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/wonder-mamas-pop-art-cabaret/",
    "booking": "https://sydneyfringe.com/events/wonder-mamas-pop-art-cabaret/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-18",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-18 至 2026-09-18）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Queer Hub - The Substation",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-31-2026-114953-6707.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "blast-lab-science",
    "title": "BLAST LAB Science",
    "genre": "亲子剧",
    "scale": "独立制作",
    "venue": "fools",
    "company": "",
    "start": "2026-09-26",
    "end": "2026-10-11",
    "price": 33,
    "priceText": "A$33 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "BLAST LAB Science 在Fool's Paradise (Entertainment Quarter)上演，演期 2026-09-26 至 2026-10-11，已公布 10 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/blast-lab-science/",
    "booking": "https://sydneyfringe.com/events/blast-lab-science/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-26",
        "13:30",
        ""
      ],
      [
        "2026-09-27",
        "13:30",
        ""
      ],
      [
        "2026-09-28",
        "13:30",
        ""
      ],
      [
        "2026-10-05",
        "13:30",
        ""
      ],
      [
        "2026-10-06",
        "13:30",
        ""
      ],
      [
        "2026-10-07",
        "13:30",
        ""
      ],
      [
        "2026-10-08",
        "13:30",
        ""
      ],
      [
        "2026-10-09",
        "13:30",
        ""
      ],
      [
        "2026-10-10",
        "13:30",
        ""
      ],
      [
        "2026-10-11",
        "13:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 10 场（2026-09-26 至 2026-10-11）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "The Bunker",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/07-18-2026-063450-3605.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "academy-of-magic-wonderland-magic-school",
    "title": "Academy of Magic: Wonderland Magic School",
    "genre": "亲子剧",
    "scale": "独立制作",
    "venue": "fools",
    "company": "",
    "start": "2026-10-08",
    "end": "2026-10-11",
    "price": 35,
    "priceText": "A$35 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Academy of Magic: Wonderland Magic School 在Fool's Paradise (Entertainment Quarter)上演，演期 2026-10-08 至 2026-10-11，已公布 4 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/academy-of-magic/",
    "booking": "https://sydneyfringe.com/events/academy-of-magic/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-10-08",
        "14:50",
        ""
      ],
      [
        "2026-10-09",
        "14:50",
        ""
      ],
      [
        "2026-10-10",
        "14:50",
        ""
      ],
      [
        "2026-10-11",
        "14:50",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 4 场（2026-10-08 至 2026-10-11）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "The Bunker",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/07-22-2026-011552-4202.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "she-s-no-joke",
    "title": "She's No Joke",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "comedystore",
    "company": "",
    "start": "2026-09-26",
    "end": "2026-09-26",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "She's No Joke 在The Comedy Store上演，演期 2026-09-26 至 2026-09-26，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/shes-no-joke/",
    "booking": "https://sydneyfringe.com/events/shes-no-joke/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-26",
        "20:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-26 至 2026-09-26）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/07-09-2026-042940-7362.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "cassie-workman-you-are-here-encore",
    "title": "Cassie Workman - You Are Here - Encore",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-10-03",
    "end": "2026-10-03",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Cassie Workman - You Are Here - Encore 在Factory Theatre上演，演期 2026-10-03 至 2026-10-03，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/cassie-workman-you-are-here-encore/",
    "booking": "https://sydneyfringe.com/events/cassie-workman-you-are-here-encore/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-10-03",
        "19:45",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-10-03 至 2026-10-03）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/07-07-2026-015207-3924.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "mr-snotbottom-s-stinky-silly-show",
    "title": "Mr Snotbottom’s Stinky Silly Show",
    "genre": "亲子剧",
    "scale": "专业制作",
    "venue": "darlingquarter",
    "company": "",
    "start": "2026-10-01",
    "end": "2026-10-03",
    "price": 22,
    "priceText": "A$22 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Mr Snotbottom’s Stinky Silly Show 在Darling Quarter Theatre上演，演期 2026-10-01 至 2026-10-03，已公布 3 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/mr-snotbottom/",
    "booking": "https://sydneyfringe.com/events/mr-snotbottom/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-10-01",
        "14:00",
        ""
      ],
      [
        "2026-10-02",
        "14:00",
        ""
      ],
      [
        "2026-10-03",
        "14:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 3 场（2026-10-01 至 2026-10-03）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-29-2026-074731-9027.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "dipping-sauce-and-friends",
    "title": "Dipping Sauce and Friends",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-26",
    "end": "2026-09-27",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 55 分钟",
    "desc": "Dipping Sauce and Friends 在Factory Theatre上演，演期 2026-09-26 至 2026-09-27，已公布 2 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/dipping-sauce-and-friends/",
    "booking": "https://sydneyfringe.com/events/dipping-sauce-and-friends/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-26",
        "20:00",
        ""
      ],
      [
        "2026-09-27",
        "19:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 2 场（2026-09-26 至 2026-09-27）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/07-22-2026-054324-1936.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "ponpon-huang-how-dare-you",
    "title": "Ponpon Huang: How Dare You – 看你好不好？",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "comedystore",
    "company": "",
    "start": "2026-09-24",
    "end": "2026-09-26",
    "price": 39,
    "priceText": "A$39 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 90 分钟",
    "desc": "Ponpon Huang: How Dare You – 看你好不好？ 在The Comedy Store上演，演期 2026-09-24 至 2026-09-26，已公布 3 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/ponpon-huang-how-dare-you-%e7%9c%8b%e4%bd%a0%e5%a5%bd%e4%b8%8d%e5%a5%bd%ef%bc%9f/",
    "booking": "https://sydneyfringe.com/events/ponpon-huang-how-dare-you-%e7%9c%8b%e4%bd%a0%e5%a5%bd%e4%b8%8d%e5%a5%bd%ef%bc%9f/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-24",
        "18:00",
        ""
      ],
      [
        "2026-09-25",
        "21:00",
        ""
      ],
      [
        "2026-09-26",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 3 场（2026-09-24 至 2026-09-26）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/07-07-2026-075300-1157.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "paul-wild-wild-by-name",
    "title": "Paul Wild - Wild By Name",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-26",
    "end": "2026-09-27",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "Paul Wild - Wild By Name 在Factory Theatre上演，演期 2026-09-26 至 2026-09-27，已公布 2 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/wild-by-name/",
    "booking": "https://sydneyfringe.com/events/wild-by-name/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-26",
        "17:15",
        ""
      ],
      [
        "2026-09-27",
        "16:15",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 2 场（2026-09-26 至 2026-09-27）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-24-2026-033729-7796.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "party-mix",
    "title": "Party Mix",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-20",
    "end": "2026-09-20",
    "price": 22,
    "priceText": "A$22 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 55 分钟",
    "desc": "Party Mix 在Factory Theatre上演，演期 2026-09-20 至 2026-09-20，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/party-mix/",
    "booking": "https://sydneyfringe.com/events/party-mix/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-20",
        "16:15",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-20 至 2026-09-20）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-24-2026-030639-9958.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "crazy-funny-asians",
    "title": "Crazy Funny Asians",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "newtownhotel",
    "company": "",
    "start": "2026-09-20",
    "end": "2026-09-20",
    "price": 33,
    "priceText": "A$33 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Crazy Funny Asians 在Newtown Hotel上演，演期 2026-09-20 至 2026-09-20，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/crazy-funny-asians/",
    "booking": "https://sydneyfringe.com/events/crazy-funny-asians/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-20",
        "19:15",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-20 至 2026-09-20）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-28-2026-092031-5590.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "best-of-the-fest",
    "title": "Best of the Fest",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "newtownhotel",
    "company": "",
    "start": "2026-09-22",
    "end": "2026-09-27",
    "price": 33,
    "priceText": "A$33 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Best of the Fest 在Newtown Hotel上演，演期 2026-09-22 至 2026-09-27，已公布 6 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/best-of-the-fest/",
    "booking": "https://sydneyfringe.com/events/best-of-the-fest/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-22",
        "19:00",
        ""
      ],
      [
        "2026-09-23",
        "19:00",
        ""
      ],
      [
        "2026-09-24",
        "19:00",
        ""
      ],
      [
        "2026-09-25",
        "19:00",
        ""
      ],
      [
        "2026-09-26",
        "19:00",
        ""
      ],
      [
        "2026-09-27",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 6 场（2026-09-22 至 2026-09-27）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/03-02-2026-125129-6472.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "that-s-me-in-the-corner",
    "title": "That's Me In The Corner",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "erskineville",
    "company": "",
    "start": "2026-09-24",
    "end": "2026-09-26",
    "price": 40,
    "priceText": "A$40 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "That's Me In The Corner 在Erskineville Town Hall上演，演期 2026-09-24 至 2026-09-26，已公布 2 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/thats-me-in-the-corner/",
    "booking": "https://sydneyfringe.com/events/thats-me-in-the-corner/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-24",
        "20:00",
        ""
      ],
      [
        "2026-09-26",
        "20:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 2 场（2026-09-24 至 2026-09-26）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Emerging Artist Share House - The Boom Boom Room",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-29-2026-041549-9465.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "furys-fun-haus",
    "title": "Furys Fun Haus",
    "genre": "马戏",
    "scale": "独立制作",
    "venue": "fools",
    "company": "",
    "start": "2026-09-26",
    "end": "2026-09-27",
    "price": 30,
    "priceText": "A$30 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "Furys Fun Haus 在Fool's Paradise (Entertainment Quarter)上演，演期 2026-09-26 至 2026-09-27，已公布 2 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/furys-fun-haus/",
    "booking": "https://sydneyfringe.com/events/furys-fun-haus/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-26",
        "16:30",
        ""
      ],
      [
        "2026-09-27",
        "16:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 2 场（2026-09-26 至 2026-09-27）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "The Virago",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-18-2026-131947-9288.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "science-did-what-now",
    "title": "Science Did What Now?!",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "newtownhotel",
    "company": "",
    "start": "2026-09-20",
    "end": "2026-09-20",
    "price": 30,
    "priceText": "A$30 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Science Did What Now?! 在Newtown Hotel上演，演期 2026-09-20 至 2026-09-20，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/science-did-what-now/",
    "booking": "https://sydneyfringe.com/events/science-did-what-now/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-20",
        "17:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-20 至 2026-09-20）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-20-2026-084813-3273.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "best-of-british",
    "title": "Best of British",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "newtownhotel",
    "company": "",
    "start": "2026-09-19",
    "end": "2026-09-19",
    "price": 33,
    "priceText": "A$33 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Best of British 在Newtown Hotel上演，演期 2026-09-19 至 2026-09-19，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/best-of-british/",
    "booking": "https://sydneyfringe.com/events/best-of-british/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-19",
        "20:15",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-19 至 2026-09-19）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/03-02-2026-134830-1291.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "aidan-bannister-magic",
    "title": "Aidan Bannister: MAGIC",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "newtownhotel",
    "company": "",
    "start": "2026-09-22",
    "end": "2026-09-26",
    "price": 30,
    "priceText": "A$30 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Aidan Bannister: MAGIC 在Newtown Hotel上演，演期 2026-09-22 至 2026-09-26，已公布 3 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/aidan-bannister-magic/",
    "booking": "https://sydneyfringe.com/events/aidan-bannister-magic/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-22",
        "19:45",
        ""
      ],
      [
        "2026-09-24",
        "19:45",
        ""
      ],
      [
        "2026-09-26",
        "19:45",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 3 场（2026-09-22 至 2026-09-26）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-19-2026-112425-3070.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "claire-robin-nun-slut",
    "title": "Claire Robin - Nun Slut",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "fringeontherocks",
    "company": "",
    "start": "2026-09-23",
    "end": "2026-10-11",
    "price": 45,
    "priceText": "A$45 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Claire Robin - Nun Slut 在Fringe on The Rocks上演，演期 2026-09-23 至 2026-10-11，已公布 13 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/nun-slut/",
    "booking": "https://sydneyfringe.com/events/nun-slut/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-23",
        "18:15",
        ""
      ],
      [
        "2026-09-24",
        "18:15",
        ""
      ],
      [
        "2026-09-25",
        "18:15",
        ""
      ],
      [
        "2026-09-26",
        "18:15",
        ""
      ],
      [
        "2026-09-27",
        "18:15",
        ""
      ],
      [
        "2026-09-30",
        "18:15",
        ""
      ],
      [
        "2026-10-01",
        "18:15",
        ""
      ],
      [
        "2026-10-02",
        "18:15",
        ""
      ],
      [
        "2026-10-03",
        "18:15",
        ""
      ],
      [
        "2026-10-04",
        "18:15",
        ""
      ],
      [
        "2026-10-09",
        "18:15",
        ""
      ],
      [
        "2026-10-10",
        "18:15",
        ""
      ],
      [
        "2026-10-11",
        "18:15",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 13 场（2026-09-23 至 2026-10-11）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "6-8 Atherden St, Level 1",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-13-2026-040848-4913.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "exhibitch",
    "title": "Exhibitch",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-20",
    "end": "2026-09-20",
    "price": 22,
    "priceText": "A$22 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Exhibitch 在Factory Theatre上演，演期 2026-09-20 至 2026-09-20，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/exhibitch/",
    "booking": "https://sydneyfringe.com/events/exhibitch/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-20",
        "17:45",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-20 至 2026-09-20）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-17-2026-064300-2975.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "queen-a-night-at-the-cabaret-opera",
    "title": "Queen - A Night at the Cabaret Opera",
    "genre": "卡巴莱",
    "scale": "独立制作",
    "venue": "marrickville",
    "company": "",
    "start": "2026-09-25",
    "end": "2026-09-25",
    "price": 35,
    "priceText": "A$35 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Queen - A Night at the Cabaret Opera 在Marrickville Town Hall上演，演期 2026-09-25 至 2026-09-25，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/queen-a-night-at-the-cabaret-opera/",
    "booking": "https://sydneyfringe.com/events/queen-a-night-at-the-cabaret-opera/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-25",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-25 至 2026-09-25）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Festival Hub - The Chambers",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-27-2025-234914-8862.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "crying-contralto",
    "title": "Crying Contralto",
    "genre": "卡巴莱",
    "scale": "独立制作",
    "venue": "erskineville",
    "company": "",
    "start": "2026-09-19",
    "end": "2026-09-19",
    "price": 28,
    "priceText": "A$28 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 55 分钟",
    "desc": "Crying Contralto 在Erskineville Town Hall上演，演期 2026-09-19 至 2026-09-19，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/crying-contralto/",
    "booking": "https://sydneyfringe.com/events/crying-contralto/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-19",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-19 至 2026-09-19）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Emerging Artist Share House - The Spare Room",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-26-2026-102555-7116.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "swashbuckling-circus",
    "title": "SwashBuckling Circus",
    "genre": "亲子剧",
    "scale": "独立制作",
    "venue": "fools",
    "company": "",
    "start": "2026-09-29",
    "end": "2026-10-04",
    "price": 30,
    "priceText": "A$30 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "SwashBuckling Circus 在Fool's Paradise (Entertainment Quarter)上演，演期 2026-09-29 至 2026-10-04，已公布 6 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/swashbuckling-circus/",
    "booking": "https://sydneyfringe.com/events/swashbuckling-circus/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-29",
        "13:30",
        ""
      ],
      [
        "2026-09-30",
        "13:30",
        ""
      ],
      [
        "2026-10-01",
        "13:30",
        ""
      ],
      [
        "2026-10-02",
        "13:30",
        ""
      ],
      [
        "2026-10-03",
        "13:30",
        ""
      ],
      [
        "2026-10-04",
        "13:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 6 场（2026-09-29 至 2026-10-04）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "The Bunker",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-19-2026-072611-8548.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "a-monty-python-cabaret-singalong-circus",
    "title": "A Monty Python Cabaret Singalong Circus",
    "genre": "卡巴莱",
    "scale": "独立制作",
    "venue": "marrickville",
    "company": "",
    "start": "2026-09-23",
    "end": "2026-09-23",
    "price": 35,
    "priceText": "A$35 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 55 分钟",
    "desc": "A Monty Python Cabaret Singalong Circus 在Marrickville Town Hall上演，演期 2026-09-23 至 2026-09-23，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/a-monty-python-cabaret-singalong-circus/",
    "booking": "https://sydneyfringe.com/events/a-monty-python-cabaret-singalong-circus/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-23",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-23 至 2026-09-23）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Festival Hub - The Chambers",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-27-2025-073705-4991.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "another-unwasted-evening-the-genius-of-tom-lehrer",
    "title": "Another Unwasted Evening - the Genius of Tom Lehrer",
    "genre": "卡巴莱",
    "scale": "独立制作",
    "venue": "marrickville",
    "company": "",
    "start": "2026-09-22",
    "end": "2026-09-22",
    "price": 35,
    "priceText": "A$35 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 55 分钟",
    "desc": "Another Unwasted Evening - the Genius of Tom Lehrer 在Marrickville Town Hall上演，演期 2026-09-22 至 2026-09-22，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/another-unwasted-evening-the-genius-of-tom-lehrer/",
    "booking": "https://sydneyfringe.com/events/another-unwasted-evening-the-genius-of-tom-lehrer/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-22",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-22 至 2026-09-22）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Festival Hub - The Chambers",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-27-2025-205832-2653.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "the-giant-balloon-show",
    "title": "The Giant Balloon Show",
    "genre": "亲子剧",
    "scale": "独立制作",
    "venue": "fools",
    "company": "",
    "start": "2026-09-26",
    "end": "2026-10-11",
    "price": 26,
    "priceText": "A$26 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "The Giant Balloon Show 在Fool's Paradise (Entertainment Quarter)上演，演期 2026-09-26 至 2026-10-11，已公布 16 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/the-giant-balloon-show/",
    "booking": "https://sydneyfringe.com/events/the-giant-balloon-show/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-26",
        "12:10",
        ""
      ],
      [
        "2026-09-27",
        "12:10",
        ""
      ],
      [
        "2026-09-28",
        "12:10",
        ""
      ],
      [
        "2026-09-29",
        "12:10",
        ""
      ],
      [
        "2026-09-30",
        "12:10",
        ""
      ],
      [
        "2026-10-01",
        "12:10",
        ""
      ],
      [
        "2026-10-02",
        "12:10",
        ""
      ],
      [
        "2026-10-03",
        "12:10",
        ""
      ],
      [
        "2026-10-04",
        "12:10",
        ""
      ],
      [
        "2026-10-05",
        "12:10",
        ""
      ],
      [
        "2026-10-06",
        "12:10",
        ""
      ],
      [
        "2026-10-07",
        "12:10",
        ""
      ],
      [
        "2026-10-08",
        "12:10",
        ""
      ],
      [
        "2026-10-09",
        "12:10",
        ""
      ],
      [
        "2026-10-10",
        "12:10",
        ""
      ],
      [
        "2026-10-11",
        "12:10",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 16 场（2026-09-26 至 2026-10-11）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "The Bunker",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/08-22-2026-094116-5291.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "adults-only-magic-show",
    "title": "Adults Only Magic Show",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "fools",
    "company": "",
    "start": "2026-10-02",
    "end": "2026-10-10",
    "price": 45,
    "priceText": "A$45 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 70 分钟",
    "desc": "Adults Only Magic Show 在Fool's Paradise (Entertainment Quarter)上演，演期 2026-10-02 至 2026-10-10，已公布 4 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/adults-only-magic-show/",
    "booking": "https://sydneyfringe.com/events/adults-only-magic-show/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-10-02",
        "20:10",
        ""
      ],
      [
        "2026-10-03",
        "20:10",
        ""
      ],
      [
        "2026-10-09",
        "20:10",
        ""
      ],
      [
        "2026-10-10",
        "20:10",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 4 场（2026-10-02 至 2026-10-10）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "The Bunker",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-25-2026-131118-2647.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "the-greatest-magic-show",
    "title": "The Greatest Magic Show",
    "genre": "亲子剧",
    "scale": "独立制作",
    "venue": "fools",
    "company": "",
    "start": "2026-09-26",
    "end": "2026-10-11",
    "price": 33,
    "priceText": "A$33 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "The Greatest Magic Show 在Fool's Paradise (Entertainment Quarter)上演，演期 2026-09-26 至 2026-10-11，已公布 16 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/the-greatest-magic-show/",
    "booking": "https://sydneyfringe.com/events/the-greatest-magic-show/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-26",
        "12:00",
        ""
      ],
      [
        "2026-09-27",
        "12:00",
        ""
      ],
      [
        "2026-09-28",
        "12:00",
        ""
      ],
      [
        "2026-09-29",
        "12:00",
        ""
      ],
      [
        "2026-09-30",
        "12:00",
        ""
      ],
      [
        "2026-10-01",
        "12:00",
        ""
      ],
      [
        "2026-10-02",
        "12:00",
        ""
      ],
      [
        "2026-10-03",
        "12:00",
        ""
      ],
      [
        "2026-10-04",
        "12:00",
        ""
      ],
      [
        "2026-10-05",
        "12:00",
        ""
      ],
      [
        "2026-10-06",
        "12:00",
        ""
      ],
      [
        "2026-10-07",
        "12:00",
        ""
      ],
      [
        "2026-10-08",
        "12:00",
        ""
      ],
      [
        "2026-10-09",
        "12:00",
        ""
      ],
      [
        "2026-10-10",
        "12:00",
        ""
      ],
      [
        "2026-10-11",
        "12:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 16 场（2026-09-26 至 2026-10-11）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "The Virago",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-25-2026-111603-4857.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "tickle-and-tease-a-comedy-cabaret",
    "title": "Tickle and Tease, a Comedy Cabaret",
    "genre": "卡巴莱",
    "scale": "独立制作",
    "venue": "fools",
    "company": "",
    "start": "2026-09-25",
    "end": "2026-09-26",
    "price": 35,
    "priceText": "A$35 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Tickle and Tease, a Comedy Cabaret 在Fool's Paradise (Entertainment Quarter)上演，演期 2026-09-25 至 2026-09-26，已公布 2 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/tickle-and-tease-a-comedy-cabaret/",
    "booking": "https://sydneyfringe.com/events/tickle-and-tease-a-comedy-cabaret/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-25",
        "21:30",
        ""
      ],
      [
        "2026-09-26",
        "21:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 2 场（2026-09-25 至 2026-09-26）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "The Bunker",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/04-30-2026-125748-1851.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "the-flying-bubble-show",
    "title": "The Flying Bubble Show",
    "genre": "亲子剧",
    "scale": "独立制作",
    "venue": "fools",
    "company": "",
    "start": "2026-09-26",
    "end": "2026-10-11",
    "price": 35,
    "priceText": "A$35 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "The Flying Bubble Show 在Fool's Paradise (Entertainment Quarter)上演，演期 2026-09-26 至 2026-10-11，已公布 16 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/the-flying-bubble-show/",
    "booking": "https://sydneyfringe.com/events/the-flying-bubble-show/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-26",
        "10:30",
        ""
      ],
      [
        "2026-09-27",
        "10:30",
        ""
      ],
      [
        "2026-09-28",
        "10:30",
        ""
      ],
      [
        "2026-09-29",
        "10:30",
        ""
      ],
      [
        "2026-09-30",
        "10:30",
        ""
      ],
      [
        "2026-10-01",
        "10:30",
        ""
      ],
      [
        "2026-10-02",
        "10:30",
        ""
      ],
      [
        "2026-10-03",
        "10:30",
        ""
      ],
      [
        "2026-10-04",
        "10:30",
        ""
      ],
      [
        "2026-10-05",
        "10:30",
        ""
      ],
      [
        "2026-10-06",
        "10:30",
        ""
      ],
      [
        "2026-10-07",
        "10:30",
        ""
      ],
      [
        "2026-10-08",
        "10:30",
        ""
      ],
      [
        "2026-10-09",
        "10:30",
        ""
      ],
      [
        "2026-10-10",
        "10:30",
        ""
      ],
      [
        "2026-10-11",
        "10:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 16 场（2026-09-26 至 2026-10-11）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "The Virago",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/08-18-2025-032716-6963.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "100-dark-comedy",
    "title": "100% Dark Comedy",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "erskineville",
    "company": "",
    "start": "2026-09-25",
    "end": "2026-09-26",
    "price": 26,
    "priceText": "A$26 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "100% Dark Comedy 在Erskineville Town Hall上演，演期 2026-09-25 至 2026-09-26，已公布 2 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/100-dark-comedy/",
    "booking": "https://sydneyfringe.com/events/100-dark-comedy/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-25",
        "20:15",
        ""
      ],
      [
        "2026-09-26",
        "21:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 2 场（2026-09-25 至 2026-09-26）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Emerging Artist Share House - The Spare Room",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/08-08-2024-052438-5495.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "the-racist-immigrants",
    "title": "The Racist Immigrants",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "erskineville",
    "company": "",
    "start": "2026-09-21",
    "end": "2026-09-28",
    "price": 27,
    "priceText": "A$27 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "The Racist Immigrants 在Erskineville Town Hall上演，演期 2026-09-21 至 2026-09-28，已公布 7 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/the-racist-immigrants/",
    "booking": "https://sydneyfringe.com/events/the-racist-immigrants/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-21",
        "18:05",
        ""
      ],
      [
        "2026-09-23",
        "19:15",
        ""
      ],
      [
        "2026-09-24",
        "19:15",
        ""
      ],
      [
        "2026-09-25",
        "19:15",
        ""
      ],
      [
        "2026-09-26",
        "17:30",
        ""
      ],
      [
        "2026-09-26",
        "21:00",
        ""
      ],
      [
        "2026-09-28",
        "18:05",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 7 场（2026-09-21 至 2026-09-28）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Emerging Artist Share House - The Office",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/07-22-2026-145204-8571.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "all-star-circus",
    "title": "All Star Circus",
    "genre": "亲子剧",
    "scale": "独立制作",
    "venue": "fools",
    "company": "",
    "start": "2026-09-26",
    "end": "2026-10-11",
    "price": 29,
    "priceText": "A$29 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "All Star Circus 在Fool's Paradise (Entertainment Quarter)上演，演期 2026-09-26 至 2026-10-11，已公布 16 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/all-star-circus/",
    "booking": "https://sydneyfringe.com/events/all-star-circus/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-26",
        "15:00",
        ""
      ],
      [
        "2026-09-27",
        "15:00",
        ""
      ],
      [
        "2026-09-28",
        "15:00",
        ""
      ],
      [
        "2026-09-29",
        "15:00",
        ""
      ],
      [
        "2026-09-30",
        "15:00",
        ""
      ],
      [
        "2026-10-01",
        "15:00",
        ""
      ],
      [
        "2026-10-02",
        "15:00",
        ""
      ],
      [
        "2026-10-03",
        "15:00",
        ""
      ],
      [
        "2026-10-04",
        "15:00",
        ""
      ],
      [
        "2026-10-05",
        "15:00",
        ""
      ],
      [
        "2026-10-06",
        "15:00",
        ""
      ],
      [
        "2026-10-07",
        "15:00",
        ""
      ],
      [
        "2026-10-08",
        "15:00",
        ""
      ],
      [
        "2026-10-09",
        "15:00",
        ""
      ],
      [
        "2026-10-10",
        "15:00",
        ""
      ],
      [
        "2026-10-11",
        "15:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 16 场（2026-09-26 至 2026-10-11）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "The Virago",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-09-2025-002301-8165.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "global-comedy",
    "title": "Global Comedy",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "newtownhotel",
    "company": "",
    "start": "2026-09-21",
    "end": "2026-09-27",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Global Comedy 在Newtown Hotel上演，演期 2026-09-21 至 2026-09-27，已公布 7 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/global-comedy/",
    "booking": "https://sydneyfringe.com/events/global-comedy/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-21",
        "18:30",
        ""
      ],
      [
        "2026-09-22",
        "18:30",
        ""
      ],
      [
        "2026-09-23",
        "18:30",
        ""
      ],
      [
        "2026-09-24",
        "18:30",
        ""
      ],
      [
        "2026-09-25",
        "18:30",
        ""
      ],
      [
        "2026-09-26",
        "18:30",
        ""
      ],
      [
        "2026-09-27",
        "17:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 7 场（2026-09-21 至 2026-09-27）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-28-2026-072408-3042.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "it-s-a-match-tinder-comedy",
    "title": "It's A Match! - Tinder Comedy",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "newtownhotel",
    "company": "",
    "start": "2026-09-27",
    "end": "2026-09-27",
    "price": 30,
    "priceText": "A$30 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "It's A Match! - Tinder Comedy 在Newtown Hotel上演，演期 2026-09-27 至 2026-09-27，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/its-a-match-tinder-comedy/",
    "booking": "https://sydneyfringe.com/events/its-a-match-tinder-comedy/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-27",
        "20:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-27 至 2026-09-27）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-21-2026-060329-5382.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "jokes-about-the-time-i-got-detained-in-america-other-stories",
    "title": "Jokes About The Time I Got Detained In America & Other Stories",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "erskineville",
    "company": "",
    "start": "2026-09-19",
    "end": "2026-09-19",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 55 分钟",
    "desc": "Jokes About The Time I Got Detained In America & Other Stories 在Erskineville Town Hall上演，演期 2026-09-19 至 2026-09-19，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/jokes-about-the-time-i-got-detained-in-america-other-stories/",
    "booking": "https://sydneyfringe.com/events/jokes-about-the-time-i-got-detained-in-america-other-stories/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-19",
        "21:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-19 至 2026-09-19）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Emerging Artist Share House - The Spare Room",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/03-05-2026-035504-4124.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "best-of-international-comedy",
    "title": "Best of International Comedy",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "barrelbelow",
    "company": "",
    "start": "2026-09-21",
    "end": "2026-09-28",
    "price": 27,
    "priceText": "A$27 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "Best of International Comedy 在Barrel Below上演，演期 2026-09-21 至 2026-09-28，已公布 3 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/best-of-international-comedy/",
    "booking": "https://sydneyfringe.com/events/best-of-international-comedy/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-21",
        "19:15",
        ""
      ],
      [
        "2026-09-26",
        "19:15",
        ""
      ],
      [
        "2026-09-28",
        "19:15",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 3 场（2026-09-21 至 2026-09-28）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Multicultural Comedy Hub",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/08-29-2026-002259-1890.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "7-eleven-attack",
    "title": "7-Eleven Attack",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "barrelbelow",
    "company": "",
    "start": "2026-09-24",
    "end": "2026-09-24",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "7-Eleven Attack 在Barrel Below上演，演期 2026-09-24 至 2026-09-24，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/7-eleven-attack/",
    "booking": "https://sydneyfringe.com/events/7-eleven-attack/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-24",
        "18:05",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-24 至 2026-09-24）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Multicultural Comedy Hub",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/09-01-2025-022856-1202.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "xxx-naughty-comedy-showcase",
    "title": "XXX Naughty Comedy Showcase",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "newtownhotel",
    "company": "",
    "start": "2026-09-24",
    "end": "2026-09-26",
    "price": 30,
    "priceText": "A$30 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "XXX Naughty Comedy Showcase 在Newtown Hotel上演，演期 2026-09-24 至 2026-09-26，已公布 3 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/xxx-naughty-comedy-showcase/",
    "booking": "https://sydneyfringe.com/events/xxx-naughty-comedy-showcase/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-24",
        "21:30",
        ""
      ],
      [
        "2026-09-25",
        "21:30",
        ""
      ],
      [
        "2026-09-26",
        "21:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 3 场（2026-09-24 至 2026-09-26）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-28-2026-090432-1158.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "off-white",
    "title": "Off White",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-09",
    "end": "2026-09-09",
    "price": 19.95,
    "priceText": "A$19.95 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Off White 在Factory Theatre上演，演期 2026-09-09 至 2026-09-09，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/off-white/",
    "booking": "https://sydneyfringe.com/events/off-white/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-09",
        "19:45",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-09 至 2026-09-09）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-29-2026-023216-7222.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "a-court-of-soap-and-opera",
    "title": "A Court of Soap and Opera",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-04",
    "end": "2026-09-04",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 55 分钟",
    "desc": "A Court of Soap and Opera 在Factory Theatre上演，演期 2026-09-04 至 2026-09-04，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/a-court-of-soap-and-opera/",
    "booking": "https://sydneyfringe.com/events/a-court-of-soap-and-opera/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-04",
        "21:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-04 至 2026-09-04）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-03-2026-125436-5973.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "interior-motives",
    "title": "Interior Motives",
    "genre": "马戏",
    "scale": "独立制作",
    "venue": "fools",
    "company": "",
    "start": "2026-09-06",
    "end": "2026-09-06",
    "price": 33,
    "priceText": "A$33 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 45 分钟",
    "desc": "Interior Motives 在Fool's Paradise (Entertainment Quarter)上演，演期 2026-09-06 至 2026-09-06，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/interior-motives/",
    "booking": "https://sydneyfringe.com/events/interior-motives/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-06",
        "20:10",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-06 至 2026-09-06）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "The Bunker",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/03-27-2026-033153-1559.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "jeromaia-detto-giuseppe-s-love-quest",
    "title": "Jeromaia Detto: Giuseppe's Love Quest",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "erskineville",
    "company": "",
    "start": "2026-09-19",
    "end": "2026-09-19",
    "price": 31,
    "priceText": "A$31 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Jeromaia Detto: Giuseppe's Love Quest 在Erskineville Town Hall上演，演期 2026-09-19 至 2026-09-19，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/jeromaia-detto-giuseppes-love-quest/",
    "booking": "https://sydneyfringe.com/events/jeromaia-detto-giuseppes-love-quest/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-19",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-19 至 2026-09-19）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Emerging Artist Share House - The Living Room",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/03-30-2026-074257-5889.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "tchocolatl",
    "title": "Tchocolatl",
    "genre": "亲子剧",
    "scale": "独立制作",
    "venue": "fools",
    "company": "",
    "start": "2026-10-01",
    "end": "2026-10-07",
    "price": 29,
    "priceText": "A$29 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "Tchocolatl 在Fool's Paradise (Entertainment Quarter)上演，演期 2026-10-01 至 2026-10-07，已公布 4 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/tchocolatl/",
    "booking": "https://sydneyfringe.com/events/tchocolatl/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-10-01",
        "14:50",
        ""
      ],
      [
        "2026-10-03",
        "14:50",
        ""
      ],
      [
        "2026-10-06",
        "14:50",
        ""
      ],
      [
        "2026-10-07",
        "14:50",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 4 场（2026-10-01 至 2026-10-07）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "The Bunker",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-07-2026-093152-3052.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "congratulations-you-beat-depression",
    "title": "Congratulations! You beat depression",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-26",
    "end": "2026-09-27",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 45 分钟",
    "desc": "Congratulations! You beat depression 在Factory Theatre上演，演期 2026-09-26 至 2026-09-27，已公布 2 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/congratulations-you-beat-depression/",
    "booking": "https://sydneyfringe.com/events/congratulations-you-beat-depression/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-26",
        "19:45",
        ""
      ],
      [
        "2026-09-27",
        "18:45",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 2 场（2026-09-26 至 2026-09-27）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-18-2026-080611-3113.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "tutti-frutti-burlesque",
    "title": "Tutti Frutti Burlesque",
    "genre": "卡巴莱",
    "scale": "独立制作",
    "venue": "fools",
    "company": "",
    "start": "2026-09-20",
    "end": "2026-09-20",
    "price": 30,
    "priceText": "A$30 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Tutti Frutti Burlesque 在Fool's Paradise (Entertainment Quarter)上演，演期 2026-09-20 至 2026-09-20，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/tutti-frutti-burlesque/",
    "booking": "https://sydneyfringe.com/events/tutti-frutti-burlesque/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-20",
        "18:50",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-20 至 2026-09-20）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "The Bunker",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-17-2026-094250-4413.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "jeremy-moses-is-hard-to-work-with",
    "title": "Jeremy Moses is HARD TO WORK WITH",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-26",
    "end": "2026-09-27",
    "price": 22,
    "priceText": "A$22 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Jeremy Moses is HARD TO WORK WITH 在Factory Theatre上演，演期 2026-09-26 至 2026-09-27，已公布 2 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/jeremy-moses-is-hard-to-work-with/",
    "booking": "https://sydneyfringe.com/events/jeremy-moses-is-hard-to-work-with/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-26",
        "19:00",
        ""
      ],
      [
        "2026-09-27",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 2 场（2026-09-26 至 2026-09-27）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-27-2026-050721-2117.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "rubee-sookee-s-silly-sausage-fest",
    "title": "Rubee Sookee's Silly Sausage Fest.",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-20",
    "end": "2026-09-20",
    "price": 22,
    "priceText": "A$22 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "Rubee Sookee's Silly Sausage Fest. 在Factory Theatre上演，演期 2026-09-20 至 2026-09-20，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/rubee-sookees-silly-sausage-fest/",
    "booking": "https://sydneyfringe.com/events/rubee-sookees-silly-sausage-fest/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-20",
        "17:45",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-20 至 2026-09-20）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-16-2026-121257-3051.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "in-these-shoes",
    "title": "In These Shoes",
    "genre": "卡巴莱",
    "scale": "独立制作",
    "venue": "fringeontherocks",
    "company": "",
    "start": "2026-09-06",
    "end": "2026-09-06",
    "price": 46,
    "priceText": "A$46 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "In These Shoes 在Fringe on The Rocks上演，演期 2026-09-06 至 2026-09-06，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/in-these-shoes/",
    "booking": "https://sydneyfringe.com/events/in-these-shoes/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-06",
        "18:15",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-06 至 2026-09-06）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "6-8 Atherden St, Level 1",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-03-2026-123002-1179.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "black-widow",
    "title": "Black Widow",
    "genre": "卡巴莱",
    "scale": "独立制作",
    "venue": "qtopia",
    "company": "",
    "start": "2026-09-22",
    "end": "2026-09-26",
    "price": 30,
    "priceText": "A$30 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Black Widow 在Qtopia Sydney上演，演期 2026-09-22 至 2026-09-26，已公布 5 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/black-widow/",
    "booking": "https://sydneyfringe.com/events/black-widow/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-22",
        "18:00",
        ""
      ],
      [
        "2026-09-23",
        "18:00",
        ""
      ],
      [
        "2026-09-24",
        "18:00",
        ""
      ],
      [
        "2026-09-25",
        "18:00",
        ""
      ],
      [
        "2026-09-26",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 5 场（2026-09-22 至 2026-09-26）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Queer Hub - The Loading Dock",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/03-11-2026-025659-5635.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "michael-hing-how-are-we-supposed-to-live-like-this",
    "title": "MICHAEL HING - HOW ARE WE SUPPOSED TO LIVE LIKE THIS?",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-20",
    "end": "2026-09-20",
    "price": 22,
    "priceText": "A$22 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "MICHAEL HING - HOW ARE WE SUPPOSED TO LIVE LIKE THIS? 在Factory Theatre上演，演期 2026-09-20 至 2026-09-20，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/michael-hing-how-are-we-supposed-to-live-like-this/",
    "booking": "https://sydneyfringe.com/events/michael-hing-how-are-we-supposed-to-live-like-this/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-20",
        "19:15",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-20 至 2026-09-20）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-17-2026-061714-1476.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "comedy-for-corporates-work-life-balance-is-for-losers",
    "title": "Comedy for corporates: work-life balance is for losers",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "newtownhotel",
    "company": "",
    "start": "2026-09-25",
    "end": "2026-09-25",
    "price": 35,
    "priceText": "A$35 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Comedy for corporates: work-life balance is for losers 在Newtown Hotel上演，演期 2026-09-25 至 2026-09-25，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/comedy-for-corporates-work-life-balance-is-for-losers/",
    "booking": "https://sydneyfringe.com/events/comedy-for-corporates-work-life-balance-is-for-losers/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-25",
        "20:15",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-25 至 2026-09-25）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-29-2026-112753-7989.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "chameleon",
    "title": "Chameleon",
    "genre": "卡巴莱",
    "scale": "独立制作",
    "venue": "marrickville",
    "company": "",
    "start": "2026-09-19",
    "end": "2026-09-19",
    "price": 28,
    "priceText": "A$28 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Chameleon 在Marrickville Town Hall上演，演期 2026-09-19 至 2026-09-19，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/chameleon/",
    "booking": "https://sydneyfringe.com/events/chameleon/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-19",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-19 至 2026-09-19）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Festival Hub - The Safe Room",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-16-2026-011618-4551.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "wicked-women-of-comedy",
    "title": "Wicked Women of Comedy",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "newtownhotel",
    "company": "",
    "start": "2026-09-22",
    "end": "2026-09-26",
    "price": 30,
    "priceText": "A$30 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Wicked Women of Comedy 在Newtown Hotel上演，演期 2026-09-22 至 2026-09-26，已公布 3 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/wicked-women-of-comedy/",
    "booking": "https://sydneyfringe.com/events/wicked-women-of-comedy/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-22",
        "20:15",
        ""
      ],
      [
        "2026-09-24",
        "20:15",
        ""
      ],
      [
        "2026-09-26",
        "20:15",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 3 场（2026-09-22 至 2026-09-26）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-20-2026-054455-9226.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "evans-musoka-not-going-back",
    "title": "Evans Musoka - Not Going Back",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "newtownhotel",
    "company": "",
    "start": "2026-09-12",
    "end": "2026-09-12",
    "price": 30,
    "priceText": "A$30 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Evans Musoka - Not Going Back 在Newtown Hotel上演，演期 2026-09-12 至 2026-09-12，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/evans-musoka-not-going-back/",
    "booking": "https://sydneyfringe.com/events/evans-musoka-not-going-back/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-12",
        "21:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-12 至 2026-09-12）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-20-2026-082735-2725.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "international-alcohol-and-comedy-tasting",
    "title": "International Alcohol and Comedy Tasting",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "barrelbelow",
    "company": "",
    "start": "2026-09-25",
    "end": "2026-09-25",
    "price": 39.5,
    "priceText": "A$39.5 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "International Alcohol and Comedy Tasting 在Barrel Below上演，演期 2026-09-25 至 2026-09-25，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/international-alcohol-and-comedy-tasting/",
    "booking": "https://sydneyfringe.com/events/international-alcohol-and-comedy-tasting/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-25",
        "21:15",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-25 至 2026-09-25）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Multicultural Comedy Hub",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/07-08-2025-024802-9093.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "something-wicked",
    "title": "Something Wicked",
    "genre": "马戏",
    "scale": "独立制作",
    "venue": "fools",
    "company": "",
    "start": "2026-09-23",
    "end": "2026-09-27",
    "price": 45,
    "priceText": "A$45 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Something Wicked 在Fool's Paradise (Entertainment Quarter)上演，演期 2026-09-23 至 2026-09-27，已公布 5 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/something-wicked/",
    "booking": "https://sydneyfringe.com/events/something-wicked/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-23",
        "20:10",
        ""
      ],
      [
        "2026-09-24",
        "20:10",
        ""
      ],
      [
        "2026-09-25",
        "20:10",
        ""
      ],
      [
        "2026-09-26",
        "20:10",
        ""
      ],
      [
        "2026-09-27",
        "20:10",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 5 场（2026-09-23 至 2026-09-27）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "The Bunker",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/04-28-2026-032701-2025.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "oliver-pol-featherbrained",
    "title": "Oliver Pol: Featherbrained",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "marrickville",
    "company": "",
    "start": "2026-09-19",
    "end": "2026-09-19",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 55 分钟",
    "desc": "Oliver Pol: Featherbrained 在Marrickville Town Hall上演，演期 2026-09-19 至 2026-09-19，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/oliver-pol-featherbrained/",
    "booking": "https://sydneyfringe.com/events/oliver-pol-featherbrained/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-19",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-19 至 2026-09-19）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Festival Hub - The Chambers",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-12-2026-110943-8306.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "overture",
    "title": "OVERTURE",
    "genre": "舞蹈",
    "scale": "独立制作",
    "venue": "eternity",
    "company": "",
    "start": "2026-09-23",
    "end": "2026-09-26",
    "price": 55,
    "priceText": "A$55 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "OVERTURE 在Eternity Playhouse上演，演期 2026-09-23 至 2026-09-26，已公布 4 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/overture/",
    "booking": "https://sydneyfringe.com/events/overture/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-23",
        "21:15",
        ""
      ],
      [
        "2026-09-24",
        "21:15",
        ""
      ],
      [
        "2026-09-25",
        "21:15",
        ""
      ],
      [
        "2026-09-26",
        "21:15",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 4 场（2026-09-23 至 2026-09-26）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Off Broadway Hub",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/07-01-2026-054958-8325.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "gaga-esque",
    "title": "GAGA-ESQUE",
    "genre": "卡巴莱",
    "scale": "独立制作",
    "venue": "fools",
    "company": "",
    "start": "2026-10-10",
    "end": "2026-10-11",
    "price": 45,
    "priceText": "A$45 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "GAGA-ESQUE 在Fool's Paradise (Entertainment Quarter)上演，演期 2026-10-10 至 2026-10-11，已公布 2 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/gaga-esque/",
    "booking": "https://sydneyfringe.com/events/gaga-esque/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-10-10",
        "18:50",
        ""
      ],
      [
        "2026-10-11",
        "18:50",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 2 场（2026-10-10 至 2026-10-11）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "The Bunker",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/08-06-2026-062741-2997.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "roman-wasn-t-built-in-a-josh",
    "title": "Roman wasn't built in a Josh",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-10-02",
    "end": "2026-10-03",
    "price": 19,
    "priceText": "A$19 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Roman wasn't built in a Josh 在Factory Theatre上演，演期 2026-10-02 至 2026-10-03，已公布 2 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/roman-wasnt-built-in-a-josh/",
    "booking": "https://sydneyfringe.com/events/roman-wasnt-built-in-a-josh/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-10-02",
        "18:45",
        ""
      ],
      [
        "2026-10-03",
        "18:45",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 2 场（2026-10-02 至 2026-10-03）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-17-2026-075101-9473.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "foreign-affair-work-in-progress",
    "title": "Foreign Affair - Work in Progress",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "qtopia",
    "company": "",
    "start": "2026-09-05",
    "end": "2026-09-05",
    "price": 27,
    "priceText": "A$27 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "Foreign Affair - Work in Progress 在Qtopia Sydney上演，演期 2026-09-05 至 2026-09-05，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/foreign-affair-work-in-progress/",
    "booking": "https://sydneyfringe.com/events/foreign-affair-work-in-progress/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-05",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-05 至 2026-09-05）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Queer Hub - The Substation",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/03-12-2026-022132-7702.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "riv-narak-no-more-indian-jokes",
    "title": "RIV NARAK - NO MORE INDIAN JOKES",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-24",
    "end": "2026-09-25",
    "price": 10,
    "priceText": "A$10 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "RIV NARAK - NO MORE INDIAN JOKES 在Factory Theatre上演，演期 2026-09-24 至 2026-09-25，已公布 2 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/riv-narak-no-more-indian-jokes/",
    "booking": "https://sydneyfringe.com/events/riv-narak-no-more-indian-jokes/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-24",
        "19:00",
        ""
      ],
      [
        "2026-09-25",
        "19:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 2 场（2026-09-24 至 2026-09-25）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/08-27-2026-073751-8019.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "of-love-loss",
    "title": "Of Love & Loss",
    "genre": "马戏",
    "scale": "独立制作",
    "venue": "fools",
    "company": "",
    "start": "2026-09-12",
    "end": "2026-09-12",
    "price": 20,
    "priceText": "A$20 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Of Love & Loss 在Fool's Paradise (Entertainment Quarter)上演，演期 2026-09-12 至 2026-09-12，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/of-love-loss/",
    "booking": "https://sydneyfringe.com/events/of-love-loss/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-12",
        "16:10",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-12 至 2026-09-12）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "The Bunker",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-27-2026-130814-6685.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "toby-quast-s-fantasyland",
    "title": "Toby Quast's Fantasyland",
    "genre": "卡巴莱",
    "scale": "独立制作",
    "venue": "marrickville",
    "company": "",
    "start": "2026-09-19",
    "end": "2026-09-19",
    "price": 19.99,
    "priceText": "A$19.99 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 45 分钟",
    "desc": "Toby Quast's Fantasyland 在Marrickville Town Hall上演，演期 2026-09-19 至 2026-09-19，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/toby-quasts-fantasyland/",
    "booking": "https://sydneyfringe.com/events/toby-quasts-fantasyland/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-19",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-19 至 2026-09-19）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Festival Hub - The Safe Room",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/07-13-2026-120439-4104.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "dial-m-for-mushrooms",
    "title": "Dial M For Mushrooms",
    "genre": "卡巴莱",
    "scale": "独立制作",
    "venue": "erskineville",
    "company": "",
    "start": "2026-09-05",
    "end": "2026-09-05",
    "price": 29,
    "priceText": "A$29 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 55 分钟",
    "desc": "Dial M For Mushrooms 在Erskineville Town Hall上演，演期 2026-09-05 至 2026-09-05，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/dial-m-for-mushrooms/",
    "booking": "https://sydneyfringe.com/events/dial-m-for-mushrooms/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-05",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-05 至 2026-09-05）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Emerging Artist Share House - The Living Room",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-11-2026-023053-9530.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "she-kills-monsters",
    "title": "She Kills Monsters",
    "genre": "卡巴莱",
    "scale": "独立制作",
    "venue": "eternity",
    "company": "",
    "start": "2026-09-23",
    "end": "2026-09-26",
    "price": 35,
    "priceText": "A$35 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 90 分钟",
    "desc": "She Kills Monsters 在Eternity Playhouse上演，演期 2026-09-23 至 2026-09-26，已公布 4 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/she-kills-monsters/",
    "booking": "https://sydneyfringe.com/events/she-kills-monsters/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-23",
        "18:00",
        ""
      ],
      [
        "2026-09-24",
        "18:00",
        ""
      ],
      [
        "2026-09-25",
        "18:00",
        ""
      ],
      [
        "2026-09-26",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 4 场（2026-09-23 至 2026-09-26）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Off Broadway Hub",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-22-2026-065358-9759.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "the-pole-shebang",
    "title": "The Pole Shebang",
    "genre": "舞蹈",
    "scale": "独立制作",
    "venue": "erskineville",
    "company": "",
    "start": "2026-09-22",
    "end": "2026-09-26",
    "price": 39,
    "priceText": "A$39 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "The Pole Shebang 在Erskineville Town Hall上演，演期 2026-09-22 至 2026-09-26，已公布 5 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/the-pole-shebang/",
    "booking": "https://sydneyfringe.com/events/the-pole-shebang/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-22",
        "21:00",
        ""
      ],
      [
        "2026-09-23",
        "21:00",
        ""
      ],
      [
        "2026-09-24",
        "21:00",
        ""
      ],
      [
        "2026-09-25",
        "21:00",
        ""
      ],
      [
        "2026-09-26",
        "21:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 5 场（2026-09-22 至 2026-09-26）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Emerging Artist Share House - The Living Room",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-28-2026-033620-3091.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "brandon-duff-a-musical-comedian",
    "title": "Brandon Duff - A Musical Comedian",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-18",
    "end": "2026-09-18",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Brandon Duff - A Musical Comedian 在Factory Theatre上演，演期 2026-09-18 至 2026-09-18，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/a-musical-comedian/",
    "booking": "https://sydneyfringe.com/events/a-musical-comedian/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-18",
        "20:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-18 至 2026-09-18）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-10-2026-042113-1538.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "avinaash-thanabalan-inside-an-immigrant-suitcase",
    "title": "Avinaash Thanabalan - Inside an Immigrant Suitcase",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-20",
    "end": "2026-09-20",
    "price": 22,
    "priceText": "A$22 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Avinaash Thanabalan - Inside an Immigrant Suitcase 在Factory Theatre上演，演期 2026-09-20 至 2026-09-20，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/inside-an-immigrants-suitcase/",
    "booking": "https://sydneyfringe.com/events/inside-an-immigrants-suitcase/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-20",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-20 至 2026-09-20）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-08-2026-131036-9332.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "behind-their-closed-doors",
    "title": "Behind Their Closed Doors",
    "genre": "卡巴莱",
    "scale": "独立制作",
    "venue": "qtopia",
    "company": "",
    "start": "2026-09-12",
    "end": "2026-09-12",
    "price": 34,
    "priceText": "A$34 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 55 分钟",
    "desc": "Behind Their Closed Doors 在Qtopia Sydney上演，演期 2026-09-12 至 2026-09-12，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/behind-their-closed-doors/",
    "booking": "https://sydneyfringe.com/events/behind-their-closed-doors/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-12",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-12 至 2026-09-12）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Queer Hub - The Loading Dock",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-29-2026-114543-5774.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "red-yellow-blaklisted",
    "title": "Red, Yellow, Blaklisted",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "improv",
    "company": "",
    "start": "2026-09-20",
    "end": "2026-09-20",
    "price": 20,
    "priceText": "A$20 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Red, Yellow, Blaklisted 在Improv Theatre Sydney上演，演期 2026-09-20 至 2026-09-20，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/red-yellow-blaklisted/",
    "booking": "https://sydneyfringe.com/events/red-yellow-blaklisted/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-20",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-20 至 2026-09-20）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/07-01-2026-055744-6736.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "freidah-will-see-you-now",
    "title": "Freidah Will See You Now",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "qtopia",
    "company": "",
    "start": "2026-09-22",
    "end": "2026-09-26",
    "price": 30,
    "priceText": "A$30 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Freidah Will See You Now 在Qtopia Sydney上演，演期 2026-09-22 至 2026-09-26，已公布 5 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/freidah-will-see-you-now/",
    "booking": "https://sydneyfringe.com/events/freidah-will-see-you-now/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-22",
        "19:30",
        ""
      ],
      [
        "2026-09-23",
        "19:30",
        ""
      ],
      [
        "2026-09-24",
        "19:30",
        ""
      ],
      [
        "2026-09-25",
        "19:30",
        ""
      ],
      [
        "2026-09-26",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 5 场（2026-09-22 至 2026-09-26）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Queer Hub - The Loading Dock",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-20-2026-170736-2219.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "peter-pan-after-dark",
    "title": "Peter Pan: After Dark",
    "genre": "马戏",
    "scale": "独立制作",
    "venue": "fools",
    "company": "",
    "start": "2026-09-20",
    "end": "2026-09-20",
    "price": 45,
    "priceText": "A$45 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 55 分钟",
    "desc": "Peter Pan: After Dark 在Fool's Paradise (Entertainment Quarter)上演，演期 2026-09-20 至 2026-09-20，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/peter-pan-after-dark/",
    "booking": "https://sydneyfringe.com/events/peter-pan-after-dark/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-20",
        "17:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-20 至 2026-09-20）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "The Bunker",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-22-2026-072403-7534.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "alex-gonzalez-the-b-plot",
    "title": "Alex Gonzalez - The B Plot",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-24",
    "end": "2026-09-25",
    "price": 22,
    "priceText": "A$22 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Alex Gonzalez - The B Plot 在Factory Theatre上演，演期 2026-09-24 至 2026-09-25，已公布 2 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/the-b-plot/",
    "booking": "https://sydneyfringe.com/events/the-b-plot/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-24",
        "21:15",
        ""
      ],
      [
        "2026-09-25",
        "21:15",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 2 场（2026-09-24 至 2026-09-25）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-15-2026-010047-1753.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "arizona-myers-and-the-ominous-hand",
    "title": "Arizona Myers and the Ominous Hand!",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-10-01",
    "end": "2026-10-02",
    "price": 22,
    "priceText": "A$22 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Arizona Myers and the Ominous Hand! 在Factory Theatre上演，演期 2026-10-01 至 2026-10-02，已公布 2 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/arizona-myers-and-the-ominous-hand/",
    "booking": "https://sydneyfringe.com/events/arizona-myers-and-the-ominous-hand/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-10-01",
        "21:15",
        ""
      ],
      [
        "2026-10-02",
        "21:15",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 2 场（2026-10-01 至 2026-10-02）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-17-2026-032841-5648.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "stuart-foreman-an-englishman-in-a-baseball-cap",
    "title": "Stuart Foreman: An Englishman in a Baseball Cap",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "marrickville",
    "company": "",
    "start": "2026-09-19",
    "end": "2026-09-19",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "Stuart Foreman: An Englishman in a Baseball Cap 在Marrickville Town Hall上演，演期 2026-09-19 至 2026-09-19，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/stuart-foreman-an-englishman-in-a-baseball-cap/",
    "booking": "https://sydneyfringe.com/events/stuart-foreman-an-englishman-in-a-baseball-cap/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-19",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-19 至 2026-09-19）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Festival Hub - The Chambers",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-26-2026-095634-4018.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "the-dummies-guide-to-orgasms",
    "title": "The Dummies guide to orgasms",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-24",
    "end": "2026-09-25",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "The Dummies guide to orgasms 在Factory Theatre上演，演期 2026-09-24 至 2026-09-25，已公布 2 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/the-dummies-guide-to-orgasms/",
    "booking": "https://sydneyfringe.com/events/the-dummies-guide-to-orgasms/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-24",
        "19:45",
        ""
      ],
      [
        "2026-09-25",
        "19:45",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 2 场（2026-09-24 至 2026-09-25）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/08-18-2026-071227-5742.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "radiohead-uncovered-how-to-disappear-completely",
    "title": "Radiohead Uncovered: How to Disappear Completely",
    "genre": "卡巴莱",
    "scale": "独立制作",
    "venue": "eternity",
    "company": "",
    "start": "2026-09-05",
    "end": "2026-09-05",
    "price": 45,
    "priceText": "A$45 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Radiohead Uncovered: How to Disappear Completely 在Eternity Playhouse上演，演期 2026-09-05 至 2026-09-05，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/radiohead-uncovered-how-to-disappear-completely/",
    "booking": "https://sydneyfringe.com/events/radiohead-uncovered-how-to-disappear-completely/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-05",
        "18:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-05 至 2026-09-05）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Off Broadway Hub",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-21-2026-050426-3074.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "delivery-guys",
    "title": "Delivery Guys",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "erskineville",
    "company": "",
    "start": "2026-09-22",
    "end": "2026-09-26",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Delivery Guys 在Erskineville Town Hall上演，演期 2026-09-22 至 2026-09-26，已公布 5 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/delivery-guys/",
    "booking": "https://sydneyfringe.com/events/delivery-guys/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-22",
        "18:00",
        ""
      ],
      [
        "2026-09-23",
        "18:00",
        ""
      ],
      [
        "2026-09-24",
        "18:00",
        ""
      ],
      [
        "2026-09-25",
        "18:00",
        ""
      ],
      [
        "2026-09-26",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 5 场（2026-09-22 至 2026-09-26）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Emerging Artist Share House - The Spare Room",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/08-12-2026-003228-7326.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "perfectly-queer",
    "title": "Perfectly Queer",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-06",
    "end": "2026-09-06",
    "price": 22,
    "priceText": "A$22 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "Perfectly Queer 在Factory Theatre上演，演期 2026-09-06 至 2026-09-06，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/perfectly-queer/",
    "booking": "https://sydneyfringe.com/events/perfectly-queer/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-06",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-06 至 2026-09-06）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-18-2026-075738-7958.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "tell-distance",
    "title": "Tell Distance",
    "genre": "舞蹈",
    "scale": "独立制作",
    "venue": "studioone",
    "company": "",
    "start": "2026-09-19",
    "end": "2026-09-19",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 40 分钟",
    "desc": "Tell Distance 在Studio One (UNSW)上演，演期 2026-09-19 至 2026-09-19，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/tell-distance/",
    "booking": "https://sydneyfringe.com/events/tell-distance/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-19",
        "20:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-19 至 2026-09-19）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-22-2026-123329-2359.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "aerobics-wog-style",
    "title": "Aerobics: Wog Style",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-20",
    "end": "2026-09-20",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Aerobics: Wog Style 在Factory Theatre上演，演期 2026-09-20 至 2026-09-20，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/aerobics-wog-style/",
    "booking": "https://sydneyfringe.com/events/aerobics-wog-style/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-20",
        "17:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-20 至 2026-09-20）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/03-13-2026-060305-3534.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "jungle-warriors",
    "title": "Jungle Warriors",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-06",
    "end": "2026-09-06",
    "price": 22,
    "priceText": "A$22 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Jungle Warriors 在Factory Theatre上演，演期 2026-09-06 至 2026-09-06，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/jungle-warriors/",
    "booking": "https://sydneyfringe.com/events/jungle-warriors/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-06",
        "18:45",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-06 至 2026-09-06）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-08-2026-065609-6727.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "kim-snow-i-don-t-speak-your-language",
    "title": "Kim Snow - I don't speak your language!",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-18",
    "end": "2026-09-18",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Kim Snow - I don't speak your language! 在Factory Theatre上演，演期 2026-09-18 至 2026-09-18，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/i-dont-speak-your-language/",
    "booking": "https://sydneyfringe.com/events/i-dont-speak-your-language/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-18",
        "19:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-18 至 2026-09-18）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-17-2026-044158-6856.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "strike-a-chord",
    "title": "Strike a chord",
    "genre": "舞蹈",
    "scale": "独立制作",
    "venue": "eternity",
    "company": "",
    "start": "2026-09-19",
    "end": "2026-09-19",
    "price": 44.95,
    "priceText": "A$44.95 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Strike a chord 在Eternity Playhouse上演，演期 2026-09-19 至 2026-09-19，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/strike-a-chord/",
    "booking": "https://sydneyfringe.com/events/strike-a-chord/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-19",
        "20:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-19 至 2026-09-19）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Off Broadway Hub",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-28-2026-094144-9130.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "move-fm",
    "title": "Move FM",
    "genre": "舞蹈",
    "scale": "专业制作",
    "venue": "newtheatre",
    "company": "",
    "start": "2026-09-23",
    "end": "2026-09-26",
    "price": 39,
    "priceText": "A$39 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Move FM 在New Theatre上演，演期 2026-09-23 至 2026-09-26，已公布 4 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/move-fm/",
    "booking": "https://sydneyfringe.com/events/move-fm/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-23",
        "18:30",
        ""
      ],
      [
        "2026-09-24",
        "18:30",
        ""
      ],
      [
        "2026-09-25",
        "18:30",
        ""
      ],
      [
        "2026-09-26",
        "18:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 4 场（2026-09-23 至 2026-09-26）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Touring Hub",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/03-24-2026-050341-3794.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "dad-s-an-idiot-guide",
    "title": "Dad's - An Idiot Guide",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-06",
    "end": "2026-09-06",
    "price": 22,
    "priceText": "A$22 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Dad's - An Idiot Guide 在Factory Theatre上演，演期 2026-09-06 至 2026-09-06，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/dads-an-idiot-guide/",
    "booking": "https://sydneyfringe.com/events/dads-an-idiot-guide/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-06",
        "16:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-06 至 2026-09-06）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-12-2026-033322-9522.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "i-couldn-t-find-a-babysitter",
    "title": "I couldn't find a babysitter",
    "genre": "亲子剧",
    "scale": "独立制作",
    "venue": "potterylane",
    "company": "",
    "start": "2026-10-01",
    "end": "2026-10-03",
    "price": 29,
    "priceText": "A$29 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "I couldn't find a babysitter 在Pottery Lane Performance Space上演，演期 2026-10-01 至 2026-10-03，已公布 3 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/i-couldnt-find-a-babysitter/",
    "booking": "https://sydneyfringe.com/events/i-couldnt-find-a-babysitter/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-10-01",
        "11:00",
        ""
      ],
      [
        "2026-10-02",
        "11:00",
        ""
      ],
      [
        "2026-10-03",
        "11:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 3 场（2026-10-01 至 2026-10-03）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/08-13-2026-004531-6349.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "a-very-chinese-time",
    "title": "A Very Chinese Time",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "erskineville",
    "company": "",
    "start": "2026-09-22",
    "end": "2026-09-26",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "A Very Chinese Time 在Erskineville Town Hall上演，演期 2026-09-22 至 2026-09-26，已公布 5 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/a-very-chinese-time/",
    "booking": "https://sydneyfringe.com/events/a-very-chinese-time/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-22",
        "19:30",
        ""
      ],
      [
        "2026-09-23",
        "19:30",
        ""
      ],
      [
        "2026-09-24",
        "19:30",
        ""
      ],
      [
        "2026-09-25",
        "19:30",
        ""
      ],
      [
        "2026-09-26",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 5 场（2026-09-22 至 2026-09-26）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Emerging Artist Share House - The Spare Room",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-21-2026-110326-5434.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "yelling-at-children",
    "title": "Yelling at Children",
    "genre": "亲子剧",
    "scale": "独立制作",
    "venue": "fools",
    "company": "",
    "start": "2026-09-26",
    "end": "2026-10-04",
    "price": 30,
    "priceText": "A$30 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 55 分钟",
    "desc": "Yelling at Children 在Fool's Paradise (Entertainment Quarter)上演，演期 2026-09-26 至 2026-10-04，已公布 9 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/yelling-at-children/",
    "booking": "https://sydneyfringe.com/events/yelling-at-children/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-26",
        "16:10",
        ""
      ],
      [
        "2026-09-27",
        "16:10",
        ""
      ],
      [
        "2026-09-28",
        "16:10",
        ""
      ],
      [
        "2026-09-29",
        "16:10",
        ""
      ],
      [
        "2026-09-30",
        "16:10",
        ""
      ],
      [
        "2026-10-01",
        "16:10",
        ""
      ],
      [
        "2026-10-02",
        "16:10",
        ""
      ],
      [
        "2026-10-03",
        "16:10",
        ""
      ],
      [
        "2026-10-04",
        "16:10",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 9 场（2026-09-26 至 2026-10-04）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "The Bunker",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-10-2026-032543-2086.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "wayne-king-live",
    "title": "Wayne King: Live",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "marrickville",
    "company": "",
    "start": "2026-09-19",
    "end": "2026-09-19",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 40 分钟",
    "desc": "Wayne King: Live 在Marrickville Town Hall上演，演期 2026-09-19 至 2026-09-19，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/wayne-king-live/",
    "booking": "https://sydneyfringe.com/events/wayne-king-live/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-19",
        "21:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-19 至 2026-09-19）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Festival Hub - The Safe Room",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-19-2026-113245-9237.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "50-up-the-rewind",
    "title": "50-up: The Rewind",
    "genre": "马戏",
    "scale": "独立制作",
    "venue": "fools",
    "company": "",
    "start": "2026-09-20",
    "end": "2026-09-20",
    "price": 27.5,
    "priceText": "A$27.5 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 55 分钟",
    "desc": "50-up: The Rewind 在Fool's Paradise (Entertainment Quarter)上演，演期 2026-09-20 至 2026-09-20，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/50-up-the-rewind/",
    "booking": "https://sydneyfringe.com/events/50-up-the-rewind/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-20",
        "12:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-20 至 2026-09-20）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "The Virago",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-18-2026-004441-2565.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "josh-johnson-not-josh-johnson",
    "title": "Josh & Johnson (Not Josh Johnson)",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-18",
    "end": "2026-09-18",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Josh & Johnson (Not Josh Johnson) 在Factory Theatre上演，演期 2026-09-18 至 2026-09-18，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/josh-johnson-not-josh-johnson/",
    "booking": "https://sydneyfringe.com/events/josh-johnson-not-josh-johnson/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-18",
        "21:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-18 至 2026-09-18）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/07-28-2026-110417-5264.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "sitting-ganaay",
    "title": "Sitting Ganaay",
    "genre": "舞蹈",
    "scale": "独立制作",
    "venue": "studioone",
    "company": "",
    "start": "2026-09-19",
    "end": "2026-09-19",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 40 分钟",
    "desc": "Sitting Ganaay 在Studio One (UNSW)上演，演期 2026-09-19 至 2026-09-19，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/sitting-ganaay/",
    "booking": "https://sydneyfringe.com/events/sitting-ganaay/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-19",
        "18:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-19 至 2026-09-19）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-27-2026-055111-3213.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "improv-comedy-catastrophe",
    "title": "Improv Comedy Catastrophe!",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-10-01",
    "end": "2026-10-02",
    "price": 22,
    "priceText": "A$22 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Improv Comedy Catastrophe! 在Factory Theatre上演，演期 2026-10-01 至 2026-10-02，已公布 2 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/improv-comedy-catastrophe/",
    "booking": "https://sydneyfringe.com/events/improv-comedy-catastrophe/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-10-01",
        "19:45",
        ""
      ],
      [
        "2026-10-02",
        "19:45",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 2 场（2026-10-01 至 2026-10-02）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/08-21-2026-063609-3379.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "9-lives",
    "title": "9 Lives",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "improv",
    "company": "",
    "start": "2026-09-13",
    "end": "2026-09-13",
    "price": 19.99,
    "priceText": "A$19.99 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "9 Lives 在Improv Theatre Sydney上演，演期 2026-09-13 至 2026-09-13，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/9-lives/",
    "booking": "https://sydneyfringe.com/events/9-lives/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-13",
        "19:15",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-13 至 2026-09-13）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-18-2026-163753-5917.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "improvised-sitcom",
    "title": "Improvised Sitcom",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-06",
    "end": "2026-09-06",
    "price": 22,
    "priceText": "A$22 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Improvised Sitcom 在Factory Theatre上演，演期 2026-09-06 至 2026-09-06，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/improvised-sitcom/",
    "booking": "https://sydneyfringe.com/events/improvised-sitcom/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-06",
        "17:45",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-06 至 2026-09-06）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-25-2026-021127-9182.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "captain-adventure-man",
    "title": "Captain Adventure Man",
    "genre": "亲子剧",
    "scale": "独立制作",
    "venue": "fools",
    "company": "",
    "start": "2026-10-02",
    "end": "2026-10-05",
    "price": 19.99,
    "priceText": "A$19.99 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 45 分钟",
    "desc": "Captain Adventure Man 在Fool's Paradise (Entertainment Quarter)上演，演期 2026-10-02 至 2026-10-05，已公布 3 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/captain-adventure-man/",
    "booking": "https://sydneyfringe.com/events/captain-adventure-man/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-10-02",
        "14:50",
        ""
      ],
      [
        "2026-10-04",
        "14:50",
        ""
      ],
      [
        "2026-10-05",
        "14:50",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 3 场（2026-10-02 至 2026-10-05）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "The Bunker",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-18-2026-182237-1090.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "there-s-nothing-funny-about-social-work",
    "title": "There's Nothing Funny About Social Work",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "pyt",
    "company": "",
    "start": "2026-09-12",
    "end": "2026-09-12",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "There's Nothing Funny About Social Work 在PYT Fairfield上演，演期 2026-09-12 至 2026-09-12，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/theres-nothing-funny-about-social-work/",
    "booking": "https://sydneyfringe.com/events/theres-nothing-funny-about-social-work/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-12",
        "20:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-12 至 2026-09-12）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/07-01-2026-060952-1330.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "nanny-hoot",
    "title": "Nanny & Hoot",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-18",
    "end": "2026-09-18",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Nanny & Hoot 在Factory Theatre上演，演期 2026-09-18 至 2026-09-18，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/nanny-hoot/",
    "booking": "https://sydneyfringe.com/events/nanny-hoot/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-18",
        "18:45",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-18 至 2026-09-18）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-16-2026-065746-2910.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "all-religions-explained-the-musical",
    "title": "All Religions Explained - The Musical",
    "genre": "卡巴莱",
    "scale": "独立制作",
    "venue": "marrickville",
    "company": "",
    "start": "2026-09-22",
    "end": "2026-09-25",
    "price": 35,
    "priceText": "A$35 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 55 分钟",
    "desc": "All Religions Explained - The Musical 在Marrickville Town Hall上演，演期 2026-09-22 至 2026-09-25，已公布 4 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/all-religions-explained-the-musical/",
    "booking": "https://sydneyfringe.com/events/all-religions-explained-the-musical/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-22",
        "18:00",
        ""
      ],
      [
        "2026-09-23",
        "18:00",
        ""
      ],
      [
        "2026-09-24",
        "18:00",
        ""
      ],
      [
        "2026-09-25",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 4 场（2026-09-22 至 2026-09-25）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Festival Hub - The Chambers",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-26-2026-020711-3689.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "girls-gone-wild",
    "title": "GIRLS GONE WILD",
    "genre": "舞蹈",
    "scale": "独立制作",
    "venue": "pact",
    "company": "",
    "start": "2026-09-23",
    "end": "2026-09-26",
    "price": 39,
    "priceText": "A$39 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "GIRLS GONE WILD 在PACT Centre for Emerging Artists上演，演期 2026-09-23 至 2026-09-26，已公布 5 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/girls-gone-wild/",
    "booking": "https://sydneyfringe.com/events/girls-gone-wild/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-23",
        "18:30",
        ""
      ],
      [
        "2026-09-24",
        "18:30",
        ""
      ],
      [
        "2026-09-25",
        "18:30",
        ""
      ],
      [
        "2026-09-26",
        "14:00",
        ""
      ],
      [
        "2026-09-26",
        "18:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 5 场（2026-09-23 至 2026-09-26）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Made In Hub",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-18-2026-015619-2506.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "an-iranian-and-an-irish-walk-into-a-bar",
    "title": "An Iranian and an Irish walk into a bar",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-10-03",
    "end": "2026-10-03",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "An Iranian and an Irish walk into a bar 在Factory Theatre上演，演期 2026-10-03 至 2026-10-03，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/an-iranian-and-an-irish-walk-into-a-bar/",
    "booking": "https://sydneyfringe.com/events/an-iranian-and-an-irish-walk-into-a-bar/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-10-03",
        "17:15",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-10-03 至 2026-10-03）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-18-2026-032740-4440.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "fr-t",
    "title": "FRÜÜT",
    "genre": "卡巴莱",
    "scale": "独立制作",
    "venue": "eternity",
    "company": "",
    "start": "2026-09-12",
    "end": "2026-09-12",
    "price": 45,
    "priceText": "A$45 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "FRÜÜT 在Eternity Playhouse上演，演期 2026-09-12 至 2026-09-12，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/fruut/",
    "booking": "https://sydneyfringe.com/events/fruut/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-12",
        "20:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-12 至 2026-09-12）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Off Broadway Hub",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-05-2026-070405-6124.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "god-s-mistake",
    "title": "God's Mistake",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "qtopia",
    "company": "",
    "start": "2026-09-22",
    "end": "2026-09-26",
    "price": 27.5,
    "priceText": "A$27.5 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 55 分钟",
    "desc": "God's Mistake 在Qtopia Sydney上演，演期 2026-09-22 至 2026-09-26，已公布 5 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/gods-mistake/",
    "booking": "https://sydneyfringe.com/events/gods-mistake/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-22",
        "21:00",
        ""
      ],
      [
        "2026-09-23",
        "21:00",
        ""
      ],
      [
        "2026-09-24",
        "21:00",
        ""
      ],
      [
        "2026-09-25",
        "21:00",
        ""
      ],
      [
        "2026-09-26",
        "21:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 5 场（2026-09-22 至 2026-09-26）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Queer Hub - The Substation",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-26-2026-042640-7329.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "crew-s-control-seas-the-day",
    "title": "Crew's Control: Seas the Day",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "improv",
    "company": "",
    "start": "2026-09-13",
    "end": "2026-09-13",
    "price": 20,
    "priceText": "A$20 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 55 分钟",
    "desc": "Crew's Control: Seas the Day 在Improv Theatre Sydney上演，演期 2026-09-13 至 2026-09-13，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/crews-control-seas-the-day/",
    "booking": "https://sydneyfringe.com/events/crews-control-seas-the-day/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-13",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-13 至 2026-09-13）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-12-2026-143952-2371.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "queens",
    "title": "Queens",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-26",
    "end": "2026-09-27",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Queens 在Factory Theatre上演，演期 2026-09-26 至 2026-09-27，已公布 2 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/queens/",
    "booking": "https://sydneyfringe.com/events/queens/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-26",
        "21:30",
        ""
      ],
      [
        "2026-09-27",
        "20:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 2 场（2026-09-26 至 2026-09-27）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-12-2026-015726-2670.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "seven-deadly-scenes",
    "title": "Seven Deadly Scenes",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "improv",
    "company": "",
    "start": "2026-09-19",
    "end": "2026-09-19",
    "price": 20,
    "priceText": "A$20 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 45 分钟",
    "desc": "Seven Deadly Scenes 在Improv Theatre Sydney上演，演期 2026-09-19 至 2026-09-19，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/seven-deadly-scenes/",
    "booking": "https://sydneyfringe.com/events/seven-deadly-scenes/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-19",
        "20:15",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-19 至 2026-09-19）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-13-2026-092916-4589.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "9-year-old-musical-comedian",
    "title": "9-Year-Old Musical Comedian",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "erskineville",
    "company": "",
    "start": "2026-09-05",
    "end": "2026-09-05",
    "price": 19.99,
    "priceText": "A$19.99 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "9-Year-Old Musical Comedian 在Erskineville Town Hall上演，演期 2026-09-05 至 2026-09-05，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/9-year-old-musical-comedian/",
    "booking": "https://sydneyfringe.com/events/9-year-old-musical-comedian/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-05",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-05 至 2026-09-05）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Emerging Artist Share House - The Spare Room",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-20-2026-000744-6643.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "i-m-not-a-cop-this-is-a-tax-write-off",
    "title": "I'm not a cop, this is a tax write off.",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-20",
    "end": "2026-09-20",
    "price": 22,
    "priceText": "A$22 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "I'm not a cop, this is a tax write off. 在Factory Theatre上演，演期 2026-09-20 至 2026-09-20，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/im-not-a-cop-this-is-a-tax-write-off/",
    "booking": "https://sydneyfringe.com/events/im-not-a-cop-this-is-a-tax-write-off/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-20",
        "20:15",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-20 至 2026-09-20）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-16-2026-030116-4010.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "puss-puss",
    "title": "PUSS PUSS",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "erskineville",
    "company": "",
    "start": "2026-09-19",
    "end": "2026-09-19",
    "price": 32,
    "priceText": "A$32 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "PUSS PUSS 在Erskineville Town Hall上演，演期 2026-09-19 至 2026-09-19，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/puss-puss/",
    "booking": "https://sydneyfringe.com/events/puss-puss/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-19",
        "21:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-19 至 2026-09-19）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Emerging Artist Share House - The Boom Boom Room",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/03-30-2026-095224-2580.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "the-next-bit",
    "title": "The Next Bit",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "improv",
    "company": "",
    "start": "2026-09-06",
    "end": "2026-09-06",
    "price": 19.5,
    "priceText": "A$19.5 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "The Next Bit 在Improv Theatre Sydney上演，演期 2026-09-06 至 2026-09-06，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/the-next-bit/",
    "booking": "https://sydneyfringe.com/events/the-next-bit/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-06",
        "20:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-06 至 2026-09-06）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-23-2026-110917-7029.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "comedy-and-other-crimes",
    "title": "Comedy and Other Crimes",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "improv",
    "company": "",
    "start": "2026-09-20",
    "end": "2026-09-20",
    "price": 22,
    "priceText": "A$22 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "Comedy and Other Crimes 在Improv Theatre Sydney上演，演期 2026-09-20 至 2026-09-20，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/comedy-and-other-crimes/",
    "booking": "https://sydneyfringe.com/events/comedy-and-other-crimes/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-20",
        "20:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-20 至 2026-09-20）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-23-2026-110938-5786.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "changeling-the-before-and-the-after",
    "title": "Changeling: The Before and The After",
    "genre": "卡巴莱",
    "scale": "独立制作",
    "venue": "qtopia",
    "company": "",
    "start": "2026-09-12",
    "end": "2026-09-12",
    "price": 39,
    "priceText": "A$39 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Changeling: The Before and The After 在Qtopia Sydney上演，演期 2026-09-12 至 2026-09-12，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/changeling-the-before-and-the-after/",
    "booking": "https://sydneyfringe.com/events/changeling-the-before-and-the-after/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-12",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-12 至 2026-09-12）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Queer Hub - The Substation",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/03-29-2026-071057-7794.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "creative-science-mind-blown",
    "title": "Creative Science: Mind Blown",
    "genre": "亲子剧",
    "scale": "独立制作",
    "venue": "fools",
    "company": "",
    "start": "2026-09-26",
    "end": "2026-09-30",
    "price": 30,
    "priceText": "A$30 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "Creative Science: Mind Blown 在Fool's Paradise (Entertainment Quarter)上演，演期 2026-09-26 至 2026-09-30，已公布 5 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/creative-science-mind-blown/",
    "booking": "https://sydneyfringe.com/events/creative-science-mind-blown/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-26",
        "14:50",
        ""
      ],
      [
        "2026-09-27",
        "14:50",
        ""
      ],
      [
        "2026-09-28",
        "14:50",
        ""
      ],
      [
        "2026-09-29",
        "14:50",
        ""
      ],
      [
        "2026-09-30",
        "14:50",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 5 场（2026-09-26 至 2026-09-30）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "The Bunker",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-18-2026-053156-9311.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "television-live",
    "title": "Television: Live",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-20",
    "end": "2026-09-20",
    "price": 22,
    "priceText": "A$22 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "Television: Live 在Factory Theatre上演，演期 2026-09-20 至 2026-09-20，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/television-live/",
    "booking": "https://sydneyfringe.com/events/television-live/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-20",
        "18:45",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-20 至 2026-09-20）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-25-2026-110703-7051.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "the-pink-pony-parlour",
    "title": "The Pink Pony Parlour",
    "genre": "卡巴莱",
    "scale": "独立制作",
    "venue": "fools",
    "company": "",
    "start": "2026-09-12",
    "end": "2026-09-12",
    "price": 37.5,
    "priceText": "A$37.5 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "The Pink Pony Parlour 在Fool's Paradise (Entertainment Quarter)上演，演期 2026-09-12 至 2026-09-12，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/the-pink-pony-parlour/",
    "booking": "https://sydneyfringe.com/events/the-pink-pony-parlour/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-12",
        "18:50",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-12 至 2026-09-12）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "The Bunker",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/03-30-2026-103743-4877.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "at-tonight-s-performance",
    "title": "At Tonight’s Performance...",
    "genre": "卡巴莱",
    "scale": "独立制作",
    "venue": "qtopia",
    "company": "",
    "start": "2026-09-19",
    "end": "2026-09-19",
    "price": 30,
    "priceText": "A$30 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "At Tonight’s Performance... 在Qtopia Sydney上演，演期 2026-09-19 至 2026-09-19，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/at-tonights-performance/",
    "booking": "https://sydneyfringe.com/events/at-tonights-performance/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-19",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-19 至 2026-09-19）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Queer Hub - The Loading Dock",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-23-2026-142359-5226.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "typo",
    "title": "Typo",
    "genre": "亲子剧",
    "scale": "独立制作",
    "venue": "fools",
    "company": "",
    "start": "2026-10-05",
    "end": "2026-10-11",
    "price": 35,
    "priceText": "A$35 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "Typo 在Fool's Paradise (Entertainment Quarter)上演，演期 2026-10-05 至 2026-10-11，已公布 7 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/typo/",
    "booking": "https://sydneyfringe.com/events/typo/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-10-05",
        "16:10",
        ""
      ],
      [
        "2026-10-06",
        "16:10",
        ""
      ],
      [
        "2026-10-07",
        "16:10",
        ""
      ],
      [
        "2026-10-08",
        "16:10",
        ""
      ],
      [
        "2026-10-09",
        "16:10",
        ""
      ],
      [
        "2026-10-10",
        "16:10",
        ""
      ],
      [
        "2026-10-11",
        "16:10",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 7 场（2026-10-05 至 2026-10-11）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "The Bunker",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-28-2026-115813-4593.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "wanna-be-a-star",
    "title": "Wanna Be a Star",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "erskineville",
    "company": "",
    "start": "2026-09-12",
    "end": "2026-09-12",
    "price": 32,
    "priceText": "A$32 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Wanna Be a Star 在Erskineville Town Hall上演，演期 2026-09-12 至 2026-09-12，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/wanna-be-a-star/",
    "booking": "https://sydneyfringe.com/events/wanna-be-a-star/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-12",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-12 至 2026-09-12）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Emerging Artist Share House - The Boom Boom Room",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-28-2026-121343-6272.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "josh-shediak-instagram-comedian-goes-outside",
    "title": "Josh Shediak - Instagram Comedian Goes Outside!",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-26",
    "end": "2026-09-27",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 45 分钟",
    "desc": "Josh Shediak - Instagram Comedian Goes Outside! 在Factory Theatre上演，演期 2026-09-26 至 2026-09-27，已公布 2 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/josh-shediak-instagram-comedian-goes-outside/",
    "booking": "https://sydneyfringe.com/events/josh-shediak-instagram-comedian-goes-outside/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-26",
        "18:30",
        ""
      ],
      [
        "2026-09-27",
        "17:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 2 场（2026-09-26 至 2026-09-27）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-10-2026-101709-6405.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "an-autist-in-the-making-a-work-in-progress-show",
    "title": "An Autist in the Making (A Work In Progress Show)",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "improv",
    "company": "",
    "start": "2026-09-13",
    "end": "2026-09-13",
    "price": 19,
    "priceText": "A$19 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "An Autist in the Making (A Work In Progress Show) 在Improv Theatre Sydney上演，演期 2026-09-13 至 2026-09-13，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/an-autist-in-the-making-a-work-in-progress-show/",
    "booking": "https://sydneyfringe.com/events/an-autist-in-the-making-a-work-in-progress-show/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-13",
        "20:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-13 至 2026-09-13）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-20-2026-162208-2974.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "anna-dooley-flobber",
    "title": "Anna Dooley - Flobber",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-06",
    "end": "2026-09-06",
    "price": 22,
    "priceText": "A$22 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 55 分钟",
    "desc": "Anna Dooley - Flobber 在Factory Theatre上演，演期 2026-09-06 至 2026-09-06，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/flobber/",
    "booking": "https://sydneyfringe.com/events/flobber/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-06",
        "19:15",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-06 至 2026-09-06）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-17-2026-083752-5365.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "prototype",
    "title": "Prototype",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-18",
    "end": "2026-09-18",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Prototype 在Factory Theatre上演，演期 2026-09-18 至 2026-09-18，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/prototype/",
    "booking": "https://sydneyfringe.com/events/prototype/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-18",
        "19:45",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-18 至 2026-09-18）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-18-2026-014140-3511.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "kiyanosh-sahebi-recognise-this",
    "title": "Kiyanosh Sahebi - Recognise This?",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-24",
    "end": "2026-09-27",
    "price": 22,
    "priceText": "A$22 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Kiyanosh Sahebi - Recognise This? 在Factory Theatre上演，演期 2026-09-24 至 2026-09-27，已公布 4 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/kiyanosh-sahebi-recognise-this/",
    "booking": "https://sydneyfringe.com/events/kiyanosh-sahebi-recognise-this/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-24",
        "20:15",
        ""
      ],
      [
        "2026-09-25",
        "20:15",
        ""
      ],
      [
        "2026-09-26",
        "20:15",
        ""
      ],
      [
        "2026-09-27",
        "19:15",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 4 场（2026-09-24 至 2026-09-27）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-10-2026-054248-2743.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "love-at-first-bite",
    "title": "Love At First Bite",
    "genre": "卡巴莱",
    "scale": "独立制作",
    "venue": "fools",
    "company": "",
    "start": "2026-09-13",
    "end": "2026-09-13",
    "price": 30,
    "priceText": "A$30 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "Love At First Bite 在Fool's Paradise (Entertainment Quarter)上演，演期 2026-09-13 至 2026-09-13，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/love-at-first-bite/",
    "booking": "https://sydneyfringe.com/events/love-at-first-bite/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-13",
        "20:10",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-13 至 2026-09-13）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "The Bunker",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/07-01-2026-053904-1974.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "don-t-feed-her-after-midnight",
    "title": "Don't Feed Her After Midnight",
    "genre": "卡巴莱",
    "scale": "独立制作",
    "venue": "erskineville",
    "company": "",
    "start": "2026-09-24",
    "end": "2026-09-24",
    "price": 27,
    "priceText": "A$27 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 35 分钟",
    "desc": "Don't Feed Her After Midnight 在Erskineville Town Hall上演，演期 2026-09-24 至 2026-09-24，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/dont-feed-her-after-midnight/",
    "booking": "https://sydneyfringe.com/events/dont-feed-her-after-midnight/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-24",
        "21:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-24 至 2026-09-24）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Emerging Artist Share House - The Spare Room",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/07-01-2026-054413-5478.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "a-thistle-in-a-gumtree",
    "title": "A Thistle In A Gumtree",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-18",
    "end": "2026-09-18",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "A Thistle In A Gumtree 在Factory Theatre上演，演期 2026-09-18 至 2026-09-18，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/a-thistle-in-a-gum-tree/",
    "booking": "https://sydneyfringe.com/events/a-thistle-in-a-gum-tree/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-18",
        "18:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-18 至 2026-09-18）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/07-13-2026-060042-9894.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "hold",
    "title": "Hold",
    "genre": "马戏",
    "scale": "独立制作",
    "venue": "fools",
    "company": "",
    "start": "2026-09-13",
    "end": "2026-09-13",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Hold 在Fool's Paradise (Entertainment Quarter)上演，演期 2026-09-13 至 2026-09-13，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/hold/",
    "booking": "https://sydneyfringe.com/events/hold/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-13",
        "17:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-13 至 2026-09-13）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "The Virago",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/04-06-2026-014434-1549.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "ben-s-magical-friends",
    "title": "Ben’s Magical Friends",
    "genre": "亲子剧",
    "scale": "独立制作",
    "venue": "fools",
    "company": "",
    "start": "2026-09-26",
    "end": "2026-10-11",
    "price": 24,
    "priceText": "A$24 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Ben’s Magical Friends 在Fool's Paradise (Entertainment Quarter)上演，演期 2026-09-26 至 2026-10-11，已公布 16 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/bens-magical-friends/",
    "booking": "https://sydneyfringe.com/events/bens-magical-friends/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-26",
        "10:50",
        ""
      ],
      [
        "2026-09-27",
        "10:50",
        ""
      ],
      [
        "2026-09-28",
        "10:50",
        ""
      ],
      [
        "2026-09-29",
        "10:50",
        ""
      ],
      [
        "2026-09-30",
        "10:50",
        ""
      ],
      [
        "2026-10-01",
        "10:50",
        ""
      ],
      [
        "2026-10-02",
        "10:50",
        ""
      ],
      [
        "2026-10-03",
        "10:50",
        ""
      ],
      [
        "2026-10-04",
        "10:50",
        ""
      ],
      [
        "2026-10-05",
        "10:50",
        ""
      ],
      [
        "2026-10-06",
        "10:50",
        ""
      ],
      [
        "2026-10-07",
        "10:50",
        ""
      ],
      [
        "2026-10-08",
        "10:50",
        ""
      ],
      [
        "2026-10-09",
        "10:50",
        ""
      ],
      [
        "2026-10-10",
        "10:50",
        ""
      ],
      [
        "2026-10-11",
        "10:50",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 16 场（2026-09-26 至 2026-10-11）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "The Bunker",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-12-2026-143538-7182.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "shit-blokes-in-the-big-smoke",
    "title": "Shit Blokes in the Big Smoke",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "improv",
    "company": "",
    "start": "2026-09-25",
    "end": "2026-09-27",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Shit Blokes in the Big Smoke 在Improv Theatre Sydney上演，演期 2026-09-25 至 2026-09-27，已公布 3 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/shit-blokes-in-the-big-smoke/",
    "booking": "https://sydneyfringe.com/events/shit-blokes-in-the-big-smoke/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-25",
        "20:15",
        ""
      ],
      [
        "2026-09-26",
        "20:15",
        ""
      ],
      [
        "2026-09-27",
        "19:15",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 3 场（2026-09-25 至 2026-09-27）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-29-2026-143650-1764.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "thomas-bleach-the-sealed-section",
    "title": "Thomas Bleach - The Sealed Section",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-06",
    "end": "2026-09-06",
    "price": 22,
    "priceText": "A$22 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Thomas Bleach - The Sealed Section 在Factory Theatre上演，演期 2026-09-06 至 2026-09-06，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/thomas-bleach-the-sealed-section/",
    "booking": "https://sydneyfringe.com/events/thomas-bleach-the-sealed-section/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-06",
        "19:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-06 至 2026-09-06）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-11-2026-232452-3069.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "jurassic-down-under",
    "title": "Jurassic Down Under",
    "genre": "亲子剧",
    "scale": "独立制作",
    "venue": "fools",
    "company": "",
    "start": "2026-09-28",
    "end": "2026-10-11",
    "price": 29,
    "priceText": "A$29 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Jurassic Down Under 在Fool's Paradise (Entertainment Quarter)上演，演期 2026-09-28 至 2026-10-11，已公布 14 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/jurassic-down-under/",
    "booking": "https://sydneyfringe.com/events/jurassic-down-under/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-28",
        "16:30",
        ""
      ],
      [
        "2026-09-29",
        "16:30",
        ""
      ],
      [
        "2026-09-30",
        "16:30",
        ""
      ],
      [
        "2026-10-01",
        "16:30",
        ""
      ],
      [
        "2026-10-02",
        "16:30",
        ""
      ],
      [
        "2026-10-03",
        "16:30",
        ""
      ],
      [
        "2026-10-04",
        "16:30",
        ""
      ],
      [
        "2026-10-05",
        "16:30",
        ""
      ],
      [
        "2026-10-06",
        "16:30",
        ""
      ],
      [
        "2026-10-07",
        "16:30",
        ""
      ],
      [
        "2026-10-08",
        "16:30",
        ""
      ],
      [
        "2026-10-09",
        "16:30",
        ""
      ],
      [
        "2026-10-10",
        "16:30",
        ""
      ],
      [
        "2026-10-11",
        "16:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 14 场（2026-09-28 至 2026-10-11）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "The Virago",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-12-2026-150757-3802.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "we-need-to-talk-a-couples-comedy-game-show-for-everyone",
    "title": "We Need to Talk – A Couples Comedy Game Show for Everyone",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "improv",
    "company": "",
    "start": "2026-09-25",
    "end": "2026-09-26",
    "price": 22,
    "priceText": "A$22 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 45 分钟",
    "desc": "We Need to Talk – A Couples Comedy Game Show for Everyone 在Improv Theatre Sydney上演，演期 2026-09-25 至 2026-09-26，已公布 2 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/we-need-to-talk-a-couples-comedy-game-show-for-everyone/",
    "booking": "https://sydneyfringe.com/events/we-need-to-talk-a-couples-comedy-game-show-for-everyone/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-25",
        "21:30",
        ""
      ],
      [
        "2026-09-26",
        "21:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 2 场（2026-09-25 至 2026-09-26）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-29-2026-075534-4949.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "snow-moon-and-flowers",
    "title": "Snow, Moon, and Flowers - 雪月花",
    "genre": "舞蹈",
    "scale": "独立制作",
    "venue": "potterylane",
    "company": "",
    "start": "2026-09-03",
    "end": "2026-09-03",
    "price": 20,
    "priceText": "A$20 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 20 分钟",
    "desc": "Snow, Moon, and Flowers - 雪月花 在Pottery Lane Performance Space上演，演期 2026-09-03 至 2026-09-03，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/snow-moon-and-flowers-%e9%9b%aa%e6%9c%88%e8%8a%b1/",
    "booking": "https://sydneyfringe.com/events/snow-moon-and-flowers-%e9%9b%aa%e6%9c%88%e8%8a%b1/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-03",
        "20:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-03 至 2026-09-03）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-30-2026-002448-9721.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "ash-funny-poet",
    "title": "Ash Funny Poet",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "marrickville",
    "company": "",
    "start": "2026-09-12",
    "end": "2026-09-12",
    "price": 27,
    "priceText": "A$27 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 45 分钟",
    "desc": "Ash Funny Poet 在Marrickville Town Hall上演，演期 2026-09-12 至 2026-09-12，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/ash-funny-poet/",
    "booking": "https://sydneyfringe.com/events/ash-funny-poet/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-12",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-12 至 2026-09-12）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Festival Hub - The Chambers",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-28-2026-002828-8172.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "flashback",
    "title": "Flashback",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "erskineville",
    "company": "",
    "start": "2026-09-12",
    "end": "2026-09-12",
    "price": 27,
    "priceText": "A$27 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Flashback 在Erskineville Town Hall上演，演期 2026-09-12 至 2026-09-12，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/flashback/",
    "booking": "https://sydneyfringe.com/events/flashback/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-12",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-12 至 2026-09-12）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Emerging Artist Share House - The Living Room",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-27-2026-154503-3236.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "freddie-mcmanus-feat-freddie-mcmanus",
    "title": "Freddie McManus (feat. Freddie McManus)",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-10-01",
    "end": "2026-10-03",
    "price": 22,
    "priceText": "A$22 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Freddie McManus (feat. Freddie McManus) 在Factory Theatre上演，演期 2026-10-01 至 2026-10-03，已公布 3 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/freddie-mcmanus-feat-freddie-mcmanus/",
    "booking": "https://sydneyfringe.com/events/freddie-mcmanus-feat-freddie-mcmanus/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-10-01",
        "18:45",
        ""
      ],
      [
        "2026-10-02",
        "18:45",
        ""
      ],
      [
        "2026-10-03",
        "18:45",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 3 场（2026-10-01 至 2026-10-03）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-16-2026-075837-9677.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "unhinged",
    "title": "Unhinged",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "marrickville",
    "company": "",
    "start": "2026-09-12",
    "end": "2026-09-12",
    "price": 26,
    "priceText": "A$26 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 55 分钟",
    "desc": "Unhinged 在Marrickville Town Hall上演，演期 2026-09-12 至 2026-09-12，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/unhinged/",
    "booking": "https://sydneyfringe.com/events/unhinged/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-12",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-12 至 2026-09-12）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Festival Hub - The Safe Room",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-24-2026-080339-1973.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "simon-bartlett-it-s-about-time",
    "title": "Simon Bartlett - It's About Time",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-24",
    "end": "2026-09-24",
    "price": 28,
    "priceText": "A$28 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 55 分钟",
    "desc": "Simon Bartlett - It's About Time 在Factory Theatre上演，演期 2026-09-24 至 2026-09-24，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/its-about-time/",
    "booking": "https://sydneyfringe.com/events/its-about-time/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-24",
        "18:45",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-24 至 2026-09-24）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-24-2026-034153-4592.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "fringe-comedian-of-the-year-championship",
    "title": "Fringe Comedian Of The Year - CHAMPIONSHIP",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "barrelbelow",
    "company": "",
    "start": "2026-09-25",
    "end": "2026-09-25",
    "price": 26,
    "priceText": "A$26 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "Fringe Comedian Of The Year - CHAMPIONSHIP 在Barrel Below上演，演期 2026-09-25 至 2026-09-25，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/fringe-comedian-of-the-year-championship/",
    "booking": "https://sydneyfringe.com/events/fringe-comedian-of-the-year-championship/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-25",
        "18:05",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-25 至 2026-09-25）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Multicultural Comedy Hub",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-11-2026-022706-9894.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "grown-girl",
    "title": "Grown Girl",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-06",
    "end": "2026-09-06",
    "price": 22,
    "priceText": "A$22 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Grown Girl 在Factory Theatre上演，演期 2026-09-06 至 2026-09-06，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/grown-girl/",
    "booking": "https://sydneyfringe.com/events/grown-girl/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-06",
        "17:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-06 至 2026-09-06）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/08-27-2026-063021-2405.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "roisin-mcalinden-fairytale-ending",
    "title": "Roisin McAlinden - Fairytale: Ending",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-26",
    "end": "2026-09-27",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Roisin McAlinden - Fairytale: Ending 在Factory Theatre上演，演期 2026-09-26 至 2026-09-27，已公布 2 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/fairytale-ending/",
    "booking": "https://sydneyfringe.com/events/fairytale-ending/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-26",
        "21:30",
        ""
      ],
      [
        "2026-09-27",
        "20:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 2 场（2026-09-26 至 2026-09-27）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-12-2026-082543-1056.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "maybelline-s-close-friends-story-wip",
    "title": "Maybelline's Close Friends Story (WIP)",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-04",
    "end": "2026-09-04",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 55 分钟",
    "desc": "Maybelline's Close Friends Story (WIP) 在Factory Theatre上演，演期 2026-09-04 至 2026-09-04，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/maybellines-close-friends-story-wip/",
    "booking": "https://sydneyfringe.com/events/maybellines-close-friends-story-wip/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-04",
        "20:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-04 至 2026-09-04）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-17-2026-085730-8664.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "audrey-clark-slime-will-smell",
    "title": "Audrey Clark - Slime Will Smell",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-20",
    "end": "2026-09-20",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Audrey Clark - Slime Will Smell 在Factory Theatre上演，演期 2026-09-20 至 2026-09-20，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/audrey-clark-slime-will-smell/",
    "booking": "https://sydneyfringe.com/events/audrey-clark-slime-will-smell/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-20",
        "19:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-20 至 2026-09-20）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-12-2026-144035-1491.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "flop",
    "title": "FLOP",
    "genre": "舞蹈",
    "scale": "专业制作",
    "venue": "newtheatre",
    "company": "",
    "start": "2026-09-19",
    "end": "2026-09-19",
    "price": 35,
    "priceText": "A$35 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 40 分钟",
    "desc": "FLOP 在New Theatre上演，演期 2026-09-19 至 2026-09-19，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/flop/",
    "booking": "https://sydneyfringe.com/events/flop/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-19",
        "18:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-19 至 2026-09-19）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Touring Hub",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-20-2026-053423-5108.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "me-the-cabaret",
    "title": "Me! - The Cabaret",
    "genre": "卡巴莱",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-24",
    "end": "2026-09-24",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Me! - The Cabaret 在Factory Theatre上演，演期 2026-09-24 至 2026-09-24，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/me-the-cabaret/",
    "booking": "https://sydneyfringe.com/events/me-the-cabaret/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-24",
        "21:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-24 至 2026-09-24）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-12-2026-144631-5484.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "not-nigella",
    "title": "Not Nigella",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "erskineville",
    "company": "",
    "start": "2026-09-12",
    "end": "2026-09-12",
    "price": 27,
    "priceText": "A$27 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 40 分钟",
    "desc": "Not Nigella 在Erskineville Town Hall上演，演期 2026-09-12 至 2026-09-12，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/not-nigella/",
    "booking": "https://sydneyfringe.com/events/not-nigella/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-12",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-12 至 2026-09-12）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Emerging Artist Share House - The Office",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-29-2026-113305-5807.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "cwa-cuntry-women-s-association",
    "title": "CWA: Cuntry Women's Association",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "improv",
    "company": "",
    "start": "2026-09-18",
    "end": "2026-09-18",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "CWA: Cuntry Women's Association 在Improv Theatre Sydney上演，演期 2026-09-18 至 2026-09-18，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/cwa-cuntry-womens-association/",
    "booking": "https://sydneyfringe.com/events/cwa-cuntry-womens-association/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-18",
        "19:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-18 至 2026-09-18）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-12-2026-152445-9751.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "writer-s-room",
    "title": "Writer's Room",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-26",
    "end": "2026-09-27",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Writer's Room 在Factory Theatre上演，演期 2026-09-26 至 2026-09-27，已公布 2 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/writers-room/",
    "booking": "https://sydneyfringe.com/events/writers-room/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-26",
        "21:15",
        ""
      ],
      [
        "2026-09-27",
        "20:15",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 2 场（2026-09-26 至 2026-09-27）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-17-2026-130849-1049.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "weapons-grade-comedy",
    "title": "Weapons Grade Comedy",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-06",
    "end": "2026-09-06",
    "price": 22,
    "priceText": "A$22 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Weapons Grade Comedy 在Factory Theatre上演，演期 2026-09-06 至 2026-09-06，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/weapons-grade-comedy/",
    "booking": "https://sydneyfringe.com/events/weapons-grade-comedy/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-06",
        "20:15",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-06 至 2026-09-06）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-12-2026-044137-3270.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "saint-of-losers",
    "title": "Saint of Losers",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-20",
    "end": "2026-09-20",
    "price": 20,
    "priceText": "A$20 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Saint of Losers 在Factory Theatre上演，演期 2026-09-20 至 2026-09-20，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/saint-of-losers/",
    "booking": "https://sydneyfringe.com/events/saint-of-losers/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-20",
        "20:15",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-20 至 2026-09-20）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-17-2026-063632-3754.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "barnaby-a-country-musical",
    "title": "Barnaby: A Country Musical",
    "genre": "卡巴莱",
    "scale": "独立制作",
    "venue": "eternity",
    "company": "",
    "start": "2026-09-24",
    "end": "2026-09-26",
    "price": 44,
    "priceText": "A$44 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Barnaby: A Country Musical 在Eternity Playhouse上演，演期 2026-09-24 至 2026-09-26，已公布 2 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/barnaby-a-country-musical/",
    "booking": "https://sydneyfringe.com/events/barnaby-a-country-musical/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-24",
        "18:30",
        ""
      ],
      [
        "2026-09-26",
        "18:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 2 场（2026-09-24 至 2026-09-26）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Off Broadway Hub",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-25-2026-095447-1955.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "cloche",
    "title": "Cloche",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-04",
    "end": "2026-09-04",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "Cloche 在Factory Theatre上演，演期 2026-09-04 至 2026-09-04，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/cloche-improv-a-la-carte/",
    "booking": "https://sydneyfringe.com/events/cloche-improv-a-la-carte/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-04",
        "18:45",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-04 至 2026-09-04）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-18-2026-143852-9651.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "sean-quinn-you-ll-be-grand-and-other-cognitive-distortions",
    "title": "Sean Quinn - You'll Be Grand (and other cognitive distortions)",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-18",
    "end": "2026-09-18",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "Sean Quinn - You'll Be Grand (and other cognitive distortions) 在Factory Theatre上演，演期 2026-09-18 至 2026-09-18，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/sean-quinn-youll-be-grand-and-other-cognitive-distortions/",
    "booking": "https://sydneyfringe.com/events/sean-quinn-youll-be-grand-and-other-cognitive-distortions/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-18",
        "18:45",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-18 至 2026-09-18）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-17-2026-021816-8624.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "chris-natsuume-clitoris-summer-plum",
    "title": "Chris Natsuume - Clitoris Summer Plum",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "newtownhotel",
    "company": "",
    "start": "2026-09-19",
    "end": "2026-09-19",
    "price": 30,
    "priceText": "A$30 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Chris Natsuume - Clitoris Summer Plum 在Newtown Hotel上演，演期 2026-09-19 至 2026-09-19，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/chris-natsuume-clitoris-summer-plum/",
    "booking": "https://sydneyfringe.com/events/chris-natsuume-clitoris-summer-plum/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-19",
        "19:45",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-19 至 2026-09-19）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-20-2026-081856-1655.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "jay-yamaki-anyway-she-died",
    "title": "Jay Yamaki - Anyway, she died",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "newtownhotel",
    "company": "",
    "start": "2026-09-19",
    "end": "2026-09-19",
    "price": 30,
    "priceText": "A$30 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Jay Yamaki - Anyway, she died 在Newtown Hotel上演，演期 2026-09-19 至 2026-09-19，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/jay-yamaki-anyway-she-died/",
    "booking": "https://sydneyfringe.com/events/jay-yamaki-anyway-she-died/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-19",
        "21:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-19 至 2026-09-19）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-20-2026-084552-3249.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "p-p-p-party",
    "title": "P-P-P-Party",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "pyt",
    "company": "",
    "start": "2026-09-05",
    "end": "2026-09-05",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 30 分钟",
    "desc": "P-P-P-Party 在PYT Fairfield上演，演期 2026-09-05 至 2026-09-05，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/p-p-p-party/",
    "booking": "https://sydneyfringe.com/events/p-p-p-party/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-05",
        "20:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-05 至 2026-09-05）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/07-01-2026-061430-2520.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "snape-life-after-voldemort",
    "title": "Snape: Life after Voldemort",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-18",
    "end": "2026-09-18",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Snape: Life after Voldemort 在Factory Theatre上演，演期 2026-09-18 至 2026-09-18，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/snape-life-after-voldemort/",
    "booking": "https://sydneyfringe.com/events/snape-life-after-voldemort/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-18",
        "21:15",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-18 至 2026-09-18）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-16-2026-111603-1383.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "sorry-my-mum-won-t-let-me",
    "title": "Sorry, My Mum Won’t Let Me",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-24",
    "end": "2026-09-27",
    "price": 22,
    "priceText": "A$22 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Sorry, My Mum Won’t Let Me 在Factory Theatre上演，演期 2026-09-24 至 2026-09-27，已公布 4 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/sorry-my-mum-wont-let-me/",
    "booking": "https://sydneyfringe.com/events/sorry-my-mum-wont-let-me/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-24",
        "18:45",
        ""
      ],
      [
        "2026-09-25",
        "18:45",
        ""
      ],
      [
        "2026-09-26",
        "18:45",
        ""
      ],
      [
        "2026-09-27",
        "17:45",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 4 场（2026-09-24 至 2026-09-27）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-14-2026-123532-9484.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "peter-gleeson-ahh-what-no-leave-me-alone",
    "title": "Peter Gleeson : Ahh What?! No! Leave Me Alone",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "newtownhotel",
    "company": "",
    "start": "2026-09-23",
    "end": "2026-09-27",
    "price": 27,
    "priceText": "A$27 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Peter Gleeson : Ahh What?! No! Leave Me Alone 在Newtown Hotel上演，演期 2026-09-23 至 2026-09-27，已公布 3 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/peter-gleeson-ahh-what-no-leave-me-alone/",
    "booking": "https://sydneyfringe.com/events/peter-gleeson-ahh-what-no-leave-me-alone/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-23",
        "19:45",
        ""
      ],
      [
        "2026-09-25",
        "19:45",
        ""
      ],
      [
        "2026-09-27",
        "18:45",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 3 场（2026-09-23 至 2026-09-27）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-28-2026-051723-5179.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "break-through-an-evening-of-love-heartbreak-and-moving-on",
    "title": "Break Through: An Evening of Love, Heartbreak, and Moving On",
    "genre": "卡巴莱",
    "scale": "独立制作",
    "venue": "marrickville",
    "company": "",
    "start": "2026-09-22",
    "end": "2026-09-26",
    "price": 35,
    "priceText": "A$35 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Break Through: An Evening of Love, Heartbreak, and Moving On 在Marrickville Town Hall上演，演期 2026-09-22 至 2026-09-26，已公布 5 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/break-through-an-evening-of-love-heartbreak-and-moving-on/",
    "booking": "https://sydneyfringe.com/events/break-through-an-evening-of-love-heartbreak-and-moving-on/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-22",
        "19:30",
        ""
      ],
      [
        "2026-09-23",
        "19:30",
        ""
      ],
      [
        "2026-09-24",
        "19:30",
        ""
      ],
      [
        "2026-09-25",
        "19:30",
        ""
      ],
      [
        "2026-09-26",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 5 场（2026-09-22 至 2026-09-26）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Festival Hub - The Safe Room",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-31-2026-144916-5299.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "oink",
    "title": "Oink",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-10-01",
    "end": "2026-10-02",
    "price": 22,
    "priceText": "A$22 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "Oink 在Factory Theatre上演，演期 2026-10-01 至 2026-10-02，已公布 2 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/oink/",
    "booking": "https://sydneyfringe.com/events/oink/",
    "bookingLabel": "官方场次与购票",
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
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 2 场（2026-10-01 至 2026-10-02）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-16-2026-124935-4331.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "ethnic-comedy-dinner",
    "title": "Ethnic Comedy Dinner",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "barrelbelow",
    "company": "",
    "start": "2026-09-19",
    "end": "2026-09-19",
    "price": 21,
    "priceText": "A$21 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "Ethnic Comedy Dinner 在Barrel Below上演，演期 2026-09-19 至 2026-09-19，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/ethnic-comedy-dinner/",
    "booking": "https://sydneyfringe.com/events/ethnic-comedy-dinner/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-19",
        "17:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-19 至 2026-09-19）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Multicultural Comedy Hub",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-29-2026-053325-4263.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "i-m-italian-but-it-s-not-my-fault",
    "title": "I'm Italian (But it's not my fault)",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "barrelbelow",
    "company": "",
    "start": "2026-09-25",
    "end": "2026-09-26",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "I'm Italian (But it's not my fault) 在Barrel Below上演，演期 2026-09-25 至 2026-09-26，已公布 2 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/im-italian-but-its-not-my-fault/",
    "booking": "https://sydneyfringe.com/events/im-italian-but-its-not-my-fault/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-25",
        "22:15",
        ""
      ],
      [
        "2026-09-26",
        "16:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 2 场（2026-09-25 至 2026-09-26）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Multicultural Comedy Hub",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/07-20-2026-103700-8702.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "rogue",
    "title": "Rogue",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-18",
    "end": "2026-09-18",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 55 分钟",
    "desc": "Rogue 在Factory Theatre上演，演期 2026-09-18 至 2026-09-18，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/rogue/",
    "booking": "https://sydneyfringe.com/events/rogue/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-18",
        "20:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-18 至 2026-09-18）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-12-2026-032520-5063.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "the-streets-are-paved-with-murder",
    "title": "The Streets Are Paved With Murder",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-20",
    "end": "2026-09-20",
    "price": 22,
    "priceText": "A$22 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "The Streets Are Paved With Murder 在Factory Theatre上演，演期 2026-09-20 至 2026-09-20，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/the-streets-are-paved-with-murder/",
    "booking": "https://sydneyfringe.com/events/the-streets-are-paved-with-murder/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-20",
        "16:15",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-20 至 2026-09-20）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-17-2026-133552-3855.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "john-glover-andy-procopis-singlet-comedians",
    "title": "John Glover & Andy Procopis - Singlet Comedians",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "comedystore",
    "company": "",
    "start": "2026-09-25",
    "end": "2026-09-25",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "John Glover & Andy Procopis - Singlet Comedians 在The Comedy Store上演，演期 2026-09-25 至 2026-09-25，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/john-glover-andy-procopis-singlet-comedians/",
    "booking": "https://sydneyfringe.com/events/john-glover-andy-procopis-singlet-comedians/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-25",
        "19:45",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-25 至 2026-09-25）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-15-2026-072519-9220.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "gag-race-a-queer-comedy-competition",
    "title": "Gag Race: A Queer Comedy Competition",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-04",
    "end": "2026-09-04",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Gag Race: A Queer Comedy Competition 在Factory Theatre上演，演期 2026-09-04 至 2026-09-04，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/gag-race-a-queer-comedy-competition/",
    "booking": "https://sydneyfringe.com/events/gag-race-a-queer-comedy-competition/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-04",
        "21:15",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-04 至 2026-09-04）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-15-2026-055011-9853.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "first-nations-headliners",
    "title": "First Nations Headliners",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-06",
    "end": "2026-09-06",
    "price": 22,
    "priceText": "A$22 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "First Nations Headliners 在Factory Theatre上演，演期 2026-09-06 至 2026-09-06，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/first-nations-headliners/",
    "booking": "https://sydneyfringe.com/events/first-nations-headliners/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-06",
        "20:15",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-06 至 2026-09-06）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-18-2026-064808-3179.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "stop-look-think-are-you-eating-yourself",
    "title": "Stop, Look, Think- are you eating yourself?",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-06",
    "end": "2026-09-06",
    "price": 22,
    "priceText": "A$22 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "Stop, Look, Think- are you eating yourself? 在Factory Theatre上演，演期 2026-09-06 至 2026-09-06，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/stop-look-think-are-you-eating-yourself/",
    "booking": "https://sydneyfringe.com/events/stop-look-think-are-you-eating-yourself/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-06",
        "19:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-06 至 2026-09-06）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-16-2026-080222-2528.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "opera-s-bad-girl",
    "title": "Opera's Bad Girl",
    "genre": "卡巴莱",
    "scale": "独立制作",
    "venue": "marrickville",
    "company": "",
    "start": "2026-09-11",
    "end": "2026-09-11",
    "price": 33,
    "priceText": "A$33 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Opera's Bad Girl 在Marrickville Town Hall上演，演期 2026-09-11 至 2026-09-11，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/operas-bad-girl/",
    "booking": "https://sydneyfringe.com/events/operas-bad-girl/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-11",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-11 至 2026-09-11）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Festival Hub - The Safe Room",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-05-2026-080030-1157.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "navigating-normal-liam-daley",
    "title": "Navigating Normal - Liam Daley",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "newtownhotel",
    "company": "",
    "start": "2026-09-06",
    "end": "2026-09-06",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Navigating Normal - Liam Daley 在Newtown Hotel上演，演期 2026-09-06 至 2026-09-06，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/navigating-normal-liam-daley/",
    "booking": "https://sydneyfringe.com/events/navigating-normal-liam-daley/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-06",
        "18:45",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-06 至 2026-09-06）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-19-2026-060254-3085.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "comedian-vs-chatgpt",
    "title": "Comedian vs ChatGPT",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-26",
    "end": "2026-09-27",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "Comedian vs ChatGPT 在Factory Theatre上演，演期 2026-09-26 至 2026-09-27，已公布 2 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/comedian-vs-chatgpt/",
    "booking": "https://sydneyfringe.com/events/comedian-vs-chatgpt/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-26",
        "18:45",
        ""
      ],
      [
        "2026-09-27",
        "17:45",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 2 场（2026-09-26 至 2026-09-27）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/09-08-2026-020255-2845.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "bonehead-lily-hensby",
    "title": "Bonehead - Lily Hensby",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-06",
    "end": "2026-09-06",
    "price": 30,
    "priceText": "A$30 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 55 分钟",
    "desc": "Bonehead - Lily Hensby 在Factory Theatre上演，演期 2026-09-06 至 2026-09-06，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/lily-hensby/",
    "booking": "https://sydneyfringe.com/events/lily-hensby/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-06",
        "20:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-06 至 2026-09-06）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-06-2026-015328-8000.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "tripping-up-that-hill",
    "title": "Tripping Up That Hill",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "erskineville",
    "company": "",
    "start": "2026-09-05",
    "end": "2026-09-05",
    "price": 30,
    "priceText": "A$30 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "Tripping Up That Hill 在Erskineville Town Hall上演，演期 2026-09-05 至 2026-09-05，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/tripping-up-that-hill/",
    "booking": "https://sydneyfringe.com/events/tripping-up-that-hill/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-05",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-05 至 2026-09-05）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Emerging Artist Share House - The Boom Boom Room",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/04-09-2026-013442-8290.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "kaleidoscope",
    "title": "Kaleidoscope",
    "genre": "马戏",
    "scale": "独立制作",
    "venue": "fools",
    "company": "",
    "start": "2026-09-20",
    "end": "2026-09-20",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "Kaleidoscope 在Fool's Paradise (Entertainment Quarter)上演，演期 2026-09-20 至 2026-09-20，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/kaleidoscope/",
    "booking": "https://sydneyfringe.com/events/kaleidoscope/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-20",
        "13:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-20 至 2026-09-20）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "The Virago",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-25-2026-051428-5728.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "double-date-andrew-hastings-lochlann-mcallister",
    "title": "Double Date - Andrew Hastings & Lochlann McAllister",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-20",
    "end": "2026-09-20",
    "price": 22,
    "priceText": "A$22 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Double Date - Andrew Hastings & Lochlann McAllister 在Factory Theatre上演，演期 2026-09-20 至 2026-09-20，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/double-date-andrew-hastings-lochlann-mcallister/",
    "booking": "https://sydneyfringe.com/events/double-date-andrew-hastings-lochlann-mcallister/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-20",
        "19:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-20 至 2026-09-20）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-12-2026-033938-7853.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "ghosts-at-play",
    "title": "Ghosts at Play",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-26",
    "end": "2026-09-27",
    "price": 22,
    "priceText": "A$22 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 55 分钟",
    "desc": "Ghosts at Play 在Factory Theatre上演，演期 2026-09-26 至 2026-09-27，已公布 2 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/ghosts-at-play/",
    "booking": "https://sydneyfringe.com/events/ghosts-at-play/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-26",
        "17:00",
        ""
      ],
      [
        "2026-09-27",
        "16:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 2 场（2026-09-26 至 2026-09-27）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-24-2026-030312-7339.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "andrew-stokes-tired-trope",
    "title": "Andrew Stokes - Tired Trope",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-10-03",
    "end": "2026-10-03",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 40 分钟",
    "desc": "Andrew Stokes - Tired Trope 在Factory Theatre上演，演期 2026-10-03 至 2026-10-03，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/tired-trope/",
    "booking": "https://sydneyfringe.com/events/tired-trope/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-10-03",
        "17:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-10-03 至 2026-10-03）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-17-2026-111445-2324.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "i-m-a-lesbian-but-i-really-love-men",
    "title": "I'm a Lesbian but I Really Love Men",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "erskineville",
    "company": "",
    "start": "2026-09-12",
    "end": "2026-09-12",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "I'm a Lesbian but I Really Love Men 在Erskineville Town Hall上演，演期 2026-09-12 至 2026-09-12，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/im-a-lesbian-but-i-really-love-men/",
    "booking": "https://sydneyfringe.com/events/im-a-lesbian-but-i-really-love-men/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-12",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-12 至 2026-09-12）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Emerging Artist Share House - The Spare Room",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-19-2026-075409-3522.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "caffeine-and-comedy-rave",
    "title": "Caffeine And Comedy Rave",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "barrelbelow",
    "company": "",
    "start": "2026-09-12",
    "end": "2026-09-12",
    "price": 35,
    "priceText": "A$35 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "Caffeine And Comedy Rave 在Barrel Below上演，演期 2026-09-12 至 2026-09-12，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/caffeine-and-comedy-rave/",
    "booking": "https://sydneyfringe.com/events/caffeine-and-comedy-rave/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-12",
        "14:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-12 至 2026-09-12）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Multicultural Comedy Hub",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-11-2026-030024-4199.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "all-india-mass-migration-comedy",
    "title": "All India Mass Migration Comedy",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "barrelbelow",
    "company": "",
    "start": "2026-09-18",
    "end": "2026-09-18",
    "price": 26,
    "priceText": "A$26 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "All India Mass Migration Comedy 在Barrel Below上演，演期 2026-09-18 至 2026-09-18，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/all-india-mass-migration-comedy/",
    "booking": "https://sydneyfringe.com/events/all-india-mass-migration-comedy/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-18",
        "20:15",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-18 至 2026-09-18）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Multicultural Comedy Hub",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-03-2026-034541-6355.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "same-girl-online-now",
    "title": "Same girl: online now",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-24",
    "end": "2026-09-25",
    "price": 22,
    "priceText": "A$22 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Same girl: online now 在Factory Theatre上演，演期 2026-09-24 至 2026-09-25，已公布 2 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/same-girl-online-now/",
    "booking": "https://sydneyfringe.com/events/same-girl-online-now/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-24",
        "21:15",
        ""
      ],
      [
        "2026-09-25",
        "21:15",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 2 场（2026-09-24 至 2026-09-25）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/08-10-2026-033011-6253.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "michelle-azevedo-all-that-glitters",
    "title": "Michelle Azevedo - All That Glitters",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-24",
    "end": "2026-09-25",
    "price": 22,
    "priceText": "A$22 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "Michelle Azevedo - All That Glitters 在Factory Theatre上演，演期 2026-09-24 至 2026-09-25，已公布 2 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/michelle-azevedo-all-that-glitters/",
    "booking": "https://sydneyfringe.com/events/michelle-azevedo-all-that-glitters/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-24",
        "20:00",
        ""
      ],
      [
        "2026-09-25",
        "20:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 2 场（2026-09-24 至 2026-09-25）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-17-2026-163036-5428.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "off-leash",
    "title": "Off Leash",
    "genre": "卡巴莱",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-06",
    "end": "2026-09-06",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 80 分钟",
    "desc": "Off Leash 在Factory Theatre上演，演期 2026-09-06 至 2026-09-06，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/off-leash/",
    "booking": "https://sydneyfringe.com/events/off-leash/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-06",
        "20:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-06 至 2026-09-06）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-17-2026-060545-4451.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "freya-morton-my-cat-is-a-gay-man",
    "title": "Freya Morton - My Cat Is A Gay Man",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-10-01",
    "end": "2026-10-03",
    "price": 22,
    "priceText": "A$22 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Freya Morton - My Cat Is A Gay Man 在Factory Theatre上演，演期 2026-10-01 至 2026-10-03，已公布 3 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/freya-morton-my-cat-is-a-gay-man/",
    "booking": "https://sydneyfringe.com/events/freya-morton-my-cat-is-a-gay-man/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-10-01",
        "21:30",
        ""
      ],
      [
        "2026-10-02",
        "21:30",
        ""
      ],
      [
        "2026-10-03",
        "21:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 3 场（2026-10-01 至 2026-10-03）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-17-2026-035028-9327.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "curtesy-or-death",
    "title": "Curtesy or Death",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-10-03",
    "end": "2026-10-03",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 45 分钟",
    "desc": "Curtesy or Death 在Factory Theatre上演，演期 2026-10-03 至 2026-10-03，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/ms-mary-penny-moors/",
    "booking": "https://sydneyfringe.com/events/ms-mary-penny-moors/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-10-03",
        "17:15",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-10-03 至 2026-10-03）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-16-2026-063332-3946.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "toboggan",
    "title": "Toboggan",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-26",
    "end": "2026-09-27",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "Toboggan 在Factory Theatre上演，演期 2026-09-26 至 2026-09-27，已公布 2 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/toboggan/",
    "booking": "https://sydneyfringe.com/events/toboggan/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-26",
        "17:15",
        ""
      ],
      [
        "2026-09-27",
        "16:15",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 2 场（2026-09-26 至 2026-09-27）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/07-24-2026-053756-7894.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "comedian-com-au",
    "title": "Comedian.com.au",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-06",
    "end": "2026-09-06",
    "price": 22,
    "priceText": "A$22 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Comedian.com.au 在Factory Theatre上演，演期 2026-09-06 至 2026-09-06，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/comedian-com-au/",
    "booking": "https://sydneyfringe.com/events/comedian-com-au/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-06",
        "16:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-06 至 2026-09-06）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-17-2026-054509-2170.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "parenting-fails-future-therapy-bills",
    "title": "Parenting Fails & Future Therapy Bills",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-26",
    "end": "2026-09-27",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Parenting Fails & Future Therapy Bills 在Factory Theatre上演，演期 2026-09-26 至 2026-09-27，已公布 2 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/parenting-fails-future-therapy-bills/",
    "booking": "https://sydneyfringe.com/events/parenting-fails-future-therapy-bills/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-26",
        "20:00",
        ""
      ],
      [
        "2026-09-27",
        "19:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 2 场（2026-09-26 至 2026-09-27）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-11-2026-030356-6657.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "decadunce",
    "title": "Decadunce",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "qtopia",
    "company": "",
    "start": "2026-09-19",
    "end": "2026-09-19",
    "price": 27.5,
    "priceText": "A$27.5 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "Decadunce 在Qtopia Sydney上演，演期 2026-09-19 至 2026-09-19，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/decadunce/",
    "booking": "https://sydneyfringe.com/events/decadunce/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-19",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-19 至 2026-09-19）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Queer Hub - The Substation",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-11-2026-201833-8739.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "cherub-tarsh-jago",
    "title": "Cherub - Tarsh Jago",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-04",
    "end": "2026-09-04",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "Cherub - Tarsh Jago 在Factory Theatre上演，演期 2026-09-04 至 2026-09-04，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/cherub-tarsh-jago/",
    "booking": "https://sydneyfringe.com/events/cherub-tarsh-jago/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-04",
        "20:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-04 至 2026-09-04）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-16-2026-050737-1846.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "a-modern-australian-story",
    "title": "A (modern) Australian Story",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-24",
    "end": "2026-09-25",
    "price": 22,
    "priceText": "A$22 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "A (modern) Australian Story 在Factory Theatre上演，演期 2026-09-24 至 2026-09-25，已公布 2 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/a-modern-australian-story/",
    "booking": "https://sydneyfringe.com/events/a-modern-australian-story/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-24",
        "18:30",
        ""
      ],
      [
        "2026-09-25",
        "18:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 2 场（2026-09-24 至 2026-09-25）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-14-2026-143744-9223.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "matt-okine-no-10-hope-st-encore",
    "title": "MATT OKINE: NO. 10 HOPE ST - ENCORE",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "comedystore",
    "company": "",
    "start": "2026-09-04",
    "end": "2026-09-04",
    "price": 39.9,
    "priceText": "A$39.9 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "MATT OKINE: NO. 10 HOPE ST - ENCORE 在The Comedy Store上演，演期 2026-09-04 至 2026-09-04，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/matt-okine-no-10-hope-st-encore/",
    "booking": "https://sydneyfringe.com/events/matt-okine-no-10-hope-st-encore/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-04",
        "20:15",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-04 至 2026-09-04）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/07-06-2026-070838-6404.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "laksh-maheshwari",
    "title": "LAKSH MAHESHWARI",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "comedystore",
    "company": "",
    "start": "2026-09-11",
    "end": "2026-09-11",
    "price": 54.95,
    "priceText": "A$54.95 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "LAKSH MAHESHWARI 在The Comedy Store上演，演期 2026-09-11 至 2026-09-11，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/laksh-maheshwari/",
    "booking": "https://sydneyfringe.com/events/laksh-maheshwari/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-11",
        "19:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-11 至 2026-09-11）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-22-2026-075526-4065.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "joe-daymond-early-access",
    "title": "JOE DAYMOND - EARLY ACCESS",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "comedystore",
    "company": "",
    "start": "2026-09-24",
    "end": "2026-09-24",
    "price": 35,
    "priceText": "A$35 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "JOE DAYMOND - EARLY ACCESS 在The Comedy Store上演，演期 2026-09-24 至 2026-09-24，已公布 2 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/joe-daymond/",
    "booking": "https://sydneyfringe.com/events/joe-daymond/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-24",
        "19:45",
        ""
      ],
      [
        "2026-09-24",
        "21:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 2 场（2026-09-24 至 2026-09-24）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/07-08-2026-015606-2676.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "the-rocky-horror-singalonga-cabaret-show",
    "title": "The Rocky Horror Singalonga Cabaret Show",
    "genre": "卡巴莱",
    "scale": "独立制作",
    "venue": "marrickville",
    "company": "",
    "start": "2026-09-24",
    "end": "2026-09-26",
    "price": 35,
    "priceText": "A$35 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "The Rocky Horror Singalonga Cabaret Show 在Marrickville Town Hall上演，演期 2026-09-24 至 2026-09-26，已公布 4 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/rocky-horror/",
    "booking": "https://sydneyfringe.com/events/rocky-horror/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-24",
        "21:00",
        ""
      ],
      [
        "2026-09-25",
        "21:00",
        ""
      ],
      [
        "2026-09-26",
        "19:30",
        ""
      ],
      [
        "2026-09-26",
        "21:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 4 场（2026-09-24 至 2026-09-26）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Festival Hub - The Chambers",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-18-2026-084231-2805.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "eurovision",
    "title": "Eurovision",
    "genre": "卡巴莱",
    "scale": "独立制作",
    "venue": "marrickville",
    "company": "",
    "start": "2026-09-26",
    "end": "2026-09-26",
    "price": 35,
    "priceText": "A$35 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Eurovision 在Marrickville Town Hall上演，演期 2026-09-26 至 2026-09-26，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/eurovision/",
    "booking": "https://sydneyfringe.com/events/eurovision/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-26",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-26 至 2026-09-26）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Festival Hub - The Chambers",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-18-2026-122037-2148.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "some-homo-sapien",
    "title": "Some Homo Sapien",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-10-03",
    "end": "2026-10-03",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Some Homo Sapien 在Factory Theatre上演，演期 2026-10-03 至 2026-10-03，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/some-homo-sapien/",
    "booking": "https://sydneyfringe.com/events/some-homo-sapien/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-10-03",
        "21:15",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-10-03 至 2026-10-03）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/09-11-2026-011233-3668.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "amy-ruffle-vampire",
    "title": "Amy Ruffle - Vampire",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-18",
    "end": "2026-09-18",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Amy Ruffle - Vampire 在Factory Theatre上演，演期 2026-09-18 至 2026-09-18，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/amy-ruffle-vampire/",
    "booking": "https://sydneyfringe.com/events/amy-ruffle-vampire/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-18",
        "21:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-18 至 2026-09-18）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-17-2026-043157-8113.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "sarah-ison-hot-seat",
    "title": "Sarah Ison - Hot Seat",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-10-01",
    "end": "2026-10-01",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Sarah Ison - Hot Seat 在Factory Theatre上演，演期 2026-10-01 至 2026-10-01，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/sarah-ison-hot-seat/",
    "booking": "https://sydneyfringe.com/events/sarah-ison-hot-seat/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-10-01",
        "18:45",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-10-01 至 2026-10-01）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-17-2026-055349-1319.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "mickey-d-the-culturally-appropriate-appropriation-society",
    "title": "MICKEY D - THE CULTURALLY APPROPRIATE APPROPRIATION SOCIETY",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "comedystore",
    "company": "",
    "start": "2026-09-05",
    "end": "2026-09-05",
    "price": 47,
    "priceText": "A$47 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "MICKEY D - THE CULTURALLY APPROPRIATE APPROPRIATION SOCIETY 在The Comedy Store上演，演期 2026-09-05 至 2026-09-05，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/mickey-d-the-culturally-appropriate-appropriation-society/",
    "booking": "https://sydneyfringe.com/events/mickey-d-the-culturally-appropriate-appropriation-society/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-05",
        "19:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-05 至 2026-09-05）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-18-2026-025544-9258.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "david-rose",
    "title": "DAVID ROSE",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "comedystore",
    "company": "",
    "start": "2026-09-10",
    "end": "2026-09-10",
    "price": 32,
    "priceText": "A$32 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "DAVID ROSE 在The Comedy Store上演，演期 2026-09-10 至 2026-09-10，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/david-rose/",
    "booking": "https://sydneyfringe.com/events/david-rose/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-10",
        "19:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-10 至 2026-09-10）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-18-2026-030423-4048.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "nick-harriott-secret-show-shh",
    "title": "Nick Harriott - Secret Show (Shh)",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-06",
    "end": "2026-09-06",
    "price": 22,
    "priceText": "A$22 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 55 分钟",
    "desc": "Nick Harriott - Secret Show (Shh) 在Factory Theatre上演，演期 2026-09-06 至 2026-09-06，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/nick-harriott-secret-show-shh/",
    "booking": "https://sydneyfringe.com/events/nick-harriott-secret-show-shh/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-06",
        "17:45",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-06 至 2026-09-06）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-18-2026-121714-2771.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "party-animals",
    "title": "Party Animals",
    "genre": "亲子剧",
    "scale": "独立制作",
    "venue": "fools",
    "company": "",
    "start": "2026-09-30",
    "end": "2026-10-11",
    "price": 29,
    "priceText": "A$29 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Party Animals 在Fool's Paradise (Entertainment Quarter)上演，演期 2026-09-30 至 2026-10-11，已公布 11 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/party-animals/",
    "booking": "https://sydneyfringe.com/events/party-animals/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-30",
        "09:30",
        ""
      ],
      [
        "2026-10-01",
        "09:30",
        ""
      ],
      [
        "2026-10-02",
        "09:30",
        ""
      ],
      [
        "2026-10-03",
        "09:30",
        ""
      ],
      [
        "2026-10-04",
        "09:30",
        ""
      ],
      [
        "2026-10-06",
        "09:30",
        ""
      ],
      [
        "2026-10-07",
        "09:30",
        ""
      ],
      [
        "2026-10-08",
        "09:30",
        ""
      ],
      [
        "2026-10-09",
        "09:30",
        ""
      ],
      [
        "2026-10-10",
        "09:30",
        ""
      ],
      [
        "2026-10-11",
        "09:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 11 场（2026-09-30 至 2026-10-11）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "The Bunker",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-15-2026-162047-8533.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "its-flipping-the-script",
    "title": "ITS Flipping The Script",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "improv",
    "company": "",
    "start": "2026-09-06",
    "end": "2026-09-06",
    "price": 22,
    "priceText": "A$22 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "ITS Flipping The Script 在Improv Theatre Sydney上演，演期 2026-09-06 至 2026-09-06，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/its-flipping-the-script/",
    "booking": "https://sydneyfringe.com/events/its-flipping-the-script/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-06",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-06 至 2026-09-06）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-18-2026-154200-9822.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "bin-night",
    "title": "Bin Night",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-10-01",
    "end": "2026-10-03",
    "price": 22,
    "priceText": "A$22 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Bin Night 在Factory Theatre上演，演期 2026-10-01 至 2026-10-03，已公布 3 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/bin-night/",
    "booking": "https://sydneyfringe.com/events/bin-night/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-10-01",
        "21:15",
        ""
      ],
      [
        "2026-10-02",
        "21:15",
        ""
      ],
      [
        "2026-10-03",
        "21:15",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 3 场（2026-10-01 至 2026-10-03）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-11-2026-114332-8311.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "brandy-tsang-all-up-in-my-feels",
    "title": "Brandy Tsang - All Up In My Feels",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-24",
    "end": "2026-09-24",
    "price": 22,
    "priceText": "A$22 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Brandy Tsang - All Up In My Feels 在Factory Theatre上演，演期 2026-09-24 至 2026-09-24，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/brandy-tsang-all-up-in-my-feels/",
    "booking": "https://sydneyfringe.com/events/brandy-tsang-all-up-in-my-feels/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-24",
        "20:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-24 至 2026-09-24）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/07-14-2026-023403-6318.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "guneet-kaur-sharper",
    "title": "Guneet Kaur - Sharper",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-20",
    "end": "2026-09-20",
    "price": 22,
    "priceText": "A$22 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 55 分钟",
    "desc": "Guneet Kaur - Sharper 在Factory Theatre上演，演期 2026-09-20 至 2026-09-20，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/sharper/",
    "booking": "https://sydneyfringe.com/events/sharper/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-20",
        "20:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-20 至 2026-09-20）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-24-2026-032112-3359.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "pretty-ugly",
    "title": "Pretty Ugly",
    "genre": "卡巴莱",
    "scale": "独立制作",
    "venue": "qtopia",
    "company": "",
    "start": "2026-09-05",
    "end": "2026-09-05",
    "price": 28,
    "priceText": "A$28 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Pretty Ugly 在Qtopia Sydney上演，演期 2026-09-05 至 2026-09-05，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/pretty-ugly/",
    "booking": "https://sydneyfringe.com/events/pretty-ugly/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-05",
        "21:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-05 至 2026-09-05）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Queer Hub - The Substation",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-28-2026-053235-5165.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "the-fool-or-francesca-giselle",
    "title": "THE FOOL (or, Francesca Giselle)",
    "genre": "舞蹈",
    "scale": "独立制作",
    "venue": "pact",
    "company": "",
    "start": "2026-09-19",
    "end": "2026-09-19",
    "price": 37,
    "priceText": "A$37 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "THE FOOL (or, Francesca Giselle) 在PACT Centre for Emerging Artists上演，演期 2026-09-19 至 2026-09-19，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/the-fool-or-francesca-giselle/",
    "booking": "https://sydneyfringe.com/events/the-fool-or-francesca-giselle/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-19",
        "18:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-19 至 2026-09-19）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Made In Hub",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-02-2026-051027-3855.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "maddie-stokes-business",
    "title": "Maddie Stokes - Business",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-04",
    "end": "2026-09-04",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "Maddie Stokes - Business 在Factory Theatre上演，演期 2026-09-04 至 2026-09-04，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/business/",
    "booking": "https://sydneyfringe.com/events/business/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-04",
        "18:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-04 至 2026-09-04）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-12-2026-070350-4008.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "chris-mcallister-s-reputation",
    "title": "Chris McAllister's Reputation",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "comedystore",
    "company": "",
    "start": "2026-09-25",
    "end": "2026-09-25",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Chris McAllister's Reputation 在The Comedy Store上演，演期 2026-09-25 至 2026-09-25，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/chris-mcallisters-reputation/",
    "booking": "https://sydneyfringe.com/events/chris-mcallisters-reputation/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-25",
        "18:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-25 至 2026-09-25）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-18-2026-064049-2183.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "frankie-rowsthorn-wip",
    "title": "Frankie Rowsthorn - WIP",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-10-01",
    "end": "2026-10-03",
    "price": 22,
    "priceText": "A$22 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Frankie Rowsthorn - WIP 在Factory Theatre上演，演期 2026-10-01 至 2026-10-03，已公布 3 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/frankie-rowasthorne-wip/",
    "booking": "https://sydneyfringe.com/events/frankie-rowasthorne-wip/",
    "bookingLabel": "官方场次与购票",
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
    "sessionsComplete": false,
    "schedule": "已公布 3 场（2026-10-01 至 2026-10-03）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/07-20-2026-070314-3038.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "trash-test-dummies-circus",
    "title": "Trash Test Dummies Circus",
    "genre": "亲子剧",
    "scale": "独立制作",
    "venue": "fools",
    "company": "",
    "start": "2026-09-26",
    "end": "2026-10-11",
    "price": 35,
    "priceText": "A$35 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Trash Test Dummies Circus 在Fool's Paradise (Entertainment Quarter)上演，演期 2026-09-26 至 2026-10-11，已公布 8 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/trash-test-dummies-circus/",
    "booking": "https://sydneyfringe.com/events/trash-test-dummies-circus/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-26",
        "13:30",
        ""
      ],
      [
        "2026-09-27",
        "13:30",
        ""
      ],
      [
        "2026-10-06",
        "13:30",
        ""
      ],
      [
        "2026-10-07",
        "13:30",
        ""
      ],
      [
        "2026-10-08",
        "13:30",
        ""
      ],
      [
        "2026-10-09",
        "13:30",
        ""
      ],
      [
        "2026-10-10",
        "13:30",
        ""
      ],
      [
        "2026-10-11",
        "13:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 8 场（2026-09-26 至 2026-10-11）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "The Bunker",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-19-2026-032836-9874.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "roast-battle",
    "title": "Roast Battle",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "comedystore",
    "company": "",
    "start": "2026-09-12",
    "end": "2026-09-12",
    "price": 30,
    "priceText": "A$30 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Roast Battle 在The Comedy Store上演，演期 2026-09-12 至 2026-09-12，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/roast-battle/",
    "booking": "https://sydneyfringe.com/events/roast-battle/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-12",
        "21:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-12 至 2026-09-12）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/07-14-2026-031038-1159.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "return-of-the-godz",
    "title": "Return of the Godz",
    "genre": "马戏",
    "scale": "独立制作",
    "venue": "fools",
    "company": "",
    "start": "2026-09-23",
    "end": "2026-10-11",
    "price": 45,
    "priceText": "A$45 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 90 分钟",
    "desc": "Return of the Godz 在Fool's Paradise (Entertainment Quarter)上演，演期 2026-09-23 至 2026-10-11，已公布 15 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/return-of-the-godz/",
    "booking": "https://sydneyfringe.com/events/return-of-the-godz/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-23",
        "20:00",
        ""
      ],
      [
        "2026-09-24",
        "20:00",
        ""
      ],
      [
        "2026-09-25",
        "20:00",
        ""
      ],
      [
        "2026-09-26",
        "20:00",
        ""
      ],
      [
        "2026-09-27",
        "20:00",
        ""
      ],
      [
        "2026-09-30",
        "20:00",
        ""
      ],
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
      ],
      [
        "2026-10-04",
        "20:00",
        ""
      ],
      [
        "2026-10-07",
        "20:00",
        ""
      ],
      [
        "2026-10-08",
        "20:00",
        ""
      ],
      [
        "2026-10-09",
        "20:00",
        ""
      ],
      [
        "2026-10-10",
        "20:00",
        ""
      ],
      [
        "2026-10-11",
        "20:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 15 场（2026-09-23 至 2026-10-11）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "The Virago",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/07-28-2026-093421-4772.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "harry-jun-k-comedy-wip",
    "title": "Harry Jun: K-Comedy - WIP",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "comedystore",
    "company": "",
    "start": "2026-09-19",
    "end": "2026-09-19",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Harry Jun: K-Comedy - WIP 在The Comedy Store上演，演期 2026-09-19 至 2026-09-19，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/harry-jun-k-comedy-wip/",
    "booking": "https://sydneyfringe.com/events/harry-jun-k-comedy-wip/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-19",
        "19:45",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-19 至 2026-09-19）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-17-2026-013921-3161.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "luke-heggie-daniel-townes-jen-carnovale-sorry-i-asked",
    "title": "Luke Heggie, Daniel Townes & Jen Carnovale - Sorry I Asked",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-10-01",
    "end": "2026-10-03",
    "price": 22,
    "priceText": "A$22 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Luke Heggie, Daniel Townes & Jen Carnovale - Sorry I Asked 在Factory Theatre上演，演期 2026-10-01 至 2026-10-03，已公布 3 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/luke-heggie-daniel-townes-jen-carnovale-sorry-i-asked/",
    "booking": "https://sydneyfringe.com/events/luke-heggie-daniel-townes-jen-carnovale-sorry-i-asked/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-10-01",
        "20:15",
        ""
      ],
      [
        "2026-10-02",
        "20:15",
        ""
      ],
      [
        "2026-10-03",
        "20:15",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 3 场（2026-10-01 至 2026-10-03）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-16-2026-042927-4069.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "jennifer-marshall-i-paid-21-000-for-this",
    "title": "Jennifer Marshall - I Paid $21,000 for this?",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-04",
    "end": "2026-09-04",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Jennifer Marshall - I Paid $21,000 for this? 在Factory Theatre上演，演期 2026-09-04 至 2026-09-04，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/i-payed-21000-for-this/",
    "booking": "https://sydneyfringe.com/events/i-payed-21000-for-this/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-04",
        "18:45",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-04 至 2026-09-04）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/07-12-2026-035149-3611.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "copa-on-the-rocks",
    "title": "Copa on The Rocks",
    "genre": "卡巴莱",
    "scale": "独立制作",
    "venue": "fringeontherocks",
    "company": "",
    "start": "2026-09-23",
    "end": "2026-10-11",
    "price": 39,
    "priceText": "A$39 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 180 分钟",
    "desc": "Copa on The Rocks 在Fringe on The Rocks上演，演期 2026-09-23 至 2026-10-11，已公布 15 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/copa-on-the-rocks/",
    "booking": "https://sydneyfringe.com/events/copa-on-the-rocks/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-23",
        "19:00",
        ""
      ],
      [
        "2026-09-24",
        "19:00",
        ""
      ],
      [
        "2026-09-25",
        "19:00",
        ""
      ],
      [
        "2026-09-26",
        "19:00",
        ""
      ],
      [
        "2026-09-27",
        "19:00",
        ""
      ],
      [
        "2026-09-30",
        "19:00",
        ""
      ],
      [
        "2026-10-01",
        "19:00",
        ""
      ],
      [
        "2026-10-02",
        "19:00",
        ""
      ],
      [
        "2026-10-03",
        "19:00",
        ""
      ],
      [
        "2026-10-04",
        "19:00",
        ""
      ],
      [
        "2026-10-07",
        "19:00",
        ""
      ],
      [
        "2026-10-08",
        "19:00",
        ""
      ],
      [
        "2026-10-09",
        "19:00",
        ""
      ],
      [
        "2026-10-10",
        "19:00",
        ""
      ],
      [
        "2026-10-11",
        "19:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 15 场（2026-09-23 至 2026-10-11）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "6-8 Atherden St, Ground Floor",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-24-2026-055300-3159.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "barney-s-sports-vs-entertainment-comedy-showdown",
    "title": "Barney’s Sports vs Entertainment Comedy Showdown",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-10-01",
    "end": "2026-10-03",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Barney’s Sports vs Entertainment Comedy Showdown 在Factory Theatre上演，演期 2026-10-01 至 2026-10-03，已公布 3 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/barneys-sports-vs-entertainment-comedy-showdown/",
    "booking": "https://sydneyfringe.com/events/barneys-sports-vs-entertainment-comedy-showdown/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-10-01",
        "18:30",
        ""
      ],
      [
        "2026-10-02",
        "18:30",
        ""
      ],
      [
        "2026-10-03",
        "18:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 3 场（2026-10-01 至 2026-10-03）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-16-2026-080106-4888.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "dipskit-skitload",
    "title": "Dipskit - Skitload",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-06",
    "end": "2026-09-06",
    "price": 22,
    "priceText": "A$22 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Dipskit - Skitload 在Factory Theatre上演，演期 2026-09-06 至 2026-09-06，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/skitload/",
    "booking": "https://sydneyfringe.com/events/skitload/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-06",
        "16:15",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-06 至 2026-09-06）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-17-2026-141046-4721.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "nonsense-and-sensibility",
    "title": "Nonsense and Sensibility",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-18",
    "end": "2026-09-18",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "Nonsense and Sensibility 在Factory Theatre上演，演期 2026-09-18 至 2026-09-18，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/nonsense-and-sensibility/",
    "booking": "https://sydneyfringe.com/events/nonsense-and-sensibility/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-18",
        "21:15",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-18 至 2026-09-18）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-28-2026-134752-7703.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "on-the-cusp",
    "title": "“On the Cusp”",
    "genre": "舞蹈",
    "scale": "独立制作",
    "venue": "drillhall",
    "company": "",
    "start": "2026-09-19",
    "end": "2026-09-19",
    "price": 30,
    "priceText": "A$30 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 120 分钟",
    "desc": "“On the Cusp” 在The Drill Hall上演，演期 2026-09-19 至 2026-09-19，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/on-the-cusp/",
    "booking": "https://sydneyfringe.com/events/on-the-cusp/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-19",
        "19:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-19 至 2026-09-19）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-25-2026-052424-5378.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "the-red-room-a-burlesque-cabaret-revue",
    "title": "The Red Room - A Burlesque & Cabaret Revue",
    "genre": "卡巴莱",
    "scale": "独立制作",
    "venue": "zenith",
    "company": "",
    "start": "2026-09-19",
    "end": "2026-09-19",
    "price": 55,
    "priceText": "A$55 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 120 分钟",
    "desc": "The Red Room - A Burlesque & Cabaret Revue 在Zenith Theatre上演，演期 2026-09-19 至 2026-09-19，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/va-voom-productions-present-the-red-room/",
    "booking": "https://sydneyfringe.com/events/va-voom-productions-present-the-red-room/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-19",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-19 至 2026-09-19）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/07-24-2026-100256-4360.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "4-shows-in-1-two-short-comedy-plays-a-short-musical-on-modern-love-plus-a-cabaret",
    "title": "4 Shows in 1: Two Short Comedy Plays, a Short Musical on Modern Love, plus a Cabaret",
    "genre": "卡巴莱",
    "scale": "独立制作",
    "venue": "low302",
    "company": "",
    "start": "2026-09-23",
    "end": "2026-09-23",
    "price": 44,
    "priceText": "A$44 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "4 Shows in 1: Two Short Comedy Plays, a Short Musical on Modern Love, plus a Cabaret 在Low 302上演，演期 2026-09-23 至 2026-09-23，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/an-evening-of-two-short-comedy-plays-a-short-musical-on-modern-love-plus-a-cabaret/",
    "booking": "https://sydneyfringe.com/events/an-evening-of-two-short-comedy-plays-a-short-musical-on-modern-love-plus-a-cabaret/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-23",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-23 至 2026-09-23）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/03-24-2026-042243-6087.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "1984-the-musical",
    "title": "1984! The Musical!",
    "genre": "卡巴莱",
    "scale": "独立制作",
    "venue": "flightpath",
    "company": "",
    "start": "2026-09-19",
    "end": "2026-09-19",
    "price": 29,
    "priceText": "A$29 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 120 分钟",
    "desc": "1984! The Musical! 在Flight Path Theatre上演，演期 2026-09-19 至 2026-09-19，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/1984-the-musical/",
    "booking": "https://sydneyfringe.com/events/1984-the-musical/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-19",
        "18:45",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-19 至 2026-09-19）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/03-22-2026-075749-3015.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "naughty-baby",
    "title": "“Naughty Baby”",
    "genre": "卡巴莱",
    "scale": "独立制作",
    "venue": "seandollys",
    "company": "",
    "start": "2026-09-19",
    "end": "2026-09-19",
    "price": 55,
    "priceText": "A$55 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 90 分钟",
    "desc": "“Naughty Baby” 在Sean & Dolly's上演，演期 2026-09-19 至 2026-09-19，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/naughty-baby/",
    "booking": "https://sydneyfringe.com/events/naughty-baby/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-19",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-19 至 2026-09-19）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/08-19-2026-051940-6423.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "a-moment-of-redacted",
    "title": "A MOMENT OF (redacted)",
    "genre": "舞蹈",
    "scale": "独立制作",
    "venue": "shepherd21",
    "company": "",
    "start": "2026-09-19",
    "end": "2026-09-19",
    "price": 40,
    "priceText": "A$40 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 45 分钟",
    "desc": "A MOMENT OF (redacted) 在21 Shepherd上演，演期 2026-09-19 至 2026-09-19，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/a-moment-of-redacted/",
    "booking": "https://sydneyfringe.com/events/a-moment-of-redacted/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-19",
        "19:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-19 至 2026-09-19）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-28-2026-055543-9572.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "momentum",
    "title": "Momentum",
    "genre": "舞蹈",
    "scale": "独立制作",
    "venue": "chippen",
    "company": "",
    "start": "2026-09-24",
    "end": "2026-09-26",
    "price": 45,
    "priceText": "A$45 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Momentum 在Chippen St Theatre上演，演期 2026-09-24 至 2026-09-26，已公布 3 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/momentum/",
    "booking": "https://sydneyfringe.com/events/momentum/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-24",
        "19:30",
        ""
      ],
      [
        "2026-09-25",
        "19:30",
        ""
      ],
      [
        "2026-09-26",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 3 场（2026-09-24 至 2026-09-26）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/03-28-2026-052331-6384.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "the-undead-collective-documentary",
    "title": "The Undead Collective Documentary",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "escac",
    "company": "",
    "start": "2026-09-21",
    "end": "2026-09-21",
    "price": 34.5,
    "priceText": "A$34.5 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 45 分钟",
    "desc": "The Undead Collective Documentary 在East Sydney Community and Arts Centre上演，演期 2026-09-21 至 2026-09-21，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/the-undead-collective-documentary/",
    "booking": "https://sydneyfringe.com/events/the-undead-collective-documentary/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-21",
        "20:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-21 至 2026-09-21）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-26-2026-034317-1063.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "laughs-with-luce",
    "title": "Laughs with Luce",
    "genre": "喜剧",
    "scale": "独立制作",
    "venue": "pridecentre",
    "company": "",
    "start": "2026-09-12",
    "end": "2026-09-12",
    "price": 18,
    "priceText": "A$18 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 70 分钟",
    "desc": "Laughs with Luce 在Inner West Pride Centre上演，演期 2026-09-12 至 2026-09-12，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/laughs-with-luce/",
    "booking": "https://sydneyfringe.com/events/laughs-with-luce/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-12",
        "19:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-12 至 2026-09-12）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Pride Hall",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-13-2026-154643-2759.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "the-dragon-child-and-the-twelve-animals-of-the-zodiac",
    "title": "The Dragon Child and the twelve animals of the Zodiac",
    "genre": "其他",
    "scale": "商业巡演",
    "venue": "sydneyevent",
    "company": "",
    "start": "2026-09-26",
    "end": "2026-09-26",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "",
    "desc": "The Dragon Child and the twelve animals of the Zodiac 在Sydney Event Centre上演，演期 2026-09-26 至 2026-09-26，已公布 2 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://www.ticketmaster.com.au/the-dragon-child-and-the-twelve-pyrmont-26-09-2026/event/130064EFCF6F6D22",
    "booking": "https://www.ticketmaster.com.au/the-dragon-child-and-the-twelve-pyrmont-26-09-2026/event/130064EFCF6F6D22",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-26",
        "14:00",
        ""
      ],
      [
        "2026-09-26",
        "19:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 2 场（2026-09-26 至 2026-09-26）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20"
  },
  {
    "id": "cheek-live-state-of-the-nation-with-hannah-ferguson",
    "title": "CHEEK LIVE: State of the Nation with Hannah Ferguson",
    "genre": "其他",
    "scale": "商业巡演",
    "venue": "state",
    "company": "FANE",
    "start": "2026-10-02",
    "end": "2026-10-02",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "",
    "desc": "CHEEK LIVE: State of the Nation with Hannah Ferguson 在State Theatre上演，演期 2026-10-02 至 2026-10-02，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://www.ticketmaster.com.au/cheek-live-state-of-the-nation-sydney-02-10-2026/event/130064DE84C51CF2",
    "booking": "https://www.ticketmaster.com.au/cheek-live-state-of-the-nation-sydney-02-10-2026/event/130064DE84C51CF2",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-10-02",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-10-02 至 2026-10-02）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "image": "https://cdn.statetheatre.com.au/wp-content/uploads/2026/07/06153154/CheekLive2026_750x750_TF.jpg",
    "imageSource": "https://www.statetheatre.com.au/show-calendar/hannah-ferguson/",
    "imageCredit": "官方宣传图 © State Theatre"
  },
  {
    "id": "mystique-a-journey-beyond-reality",
    "title": "Mystique - A Journey Beyond Reality",
    "genre": "其他",
    "scale": "商业巡演",
    "venue": "state",
    "company": "BOYD PRODUCTIONS",
    "start": "2026-10-10",
    "end": "2026-10-10",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "",
    "desc": "Mystique - A Journey Beyond Reality 在State Theatre上演，演期 2026-10-10 至 2026-10-10，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://www.ticketmaster.com.au/mystique-a-journey-beyond-reality-sydney-10-10-2026/event/130064E3A6003492",
    "booking": "https://www.ticketmaster.com.au/mystique-a-journey-beyond-reality-sydney-10-10-2026/event/130064E3A6003492",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-10-10",
        "18:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-10-10 至 2026-10-10）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "image": "https://cdn.statetheatre.com.au/wp-content/uploads/2025/04/23154705/MYST_750x750_State.jpg",
    "imageSource": "https://www.statetheatre.com.au/show-calendar/mystique/",
    "imageCredit": "官方宣传图 © State Theatre"
  },
  {
    "id": "chris-connor-viva-elvis",
    "title": "CHRIS CONNOR - VIVA ELVIS",
    "genre": "其他",
    "scale": "商业巡演",
    "venue": "state",
    "company": "DOM ARPA PRODUCTIONS",
    "start": "2026-10-11",
    "end": "2026-10-11",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "",
    "desc": "CHRIS CONNOR - VIVA ELVIS 在State Theatre上演，演期 2026-10-11 至 2026-10-11，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://www.ticketmaster.com.au/chris-connor-viva-elvis-sydney-11-10-2026/event/130064A1C7C77240",
    "booking": "https://www.ticketmaster.com.au/chris-connor-viva-elvis-sydney-11-10-2026/event/130064A1C7C77240",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-10-11",
        "19:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-10-11 至 2026-10-11）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "image": "https://cdn.statetheatre.com.au/wp-content/uploads/2026/05/03162118/ChrisC26-750x750-1.jpg",
    "imageSource": "https://www.statetheatre.com.au/show-calendar/viva-elvis/",
    "imageCredit": "官方宣传图 © State Theatre"
  },
  {
    "id": "dance-poem-great-harmony",
    "title": "Dance Poem - Great Harmony",
    "genre": "其他",
    "scale": "商业巡演",
    "venue": "state",
    "company": "Chinese Wisteria Dancing of Sydney",
    "start": "2026-11-01",
    "end": "2026-11-01",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "",
    "desc": "Dance Poem - Great Harmony 在State Theatre上演，演期 2026-11-01 至 2026-11-01，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://www.ticketmaster.com.au/dance-poem-great-harmony-sydney-01-11-2026/event/130065288829227C",
    "booking": "https://www.ticketmaster.com.au/dance-poem-great-harmony-sydney-01-11-2026/event/130065288829227C",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-11-01",
        "19:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-11-01 至 2026-11-01）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "image": "https://cdn.statetheatre.com.au/wp-content/uploads/2026/09/10222640/Website-image-1.jpg",
    "imageSource": "https://www.statetheatre.com.au/show-calendar/golden-harmony/",
    "imageCredit": "官方宣传图 © State Theatre"
  },
  {
    "id": "wes-carr-the-springsteen-songbook-unplugged",
    "title": "Wes Carr - The Springsteen Songbook: Unplugged",
    "genre": "其他",
    "scale": "独立制作",
    "venue": "fools",
    "company": "",
    "start": "2026-09-06",
    "end": "2026-09-06",
    "price": 45,
    "priceText": "A$45 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Wes Carr - The Springsteen Songbook: Unplugged 在Fool's Paradise (Entertainment Quarter)上演，演期 2026-09-06 至 2026-09-06，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/wes-carr-the-springsteen-songbook-unplugged/",
    "booking": "https://sydneyfringe.com/events/wes-carr-the-springsteen-songbook-unplugged/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-06",
        "16:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-06 至 2026-09-06）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "The Virago",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/07-21-2026-113947-8734.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "boomalli-on-the-fringes",
    "title": "Boomalli: On the Fringes",
    "genre": "其他",
    "scale": "独立制作",
    "venue": "fringeontherocks",
    "company": "",
    "start": "2026-09-23",
    "end": "2026-09-27",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "约 420 分钟",
    "desc": "Boomalli: On the Fringes 在Fringe on The Rocks上演，演期 2026-09-23 至 2026-09-27，已公布 5 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/boomalli-on-the-fringes/",
    "booking": "https://sydneyfringe.com/events/boomalli-on-the-fringes/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-23",
        "10:00",
        ""
      ],
      [
        "2026-09-24",
        "10:00",
        ""
      ],
      [
        "2026-09-25",
        "10:00",
        ""
      ],
      [
        "2026-09-26",
        "10:00",
        ""
      ],
      [
        "2026-09-27",
        "10:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 5 场（2026-09-23 至 2026-09-27）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "6-8 Atherden St, Gallery",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/07-09-2026-065451-1619.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "spectrum",
    "title": "Spectrum",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "erskineville",
    "company": "",
    "start": "2026-09-19",
    "end": "2026-09-19",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 55 分钟",
    "desc": "Spectrum 在Erskineville Town Hall上演，演期 2026-09-19 至 2026-09-19，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/spectrum/",
    "booking": "https://sydneyfringe.com/events/spectrum/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-19",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-19 至 2026-09-19）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Emerging Artist Share House - The Living Room",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-29-2026-100801-7803.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "play",
    "title": "Play.",
    "genre": "其他",
    "scale": "独立制作",
    "venue": "erskineville",
    "company": "",
    "start": "2026-09-19",
    "end": "2026-09-19",
    "price": 35,
    "priceText": "A$35 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Play. 在Erskineville Town Hall上演，演期 2026-09-19 至 2026-09-19，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/play/",
    "booking": "https://sydneyfringe.com/events/play/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-19",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-19 至 2026-09-19）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Emerging Artist Share House - The Spare Room",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-27-2026-090439-7409.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "psycho-or-psychic",
    "title": "Psycho or Psychic",
    "genre": "其他",
    "scale": "独立制作",
    "venue": "erskineville",
    "company": "",
    "start": "2026-09-19",
    "end": "2026-09-19",
    "price": 37,
    "priceText": "A$37 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Psycho or Psychic 在Erskineville Town Hall上演，演期 2026-09-19 至 2026-09-19，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/psycho-or-psychic/",
    "booking": "https://sydneyfringe.com/events/psycho-or-psychic/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-19",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-19 至 2026-09-19）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Emerging Artist Share House - The Office",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-23-2026-040437-4644.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "the-worst-of-us",
    "title": "The worst of us.",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "erskineville",
    "company": "",
    "start": "2026-09-12",
    "end": "2026-09-12",
    "price": 35,
    "priceText": "A$35 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "The worst of us. 在Erskineville Town Hall上演，演期 2026-09-12 至 2026-09-12，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/the-worst-of-us/",
    "booking": "https://sydneyfringe.com/events/the-worst-of-us/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-12",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-12 至 2026-09-12）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Emerging Artist Share House - The Spare Room",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-27-2026-095519-9696.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "gia-ophelia",
    "title": "Gia Ophelia",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "potterylane",
    "company": "",
    "start": "2026-09-25",
    "end": "2026-09-27",
    "price": 44,
    "priceText": "A$44 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Gia Ophelia 在Pottery Lane Performance Space上演，演期 2026-09-25 至 2026-09-27，已公布 2 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/gia-ophelia/",
    "booking": "https://sydneyfringe.com/events/gia-ophelia/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-25",
        "20:00",
        ""
      ],
      [
        "2026-09-27",
        "20:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 2 场（2026-09-25 至 2026-09-27）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/07-13-2026-213953-9800.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "piss-be-with-you",
    "title": "Piss Be With You",
    "genre": "其他",
    "scale": "独立制作",
    "venue": "eternity",
    "company": "",
    "start": "2026-09-11",
    "end": "2026-09-11",
    "price": 45,
    "priceText": "A$45 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Piss Be With You 在Eternity Playhouse上演，演期 2026-09-11 至 2026-09-11，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/piss-be-with-you/",
    "booking": "https://sydneyfringe.com/events/piss-be-with-you/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-11",
        "20:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-11 至 2026-09-11）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Off Broadway Hub",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-29-2026-071622-7836.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "escape-from-flamingo-house",
    "title": "Escape From Flamingo House",
    "genre": "其他",
    "scale": "独立制作",
    "venue": "marrickville",
    "company": "",
    "start": "2026-09-22",
    "end": "2026-09-30",
    "price": 220,
    "priceText": "A$220 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 75 分钟",
    "desc": "Escape From Flamingo House 在Marrickville Town Hall上演，演期 2026-09-22 至 2026-09-30，已公布 25 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/escape-from-flamingo-house/",
    "booking": "https://sydneyfringe.com/events/escape-from-flamingo-house/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-22",
        "17:15",
        ""
      ],
      [
        "2026-09-22",
        "20:00",
        ""
      ],
      [
        "2026-09-23",
        "17:15",
        ""
      ],
      [
        "2026-09-23",
        "20:00",
        ""
      ],
      [
        "2026-09-24",
        "17:15",
        ""
      ],
      [
        "2026-09-24",
        "20:00",
        ""
      ],
      [
        "2026-09-25",
        "10:30",
        ""
      ],
      [
        "2026-09-25",
        "12:30",
        ""
      ],
      [
        "2026-09-25",
        "15:15",
        ""
      ],
      [
        "2026-09-25",
        "17:15",
        ""
      ],
      [
        "2026-09-25",
        "20:00",
        ""
      ],
      [
        "2026-09-26",
        "10:30",
        ""
      ],
      [
        "2026-09-26",
        "12:30",
        ""
      ],
      [
        "2026-09-26",
        "15:15",
        ""
      ],
      [
        "2026-09-26",
        "17:15",
        ""
      ],
      [
        "2026-09-26",
        "20:00",
        ""
      ],
      [
        "2026-09-27",
        "10:30",
        ""
      ],
      [
        "2026-09-27",
        "12:30",
        ""
      ],
      [
        "2026-09-27",
        "15:15",
        ""
      ],
      [
        "2026-09-27",
        "17:15",
        ""
      ],
      [
        "2026-09-27",
        "20:00",
        ""
      ],
      [
        "2026-09-29",
        "17:15",
        ""
      ],
      [
        "2026-09-29",
        "20:00",
        ""
      ],
      [
        "2026-09-30",
        "17:15",
        ""
      ],
      [
        "2026-09-30",
        "20:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 25 场（2026-09-22 至 2026-09-30）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Festival Hub - Flamingo Room",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-16-2026-165129-6758.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "storyteller",
    "title": "Storyteller",
    "genre": "其他",
    "scale": "独立制作",
    "venue": "erskineville",
    "company": "",
    "start": "2026-09-05",
    "end": "2026-09-05",
    "price": 27,
    "priceText": "A$27 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 55 分钟",
    "desc": "Storyteller 在Erskineville Town Hall上演，演期 2026-09-05 至 2026-09-05，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/storyteller/",
    "booking": "https://sydneyfringe.com/events/storyteller/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-05",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-05 至 2026-09-05）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Emerging Artist Share House - The Office",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/03-30-2026-065925-9508.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "odie",
    "title": "ODIE",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "erskineville",
    "company": "",
    "start": "2026-09-19",
    "end": "2026-09-19",
    "price": 27,
    "priceText": "A$27 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "ODIE 在Erskineville Town Hall上演，演期 2026-09-19 至 2026-09-19，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/odie/",
    "booking": "https://sydneyfringe.com/events/odie/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-19",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-19 至 2026-09-19）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Emerging Artist Share House - The Boom Boom Room",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/03-04-2026-045327-8458.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "the-last-single-girl-in-sydney",
    "title": "The Last Single Girl in Sydney",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "erskineville",
    "company": "",
    "start": "2026-09-12",
    "end": "2026-09-12",
    "price": 30,
    "priceText": "A$30 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "The Last Single Girl in Sydney 在Erskineville Town Hall上演，演期 2026-09-12 至 2026-09-12，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/the-last-single-girl-in-sydney/",
    "booking": "https://sydneyfringe.com/events/the-last-single-girl-in-sydney/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-12",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-12 至 2026-09-12）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Emerging Artist Share House - The Living Room",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/07-07-2026-110619-3451.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "frumpus-landed",
    "title": "Frumpus - Landed",
    "genre": "其他",
    "scale": "独立制作",
    "venue": "pact",
    "company": "",
    "start": "2026-09-12",
    "end": "2026-09-12",
    "price": 35,
    "priceText": "A$35 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "Frumpus - Landed 在PACT Centre for Emerging Artists上演，演期 2026-09-12 至 2026-09-12，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/landed/",
    "booking": "https://sydneyfringe.com/events/landed/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-12",
        "20:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-12 至 2026-09-12）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Made In Hub",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-31-2026-104056-4607.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "this-was-all-a-fruitless-endeavour-really",
    "title": "This Was All A Fruitless Endeavour Really...",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "erskineville",
    "company": "",
    "start": "2026-09-05",
    "end": "2026-09-05",
    "price": 15,
    "priceText": "A$15 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "This Was All A Fruitless Endeavour Really... 在Erskineville Town Hall上演，演期 2026-09-05 至 2026-09-05，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/this-was-all-a-fruitless-endeavour-really/",
    "booking": "https://sydneyfringe.com/events/this-was-all-a-fruitless-endeavour-really/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-05",
        "21:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-05 至 2026-09-05）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Emerging Artist Share House - The Living Room",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-23-2026-050221-2497.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "a-gum-tree-on-summer-road",
    "title": "A Gum Tree on Summer Road",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "qtopia",
    "company": "",
    "start": "2026-09-19",
    "end": "2026-09-19",
    "price": 35,
    "priceText": "A$35 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "A Gum Tree on Summer Road 在Qtopia Sydney上演，演期 2026-09-19 至 2026-09-19，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/a-gum-tree-on-summer-road/",
    "booking": "https://sydneyfringe.com/events/a-gum-tree-on-summer-road/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-19",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-19 至 2026-09-19）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Queer Hub - The Loading Dock",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/03-27-2026-053235-5356.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "growing-pains-teaching-body",
    "title": "Growing Pains: Teaching Body",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "erskineville",
    "company": "",
    "start": "2026-09-19",
    "end": "2026-09-19",
    "price": 27,
    "priceText": "A$27 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "Growing Pains: Teaching Body 在Erskineville Town Hall上演，演期 2026-09-19 至 2026-09-19，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/growing-pains-teaching-body/",
    "booking": "https://sydneyfringe.com/events/growing-pains-teaching-body/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-19",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-19 至 2026-09-19）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Emerging Artist Share House - The Boom Boom Room",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-11-2026-080316-7211.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "saltwater-girls",
    "title": "Saltwater Girls",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "erskineville",
    "company": "",
    "start": "2026-09-12",
    "end": "2026-09-12",
    "price": 28,
    "priceText": "A$28 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "Saltwater Girls 在Erskineville Town Hall上演，演期 2026-09-12 至 2026-09-12，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/saltwater-girls/",
    "booking": "https://sydneyfringe.com/events/saltwater-girls/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-12",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-12 至 2026-09-12）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Emerging Artist Share House - The Boom Boom Room",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-31-2026-020955-9770.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "ichor",
    "title": "ICHOR",
    "genre": "其他",
    "scale": "独立制作",
    "venue": "pact",
    "company": "",
    "start": "2026-09-12",
    "end": "2026-09-12",
    "price": 35,
    "priceText": "A$35 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "ICHOR 在PACT Centre for Emerging Artists上演，演期 2026-09-12 至 2026-09-12，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/ichor/",
    "booking": "https://sydneyfringe.com/events/ichor/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-12",
        "18:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-12 至 2026-09-12）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Made In Hub",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-19-2026-022306-5461.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "demo",
    "title": "DEMO",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "qtopia",
    "company": "",
    "start": "2026-09-23",
    "end": "2026-09-25",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 45 分钟",
    "desc": "DEMO 在Qtopia Sydney上演，演期 2026-09-23 至 2026-09-25，已公布 2 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/demo/",
    "booking": "https://sydneyfringe.com/events/demo/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-23",
        "18:00",
        ""
      ],
      [
        "2026-09-25",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 2 场（2026-09-23 至 2026-09-25）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Queer Hub - The Substation",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-25-2026-092020-8411.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "stage-soldiers",
    "title": "Stage Soldiers",
    "genre": "其他",
    "scale": "独立制作",
    "venue": "pyt",
    "company": "",
    "start": "2026-09-05",
    "end": "2026-09-05",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Stage Soldiers 在PYT Fairfield上演，演期 2026-09-05 至 2026-09-05，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/stage-soldiers/",
    "booking": "https://sydneyfringe.com/events/stage-soldiers/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-05",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-05 至 2026-09-05）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-25-2026-114331-2453.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "sprfrk",
    "title": "SPRFRK",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "erskineville",
    "company": "",
    "start": "2026-09-22",
    "end": "2026-09-26",
    "price": 35,
    "priceText": "A$35 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "SPRFRK 在Erskineville Town Hall上演，演期 2026-09-22 至 2026-09-26，已公布 5 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/sprfrk/",
    "booking": "https://sydneyfringe.com/events/sprfrk/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-22",
        "19:30",
        ""
      ],
      [
        "2026-09-23",
        "19:30",
        ""
      ],
      [
        "2026-09-24",
        "19:30",
        ""
      ],
      [
        "2026-09-25",
        "19:30",
        ""
      ],
      [
        "2026-09-26",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 5 场（2026-09-22 至 2026-09-26）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Emerging Artist Share House - The Office",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-25-2026-043330-8023.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "the-happiest-ending",
    "title": "The Happiest Ending",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "erskineville",
    "company": "",
    "start": "2026-09-12",
    "end": "2026-09-12",
    "price": 27,
    "priceText": "A$27 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "The Happiest Ending 在Erskineville Town Hall上演，演期 2026-09-12 至 2026-09-12，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/the-happiest-ending/",
    "booking": "https://sydneyfringe.com/events/the-happiest-ending/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-12",
        "21:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-12 至 2026-09-12）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Emerging Artist Share House - The Spare Room",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-31-2026-111403-5017.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "qfwfq",
    "title": "QFWFQ",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "qtopia",
    "company": "",
    "start": "2026-09-22",
    "end": "2026-09-26",
    "price": 30,
    "priceText": "A$30 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "QFWFQ 在Qtopia Sydney上演，演期 2026-09-22 至 2026-09-26，已公布 5 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/qfwfq/",
    "booking": "https://sydneyfringe.com/events/qfwfq/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-22",
        "19:30",
        ""
      ],
      [
        "2026-09-23",
        "19:30",
        ""
      ],
      [
        "2026-09-24",
        "19:30",
        ""
      ],
      [
        "2026-09-25",
        "19:30",
        ""
      ],
      [
        "2026-09-26",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 5 场（2026-09-22 至 2026-09-26）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Queer Hub - The Substation",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/07-03-2026-072617-9247.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "motion-sickness",
    "title": "Motion Sickness",
    "genre": "其他",
    "scale": "专业制作",
    "venue": "newtheatre",
    "company": "",
    "start": "2026-09-19",
    "end": "2026-09-19",
    "price": 38,
    "priceText": "A$38 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Motion Sickness 在New Theatre上演，演期 2026-09-19 至 2026-09-19，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/motion-sickness/",
    "booking": "https://sydneyfringe.com/events/motion-sickness/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-19",
        "20:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-19 至 2026-09-19）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Touring Hub",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-29-2026-073123-5023.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "son-of-hercules",
    "title": "Son of Hercules",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "erskineville",
    "company": "",
    "start": "2026-09-22",
    "end": "2026-09-26",
    "price": 27,
    "priceText": "A$27 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 45 分钟",
    "desc": "Son of Hercules 在Erskineville Town Hall上演，演期 2026-09-22 至 2026-09-26，已公布 5 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/son-of-hercules/",
    "booking": "https://sydneyfringe.com/events/son-of-hercules/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-22",
        "18:00",
        ""
      ],
      [
        "2026-09-23",
        "18:00",
        ""
      ],
      [
        "2026-09-24",
        "18:00",
        ""
      ],
      [
        "2026-09-25",
        "18:00",
        ""
      ],
      [
        "2026-09-26",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 5 场（2026-09-22 至 2026-09-26）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Emerging Artist Share House - The Office",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-20-2026-145633-7184.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "waiting-for-chloe",
    "title": "Waiting for Chloe",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "erskineville",
    "company": "",
    "start": "2026-09-24",
    "end": "2026-09-25",
    "price": 30,
    "priceText": "A$30 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 45 分钟",
    "desc": "Waiting for Chloe 在Erskineville Town Hall上演，演期 2026-09-24 至 2026-09-25，已公布 2 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/waiting-for-chloe/",
    "booking": "https://sydneyfringe.com/events/waiting-for-chloe/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-24",
        "20:00",
        ""
      ],
      [
        "2026-09-25",
        "20:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 2 场（2026-09-24 至 2026-09-25）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Emerging Artist Share House - The Office",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/07-01-2026-054130-1765.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "gamer-jazz",
    "title": "Gamer Jazz",
    "genre": "其他",
    "scale": "独立制作",
    "venue": "eternity",
    "company": "",
    "start": "2026-09-04",
    "end": "2026-09-04",
    "price": 45,
    "priceText": "A$45 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Gamer Jazz 在Eternity Playhouse上演，演期 2026-09-04 至 2026-09-04，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/gamer-jazz/",
    "booking": "https://sydneyfringe.com/events/gamer-jazz/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-04",
        "20:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-04 至 2026-09-04）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Off Broadway Hub",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-06-2026-044413-9387.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "all-things-must-pass-a-play-about-the-beatles",
    "title": "ALL THINGS MUST PASS: A play about The Beatles",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "potterylane",
    "company": "",
    "start": "2026-09-13",
    "end": "2026-09-13",
    "price": 35,
    "priceText": "A$35 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 90 分钟",
    "desc": "ALL THINGS MUST PASS: A play about The Beatles 在Pottery Lane Performance Space上演，演期 2026-09-13 至 2026-09-13，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/all-things-must-pass-a-play-about-the-beatles/",
    "booking": "https://sydneyfringe.com/events/all-things-must-pass-a-play-about-the-beatles/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-13",
        "15:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-13 至 2026-09-13）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/03-09-2026-071412-3637.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "breaking-point-an-improvised-revolution",
    "title": "Breaking Point: An Improvised Revolution",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "factory",
    "company": "",
    "start": "2026-09-04",
    "end": "2026-09-04",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 55 分钟",
    "desc": "Breaking Point: An Improvised Revolution 在Factory Theatre上演，演期 2026-09-04 至 2026-09-04，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/breaking-point-an-improvised-revolution/",
    "booking": "https://sydneyfringe.com/events/breaking-point-an-improvised-revolution/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-04",
        "19:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-04 至 2026-09-04）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/07-22-2026-082557-8628.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "drug-baby",
    "title": "Drug Baby",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "erskineville",
    "company": "",
    "start": "2026-09-12",
    "end": "2026-09-12",
    "price": 35,
    "priceText": "A$35 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Drug Baby 在Erskineville Town Hall上演，演期 2026-09-12 至 2026-09-12，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/drug-baby/",
    "booking": "https://sydneyfringe.com/events/drug-baby/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-12",
        "21:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-12 至 2026-09-12）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Emerging Artist Share House - The Boom Boom Room",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/07-07-2026-102523-8956.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "she-ll-be-right",
    "title": "She'll Be Right",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "erskineville",
    "company": "",
    "start": "2026-09-22",
    "end": "2026-09-26",
    "price": 27.5,
    "priceText": "A$27.5 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 55 分钟",
    "desc": "She'll Be Right 在Erskineville Town Hall上演，演期 2026-09-22 至 2026-09-26，已公布 5 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/shell-be-right/",
    "booking": "https://sydneyfringe.com/events/shell-be-right/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-22",
        "18:00",
        ""
      ],
      [
        "2026-09-23",
        "18:00",
        ""
      ],
      [
        "2026-09-24",
        "18:00",
        ""
      ],
      [
        "2026-09-25",
        "18:00",
        ""
      ],
      [
        "2026-09-26",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 5 场（2026-09-22 至 2026-09-26）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Emerging Artist Share House - The Living Room",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-28-2026-043336-6811.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "sexretary-tales-from-a-red-light-receptionist",
    "title": "SEXretary: Tales from a Red Light Receptionist",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "erskineville",
    "company": "",
    "start": "2026-09-12",
    "end": "2026-09-12",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 30 分钟",
    "desc": "SEXretary: Tales from a Red Light Receptionist 在Erskineville Town Hall上演，演期 2026-09-12 至 2026-09-12，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/sexretary-tales-from-a-red-light-receptionist/",
    "booking": "https://sydneyfringe.com/events/sexretary-tales-from-a-red-light-receptionist/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-12",
        "21:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-12 至 2026-09-12）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Emerging Artist Share House - The Office",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-30-2026-024406-9075.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "midnight-strangers-shinjuku-to-kings-cross",
    "title": "Midnight Strangers - Shinjuku to Kings Cross",
    "genre": "其他",
    "scale": "独立制作",
    "venue": "seandollys",
    "company": "",
    "start": "2026-09-05",
    "end": "2026-09-05",
    "price": 44.95,
    "priceText": "A$44.95 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 90 分钟",
    "desc": "Midnight Strangers - Shinjuku to Kings Cross 在Sean & Dolly's上演，演期 2026-09-05 至 2026-09-05，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/midnight-strangers/",
    "booking": "https://sydneyfringe.com/events/midnight-strangers/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-05",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-05 至 2026-09-05）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-26-2026-053950-9561.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "chair",
    "title": "Chair",
    "genre": "其他",
    "scale": "独立制作",
    "venue": "shepherd21",
    "company": "",
    "start": "2026-09-12",
    "end": "2026-09-12",
    "price": 30,
    "priceText": "A$30 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Chair 在21 Shepherd上演，演期 2026-09-12 至 2026-09-12，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/chair/",
    "booking": "https://sydneyfringe.com/events/chair/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-12",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-12 至 2026-09-12）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-25-2026-033013-3373.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "nepoberry",
    "title": "NEPOBERRY",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "qtopia",
    "company": "",
    "start": "2026-09-05",
    "end": "2026-09-05",
    "price": 35,
    "priceText": "A$35 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "NEPOBERRY 在Qtopia Sydney上演，演期 2026-09-05 至 2026-09-05，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/nepoberry/",
    "booking": "https://sydneyfringe.com/events/nepoberry/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-05",
        "21:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-05 至 2026-09-05）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Queer Hub - The Loading Dock",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/07-17-2026-052521-6180.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "sext-me-i-m-bored",
    "title": "Sext Me, I'm Bored",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "qtopia",
    "company": "",
    "start": "2026-09-12",
    "end": "2026-09-12",
    "price": 29,
    "priceText": "A$29 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 55 分钟",
    "desc": "Sext Me, I'm Bored 在Qtopia Sydney上演，演期 2026-09-12 至 2026-09-12，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/sext-me-im-bored/",
    "booking": "https://sydneyfringe.com/events/sext-me-im-bored/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-12",
        "21:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-12 至 2026-09-12）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Queer Hub - The Loading Dock",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-29-2026-085140-6963.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "colossus",
    "title": "COLOSSUS",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "erskineville",
    "company": "",
    "start": "2026-09-19",
    "end": "2026-09-19",
    "price": 27,
    "priceText": "A$27 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 40 分钟",
    "desc": "COLOSSUS 在Erskineville Town Hall上演，演期 2026-09-19 至 2026-09-19，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/colossus/",
    "booking": "https://sydneyfringe.com/events/colossus/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-19",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-19 至 2026-09-19）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Emerging Artist Share House - The Office",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/03-27-2026-043111-1188.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "love-thy-hater",
    "title": "Love Thy Hater",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "flightpath",
    "company": "",
    "start": "2026-09-22",
    "end": "2026-09-26",
    "price": 30,
    "priceText": "A$30 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 100 分钟",
    "desc": "Love Thy Hater 在Flight Path Theatre上演，演期 2026-09-22 至 2026-09-26，已公布 5 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/love-thy-hater/",
    "booking": "https://sydneyfringe.com/events/love-thy-hater/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-22",
        "19:00",
        ""
      ],
      [
        "2026-09-23",
        "19:00",
        ""
      ],
      [
        "2026-09-24",
        "19:00",
        ""
      ],
      [
        "2026-09-25",
        "19:00",
        ""
      ],
      [
        "2026-09-26",
        "19:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 5 场（2026-09-22 至 2026-09-26）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/07-13-2026-005741-4582.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "you-re-so-sensitive",
    "title": "You're so sensitive",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "improv",
    "company": "",
    "start": "2026-09-25",
    "end": "2026-09-27",
    "price": 20,
    "priceText": "A$20 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "You're so sensitive 在Improv Theatre Sydney上演，演期 2026-09-25 至 2026-09-27，已公布 3 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/youre-so-sensitive/",
    "booking": "https://sydneyfringe.com/events/youre-so-sensitive/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-25",
        "19:00",
        ""
      ],
      [
        "2026-09-26",
        "19:00",
        ""
      ],
      [
        "2026-09-27",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 3 场（2026-09-25 至 2026-09-27）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-29-2026-041616-5835.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "zeibekiko",
    "title": "Zeibekiko",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "erskineville",
    "company": "",
    "start": "2026-09-22",
    "end": "2026-09-26",
    "price": 28,
    "priceText": "A$28 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Zeibekiko 在Erskineville Town Hall上演，演期 2026-09-22 至 2026-09-26，已公布 5 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/zeibekiko/",
    "booking": "https://sydneyfringe.com/events/zeibekiko/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-22",
        "19:30",
        ""
      ],
      [
        "2026-09-23",
        "19:30",
        ""
      ],
      [
        "2026-09-24",
        "19:30",
        ""
      ],
      [
        "2026-09-25",
        "19:30",
        ""
      ],
      [
        "2026-09-26",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 5 场（2026-09-22 至 2026-09-26）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Emerging Artist Share House - The Boom Boom Room",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-28-2026-125328-1000.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "the-devil-in-her-undies",
    "title": "The Devil in her Undies",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "qtopia",
    "company": "",
    "start": "2026-09-05",
    "end": "2026-09-05",
    "price": 30,
    "priceText": "A$30 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "The Devil in her Undies 在Qtopia Sydney上演，演期 2026-09-05 至 2026-09-05，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/the-devil-in-her-undies/",
    "booking": "https://sydneyfringe.com/events/the-devil-in-her-undies/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-05",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-05 至 2026-09-05）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Queer Hub - The Loading Dock",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/08-27-2026-021208-9967.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "aquatic-affairs",
    "title": "Aquatic Affairs",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "eternity",
    "company": "",
    "start": "2026-09-19",
    "end": "2026-09-19",
    "price": 45,
    "priceText": "A$45 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Aquatic Affairs 在Eternity Playhouse上演，演期 2026-09-19 至 2026-09-19，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/aquatic-affairs/",
    "booking": "https://sydneyfringe.com/events/aquatic-affairs/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-19",
        "18:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-19 至 2026-09-19）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Off Broadway Hub",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-08-2026-135606-9235.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "plastic-ono-band-rewired",
    "title": "Plastic Ono Band: Rewired",
    "genre": "其他",
    "scale": "独立制作",
    "venue": "marrickville",
    "company": "",
    "start": "2026-09-24",
    "end": "2026-09-26",
    "price": 28,
    "priceText": "A$28 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 55 分钟",
    "desc": "Plastic Ono Band: Rewired 在Marrickville Town Hall上演，演期 2026-09-24 至 2026-09-26，已公布 3 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/plastic-ono-band-rewired/",
    "booking": "https://sydneyfringe.com/events/plastic-ono-band-rewired/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-24",
        "18:00",
        ""
      ],
      [
        "2026-09-25",
        "18:00",
        ""
      ],
      [
        "2026-09-26",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 3 场（2026-09-24 至 2026-09-26）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Festival Hub - The Safe Room",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-13-2026-054306-6815.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "no-pho-no-faan",
    "title": "No pho No faan",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "erskineville",
    "company": "",
    "start": "2026-09-12",
    "end": "2026-09-12",
    "price": 27,
    "priceText": "A$27 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "No pho No faan 在Erskineville Town Hall上演，演期 2026-09-12 至 2026-09-12，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/no-pho-no-faan/",
    "booking": "https://sydneyfringe.com/events/no-pho-no-faan/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-12",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-12 至 2026-09-12）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Emerging Artist Share House - The Office",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-24-2026-120417-1310.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "foul-mouthed-coot-permanent-as-party-balloons",
    "title": "Foul mouthed coot, permanent as party balloons.",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "qtopia",
    "company": "",
    "start": "2026-09-19",
    "end": "2026-09-19",
    "price": 27,
    "priceText": "A$27 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 70 分钟",
    "desc": "Foul mouthed coot, permanent as party balloons. 在Qtopia Sydney上演，演期 2026-09-19 至 2026-09-19，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/foul-mouthed-coot-permanent-as-party-balloons/",
    "booking": "https://sydneyfringe.com/events/foul-mouthed-coot-permanent-as-party-balloons/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-19",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-19 至 2026-09-19）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Queer Hub - The Substation",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/07-06-2026-023227-2424.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "come-watch-me-do-stuff",
    "title": "Come Watch Me Do Stuff",
    "genre": "其他",
    "scale": "独立制作",
    "venue": "erskineville",
    "company": "",
    "start": "2026-09-19",
    "end": "2026-09-19",
    "price": 18,
    "priceText": "A$18 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Come Watch Me Do Stuff 在Erskineville Town Hall上演，演期 2026-09-19 至 2026-09-19，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/come-watch-me-do-stuff/",
    "booking": "https://sydneyfringe.com/events/come-watch-me-do-stuff/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-19",
        "21:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-19 至 2026-09-19）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Emerging Artist Share House - The Office",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-29-2026-043729-2548.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "algorithm-of-us",
    "title": "Algorithm of Us",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "potterylane",
    "company": "",
    "start": "2026-09-19",
    "end": "2026-09-19",
    "price": 59,
    "priceText": "A$59 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 90 分钟",
    "desc": "Algorithm of Us 在Pottery Lane Performance Space上演，演期 2026-09-19 至 2026-09-19，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/algorithm-of-us/",
    "booking": "https://sydneyfringe.com/events/algorithm-of-us/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-19",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-19 至 2026-09-19）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/08-04-2026-094156-7443.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "spoken-word-artist-presents-i-am-not-okay",
    "title": "Spoken Word Artist Presents: I Am Not Okay",
    "genre": "其他",
    "scale": "独立制作",
    "venue": "newtownhotel",
    "company": "",
    "start": "2026-09-22",
    "end": "2026-09-27",
    "price": 30,
    "priceText": "A$30 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Spoken Word Artist Presents: I Am Not Okay 在Newtown Hotel上演，演期 2026-09-22 至 2026-09-27，已公布 6 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/spoken-word-artist-presents-i-am-not-okay/",
    "booking": "https://sydneyfringe.com/events/spoken-word-artist-presents-i-am-not-okay/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-22",
        "18:00",
        ""
      ],
      [
        "2026-09-23",
        "18:00",
        ""
      ],
      [
        "2026-09-24",
        "18:00",
        ""
      ],
      [
        "2026-09-25",
        "18:00",
        ""
      ],
      [
        "2026-09-26",
        "18:00",
        ""
      ],
      [
        "2026-09-27",
        "17:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 6 场（2026-09-22 至 2026-09-27）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-31-2026-143257-8808.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "an-augmentation-of-sitar-by-ravi",
    "title": "An Augmentation Of Sitar By Ravi",
    "genre": "其他",
    "scale": "独立制作",
    "venue": "potterylane",
    "company": "",
    "start": "2026-09-25",
    "end": "2026-09-27",
    "price": 40,
    "priceText": "A$40 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 55 分钟",
    "desc": "An Augmentation Of Sitar By Ravi 在Pottery Lane Performance Space上演，演期 2026-09-25 至 2026-09-27，已公布 2 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/an-augmentation-of-sitar-by-ravi/",
    "booking": "https://sydneyfringe.com/events/an-augmentation-of-sitar-by-ravi/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-25",
        "18:30",
        ""
      ],
      [
        "2026-09-27",
        "18:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 2 场（2026-09-25 至 2026-09-27）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-04-2026-104031-5265.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "pigeon",
    "title": "Pigeon",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "qtopia",
    "company": "",
    "start": "2026-09-19",
    "end": "2026-09-19",
    "price": 33,
    "priceText": "A$33 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 55 分钟",
    "desc": "Pigeon 在Qtopia Sydney上演，演期 2026-09-19 至 2026-09-19，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/pigeon/",
    "booking": "https://sydneyfringe.com/events/pigeon/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-19",
        "21:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-19 至 2026-09-19）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Queer Hub - The Substation",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-29-2026-122223-6795.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "empire-strikes-up-the-band",
    "title": "Empire Strikes up the Band",
    "genre": "其他",
    "scale": "独立制作",
    "venue": "eternity",
    "company": "",
    "start": "2026-09-05",
    "end": "2026-09-05",
    "price": 45,
    "priceText": "A$45 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Empire Strikes up the Band 在Eternity Playhouse上演，演期 2026-09-05 至 2026-09-05，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/empire-strikes-up-the-band/",
    "booking": "https://sydneyfringe.com/events/empire-strikes-up-the-band/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-05",
        "20:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-05 至 2026-09-05）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Off Broadway Hub",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-06-2026-025140-1178.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "plain-bad-heroine",
    "title": "Plain Bad Heroine",
    "genre": "其他",
    "scale": "独立制作",
    "venue": "studioone",
    "company": "",
    "start": "2026-09-23",
    "end": "2026-09-26",
    "price": 30,
    "priceText": "A$30 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 45 分钟",
    "desc": "Plain Bad Heroine 在Studio One (UNSW)上演，演期 2026-09-23 至 2026-09-26，已公布 4 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/plain-bad-heroine/",
    "booking": "https://sydneyfringe.com/events/plain-bad-heroine/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-23",
        "18:30",
        ""
      ],
      [
        "2026-09-24",
        "18:30",
        ""
      ],
      [
        "2026-09-25",
        "18:30",
        ""
      ],
      [
        "2026-09-26",
        "18:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 4 场（2026-09-23 至 2026-09-26）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-23-2026-050022-7351.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "kurtformance-art",
    "title": "Kurtformance Art",
    "genre": "其他",
    "scale": "独立制作",
    "venue": "erskineville",
    "company": "",
    "start": "2026-09-22",
    "end": "2026-09-26",
    "price": 30,
    "priceText": "A$30 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "Kurtformance Art 在Erskineville Town Hall上演，演期 2026-09-22 至 2026-09-26，已公布 5 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/kurtformance-art/",
    "booking": "https://sydneyfringe.com/events/kurtformance-art/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-22",
        "21:00",
        ""
      ],
      [
        "2026-09-23",
        "21:00",
        ""
      ],
      [
        "2026-09-24",
        "21:00",
        ""
      ],
      [
        "2026-09-25",
        "21:00",
        ""
      ],
      [
        "2026-09-26",
        "21:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 5 场（2026-09-22 至 2026-09-26）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Emerging Artist Share House - The Boom Boom Room",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-16-2026-121505-2419.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "the-sleepover",
    "title": "THE SLEEPOVER",
    "genre": "其他",
    "scale": "独立制作",
    "venue": "studioone",
    "company": "",
    "start": "2026-09-23",
    "end": "2026-09-26",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "THE SLEEPOVER 在Studio One (UNSW)上演，演期 2026-09-23 至 2026-09-26，已公布 4 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/the-sleepover/",
    "booking": "https://sydneyfringe.com/events/the-sleepover/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-23",
        "20:00",
        ""
      ],
      [
        "2026-09-24",
        "20:00",
        ""
      ],
      [
        "2026-09-25",
        "20:00",
        ""
      ],
      [
        "2026-09-26",
        "20:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 4 场（2026-09-23 至 2026-09-26）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-22-2026-134049-8718.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "banj-o-clock-hosted-by-klezmer-valley-girls",
    "title": "Banj-O'Clock hosted by Klezmer Valley Girls",
    "genre": "其他",
    "scale": "独立制作",
    "venue": "seandollys",
    "company": "",
    "start": "2026-09-24",
    "end": "2026-09-24",
    "price": 30,
    "priceText": "A$30 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 240 分钟",
    "desc": "Banj-O'Clock hosted by Klezmer Valley Girls 在Sean & Dolly's上演，演期 2026-09-24 至 2026-09-24，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/banj-oclock-hosted-by-klezmer-valley-girls/",
    "booking": "https://sydneyfringe.com/events/banj-oclock-hosted-by-klezmer-valley-girls/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-24",
        "19:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-24 至 2026-09-24）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-29-2026-081913-3594.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "they-come-to-watch-me-die",
    "title": "They Come To Watch Me Die.",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "erskineville",
    "company": "",
    "start": "2026-09-05",
    "end": "2026-09-05",
    "price": 27,
    "priceText": "A$27 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "They Come To Watch Me Die. 在Erskineville Town Hall上演，演期 2026-09-05 至 2026-09-05，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/they-come-to-watch-me-die/",
    "booking": "https://sydneyfringe.com/events/they-come-to-watch-me-die/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-05",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-05 至 2026-09-05）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Emerging Artist Share House - The Office",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-01-2026-024909-1895.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "basement-spaceman-apollo-17-3-days-on-the-moon",
    "title": "Basement Spaceman : Apollo 17 (3 Days On The Moon)",
    "genre": "其他",
    "scale": "独立制作",
    "venue": "marrickville",
    "company": "",
    "start": "2026-09-22",
    "end": "2026-09-26",
    "price": 27,
    "priceText": "A$27 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "Basement Spaceman : Apollo 17 (3 Days On The Moon) 在Marrickville Town Hall上演，演期 2026-09-22 至 2026-09-26，已公布 5 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/basement-spaceman-apollo-17-3-days-on-the-moon/",
    "booking": "https://sydneyfringe.com/events/basement-spaceman-apollo-17-3-days-on-the-moon/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-22",
        "21:00",
        ""
      ],
      [
        "2026-09-23",
        "21:00",
        ""
      ],
      [
        "2026-09-24",
        "21:00",
        ""
      ],
      [
        "2026-09-25",
        "21:00",
        ""
      ],
      [
        "2026-09-26",
        "21:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 5 场（2026-09-22 至 2026-09-26）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Festival Hub - The Safe Room",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-20-2026-090605-9842.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "get-your-fish-living-or-die-trying-to-save-your-fish",
    "title": "Get (your fish) Living or Die Trying (to save your fish)",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "pridecentre",
    "company": "",
    "start": "2026-09-19",
    "end": "2026-09-19",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Get (your fish) Living or Die Trying (to save your fish) 在Inner West Pride Centre上演，演期 2026-09-19 至 2026-09-19，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/get-your-fish-living-or-die-trying-to-save-your-fish/",
    "booking": "https://sydneyfringe.com/events/get-your-fish-living-or-die-trying-to-save-your-fish/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-19",
        "20:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-19 至 2026-09-19）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Pride Hall",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-28-2026-151645-7459.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "the-unburdening",
    "title": "The Unburdening",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "erskineville",
    "company": "",
    "start": "2026-09-22",
    "end": "2026-09-26",
    "price": 28,
    "priceText": "A$28 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "The Unburdening 在Erskineville Town Hall上演，演期 2026-09-22 至 2026-09-26，已公布 5 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/the-unburdening/",
    "booking": "https://sydneyfringe.com/events/the-unburdening/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-22",
        "19:30",
        ""
      ],
      [
        "2026-09-23",
        "19:30",
        ""
      ],
      [
        "2026-09-24",
        "19:30",
        ""
      ],
      [
        "2026-09-25",
        "19:30",
        ""
      ],
      [
        "2026-09-26",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 5 场（2026-09-22 至 2026-09-26）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Emerging Artist Share House - The Living Room",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-26-2026-030831-4308.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "bullied-by-my-wii-fit",
    "title": "Bullied By My Wii Fit",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "erskineville",
    "company": "",
    "start": "2026-09-22",
    "end": "2026-09-26",
    "price": 27.5,
    "priceText": "A$27.5 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "Bullied By My Wii Fit 在Erskineville Town Hall上演，演期 2026-09-22 至 2026-09-26，已公布 5 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/bullied-by-my-wii-fit/",
    "booking": "https://sydneyfringe.com/events/bullied-by-my-wii-fit/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-22",
        "18:00",
        ""
      ],
      [
        "2026-09-23",
        "18:00",
        ""
      ],
      [
        "2026-09-24",
        "18:00",
        ""
      ],
      [
        "2026-09-25",
        "18:00",
        ""
      ],
      [
        "2026-09-26",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 5 场（2026-09-22 至 2026-09-26）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Emerging Artist Share House - The Boom Boom Room",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-29-2026-034642-9037.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "squatch-watch-live",
    "title": "Squatch Watch: LIVE",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "pact",
    "company": "",
    "start": "2026-09-23",
    "end": "2026-09-26",
    "price": 35,
    "priceText": "A$35 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Squatch Watch: LIVE 在PACT Centre for Emerging Artists上演，演期 2026-09-23 至 2026-09-26，已公布 5 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/squatch-watch-live/",
    "booking": "https://sydneyfringe.com/events/squatch-watch-live/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-23",
        "20:00",
        ""
      ],
      [
        "2026-09-24",
        "20:00",
        ""
      ],
      [
        "2026-09-25",
        "20:00",
        ""
      ],
      [
        "2026-09-26",
        "15:30",
        ""
      ],
      [
        "2026-09-26",
        "20:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 5 场（2026-09-23 至 2026-09-26）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Made In Hub",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-27-2026-035712-8675.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "care-instructions",
    "title": "CARE INSTRUCTIONS",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "erskineville",
    "company": "",
    "start": "2026-09-05",
    "end": "2026-09-05",
    "price": 20,
    "priceText": "A$20 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "CARE INSTRUCTIONS 在Erskineville Town Hall上演，演期 2026-09-05 至 2026-09-05，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/care-instructions/",
    "booking": "https://sydneyfringe.com/events/care-instructions/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-05",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-05 至 2026-09-05）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Emerging Artist Share House - The Spare Room",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-28-2026-121321-2439.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "bursting-into-life",
    "title": "Bursting Into Life",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "potterylane",
    "company": "",
    "start": "2026-09-30",
    "end": "2026-09-30",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "约 45 分钟",
    "desc": "Bursting Into Life 在Pottery Lane Performance Space上演，演期 2026-09-30 至 2026-09-30，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/bursting-into-life/",
    "booking": "https://sydneyfringe.com/events/bursting-into-life/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-30",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-30 至 2026-09-30）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-31-2026-121940-2853.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "werner-herzog-at-video-jungle",
    "title": "Werner Herzog at Video Jungle",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "qtopia",
    "company": "",
    "start": "2026-09-12",
    "end": "2026-09-12",
    "price": 35,
    "priceText": "A$35 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Werner Herzog at Video Jungle 在Qtopia Sydney上演，演期 2026-09-12 至 2026-09-12，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/werner-herzog-at-video-jungle/",
    "booking": "https://sydneyfringe.com/events/werner-herzog-at-video-jungle/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-12",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-12 至 2026-09-12）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Queer Hub - The Loading Dock",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-29-2026-044839-3780.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "therevella-presents-rage-ep-launch",
    "title": "Therevella presents... RAGE EP Launch.",
    "genre": "其他",
    "scale": "独立制作",
    "venue": "seandollys",
    "company": "",
    "start": "2026-09-26",
    "end": "2026-09-26",
    "price": 40,
    "priceText": "A$40 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 240 分钟",
    "desc": "Therevella presents... RAGE EP Launch. 在Sean & Dolly's上演，演期 2026-09-26 至 2026-09-26，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/therevella-presents-rage-ep-launch/",
    "booking": "https://sydneyfringe.com/events/therevella-presents-rage-ep-launch/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-26",
        "19:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-26 至 2026-09-26）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-27-2026-235901-3103.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "don-t-quit-your-day-job",
    "title": "DON'T QUIT YOUR DAY JOB",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "erskineville",
    "company": "",
    "start": "2026-09-12",
    "end": "2026-09-12",
    "price": 30,
    "priceText": "A$30 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 45 分钟",
    "desc": "DON'T QUIT YOUR DAY JOB 在Erskineville Town Hall上演，演期 2026-09-12 至 2026-09-12，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/dont-quit-your-day-job/",
    "booking": "https://sydneyfringe.com/events/dont-quit-your-day-job/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-12",
        "21:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-12 至 2026-09-12）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Emerging Artist Share House - The Living Room",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-29-2026-102708-1016.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "gladsome-throng",
    "title": "Gladsome Throng",
    "genre": "其他",
    "scale": "独立制作",
    "venue": "marrickville",
    "company": "",
    "start": "2026-09-12",
    "end": "2026-09-12",
    "price": 30,
    "priceText": "A$30 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 40 分钟",
    "desc": "Gladsome Throng 在Marrickville Town Hall上演，演期 2026-09-12 至 2026-09-12，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/gladsome-throng/",
    "booking": "https://sydneyfringe.com/events/gladsome-throng/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-12",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-12 至 2026-09-12）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Festival Hub - The Chambers",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-29-2026-054051-7286.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "just-enrichment",
    "title": "Just Enrichment",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "erskineville",
    "company": "",
    "start": "2026-09-05",
    "end": "2026-09-05",
    "price": 27,
    "priceText": "A$27 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 55 分钟",
    "desc": "Just Enrichment 在Erskineville Town Hall上演，演期 2026-09-05 至 2026-09-05，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/just-enrichment/",
    "booking": "https://sydneyfringe.com/events/just-enrichment/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-05",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-05 至 2026-09-05）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Emerging Artist Share House - The Living Room",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-29-2026-110751-3379.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "final-two",
    "title": "Final Two",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "qtopia",
    "company": "",
    "start": "2026-09-22",
    "end": "2026-09-26",
    "price": 36.5,
    "priceText": "A$36.5 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Final Two 在Qtopia Sydney上演，演期 2026-09-22 至 2026-09-26，已公布 5 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/final-two/",
    "booking": "https://sydneyfringe.com/events/final-two/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-22",
        "21:00",
        ""
      ],
      [
        "2026-09-23",
        "21:00",
        ""
      ],
      [
        "2026-09-24",
        "21:00",
        ""
      ],
      [
        "2026-09-25",
        "21:00",
        ""
      ],
      [
        "2026-09-26",
        "21:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 5 场（2026-09-22 至 2026-09-26）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Queer Hub - The Loading Dock",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-29-2026-081658-2440.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "influence",
    "title": "Influence",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "erskineville",
    "company": "",
    "start": "2026-09-19",
    "end": "2026-09-19",
    "price": 28,
    "priceText": "A$28 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Influence 在Erskineville Town Hall上演，演期 2026-09-19 至 2026-09-19，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/influence/",
    "booking": "https://sydneyfringe.com/events/influence/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-19",
        "21:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-19 至 2026-09-19）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Emerging Artist Share House - The Living Room",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/08-15-2026-091559-1897.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "cold-war-2-0",
    "title": "Cold War 2.0",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "fringeontherocks",
    "company": "",
    "start": "2026-09-20",
    "end": "2026-09-20",
    "price": 49,
    "priceText": "A$49 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Cold War 2.0 在Fringe on The Rocks上演，演期 2026-09-20 至 2026-09-20，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/cold-war-2-0/",
    "booking": "https://sydneyfringe.com/events/cold-war-2-0/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-20",
        "18:15",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-20 至 2026-09-20）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "6-8 Atherden St, Level 1",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-12-2026-040851-8915.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "the-happier-place",
    "title": "The Happier Place",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "qtopia",
    "company": "",
    "start": "2026-09-05",
    "end": "2026-09-05",
    "price": 35,
    "priceText": "A$35 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 70 分钟",
    "desc": "The Happier Place 在Qtopia Sydney上演，演期 2026-09-05 至 2026-09-05，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/the-happier-place/",
    "booking": "https://sydneyfringe.com/events/the-happier-place/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-05",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-05 至 2026-09-05）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Queer Hub - The Loading Dock",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-28-2026-040841-5872.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "the-complete-works-of-jane-austen-abridged",
    "title": "The Complete Works of Jane Austen – Abridged",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "qtopia",
    "company": "",
    "start": "2026-09-05",
    "end": "2026-09-05",
    "price": 55,
    "priceText": "A$55 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "The Complete Works of Jane Austen – Abridged 在Qtopia Sydney上演，演期 2026-09-05 至 2026-09-05，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/the-complete-works-of-jane-austen-abridged/",
    "booking": "https://sydneyfringe.com/events/the-complete-works-of-jane-austen-abridged/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-05",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-05 至 2026-09-05）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Queer Hub - The Substation",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-01-2026-033742-2038.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "becoming-benno",
    "title": "Becoming Benno",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "erskineville",
    "company": "",
    "start": "2026-09-05",
    "end": "2026-09-05",
    "price": 32,
    "priceText": "A$32 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 55 分钟",
    "desc": "Becoming Benno 在Erskineville Town Hall上演，演期 2026-09-05 至 2026-09-05，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/becoming-benno/",
    "booking": "https://sydneyfringe.com/events/becoming-benno/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-05",
        "21:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-05 至 2026-09-05）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Emerging Artist Share House - The Boom Boom Room",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-12-2026-081645-2808.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "shuhada",
    "title": "Shuhada",
    "genre": "其他",
    "scale": "独立制作",
    "venue": "qtopia",
    "company": "",
    "start": "2026-09-22",
    "end": "2026-09-26",
    "price": 35,
    "priceText": "A$35 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Shuhada 在Qtopia Sydney上演，演期 2026-09-22 至 2026-09-26，已公布 3 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/shuhada/",
    "booking": "https://sydneyfringe.com/events/shuhada/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-22",
        "18:00",
        ""
      ],
      [
        "2026-09-24",
        "18:00",
        ""
      ],
      [
        "2026-09-26",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 3 场（2026-09-22 至 2026-09-26）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Queer Hub - The Substation",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-31-2026-171104-7907.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "studio-ghibli-jazz-concert",
    "title": "Studio Ghibli Jazz Concert",
    "genre": "其他",
    "scale": "独立制作",
    "venue": "potterylane",
    "company": "",
    "start": "2026-10-04",
    "end": "2026-10-04",
    "price": 30,
    "priceText": "A$30 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Studio Ghibli Jazz Concert 在Pottery Lane Performance Space上演，演期 2026-10-04 至 2026-10-04，已公布 2 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/studio-ghibli-jazz-concert/",
    "booking": "https://sydneyfringe.com/events/studio-ghibli-jazz-concert/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-10-04",
        "17:30",
        ""
      ],
      [
        "2026-10-04",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 2 场（2026-10-04 至 2026-10-04）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/07-09-2026-084125-8706.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "inheritance-by-toni-janke-a-bold-and-deeply-moving-journey-of-uncovering",
    "title": "Inheritance by Toni Janke A Bold and Deeply Moving Journey of Uncovering",
    "genre": "其他",
    "scale": "独立制作",
    "venue": "eternity",
    "company": "",
    "start": "2026-09-23",
    "end": "2026-09-26",
    "price": 50,
    "priceText": "A$50 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Inheritance by Toni Janke A Bold and Deeply Moving Journey of Uncovering 在Eternity Playhouse上演，演期 2026-09-23 至 2026-09-26，已公布 4 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/inheritance-by-toni-janke-a-bold-and-deeply-moving-journey-of-uncovering/",
    "booking": "https://sydneyfringe.com/events/inheritance-by-toni-janke-a-bold-and-deeply-moving-journey-of-uncovering/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-23",
        "20:00",
        ""
      ],
      [
        "2026-09-24",
        "20:00",
        ""
      ],
      [
        "2026-09-25",
        "20:00",
        ""
      ],
      [
        "2026-09-26",
        "20:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 4 场（2026-09-23 至 2026-09-26）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Off Broadway Hub",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-04-2026-061214-9798.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "my-grandpa-doesn-t-follow-me-on-instagram-a-guide-to-trans-generational-road-tripping",
    "title": "My Grandpa Doesn't Follow Me On Instagram: A Guide To Trans-generational Road-Tripping",
    "genre": "话剧",
    "scale": "专业制作",
    "venue": "newtheatre",
    "company": "",
    "start": "2026-09-23",
    "end": "2026-09-26",
    "price": 38,
    "priceText": "A$38 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "My Grandpa Doesn't Follow Me On Instagram: A Guide To Trans-generational Road-Tripping 在New Theatre上演，演期 2026-09-23 至 2026-09-26，已公布 5 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/my-grandpa-doesnt-follow-me-on-instagram-a-guide-to-trans-generational-road-tripping/",
    "booking": "https://sydneyfringe.com/events/my-grandpa-doesnt-follow-me-on-instagram-a-guide-to-trans-generational-road-tripping/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-23",
        "20:00",
        ""
      ],
      [
        "2026-09-24",
        "20:00",
        ""
      ],
      [
        "2026-09-25",
        "20:00",
        ""
      ],
      [
        "2026-09-26",
        "15:30",
        ""
      ],
      [
        "2026-09-26",
        "20:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 5 场（2026-09-23 至 2026-09-26）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Touring Hub",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-28-2026-053037-2921.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "dancing-with-the-roots",
    "title": "Dancing with the Roots",
    "genre": "其他",
    "scale": "独立制作",
    "venue": "pyt",
    "company": "",
    "start": "2026-09-12",
    "end": "2026-09-12",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 25 分钟",
    "desc": "Dancing with the Roots 在PYT Fairfield上演，演期 2026-09-12 至 2026-09-12，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/dancing-with-the-roots/",
    "booking": "https://sydneyfringe.com/events/dancing-with-the-roots/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-12",
        "18:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-12 至 2026-09-12）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/08-01-2026-130322-9328.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "roaming-fringe-on-the-rocks",
    "title": "Roaming Fringe on The Rocks",
    "genre": "其他",
    "scale": "独立制作",
    "venue": "fringeontherocks",
    "company": "",
    "start": "2026-09-26",
    "end": "2026-09-26",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "约 180 分钟",
    "desc": "Roaming Fringe on The Rocks 在Fringe on The Rocks上演，演期 2026-09-26 至 2026-09-26，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/roaming-fringe-on-the-rocks/",
    "booking": "https://sydneyfringe.com/events/roaming-fringe-on-the-rocks/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-26",
        "11:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-26 至 2026-09-26）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": ", The Rocks Square",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/09-14-2026-050027-3259.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "dear-stranger-at-fringe-on-the-rocks",
    "title": "Dear Stranger at Fringe on The Rocks",
    "genre": "其他",
    "scale": "独立制作",
    "venue": "fringeontherocks",
    "company": "",
    "start": "2026-09-26",
    "end": "2026-09-26",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "约 390 分钟",
    "desc": "Dear Stranger at Fringe on The Rocks 在Fringe on The Rocks上演，演期 2026-09-26 至 2026-09-26，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/dear-stranger-at-fringe-on-the-rocks/",
    "booking": "https://sydneyfringe.com/events/dear-stranger-at-fringe-on-the-rocks/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-26",
        "10:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-26 至 2026-09-26）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": ", The Rocks Market",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-04-2026-041325-4566.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "jean-paul-does-not-want-to-um-how-you-say-go-to-war",
    "title": "Jean Paul Does Not Want To, Um, How You Say, Go To War!",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "pbc",
    "company": "",
    "start": "2026-09-19",
    "end": "2026-09-19",
    "price": 20,
    "priceText": "A$20 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Jean Paul Does Not Want To, Um, How You Say, Go To War! 在Petersham Bowling Club上演，演期 2026-09-19 至 2026-09-19，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/jean-paul-does-not-want-to-um-how-you-say-go-to-war/",
    "booking": "https://sydneyfringe.com/events/jean-paul-does-not-want-to-um-how-you-say-go-to-war/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-19",
        "19:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-19 至 2026-09-19）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/07-06-2026-063923-4953.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "alan-bennett-s-talking-heads",
    "title": "Alan Bennett's Talking Heads",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "woollahralibrary",
    "company": "",
    "start": "2026-09-19",
    "end": "2026-09-19",
    "price": 44,
    "priceText": "A$44 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Alan Bennett's Talking Heads 在Woollahra Library at Double Bay上演，演期 2026-09-19 至 2026-09-19，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/alan-bennetts-talking-heads/",
    "booking": "https://sydneyfringe.com/events/alan-bennetts-talking-heads/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-19",
        "20:45",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-19 至 2026-09-19）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/07-07-2026-015519-7561.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "because-there-was-fire",
    "title": "Because There Was Fire",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "actorspulse",
    "company": "",
    "start": "2026-09-22",
    "end": "2026-09-26",
    "price": 15,
    "priceText": "A$15 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Because There Was Fire 在The Actors Pulse Playhouse上演，演期 2026-09-22 至 2026-09-26，已公布 5 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/because-there-was-fire/",
    "booking": "https://sydneyfringe.com/events/because-there-was-fire/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-22",
        "18:30",
        ""
      ],
      [
        "2026-09-23",
        "20:00",
        ""
      ],
      [
        "2026-09-24",
        "18:30",
        ""
      ],
      [
        "2026-09-25",
        "18:30",
        ""
      ],
      [
        "2026-09-26",
        "20:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 5 场（2026-09-22 至 2026-09-26）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-03-2026-014547-7429.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "the-river-ghost",
    "title": "The River Ghost",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "flowstudios",
    "company": "",
    "start": "2026-09-23",
    "end": "2026-09-27",
    "price": 22,
    "priceText": "A$22 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "The River Ghost 在Flow Studios上演，演期 2026-09-23 至 2026-09-27，已公布 5 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/the-river-ghost/",
    "booking": "https://sydneyfringe.com/events/the-river-ghost/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-23",
        "18:00",
        ""
      ],
      [
        "2026-09-24",
        "18:00",
        ""
      ],
      [
        "2026-09-25",
        "18:00",
        ""
      ],
      [
        "2026-09-26",
        "18:00",
        ""
      ],
      [
        "2026-09-27",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 5 场（2026-09-23 至 2026-09-27）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-12-2026-125216-7252.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "she-says",
    "title": "She Says",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "nautistudios",
    "company": "",
    "start": "2026-09-13",
    "end": "2026-09-13",
    "price": 35,
    "priceText": "A$35 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 90 分钟",
    "desc": "She Says 在Nauti Studios上演，演期 2026-09-13 至 2026-09-13，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/she-says/",
    "booking": "https://sydneyfringe.com/events/she-says/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-13",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-13 至 2026-09-13）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-23-2026-161754-7996.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "the-return-play",
    "title": "The Return play",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "greektheatre",
    "company": "",
    "start": "2026-09-03",
    "end": "2026-09-03",
    "price": 35,
    "priceText": "A$35 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 90 分钟",
    "desc": "The Return play 在The Greek Theatre at Addi Road上演，演期 2026-09-03 至 2026-09-03，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/the-return-play/",
    "booking": "https://sydneyfringe.com/events/the-return-play/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-03",
        "18:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-03 至 2026-09-03）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-28-2026-172328-5781.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "pass-pause-play-second-birthday",
    "title": "PASS PAUSE PLAY SECOND BIRTHDAY",
    "genre": "其他",
    "scale": "独立制作",
    "venue": "nautistudios",
    "company": "",
    "start": "2026-09-01",
    "end": "2026-09-01",
    "price": 20,
    "priceText": "A$20 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 90 分钟",
    "desc": "PASS PAUSE PLAY SECOND BIRTHDAY 在Nauti Studios上演，演期 2026-09-01 至 2026-09-01，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/pass-pause-play-second-birthday/",
    "booking": "https://sydneyfringe.com/events/pass-pause-play-second-birthday/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-01",
        "18:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-01 至 2026-09-01）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-21-2026-141008-7211.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "the-man",
    "title": "The Man",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "oldfitz",
    "company": "",
    "start": "2026-09-21",
    "end": "2026-10-02",
    "price": 27.5,
    "priceText": "A$27.5 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 75 分钟",
    "desc": "The Man 在Old Fitz Theatre上演，演期 2026-09-21 至 2026-10-02，已公布 10 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/the-man/",
    "booking": "https://sydneyfringe.com/events/the-man/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-21",
        "19:00",
        ""
      ],
      [
        "2026-09-22",
        "21:15",
        ""
      ],
      [
        "2026-09-24",
        "21:15",
        ""
      ],
      [
        "2026-09-25",
        "21:15",
        ""
      ],
      [
        "2026-09-26",
        "21:15",
        ""
      ],
      [
        "2026-09-27",
        "19:30",
        ""
      ],
      [
        "2026-09-28",
        "19:00",
        ""
      ],
      [
        "2026-10-01",
        "14:00",
        ""
      ],
      [
        "2026-10-01",
        "21:15",
        ""
      ],
      [
        "2026-10-02",
        "21:15",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 10 场（2026-09-21 至 2026-10-02）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-31-2026-134109-2128.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "incursion",
    "title": "Incursion",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "actorspulse",
    "company": "",
    "start": "2026-09-29",
    "end": "2026-10-03",
    "price": 38,
    "priceText": "A$38 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 90 分钟",
    "desc": "Incursion 在The Actors Pulse Playhouse上演，演期 2026-09-29 至 2026-10-03，已公布 6 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/incursion/",
    "booking": "https://sydneyfringe.com/events/incursion/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-29",
        "19:00",
        ""
      ],
      [
        "2026-09-30",
        "19:00",
        ""
      ],
      [
        "2026-10-01",
        "19:00",
        ""
      ],
      [
        "2026-10-02",
        "18:00",
        ""
      ],
      [
        "2026-10-03",
        "15:00",
        ""
      ],
      [
        "2026-10-03",
        "19:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 6 场（2026-09-29 至 2026-10-03）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/08-20-2026-181000-4654.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "the-bloody-chamber",
    "title": "The Bloody Chamber",
    "genre": "话剧",
    "scale": "专业制作",
    "venue": "roslynpacker",
    "company": "",
    "start": "2026-09-22",
    "end": "2026-09-26",
    "price": 59.99,
    "priceText": "A$59.99 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "The Bloody Chamber 在Roslyn Packer Theatre上演，演期 2026-09-22 至 2026-09-26，已公布 5 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/the-bloody-chamber/",
    "booking": "https://sydneyfringe.com/events/the-bloody-chamber/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-22",
        "19:30",
        ""
      ],
      [
        "2026-09-23",
        "19:30",
        ""
      ],
      [
        "2026-09-24",
        "19:30",
        ""
      ],
      [
        "2026-09-25",
        "19:30",
        ""
      ],
      [
        "2026-09-26",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 5 场（2026-09-22 至 2026-09-26）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "space": "Folio",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/08-24-2026-082733-5716.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "this-show-contains-confetti",
    "title": "'this show contains confetti'",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "actorspulse",
    "company": "",
    "start": "2026-09-22",
    "end": "2026-09-26",
    "price": 15,
    "priceText": "A$15 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 55 分钟",
    "desc": "'this show contains confetti' 在The Actors Pulse Playhouse上演，演期 2026-09-22 至 2026-09-26，已公布 5 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/this-show-contains-confetti/",
    "booking": "https://sydneyfringe.com/events/this-show-contains-confetti/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-22",
        "20:00",
        ""
      ],
      [
        "2026-09-23",
        "18:30",
        ""
      ],
      [
        "2026-09-24",
        "20:00",
        ""
      ],
      [
        "2026-09-25",
        "20:00",
        ""
      ],
      [
        "2026-09-26",
        "18:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 5 场（2026-09-22 至 2026-09-26）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-03-2026-022353-6582.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "distortion",
    "title": "Distortion",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "actorspulse",
    "company": "",
    "start": "2026-09-20",
    "end": "2026-09-20",
    "price": 38,
    "priceText": "A$38 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 80 分钟",
    "desc": "Distortion 在The Actors Pulse Playhouse上演，演期 2026-09-20 至 2026-09-20，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/distortion/",
    "booking": "https://sydneyfringe.com/events/distortion/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-20",
        "14:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-20 至 2026-09-20）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-29-2026-024845-9828.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "holy-order-of-the-confusion-sound",
    "title": "Holy Order of the Confusion Sound",
    "genre": "其他",
    "scale": "独立制作",
    "venue": "pbc",
    "company": "",
    "start": "2026-09-06",
    "end": "2026-09-06",
    "price": 33,
    "priceText": "A$33 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 180 分钟",
    "desc": "Holy Order of the Confusion Sound 在Petersham Bowling Club上演，演期 2026-09-06 至 2026-09-06，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/holy-order-of-the-confusion-sound/",
    "booking": "https://sydneyfringe.com/events/holy-order-of-the-confusion-sound/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-06",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-06 至 2026-09-06）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-18-2026-153425-6374.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "epicaricacy",
    "title": "EPICARICACY",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "actorspulse",
    "company": "",
    "start": "2026-09-12",
    "end": "2026-09-12",
    "price": 35,
    "priceText": "A$35 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "EPICARICACY 在The Actors Pulse Playhouse上演，演期 2026-09-12 至 2026-09-12，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/epicaricacy/",
    "booking": "https://sydneyfringe.com/events/epicaricacy/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-12",
        "19:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-12 至 2026-09-12）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/08-21-2026-062746-2259.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "hamlet",
    "title": "\"Hamlet\"",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "greektheatre",
    "company": "",
    "start": "2026-09-23",
    "end": "2026-09-27",
    "price": 30,
    "priceText": "A$30 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 160 分钟",
    "desc": "\"Hamlet\" 在The Greek Theatre at Addi Road上演，演期 2026-09-23 至 2026-09-27，已公布 6 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/hamlet/",
    "booking": "https://sydneyfringe.com/events/hamlet/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-23",
        "19:00",
        ""
      ],
      [
        "2026-09-24",
        "19:00",
        ""
      ],
      [
        "2026-09-25",
        "19:30",
        ""
      ],
      [
        "2026-09-26",
        "14:00",
        ""
      ],
      [
        "2026-09-26",
        "19:30",
        ""
      ],
      [
        "2026-09-27",
        "16:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 6 场（2026-09-23 至 2026-09-27）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-07-2026-160912-1796.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "sorry-i-m-late",
    "title": "Sorry I'm Late",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "actorspulse",
    "company": "",
    "start": "2026-09-05",
    "end": "2026-09-05",
    "price": 38,
    "priceText": "A$38 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 70 分钟",
    "desc": "Sorry I'm Late 在The Actors Pulse Playhouse上演，演期 2026-09-05 至 2026-09-05，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/sorry-im-late/",
    "booking": "https://sydneyfringe.com/events/sorry-im-late/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-05",
        "18:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-05 至 2026-09-05）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-29-2026-065948-5738.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "distillation",
    "title": "Distillation",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "vaucluse",
    "company": "",
    "start": "2026-09-22",
    "end": "2026-09-25",
    "price": 35.2,
    "priceText": "A$35.2 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Distillation 在Vaucluse House上演，演期 2026-09-22 至 2026-09-25，已公布 11 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/distillation/",
    "booking": "https://sydneyfringe.com/events/distillation/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-22",
        "13:00",
        ""
      ],
      [
        "2026-09-22",
        "17:00",
        ""
      ],
      [
        "2026-09-22",
        "20:00",
        ""
      ],
      [
        "2026-09-23",
        "13:00",
        ""
      ],
      [
        "2026-09-23",
        "17:00",
        ""
      ],
      [
        "2026-09-23",
        "20:00",
        ""
      ],
      [
        "2026-09-24",
        "13:00",
        ""
      ],
      [
        "2026-09-24",
        "17:00",
        ""
      ],
      [
        "2026-09-24",
        "20:00",
        ""
      ],
      [
        "2026-09-25",
        "13:00",
        ""
      ],
      [
        "2026-09-25",
        "20:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 11 场（2026-09-22 至 2026-09-25）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-28-2026-215917-9199.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "forget-me-please",
    "title": "Forget Me, Please",
    "genre": "话剧",
    "scale": "独立制作",
    "venue": "oldfitz",
    "company": "",
    "start": "2026-09-11",
    "end": "2026-09-11",
    "price": 30,
    "priceText": "A$30 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Forget Me, Please 在Old Fitz Theatre上演，演期 2026-09-11 至 2026-09-11，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/forget-me-please/",
    "booking": "https://sydneyfringe.com/events/forget-me-please/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-11",
        "21:15",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-11 至 2026-09-11）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-15-2026-071127-5611.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "the-judy-bailey-band-at-your-request",
    "title": "The Judy Bailey Band - At Your Request",
    "genre": "其他",
    "scale": "独立制作",
    "venue": "lanecovecivic",
    "company": "",
    "start": "2026-09-11",
    "end": "2026-09-11",
    "price": 20,
    "priceText": "A$20 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 90 分钟",
    "desc": "The Judy Bailey Band - At Your Request 在Lane Cove Civic Centre上演，演期 2026-09-11 至 2026-09-11，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/the-judy-bailey-band-at-your-request/",
    "booking": "https://sydneyfringe.com/events/the-judy-bailey-band-at-your-request/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-11",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-11 至 2026-09-11）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-03-2025-021442-3068.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "breko-s-big-music-bingo",
    "title": "Breko’s BIG Music Bingo",
    "genre": "其他",
    "scale": "独立制作",
    "venue": "paddorsl",
    "company": "",
    "start": "2026-09-25",
    "end": "2026-09-25",
    "price": 55,
    "priceText": "A$55 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 180 分钟",
    "desc": "Breko’s BIG Music Bingo 在Paddo RSL上演，演期 2026-09-25 至 2026-09-25，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/brekos-big-music-bingo/",
    "booking": "https://sydneyfringe.com/events/brekos-big-music-bingo/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-25",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-25 至 2026-09-25）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/03-30-2026-033636-7047.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "dear-stranger-at-lane-cove-festival",
    "title": "Dear Stranger at Lane Cove Festival",
    "genre": "其他",
    "scale": "独立制作",
    "venue": "canopy",
    "company": "",
    "start": "2026-09-30",
    "end": "2026-10-04",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "约 240 分钟",
    "desc": "Dear Stranger at Lane Cove Festival 在The Canopy上演，演期 2026-09-30 至 2026-10-04，已公布 5 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/dear-stranger-at-lane-cove-festival/",
    "booking": "https://sydneyfringe.com/events/dear-stranger-at-lane-cove-festival/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-30",
        "10:00",
        ""
      ],
      [
        "2026-10-01",
        "10:00",
        ""
      ],
      [
        "2026-10-02",
        "10:00",
        ""
      ],
      [
        "2026-10-03",
        "10:00",
        ""
      ],
      [
        "2026-10-04",
        "10:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 5 场（2026-09-30 至 2026-10-04）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-04-2026-041756-1802.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "ghosts-where-the-stairway-leads",
    "title": "GHOSTS: Where the Stairway Leads...",
    "genre": "其他",
    "scale": "独立制作",
    "venue": "campbellstchurch",
    "company": "",
    "start": "2026-09-19",
    "end": "2026-09-19",
    "price": 50,
    "priceText": "A$50 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "GHOSTS: Where the Stairway Leads... 在Campbell St Presbyterian Church上演，演期 2026-09-19 至 2026-09-19，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/ghosts-where-the-stairway-leads/",
    "booking": "https://sydneyfringe.com/events/ghosts-where-the-stairway-leads/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-19",
        "18:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-19 至 2026-09-19）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/04-06-2026-091629-9158.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "the-corporeal-life-of-seafaring",
    "title": "The Corporeal Life of Seafaring",
    "genre": "其他",
    "scale": "独立制作",
    "venue": "churchststudios",
    "company": "",
    "start": "2026-09-06",
    "end": "2026-09-06",
    "price": 24,
    "priceText": "A$24 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "The Corporeal Life of Seafaring 在Church Street Studios上演，演期 2026-09-06 至 2026-09-06，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/the-corporeal-life-of-seafaring/",
    "booking": "https://sydneyfringe.com/events/the-corporeal-life-of-seafaring/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-06",
        "20:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-06 至 2026-09-06）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-26-2026-125819-3805.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "date-and-time",
    "title": "Date and Time",
    "genre": "其他",
    "scale": "独立制作",
    "venue": "lanecovecivic",
    "company": "",
    "start": "2026-09-19",
    "end": "2026-09-19",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 50 分钟",
    "desc": "Date and Time 在Lane Cove Civic Centre上演，演期 2026-09-19 至 2026-09-19，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/date-and-time/",
    "booking": "https://sydneyfringe.com/events/date-and-time/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-19",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-19 至 2026-09-19）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-24-2026-134102-6217.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "songs-from-our-backyard-soulfood-a-cappella",
    "title": "Songs from Our Backyard - Soulfood a Cappella",
    "genre": "其他",
    "scale": "独立制作",
    "venue": "canopy",
    "company": "",
    "start": "2026-09-25",
    "end": "2026-09-25",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "约 80 分钟",
    "desc": "Songs from Our Backyard - Soulfood a Cappella 在The Canopy上演，演期 2026-09-25 至 2026-09-25，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/songs-from-our-backyard-soulfood-a-cappella/",
    "booking": "https://sydneyfringe.com/events/songs-from-our-backyard-soulfood-a-cappella/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-25",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-25 至 2026-09-25）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-17-2026-080713-1758.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "upward-spiral",
    "title": "Upward Spiral",
    "genre": "其他",
    "scale": "独立制作",
    "venue": "vinechurch",
    "company": "",
    "start": "2026-09-26",
    "end": "2026-09-26",
    "price": 45,
    "priceText": "A$45 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 90 分钟",
    "desc": "Upward Spiral 在Vine Church上演，演期 2026-09-26 至 2026-09-26，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/upward-spiral/",
    "booking": "https://sydneyfringe.com/events/upward-spiral/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-26",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-26 至 2026-09-26）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-20-2026-155848-7144.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "match-percussion-trio",
    "title": "Match Percussion Trio",
    "genre": "其他",
    "scale": "独立制作",
    "venue": "lanecovecivic",
    "company": "",
    "start": "2026-09-12",
    "end": "2026-09-12",
    "price": 25,
    "priceText": "A$25 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 60 分钟",
    "desc": "Match Percussion Trio 在Lane Cove Civic Centre上演，演期 2026-09-12 至 2026-09-12，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/match-percussion-trio/",
    "booking": "https://sydneyfringe.com/events/match-percussion-trio/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-12",
        "19:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-12 至 2026-09-12）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/06-09-2026-070020-6589.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "fever-dream",
    "title": "Fever Dream",
    "genre": "其他",
    "scale": "独立制作",
    "venue": "lansdowne",
    "company": "",
    "start": "2026-09-26",
    "end": "2026-09-26",
    "price": 38,
    "priceText": "A$38 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 120 分钟",
    "desc": "Fever Dream 在The Lansdowne Hotel上演，演期 2026-09-26 至 2026-09-26，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/fever-dream/",
    "booking": "https://sydneyfringe.com/events/fever-dream/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-26",
        "20:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-26 至 2026-09-26）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/05-31-2026-115946-9034.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "rituals",
    "title": "RITUALS",
    "genre": "其他",
    "scale": "独立制作",
    "venue": "machinehall",
    "company": "",
    "start": "2026-09-13",
    "end": "2026-09-13",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "约 360 分钟",
    "desc": "RITUALS 在Machine Hall上演，演期 2026-09-13 至 2026-09-13，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/rituals/",
    "booking": "https://sydneyfringe.com/events/rituals/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-13",
        "14:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-13 至 2026-09-13）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/07-28-2026-085106-3771.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "rumours-fleetwood-mac-tribute-show",
    "title": "Rumours Fleetwood Mac Tribute Show",
    "genre": "其他",
    "scale": "独立制作",
    "venue": "canopy",
    "company": "",
    "start": "2026-09-26",
    "end": "2026-09-26",
    "price": 18,
    "priceText": "A$18 起 · 官方售票页标价",
    "priceNote": "票价来自官方售票页，可能不含手续费；优惠资格与具体场次请以官方为准。",
    "duration": "约 180 分钟",
    "desc": "Rumours Fleetwood Mac Tribute Show 在The Canopy上演，演期 2026-09-26 至 2026-09-26，已公布 1 场。本条目由官方售票页汇总，暂无官方剧情简介。",
    "source": "https://sydneyfringe.com/events/rumours-fleetwood-mac-tribute-show/",
    "booking": "https://sydneyfringe.com/events/rumours-fleetwood-mac-tribute-show/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-26",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-09-26 至 2026-09-26）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "festival": "悉尼艺穗节 2026",
    "image": "https://d1vlmco8ur52ud.cloudfront.net/07-01-2026-062504-7311.jpg",
    "imageCredit": "官方宣传图 © Sydney Fringe Festival"
  },
  {
    "id": "mack-the-knife",
    "title": "Mack the Knife",
    "genre": "音乐剧",
    "scale": "专业制作",
    "venue": "foundry",
    "company": "",
    "start": "2027-10-05",
    "end": "2027-11-07",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "",
    "desc": "Mack the Knife 在Foundry Theatre上演，演期 2027-10-05 至 2027-11-07（官方已官宣，尚未开票）。本条目由官方节目单汇总，暂无官方剧情简介。",
    "source": "https://hayestheatre.com.au/event/mack-the-knife-foundry/",
    "booking": "https://hayestheatre.com.au/event/mack-the-knife-foundry/",
    "bookingLabel": "查看官方演出公告",
    "sessions": [],
    "sessionsComplete": false,
    "schedule": "官方已公布演期 2027-10-05 至 2027-11-07，但尚未开票（2026-11-05 起公开发售）。逐场日历待开票后补充。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "status": "announced",
    "onSaleFrom": "2026-11-05",
    "image": "http://hayestheatre.com.au/wp-content/uploads/2026/09/Screenshot-2026-09-09-at-2.18.47-pm-725x1024.png",
    "imageCredit": "官方宣传图 © Hayes Theatre Co"
  },
  {
    "id": "a-funny-thing-happened-on-the-way-to-the-forum",
    "title": "A Funny Thing Happened on the Way to the Forum",
    "genre": "音乐剧",
    "scale": "专业制作",
    "venue": "hayes",
    "company": "",
    "start": "2027-05-12",
    "end": "2027-05-12",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "约 135 分钟",
    "desc": "A Funny Thing Happened on the Way to the Forum 在Hayes Theatre上演，演期 2027-05-12 至 2027-05-12。本条目由官方节目单汇总，暂无官方剧情简介。",
    "source": "https://hayestheatre.com.au/event/a-funny-thing-happened-on-the-way-to-the-forum/",
    "booking": "https://boxoffice.hayestheatre.com.au/tiny/afunnythinghappened",
    "bookingLabel": "官方场次与购票",
    "sessions": [],
    "sessionsComplete": false,
    "schedule": "已公布 0 场（2027-05-12 至 2027-05-12）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "dateNeedsReview": true,
    "dateNote": "官方仅公布起始日（From 12 May 2027），结束日期待公布。",
    "image": "https://hayestheatre.com.au/wp-content/uploads/2026/09/5-1.png",
    "imageCredit": "官方宣传图 © Hayes Theatre Co"
  },
  {
    "id": "1776",
    "title": "1776",
    "genre": "音乐剧",
    "scale": "专业制作",
    "venue": "hayes",
    "company": "",
    "start": "2027-03-17",
    "end": "2027-03-17",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "约 135 分钟",
    "desc": "1776 在Hayes Theatre上演，演期 2027-03-17 至 2027-03-17。本条目由官方节目单汇总，暂无官方剧情简介。",
    "source": "https://hayestheatre.com.au/event/1776/",
    "booking": "https://boxoffice.hayestheatre.com.au/tiny/1776",
    "bookingLabel": "官方场次与购票",
    "sessions": [],
    "sessionsComplete": false,
    "schedule": "已公布 0 场（2027-03-17 至 2027-03-17）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "dateNeedsReview": true,
    "dateNote": "官方仅公布起始日（From 17 March 2027），结束日期待公布。",
    "image": "https://hayestheatre.com.au/wp-content/uploads/2026/09/3-1.png",
    "imageCredit": "官方宣传图 © Hayes Theatre Co"
  },
  {
    "id": "cos-fan-tutte",
    "title": "Così fan tutte",
    "genre": "音乐剧",
    "scale": "专业制作",
    "venue": "hayes",
    "company": "",
    "start": "2027-08-13",
    "end": "2027-09-04",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "约 140 分钟",
    "desc": "Così fan tutte 在Hayes Theatre上演，演期 2027-08-13 至 2027-09-04（官方已官宣，尚未开票）。本条目由官方节目单汇总，暂无官方剧情简介。",
    "source": "https://hayestheatre.com.au/event/cosi-fan-tutte/",
    "booking": "https://hayestheatre.com.au/event/cosi-fan-tutte/",
    "bookingLabel": "查看官方演出公告",
    "sessions": [],
    "sessionsComplete": false,
    "schedule": "官方已公布演期 2027-08-13 至 2027-09-04，但尚未开票（2027-05-05 起公开发售）。逐场日历待开票后补充。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "status": "announced",
    "onSaleFrom": "2027-05-05",
    "image": "http://hayestheatre.com.au/wp-content/uploads/2026/09/13.png",
    "imageCredit": "官方宣传图 © Hayes Theatre Co"
  },
  {
    "id": "next-to-normal",
    "title": "Next to Normal",
    "genre": "音乐剧",
    "scale": "专业制作",
    "venue": "hayes",
    "company": "",
    "start": "2027-07-10",
    "end": "2027-08-08",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "约 150 分钟",
    "desc": "Next to Normal 在Hayes Theatre上演，演期 2027-07-10 至 2027-08-08（官方已官宣，尚未开票）。本条目由官方节目单汇总，暂无官方剧情简介。",
    "source": "https://hayestheatre.com.au/event/next-to-normal-2027/",
    "booking": "https://hayestheatre.com.au/event/next-to-normal-2027/",
    "bookingLabel": "查看官方演出公告",
    "sessions": [],
    "sessionsComplete": false,
    "schedule": "官方已公布演期 2027-07-10 至 2027-08-08，但尚未开票（2027-03-27 起公开发售）。逐场日历待开票后补充。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "status": "announced",
    "onSaleFrom": "2027-03-27",
    "image": "https://hayestheatre.com.au/wp-content/uploads/2026/09/7-1.png",
    "imageCredit": "官方宣传图 © Hayes Theatre Co"
  },
  {
    "id": "swept-away",
    "title": "Swept Away",
    "genre": "音乐剧",
    "scale": "专业制作",
    "venue": "hayes",
    "company": "",
    "start": "2027-05-22",
    "end": "2027-06-20",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "",
    "desc": "Swept Away 在Hayes Theatre上演，演期 2027-05-22 至 2027-06-20（官方已官宣，尚未开票）。本条目由官方节目单汇总，暂无官方剧情简介。",
    "source": "https://hayestheatre.com.au/event/swept-away/",
    "booking": "https://hayestheatre.com.au/event/swept-away/",
    "bookingLabel": "查看官方演出公告",
    "sessions": [],
    "sessionsComplete": false,
    "schedule": "官方已公布演期 2027-05-22 至 2027-06-20，但尚未开票（2027-01-20 起公开发售）。逐场日历待开票后补充。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "status": "announced",
    "onSaleFrom": "2027-01-20",
    "image": "http://hayestheatre.com.au/wp-content/uploads/2026/09/15-1.png",
    "imageCredit": "官方宣传图 © Hayes Theatre Co"
  },
  {
    "id": "house-of-rot",
    "title": "HOUSE OF ROT",
    "genre": "音乐剧",
    "scale": "专业制作",
    "venue": "hayes",
    "company": "",
    "start": "2027-04-23",
    "end": "2027-05-09",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "",
    "desc": "HOUSE OF ROT 在Hayes Theatre上演，演期 2027-04-23 至 2027-05-09（官方已官宣，尚未开票）。本条目由官方节目单汇总，暂无官方剧情简介。",
    "source": "https://hayestheatre.com.au/event/house-of-rot-2027/",
    "booking": "https://hayestheatre.com.au/event/house-of-rot-2027/",
    "bookingLabel": "查看官方演出公告",
    "sessions": [],
    "sessionsComplete": false,
    "schedule": "官方已公布演期 2027-04-23 至 2027-05-09，但尚未开票（2027-01-06 起公开发售）。逐场日历待开票后补充。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "status": "announced",
    "onSaleFrom": "2027-01-06",
    "image": "https://hayestheatre.com.au/wp-content/uploads/2026/09/4-1.png",
    "imageCredit": "官方宣传图 © Hayes Theatre Co"
  },
  {
    "id": "be-more-chill",
    "title": "Be More Chill",
    "genre": "音乐剧",
    "scale": "专业制作",
    "venue": "hayes",
    "company": "",
    "start": "2027-09-14",
    "end": "2027-10-17",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "约 135 分钟",
    "desc": "Be More Chill 在Hayes Theatre上演，演期 2027-09-14 至 2027-10-17（官方已官宣，尚未开票）。本条目由官方节目单汇总，暂无官方剧情简介。",
    "source": "https://hayestheatre.com.au/event/be-more-chill/",
    "booking": "https://hayestheatre.com.au/event/be-more-chill/",
    "bookingLabel": "查看官方演出公告",
    "sessions": [],
    "sessionsComplete": false,
    "schedule": "官方已公布演期 2027-09-14 至 2027-10-17，但尚未开票（2027-03-10 起公开发售）。逐场日历待开票后补充。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "status": "announced",
    "onSaleFrom": "2027-03-10",
    "image": "http://hayestheatre.com.au/wp-content/uploads/2026/09/14-1.png",
    "imageCredit": "官方宣传图 © Hayes Theatre Co"
  },
  {
    "id": "lucky-stiff",
    "title": "Lucky Stiff",
    "genre": "音乐剧",
    "scale": "专业制作",
    "venue": "hayes",
    "company": "",
    "start": "2027-02-12",
    "end": "2027-03-13",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "约 135 分钟",
    "desc": "Lucky Stiff 在Hayes Theatre上演，演期 2027-02-12 至 2027-03-13（官方已官宣，尚未开票）。本条目由官方节目单汇总，暂无官方剧情简介。",
    "source": "https://hayestheatre.com.au/event/lucky-stiff/",
    "booking": "https://hayestheatre.com.au/event/lucky-stiff/",
    "bookingLabel": "查看官方演出公告",
    "sessions": [],
    "sessionsComplete": false,
    "schedule": "官方已公布演期 2027-02-12 至 2027-03-13，但尚未开票（2026-11-12 起公开发售）。逐场日历待开票后补充。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "status": "announced",
    "onSaleFrom": "2026-11-12",
    "image": "http://hayestheatre.com.au/wp-content/uploads/2026/09/2-1.png",
    "imageCredit": "官方宣传图 © Hayes Theatre Co"
  },
  {
    "id": "dames-at-sea",
    "title": "Dames at Sea",
    "genre": "音乐剧",
    "scale": "专业制作",
    "venue": "hayes",
    "company": "",
    "start": "2027-10-20",
    "end": "2027-10-20",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "约 135 分钟",
    "desc": "Dames at Sea 在Hayes Theatre上演，演期 2027-10-20 至 2027-10-20。本条目由官方节目单汇总，暂无官方剧情简介。",
    "source": "https://hayestheatre.com.au/event/dames-at-sea/",
    "booking": "https://boxoffice.hayestheatre.com.au/tiny/dames_at_sea",
    "bookingLabel": "官方场次与购票",
    "sessions": [],
    "sessionsComplete": false,
    "schedule": "已公布 0 场（2027-10-20 至 2027-10-20）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "dateNeedsReview": true,
    "dateNote": "官方仅公布起始日（From 20 October 2027），结束日期待公布。",
    "image": "https://hayestheatre.com.au/wp-content/uploads/2026/09/8-1.png",
    "imageCredit": "官方宣传图 © Hayes Theatre Co"
  },
  {
    "id": "flowers-for-mrs-harris",
    "title": "Flowers for Mrs Harris",
    "genre": "音乐剧",
    "scale": "专业制作",
    "venue": "hayes",
    "company": "",
    "start": "2027-10-29",
    "end": "2027-11-27",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "约 160 分钟",
    "desc": "Flowers for Mrs Harris 在Hayes Theatre上演，演期 2027-10-29 至 2027-11-27（官方已官宣，尚未开票）。本条目由官方节目单汇总，暂无官方剧情简介。",
    "source": "https://hayestheatre.com.au/event/flowers-for-mrs-harris/",
    "booking": "https://hayestheatre.com.au/event/flowers-for-mrs-harris/",
    "bookingLabel": "查看官方演出公告",
    "sessions": [],
    "sessionsComplete": false,
    "schedule": "官方已公布演期 2027-10-29 至 2027-11-27，但尚未开票（2027-04-28 起公开发售）。逐场日历待开票后补充。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "status": "announced",
    "onSaleFrom": "2027-04-28",
    "image": "https://hayestheatre.com.au/wp-content/uploads/2026/09/9-1.png",
    "imageCredit": "官方宣传图 © Hayes Theatre Co"
  },
  {
    "id": "peter-allen",
    "title": "Peter Allen",
    "genre": "音乐剧",
    "scale": "专业制作",
    "venue": "hayes",
    "company": "",
    "start": "2027-01-13",
    "end": "2027-02-06",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "",
    "desc": "Peter Allen 在Hayes Theatre上演，演期 2027-01-13 至 2027-02-06（官方已官宣，尚未开票）。本条目由官方节目单汇总，暂无官方剧情简介。",
    "source": "https://hayestheatre.com.au/event/peter-allen-not-the-boy-next-door/",
    "booking": "https://hayestheatre.com.au/event/peter-allen-not-the-boy-next-door/",
    "bookingLabel": "查看官方演出公告",
    "sessions": [],
    "sessionsComplete": false,
    "schedule": "官方已公布演期 2027-01-13 至 2027-02-06，但尚未开票（2026-10-01 起公开发售）。逐场日历待开票后补充。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "status": "announced",
    "onSaleFrom": "2026-10-01",
    "image": "https://hayestheatre.com.au/wp-content/uploads/2026/09/2027-Season-Square-images-1000-x-1000-px.png",
    "imageCredit": "官方宣传图 © Hayes Theatre Co"
  },
  {
    "id": "victoria-falconer-s-parlour-night",
    "title": "Victoria Falconer’s Parlour Night",
    "genre": "音乐剧",
    "scale": "专业制作",
    "venue": "hayes",
    "company": "",
    "start": "2027-03-01",
    "end": "2027-03-01",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "约 90 分钟",
    "desc": "Victoria Falconer’s Parlour Night 在Hayes Theatre上演，演期 2027-03-01 至 2027-03-01。本条目由官方节目单汇总，暂无官方剧情简介。",
    "source": "https://hayestheatre.com.au/event/victoria-falconers-parlour-night-2027-mardi-gras-edition/",
    "booking": "https://boxoffice.hayestheatre.com.au/tiny/parlour_mardigras",
    "bookingLabel": "官方场次与购票",
    "sessions": [],
    "sessionsComplete": false,
    "schedule": "已公布 0 场（2027-03-01 至 2027-03-01）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "image": "https://hayestheatre.com.au/wp-content/uploads/2026/09/6-1.png",
    "imageCredit": "官方宣传图 © Hayes Theatre Co"
  },
  {
    "id": "theys-at-the-hayes",
    "title": "Theys at the Hayes",
    "genre": "音乐剧",
    "scale": "专业制作",
    "venue": "hayes",
    "company": "",
    "start": "2027-02-22",
    "end": "2027-02-22",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "约 120 分钟",
    "desc": "Theys at the Hayes 在Hayes Theatre上演，演期 2027-02-22 至 2027-02-22。本条目由官方节目单汇总，暂无官方剧情简介。",
    "source": "https://hayestheatre.com.au/event/theys-at-the-hayes-2027/",
    "booking": "https://boxoffice.hayestheatre.com.au/tiny/theys_2027",
    "bookingLabel": "官方场次与购票",
    "sessions": [],
    "sessionsComplete": false,
    "schedule": "已公布 0 场（2027-02-22 至 2027-02-22）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "image": "https://hayestheatre.com.au/wp-content/uploads/2026/09/5-Theys-at-the-Hayes-scaled.jpg",
    "imageCredit": "官方宣传图 © Hayes Theatre Co"
  },
  {
    "id": "phar-lap",
    "title": "Phar Lap",
    "genre": "音乐剧",
    "scale": "专业制作",
    "venue": "carriageworks",
    "company": "",
    "start": "2027-07-08",
    "end": "2027-08-08",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "",
    "desc": "Phar Lap 在Carriageworks上演，演期 2027-07-08 至 2027-08-08。本条目由官方节目单汇总，暂无官方剧情简介。",
    "source": "https://hayestheatre.com.au/event/phar-lap-2027-carriageworks/",
    "booking": "https://boxoffice.hayestheatre.com.au/tiny/par_lap_carriageworks",
    "bookingLabel": "官方场次与购票",
    "sessions": [],
    "sessionsComplete": false,
    "schedule": "已公布 0 场（2027-07-08 至 2027-08-08）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "dateNeedsReview": true,
    "dateNote": "官方页面未写明年份，年份取自官方链接（8 July - 8 August at Carriageworks）。演期待复核。",
    "image": "http://hayestheatre.com.au/wp-content/uploads/2026/09/11.png",
    "imageCredit": "官方宣传图 © Hayes Theatre Co"
  },
  {
    "id": "2027-in-conversation",
    "title": "2027 In Conversation",
    "genre": "音乐剧",
    "scale": "专业制作",
    "venue": "hayes",
    "company": "",
    "start": "2027-09-29",
    "end": "2027-09-29",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "",
    "desc": "2027 In Conversation 在Hayes Theatre上演，演期 2027-09-29 至 2027-09-29。本条目由官方节目单汇总，暂无官方剧情简介。",
    "source": "https://hayestheatre.com.au/event/2027-in-conversation/",
    "booking": "https://boxoffice.hayestheatre.com.au/tiny/2027-in-conversation",
    "bookingLabel": "官方场次与购票",
    "sessions": [],
    "sessionsComplete": false,
    "schedule": "已公布 0 场（2027-09-29 至 2027-09-29）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "image": "http://hayestheatre.com.au/wp-content/uploads/2026/09/Launch-Socials-1.png",
    "imageCredit": "官方宣传图 © Hayes Theatre Co"
  },
  {
    "id": "theatre-club-wake-in-fright",
    "title": "Theatre Club: Wake in Fright",
    "genre": "话剧",
    "scale": "专业制作",
    "venue": "carriageworks",
    "company": "",
    "start": "2026-12-10",
    "end": "2026-12-10",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "",
    "desc": "Theatre Club: Wake in Fright 在Carriageworks上演，演期 2026-12-10 至 2026-12-10。本条目由官方节目单汇总，暂无官方剧情简介。",
    "source": "https://griffintheatre.com.au/whats-on/theatre-club-wake-in-fright/",
    "booking": "https://welcome.griffintheatre.com.au/5027/5047",
    "bookingLabel": "官方场次与购票",
    "sessions": [],
    "sessionsComplete": false,
    "schedule": "已公布 0 场（2026-12-10 至 2026-12-10）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "image": "https://griffintheatre.com.au/wp-content/uploads/2026/09/IMG_1756-1-1-scaled.jpeg",
    "imageCredit": "官方宣传图 © Griffin Theatre Company"
  },
  {
    "id": "mum-club",
    "title": "Mum Club",
    "genre": "话剧",
    "scale": "专业制作",
    "venue": "belvoir",
    "company": "",
    "start": "2026-08-22",
    "end": "2026-09-20",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "",
    "desc": "Mum Club 在Belvoir St Theatre上演，演期 2026-08-22 至 2026-09-20。本条目由官方节目单汇总，暂无官方剧情简介。",
    "source": "https://griffintheatre.com.au/whats-on/mum-club/",
    "booking": "https://welcome.griffintheatre.com.au/overview/4756",
    "bookingLabel": "官方场次与购票",
    "sessions": [],
    "sessionsComplete": false,
    "schedule": "已公布 0 场（2026-08-22 至 2026-09-20）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "image": "https://griffintheatre.com.au/wp-content/uploads/2025/09/Mum_16_9-1-1024x576.png",
    "imageCredit": "官方宣传图 © Griffin Theatre Company"
  },
  {
    "id": "a-clockwork-orange",
    "title": "A Clockwork Orange",
    "genre": "话剧",
    "scale": "专业制作",
    "venue": "belvoir",
    "company": "",
    "start": "2027-05-08",
    "end": "2027-06-06",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "",
    "desc": "A Clockwork Orange 在Belvoir St Theatre上演，演期 2027-05-08 至 2027-06-06（官方已官宣，尚未开票）。本条目由官方节目单汇总，暂无官方剧情简介。",
    "source": "https://belvoir.com.au/productions/a-clockwork-orange/",
    "booking": "https://belvoir.com.au/productions/a-clockwork-orange/",
    "bookingLabel": "查看官方演出公告",
    "sessions": [
      [
        "2027-05-08",
        "19:30",
        ""
      ],
      [
        "2027-05-09",
        "18:30",
        ""
      ],
      [
        "2027-05-11",
        "19:30",
        ""
      ],
      [
        "2027-05-13",
        "19:30",
        ""
      ],
      [
        "2027-05-14",
        "19:30",
        ""
      ],
      [
        "2027-05-15",
        "14:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "官方已公布演期 2027-05-08 至 2027-06-06，但尚未开票。逐场日历待开票后补充。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "status": "announced",
    "onSaleFrom": null,
    "image": "https://belvoir.com.au/wp-content/uploads/2026/09/Website_A-CLOCKWORK-ORANGE-scaled.jpg",
    "imageCredit": "官方宣传图 © Belvoir St Theatre"
  },
  {
    "id": "game-set-match",
    "title": "GAME. SET. MATCH.",
    "genre": "话剧",
    "scale": "专业制作",
    "venue": "belvoir",
    "company": "",
    "start": "2027-01-07",
    "end": "2027-01-23",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "",
    "desc": "GAME. SET. MATCH. 在Belvoir St Theatre上演，演期 2027-01-07 至 2027-01-23（官方已官宣，尚未开票）。本条目由官方节目单汇总，暂无官方剧情简介。",
    "source": "https://belvoir.com.au/productions/game-set-match/",
    "booking": "https://belvoir.com.au/productions/game-set-match/",
    "bookingLabel": "查看官方演出公告",
    "sessions": [
      [
        "2027-01-07",
        "19:30",
        ""
      ],
      [
        "2027-01-08",
        "19:30",
        ""
      ],
      [
        "2027-01-10",
        "17:00",
        ""
      ],
      [
        "2027-01-12",
        "18:30",
        ""
      ],
      [
        "2027-01-13",
        "18:30",
        ""
      ],
      [
        "2027-01-14",
        "13:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "官方已公布演期 2027-01-07 至 2027-01-23，但尚未开票。逐场日历待开票后补充。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "status": "announced",
    "onSaleFrom": null,
    "image": "https://belvoir.com.au/wp-content/uploads/2026/09/Website_GAME.-SET.-MATCH_2-scaled.jpg",
    "imageCredit": "官方宣传图 © Belvoir St Theatre"
  },
  {
    "id": "up-late-with-bianca-hunt",
    "title": "Up Late with Bianca Hunt",
    "genre": "话剧",
    "scale": "专业制作",
    "venue": "belvoir",
    "company": "",
    "start": "2027-01-15",
    "end": "2027-01-17",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "",
    "desc": "Up Late with Bianca Hunt 在Belvoir St Theatre上演，演期 2027-01-15 至 2027-01-17。本条目由官方节目单汇总，暂无官方剧情简介。",
    "source": "https://belvoir.com.au/productions/up-late-with-bianca-hunt/",
    "booking": "https://my.belvoir.com.au/packages/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2027-01-15",
        "21:30",
        ""
      ],
      [
        "2027-01-16",
        "21:30",
        ""
      ],
      [
        "2027-01-17",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 3 场（2027-01-15 至 2027-01-17）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "image": "https://belvoir.com.au/wp-content/uploads/2026/09/Website_UP-LATE-WITH-BIANCA-HUNT-scaled.jpg",
    "imageCredit": "官方宣传图 © Belvoir St Theatre"
  },
  {
    "id": "the-book-of-everything",
    "title": "The Book Of Everything",
    "genre": "话剧",
    "scale": "专业制作",
    "venue": "belvoir",
    "company": "",
    "start": "2026-08-22",
    "end": "2026-09-20",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "",
    "desc": "The Book Of Everything 在Belvoir St Theatre上演，演期 2026-08-22 至 2026-09-20。本条目由官方节目单汇总，暂无官方剧情简介。",
    "source": "https://belvoir.com.au/productions/the-book-of-everything-3/",
    "booking": "https://my.belvoir.com.au/packages/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-09-18",
        "19:30",
        ""
      ],
      [
        "2026-09-19",
        "14:00",
        ""
      ],
      [
        "2026-09-19",
        "19:30",
        ""
      ],
      [
        "2026-09-20",
        "17:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 4 场（2026-08-22 至 2026-09-20）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "image": "https://belvoir.com.au/wp-content/uploads/2026/01/Book-of-Everything-1-235-scaled.jpg",
    "imageCredit": "官方宣传图 © Belvoir St Theatre"
  },
  {
    "id": "stereophonic",
    "title": "Stereophonic",
    "genre": "话剧",
    "scale": "专业制作",
    "venue": "belvoir",
    "company": "",
    "start": "2027-03-20",
    "end": "2027-04-25",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "",
    "desc": "Stereophonic 在Belvoir St Theatre上演，演期 2027-03-20 至 2027-04-25（官方已官宣，尚未开票）。本条目由官方节目单汇总，暂无官方剧情简介。",
    "source": "https://belvoir.com.au/productions/stereophonic/",
    "booking": "https://belvoir.com.au/productions/stereophonic/",
    "bookingLabel": "查看官方演出公告",
    "sessions": [
      [
        "2027-03-20",
        "19:30",
        ""
      ],
      [
        "2027-03-21",
        "18:30",
        ""
      ],
      [
        "2027-03-23",
        "19:30",
        ""
      ],
      [
        "2027-03-25",
        "19:30",
        ""
      ],
      [
        "2027-03-27",
        "13:00",
        ""
      ],
      [
        "2027-03-27",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "官方已公布演期 2027-03-20 至 2027-04-25，但尚未开票。逐场日历待开票后补充。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "status": "announced",
    "onSaleFrom": null,
    "image": "https://belvoir.com.au/wp-content/uploads/2026/09/Website_STEREOPHONIC-scaled.jpg",
    "imageCredit": "官方宣传图 © Belvoir St Theatre"
  },
  {
    "id": "dancing-at-lughnasa",
    "title": "Dancing at Lughnasa",
    "genre": "话剧",
    "scale": "专业制作",
    "venue": "belvoir",
    "company": "",
    "start": "2027-11-06",
    "end": "2027-12-12",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "",
    "desc": "Dancing at Lughnasa 在Belvoir St Theatre上演，演期 2027-11-06 至 2027-12-12（官方已官宣，尚未开票）。本条目由官方节目单汇总，暂无官方剧情简介。",
    "source": "https://belvoir.com.au/productions/dancing-at-lughnasa/",
    "booking": "https://belvoir.com.au/productions/dancing-at-lughnasa/",
    "bookingLabel": "查看官方演出公告",
    "sessions": [
      [
        "2027-11-06",
        "19:30",
        ""
      ],
      [
        "2027-11-07",
        "18:30",
        ""
      ],
      [
        "2027-11-09",
        "19:30",
        ""
      ],
      [
        "2027-11-11",
        "19:30",
        ""
      ],
      [
        "2027-11-12",
        "19:30",
        ""
      ],
      [
        "2027-11-13",
        "14:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "官方已公布演期 2027-11-06 至 2027-12-12，但尚未开票。逐场日历待开票后补充。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "status": "announced",
    "onSaleFrom": null,
    "image": "https://belvoir.com.au/wp-content/uploads/2026/09/Website_DANCING-AT-LUGHNASA-scaled.jpg",
    "imageCredit": "官方宣传图 © Belvoir St Theatre"
  },
  {
    "id": "the-landlord",
    "title": "The Landlord",
    "genre": "话剧",
    "scale": "专业制作",
    "venue": "belvoir",
    "company": "",
    "start": "2027-09-25",
    "end": "2027-10-24",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "",
    "desc": "The Landlord 在Belvoir St Theatre上演，演期 2027-09-25 至 2027-10-24（官方已官宣，尚未开票）。本条目由官方节目单汇总，暂无官方剧情简介。",
    "source": "https://belvoir.com.au/productions/the-landlord/",
    "booking": "https://belvoir.com.au/productions/the-landlord/",
    "bookingLabel": "查看官方演出公告",
    "sessions": [
      [
        "2027-09-25",
        "19:30",
        ""
      ],
      [
        "2027-09-26",
        "18:30",
        ""
      ],
      [
        "2027-09-28",
        "19:30",
        ""
      ],
      [
        "2027-09-30",
        "19:30",
        ""
      ],
      [
        "2027-10-01",
        "19:30",
        ""
      ],
      [
        "2027-10-02",
        "14:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "官方已公布演期 2027-09-25 至 2027-10-24，但尚未开票。逐场日历待开票后补充。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "status": "announced",
    "onSaleFrom": null,
    "image": "https://belvoir.com.au/wp-content/uploads/2026/09/Website_THE-LANDLORD-scaled.jpg",
    "imageCredit": "官方宣传图 © Belvoir St Theatre"
  },
  {
    "id": "wish-you-were-here",
    "title": "Wish You Were Here",
    "genre": "话剧",
    "scale": "专业制作",
    "venue": "belvoir",
    "company": "",
    "start": "2027-08-28",
    "end": "2027-09-19",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "",
    "desc": "Wish You Were Here 在Belvoir St Theatre上演，演期 2027-08-28 至 2027-09-19（官方已官宣，尚未开票）。本条目由官方节目单汇总，暂无官方剧情简介。",
    "source": "https://belvoir.com.au/productions/wish-you-were-here/",
    "booking": "https://belvoir.com.au/productions/wish-you-were-here/",
    "bookingLabel": "查看官方演出公告",
    "sessions": [
      [
        "2027-08-28",
        "19:30",
        ""
      ],
      [
        "2027-08-29",
        "18:30",
        ""
      ],
      [
        "2027-08-31",
        "19:30",
        ""
      ],
      [
        "2027-09-02",
        "19:30",
        ""
      ],
      [
        "2027-09-03",
        "19:30",
        ""
      ],
      [
        "2027-09-04",
        "14:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "官方已公布演期 2027-08-28 至 2027-09-19，但尚未开票。逐场日历待开票后补充。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "status": "announced",
    "onSaleFrom": null,
    "image": "https://belvoir.com.au/wp-content/uploads/2026/09/Website_WISH-YOU-WERE-HERE-scaled.jpg",
    "imageCredit": "官方宣传图 © Belvoir St Theatre"
  },
  {
    "id": "the-search-for-signs-of-intelligent-life-in-the-universe",
    "title": "The Search for Signs of Intelligent Life in the Universe",
    "genre": "话剧",
    "scale": "专业制作",
    "venue": "belvoir",
    "company": "",
    "start": "2027-06-12",
    "end": "2027-07-18",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "",
    "desc": "The Search for Signs of Intelligent Life in the Universe 在Belvoir St Theatre上演，演期 2027-06-12 至 2027-07-18（官方已官宣，尚未开票）。本条目由官方节目单汇总，暂无官方剧情简介。",
    "source": "https://belvoir.com.au/productions/the-search-for-signs-of-intelligent-life-in-the-universe/",
    "booking": "https://belvoir.com.au/productions/the-search-for-signs-of-intelligent-life-in-the-universe/",
    "bookingLabel": "查看官方演出公告",
    "sessions": [
      [
        "2027-06-12",
        "19:30",
        ""
      ],
      [
        "2027-06-13",
        "18:30",
        ""
      ],
      [
        "2027-06-15",
        "19:30",
        ""
      ],
      [
        "2027-06-17",
        "19:30",
        ""
      ],
      [
        "2027-06-18",
        "19:30",
        ""
      ],
      [
        "2027-06-19",
        "14:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "官方已公布演期 2027-06-12 至 2027-07-18，但尚未开票。逐场日历待开票后补充。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "status": "announced",
    "onSaleFrom": null,
    "image": "https://belvoir.com.au/wp-content/uploads/2026/09/Website_INTELLIGENT-LIFE-IN-THE-UNIVERSE-scaled.jpg",
    "imageCredit": "官方宣传图 © Belvoir St Theatre"
  },
  {
    "id": "the-lark",
    "title": "The Lark",
    "genre": "话剧",
    "scale": "专业制作",
    "venue": "belvoir",
    "company": "",
    "start": "2027-02-10",
    "end": "2027-03-07",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "",
    "desc": "The Lark 在Belvoir St Theatre上演，演期 2027-02-10 至 2027-03-07（官方已官宣，尚未开票）。本条目由官方节目单汇总，暂无官方剧情简介。",
    "source": "https://belvoir.com.au/productions/the-lark/",
    "booking": "https://belvoir.com.au/productions/the-lark/",
    "bookingLabel": "查看官方演出公告",
    "sessions": [
      [
        "2027-02-10",
        "19:30",
        ""
      ],
      [
        "2027-02-11",
        "19:30",
        ""
      ],
      [
        "2027-02-13",
        "14:00",
        ""
      ],
      [
        "2027-02-13",
        "19:30",
        ""
      ],
      [
        "2027-02-14",
        "17:00",
        ""
      ],
      [
        "2027-02-17",
        "18:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "官方已公布演期 2027-02-10 至 2027-03-07，但尚未开票。逐场日历待开票后补充。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "status": "announced",
    "onSaleFrom": null,
    "image": "https://belvoir.com.au/wp-content/uploads/2026/09/Website_THE-LARK-scaled.jpg",
    "imageCredit": "官方宣传图 © Belvoir St Theatre"
  },
  {
    "id": "redfern-renaissance",
    "title": "Redfern Renaissance",
    "genre": "话剧",
    "scale": "专业制作",
    "venue": "belvoir",
    "company": "",
    "start": "2027-01-15",
    "end": "2027-01-23",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "",
    "desc": "Redfern Renaissance 在Belvoir St Theatre上演，演期 2027-01-15 至 2027-01-23（官方已官宣，尚未开票）。本条目由官方节目单汇总，暂无官方剧情简介。",
    "source": "https://belvoir.com.au/productions/redfern-renaissance-2027/",
    "booking": "https://belvoir.com.au/productions/redfern-renaissance-2027/",
    "bookingLabel": "查看官方演出公告",
    "sessions": [
      [
        "2027-01-15",
        "18:00",
        ""
      ],
      [
        "2027-01-17",
        "18:00",
        ""
      ],
      [
        "2027-01-22",
        "18:00",
        ""
      ],
      [
        "2027-01-23",
        "18:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "官方已公布演期 2027-01-15 至 2027-01-23，但尚未开票。逐场日历待开票后补充。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "status": "announced",
    "onSaleFrom": null,
    "image": "https://belvoir.com.au/wp-content/uploads/2026/09/Website_REDFERN-RENAISSANCE-scaled.jpg",
    "imageCredit": "官方宣传图 © Belvoir St Theatre"
  },
  {
    "id": "dirty-diamonds",
    "title": "Dirty Diamonds",
    "genre": "话剧",
    "scale": "专业制作",
    "venue": "belvoir",
    "company": "",
    "start": "2027-07-31",
    "end": "2027-08-22",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "",
    "desc": "Dirty Diamonds 在Belvoir St Theatre上演，演期 2027-07-31 至 2027-08-22（官方已官宣，尚未开票）。本条目由官方节目单汇总，暂无官方剧情简介。",
    "source": "https://belvoir.com.au/productions/dirty-diamonds/",
    "booking": "https://belvoir.com.au/productions/dirty-diamonds/",
    "bookingLabel": "查看官方演出公告",
    "sessions": [
      [
        "2027-07-31",
        "19:30",
        ""
      ],
      [
        "2027-08-01",
        "18:30",
        ""
      ],
      [
        "2027-08-03",
        "19:30",
        ""
      ],
      [
        "2027-08-05",
        "19:30",
        ""
      ],
      [
        "2027-08-06",
        "19:30",
        ""
      ],
      [
        "2027-08-07",
        "14:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "官方已公布演期 2027-07-31 至 2027-08-22，但尚未开票。逐场日历待开票后补充。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "status": "announced",
    "onSaleFrom": null,
    "image": "https://belvoir.com.au/wp-content/uploads/2026/09/Website_DIRTY-DIAMONDS-scaled.jpg",
    "imageCredit": "官方宣传图 © Belvoir St Theatre"
  },
  {
    "id": "fairview",
    "title": "FAIRVIEW",
    "genre": "话剧",
    "scale": "专业制作",
    "venue": "belvoir",
    "company": "",
    "start": "2027-11-07",
    "end": "2027-11-27",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "",
    "desc": "FAIRVIEW 在Belvoir St Theatre上演，演期 2027-11-07 至 2027-11-27。本条目由官方节目单汇总，暂无官方剧情简介。",
    "source": "https://belvoir.com.au/productions/fairview/",
    "booking": "https://my.belvoir.com.au/overview/15334",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2027-11-07",
        "18:45",
        ""
      ],
      [
        "2027-11-09",
        "19:45",
        ""
      ],
      [
        "2027-11-11",
        "19:45",
        ""
      ],
      [
        "2027-11-13",
        "14:15",
        ""
      ],
      [
        "2027-11-13",
        "19:45",
        ""
      ],
      [
        "2027-11-14",
        "17:15",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 6 场（2027-11-07 至 2027-11-27）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "image": "https://belvoir.com.au/wp-content/uploads/2026/07/Potential-Hero-Image-scaled.jpg",
    "imageCredit": "官方宣传图 © Belvoir St Theatre"
  },
  {
    "id": "the-crocodile",
    "title": "THE CROCODILE",
    "genre": "话剧",
    "scale": "专业制作",
    "venue": "belvoir",
    "company": "",
    "start": "2027-09-26",
    "end": "2027-10-16",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "",
    "desc": "THE CROCODILE 在Belvoir St Theatre上演，演期 2027-09-26 至 2027-10-16。本条目由官方节目单汇总，暂无官方剧情简介。",
    "source": "https://belvoir.com.au/productions/the-crocodile/",
    "booking": "https://my.belvoir.com.au/overview/15332",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2027-09-26",
        "18:45",
        ""
      ],
      [
        "2027-09-28",
        "19:45",
        ""
      ],
      [
        "2027-09-30",
        "19:45",
        ""
      ],
      [
        "2027-10-02",
        "14:15",
        ""
      ],
      [
        "2027-10-02",
        "19:45",
        ""
      ],
      [
        "2027-10-03",
        "17:15",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 6 场（2027-09-26 至 2027-10-16）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "image": "https://belvoir.com.au/wp-content/uploads/2026/08/25A_2627_1897x1067.png",
    "imageCredit": "官方宣传图 © Belvoir St Theatre"
  },
  {
    "id": "a-handful-of-soil",
    "title": "A HANDFUL OF SOIL",
    "genre": "话剧",
    "scale": "专业制作",
    "venue": "belvoir",
    "company": "",
    "start": "2027-08-29",
    "end": "2027-09-19",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "",
    "desc": "A HANDFUL OF SOIL 在Belvoir St Theatre上演，演期 2027-08-29 至 2027-09-19。本条目由官方节目单汇总，暂无官方剧情简介。",
    "source": "https://belvoir.com.au/productions/a-handful-of-soil/",
    "booking": "https://my.belvoir.com.au/overview/15330",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2027-08-29",
        "18:45",
        ""
      ],
      [
        "2027-08-31",
        "19:45",
        ""
      ],
      [
        "2027-09-02",
        "19:45",
        ""
      ],
      [
        "2027-09-04",
        "14:15",
        ""
      ],
      [
        "2027-09-04",
        "19:45",
        ""
      ],
      [
        "2027-09-05",
        "17:15",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 6 场（2027-08-29 至 2027-09-19）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "image": "https://belvoir.com.au/wp-content/uploads/2026/08/handfulsoilhero_Alec-Council-scaled.jpg",
    "imageCredit": "官方宣传图 © Belvoir St Theatre"
  },
  {
    "id": "first-summer",
    "title": "FIRST SUMMER",
    "genre": "话剧",
    "scale": "专业制作",
    "venue": "belvoir",
    "company": "",
    "start": "2027-08-01",
    "end": "2027-08-22",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "",
    "desc": "FIRST SUMMER 在Belvoir St Theatre上演，演期 2027-08-01 至 2027-08-22。本条目由官方节目单汇总，暂无官方剧情简介。",
    "source": "https://belvoir.com.au/productions/first-summer/",
    "booking": "https://my.belvoir.com.au/overview/15328",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2027-08-01",
        "18:45",
        ""
      ],
      [
        "2027-08-03",
        "19:45",
        ""
      ],
      [
        "2027-08-05",
        "19:45",
        ""
      ],
      [
        "2027-08-07",
        "14:15",
        ""
      ],
      [
        "2027-08-07",
        "19:45",
        ""
      ],
      [
        "2027-08-08",
        "17:15",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 6 场（2027-08-01 至 2027-08-22）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "image": "https://belvoir.com.au/wp-content/uploads/2026/07/FIRSTSUMMER_BLACKWHITE_LANDSCAPE1_POSTER-scaled.jpeg",
    "imageCredit": "官方宣传图 © Belvoir St Theatre"
  },
  {
    "id": "the-party-there",
    "title": "THE PARTY THERE",
    "genre": "话剧",
    "scale": "专业制作",
    "venue": "belvoir",
    "company": "",
    "start": "2027-06-13",
    "end": "2027-07-03",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "",
    "desc": "THE PARTY THERE 在Belvoir St Theatre上演，演期 2027-06-13 至 2027-07-03。本条目由官方节目单汇总，暂无官方剧情简介。",
    "source": "https://belvoir.com.au/productions/the-party-there/",
    "booking": "https://my.belvoir.com.au/overview/15326",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2027-06-13",
        "18:45",
        ""
      ],
      [
        "2027-06-15",
        "19:45",
        ""
      ],
      [
        "2027-06-17",
        "19:45",
        ""
      ],
      [
        "2027-06-19",
        "14:15",
        ""
      ],
      [
        "2027-06-19",
        "19:45",
        ""
      ],
      [
        "2027-06-20",
        "17:15",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 6 场（2027-06-13 至 2027-07-03）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "image": "https://belvoir.com.au/wp-content/uploads/2026/07/2-scaled.jpg",
    "imageCredit": "官方宣传图 © Belvoir St Theatre"
  },
  {
    "id": "a-well-known-stranger",
    "title": "A WELL-KNOWN STRANGER",
    "genre": "话剧",
    "scale": "专业制作",
    "venue": "belvoir",
    "company": "",
    "start": "2027-05-16",
    "end": "2027-06-06",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "",
    "desc": "A WELL-KNOWN STRANGER 在Belvoir St Theatre上演，演期 2027-05-16 至 2027-06-06。本条目由官方节目单汇总，暂无官方剧情简介。",
    "source": "https://belvoir.com.au/productions/a-well-known-stranger/",
    "booking": "https://my.belvoir.com.au/overview/15324",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2027-05-16",
        "17:15",
        ""
      ],
      [
        "2027-05-18",
        "18:45",
        ""
      ],
      [
        "2027-05-19",
        "18:45",
        ""
      ],
      [
        "2027-05-21",
        "19:45",
        ""
      ],
      [
        "2027-05-22",
        "14:15",
        ""
      ],
      [
        "2027-05-22",
        "19:45",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 6 场（2027-05-16 至 2027-06-06）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "image": "https://belvoir.com.au/wp-content/uploads/2026/08/25aimageA.W.K.S-scaled.jpg",
    "imageCredit": "官方宣传图 © Belvoir St Theatre"
  },
  {
    "id": "getaway",
    "title": "GETAWAY",
    "genre": "话剧",
    "scale": "专业制作",
    "venue": "belvoir",
    "company": "",
    "start": "2027-04-11",
    "end": "2027-05-01",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "",
    "desc": "GETAWAY 在Belvoir St Theatre上演，演期 2027-04-11 至 2027-05-01。本条目由官方节目单汇总，暂无官方剧情简介。",
    "source": "https://belvoir.com.au/productions/getaway/",
    "booking": "https://my.belvoir.com.au/overview/15322",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2027-04-11",
        "17:15",
        ""
      ],
      [
        "2027-04-13",
        "18:45",
        ""
      ],
      [
        "2027-04-14",
        "18:45",
        ""
      ],
      [
        "2027-04-16",
        "19:45",
        ""
      ],
      [
        "2027-04-17",
        "14:15",
        ""
      ],
      [
        "2027-04-17",
        "19:45",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 6 场（2027-04-11 至 2027-05-01）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "image": "https://belvoir.com.au/wp-content/uploads/2026/07/Getaway-25A-Hero-scaled.jpg",
    "imageCredit": "官方宣传图 © Belvoir St Theatre"
  },
  {
    "id": "ripple",
    "title": "RIPPLE",
    "genre": "话剧",
    "scale": "专业制作",
    "venue": "belvoir",
    "company": "",
    "start": "2027-02-03",
    "end": "2027-03-06",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "",
    "desc": "RIPPLE 在Belvoir St Theatre上演，演期 2027-02-03 至 2027-03-06。本条目由官方节目单汇总，暂无官方剧情简介。",
    "source": "https://belvoir.com.au/productions/ripple/",
    "booking": "https://my.belvoir.com.au/overview/15320",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2027-02-03",
        "13:15",
        ""
      ],
      [
        "2027-02-14",
        "17:15",
        ""
      ],
      [
        "2027-02-16",
        "18:45",
        ""
      ],
      [
        "2027-02-17",
        "18:45",
        ""
      ],
      [
        "2027-02-19",
        "19:45",
        ""
      ],
      [
        "2027-02-20",
        "14:15",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 6 场（2027-02-03 至 2027-03-06）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "image": "https://belvoir.com.au/wp-content/uploads/2026/08/25A_27_03_Ripple_1897x1067-1.png",
    "imageCredit": "官方宣传图 © Belvoir St Theatre"
  },
  {
    "id": "the-king-who-was-a-king",
    "title": "THE KING WHO WAS A KING",
    "genre": "话剧",
    "scale": "专业制作",
    "venue": "belvoir",
    "company": "",
    "start": "2026-11-01",
    "end": "2026-11-22",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "",
    "desc": "THE KING WHO WAS A KING 在Belvoir St Theatre上演，演期 2026-11-01 至 2026-11-22。本条目由官方节目单汇总，暂无官方剧情简介。",
    "source": "https://belvoir.com.au/productions/the-king-who-was-a-king/",
    "booking": "https://my.belvoir.com.au/15391/15392",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-11-01",
        "17:15",
        ""
      ],
      [
        "2026-11-03",
        "18:45",
        ""
      ],
      [
        "2026-11-04",
        "18:45",
        ""
      ],
      [
        "2026-11-06",
        "19:45",
        ""
      ],
      [
        "2026-11-07",
        "14:15",
        ""
      ],
      [
        "2026-11-07",
        "19:45",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 6 场（2026-11-01 至 2026-11-22）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "image": "https://belvoir.com.au/wp-content/uploads/2026/08/TKWAK_HeroImage_Option1_v260803_1.2.1-1024x576.png",
    "imageCredit": "官方宣传图 © Belvoir St Theatre"
  },
  {
    "id": "nikos-oikonomopoulos-20-year-anniversary-tour",
    "title": "Nikos Oikonomopoulos - 20 Year Anniversary Tour",
    "genre": "音乐剧",
    "scale": "商业巡演",
    "venue": "lyric",
    "company": "",
    "start": "2026-10-31",
    "end": "2026-10-31",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "售票接口未返回票价，未作估算。",
    "duration": "",
    "desc": "Nikos Oikonomopoulos - 20 Year Anniversary Tour 在Sydney Lyric上演，演期 2026-10-31 至 2026-10-31。本条目由官方节目单汇总，暂无官方剧情简介。",
    "source": "https://www.sydneylyric.com.au/nikos-oikonomopoulos---20-year-anniversary-tour",
    "booking": "https://www.ticketmaster.com.au:443/nikos-oikonomopoulos-20-year-anniversary-tour-pyrmont-31-10-2026/event/13006521B33B63DE",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-10-31",
        "20:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 1 场（2026-10-31 至 2026-10-31）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-20",
    "image": "https://foundation-prod.imgix.net/shows/headers/2048-x-1364.png",
    "imageCredit": "官方宣传图 © Sydney Lyric"
  },
  {
    "id": "gypsy",
    "title": "Gypsy",
    "genre": "音乐剧",
    "scale": "社区剧团",
    "venue": "bryanbrown",
    "company": "Bankstown Theatre Company",
    "start": "2026-11-06",
    "end": "2026-11-15",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "票价请以官方售票页为准，本站未作估算。",
    "duration": "",
    "desc": "Bankstown Theatre Company 在 Bryan Brown Theatre 上演的社区制作。演期为 2026-11-06 至 2026-11-15；详情请查看官方页面。",
    "source": "https://www.bankstowntheatrecompany.com/auditions.html",
    "booking": "https://AUBANKSTOWNTC.sales.ticketsearch.com/sales/salesevent/166939",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-11-06",
        "19:30",
        ""
      ],
      [
        "2026-11-07",
        "13:30",
        ""
      ],
      [
        "2026-11-07",
        "19:30",
        ""
      ],
      [
        "2026-11-08",
        "13:30",
        ""
      ],
      [
        "2026-11-13",
        "19:30",
        ""
      ],
      [
        "2026-11-14",
        "13:30",
        ""
      ],
      [
        "2026-11-14",
        "19:30",
        ""
      ],
      [
        "2026-11-15",
        "13:30",
        ""
      ]
    ],
    "sessionsComplete": true,
    "schedule": "已公布 8 场（2026-11-06 至 2026-11-15）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-25",
    "image": "https://www.bankstowntheatrecompany.com/uploads/1/3/2/1/13211956/btc-website-news-square-gypsy-1_orig.png",
    "imageCredit": "图片来源：Bankstown Theatre Company",
    "evidenceUrls": [
      "https://www.bankstowntheatrecompany.com/auditions.html"
    ]
  },
  {
    "id": "grease",
    "title": "Grease",
    "genre": "音乐剧",
    "scale": "社区剧团",
    "venue": "rockdaletownhall",
    "company": "Rockdale Musical Society",
    "start": "2026-11-06",
    "end": "2026-11-14",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "票价请以官方售票页为准，本站未作估算。",
    "duration": "",
    "desc": "Rockdale Musical Society 在 Rockdale Town Hall 上演的社区制作。演期为 2026-11-06 至 2026-11-14；详情请查看官方页面。",
    "source": "https://www.rockdalemusicalsociety.com/",
    "booking": "https://www.trybooking.com/events/landing/1586096",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-11-06",
        "19:30",
        ""
      ],
      [
        "2026-11-07",
        "13:30",
        ""
      ],
      [
        "2026-11-07",
        "19:30",
        ""
      ],
      [
        "2026-11-08",
        "13:30",
        ""
      ],
      [
        "2026-11-12",
        "19:30",
        ""
      ],
      [
        "2026-11-13",
        "19:30",
        ""
      ],
      [
        "2026-11-14",
        "13:30",
        ""
      ],
      [
        "2026-11-14",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": true,
    "schedule": "已公布 8 场（2026-11-06 至 2026-11-14）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-25",
    "evidenceUrls": [
      "https://www.rockdalemusicalsociety.com/"
    ]
  },
  {
    "id": "trial-by-jury-the-savoyards",
    "title": "Trial by Jury & The Savoyards",
    "genre": "歌剧",
    "scale": "社区剧团",
    "venue": "smithauditorium",
    "company": "Gilbert & Sullivan Opera Sydney",
    "start": "2026-10-09",
    "end": "2026-10-11",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "票价请以官方售票页为准，本站未作估算。",
    "duration": "",
    "desc": "Gilbert & Sullivan Opera Sydney 在 Smith Auditorium (Shore) 上演的社区制作。演期为 2026-10-09 至 2026-10-11；详情请查看官方页面。",
    "source": "https://www.gsosydney.com.au/booking.html",
    "booking": "https://www.trybooking.com/events/landing/1545591",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-10-09",
        "19:30",
        ""
      ],
      [
        "2026-10-10",
        "13:30",
        ""
      ],
      [
        "2026-10-10",
        "19:30",
        ""
      ],
      [
        "2026-10-11",
        "13:30",
        ""
      ]
    ],
    "sessionsComplete": true,
    "schedule": "已公布 4 场（2026-10-09 至 2026-10-11）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-25",
    "evidenceUrls": [
      "https://www.gsosydney.com.au/booking.html"
    ]
  },
  {
    "id": "catch-me-if-you-can",
    "title": "Catch Me If You Can",
    "genre": "音乐剧",
    "scale": "社区剧团",
    "venue": "petershamtownhall",
    "company": "Inner West Theatre Company",
    "start": "2026-10-16",
    "end": "2026-10-24",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "票价请以官方售票页为准，本站未作估算。",
    "duration": "",
    "desc": "Inner West Theatre Company 在 Petersham Town Hall 上演的社区制作。演期为 2026-10-16 至 2026-10-24；详情请查看官方页面。",
    "source": "https://www.innerwesttheatre.com.au/productions/catch-me-if-you-can-2026",
    "booking": "https://www.trybooking.com/DOECJ",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-10-17",
        "14:00",
        ""
      ],
      [
        "2026-10-17",
        "19:30",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "已公布 2 场（2026-10-16 至 2026-10-24）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-25",
    "image": "https://images.squarespace-cdn.com/content/v1/64a0f4ce1048530c118e7e15/af9971e9-0492-4b46-9fc3-6185720a0b48/iwtc-cmify-logo",
    "imageCredit": "图片来源：Inner West Theatre Company",
    "evidenceUrls": [
      "https://www.innerwesttheatre.com.au/productions/catch-me-if-you-can-2026"
    ]
  },
  {
    "id": "reefer-madness",
    "title": "Reefer Madness",
    "genre": "音乐剧",
    "scale": "社区剧团",
    "venue": "pioneer",
    "company": "Hornsby Musical Society",
    "start": "2026-11-13",
    "end": "2026-11-22",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "票价请以官方售票页为准，本站未作估算。",
    "duration": "",
    "desc": "Hornsby Musical Society 在 Pioneer Theatre 上演的社区制作。演期为 2026-11-13 至 2026-11-22；详情请查看官方页面。",
    "source": "https://hornsbymusicalsociety.com.au/reefer-madness-2026/",
    "booking": "https://hornsbymusicalsociety.com.au/reefer-madness-2026/",
    "bookingLabel": "官方场次与购票",
    "sessions": [],
    "sessionsComplete": false,
    "schedule": "官方已公布演期 2026-11-13 至 2026-11-22；逐场时间尚未核实，请查看官方购票页面。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-25",
    "image": "https://hornsbymusicalsociety.com.au/wp-content/uploads/2025/06/509358891_1315301680600951_3404021008410223181_n.jpg",
    "imageCredit": "图片来源：Hornsby Musical Society",
    "evidenceUrls": [
      "https://hornsbymusicalsociety.com.au/reefer-madness-2026/"
    ]
  },
  {
    "id": "the-audience",
    "title": "The Audience",
    "genre": "话剧",
    "scale": "社区剧团",
    "venue": "pavilioncastlehill",
    "company": "Castle Hill Players",
    "start": "2026-11-13",
    "end": "2026-12-05",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "票价请以官方售票页为准，本站未作估算。",
    "duration": "",
    "desc": "Castle Hill Players 在 Pavilion Theatre 上演的社区制作。演期为 2026-11-13 至 2026-12-05；详情请查看官方页面。",
    "source": "https://paviliontheatre.org.au/the-audience/",
    "booking": "https://CHP1.sales.ticketsearch.com/sales/salesevent/155595",
    "bookingLabel": "官方场次与购票",
    "sessions": [],
    "sessionsComplete": false,
    "schedule": "官方已公布演期 2026-11-13 至 2026-12-05；逐场时间尚未核实，请查看官方购票页面。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-25",
    "image": "https://paviliontheatre.org.au/wp-content/uploads/2025/08/Audience-Square-Showpage-1024x1024.jpg",
    "imageCredit": "图片来源：Castle Hill Players",
    "evidenceUrls": [
      "https://paviliontheatre.org.au/the-audience/"
    ]
  },
  {
    "id": "yerma",
    "title": "Yerma",
    "genre": "话剧",
    "scale": "社区剧团",
    "venue": "genesian",
    "company": "Genesian Theatre Company",
    "start": "2026-10-23",
    "end": "2026-11-14",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "票价请以官方售票页为准，本站未作估算。",
    "duration": "",
    "desc": "Genesian Theatre Company 在 Genesian Theatre 上演的社区制作。演期为 2026-10-23 至 2026-11-14；详情请查看官方页面。",
    "source": "https://genesiantheatre.com.au/events/yerma/",
    "booking": "https://genesian.sales.ticketsearch.com/sales/salesevent/156448",
    "bookingLabel": "官方场次与购票",
    "sessions": [],
    "sessionsComplete": false,
    "schedule": "官方已公布演期 2026-10-23 至 2026-11-14；逐场时间尚未核实，请查看官方购票页面。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-25",
    "image": "https://genesiantheatre.com.au/wp-content/uploads/8-scaled.png",
    "imageCredit": "图片来源：Genesian Theatre Company",
    "evidenceUrls": [
      "https://genesiantheatre.com.au/events/yerma/"
    ]
  },
  {
    "id": "don-t-dress-for-dinner",
    "title": "Don't Dress for Dinner",
    "genre": "话剧",
    "scale": "社区剧团",
    "venue": "clubryde",
    "company": "Hunters Hill Theatre",
    "start": "2026-11-13",
    "end": "2026-12-06",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "票价请以官方售票页为准，本站未作估算。",
    "duration": "",
    "desc": "Hunters Hill Theatre 在 Hunters Hill Theatre at Club Ryde 上演的社区制作。演期为 2026-11-13 至 2026-12-06；详情请查看官方页面。",
    "source": "https://www.huntershilltheatre.com.au/",
    "booking": "https://huntershill.sales.ticketsearch.com/sales/salesevent/155537",
    "bookingLabel": "官方场次与购票",
    "sessions": [],
    "sessionsComplete": false,
    "schedule": "官方已公布演期 2026-11-13 至 2026-12-06；逐场时间尚未核实，请查看官方购票页面。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-25",
    "image": "https://www.huntershilltheatre.com.au/uploads/1/3/1/4/131416027/don-t-dress-for-dinner-a6-postcard-vs4_orig.jpg",
    "imageCredit": "图片来源：Hunters Hill Theatre",
    "evidenceUrls": [
      "https://www.huntershilltheatre.com.au/"
    ]
  },
  {
    "id": "come-from-away",
    "title": "Come From Away",
    "genre": "音乐剧",
    "scale": "社区剧团",
    "venue": "latviantheatre",
    "company": "Strathfield Musical Society",
    "start": "2026-10-23",
    "end": "2026-10-31",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "票价请以官方售票页为准，本站未作估算。",
    "duration": "",
    "desc": "Strathfield Musical Society 在 Latvian Theatre 上演的社区制作。演期为 2026-10-23 至 2026-10-31；详情请查看官方页面。",
    "source": "https://strathfieldmusicalsociety.com.au",
    "booking": "https://strathfieldmusicalsociety.com.au/bookings/",
    "bookingLabel": "官方场次与购票",
    "sessions": [],
    "sessionsComplete": false,
    "schedule": "官方已公布演期 2026-10-23 至 2026-10-31；逐场时间尚未核实，请查看官方购票页面。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-25",
    "image": "https://strathfieldmusicalsociety.com.au/sms/wp-content/uploads/2026/06/come-from-away-70.webp",
    "imageCredit": "图片来源：Strathfield Musical Society",
    "evidenceUrls": [
      "https://strathfieldmusicalsociety.com.au"
    ]
  },
  {
    "id": "a-christmas-carol-a-ghost-story-of-christmas",
    "title": "A Christmas Carol – A Ghost Story of Christmas",
    "genre": "话剧",
    "scale": "社区剧团",
    "venue": "zenith",
    "company": "Pymble Players",
    "start": "2026-11-13",
    "end": "2026-11-22",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "票价请以官方售票页为准，本站未作估算。",
    "duration": "",
    "desc": "Pymble Players 在 Zenith Theatre 上演的社区制作。演期为 2026-11-13 至 2026-11-22；详情请查看官方页面。",
    "source": "https://pymbleplayers.com.au/a-christmas-carol",
    "booking": "https://pymbleplayers.com.au/tickets",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-11-13",
        "19:30",
        ""
      ],
      [
        "2026-11-14",
        "16:00",
        ""
      ],
      [
        "2026-11-15",
        "16:00",
        ""
      ],
      [
        "2026-11-19",
        "19:30",
        ""
      ],
      [
        "2026-11-20",
        "19:30",
        ""
      ],
      [
        "2026-11-21",
        "14:30",
        ""
      ],
      [
        "2026-11-21",
        "19:30",
        ""
      ],
      [
        "2026-11-22",
        "16:00",
        ""
      ]
    ],
    "sessionsComplete": true,
    "schedule": "已公布 8 场（2026-11-13 至 2026-11-22）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-25",
    "image": "https://images.squarespace-cdn.com/content/v1/5de5cc60fbd78f1f1810f88a/859909ed-7cff-4430-b07b-a1f6bc9c93dd/A4+Poster+-+A+Christmas+Carol.jpg",
    "imageCredit": "图片来源：Pymble Players",
    "evidenceUrls": [
      "https://pymbleplayers.com.au/a-christmas-carol"
    ]
  },
  {
    "id": "rhinestone-rex-miss-monica",
    "title": "Rhinestone Rex & Miss Monica",
    "genre": "话剧",
    "scale": "社区剧团",
    "venue": "northnarrabeen",
    "company": "Elanora Players",
    "start": "2026-10-02",
    "end": "2026-10-10",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "票价请以官方售票页为准，本站未作估算。",
    "duration": "",
    "desc": "Elanora Players 在 North Narrabeen Community Centre 上演的社区制作。演期为 2026-10-02 至 2026-10-10；详情请查看官方页面。",
    "source": "https://elanoraplayers.com.au/",
    "booking": "https://www.ticketebo.com.au/elanora-players-inc",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-10-02",
        "19:30",
        ""
      ],
      [
        "2026-10-03",
        "15:00",
        ""
      ],
      [
        "2026-10-03",
        "19:30",
        ""
      ],
      [
        "2026-10-04",
        "11:00",
        ""
      ],
      [
        "2026-10-04",
        "15:00",
        ""
      ],
      [
        "2026-10-09",
        "19:30",
        ""
      ],
      [
        "2026-10-10",
        "15:00",
        ""
      ]
    ],
    "sessionsComplete": true,
    "schedule": "已公布 7 场（2026-10-02 至 2026-10-10）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-25",
    "evidenceUrls": [
      "https://elanoraplayers.com.au/"
    ]
  },
  {
    "id": "take-a-bow-70th-anniversary-concert",
    "title": "Take A Bow – 70th Anniversary Concert",
    "genre": "卡巴莱",
    "scale": "社区剧团",
    "venue": "thecube",
    "company": "Campbelltown Theatre Group",
    "start": "2026-11-01",
    "end": "2026-11-01",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "票价请以官方售票页为准，本站未作估算。",
    "duration": "",
    "desc": "Campbelltown Theatre Group 在 The CUBE 上演的社区制作。演期为 2026-11-01 至 2026-11-01；详情请查看官方页面。",
    "source": "https://www.ctgi.org.au/take-a-bow",
    "booking": "https://cathclub.sales.ticketsearch.com/sales/salesevent/169004",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-11-01",
        "14:00",
        ""
      ]
    ],
    "sessionsComplete": true,
    "schedule": "已公布 1 场（2026-11-01 至 2026-11-01）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-25",
    "image": "https://static.wixstatic.com/media/94d264_ff74cbc801fb4f7eaa65dd1598347456~mv2.png/v1/fill/w_400,h_266,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/70th%20Anniversary_hero.png",
    "imageCredit": "图片来源：Campbelltown Theatre Group",
    "evidenceUrls": [
      "https://www.ctgi.org.au/take-a-bow"
    ]
  },
  {
    "id": "steel-magnolias",
    "title": "Steel Magnolias",
    "genre": "话剧",
    "scale": "社区剧团",
    "venue": "guild",
    "company": "The Guild Theatre",
    "start": "2026-11-06",
    "end": "2026-11-28",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "票价请以官方售票页为准，本站未作估算。",
    "duration": "",
    "desc": "The Guild Theatre 在 The Guild Theatre 上演的社区制作。演期为 2026-11-06 至 2026-11-28；详情请查看官方页面。",
    "source": "https://www.guildtheatre.com.au/2026-season/steel-magnolias/",
    "booking": "https://www.guildtheatre.com.au/2026-season/steel-magnolias/",
    "bookingLabel": "官方场次与购票",
    "sessions": [],
    "sessionsComplete": false,
    "schedule": "官方已公布演期 2026-11-06 至 2026-11-28；逐场时间尚未核实，请查看官方购票页面。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-25",
    "image": "https://www.guildtheatre.com.au/site/wp-content/uploads/2025/12/Magnolias.jpg",
    "imageCredit": "图片来源：The Guild Theatre",
    "evidenceUrls": [
      "https://www.guildtheatre.com.au/2026-season/steel-magnolias/"
    ]
  },
  {
    "id": "arsenic-and-old-lace",
    "title": "Arsenic and Old Lace",
    "genre": "话剧",
    "scale": "社区剧团",
    "venue": "chester",
    "company": "Theatre on Chester",
    "start": "2026-11-06",
    "end": "2026-11-28",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "票价请以官方售票页为准，本站未作估算。",
    "duration": "",
    "desc": "Theatre on Chester 在 Theatre on Chester 上演的社区制作。演期为 2026-11-06 至 2026-11-28；详情请查看官方页面。",
    "source": "https://www.theatreonchester.com.au/post/arsenic-and-old-lace",
    "booking": "https://www.ticketor.com/theatreonchester/arsenic",
    "bookingLabel": "官方场次与购票",
    "sessions": [],
    "sessionsComplete": false,
    "schedule": "官方已公布演期 2026-11-06 至 2026-11-28；逐场时间尚未核实，请查看官方购票页面。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-25",
    "image": "https://static.wixstatic.com/media/12ee53_03c10ffca3b146a1bd5c0afd4045ed2e~mv2.jpg/v1/fill/w_305,h_305,fp_0.50_0.50,q_90,enc_avif,quality_auto/12ee53_03c10ffca3b146a1bd5c0afd4045ed2e~mv2.webp",
    "imageCredit": "图片来源：Theatre on Chester",
    "evidenceUrls": [
      "https://www.theatreonchester.com.au/post/arsenic-and-old-lace"
    ]
  },
  {
    "id": "the-wizard-of-oz",
    "title": "The Wizard of Oz",
    "genre": "音乐剧",
    "scale": "社区剧团",
    "venue": "engadine",
    "company": "Engadine Musical Society",
    "start": "2026-10-16",
    "end": "2026-10-25",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "票价请以官方售票页为准，本站未作估算。",
    "duration": "",
    "desc": "Engadine Musical Society 在 Engadine Community Centre 上演的社区制作。演期为 2026-10-16 至 2026-10-25；详情请查看官方页面。",
    "source": "https://www.engadinemusicalsociety.com.au/2026-the-wizard-of-oz.html",
    "booking": "https://www.engadinemusicalsociety.com.au/2026-the-wizard-of-oz.html",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-10-16",
        "19:30",
        ""
      ],
      [
        "2026-10-17",
        "13:30",
        ""
      ],
      [
        "2026-10-17",
        "19:30",
        ""
      ],
      [
        "2026-10-18",
        "13:30",
        ""
      ],
      [
        "2026-10-20",
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
        "13:30",
        ""
      ],
      [
        "2026-10-24",
        "19:30",
        ""
      ],
      [
        "2026-10-25",
        "13:30",
        ""
      ]
    ],
    "sessionsComplete": true,
    "schedule": "已公布 9 场（2026-10-16 至 2026-10-25）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-25",
    "evidenceUrls": [
      "https://www.engadinemusicalsociety.com.au/2026-the-wizard-of-oz.html"
    ]
  },
  {
    "id": "faust",
    "title": "Faust",
    "genre": "歌剧",
    "scale": "社区剧团",
    "venue": "rockdaletownhall",
    "company": "Rockdale Opera Company",
    "start": "2026-12-05",
    "end": "2026-12-13",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "票价请以官方售票页为准，本站未作估算。",
    "duration": "",
    "desc": "Rockdale Opera Company 在 Rockdale Town Hall 上演的社区制作。演期为 2026-12-05 至 2026-12-13；详情请查看官方页面。",
    "source": "https://www.rockdaleopera.com.au/",
    "booking": "https://www.rockdaleopera.com.au/",
    "bookingLabel": "官方场次与购票",
    "sessions": [
      [
        "2026-12-05",
        "19:30",
        ""
      ],
      [
        "2026-12-06",
        "14:00",
        ""
      ],
      [
        "2026-12-12",
        "19:30",
        ""
      ],
      [
        "2026-12-13",
        "14:00",
        ""
      ]
    ],
    "sessionsComplete": true,
    "schedule": "已公布 4 场（2026-12-05 至 2026-12-13）。具体日期与时间见下方日历；不保证为全季总数。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-25",
    "evidenceUrls": [
      "https://www.rockdaleopera.com.au/"
    ]
  },
  {
    "id": "rapunzel",
    "title": "Rapunzel",
    "genre": "亲子剧",
    "scale": "社区剧团",
    "venue": "beecroft",
    "company": "Beacon Musical Society",
    "start": "2026-11-14",
    "end": "2026-11-28",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "票价请以官方售票页为准，本站未作估算。",
    "duration": "",
    "desc": "Beacon Musical Society 在 Beecroft Community Centre 上演的社区制作。演期为 2026-11-14 至 2026-11-28；详情请查看官方页面。",
    "source": "https://beams.org.au/",
    "booking": "https://beams.org.au/",
    "bookingLabel": "查看官方演出公告",
    "sessions": [],
    "sessionsComplete": false,
    "schedule": "官方已公布演期 2026-11-14 至 2026-11-28，但尚未开票。逐场日历待开票后补充。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-25",
    "status": "announced",
    "onSaleFrom": null,
    "evidenceUrls": [
      "https://beams.org.au/",
      "https://communitytheatre.com.au/whats-on/rapunzel/"
    ]
  },
  {
    "id": "xanadu-jr",
    "title": "Xanadu JR.",
    "genre": "音乐剧",
    "scale": "社区剧团",
    "venue": "potterylane",
    "company": "Lane Cove Theatre Company",
    "start": "2026-11-13",
    "end": "2026-11-29",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "票价请以官方售票页为准，本站未作估算。",
    "duration": "",
    "desc": "Lane Cove Theatre Company 在 Pottery Lane Performance Space 上演的社区制作。演期为 2026-11-13 至 2026-11-29；详情请查看官方页面。",
    "source": "https://lanecovetheatrecompany.com.au/",
    "booking": "https://www.trybooking.com/au/event/1508649",
    "bookingLabel": "官方场次与购票",
    "sessions": [],
    "sessionsComplete": false,
    "schedule": "官方已公布演期 2026-11-13 至 2026-11-29；逐场时间尚未核实，请查看官方购票页面。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-25",
    "evidenceUrls": [
      "https://lanecovetheatrecompany.com.au/",
      "https://www.trybooking.com/au/event/1508649"
    ]
  },
  {
    "id": "hay-fever",
    "title": "Hay Fever",
    "genre": "话剧",
    "scale": "社区剧团",
    "venue": "artscronulla",
    "company": "Arts Theatre Cronulla",
    "start": "2026-10-23",
    "end": "2026-11-28",
    "price": null,
    "priceText": "票价见官方售票页",
    "priceNote": "票价请以官方售票页为准，本站未作估算。",
    "duration": "",
    "desc": "Arts Theatre Cronulla 在 Arts Theatre Cronulla 上演的社区制作。演期为 2026-10-23 至 2026-11-28；详情请查看官方页面。",
    "source": "https://www.artstheatrecronulla.com.au/2026season",
    "booking": "https://www.artstheatrecronulla.com.au/bookings",
    "bookingLabel": "查看官方演出公告",
    "sessions": [
      [
        "2026-10-25",
        "14:00",
        ""
      ],
      [
        "2026-11-01",
        "14:00",
        ""
      ],
      [
        "2026-11-15",
        "14:00",
        ""
      ],
      [
        "2026-11-22",
        "14:00",
        ""
      ]
    ],
    "sessionsComplete": false,
    "schedule": "官方已公布演期 2026-10-23 至 2026-11-28，但尚未开票（2026-10-10 起公开发售）。 已核实 4 场时间，见下方日历。",
    "access": "无障碍座位、迟到入场与观演提示请以官方售票页为准。",
    "verifiedAt": "2026-09-25",
    "status": "announced",
    "onSaleFrom": "2026-10-10",
    "evidenceUrls": [
      "https://www.artstheatrecronulla.com.au/2026season"
    ]
  }
];
const SOURCES = [
  {
    "name": "Hayes Theatre Co",
    "url": "https://hayestheatre.com.au/",
    "group": "主要场馆与剧团",
    "note": "已收录四部；The Rink 售票日历已核对为 7 场，最后一场 10 月 4 日。",
    "status": "已采样",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "Sydney Opera House",
    "url": "https://www.sydneyoperahouse.com/whats-on",
    "group": "主要场馆与剧团",
    "note": "多厅、多类型节目；必须保留具体厅名。",
    "status": "已发现",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "Sydney Theatre Company",
    "url": "https://www.sydneytheatre.com.au/",
    "group": "主要场馆与剧团",
    "note": "按制作与实际场馆匹配，涵盖 Wharf、Roslyn Packer 等。",
    "status": "已采样",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "Belvoir",
    "url": "https://belvoir.com.au/",
    "group": "主要场馆与剧团",
    "note": "已收录主舞台及 25A 制作；区分 Upstairs、Downstairs 与受邀场。",
    "status": "已采样",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "Griffin Theatre Company",
    "url": "https://griffintheatre.com.au/current-season/",
    "group": "主要场馆与剧团",
    "note": "已收录 Wake in Fright 的 2026 年 12 月 Carriageworks 演期。",
    "status": "已采样",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "Ensemble Theatre",
    "url": "https://www.ensemble.com.au/",
    "group": "主要场馆与剧团",
    "note": "话剧、逐场演出时间、优惠和无障碍场次。",
    "status": "已采样",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "Sydney Lyric",
    "url": "https://www.sydneylyric.com.au/whats-on",
    "group": "主要场馆与剧团",
    "note": "商业音乐剧与巡演的场馆节目入口。",
    "status": "已发现",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "Capitol Theatre",
    "url": "https://www.capitoltheatre.com.au/",
    "group": "主要场馆与剧团",
    "note": "主流音乐剧与舞蹈节目；注意同名芭蕾的不同制作。",
    "status": "已采样",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "Theatre Royal Sydney",
    "url": "https://theatreroyalsydney.com/",
    "group": "主要场馆与剧团",
    "note": "SIX、Fiddler 与 Private Lives 已收录；Shawshank 结束日期仍需复核。",
    "status": "已采样",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "Seymour Centre",
    "url": "https://www.seymourcentre.com/",
    "group": "主要场馆与剧团",
    "note": "官方节目入口；筛除非演出的活动。",
    "status": "已发现",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "Carriageworks",
    "url": "https://carriageworks.com.au/",
    "group": "主要场馆与剧团",
    "note": "已核对场馆地址；Wake in Fright 实际演于 Bay 20。",
    "status": "已采样",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "Bell Shakespeare",
    "url": "https://www.bellshakespeare.com.au/",
    "group": "主要场馆与剧团",
    "note": "剧团与巡演信息；不要用公司地址替代演出地。",
    "status": "已发现",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "Riverside Theatres",
    "url": "https://riversideparramatta.com.au/",
    "group": "主要场馆与剧团",
    "note": "Parramatta；改造期间逐条核对演出场地。",
    "status": "已发现",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "The Concourse",
    "url": "https://www.theconcourse.com.au/",
    "group": "主要场馆与剧团",
    "note": "Chatswood；专业及社区制作的交叉来源。",
    "status": "已发现",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "Glen Street Theatre",
    "url": "https://glenstreet.com.au/",
    "group": "主要场馆与剧团",
    "note": "Northern Beaches；话剧、舞蹈与亲子演出。",
    "status": "已发现",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "The Joan",
    "url": "https://www.thejoan.com.au/",
    "group": "主要场馆与剧团",
    "note": "Penrith 节目来源，拓展西悉尼覆盖。",
    "status": "已发现",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "Liverpool Powerhouse（原 Casula Powerhouse）",
    "url": "https://www.liverpoolpowerhouse.com.au/",
    "group": "主要场馆与剧团",
    "note": "旧 Casula 网址已跳转；使用当前官方入口。",
    "status": "已发现",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "Bondi Pavilion",
    "url": "https://www.bondipavilion.com.au/discover/creative_spaces/theatre",
    "group": "主要场馆与剧团",
    "note": "东区剧场；含戏剧、舞蹈等节目。",
    "status": "已发现",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "Opera Australia",
    "url": "https://opera.org.au/whats-on/",
    "group": "舞蹈与歌剧",
    "note": "歌剧及音乐剧，按城市和当地演期拆分。",
    "status": "已采样",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "The Australian Ballet",
    "url": "https://australianballet.com.au/whats-on?loc=sydney",
    "group": "舞蹈与歌剧",
    "note": "Sydney 筛选页；排除其他城市和课程。",
    "status": "已采样",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "Sydney Dance Company",
    "url": "https://www.sydneydancecompany.com/",
    "group": "舞蹈与歌剧",
    "note": "舞蹈节目、巡演；排除常规舞蹈课。",
    "status": "已采样",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "Bangarra Dance Theatre",
    "url": "https://www.bangarra.com.au/performances/",
    "group": "舞蹈与歌剧",
    "note": "舞蹈制作与巡演；按实际城市筛选。",
    "status": "已发现",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "Pinchgut Opera",
    "url": "https://www.pinchgutopera.com.au/shows/semele-2026",
    "group": "舞蹈与歌剧",
    "note": "原型使用 Semele，官网列出完整 5 场。",
    "status": "已采样",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "City Recital Hall",
    "url": "https://www.cityrecitalhall.com/",
    "group": "舞蹈与歌剧",
    "note": "歌剧制作及场馆信息；普通音乐会另行分类。",
    "status": "已发现",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "KXT on Broadway / bAKEHOUSE",
    "url": "https://www.kingsxtheatre.com/",
    "group": "独立与社区",
    "note": "独立制作；现址在 Ultimo，不沿用 Kings Cross 旧址。",
    "status": "已发现",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "Old Fitz Theatre",
    "url": "https://www.oldfitztheatre.com.au/",
    "group": "独立与社区",
    "note": "节目应从现行场馆网站采集，不能只依赖历史运营方。",
    "status": "已发现",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "New Theatre",
    "url": "https://newtheatre.org.au/",
    "group": "独立与社区",
    "note": "已核对两部制作、成人价格、明确列出的部分场次及官方票务入口。",
    "status": "已采样",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "Flight Path Theatre",
    "url": "https://www.flightpaththeatre.org/",
    "group": "独立与社区",
    "note": "Inner West 独立演出与 Fringe 节目。",
    "status": "已发现",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "Genesian Theatre",
    "url": "https://genesiantheatre.com.au/",
    "group": "独立与社区",
    "note": "已核实部分社区制作的演期、场馆与官方入口；有明确时间才录入场次，尚未开启全量自动更新。",
    "status": "已采样",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "Willoughby Theatre Company",
    "url": "https://willoughbytheatreco.com.au/",
    "group": "独立与社区",
    "note": "社区音乐剧；原型已录入 2027 Billy Elliot。",
    "status": "已采样",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "Inner West Theatre Company",
    "url": "https://www.innerwesttheatre.com.au/",
    "group": "独立与社区",
    "note": "已核实部分社区制作的演期、场馆与官方入口；有明确时间才录入场次，尚未开启全量自动更新。",
    "status": "已采样",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "Berowra Musical Society",
    "url": "https://www.bmsi.org.au/",
    "group": "独立与社区",
    "note": "社区目录列出；北悉尼补漏。",
    "status": "目录线索",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "Hornsby Musical Society",
    "url": "https://hornsbymusicalsociety.com.au/",
    "group": "独立与社区",
    "note": "已核实部分社区制作的演期、场馆与官方入口；有明确时间才录入场次，尚未开启全量自动更新。",
    "status": "已采样",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "North Shore Theatre Company",
    "url": "https://www.northshoretheatrecompany.org/",
    "group": "独立与社区",
    "note": "两个社区目录均可发现；季目待采集。",
    "status": "目录线索",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "Noteable Theatre Company",
    "url": "https://noteabletheatrecompany.com/",
    "group": "独立与社区",
    "note": "社区目录列出；季目待核实。",
    "status": "目录线索",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "Sydney Youth Musical Theatre",
    "url": "https://www.symt.com.au/",
    "group": "独立与社区",
    "note": "公开售票演出可纳入，排除仅培训内容。",
    "status": "目录线索",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "Dural Musical Society",
    "url": "https://www.duralmusicalsociety.org/",
    "group": "独立与社区",
    "note": "社区目录列出；覆盖西北区。",
    "status": "目录线索",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "Hills Musical Theatre Company",
    "url": "https://www.hillsmtc.com/",
    "group": "独立与社区",
    "note": "社区目录列出；覆盖 Hills 区。",
    "status": "目录线索",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "Engadine Musical Society",
    "url": "https://www.engadinemusicalsociety.com.au/",
    "group": "独立与社区",
    "note": "已核实部分社区制作的演期、场馆与官方入口；有明确时间才录入场次，尚未开启全量自动更新。",
    "status": "已采样",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "Miranda Musical Theatre Company",
    "url": "https://www.mirandamusicaltheatrecompany.com.au/",
    "group": "独立与社区",
    "note": "社区目录列出；逐条核对购票渠道。",
    "status": "目录线索",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "Rockdale Musical Society",
    "url": "https://www.rockdalemusicalsociety.com/",
    "group": "独立与社区",
    "note": "已核实部分社区制作的演期、场馆与官方入口；有明确时间才录入场次，尚未开启全量自动更新。",
    "status": "已采样",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "Rockdale Opera Company",
    "url": "https://www.rockdaleopera.com.au/",
    "group": "独立与社区",
    "note": "已核实部分社区制作的演期、场馆与官方入口；有明确时间才录入场次，尚未开启全量自动更新。",
    "status": "已采样",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "The Regals Musical Society",
    "url": "https://theregals.com.au/",
    "group": "独立与社区",
    "note": "社区目录列出；按制作页建立记录。",
    "status": "目录线索",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "Bankstown Theatre Company",
    "url": "https://www.bankstowntheatrecompany.com/",
    "group": "独立与社区",
    "note": "已核实部分社区制作的演期、场馆与官方入口；有明确时间才录入场次，尚未开启全量自动更新。",
    "status": "已采样",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "Camden Musical Society",
    "url": "https://camdenmusicalsociety.com.au/",
    "group": "独立与社区",
    "note": "社区目录列出；大悉尼外围可筛选。",
    "status": "目录线索",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "Campbelltown Theatre Group",
    "url": "https://www.ctgi.org.au/",
    "group": "独立与社区",
    "note": "已核实部分社区制作的演期、场馆与官方入口；有明确时间才录入场次，尚未开启全量自动更新。",
    "status": "已采样",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "Blackout Theatre Company",
    "url": "https://www.blackouttheatre.com.au/",
    "group": "独立与社区",
    "note": "社区目录列出；演出页待采集。",
    "status": "目录线索",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "Penrith Musical Comedy Company",
    "url": "https://www.penrithmusical.org/",
    "group": "独立与社区",
    "note": "社区目录列出；西悉尼补漏。",
    "status": "目录线索",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "The Theatre on Chester",
    "url": "https://www.theatreonchester.com.au/",
    "group": "独立与社区",
    "note": "已核实部分社区制作的演期、场馆与官方入口；有明确时间才录入场次，尚未开启全量自动更新。",
    "status": "已采样",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "Ticketmaster Australia",
    "url": "https://www.ticketmaster.com.au/",
    "group": "票务平台",
    "note": "补充售票入口与场次，不能作为全量节目库。",
    "status": "已发现",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "Ticketek",
    "url": "https://premier.ticketek.com.au/",
    "group": "票务平台",
    "note": "补充授权购票入口；保留官方节目页。",
    "status": "已发现",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "TodayTix Sydney",
    "url": "https://www.todaytix.com/?location=sydney",
    "group": "票务平台",
    "note": "演出发现、Rush 和 Lottery 的产品参考。",
    "status": "已采样",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "TryBooking",
    "url": "https://www.trybooking.com/au/event/1586096",
    "group": "票务平台",
    "note": "社区制作购票渠道；已做两条公开活动页试点，逐场时间仍须回主办方官网核对。",
    "status": "两条影子样本已核验",
    "checkedAt": "2026-09-24"
  },
  {
    "name": "Humanitix",
    "url": "https://humanitix.com/au",
    "group": "票务平台",
    "note": "长尾售票渠道；逐条核对主办方归属。",
    "status": "已发现",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "Eventbrite Sydney Theatre",
    "url": "https://www.eventbrite.com.au/b/australia--sydney/arts/theatre/",
    "group": "票务平台",
    "note": "长尾活动线索；需排除课程、工作坊与非剧场活动。",
    "status": "已发现",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "Association of Community Theatre",
    "url": "https://communitytheatre.com.au/whats-on/",
    "group": "目录与艺术节",
    "note": "已读取悉尼名录可见分页：37 条记录、36 个不同名称；15 条节目详情。仅作线索，须经剧团官网核实。",
    "status": "已采样",
    "checkedAt": "2026-09-24"
  },
  {
    "name": "Sydney Community Musical Theatre",
    "url": "https://www.sydneycommunitymusicaltheatre.com/theatre-groups",
    "group": "目录与艺术节",
    "note": "按地区列出的社区音乐剧团；回官网核实每部节目。",
    "status": "已采样",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "Sydney Fringe",
    "url": "https://sydneyfringe.com/",
    "group": "目录与艺术节",
    "note": "独立、小体量及临时场馆演出的重要入口。",
    "status": "已发现",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "Sydney Festival",
    "url": "https://www.sydneyfestival.org.au/",
    "group": "目录与艺术节",
    "note": "跨话剧、舞蹈等艺术门类；按艺术节年份建档。",
    "status": "已发现",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "City of Sydney What’s On",
    "url": "https://whatson.cityofsydney.nsw.gov.au/",
    "group": "目录与艺术节",
    "note": "城市活动目录；用于发现线索并交叉核对。",
    "status": "已发现",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "Holroyd Musical & Dramatic Society",
    "url": "https://www.hmds.org.au/",
    "group": "独立与社区",
    "status": "已发现",
    "note": "官网确认社区剧团及 Legally Blonde 入口；详情与售票页本轮读取失败，尚未录入演期。",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "Private Lives — official production",
    "url": "https://privatelivesplay.com.au/tickets/sydney/",
    "group": "主要场馆与剧团",
    "status": "已采样",
    "note": "用于补核悉尼演出年份及授权票务归属。",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "The Shawshank Redemption — official production",
    "url": "https://www.shawshanklive.com.au/",
    "group": "主要场馆与剧团",
    "status": "已采样",
    "note": "确认悉尼 2027 年 1 月 2 日开演；未明确结束日期，保留待核对。",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "TicketSearch — New Theatre",
    "url": "https://aunewtheatre.sales.ticketsearch.com/sales/salesevent/156918",
    "group": "票务平台",
    "status": "已发现",
    "note": "New Theatre 官方节目页直接链接的售票系统；未核实实时库存。",
    "checkedAt": "2026-09-20"
  },
  {
    "name": "Gilbert & Sullivan Opera Sydney",
    "url": "https://www.gsosydney.com.au/booking.html",
    "group": "独立与社区",
    "status": "已采样",
    "note": "已核实部分社区制作的演期、场馆与官方入口；有明确时间才录入场次，尚未开启全量自动更新。"
  },
  {
    "name": "Castle Hill Players",
    "url": "https://paviliontheatre.org.au/the-audience/",
    "group": "独立与社区",
    "status": "已采样",
    "note": "已核实部分社区制作的演期、场馆与官方入口；有明确时间才录入场次，尚未开启全量自动更新。"
  },
  {
    "name": "Hunters Hill Theatre",
    "url": "https://www.huntershilltheatre.com.au/",
    "group": "独立与社区",
    "status": "已采样",
    "note": "已核实部分社区制作的演期、场馆与官方入口；有明确时间才录入场次，尚未开启全量自动更新。"
  },
  {
    "name": "Strathfield Musical Society",
    "url": "https://strathfieldmusicalsociety.com.au",
    "group": "独立与社区",
    "status": "已采样",
    "note": "已核实部分社区制作的演期、场馆与官方入口；有明确时间才录入场次，尚未开启全量自动更新。"
  },
  {
    "name": "Pymble Players",
    "url": "https://pymbleplayers.com.au/a-christmas-carol",
    "group": "独立与社区",
    "status": "已采样",
    "note": "已核实部分社区制作的演期、场馆与官方入口；有明确时间才录入场次，尚未开启全量自动更新。"
  },
  {
    "name": "Elanora Players",
    "url": "https://elanoraplayers.com.au/",
    "group": "独立与社区",
    "status": "已采样",
    "note": "已核实部分社区制作的演期、场馆与官方入口；有明确时间才录入场次，尚未开启全量自动更新。"
  },
  {
    "name": "The Guild Theatre",
    "url": "https://www.guildtheatre.com.au/2026-season/steel-magnolias/",
    "group": "独立与社区",
    "status": "已采样",
    "note": "已核实部分社区制作的演期、场馆与官方入口；有明确时间才录入场次，尚未开启全量自动更新。"
  },
  {
    "name": "Beacon Musical Society",
    "url": "https://beams.org.au/",
    "group": "独立与社区",
    "status": "已采样",
    "note": "已核实部分社区制作的演期、场馆与官方入口；有明确时间才录入场次，尚未开启全量自动更新。"
  },
  {
    "name": "Lane Cove Theatre Company",
    "url": "https://lanecovetheatrecompany.com.au/",
    "group": "独立与社区",
    "status": "已采样",
    "note": "已核实部分社区制作的演期、场馆与官方入口；有明确时间才录入场次，尚未开启全量自动更新。"
  },
  {
    "name": "Arts Theatre Cronulla",
    "url": "https://www.artstheatrecronulla.com.au/2026season",
    "group": "独立与社区",
    "status": "已采样",
    "note": "已核实部分社区制作的演期、场馆与官方入口；有明确时间才录入场次，尚未开启全量自动更新。"
  }
];
