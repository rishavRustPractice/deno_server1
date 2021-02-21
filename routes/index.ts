import { ServerRequest } from "https://deno.land/std@0.87.0/http/server.ts";

var router = []

export function routes(req:ServerRequest) {
    req.url
    req.respond(
        {
            body: 'default'
        }
    )
}