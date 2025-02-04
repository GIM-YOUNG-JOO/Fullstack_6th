function main(response) {
    console.log('main');

    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.write('Main Page');
    response.end();
}

function login(response) {
    console.log('login');

    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.write('Login Page');
    response.end();
}

function homework(response) {
    console.log('숙제임');

    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.write('<h1>김영주</h1>');
    response.end();
}

let handle = {};

handle['/'] = main;
handle['/login'] = login;
handle['/김영주'] = homework;


exports.handle = handle;