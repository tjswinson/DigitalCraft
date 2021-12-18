const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();

const server = http.createServer(app);
const db = require('./db');

app.get('/friends', (req, res) => {
    let htmlString = ``;
    htmlString += `<li>${friend}</li;
        res.send(htmlString);
        for (let i=0; i<db.length; i++){
            let friend = db{i};
        }
            //`<ul>
    //<li>Becca</li>
    //<li>Jeff</li>
    //<li>Josh</li>
    //<li>Tiffany</li>
  //  `);
  app.get('/friends/:handle', (req, res) => {
  / const {handle} = req.params;
    const friend = db.find(f => f.handle === handle);
    res.send(`<h1>${friend.handle}</h1>`)
});
});
app.listen(3000, function() {
    console.log('listening')
});