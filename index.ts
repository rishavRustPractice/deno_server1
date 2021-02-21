import { serve, Server } from "https://deno.land/std@0.87.0/http/server.ts";
import { routes } from './routes/index.ts'
const server:Server = serve({ port: 8000 });
console.log("http://localhost:8000/");
for await (const req of server) {
  routes(req)
}