function route(pathname, handle, response) {
    console.log('pathname : ' + pathname);

    if (typeof handle[pathname] == "function") {
        handle[pathname](response);
    } else {
        response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        response.write('error');
        response.end();
    }

}

exports.route = route;