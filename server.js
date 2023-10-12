var o=Bun.serve({port:3000,fetch(t){return new Response("Welcome to Bun!")}});console.log(`Listening on localhost:${o.port}`);
