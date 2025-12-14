export default {
  fetch(request) {
    return new Response("Hello from Cloudflare Worker!", {
      headers: { "content-type": "text/plain" }
    });
  }
};
