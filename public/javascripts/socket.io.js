



$( document ).ready(function() {

    //http://stackoverflow.com/questions/11653237/socket-io-failed-to-load-resource
    // code allows for local server to run on multiple computers??

    //var host = window.location.hostname;
    //var socket = io.connect('http://' + host);

    var socket = io.connect('http://localhost3000');

    $('form').submit(function(e){
        socket.emit('chat message', $('#me').val());
        $('#me').val('');
        return false;
    });

    socket.on('chat message', function(msg){
        var li = '<li>text(msg)</li>';
        $('#messages').append($('<li>').text(msg));
        $('#messages').append(li);
        console.log('Enter - socket.on');
    });
});