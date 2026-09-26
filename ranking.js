/* Editorial discovery policy, not a claim about venue quality or ticket sales. */
const RANKING_POLICY = Object.freeze({
  version: '2026-09-20.1',
  weights: { production: 35, venue: 30, popularity: 20, timing: 10, completeness: 5 },
  flagshipOrder: ['opera', 'lyric', 'royal', 'capitol'],
  venuePriority: { opera:100, lyric:100, royal:100, capitol:100, belvoir:75, ensemble:75, hayes:75, roslynpacker:75, neilson:70, recital:70, carriageworks:70, concourse:65, foundry:65, newtheatre:60, state:60, teatro:55, riverside:70, phive:60, coliseum:75, kxt:60 },
  // Production scale is an editorial cold-start proxy, not measured popularity.
  production: { '商业巡演':100, '专业制作':70, '独立制作':50, '社区剧团':30 },
  popularityMaxAgeDays: 7
});
const MELBOURNE_VENUE_PRIORITY=Object.freeze({'mel-sumner':85,'mel-lawler':70,'mel-fairfax':80,'mel-playhouse':85,'mel-palais':85,'mel-state':100,'mel-redstitch':75,'mel-chapel':70,'mel-fortyfive':65,'mel-lamama-hq':65,'mel-lamama-courthouse':65,'mel-explosives':60,'mel-mccomas':55,'mel-brighton':55,'mel-regent':100,'mel-princess':100,'mel-her-majestys':100,'mel-comedy':95,'mel-national':75,'mel-malthouse':75,'mel-theatre-works':70,'mel-1812':55,'mel-shirley-burke':55,'mel-clayton':55,'mel-malvern':55});
const MELBOURNE_FLAGSHIP_ORDER=['mel-state','mel-princess','mel-regent','mel-her-majestys','mel-comedy'];
const rankDay = value => Date.parse(value + 'T00:00:00Z') / 86400000;
function popularityValue(show, asOf) {
  const signal = show.popularity;
  if (!signal || !Number.isFinite(signal.score) || !signal.evidenceUrl || !signal.checkedAt || !signal.method) return 0;
  const age = rankDay(asOf) - rankDay(signal.checkedAt);
  if (!Number.isFinite(age) || age < 0 || age > RANKING_POLICY.popularityMaxAgeDays) return 0;
  return Math.max(0, Math.min(100, signal.score));
}
function showRankBreakdown(show, asOf, city='sydney') {
  const days = rankDay(show.start) - rankDay(asOf);
  const ended = show.end < asOf;
  const timing = ended ? 0 : days <= 0 ? 100 : days <= 30 ? 90 : days <= 90 ? 60 : days <= 180 ? 30 : 10;
  const completeness = [show.source, show.booking, show.start && show.end, show.venue, (show.sessionsComplete||show.calendarCoverage==='published') && show.sessions?.length].filter(Boolean).length * 20;
  const priority=city==='melbourne'?MELBOURNE_VENUE_PRIORITY:RANKING_POLICY.venuePriority;
  const values = { production: RANKING_POLICY.production[show.scale] ?? 40, venue: priority[show.venue] ?? 50, popularity: popularityValue(show, asOf), timing, completeness };
  const points = Object.fromEntries(Object.entries(values).map(([key,value])=>[key,value*RANKING_POLICY.weights[key]/100]));
  return { version:RANKING_POLICY.version, values, points, total:Object.values(points).reduce((a,b)=>a+b,0), ended };
}
function rankShows(shows, asOf, city='sydney') {
  return [...shows].filter(s=>s.status!=='cancelled' && s.status!=='withdrawn').sort((a,b)=>{
    const ar=showRankBreakdown(a,asOf,city), br=showRankBreakdown(b,asOf,city);
    return Number(ar.ended)-Number(br.ended) || br.total-ar.total || a.start.localeCompare(b.start) || a.id.localeCompare(b.id);
  });
}
function rankVenues(venues,city='sydney') {
  const priorities=city==='melbourne'?MELBOURNE_VENUE_PRIORITY:RANKING_POLICY.venuePriority;
  const orderIds=city==='melbourne'?MELBOURNE_FLAGSHIP_ORDER:RANKING_POLICY.flagshipOrder;
  const priority=v=>priorities[v.id]??50;
  const order=v=>{const i=orderIds.indexOf(v.id);return i<0?Infinity:i;};
  return [...venues].sort((a,b)=>priority(b)-priority(a) || (order(a)-order(b)) || a.name.localeCompare(b.name,'en') || a.id.localeCompare(b.id));
}
if(typeof module!=='undefined')module.exports={RANKING_POLICY,MELBOURNE_VENUE_PRIORITY,popularityValue,showRankBreakdown,rankShows,rankVenues};
