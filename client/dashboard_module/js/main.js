(function () {
	"use strict";
    let io = window.io;
    let socket = io();

    socket.emit("requestQuery", {"msg": "xxx"});

    socket.on("test", function(msg){
        console.log(msg);
    });
}());