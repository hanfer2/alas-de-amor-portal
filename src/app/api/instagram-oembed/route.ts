export const runtime = "nodejs";

function stripUnsafeHtml(html: string): string {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<script\b[^>]*\/>/gi, "")
    .replace(/<iframe\b[^>]*>[\s\S]*?<\/iframe>/gi, "")
    .replace(/<iframe\b[^>]*\/>/gi, "")
    .replace(/<link\b[^>]*\/?>/gi, "")
    .trim();
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const rawUrl = searchParams.get("url");

  if (!rawUrl) {
    return Response.json({ error: "missing url" }, { status: 400 });
  }

  let parsed: URL;
  try {
    parsed = new URL(rawUrl);
  } catch {
    return Response.json({ error: "invalid url" }, { status: 400 });
  }

  if (parsed.protocol !== "https:") {
    return Response.json({ error: "invalid url" }, { status: 400 });
  }

  const host = parsed.hostname.replace(/^www\./, "");
  if (host !== "instagram.com") {
    return Response.json({ error: "invalid url" }, { status: 400 });
  }

  if (!/^\/(p|reel|tv)\/[A-Za-z0-9_-]+/.test(parsed.pathname)) {
    return Response.json({ error: "invalid url" }, { status: 400 });
  }

  const upstream = `https://graph.facebook.com/v25.0/instagram_oembed?url=${encodeURIComponent(rawUrl)}`;

  let res: Response;
  try {
    res = await fetch(upstream, {
      headers: { Accept: "application/json" },
      next: { revalidate: 86400 },
    });
  } catch {
    return Response.json({ error: "upstream unreachable" }, { status: 502 });
  }

  if (!res.ok) {
    return Response.json({ error: "instagram oembed failed" }, { status: 502 });
  }

  let data: { html?: string; author_name?: string; author_url?: string };
  try {
    data = await res.json();
  } catch {
    return Response.json({ error: "invalid upstream response" }, { status: 502 });
  }

  if (typeof data.html !== "string" || data.html.length === 0) {
    return Response.json({ error: "empty embed html" }, { status: 502 });
  }

  const html = stripUnsafeHtml(data.html);

  return Response.json(
    {
      html,
      author_name: typeof data.author_name === "string" ? data.author_name : "",
      author_url: typeof data.author_url === "string" ? data.author_url : "",
    },
    {
      status: 200,
      headers: { "Content-Type": "application/json; charset=utf-8" },
    }
  );
}