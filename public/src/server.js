const express = require("express");
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");

const server = express();
const liveReloadServer = livereload.createServer();
const path = require('path');
const publicPath = path.join(__dirname, '../public');
server.use(connectLiveReload());
server.use(express.static('public'));

liveReloadServer.watch('public');

const port = 8712;

server.listen(port, function () {
    console.log(`Server is listening to the port: ${port}`);
});