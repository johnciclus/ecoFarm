(function () {
    "use strict";

    console.log("test");
    var socket = io();

    socket.emit('requestQuery', {"msg": "xxx"});

    socket.on('test', function(msg){
        console.log(msg);
    });
}());