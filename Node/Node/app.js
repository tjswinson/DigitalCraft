const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const express = require('express');
const { Server } = require('http');
const { hostname } = require('os');

const app = express();

//app.use(express.static('public'));


app.get('/',(req, res) => {
    res.send("Hello world!")
});
app.get('/cats' (req, res) => {
    res.send(`Meow`);
});

app.get('/dogs',(req, res) => {
    res.send(`Woof!`);
});

app.get('/cat_and_dogs',(req, res) => {
    res.send(`Dogs and cats living together...mass hysteria!!`);
});

Server.listen(port, hostname, () => {
    console.log(`Server running at http;`)
})

//app.listen(3000, function(){
  //  console.log("yay! it's working!")
    //});