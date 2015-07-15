var express = require('express');
var router = express.Router();
var path = require('path');
var http = require('http');
var io = require('socket.io')(http);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/views/index.html'));
});

io.on('connection', function(socket) {
  console.log('a user connected here!');
  socket.on('chat message', function (msg){
    io.emit('chat message', msg);
    console.log('message:' + msg);
  });
  socket.on('disconnect', function() {
    console.log('user out... disconnected');
  });
});

//http.listen(3000, function(){
//  console.log('listening on *:3000');
//});

console.log ("Index js ran!");

module.exports = router;
