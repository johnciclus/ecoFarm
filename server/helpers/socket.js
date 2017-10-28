(function () {
    "use strict";
    module.exports = function (io) {
        const socket = io.of("/");

        socket.on("connection", function (socket) {
            process.stdout.write("\nSocket connected\n");

            socket.once("disconnect", function () {
                process.stdout.write(`\n${io.engine.clientsCount} Clients connected after this exit\n`);
            });

            socket.on("requestQuery", function (payload) {
                console.log(payload);
                socket.emit("test", {"testing": "OK"});
            })
        });
    }
}());