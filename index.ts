const port = 3000;
Bun.serve({
  port,
  development: true,
  fetch: async (request) => {
    const url = new URL(request.url);
    const path = url.pathname;
    if (path.endsWith(".js")) {
      const module = Bun.file(path.slice(1));
      return new Response(module, {
        headers: {
          "Content-Type": "application/javascript",
        },
      });
    }
    const html = Bun.file("index.html");
    return new Response(html, {
      headers: {
        "Content-Type": "text/html",
      },
    });
  },
});

console.log(`server started on port ${port}`);
