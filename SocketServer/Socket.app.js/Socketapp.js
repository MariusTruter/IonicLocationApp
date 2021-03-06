// app.js
var express = require('express');  
var app = express();  
var server = require('http').createServer(app);  
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/node_modules'));  
app.get('/', function(req, res,next) {  
    res.sendFile(__dirname + '/home.page.html');
});
io.on('connection', function(client) {
    console.log('Location connected...');
    client.on('join', function(data) {
       console.log(data);
    });
});
server.listen(4200);