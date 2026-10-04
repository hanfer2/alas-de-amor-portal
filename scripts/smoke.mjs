// Rastreo de humo del sitio ya compilado y en marcha (npm run build && npm start).
// Verifica cada URL del sitemap (título, canonical, un solo h1, JSON-LD válido), las páginas con noindex,
// robots.txt y que cada imagen, video y póster que citan las páginas responda 200.
// Uso: BASE_URL=http://localhost:3000 npm run smoke

const BASE = (process.env.BASE_URL || "http://localhost:3000").replace(/\/$/, "");
const problems = [];
const fail = (where, msg) => problems.push(`${where}: ${msg}`);

async function get(path) {
  const res = await fetch(BASE + path);
  const type = res.headers.get("content-type") || "";
  // Los recursos binarios (imágenes, video) solo interesa que respondan: se descarta el cuerpo.
  const text = /text|xml|json/.test(type) ? await res.text() : (await res.arrayBuffer(), "");
  return { status: res.status, type, text };
}

const decode = (s) => s.replace(/&amp;/g, "&");
const resources = new Map(); // ruta -> páginas que la usan

function collectResources(page, html) {
  const found = [
    ...html.matchAll(/<img[^>]*?\ssrc="([^"]+)"/g),
    ...html.matchAll(/<source[^>]*?\ssrc="([^"]+)"/g),
    ...html.matchAll(/<video[^>]*?\sposter="([^"]+)"/g),
    ...html.matchAll(/<link[^>]*?rel="(?:icon|apple-touch-icon)"[^>]*?href="([^"]+)"/g),
  ].map((m) => decode(m[1]));
  for (const r of found) {
    if (!r.startsWith("/")) continue;
    resources.set(r, [...(resources.get(r) || []), page]);
  }
}

function checkPage(path, html) {
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  const canonical = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
  const h1 = (html.match(/<h1[ >]/g) || []).length;
  const robots = html.match(/<meta name="robots" content="([^"]*)"/)?.[1] || "";
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map((m) => m[1]);
  if (!title) fail(path, "sin <title>");
  else if (!title.includes("Alas de Amor")) fail(path, `título sin la marca: "${title}"`);
  if (!canonical) fail(path, "sin canonical");
  else if (!canonical.endsWith(path === "/" ? "" : path)) fail(path, `canonical inesperado: ${canonical}`);
  if (h1 !== 1) fail(path, `${h1} etiquetas h1 (debe haber una)`);
  if (/noindex/.test(robots)) fail(path, "tiene noindex pero está en el sitemap");
  if (blocks.length === 0) fail(path, "sin JSON-LD");
  for (const b of blocks) {
    try {
      JSON.parse(b.replace(/\\u003c/g, "<"));
    } catch {
      fail(path, "JSON-LD inválido");
    }
  }
}

const sitemap = await get("/sitemap.xml");
if (sitemap.status !== 200) fail("/sitemap.xml", `HTTP ${sitemap.status}`);
const urls = [...sitemap.text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(/^https?:\/\/[^/]+/, "") || "/");
if (urls.length < 20) fail("/sitemap.xml", `solo ${urls.length} URLs (se esperaban 20 o más)`);

for (const path of urls) {
  const { status, text } = await get(path);
  if (status !== 200) {
    fail(path, `HTTP ${status}`);
    continue;
  }
  checkPage(path, text);
  collectResources(path, text);
}

for (const path of ["/testimonios", "/blog"]) {
  const { status, text } = await get(path);
  if (status !== 200) fail(path, `HTTP ${status}`);
  else if (!/<meta name="robots" content="[^"]*noindex/.test(text)) fail(path, "debería tener noindex");
  collectResources(path, text);
}

const robots = await get("/robots.txt");
if (robots.status !== 200 || !/Sitemap:/i.test(robots.text)) fail("/robots.txt", "falta o no cita el sitemap");

// El optimizador de imágenes de Next guarda copias en caché, así que /_next/image puede responder 200
// aunque el archivo original ya no exista. Por eso también se comprueba el archivo original.
const toCheck = new Map();
for (const [resource, pages] of resources) {
  toCheck.set(resource, pages);
  if (resource.startsWith("/_next/image")) {
    const original = new URL(resource, "http://x").searchParams.get("url");
    if (original?.startsWith("/")) toCheck.set(original, pages);
  }
}
for (const [resource, pages] of toCheck) {
  const { status } = await get(resource);
  if (status !== 200) fail(resource, `HTTP ${status} (usado en ${[...new Set(pages)].slice(0, 3).join(", ")})`);
}

console.log(`Páginas del sitemap: ${urls.length} · recursos locales comprobados: ${toCheck.size}`);
if (problems.length) {
  console.error(`\n${problems.length} problema(s):\n- ${problems.join("\n- ")}`);
  process.exit(1);
}
console.log("Rastreo de humo correcto.");
