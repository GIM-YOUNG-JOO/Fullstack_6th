const http = require('http');
const url = require('url');

function start(route, handle) {
    function onRequest(request, response) {
        let pathname = url.parse(request.url).pathname;
        if (pathname !== "/favicon.ico") {
            let queryData = url.parse(request.url, true).query;

            route(pathname, handle, response, queryData.id, queryData.password);
        }
    }

    http.createServer(onRequest).listen(8888); //localhost:8888
}

exports.start = start;