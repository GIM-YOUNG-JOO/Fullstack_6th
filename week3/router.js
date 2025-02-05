function route(pathname, handle, response, id, password) {
    console.log('pathname : ' + pathname);

    if (typeof handle[pathname] == "function") {
        handle[pathname](response, id, password);
    } else {
        response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        response.write('error');
        response.end();
    }

}

exports.route = route;