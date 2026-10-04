import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { posts, readingMinutes } from "../src/lib/posts.ts";

const servicesSource = readFileSync(new URL("../src/lib/services.ts", import.meta.url), "utf8");

test("los slugs de los artículos son únicos y válidos para URL", () => {
  const slugs = posts.map((p) => p.slug);
  assert.equal(new Set(slugs).size, slugs.length);
  for (const s of slugs) assert.match(s, /^[a-z0-9]+(-[a-z0-9]+)*$/);
});

test("cada artículo tiene título, descripción de hasta 160 caracteres y fecha válida", () => {
  for (const p of posts) {
    assert.ok(p.title.length > 10, p.slug);
    assert.ok(p.description.length <= 160, `${p.slug}: descripción de ${p.description.length} caracteres`);
    assert.ok(!Number.isNaN(Date.parse(p.date)), p.slug);
    assert.ok(readingMinutes(p) >= 1, p.slug);
  }
});

test("los servicios que enlaza cada artículo existen", () => {
  for (const p of posts) {
    for (const s of p.serviceSlugs) {
      assert.ok(servicesSource.includes(`"${s}"`), `${p.slug} enlaza a un servicio inexistente: ${s}`);
    }
  }
});

test("los artículos no contienen cifras de resultados ni promesas de curación", () => {
  const text = posts.flatMap((p) => p.body.map((b) => (b.type === "ul" ? b.items.join(" ") : b.text))).join(" ").toLowerCase();
  for (const banned of [/\bcura\b/, /\bcurar\b/, /\bcurarte\b/, /100\s?%/, /cáncer/]) {
    assert.ok(!banned.test(text), `contiene ${banned}`);
  }
});
