// Profile view counter for aciksumasters.app (Cloudflare Worker + D1).
//   POST /v/<key>  count a view (once per visitor per profile per day) and return { k, views }
//   GET  /v/<key>  return { k, views }
//   GET  /top?n=20 return [{ k, views }], most viewed first
// <key> is the swimmer's folded name + sex (e.g. "duygun-yurteri-m"), set by index.html (viewKey).
// Visitors are told apart by a daily hash of IP + key; the IP itself is never stored.
const SITE = "https://aciksumasters.app";
const ALLOWED = [SITE, "https://www.aciksumasters.app"];
const BOT = /bot|crawl|spider|slurp|preview|monitor|headless|lighthouse/i;

const json = (body, origin, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { "content-type": "application/json", "cache-control": "no-store", "access-control-allow-origin": origin, vary: "Origin" },
});
async function sha256(s) {
  const b = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
  return [...new Uint8Array(b)].map(x => x.toString(16).padStart(2, "0")).join("");
}

export default {
  async fetch(req, env, ctx) {
    const url = new URL(req.url), origin = req.headers.get("origin") || "";
    const allow = ALLOWED.includes(origin) ? origin : SITE;
    if (req.method === "OPTIONS") return new Response(null, { headers: { "access-control-allow-origin": allow, "access-control-allow-methods": "GET, POST", vary: "Origin" } });

    const m = url.pathname.match(/^\/v\/([a-z0-9-]{1,120})$/);
    if (m) {
      const k = m[1];
      if (req.method === "POST" && ALLOWED.includes(origin) && !BOT.test(req.headers.get("user-agent") || "")) {
        const day = new Date().toISOString().slice(0, 10);
        const h = await sha256(`${req.headers.get("cf-connecting-ip") || ""}|${k}|${day}|${env.SALT || ""}`);
        const seen = await env.DB.prepare("INSERT OR IGNORE INTO seen (h, day) VALUES (?, ?)").bind(h, day).run();
        if (seen.meta.changes) await env.DB.prepare("INSERT INTO views (k, n) VALUES (?, 1) ON CONFLICT (k) DO UPDATE SET n = n + 1").bind(k).run();
        if (Math.random() < 0.01) ctx.waitUntil(env.DB.prepare("DELETE FROM seen WHERE day < ?").bind(day).run());
      }
      const row = await env.DB.prepare("SELECT n FROM views WHERE k = ?").bind(k).first();
      return json({ k, views: row ? row.n : 0 }, allow);
    }
    if (url.pathname === "/top" && req.method === "GET") {
      const n = Math.min(50, Math.max(1, parseInt(url.searchParams.get("n") || "20", 10) || 20));
      const { results } = await env.DB.prepare("SELECT k, n AS views FROM views ORDER BY n DESC, k LIMIT ?").bind(n).all();
      return json(results, allow);
    }
    return json({ error: "not found" }, allow, 404);
  },
};
