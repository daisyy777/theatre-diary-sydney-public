/* Editorial discovery policy, not a claim about venue quality or ticket sales. */
const RANKING_POLICY = Object.freeze({
  version: '2026-09-20.1',
  weights: { production: 35, venue: 30, popularity: 20, timing: 10, completeness: 5 },
  flagshipOrder: ['opera', 'lyric', 'royal', 'capitol'],
  venuePriority: { opera:100, lyric:100, royal:100, capitol:100, belvoir:75, ensemble:75, hayes:75, roslynpacker:75, neilson:70, recital:70, carriageworks:70, concourse:65, foundry:65, newtheatre:60, state:60, teatro:55 },
  // Production scale is an editorial cold-start proxy, not measured popularity.
  production: { '商业巡演':100, '专业制作':70, '独立制作':50, '社区剧团':30 },
  popularityMaxAgeDays: 7
});
const rankDay = value => Date.parse(value + 'T00:00:00Z') / 86400000;
function popularityValue(show, asOf) {
  const signal = show.popularity;
  if (!signal || !Number.isFinite(signal.score) || !signal.evidenceUrl || !signal.checkedAt || !signal.method) return 0;
  const age = rankDay(asOf) - rankDay(signal.checkedAt);
  if (!Number.isFinite(age) || age < 0 || age > RANKING_POLICY.popularityMaxAgeDays) return 0;
  return Math.max(0, Math.min(100, signal.score));
}
function showRankBreakdown(show, asOf) {
  const days = rankDay(show.start) - rankDay(asOf);
  const ended = show.end < asOf;
  const timing = ended ? 0 : days <= 0 ? 100 : days <= 30 ? 90 : days <= 90 ? 60 : days <= 180 ? 30 : 10;
  const completeness = [show.source, show.booking, show.start && show.end, show.venue, show.sessionsComplete && show.sessions?.length].filter(Boolean).length * 20;
  const values = { production: RANKING_POLICY.production[show.scale] ?? 40, venue: RANKING_POLICY.venuePriority[show.venue] ?? 50, popularity: popularityValue(show, asOf), timing, completeness };
  const points = Object.fromEntries(Object.entries(values).map(([key,value])=>[key,value*RANKING_POLICY.weights[key]/100]));
  return { version:RANKING_POLICY.version, values, points, total:Object.values(points).reduce((a,b)=>a+b,0), ended };
}
function rankShows(shows, asOf) {
  return [...shows].filter(s=>s.status!=='cancelled' && s.status!=='withdrawn').sort((a,b)=>{
    const ar=showRankBreakdown(a,asOf), br=showRankBreakdown(b,asOf);
    return Number(ar.ended)-Number(br.ended) || br.total-ar.total || a.start.localeCompare(b.start) || a.id.localeCompare(b.id);
  });
}
function rankVenues(venues) {
  const priority=v=>RANKING_POLICY.venuePriority[v.id]??50;
  const order=v=>{const i=RANKING_POLICY.flagshipOrder.indexOf(v.id);return i<0?Infinity:i;};
  return [...venues].sort((a,b)=>priority(b)-priority(a) || (order(a)-order(b)) || a.name.localeCompare(b.name,'en') || a.id.localeCompare(b.id));
}
if(typeof module!=='undefined')module.exports={RANKING_POLICY,popularityValue,showRankBreakdown,rankShows,rankVenues};
