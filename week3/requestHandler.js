const fs = require('fs');
const main_view = fs.readFileSync('web/main.html', 'utf-8');
const account_view = fs.readFileSync('web/accountlist.html', 'utf-8');

const mariadb = require('./database/connect/mariadb');

function main(response) {
    console.log('main');

    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.write(main_view);
    response.end();
}

function join(response, id, password) {
    console.log('order');

    mariadb.query("INSERT INTO account VALUES ('" + id + "', '" + password + "')")
        .then(rows => {
            console.log(rows);
        })
        .catch(err => {
            console.error(err);
        });

    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.write(main_view);
    response.end();
}

function account(response) {
    console.log('account');

    response.write(account_view);

    mariadb.query("SELECT * FROM account")
        .then(rows => {
            console.log(rows);

            rows.forEach(element => {
                response.write("<tr>"
                    + "<td>" + element.id + "</td>"
                    + "<td>" + element.password + "</td>"
                    + "</tr>");
            });
            response.write("</table>");
            response.end();
        })
        .catch(err => {
            console.error(err);
        });
}

let handle = {};

handle['/'] = main;
handle['/join'] = join;
handle['/account'] = account;


exports.handle = handle;