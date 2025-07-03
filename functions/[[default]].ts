export async function onRequest(context) {
  const { request, env } = context;
  const base = env.TARGET_URL || "https://generativelanguage.googleapis.com";
  const url = new URL(request.url);
  // 拼接目标地址
  const target = new URL(url.pathname + url.search, base);

  // 转发请求
  const resp = await fetch(target.toString(), {
    method: request.method,
    headers: request.headers,
    body: request.method === "GET" || request.method === "HEAD" ? undefined : request.body,
    redirect: "follow"
  });

  // 可选：加 CORS
  const newHeaders = new Headers(resp.headers);
  newHeaders.set("Access-Control-Allow-Origin", "*");

  return new Response(resp.body, {
    status: resp.status,
    statusText: resp.statusText,
    headers: newHeaders
  });
} 
