(function () {
    "use strict";
    const express = require("express");
    const engines = require("consolidate");
    const app = express();
    const server = require("http").createServer(app);
    const io = require("socket.io")(server);
    const bodyParser = require("body-parser");
    const appPort = 6009;

    app.engine("html", engines.ejs);
    app.set("view engine", "ejs");
    app.set("views", __dirname + "/client");
    app.use(express.static(__dirname + "/client"));
    app.use(bodyParser.json({
        "limit": "50mb"
    }));
    app.use(bodyParser.urlencoded({
        "extended": true,
        "limit": "10mb"
    }));
    require("./server/helpers/socket")(io);
    require("./server/routes/index")(app);

    server.listen(appPort, function () {
        process.stdout.write(["Server running on port:", appPort].join(" "));
    });

}());