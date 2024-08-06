const express = require('express')
var cors = requeri('cors')
const app = express()
const porta = 1000

app.use(cors())

app.get('/', (resq, res)) => {
    console.log('resquest.url', request.url)//debug
    console.log('request.params.id', resquest.params.id)

    //COMMECO DO CODIGO BRABO
    const mysql = require('mysql2');

    //Conecte-se conexão com o bancos de doas
    const connection = mysql.createConnection({
            host:'localhost',
            user: 'root',
            password:'',
            database: 'dc'
        });
}

// Conecte-se ao banco de dados
connection.connect((err) => {
    if (err) {
        return console.error('Erro ao conectar: ' + err.stack);
    }
    console.log('Conecte com id ' + connetion.threadId);
})
