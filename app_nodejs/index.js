const express = require(`express`);
const app = express();
const port = 3000;
const config = {
    host: 'db_mysql',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql');
const connection = mysql.createConnection(config);
connection.connect();
const sql = `insert into people(name) values ('Renato')`;
connection.query(sql);
connection.end();

app.get('/', (req, res) => {
    const connection = mysql.createConnection(config);
    connection.connect();
    const sqlSelect = `select name from people`;
    connection.query(sqlSelect, (err, results, fields) => {
        if (err) {
            connection.end();
            return res.send('Erro ao recuperar dados: ' + err.message);
        }

        let html = '<h1>Full Cycle</h1>';
        html += '<ul>';
        results.forEach(row => {
            html += `<li>${row.name}</li>`;
        });

        html += '</ul>';
        connection.end();
        res.send(html);
    });
});

app.listen(port, () => {
    console.log('rodando na porta ' + port)
});