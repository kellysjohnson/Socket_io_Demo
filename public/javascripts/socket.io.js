//
//var socket = io().connect('http://localhost:3000');
//
//$('form').submit(function(){
//    socket.emit('chat message', $('#me').val());
//    $('#me').val('');
//    return false;
//});



$( document ).ready(function() {
    var socket = io();

    $('form').submit(function(e){
        socket.emit('chat message', $('#me').val());
        $('#me').val('');
        return false;
    });

    socket.on('chat message', function(msg){
        var li = '<li>text(msg)</li>';
        $('#messages').append($('<li>').text(msg));
        //$('#messages').append(li);
        console.log('Enter - socket.on');
    });
});