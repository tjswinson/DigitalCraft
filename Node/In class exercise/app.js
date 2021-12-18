let ejs = require('ejs');


const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;

const express = require('express');
const app = express();
const data = {name: 'Tiffany',
hobbies:['learning code', 'travel', 'reading']}

//const server = http.createServer(app);
app.set("view engine", "ejs");

//server.listen(port, hostname, () => {
    //console.log(`Server running at http://${hostname}:${port}/`);
//});
app.get('/', (req, res) =>{
    res.render('home', {data:data});
});

const server = app.listen(4000, function(){

    console.log('listening to port 4000')

});
