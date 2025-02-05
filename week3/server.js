const http = require('http');
const url = require('url');

function start(route, handle) {
    function onRequest(request, response) {
        let pathname = url.parse(request.url).pathname;
        if (pathname !== "/favicon.ico") {
            let temp = decodeURIComponent(pathname);
            temp === pathname ? route(pathname, handle, response) : route(temp, handle, response);
        }
    }

    http.createServer(onRequest).listen(8888); //localhost:8888
}

exports.start = start;