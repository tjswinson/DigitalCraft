const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();

const server = http.createServer(app);
const myMusic = require('./db');
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});



app.get('/', (req, res) =>{
    res.send('Hello from Express!');
});

app.get('/myMusic', (req, res) => {
    res.send('This will be the Music info');
});


//res.send('Hello World');
//});
//app.post('/', (req, res) => {
    // ...handle the data submitted in the form
//});



