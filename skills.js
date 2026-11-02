"use strict";

const ALL = Object.values(SKILLS);
const PVE_OF = new Map(ALL.filter(s => s.pvp_version).map(s => [s.pvp_version, s.id]));
// the title whose rank a PvE skill scales with (the Kurzick and Luxon titles share one entry)
const titleOf = s => TITLES[s.title] || Object.values(TITLES).find(t => t.also === s.title);
const attrName = s => (s.title ? `${titleOf(s)?.name || "Title"} rank` : ATTRIBUTES[s.attribute] || "No attribute");
const attrKey = s => (s.title ? `t${s.title}` : `a${s.attribute ?? ""}`);
const SOURCES = { capture: "Signet of Capture", "skill trainer": "Skill trainer", "hero skill trainer": "Hero skill trainer", quest: "Quest", "profession changer": "Profession Changer" };
const sourceOf = a => (a.capture ? "capture" : a.quest || a.quest_name ? "quest" : a.as || "other");

// the teams and single builds whose bars use each skill
const USED_IN = new Map();
for (const t of [...(BUILDDATA?.teams || []), ...(BUILDDATA?.players || []).map(id => ({ single: "player build", builds: [id] })),
  ...(BUILDDATA?.singles || []).map(id => ({ single: "hero build", builds: [id] }))]) {
  const counts = new Map();
  for (const id of t.builds) counts.set(id, (counts.get(id) || 0) + 1);
  for (const [id, n] of counts) {
    const b = BUILDS.get(id);
    let skills = [];
    try { skills = TemplateCode.decode(b.code).skills; } catch { /* an unreadable code lists nothing */ }
    for (const sid of new Set(skills)) if (sid) (USED_IN.get(sid) || USED_IN.set(sid, []).get(sid)).push({ team: t, build: b, n });
  }
}

for (const s of ALL) {
  s._name = fold(`${s.name} ${aliasText("skills", s.id)}`);
  s._text = fold(s.description + " " + s.concise);
  s._sources = new Set(s.acquisition?.map(sourceOf));
}

const els = { name: $("f-name"), text: $("f-text"), prof: $("f-prof"), attr: $("f-attr"), type: $("f-type"), camp: $("f-camp"),
  elite: $("f-elite"), src: $("f-src"), pvp: $("f-pvp"), list: $("list"), head: $("head"), count: $("count"), empty: $("empty") };
const state = { profs: new Set(), sort: "", desc: false, skill: null, listHash: "" };

function costHTML(s) {
  return [s.energy && `<span class="c-e" title="Energy">${s.energy}</span>`, s.adrenaline && `<span class="c-a" title="Adrenaline (strikes)">${s.adrenaline}</span>`,
    s.sacrifice && `<span class="c-s" title="Health sacrifice">${s.sacrifice}%</span>`, s.upkeep && `<span class="c-u" title="Upkeep">${s.upkeep}</span>`,
    s.overcast && `<span class="c-o" title="Overcast / exhaustion">${s.overcast}</span>`].filter(Boolean).join("");
}
const costValue = s => s.energy || s.adrenaline * 2 || s.sacrifice / 2 || 0;

/* ---------- filters ---------- */
const inProfs = s => !state.profs.size || state.profs.has(String(s.profession));
function fillAttributes() {
  const cur = els.attr.value, groups = new Map();
  for (const s of ALL.filter(inProfs)) {
    const g = s.title ? 99 : s.profession;
    (groups.get(g) || groups.set(g, new Map()).get(g)).set(attrKey(s), attrName(s));
  }
  els.attr.innerHTML = `<option value="">Any attribute</option>` + [...groups].sort((a, b) => a[0] - b[0]).map(([g, m]) =>
    `<optgroup label="${g === 99 ? "PvE title tracks" : g ? PROFS[g] : "Common"}">${[...m].sort((a, b) => cmpStr(a[1], b[1]))
      .map(([k, n]) => `<option value="${k}">${esc(n)}</option>`).join("")}</optgroup>`).join("");
  els.attr.value = cur;
  if (els.attr.value !== cur) els.attr.value = "";
}
function fillTypes() {
  const cur = els.type.value;
  els.type.innerHTML = typeOptionsHTML(ALL.filter(s => inProfs(s) && (!els.attr.value || attrKey(s) === els.attr.value)));
  els.type.value = cur;
  if (els.type.value !== cur) els.type.value = "";
}
els.prof.innerHTML = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0].map(p =>
  `<button class="prof-chip" data-v="${p}" aria-pressed="false" style="--c:${profVar(p)}" title="${PROFS[p]}">${p ? PROFS[p] : "Common"}</button>`).join("");
chipToggle(els.prof, state.profs, () => { fillAttributes(); fillTypes(); update(); });
els.camp.innerHTML += CAMPAIGNS.map((c, i) => `<option value="${i}">${c}</option>`).join("");
for (const el of [els.name, els.text]) el.addEventListener("input", update);
for (const el of [els.type, els.camp, els.elite, els.src, els.pvp]) el.addEventListener("change", update);
els.attr.addEventListener("change", () => { fillTypes(); update(); });
$("reset").addEventListener("click", () => {
  els.name.value = els.text.value = els.attr.value = els.type.value = els.camp.value = els.src.value = "";
  els.elite.checked = els.pvp.checked = false;
  state.profs.clear(); fillAttributes(); fillTypes(); update(); els.name.focus();
});
els.head.addEventListener("click", e => {
  const b = e.target.closest("button[data-sort]");
  if (!b) return;
  if (state.sort === b.dataset.sort) state.desc = !state.desc; else { state.sort = b.dataset.sort; state.desc = false; }
  update();
});
searchKeys(els.name, update);
searchKeys(els.text, update);

function matches(s, f) {
  return (f.pvp || !s.pvp_only) && f.name.every(t => s._name.includes(t)) && f.text.every(t => s._text.includes(t))
    && inProfs(s) && (!f.attr || attrKey(s) === f.attr) && typeMatches(s, f.type) && (f.camp === "" || s.campaign === +f.camp)
    && (!f.elite || s.elite) && (!f.src || (f.src === "title" ? s.title : s._sources.has(f.src)));
}
const byProf = (a, b) => (a.profession || 99) - (b.profession || 99) || cmpStr(attrName(a), attrName(b)) || cmpStr(a.name, b.name);
const SORTS = {
  name: (a, b) => cmpStr(a.name, b.name), profession: byProf,
  attribute: (a, b) => cmpStr(attrName(a), attrName(b)) || cmpStr(a.name, b.name),
  type: (a, b) => cmpStr(a.label, b.label) || cmpStr(a.name, b.name),
  cost: (a, b) => costValue(a) - costValue(b) || cmpStr(a.name, b.name),
  activation: (a, b) => a.activation - b.activation || cmpStr(a.name, b.name),
  recharge: (a, b) => a.recharge - b.recharge || cmpStr(a.name, b.name),
  campaign: (a, b) => a.campaign - b.campaign || cmpStr(a.name, b.name),
};

function rowHTML(s, f) {
  const desc = f.text.length ? highlight(s.concise.replace(/<\/?gray>/g, ""), f.text) : richText(s.concise);
  return `<a class="row${s.elite ? " elite" : ""}" href="${hash({ skill: s.id })}" style="--pc:${profVar(s.profession)}">
    <div class="name" title="${esc(s.name)}">${skillIcon(s.id)}<span class="nm">${highlight(s.name, f.name)}</span>${s.pvp_only ? '<span class="tag">PvP</span>' : ""}${s.touch ? '<span class="tag">Touch</span>' : ""}</div>
    <div class="prof col-prof">${s.profession ? PROFS[s.profession] : "Common"}</div>
    <div class="cell dim col-attr">${esc(attrName(s))}</div>
    <div class="cell dim col-type">${esc(s.label || "")}</div>
    <div class="costs">${costHTML(s)}</div>
    <div class="num col-act">${secs(s.activation)}</div>
    <div class="num col-rech">${s.recharge || ""}</div>
    <div class="dim col-camp">${CAMP_SHORT[s.campaign]}</div>
    <div class="desc">${desc}</div>
  </a>`;
}

function update() {
  const f = { name: terms(els.name), text: terms(els.text), attr: els.attr.value, type: els.type.value, camp: els.camp.value,
    elite: els.elite.checked, src: els.src.value, pvp: els.pvp.checked };
  const first = f.name[0];
  const cmp = SORTS[state.sort] || (first ? (a, b) => (!fold(a.name).startsWith(first)) - (!fold(b.name).startsWith(first)) || byProf(a, b) : byProf);
  const visible = ALL.filter(s => matches(s, f)).sort(cmp);
  if (state.desc) visible.reverse();
  els.count.textContent = `${visible.length} / ${ALL.filter(s => f.pvp || !s.pvp_only).length}`;
  els.empty.hidden = visible.length > 0;
  els.list.innerHTML = visible.map(s => rowHTML(s, f)).join("");
  for (const b of els.head.querySelectorAll("button[data-sort]")) {
    b.classList.toggle("sorted", b.dataset.sort === state.sort);
    b.classList.toggle("desc", b.dataset.sort === state.sort && state.desc);
  }
  const p = new URLSearchParams();
  for (const [k, v] of [["q", els.name.value], ["t", els.text.value], ["p", [...state.profs].join(",")], ["a", f.attr], ["ty", f.type],
    ["c", f.camp], ["e", f.elite ? "1" : ""], ["s", f.src], ["pvp", f.pvp ? "1" : ""], ["sort", state.sort && (state.desc ? "-" : "") + state.sort]]) if (v) p.set(k, v);
  state.listHash = p.toString();  // where "All skills" returns to from a skill's page
  history.replaceState(null, "", state.listHash ? "#" + state.listHash : location.pathname);
}

/* ---------- one skill's page ---------- */
// how to get it: grouped by way, then by campaign
function acquisitionHTML(s) {
  if (!s.acquisition?.length) return '<p class="dim">No acquisition data.</p>';
  const groups = new Map();
  for (const a of s.acquisition) {
    const n = NPCS[a.npc], q = QUESTS[a.quest], where = a.location ?? n?.location ?? questPlaces(q || {})[0]?.id;
    const line = (a.capture ? LINK.boss(a.capture) : q ? LINK.quest(q.id) : esc(n?.name || a.quest_name || ""))
      + (where ? ` <span class="m">— ${whereLink(where)}</span>` : "");
    const camp = CAMPAIGNS[campaignOf(LOCATIONS[where]) ?? (q && questCampaign(q))] || "";
    const g = groups.get(sourceOf(a)) || groups.set(sourceOf(a), new Map()).get(sourceOf(a));
    const lines = g.get(camp) || g.set(camp, []).get(camp);
    if (!lines.includes(line)) lines.push(line);
  }
  const order = Object.keys(SOURCES);
  return [...groups].sort((a, b) => order.indexOf(a[0]) - order.indexOf(b[0])).map(([m, byCamp]) =>
    `<div class="acq-group"><div>${SOURCES[m] || "Other"}</div>` + [...byCamp].map(([c, lines]) =>
      (c ? `<div class="camp">${esc(c)}</div>` : "") + `<ul class="acq">${lines.map(l => `<li>${l}</li>`).join("")}</ul>`).join("") + "</div>").join("");
}

function skillPageHTML(s) {
  const chip = (id, label) => SKILLS[id] ? `<a class="chip" href="${hash({ skill: id })}" style="border-left:3px solid ${profVar(SKILLS[id].profession)}">${esc(label || SKILLS[id].name)}</a>` : "";
  const versions = [s.pvp_version ? chip(s.pvp_version, "PvP version") : "", PVE_OF.has(s.id) ? chip(PVE_OF.get(s.id), "PvE version") : ""].join("");
  const related = (s.related_ids || []).map(id => chip(id)).join("");
  const sub = [s.profession ? PROFS[s.profession] : "Common", attrName(s), s.label + (s.touch ? " (touch)" : ""), CAMPAIGNS[s.campaign]].map(esc).join(" · ");
  const tags = [s.elite && "Elite", s.pvp_only && "PvP only", s.title && "PvE only"].filter(Boolean).map(t => `<span class="tag">${t}</span>`).join("");
  const stats = [s.energy && ["Energy", s.energy, "c-e"], s.adrenaline && ["Adrenaline", s.adrenaline, "c-a"], s.sacrifice && ["Sacrifice", `${s.sacrifice}%`, "c-s"],
    s.upkeep && ["Upkeep", s.upkeep, "c-u"], s.overcast && ["Overcast", s.overcast, "c-o"], s.activation && ["Activation", `${secs(s.activation)}s`],
    s.recharge && ["Recharge", `${s.recharge}s`]].filter(Boolean);
  const title = s.title && titleOf(s);
  const used = USED_IN.get(s.id) || [];
  return `<p class="back"><a href="#${state.listHash}">← All skills</a></p>
    <div class="sp-head${s.elite ? " elite" : ""}" style="--pc:${profVar(s.profession)}">
      <img class="sp-icon" src="img/skills/${s.id}.jpg" alt="" onerror="this.remove()">
      <div class="sp-title"><h2>${esc(s.name)}${tags}</h2><div class="sp-sub">${sub}</div></div>
      <div class="lstats">${stats.map(([k, v, c]) => `<span class="lstat"><small>${k}</small><b class="${c || ""}">${esc(v)}</b></span>`).join("")}</div>
    </div>
    <div class="lgrid">
      <div class="lside">
        <section class="lbox"><h4>Description</h4><p class="sp-desc">${richText(s.description)}</p>
          ${s.concise && s.concise !== s.description ? `<p class="dim sp-concise">${richText(s.concise)}</p>` : ""}</section>
        ${title ? `<section class="lbox"><h4>Title</h4><p>Gets stronger with your <a href="titles${hash({ t: title.id })}">${esc(title.name)} title</a> rank.</p></section>` : ""}
        ${used.length ? `<section class="lbox"><h4>Used in builds</h4><ul class="lrows">${used.map(u => u.team.single
          ? `<li><a href="builds${hash({ build: u.build.id })}">${esc(u.build.name)}</a><span class="dim">${u.team.single}</span></li>`
          : `<li><a href="builds${hash({ team: u.team.id })}">${esc(u.team.name)}</a><span class="dim">${esc(u.build.name)}${u.n > 1 ? ` ×${u.n}` : ""}</span></li>`).join("")}</ul></section>` : ""}
        ${versions || related ? `<section class="lbox">${versions ? `<h4>Versions</h4><div class="chips">${versions}</div>` : ""}${related ? `<h4>Related skills</h4><div class="chips">${related}</div>` : ""}</section>` : ""}
      </div>
      <div class="lside"><section class="lbox"><h4>How to get it</h4>${acquisitionHTML(s)}</section></div>
    </div>
    <p class="llinks"><a href="builder#add=${s.id}">Add to builder →</a><span class="dim">Skill ID ${s.id}</span></p>`;
}

// the list, or one skill's page when the address names one
function render() {
  const p = new URLSearchParams(location.hash.slice(1));
  els.name.value = p.get("q") || ""; els.text.value = p.get("t") || "";
  state.profs.clear(); for (const v of (p.get("p") || "").split(",").filter(Boolean)) state.profs.add(v);
  syncChips(els.prof, state.profs); fillAttributes();
  els.attr.value = p.get("a") || ""; fillTypes();
  els.type.value = p.get("ty") || ""; els.camp.value = p.get("c") || ""; els.src.value = p.get("s") || "";
  els.elite.checked = p.get("e") === "1"; els.pvp.checked = p.get("pvp") === "1";
  state.sort = (p.get("sort") || "").replace(/^-/, ""); state.desc = (p.get("sort") || "").startsWith("-");
  const s = SKILLS[p.get("skill")];
  $("browse").hidden = !!s;
  $("skill").hidden = !s;
  if (s) {
    $("skill").innerHTML = skillPageHTML(s);
    document.title = `${s.name} · GW Skills`;
    window.scrollTo(0, 0);
  } else {
    document.title = "GW Skills";
    update();
    window.dispatchEvent(new Event("resize"));  // the sticky bars measure the filters, hidden until now
  }
}
render();
stickHeadBelowFilters();
window.addEventListener("hashchange", render);
