// Private Site map prototype: reuse reviewed catalogue and preserve public navigation.
const theatreMapStates={sydney:{q:'',period:'all',genre:'all',activeOnly:true,selected:null,center:null,zoom:null,area:null},melbourne:{q:'',period:'all',genre:'all',activeOnly:true,selected:null,center:null,zoom:null,area:null}};
let theatreMap=null,theatreClusters=null,theatreMarkers=new Map(),mapFromDetail=null,mapSearchTimer=null;
const mapPath=(kind='map',id='')=>`#/${browseCity==='melbourne'?'melbourne/':''}${kind}${id?'/'+id:''}`;
const mapState=()=>theatreMapStates[browseCity];
const mapPoint=v=>VENUE_MAP_COORDINATES[browseCity]?.[v.id];
function mapShows(venueId){
 const f=mapState(),today=browseToday();
 return browseShows().filter(s=>s.venue===venueId&&!s.dateNeedsReview&&!['cancelled','withdrawn'].includes(s.status)&&s.end>=today&&(f.genre==='all'||s.genre===f.genre)&&(f.period!=='current'||s.start<=today)&&(f.period!=='next30'||s.start<=addDays(today,30))).sort((a,b)=>(a.start<=today?0:1)-(b.start<=today?0:1)||a.start.localeCompare(b.start)||a.title.localeCompare(b.title));
}
function mapVenues(inArea=false){
 const f=mapState(),q=f.q.trim().toLowerCase();
 return rankVenues(browseVenues(),browseCity).filter(v=>{
  if(![v.name,v.area,v.address].join(' ').toLowerCase().includes(q))return false;
  if(f.activeOnly&&!mapShows(v.id).length)return false;
  const p=mapPoint(v);if(inArea&&f.area&&p)return p.lat>=f.area.south&&p.lat<=f.area.north&&p.lng>=f.area.west&&p.lng<=f.area.east;
  return !(inArea&&f.area&&!p);
 });
}
function mapDispose(){clearTimeout(mapSearchTimer);if(theatreMap){const c=theatreMap.getCenter();mapState().center=[c.lat,c.lng];mapState().zoom=theatreMap.getZoom();theatreMap.remove();theatreMap=null;}theatreClusters=null;theatreMarkers.clear();document.body.classList.remove('map-page');}
function mapChrome(){const link=document.querySelector('[data-nav="map"]');if(link){link.textContent=T('Map','地图找剧');link.href=mapPath();}}
const mapOriginalChrome=discoveryChrome;
discoveryChrome=function(){mapOriginalChrome();mapChrome();};
const mapNav=document.createElement('a');mapNav.dataset.nav='map';$('nav').appendChild(mapNav);mapChrome();
function mapVenueRow(v){const shows=mapShows(v.id),now=shows.filter(s=>s.start<=browseToday()).length;return `<button type="button" class="map-venue-row" data-map-venue="${esc(v.id)}"><span class="map-row-title">${esc(v.name)}<span aria-hidden="true">↗</span></span><span class="map-row-area">${esc(v.area)}${!mapPoint(v)?` · ${T('Location pending','位置待核对')}`:''}</span><span class="map-row-count">${now?T(`${now} on now`,`${now} 条正在上演`):T('No current listing','暂无当期条目')} <span>· ${T(`${shows.length-now} upcoming`,`${shows.length-now} 条后续演出`)}</span></span>${shows[0]?`<span class="map-row-preview">${esc(browseCity==='sydney'?displayShow(shows[0]).title:shows[0].title)}</span>`:''}</button>`;}
function mapList(){
 const venues=mapVenues(true),f=mapState();
 $('#map-list').innerHTML=`<div class="map-list-head"><div><p class="eyebrow">${T('EXPLORE THE CITY','探索这座城市')}</p><h2>${T(`${venues.length} venues`,`${venues.length} 个剧院`)}</h2></div><span>${f.area?T('In this area','当前区域'):T('Across the city','全城')}</span></div>${f.area?`<button class="map-clear-area" id="map-clear-area">${T('Clear area filter','查看全城剧院')}</button>`:''}<div class="map-venue-list">${venues.length?venues.map(mapVenueRow).join(''):`<div class="map-empty"><h3>${T('No matching venues','没有匹配的剧院')}</h3><p>${T('Try another area or clear the filters.','试试其他区域，或清除筛选。')}</p><button class="btn outline" id="map-empty-reset">${T('Reset filters','重置筛选')}</button></div>`}</div>`;
 $('#map-clear-area')?.addEventListener('click',()=>{f.area=null;mapList();mapUpdateMarkers();});
 $('#map-empty-reset')?.addEventListener('click',mapReset);
 $('#map-list').querySelectorAll('[data-map-venue]').forEach(b=>b.onclick=()=>mapSelect(b.dataset.mapVenue,true));
 $('#map-count').textContent=T(`${mapVenues().filter(mapPoint).length} venues on the map`,`${mapVenues().filter(mapPoint).length} 个剧院已定位`);
}
function mapShowRow(s){const shown=browseCity==='sydney'?displayShow(s):s;return `<a class="map-show-row" data-map-show="${esc(s.id)}" href="${mapPath('show',s.id)}"><div class="map-show-art">${s.image?`<img src="${esc(s.image)}" alt="" loading="lazy">`:''}<span>${esc(label(s.genre))}</span></div><div><span class="map-show-status">${s.start<=browseToday()?T('In season','正在上演'):T('Upcoming','即将上演')}</span><h3>${esc(shown.title)}</h3><p>${day(s.start)} – ${day(s.end)}</p><span class="map-show-more">${T('View show →','演出详情 →')}</span></div></a>`;}
function mapDetail(){
 const f=mapState(),v=browseVenues().find(v=>v.id===f.selected);const panel=$('#map-detail');
 if(!v){panel.hidden=true;$('#map-list').hidden=false;$('#map-panel').classList.remove('has-selection');return;}
 const shows=mapShows(v.id),now=shows.filter(s=>s.start<=browseToday()),upcoming=shows.filter(s=>s.start>browseToday());
 panel.innerHTML=`<button class="map-panel-back" id="map-panel-back">${T('← All venues','← 所有剧院')}</button><p class="eyebrow">${esc(v.area)}</p><h2>${esc(v.name)}</h2><p class="map-address">${esc(v.address)}</p><div class="map-venue-actions"><a href="${mapPath('venue',v.id)}" data-map-detail-link>${T('Venue details','剧院详情')}</a>${ext('https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(v.name+' '+v.address),T('Directions','地图导航'))}</div><p class="map-season-note">${T('Season dates shown. Check individual performance times before booking.','以下为演出季日期；购票前请核对具体场次。')}</p>${now.length?`<section class="map-show-section"><h3 class="map-group-heading">${T('On now','正在上演')} <span>${now.length}</span></h3>${now.map(mapShowRow).join('')}</section>`:''}${upcoming.length?`<section class="map-show-section"><h3 class="map-group-heading">${T('Coming up','即将上演')} <span>${upcoming.length}</span></h3>${upcoming.map(mapShowRow).join('')}</section>`:''}${!shows.length?`<div class="map-empty"><h3>${T('No matching show listings','暂无符合条件的已收录演出')}</h3><p>${T('The catalogue covers selected productions. Check the venue’s official programme for more.','目录仅收录部分制作，更多节目请查看剧院官网。')}</p>${ext(v.programme||v.url,T('Official programme','官方节目'),'btn outline')}</div>`:''}`;
 panel.hidden=false;$('#map-list').hidden=true;$('#map-panel').classList.add('has-selection');
 $('#map-panel-back').onclick=mapDeselect;
 panel.querySelectorAll('[data-map-show],[data-map-detail-link]').forEach(a=>a.onclick=()=>{mapFromDetail={city:browseCity,hash:mapPath()};});
 $('#map-panel-content').scrollTop=0;
}
function mapDeselect(){
 if(!mapState().selected)return;
 mapState().selected=null;mapFromDetail=null;
 theatreMap?.closePopup();
 $('#map-panel').classList.remove('expanded');
 $('#map-sheet-toggle').setAttribute('aria-expanded','false');
 $('#map-sheet-label').textContent=T('View venues & shows','展开剧院与演出');
 mapDetail();mapUpdateMarkers();
}
function mapSelect(id,pan=false){
 mapState().selected=id;mapDetail();mapUpdateMarkers();
 const v=browseVenues().find(v=>v.id===id),p=v&&mapPoint(v),marker=theatreMarkers.get(id);
 if(p&&theatreMap&&pan){const target=marker||Array.from(theatreMarkers.values()).find(m=>m.venueIds?.includes(id));if(target)theatreClusters.zoomToShowLayer(target,()=>theatreMap.panTo([p.lat,p.lng]));else theatreMap.setView([p.lat,p.lng],15);}
}
function mapUpdateMarkers(){
 if(!theatreMap||!theatreClusters)return;
 theatreClusters.clearLayers();theatreMarkers.clear();
 // Same-building stages share one geographic pin, retaining each stage's programme.
 const groups=[];
 for(const v of mapVenues()){const p=mapPoint(v);if(!p)continue;const same=groups.find(g=>theatreMap.distance(g.point,[p.lat,p.lng])<22);if(same)same.venues.push(v);else groups.push({point:[p.lat,p.lng],venues:[v]});}
 for(const g of groups){
  const selected=g.venues.some(v=>v.id===mapState().selected),active=g.venues.some(v=>mapShows(v.id).length),multiple=g.venues.length>1;
  const pinContent=multiple?`<text x="18" y="23" text-anchor="middle" class="map-pin-number">${g.venues.length}</text>`:'<path class="map-pin-ticket" d="M11 15h14v3a2 2 0 0 0 0 4v3H11v-3a2 2 0 0 0 0-4z"/><path class="map-pin-ticket" d="M20 16v2m0 3v2"/>';
  const icon=L.divIcon({className:'theatre-map-pin-wrap',html:`<span class="theatre-map-pin ${selected?'selected':''} ${active?'':'inactive'}"><svg viewBox="0 0 36 44" aria-hidden="true"><path class="map-pin-body" d="M18 42C14 36 3 26 3 18a15 15 0 0 1 30 0c0 8-11 18-15 24Z"/>${pinContent}</svg></span>`,iconSize:[30,38],iconAnchor:[15,37]});
  const marker=L.marker(g.point,{icon,title:g.venues.map(v=>v.name).join(' / '),alt:g.venues.map(v=>v.name).join(' / '),keyboard:true,bubblingMouseEvents:false});
  marker.on('add',()=>marker.getElement()?.setAttribute('aria-label',g.venues.map(v=>v.name).join(' / ')));
  marker.venueIds=g.venues.map(v=>v.id);g.venues.forEach(v=>theatreMarkers.set(v.id,marker));
  const labelVenue=g.venues.find(v=>v.id===mapState().selected)||g.venues[0];
  marker.bindTooltip(esc(labelVenue.name)+(multiple&&!selected?` · ${g.venues.length}`:''),{permanent:true,direction:'right',offset:[13,-19],className:`map-venue-label ${selected?'selected':''}`});
  if(!multiple){marker.on('click',()=>mapSelect(g.venues[0].id));}
  else {const el=document.createElement('div');el.className='map-building-picker';el.innerHTML=`<strong>${T('Venues at this location','此位置的剧院')}</strong>`;for(const v of g.venues){const b=document.createElement('button');b.textContent=v.name;b.onclick=()=>{theatreMap.closePopup();mapSelect(v.id);};el.appendChild(b);}marker.bindPopup(el,{minWidth:220});}
  theatreClusters.addLayer(marker);
 }
 window.requestAnimationFrame(mapLayoutLabels);
}
function mapLayoutLabels(){
 if(!theatreMap)return;
 const used=[],seen=new Set(),markers=[...theatreMarkers.values()].filter(m=>{if(seen.has(m))return false;seen.add(m);return true;});
 markers.sort((a,b)=>Number(b.venueIds.includes(mapState().selected))-Number(a.venueIds.includes(mapState().selected)));
 for(const marker of markers){const el=marker.getTooltip()?.getElement();if(!el)continue;el.style.visibility='';const r=el.getBoundingClientRect();if(!r.width||!r.height)continue;const overlap=used.some(b=>r.left<b.right+4&&r.right>b.left-4&&r.top<b.bottom+4&&r.bottom>b.top-4);if(overlap)el.style.visibility='hidden';else used.push(r);}
}
function mapReset(){const f=mapState();Object.assign(f,{q:'',period:'all',genre:'all',activeOnly:true,area:null,selected:null});$('#map-q').value='';$('#map-period').value='all';$('#map-genre').value='all';$('#map-active-only').checked=true;mapList();mapDetail();mapUpdateMarkers();mapFitCity();}
function mapFitCity(){const pts=mapVenues().map(mapPoint).filter(Boolean);if(theatreMap&&pts.length)theatreMap.fitBounds(pts.map(p=>[p.lat,p.lng]),{padding:[42,42],maxZoom:13});}
function mapFiltersChanged(){const f=mapState();if(f.selected&&!mapVenues(true).some(v=>v.id===f.selected))f.selected=null;mapList();mapDetail();mapUpdateMarkers();}
function theatreMapPage(){
 const f=mapState();document.body.classList.add('map-page');
 shell('map',`<h1 class="sr-only">${T('Theatre map','地图找剧')}</h1><div class="map-workspace"><div class="map-canvas-wrap"><div id="theatre-map" aria-label="${T('Interactive theatre map','交互式剧院地图')}"></div><div class="map-top-controls"><button id="map-search-area" class="map-area-button" hidden>${T('Search this area','搜索此区域')}</button><button id="map-city-view" class="map-city-button">${T('Show whole city','查看全城')}</button></div><div id="map-error" class="map-error" hidden role="status"></div></div><aside class="map-panel" id="map-panel" aria-label="${T('Venues and shows','剧院与演出')}"><button class="map-sheet-handle" id="map-sheet-toggle" aria-expanded="false" aria-controls="map-panel-content"><span aria-hidden="true"></span><span id="map-sheet-label">${T('View venues & shows','展开剧院与演出')}</span></button><div id="map-panel-content" class="map-panel-content"><div id="map-list"></div><div id="map-detail" hidden></div></div></aside></div><details class="map-filter-drawer"><summary>${T('Search & filters','搜索与筛选')}</summary><section class="map-toolbar" aria-label="${T('Map filters','地图筛选')}"><label class="map-search"><span class="sr-only">${T('Search venues or suburbs','搜索剧院或地区')}</span><input id="map-q" type="search" placeholder="${T('Venue or suburb','剧院或地区')}" value="${esc(f.q)}"></label><label><span class="sr-only">${T('Season dates','演出季日期')}</span><select id="map-period"><option value="all">${T('Now & upcoming','当前及后续')}</option><option value="current">${T('In season now','当前演出季')}</option><option value="next30">${T('Within 30 days','未来 30 天内')}</option></select></label><label><span class="sr-only">${T('Show type','演出类型')}</span><select id="map-genre"><option value="all">${T('All types','所有类型')}</option>${[...new Set(browseShows().map(s=>s.genre))].map(g=>`<option value="${esc(g)}">${esc(label(g))}</option>`).join('')}</select></label><label class="map-active-toggle"><input id="map-active-only" type="checkbox" ${f.activeOnly?'checked':''}>${T('With listed shows','有已收录演出')}</label><button class="map-reset" id="map-reset">${T('Reset','重置')}</button></section></details><div class="map-footnote"><span id="map-count" role="status"></span><span>${T('Selected listings · Pins approximate venue locations.','部分节目收录 · 标记为场馆大致位置。')}</span></div>`);
 $('#map-period').value=f.period;$('#map-genre').value=f.genre;
 $('#map-q').oninput=e=>{f.q=e.target.value;f.area=null;mapFiltersChanged();clearTimeout(mapSearchTimer);mapSearchTimer=setTimeout(mapFitCity,250);};
 $('#map-period').onchange=e=>{f.period=e.target.value;mapFiltersChanged();};
 $('#map-genre').onchange=e=>{f.genre=e.target.value;mapFiltersChanged();};
 $('#map-active-only').onchange=e=>{f.activeOnly=e.target.checked;mapFiltersChanged();};
 $('#map-reset').onclick=mapReset;
 $('#map-sheet-toggle').onclick=()=>{const expanded=$('#map-panel').classList.toggle('expanded');$('#map-sheet-toggle').setAttribute('aria-expanded',String(expanded));$('#map-sheet-label').textContent=expanded?T('Collapse panel','收起面板'):T('View venues & shows','展开剧院与演出');};
 $('#map-city-view').onclick=()=>{f.area=null;mapList();mapFitCity();};
 $('#map-search-area').onclick=()=>{if(!theatreMap)return;const b=theatreMap.getBounds();f.area={north:b.getNorth(),south:b.getSouth(),east:b.getEast(),west:b.getWest()};if(f.selected&&!mapVenues(true).some(v=>v.id===f.selected))f.selected=null;mapList();mapDetail();$('#map-search-area').hidden=true;};
 mapList();mapDetail();
 if(!window.L||!L.markerClusterGroup){$('#map-error').hidden=false;$('#map-error').textContent=T('The map could not load. You can still browse venues in the list.','地图暂时无法加载，仍可从列表查看剧院与演出。');return;}
 const center=f.center||(browseCity==='melbourne'?[-37.817,144.971]:[-33.874,151.208]);
 theatreMap=L.map('theatre-map',{zoomControl:false,scrollWheelZoom:true,minZoom:5,maxZoom:19}).setView(center,f.zoom||13);
 L.control.zoom({position:'bottomright'}).addTo(theatreMap);
 const tiles=L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors'}).addTo(theatreMap);
 let tileFailures=0;tiles.on('tileerror',()=>{if(++tileFailures>=3){$('#map-error').hidden=false;$('#map-error').textContent=T('The base map is unavailable. Venue pins and listings are still usable.','底图暂时无法加载，剧院标记与列表仍可使用。');}});tiles.on('tileload',()=>{tileFailures=0;$('#map-error').hidden=true;});
 theatreClusters=L.markerClusterGroup({maxClusterRadius:42,showCoverageOnHover:false,spiderfyOnMaxZoom:true,animate:!window.matchMedia('(prefers-reduced-motion: reduce)').matches,iconCreateFunction:c=>L.divIcon({html:`<span class="theatre-map-cluster"><span aria-hidden="true">${c.getChildCount()}</span><span class="sr-only">${T(`${c.getChildCount()} nearby venue locations`,`${c.getChildCount()} 个附近剧院位置`)}</span></span>`,className:'theatre-cluster-wrap',iconSize:[42,42]})}).addTo(theatreMap);
 mapUpdateMarkers();
 theatreClusters.on('animationend spiderfied unspiderfied',mapLayoutLabels);
 theatreMap.on('zoomend resize',()=>window.requestAnimationFrame(mapLayoutLabels));
 theatreMap.on('click',mapDeselect);
 theatreMap.on('moveend',()=>{const c=theatreMap.getCenter();f.center=[c.lat,c.lng];f.zoom=theatreMap.getZoom();$('#map-search-area').hidden=false;window.requestAnimationFrame(mapLayoutLabels);});
 document.title=T(`Theatre Map · ${browseCity==='melbourne'?'Melbourne':'Sydney'} · Theatre Diary`,`地图找剧 · ${browseCity==='melbourne'?'墨尔本':'悉尼'} · Theatre Diary`);
}
const mapOriginalRoute=route;
route=function(){
 if(theatreMap||document.body.classList.contains('map-page'))mapDispose();
 const parts=(location.hash||'#/').split('?')[0].replace(/^#\/?/,'').split('/'),city=parts[0]==='melbourne'?'melbourne':'sydney',kind=parts[city==='melbourne'?1:0]||'';
 if(kind==='map'){browseCity=city;discoveryChrome();theatreMapPage();currentBrowseHash=location.hash;window.scrollTo(0,0);}
 else {mapOriginalRoute();if(mapFromDetail&&mapFromDetail.city===city&&['show','venue'].includes(kind)){const back=$('.breadcrumb');if(back){back.href=mapFromDetail.hash;back.textContent=T('← Back to map','← 返回地图');}}else mapFromDetail=null;}
 mapChrome();
};
const mapOriginalCityChange=$('#city-picker').onchange;
$('#city-picker').onchange=e=>{if(location.hash.endsWith('/map')){try{localStorage.setItem('theatre-city',e.target.value);}catch{}location.hash=e.target.value==='melbourne'?'#/melbourne/map':'#/map';}else mapOriginalCityChange(e);};
route();
