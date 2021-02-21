import { ServerRequest, Response } from "https://deno.land/std@0.87.0/http/server.ts";

class CodeRouter {
    private url_regexp: RegExp = new RegExp('')
    private type: 'POST'|'GET' = 'GET'
    private method: (req: ServerRequest) => Promise<Response> = function (req: ServerRequest) { return new Promise(()=>{}) }
    constructor({ url_regexp, type, method }: { url_regexp: RegExp; type: 'POST' | 'GET'; method: (req: ServerRequest) => Promise<Response> } ) {
        this.url_regexp = url_regexp
        this.type = type
        this.method = method
    }
}

new CodeRouter({
    url_regexp: RegExp('index/*'),
    type: 'GET',
    method: async (req: ServerRequest) => {
        return new Response('result')
    }
})