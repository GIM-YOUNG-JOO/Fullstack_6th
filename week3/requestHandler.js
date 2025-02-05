const fs = require('fs');
const main_view = fs.readFileSync('web/main.html', 'utf-8');

const mariadb = require('./database/connect/mariadb');

function main(response) {
    console.log('main');

    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.write(main_view);
    response.end();
}

function join(response, id, password) {
    console.log('order');

    mariadb.query("INSERT INTO account VALUES (" + id + ", " + password + ")")
        .then(rows => {
            console.log(rows);
        })
        .catch(err => {
            console.error(err);
        });

    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.write(account_view);
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